#!/usr/bin/env node
/**
 * survey.js — roll star systems for the DM's chart, and keep the ones you keep.
 *
 *   node scripts/survey.js roll [options]       roll a system and print it (nothing saved)
 *   node scripts/survey.js roll --save [opts]   roll it and save it to the survey
 *   node scripts/survey.js list                 every saved system
 *   node scripts/survey.js show <designation>   one saved system in full
 *   node scripts/survey.js chart <body>         chart a saved body: give it its letter or numeral
 *   node scripts/survey.js check                verify the survey file
 *
 * Roll options:
 *   --seed N        roll the same system again (every roll prints its seed)
 *   --sphere ID     SPH-01 (default) … SPH-05; other spheres roll uncharted
 *   --name TEXT     a proper name for the primary, if someone has named it
 *   --bodies N      how many bodies orbit the primary (default 3 to 9)
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

// ── tables ─────────────────────────────────────────────────────────────────
// [weight, value]. Edit freely; a weight of 0 removes an entry.
const T = {
  primary: [[28, 'yellow star'], [20, 'red dwarf'], [10, 'white star'], [8, 'red giant'], [5, 'blue giant'],
    [10, 'binary pair'], [7, 'white dwarf, a cinder of a star'], [5, 'elemental fire body'],
    [3, 'a world at the centre, the star circling it'], [2, 'black hole'], [2, 'something that should not shine']],
  kind: [[56, 'planet'], [12, 'asteroid belt'], [8, 'cluster of floating bodies'], [6, 'comet'],
    [6, 'nebula or cloud'], [5, 'giant of air'], [4, 'wreck large enough to chart'], [3, 'titanic remains']],
  shape: [[70, 'sphere'], [6, 'disk'], [6, 'shards'], [4, 'torus'], [4, 'hollow sphere'], [3, 'ribbon'],
    [3, 'irregular'], [2, 'cube or other solid'], [2, 'a shape that changes']],
  composition: [[40, 'earth'], [15, 'air'], [15, 'water'], [12, 'fire'], [8, 'life'], [10, 'mixed']],
  size: [[15, 'tiny'], [30, 'small'], [30, 'medium'], [18, 'large'], [7, 'huge']],
  habitability: [[20, 'livable'], [30, 'livable with protection'], [50, 'hostile']],
  life: [[45, 'none'], [25, 'benign'], [18, 'hostile'], [12, 'infestation']],
  inhabitants: {
    'livable': [[58, 'none'], [12, 'ruins'], [10, 'outpost'], [12, 'settlement'], [8, 'civilization']],
    'livable with protection': [[80, 'none'], [10, 'ruins'], [8, 'outpost'], [2, 'settlement']],
    'hostile': [[90, 'none'], [7, 'ruins'], [3, 'outpost']]
  },
  hazard: [[50, null], [5, 'aether storms'], [5, 'gravity shear'], [5, 'crushing atmosphere'],
    [5, 'elemental storms'], [4, 'wild magic'], [3, 'dead magic'], [4, 'psychic static'],
    [4, 'sargasso of debris'], [4, 'unstable orbit'], [4, 'corrosive air'], [3, 'color pools nearby']],
  oddity: [[70, null], [4, 'a wreck in orbit'], [3, 'an abandoned station'], [3, 'a signal on repeat'],
    [3, 'crystalline growth'], [3, 'a petrified leviathan'], [2, 'gravity runs the wrong way'],
    [3, 'a storm that never ends'], [2, 'time slips near it'], [2, 'it sings'], [2, 'old bones of something vast'],
    [3, 'ruins older than anyone can date']],
  status: {
    near: [[25, 'charted'], [30, 'surveyed'], [35, 'sighted'], [10, 'uncharted']],
    far: [[100, 'uncharted']]
  }
};
const STATUSES = ['uncharted', 'sighted', 'surveyed', 'charted'];
const GREEK = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa',
  'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega'];
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

// ── dice ───────────────────────────────────────────────────────────────────
function rng(seed) { // mulberry32: same seed, same system
  let a = seed >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const pick = (r, table) => { const sum = table.reduce((s, [w]) => s + w, 0); let n = r() * sum;
  for (const [w, v] of table) { if ((n -= w) < 0) return v; } return table[table.length - 1][1]; };
const int = (r, lo, hi) => lo + Math.floor(r() * (hi - lo + 1));

// ── the survey file ────────────────────────────────────────────────────────
function load() {
  if (!fs.existsSync(FILE)) throw new Error(`${FILE} is missing`);
  return JSON.parse(fs.readFileSync(FILE, 'utf8'));
}
function save(s) { fs.writeFileSync(FILE, JSON.stringify(s, null, 2) + '\n'); }

// ── rolling ────────────────────────────────────────────────────────────────
function rollBody(r, near) {
  const kind = pick(r, T.kind);
  const b = { designation: null, name: null, kind, status: pick(r, near ? T.status.near : T.status.far) };
  if (kind === 'planet' || kind === 'cluster of floating bodies' || kind === 'giant of air') {
    b.shape = kind === 'planet' ? pick(r, T.shape) : kind === 'giant of air' ? 'sphere' : 'cluster';
    b.composition = kind === 'giant of air' ? 'air' : pick(r, T.composition);
    b.size = kind === 'giant of air' ? pick(r, [[1, 'large'], [1, 'huge']]) : pick(r, T.size);
    let hab = pick(r, T.habitability);
    if (b.composition === 'fire' && hab !== 'hostile') hab = pick(r, [[3, 'hostile'], [1, hab]]);
    if (b.size === 'tiny' && hab === 'livable') hab = 'livable with protection';
    b.habitability = hab;
    b.life = hab === 'hostile' ? pick(r, [[70, 'none'], [10, 'benign'], [12, 'hostile'], [8, 'infestation']]) : pick(r, T.life);
    b.inhabitants = pick(r, T.inhabitants[hab]);
  } else {
    b.life = pick(r, [[85, 'none'], [5, 'benign'], [5, 'hostile'], [5, 'infestation']]);
    b.inhabitants = pick(r, [[90, 'none'], [6, 'ruins'], [4, 'outpost']]);
  }
  if (kind === 'comet') b.returns = r() < 0.5;
  b.hazard = pick(r, T.hazard);
  b.oddity = pick(r, T.oddity);
  const moons = kind !== 'planet' ? 0 : b.size === 'huge' ? int(r, 1, 5) : b.size === 'large' ? int(r, 0, 3) : b.size === 'medium' ? int(r, 0, 2) : 0;
  b.moons = [];
  for (let i = 0; i < moons; i++) {
    const m = { designation: null, name: null, kind: 'moon', status: b.status === 'uncharted' ? 'uncharted' : pick(r, near ? T.status.near : T.status.far),
      composition: pick(r, T.composition), size: pick(r, [[50, 'tiny'], [35, 'small'], [15, 'medium']]) };
    m.habitability = pick(r, [[8, 'livable'], [27, 'livable with protection'], [65, 'hostile']]);
    m.life = m.habitability === 'hostile' ? pick(r, [[80, 'none'], [10, 'hostile'], [10, 'infestation']]) : pick(r, T.life);
    m.inhabitants = pick(r, T.inhabitants[m.habitability]);
    m.hazard = pick(r, T.hazard);
    b.moons.push(m);
  }
  if (!b.moons.length) delete b.moons;
  ['hazard', 'oddity'].forEach(k => { if (b[k] == null) delete b[k]; });
  return b;
}

function used(survey) {
  const nums = new Set(), bayer = new Set();
  survey.systems.forEach(s => { if (s.catalogue) nums.add(s.catalogue); if (s.bayer) bayer.add(s.bayer); });
  return { nums, bayer };
}

function roll(survey, opts) {
  const seed = opts.seed != null ? Number(opts.seed) : Math.floor(Math.random() * 2 ** 31);
  const r = rng(seed);
  const sphere = (opts.sphere || 'SPH-01').toUpperCase();
  const sph = survey.spheres.find(s => s.id === sphere);
  if (!sph) throw new Error(`unknown sphere ${sphere}`);
  const near = sph.home === true;
  const { nums, bayer } = used(survey);
  const sys = { id: null, sphere, seed, catalogue: null, bayer: null, bearing: null, name: opts.name || null,
    primary: pick(r, T.primary), status: near ? pick(r, [[30, 'charted'], [40, 'surveyed'], [30, 'sighted']]) : 'uncharted',
    bodies: [], notes: '' };
  if (near) { // Caelestis catalogues what it can see; other spheres it barely knows
    let n; do { n = int(r, 1000, 99999); } while (nums.has(n));
    sys.catalogue = n;
    sys.bearing = int(r, 0, 359);
    const con = `CON-${String(sys.bearing).padStart(3, '0')}`;
    const free = GREEK.filter(g => !bayer.has(`${g} ${con}`));
    if (free.length) sys.bayer = `${free[Math.min(free.length - 1, Math.floor(r() * r() * free.length))]} ${con}`;
  }
  const count = opts.bodies != null ? Number(opts.bodies) : int(r, 1, 4) + int(r, 1, 4) + 1;
  for (let i = 0; i < count; i++) sys.bodies.push(rollBody(r, near));
  sys.id = sys.catalogue ? `CSC ${sys.catalogue}` : `${sphere}-U${seed}`;
  designate(sys, survey.year);
  return sys;
}

// Letters go to bodies in the order Caelestis charted them, which need not be
// the order they orbit. A roll letters what it charts; `chart` letters the rest
// as play reaches them, so later letters can sit anywhere in the orbit.
function designate(sys, year) {
  const base = sys.name || sys.id;
  const letters = 'bcdefghijklmnopqrstuvwxyz';
  const takenL = new Set(sys.bodies.map(b => b.letter).filter(Boolean));
  sys.bodies.forEach((b, i) => {
    if (b.status === 'uncharted' || b.letter) return;
    if (b.kind === 'comet') {
      b.designation = b.designation || `${b.returns ? 'P' : 'C'}/${year} ${'ABCDEFGHJKLMNOPQRSTUVWXY'[i % 24]}${i + 1}`;
      return;
    }
    const l = [...letters].find(c => !takenL.has(c)); takenL.add(l); b.letter = l;
  });
  sys.bodies.forEach(b => {
    if (b.letter) b.designation = `${base} ${b.letter}`;
    (b.moons || []).forEach((m, i) => {
      if (m.status === 'uncharted' || !b.letter) return;
      if (!m.numeral) m.numeral = ROMAN[(b.moons.filter(x => x.numeral).length)] || String(i + 1);
      m.designation = `${base} ${b.letter} ${m.numeral}`;
    });
  });
}

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
  console.log(`${title}\n  ${sys.primary} · ${sys.sphere}${sys.bearing != null ? ` · bearing ${sys.bearing}°` : ''} · ${sys.status} · seed ${sys.seed}`);
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
  if (!Array.isArray(survey.spheres) || !Array.isArray(survey.systems)) errs.push('needs "spheres" and "systems" lists');
  const ids = new Set();
  (survey.systems || []).forEach(s => {
    if (ids.has(s.id)) errs.push(`${s.id}: duplicate`); ids.add(s.id);
    if (!survey.spheres.some(p => p.id === s.sphere)) errs.push(`${s.id}: unknown sphere ${s.sphere}`);
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
    survey.systems.forEach(s => console.log(`${s.id.padEnd(14)} ${(s.name || '').padEnd(16)} ${s.sphere} · ${s.primary} · ${s.bodies.length} bodies · ${s.status}`));
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
  } else if (cmd === 'check') {
    const errs = check(survey);
    errs.forEach(e => console.log('error: ' + e));
    console.log(`${survey.systems.length} systems · ${errs.length} errors`);
    process.exitCode = errs.length ? 1 : 0;
  } else {
    console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(2, 18).map(l => l.replace(/^ \*\s?/, '')).join('\n'));
  }
}
try { main(); } catch (e) { console.error('survey: ' + e.message); process.exitCode = 1; }
