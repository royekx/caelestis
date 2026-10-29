#!/usr/bin/env node
/**
 * survey.js — roll star systems for the DM's chart, and keep the ones you keep.
 *
 *   node scripts/survey.js roll [options]       roll a system and print it (nothing saved)
 *   node scripts/survey.js roll --save [opts]   roll it and save it to the survey
 *   node scripts/survey.js list                 every saved system
 *   node scripts/survey.js show <designation>   one saved system in full
 *   node scripts/survey.js chart <body>         chart a saved body: give it its letter or numeral
 *   node scripts/survey.js catalogue <system> --seed N
 *                                               give a saved system with no CSC number one, as
 *                                               `roll --seed N` would roll it (its bodies stay)
 *   node scripts/survey.js check                verify the survey file
 *
 * Roll options:
 *   --seed N        roll the same system again (every roll prints its seed)
 *   --galaxy ID     GAL-01 (default) … GAL-05; other galaxies roll uncharted
 *   --name TEXT     a proper name for the primary, if someone has named it
 *   --bodies N      how many bodies orbit the primary (default 3 to 9)
 *
 * The tables and rolls are in prime/chart/survey-core.js, shared with the
 * Chart, which rolls its unnamed systems by seed the same way.
 *
 * The survey lives in prime/data/survey.json. It is DM material and never
 * reaches data/ or a player page. A saved system is the record: edit it by hand
 * as play fills it in. A roll never overwrites anything saved. This script
 * writes no page.
 *
 * Designations follow real astronomy (prime/working/STAGING.md § Designations):
 *   star      CSC 48213, or Alpha CON-312 by brightness within its constellation
 *   planet    CSC 48213 b, c, d … in the order Caelestis charted them
 *   moon      CSC 48213 c II … in the order charted
 *   comet     P/1490 K2 (returns) or C/1490 K2 (passes once)
 * A body nobody has charted has no letter yet. `chart` gives it the next one.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.resolve(__dirname, '..', 'prime', 'data', 'survey.json');

// ── tables, dice and rolls: shared with the Chart (prime/chart/survey-core.js) ──
const { T, STATUSES, rng, roll, designate } = require('../prime/chart/survey-core.js');

// ── the survey file ────────────────────────────────────────────────────────
function load() {
  if (!fs.existsSync(FILE)) throw new Error(`${FILE} is missing`);
  return JSON.parse(fs.readFileSync(FILE, 'utf8'));
}
function save(s) { fs.writeFileSync(FILE, JSON.stringify(s, null, 2) + '\n'); }

// ── printing ───────────────────────────────────────────────────────────────
function line(b, indent) {
  const label = b.name ? `${b.name} (${b.designation || 'uncharted'})` : (b.designation || '(uncharted)');
  const bits = [b.kind, b.size, b.shape && !['sphere', 'cluster'].includes(b.shape) ? b.shape : null, b.composition ? `${b.composition} body` : null]
    .filter(Boolean).join(', ');
  const out = [`${indent}${label} · ${bits}`];
  const facts = [b.habitability, b.life !== 'none' ? `life: ${b.life}` : 'lifeless',
    b.inhabitants !== 'none' ? `inhabited: ${b.inhabitants}` : null, b.status].filter(Boolean).join(' · ');
  out.push(`${indent}  ${facts}`);
  if (b.hazard) out.push(`${indent}  hazard: ${b.hazard}`);
  if (b.oddity) out.push(`${indent}  oddity: ${b.oddity}`);
  (b.moons || []).forEach(m => out.push(...line(m, indent + '    ')));
  return out;
}
function print(sys) {
  const title = [sys.name, sys.id, sys.bayer].filter(Boolean).join(' · ');
  console.log(`${title}\n  ${sys.primary} · ${sys.galaxy}${sys.bearing != null ? ` · bearing ${sys.bearing}°` : ''} · ${sys.status} · seed ${sys.seed}`);
  sys.bodies.forEach(b => console.log(line(b, '  ').join('\n')));
  const n = sys.bodies.length, inh = sys.bodies.filter(b => b.inhabitants && !['none', 'ruins'].includes(b.inhabitants)).length;
  console.log(`  ${n} bodies, ${inh} inhabited`);
}

// ── commands ───────────────────────────────────────────────────────────────
function args(argv) {
  const o = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--save') o.save = true;
    else if (a.startsWith('--')) o[a.slice(2)] = argv[++i];
    else o._.push(a);
  }
  return o;
}
function find(survey, q) {
  q = q.toLowerCase();
  return survey.systems.find(s => [s.id, s.name, s.bayer].filter(Boolean).some(x => x.toLowerCase() === q));
}
function check(survey) {
  const errs = [];
  if (!Array.isArray(survey.galaxies) || !Array.isArray(survey.systems)) errs.push('needs "galaxies" and "systems" lists');
  const ids = new Set();
  (survey.systems || []).forEach(s => {
    if (ids.has(s.id)) errs.push(`${s.id}: duplicate`); ids.add(s.id);
    if (!survey.galaxies.some(p => p.id === s.galaxy)) errs.push(`${s.id}: unknown galaxy ${s.galaxy}`);
    const all = s.bodies.concat(...s.bodies.map(b => b.moons || []));
    all.forEach(b => { if (!STATUSES.includes(b.status)) errs.push(`${s.id}: a body has unknown status "${b.status}"`); });
    const des = all.map(b => b.designation).filter(Boolean);
    if (new Set(des).size !== des.length) errs.push(`${s.id}: two bodies share a designation`);
  });
  return errs;
}

function main() {
  const o = args(process.argv.slice(2));
  const cmd = o._[0];
  const survey = load();
  if (cmd === 'roll') {
    const sys = roll(survey, o);
    print(sys);
    if (o.save) {
      if (survey.systems.some(s => s.id === sys.id)) throw new Error(`${sys.id} is already saved`);
      survey.systems.push(sys); save(survey);
      console.log(`saved ${sys.id} to prime/data/survey.json`);
    } else console.log(`(not saved: add --save, with --seed ${sys.seed}, to keep it)`);
  } else if (cmd === 'list') {
    if (!survey.systems.length) return console.log('no systems saved');
    survey.systems.forEach(s => console.log(`${s.id.padEnd(14)} ${(s.name || '').padEnd(16)} ${s.galaxy} · ${s.primary} · ${s.bodies.length} bodies · ${s.status}`));
  } else if (cmd === 'show') {
    const s = find(survey, o._.slice(1).join(' '));
    if (!s) throw new Error('no such system'); print(s);
  } else if (cmd === 'chart') { // chart <system> <body number, 1-based> [moon number]
    const s = find(survey, o._[1] || '');
    if (!s) throw new Error('usage: chart "<system>" <body #> [moon #]');
    const b = s.bodies[Number(o._[2]) - 1]; if (!b) throw new Error('no such body');
    const target = o._[3] ? (b.moons || [])[Number(o._[3]) - 1] : b; if (!target) throw new Error('no such moon');
    target.status = 'charted'; designate(s, survey.year); save(survey);
    console.log(`charted: ${target.designation}`);
  } else if (cmd === 'catalogue') { // catalogue <system> --seed N
    const s = find(survey, o._.slice(1).join(' '));
    if (!s) throw new Error('usage: catalogue "<system>" --seed N');
    if (s.catalogue) throw new Error(`${s.name || s.id} already has CSC ${s.catalogue}`);
    if (o.seed == null) throw new Error('give a --seed, so the number can be rolled again');
    const r = roll(survey, { seed: o.seed, galaxy: s.galaxy, name: s.name });
    if (!r.catalogue) throw new Error(`${s.galaxy} rolls no catalogue number`);
    // Bearings and Bayer names are read from Realmspace, so the home system takes neither.
    Object.assign(s, { seed: r.seed, catalogue: r.catalogue });
    if (!s.home) Object.assign(s, { bayer: s.bayer || r.bayer, bearing: s.bearing != null ? s.bearing : r.bearing });
    save(survey);
    console.log(`${s.name || s.id}: CSC ${s.catalogue}${s.bayer ? ' · ' + s.bayer : ''} (seed ${s.seed})`);
  } else if (cmd === 'check') {
    const errs = check(survey);
    errs.forEach(e => console.log('error: ' + e));
    console.log(`${survey.systems.length} systems · ${errs.length} errors`);
    process.exitCode = errs.length ? 1 : 0;
  } else {
    console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(2, 21).map(l => l.replace(/^ \*\s?/, '')).join('\n'));
  }
}
try { main(); } catch (e) { console.error('survey: ' + e.message); process.exitCode = 1; }
