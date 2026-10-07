#!/usr/bin/env node
/**
 * data.js — the campaign record's three verbs.
 *
 *   node scripts/data.js derive    recompute every derived field, in place
 *   node scripts/data.js check     verify the record, the DM layer and the pages
 *   node scripts/data.js guard     the deploy's test: is data/ fit to publish
 *
 * The record is data/*.json. It is written by hand during a session run (see
 * prime/notes/SESSION-RUN.md) and it is the only place a fact is entered.
 * Pages are its rendering. This script generates no page: `derive` fills in
 * the fields that follow mechanically from the authored ones, and `check`
 * proves that the record is consistent with itself, with the DM layer under
 * prime/data/, and with the pages that display it.
 *
 * AUTHORED  id slug name number kind parentId giverId fields objectives
 *           rewards voyages seen mentioned linked
 * DERIVED   type url links parent giver children within items progress
 *           data/index.json  data/voyage.js  prime/data/dossiers.json
 *
 * A derived field is overwritten on every `derive`. Editing one by hand does
 * nothing except fail the next `check`.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'data');
const DM = path.join(ROOT, 'prime', 'data');

// ── schema ─────────────────────────────────────────────────────────────────
// The record is closed. A key is either listed here or it is an error, which
// is what makes data/ player-safe by construction: a DM fact has no key to
// sit under. Adding a field to the record means adding it to this list, in a
// commit somebody reviews.
const SETS = [
  { key: 'sessions',  file: 'sessions.json',          type: 'session',  prefix: 'SES', dir: 'voyages',
    index: 'voyages/index.html',
    fields: ['Major Events', 'Character Beats', 'New Clues / Reveals', 'NPC / Faction Movement',
      'Consequences', 'Next Session Pressure'] },
  { key: 'pcs',       file: 'player-characters.json', type: 'pc',       prefix: 'PC',  dir: 'crew-manifest',
    index: 'crew-manifest/index.html',
    fields: ['Species', 'Class', 'Specialisation', 'Station', 'Clearance', 'Player Concept (as known)',
      'Affiliation(s)', 'Personal Thread', 'Current State', 'What They Last Learned', 'Notable Items',
      'Overview (Player)', 'Status'] },
  { key: 'npcs',      file: 'npcs.json',              type: 'npc',      prefix: 'NPC', dir: 'dossiers',
    index: 'dossiers/index.html',
    fields: ['Gender', 'Affiliation(s)', 'Party Relationship', 'Role (as known)', 'Current State',
      'Overview (Player)', 'Category', 'Status'] },
  { key: 'factions',  file: 'factions.json',          type: 'faction',  prefix: 'FAO', dir: 'factions',
    index: 'factions/index.html',
    fields: ['Type', 'Party Relationship', 'Current State', 'Overview (Player)', 'Status'] },
  { key: 'locations', file: 'locations.json',         type: 'location', prefix: 'LOC', dir: 'navigation-records',
    index: 'navigation-records/index.html',
    fields: ['Type', 'Key NPCs / Factions', 'Overview (Player)', 'Status'] },
  { key: 'items',     file: 'items.json',             type: 'item',     prefix: 'ITM', dir: 'inventory/entries',
    index: 'inventory/index.html',
    fields: ['Type', 'Held By', 'Origin', 'Overview (Player)', 'Status', 'Class', 'Item Type', 'Rarity'] },
  { key: 'quests',    file: 'quests.json',            type: 'quest',    prefix: 'QST', dir: 'quests',
    index: 'quests/index.html',
    fields: ['Type', 'Related Character(s)', 'Current State', 'Overview (Player)', 'Status'] }
];

const AUTHORED = ['id', 'slug', 'name', 'number', 'kind', 'parentId', 'giverId', 'fields',
  'objectives', 'rewards', 'voyages', 'seen', 'mentioned', 'linked'];
const DERIVED = ['type', 'url', 'links', 'parent', 'giver', 'children', 'within', 'items', 'progress'];
// The order keys are written in. Authored first, derived last, so a diff of a
// session run reads top-down as "what was entered" then "what followed".
const KEY_ORDER = ['id', 'type', 'slug', 'name', 'number', 'kind', 'parentId', 'giverId',
  'fields', 'objectives', 'rewards', 'voyages', 'seen', 'mentioned', 'linked',
  'url', 'links', 'parent', 'giver', 'children', 'within', 'items', 'progress'];
// Which sets may carry which of the optional authored keys.
const ONLY = { number: ['session'], kind: ['location', 'quest'], parentId: ['location', 'quest'],
  giverId: ['quest'], objectives: ['quest'], rewards: ['quest'] };
// What a giver may be.
const GIVERS = ['npc', 'pc', 'faction'];

const VOYAGE_STATES = ['played', 'next', 'planned'];
const VOYAGE_KEYS = ['number', 'title', 'working', 'state', 'source', 'playerRecord', 'crewLog', 'anchor'];
const OVERLAY_KEYS = ['urgency', 'next', 'note', 'dossier', 'voyages'];
const LANE_KEYS = ['id', 'name', 'kind', 'state', 'dossier', 'voyages'];

// ── io ─────────────────────────────────────────────────────────────────────
const readJSON = f => JSON.parse(fs.readFileSync(f, 'utf8'));
const exists = rel => fs.existsSync(path.join(ROOT, rel));
const pad = n => String(n).padStart(3, '0');
const serialise = v => JSON.stringify(v, null, 2) + '\n';
const isObj = v => v && typeof v === 'object' && !Array.isArray(v);
const uniqSorted = a => Array.from(new Set(a || [])).sort((x, y) => x - y);
const uniqStr = a => Array.from(new Set(a)).sort();
const matches = (re, s) => { const out = []; let m; while ((m = re.exec(s))) out.push(m); return out; };

function ordered(rec) {
  const out = {};
  KEY_ORDER.forEach(k => { if (rec[k] !== undefined) out[k] = rec[k]; });
  Object.keys(rec).forEach(k => { if (!(k in out)) out[k] = rec[k]; });
  return out;
}
function load() {
  const sets = {};
  SETS.forEach(s => { sets[s.key] = readJSON(path.join(DATA, s.file)); });
  return sets;
}
function loadDM() {
  const f = n => path.join(DM, n);
  return {
    voyages: fs.existsSync(f('voyages.json')) ? readJSON(f('voyages.json')) : [],
    overlay: fs.existsSync(f('overlay.json')) ? readJSON(f('overlay.json')) : { entities: {}, lanes: [] }
  };
}
const all = sets => SETS.reduce((a, s) => a.concat(sets[s.key]), []);

// ── shape ──────────────────────────────────────────────────────────────────
// Everything after this assumes a record is the shape the schema says. So the
// shape is tested first and alone, and a failure stops the run with a list of
// what to fix, not a stack trace from three functions further on.
function shape(sets, err) {
  SETS.forEach(s => {
    const list = sets[s.key];
    if (!Array.isArray(list)) return err(`data/${s.file}: not a list of records`);
    list.forEach((r, i) => {
      const at = `data/${s.file} #${i + 1}${isObj(r) && r.id ? ' ' + r.id : ''}`;
      if (!isObj(r)) return err(`${at}: not a record`);
      Object.keys(r).forEach(k => {
        if (!KEY_ORDER.includes(k)) err(`${at}: "${k}" is not a key the record has`);
        else if (ONLY[k] && !ONLY[k].includes(s.type)) err(`${at}: "${k}" does not belong on a ${s.type}`);
      });
      ['id', 'slug', 'name'].forEach(k => {
        if (typeof r[k] !== 'string' || !r[k].trim()) err(`${at}: ${k} is missing`);
      });
      if (s.type === 'session' && !Number.isInteger(r.number)) err(`${at}: a voyage needs a whole number`);
      if (!isObj(r.fields)) err(`${at}: fields is missing`);
      else Object.keys(r.fields).forEach(k => {
        if (!s.fields.includes(k)) err(`${at}: "${k}" is not a field ${s.key} have`);
        else if (r.fields[k] !== null && typeof r.fields[k] !== 'string') err(`${at}: ${k} must be text or null`);
      });
      ['seen', 'mentioned'].forEach(k => {
        if (r[k] !== undefined && !(Array.isArray(r[k]) && r[k].every(Number.isInteger))) err(`${at}: ${k} must be a list of voyage numbers`);
      });
      if (r.linked !== undefined && !(Array.isArray(r.linked) && r.linked.every(x => typeof x === 'string'))) err(`${at}: linked must be a list of ids`);
      if (r.voyages !== undefined) {
        if (!Array.isArray(r.voyages)) err(`${at}: voyages must be a list`);
        else r.voyages.forEach(v => {
          if (!isObj(v) || !Number.isInteger(v.number)) return err(`${at}: a voyages entry needs a number`);
          Object.keys(v).forEach(k => { if (!['number', 'bullets'].includes(k)) err(`${at}: voyages[${v.number}] has "${k}", and holds only number and bullets`); });
          if (!Array.isArray(v.bullets) || !v.bullets.length || !v.bullets.every(b => typeof b === 'string' && b.trim()))
            err(`${at}: Voyage ${v.number} needs at least one bullet, each of them text`);
        });
      }
      const pairs = (key, a, b) => {
        if (r[key] === undefined) return;
        if (!Array.isArray(r[key])) return err(`${at}: ${key} must be a list`);
        r[key].forEach(o => {
          if (!isObj(o) || Object.keys(o).sort().join() !== [a, b].sort().join()) err(`${at}: each of ${key} holds exactly ${a} and ${b}`);
        });
      };
      pairs('objectives', 'done', 'text');
      pairs('rewards', 'name', 'note');
    });
  });
}

function shapeDM(dm, err) {
  if (!Array.isArray(dm.voyages)) err('prime/data/voyages.json: not a list');
  else dm.voyages.forEach(v => {
    if (!isObj(v) || !Number.isInteger(v.number)) return err('prime/data/voyages.json: every voyage needs a number');
    Object.keys(v).forEach(k => { if (!VOYAGE_KEYS.includes(k)) err(`prime/data/voyages.json: Voyage ${v.number} has an unknown key "${k}"`); });
  });
  const o = dm.overlay;
  if (!isObj(o) || !isObj(o.entities) || !Array.isArray(o.lanes)) return err('prime/data/overlay.json: needs "entities" (an object) and "lanes" (a list)');
  const beats = (at, vs) => {
    if (vs === undefined) return;
    if (!Array.isArray(vs)) return err(`${at}: voyages must be a list`);
    vs.forEach(v => {
      if (!isObj(v) || !Number.isInteger(v.number) || !Array.isArray(v.beats) || !v.beats.every(b => typeof b === 'string' && b.trim()))
        err(`${at}: each voyages entry needs a number and a list of beats`);
    });
  };
  Object.keys(o.entities).forEach(id => {
    const e = o.entities[id];
    if (!isObj(e)) return err(`prime/data/overlay.json: ${id} is not an object`);
    Object.keys(e).forEach(k => { if (!OVERLAY_KEYS.includes(k)) err(`prime/data/overlay.json: ${id} has an unknown key "${k}"`); });
    beats(`prime/data/overlay.json ${id}`, e.voyages);
  });
  o.lanes.forEach((l, i) => {
    if (!isObj(l)) return err(`prime/data/overlay.json: lane #${i + 1} is not an object`);
    Object.keys(l).forEach(k => { if (!LANE_KEYS.includes(k)) err(`prime/data/overlay.json: lane ${l.id || i + 1} has an unknown key "${k}"`); });
    beats(`prime/data/overlay.json lane ${l.id || i + 1}`, l.voyages);
  });
}

// ── derive ─────────────────────────────────────────────────────────────────
const stub = r => ({ id: r.id, name: r.name, type: r.type, slug: r.slug, url: r.url });

function derive(sets) {
  const byId = new Map();
  SETS.forEach(s => sets[s.key].forEach(r => {
    DERIVED.forEach(k => delete r[k]);
    r.type = s.type;
    r.url = s.type === 'session' ? `${s.dir}/voyage-${pad(r.number)}.html` : `${s.dir}/${r.slug}.html`;
    r.voyages = (r.voyages || []).slice().sort((a, b) => a.number - b.number);
    r.seen = uniqSorted(r.seen);
    r.mentioned = uniqSorted(r.mentioned);
    r.linked = r.linked || [];
    r.links = [];
    byId.set(r.id, r);
  }));

  // Links are entered once, on either end, and shown on both.
  all(sets).forEach(r => r.linked.forEach(tid => {
    const t = byId.get(tid);
    if (!t || t === r) return;                       // reported by check
    if (!r.links.some(l => l.id === t.id)) r.links.push(stub(t));
    if (!t.links.some(l => l.id === r.id)) t.links.push(stub(r));
  }));
  all(sets).forEach(r => r.links.sort((a, b) =>
    a.type.localeCompare(b.type) || a.name.localeCompare(b.name)));

  // Held items come from the item's own Held By, never typed on the holder.
  [...sets.pcs, ...sets.npcs, ...sets.locations].forEach(h => {
    const held = sets.items.filter(i => i.fields['Held By'] &&
      i.fields['Held By'].toLowerCase() === h.name.toLowerCase());
    if (held.length) h.items = held.map(stub);
  });

  sets.locations.forEach(l => {
    const p = l.parentId ? byId.get(l.parentId) : null;
    l.parent = p ? { slug: p.slug, name: p.name, url: p.url } : null;
  });
  sets.locations.forEach(l => {
    l.within = sets.locations.filter(o => o.parentId === l.id)
      .map(o => ({ slug: o.slug, name: o.name, url: o.url, type: o.kind }));
  });

  sets.quests.forEach(q => {
    const p = q.parentId ? byId.get(q.parentId) : null;
    q.parent = p ? { slug: p.slug, name: p.name, url: p.url } : null;
    q.objectives = q.objectives || [];
    const done = q.objectives.filter(o => o.done).length;
    q.progress = q.objectives.length ? { done, total: q.objectives.length } : null;
    const g = q.giverId ? byId.get(q.giverId) : null;
    if (g) q.giver = { name: g.name, slug: g.slug, url: g.url };
  });
  sets.quests.forEach(q => {
    q.children = sets.quests.filter(c => c.parentId === q.id)
      .map(c => ({ slug: c.slug, name: c.name, url: c.url, kind: c.kind }));
  });

  SETS.forEach(s => { sets[s.key] = sets[s.key].map(ordered); });
  return sets;
}

function indexFile(sets) {
  const latest = Math.max(0, ...sets.sessions.map(s => s.number));
  const counts = {};
  SETS.forEach(s => { counts[s.key] = sets[s.key].length; });
  return { latestVoyage: latest, counts };
}

function voyageRegistry(sets) {
  const rows = sets.sessions.slice().sort((a, b) => a.number - b.number).map(s =>
    `  {\n    num:   '${pad(s.number)}',\n    title: ${JSON.stringify(s.name)},\n    path:  '${s.url}',\n  },`);
  return [
    '/**',
    ' * Caelestis — Voyage Registry',
    ' * ────────────────────────────',
    ' * Every voyage on record. The hub\'s Voyages card points at the last entry.',
    ' *',
    ' * Written by `node scripts/data.js derive` from data/sessions.json.',
    ' * To add a voyage, add its session record there and run derive.',
    ' */',
    '',
    'var CAELESTIS_VOYAGES = [',
    rows.join('\n'),
    '];',
    ''
  ].join('\n');
}

// A page cannot list a directory at runtime, so the tracker reads this file
// to know which DM dossiers exist and which record each one belongs to.
function dossierIndex(sets, dm) {
  const dir = path.join(ROOT, 'prime', 'dossiers');
  if (!fs.existsSync(dir)) return [];
  const recs = all(sets);
  const claimed = {};
  Object.keys(dm.overlay.entities || {}).forEach(id => {
    const d = dm.overlay.entities[id].dossier;
    if (d) (claimed[d] = claimed[d] || []).push(id);
  });
  return fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html').sort().map(file => {
    const src = fs.readFileSync(path.join(dir, file), 'utf8');
    const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/.exec(src);
    const title = /<title>([\s\S]*?)<\/title>/.exec(src);
    const name = text(h1 ? h1[1] : title ? title[1].split('·')[0] : file);
    const slug = file.replace(/\.html$/, '');
    const rel = 'dossiers/' + file;
    const ids = claimed[rel] || recs.filter(r => ['pc', 'npc'].includes(r.type) && r.slug === slug).map(r => r.id);
    return { slug, name, path: rel, records: ids };
  });
}

// ── text ───────────────────────────────────────────────────────────────────
// Two normalisers, because the two sides are different things. A page is
// HTML: tags come out, entities are decoded. A record string is plain text
// and is taken as written, so a bullet that says "<10 feet" keeps saying it.
const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', mdash: '—',
  ndash: '–', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', rarr: '→',
  larr: '←', middot: '·', hellip: '…', eacute: 'é', egrave: 'è',
  aacute: 'á', iacute: 'í', oacute: 'ó', uacute: 'ú', ntilde: 'ñ',
  uuml: 'ü', ouml: 'ö', auml: 'ä', times: '×', bull: '•', deg: '°' };
const INLINE = /<\/?(?:em|strong|b|i|u|a|span|code|sup|sub|small|mark|abbr)\b[^>]*>/gi;
function squash(s) {
  return s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
}
function text(htmlStr) {
  return squash(String(htmlStr == null ? '' : htmlStr)
    .replace(INLINE, '')                 // "<em>Moonraider</em>," stays "Moonraider,"
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x([0-9a-f]+);/gi, (m, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-z]+);/gi, (m, n) => NAMED[n.toLowerCase()] !== undefined ? NAMED[n.toLowerCase()] : m));
}
const plain = s => squash(String(s == null ? '' : s));
// A short "this differs" with the first place the two part ways.
function diffAt(shown, want) {
  let i = 0;
  while (i < shown.length && i < want.length && shown[i] === want[i]) i++;
  const from = Math.max(0, i - 18);
  return `page "…${shown.slice(from, i + 30)}" / record "…${want.slice(from, i + 30)}"`;
}

// ── pages ──────────────────────────────────────────────────────────────────
// innerHTML of every element carrying data-field="name", in page order.
function regions(src, name) {
  const out = [];
  const openRe = new RegExp('<(\\w+)([^>]*\\bdata-field="' + name + '"[^>]*)>', 'g');
  let open;
  while ((open = openRe.exec(src))) {
    const tag = open[1], start = open.index + open[0].length;
    const re = new RegExp('<(/?)' + tag + '\\b[^>]*>', 'g');
    re.lastIndex = start;
    let depth = 1, m;
    while ((m = re.exec(src))) {
      depth += m[1] ? -1 : 1;
      if (depth === 0) { out.push(src.slice(start, m.index)); break; }
    }
  }
  return out;
}
const region = (src, name) => { const r = regions(src, name); return r.length ? r[0] : null; };
const resolveFrom = (pageUrl, href) => path.posix.normalize(path.posix.join(path.posix.dirname(pageUrl), href));

// The stat rows each kind of page carries, in order, and where each value
// comes from. A function is a derived value; a string is a field.
// What a page prints beside Last Seen / Last Visited. Present in person beats
// named in passing: an entity the crew has only heard of reads "named only".
function lastSeenLabel(r) {
  const max = a => Math.max(...a);
  if (r.seen && r.seen.length) return `Voyage ${pad(max(r.seen))}`;
  if (r.mentioned && r.mentioned.length) return `Voyage ${pad(max(r.mentioned))} · named only`;
  if (r.voyages && r.voyages.length) return `Voyage ${pad(max(r.voyages.map(v => v.number)))}`;
  return null;
}
const STATS = {
  pc: [['Species', 'Species'], ['Class', 'Class'], ['Specialisation', 'Specialisation', 'optional'],
    ['Station', 'Station'], ['Clearance', 'Clearance'], ['Last Seen', lastSeenLabel], ['Status', 'Status']],
  npc: [['Role', 'Role (as known)'], ['Crew', 'Party Relationship'], ['Affiliation', 'Affiliation(s)', 'optional'],
    ['Last Seen', lastSeenLabel], ['Status', 'Status']],
  faction: [['Type', 'Type'], ['Relationship', 'Party Relationship'], ['Last Seen', lastSeenLabel], ['Status', 'Status']],
  location: [['Type', 'Type'], ['Parent', r => r.parent ? r.parent.name : null, 'optional'],
    ['Last Visited', lastSeenLabel], ['Status', 'Status']],
  item: [['Type', 'Type'], ['Held By', 'Held By', 'optional'], ['Origin', 'Origin'],
    ['Last Seen', lastSeenLabel], ['Status', 'Status']]
};
const SUBTITLE = { pc: 'Player Concept (as known)', npc: 'Role (as known)',
  faction: 'Type', location: 'Type', item: 'Type' };

function checkPage(r, err) {
  const at = r.url;
  if (!exists(at)) return err(`${r.id} ${r.name}: page ${at} does not exist`);
  const src = fs.readFileSync(path.join(ROOT, at), 'utf8');
  const differs = (what, shown, want) => { if (shown !== want) err(`${at}: ${what} differs — ${diffAt(shown, want)}`); };

  // A voyage page is prose. What can be held to the record is that it is the
  // right voyage: its number and its title.
  if (r.type === 'session') {
    const title = /class="page-title"[^>]*>([\s\S]*?)<\/div>/.exec(src);
    const eyebrow = /class="page-eyebrow"[^>]*>([\s\S]*?)<\/div>/.exec(src);
    if (!title || text(title[1]) !== plain(r.name)) err(`${at}: page title reads "${title ? text(title[1]) : 'nothing'}", record says "${r.name}"`);
    if (!eyebrow || text(eyebrow[1]) !== `Voyage ${pad(r.number)}`) err(`${at}: eyebrow reads "${eyebrow ? text(eyebrow[1]) : 'nothing'}", expected "Voyage ${pad(r.number)}"`);
    return;
  }

  const ent = /data-entity="([^"]+)"/.exec(src);
  if (!ent) err(`${at}: no data-entity attribute`);
  else if (ent[1] !== r.id) err(`${at}: data-entity is ${ent[1]}, record is ${r.id}`);

  const names = regions(src, 'name');
  if (!names.length) err(`${at}: no name region`);
  names.forEach(n => { if (text(n) !== plain(r.name)) err(`${at}: name reads "${text(n)}", record says "${r.name}"`); });

  // Overview. A thread's page appends "Part of <its quest>" inside the region.
  const ov = region(src, 'overview');
  const wantOv = plain(r.fields['Overview (Player)']);
  if (ov == null) { if (wantOv) err(`${at}: no overview region`); }
  else {
    const part = /Part of\s*<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/.exec(ov);
    const body = part ? ov.slice(0, ov.lastIndexOf('Part of')) : ov;
    differs('overview', text(body), wantOv);
    if (part && !r.parent) err(`${at}: reads "Part of ${text(part[2])}", record gives it no parent`);
    if (!part && r.parent && r.type === 'quest') err(`${at}: record makes it part of ${r.parent.name}, page does not say so`);
    if (part && r.parent) {
      if (text(part[2]) !== plain(r.parent.name)) err(`${at}: reads "Part of ${text(part[2])}", record says ${r.parent.name}`);
      if (resolveFrom(at, part[1]) !== r.parent.url) err(`${at}: "Part of" links ${part[1]}, record gives ${r.parent.url}`);
    }
  }

  const subField = SUBTITLE[r.type];
  if (subField) {
    const sub = region(src, 'subtitle');
    if (sub == null) err(`${at}: no subtitle region`);
    else if (text(sub) !== plain(r.fields[subField])) err(`${at}: subtitle reads "${text(sub)}", record ${subField} is "${r.fields[subField]}"`);
  }

  // Stat rows: the same rows, in the same order, with the record's values.
  if (STATS[r.type]) {
    const stats = region(src, 'stats');
    if (stats == null) err(`${at}: no stats region`);
    else {
      const shown = matches(/class="stat-key"[^>]*>([\s\S]*?)<\/span>\s*<span class="stat-val[^"]*"[^>]*>([\s\S]*?)<\/span>/g, stats)
        .map(m => [text(m[1]), text(m[2])]);
      const want = STATS[r.type].map(([label, from, optional]) => {
        const v = typeof from === 'function' ? from(r) : r.fields[from];
        return (v == null || v === '') ? (optional ? null : [label, '']) : [label, plain(v)];
      }).filter(Boolean);
      const keys = a => a.map(x => x[0]).join(' · ');
      if (keys(shown) !== keys(want)) err(`${at}: stat rows are "${keys(shown)}", record gives "${keys(want)}"`);
      else shown.forEach(([k, v], i) => { if (v !== want[i][1]) err(`${at}: ${k} reads "${v}", record gives "${want[i][1]}"`); });
    }
  }

  if (r.type === 'pc') {
    const pursuit = region(src, 'pursuit');
    const m = pursuit && /class="pursuit-text"[^>]*>([\s\S]*?)<\/span>/.exec(pursuit);
    if (!m) err(`${at}: no pursuit region`);
    else differs('pursuit', text(m[1]), plain(r.fields['Personal Thread']));
    // Carried: the items whose Held By names this crew member.
    const carried = region(src, 'carried');
    const shown = uniqStr(carried ? matches(/href="([^"]+)"/g, carried).map(x => resolveFrom(at, x[1])) : []);
    const want = uniqStr((r.items || []).map(i => i.url));
    if (shown.join() !== want.join()) err(`${at}: carried items are [${shown.join(', ')}], record gives [${want.join(', ')}]`);
  }

  if (r.type === 'location' && r.within && r.within.length) {
    const w = region(src, 'within');
    const shown = w ? matches(/class="stub-chip"[^>]*>([\s\S]*?)<\/(?:a|span)>/g, w).map(x => text(x[1])) : [];
    const want = r.within.map(x => plain(x.name));
    if (shown.join('|') !== want.join('|')) err(`${at}: within lists [${shown.join(', ')}], record gives [${want.join(', ')}]`);
    const hrefs = w ? matches(/href="([^"]+)"/g, w).map(x => resolveFrom(at, x[1])) : [];
    r.within.forEach(x => { if (!hrefs.includes(x.url)) err(`${at}: within does not link ${x.url}`); });
  }

  // Voyage records: the latest voyage in the latest block, the rest in order
  // under Previous Voyages, every bullet as the record has it.
  const block = /class="record-voyage"[^>]*>\s*Voyage\s+(\d+)[\s\S]*?<ul class="record-list">([\s\S]*?)<\/ul>/g;
  const read = html => matches(block, html || '').map(m => ({
    number: parseInt(m[1], 10), bullets: matches(/<li[^>]*>([\s\S]*?)<\/li>/g, m[2]).map(x => text(x[1])) }));
  const latest = read(region(src, 'latestVoyage')), prior = read(region(src, 'priorVoyages'));
  const rec = (r.voyages || []).slice().sort((a, b) => b.number - a.number);
  const list = a => a.map(v => pad(v.number)).join(', ') || 'none';
  if (list(latest) !== list(rec.slice(0, 1))) err(`${at}: latest voyage block is ${list(latest)}, record's latest is ${list(rec.slice(0, 1))}`);
  if (list(prior) !== list(rec.slice(1))) err(`${at}: Previous Voyages holds ${list(prior)}, record gives ${list(rec.slice(1))}`);
  latest.concat(prior).forEach(p => {
    const v = rec.find(x => x.number === p.number);
    if (!v) return;
    if (p.bullets.length !== v.bullets.length) return err(`${at}: Voyage ${pad(p.number)} has ${p.bullets.length} bullets on the page, ${v.bullets.length} in the record`);
    p.bullets.forEach((t, i) => differs(`Voyage ${pad(p.number)} bullet ${i + 1}`, t, plain(v.bullets[i])));
  });

  // Connections: the chips on the page are the record's links, no more, no
  // fewer, each under the linked record's own name.
  const card = /<div class="xref-card">\s*<div class="xref-head"><span class="xref-title">Connections<\/span>[\s\S]*?(?=<div class="divider">|<div data-field|\n\s*<\/div>\s*<\/div>\s*<\/body>)/.exec(src);
  const chips = card ? matches(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, card[0])
    .map(m => ({ url: resolveFrom(at, m[1]), label: text(m[2]) })) : [];
  const wantLinks = (r.links || []).filter(l => l.url);
  wantLinks.forEach(l => {
    const c = chips.find(x => x.url === l.url);
    if (!c) err(`${at}: Connections is missing ${l.url}`);
    else if (c.label !== plain(l.name)) err(`${at}: Connections labels ${l.url} "${c.label}", record says "${l.name}"`);
  });
  chips.filter(c => !wantLinks.some(l => l.url === c.url))
    .forEach(c => err(`${at}: Connections shows ${c.url}, which the record does not link`));

  if (r.type === 'quest') {
    const objs = matches(/<li class="obj-item([^"]*)"[\s\S]*?class="obj-text"[^>]*>([\s\S]*?)<\/span>/g, src)
      .map(m => ({ done: /is-done/.test(m[1]), text: text(m[2]) }));
    const want = (r.objectives || []).map(o => ({ done: !!o.done, text: plain(o.text) }));
    if (JSON.stringify(objs) !== JSON.stringify(want)) err(`${at}: objectives differ from the record`);

    const rewards = matches(/<li class="loot-item is-reward">\s*<span class="loot-name">([\s\S]*?)<\/span>\s*(?:<span class="loot-note">([\s\S]*?)<\/span>)?/g, src)
      .map(m => ({ name: text(m[1]), note: text(m[2]) }));
    const wantR = (r.rewards || []).map(o => ({ name: plain(o.name), note: plain(o.note) }));
    if (JSON.stringify(rewards) !== JSON.stringify(wantR)) err(`${at}: rewards differ from the record`);

    const giver = region(src, 'giver');
    const g = giver && /<a[^>]*class="giver-name"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/.exec(giver);
    if (r.giver && !g) err(`${at}: record names ${r.giver.name} as giver, page has no giver strip`);
    if (!r.giver && giver != null) err(`${at}: page has a giver strip, record names no giver`);
    if (r.giver && g) {
      if (text(g[2]) !== plain(r.giver.name)) err(`${at}: giver reads "${text(g[2])}", record says "${r.giver.name}"`);
      if (resolveFrom(at, g[1]) !== r.giver.url) err(`${at}: giver links ${g[1]}, record gives ${r.giver.url}`);
    }
  }
}

// ── registers ──────────────────────────────────────────────────────────────
// Each index page repeats a little of every record. A detail page corrected
// without its register row is the commonest way the site contradicts itself.
const ROW = {
  pcs:   { sub: r => [r.fields.Species, r.fields.Class].filter(Boolean).join(' · '),
           type: r => r.fields.Station, state: r => r.fields.Clearance },
  npcs:  { sub: r => r.fields['Role (as known)'], state: lastSeenLabel },
  items: { sub: r => r.fields.Type, type: r => r.fields['Item Type'], state: r => r.fields['Held By'] }
};

function checkIndex(set, recs, err) {
  const p = set.index;
  if (!exists(p)) return err(`${p} does not exist`);
  const src = fs.readFileSync(path.join(ROOT, p), 'utf8');
  const page = text(src.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' '));
  const dir = path.posix.dirname(p);
  const byUrl = new Map(recs.map(r => [r.url, r]));
  const resolve = href => byUrl.get(path.posix.normalize(path.posix.join(dir, href)));
  const firstText = s => text(String(s).split(/<span\b/)[0]);
  const cell = (row, cls) => { const m = new RegExp('class="' + cls + '(?: [^"]*)?">([\\s\\S]*?)</span>').exec(row); return m ? text(m[1]) : null; };

  matches(/<a class="ent-row" href="([^"]+)">([\s\S]*?)<\/a>(\s*<div class="ent-detail">\s*<p class="stub-desc">([\s\S]*?)<\/p>)?/g, src).forEach(m => {
    const r = resolve(m[1]);
    if (!r) return;                       // a row for something outside the record
    const nm = /class="ent-name">([\s\S]*)/.exec(m[2]);
    if (nm && firstText(nm[1]) !== plain(r.name)) err(`${p}: row for ${r.slug} is named "${firstText(nm[1])}", record says "${r.name}"`);
    if (m[4] !== undefined && r.fields['Overview (Player)'] && text(m[4]) !== plain(r.fields['Overview (Player)']))
      err(`${p}: overview on the ${r.slug} row differs — ${diffAt(text(m[4]), plain(r.fields['Overview (Player)']))}`);
    const rule = ROW[set.key] || {};
    [['sub', 'ent-sub'], ['type', 'ent-type'], ['state', 'ent-state']].forEach(([k, cls]) => {
      if (!rule[k]) return;
      const shown = cell(m[2], cls), want = plain(rule[k](r) || '');
      if (shown !== null && want && shown !== want) err(`${p}: the ${r.slug} row reads "${shown}", record gives "${want}"`);
    });
  });

  matches(/<a class="log-row-link" href="([^"]+)">([\s\S]*?)<\/a>/g, src).forEach(m => {
    const r = resolve(m[1]);
    if (!r) return;
    const t = /class="log-title">([\s\S]*)/.exec(m[2]);
    if (t && firstText(t[1]) !== plain(r.name)) err(`${p}: row for ${r.slug} is titled "${firstText(t[1])}", record says "${r.name}"`);
    if (r.type === 'quest') {
      const pr = /class="obj-progress[^"]*">([^<]*)</.exec(m[2]);
      // A thread with no objectives shows a dash.
      const want = r.progress ? `${r.progress.done}/${r.progress.total}` : '—';
      const shown = pr ? pr[1].trim() : '—';
      if (shown !== want) err(`${p}: ${r.slug} shows progress ${shown}, record gives ${want}`);
    }
  });

  recs.forEach(r => {
    const rel = path.posix.relative(dir, r.url);
    // The chart gives a system its own tab instead of a row; that counts.
    if (!src.includes(`href="${rel}"`) && !src.includes(`data-panel="${r.slug}"`)) err(`${p}: no link to ${r.url}`);
    if (!page.includes(plain(r.name))) err(`${p}: "${r.name}" is not named`);
  });
}

// ── links ──────────────────────────────────────────────────────────────────
// Every local href and src on the site resolves, and every #anchor exists.
// Templates carry placeholders by design and are left out.
function checkLinks(err) {
  const pages = new Map();
  (function walk(dir) {
    fs.readdirSync(path.join(ROOT, dir)).forEach(f => {
      const rel = dir ? `${dir}/${f}` : f;
      if (rel.startsWith('.') || rel === 'node_modules' || rel === 'scripts/_benched') return;
      const st = fs.statSync(path.join(ROOT, rel));
      if (st.isDirectory()) return walk(rel);
      if (!f.endsWith('.html') || f.endsWith('-template.html')) return;
      const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
      pages.set(rel, { src, ids: new Set(matches(/\bid="([^"]+)"/g, src).map(m => m[1])) });
    });
  })('');
  pages.forEach((pg, rel) => {
    const body = pg.src.replace(/<script[\s\S]*?<\/script>/g, ' ');
    matches(/\b(?:href|src)="([^"]+)"/g, body).forEach(m => {
      const href = m[1];
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(href) || /[${}']/.test(href)) return;
      const [target, anchor] = href.split('#');
      const clean = target.split('?')[0];
      if (!clean) return;
      // On Pages the site lives under /caelestis/, so "/x" lands above it.
      if (clean.startsWith('/')) return err(`${rel}: ${href} is an absolute path and resolves above the site`);
      let t = path.posix.normalize(path.posix.join(path.posix.dirname(rel), clean));
      if (t.startsWith('..')) return err(`${rel}: ${href} points outside the site`);
      if (clean.endsWith('/') || (exists(t) && fs.statSync(path.join(ROOT, t)).isDirectory())) t = path.posix.join(t, 'index.html');
      if (!exists(t)) return err(`${rel}: ${href} does not exist`);
      if (anchor && pages.has(t) && !pages.get(t).ids.has(anchor)) err(`${rel}: ${href} has no such anchor`);
    });
  });
}

// ── prose ──────────────────────────────────────────────────────────────────
// PAGE-SHAPE.md: three or more negations in one sentence is a rewrite.
const NEG = /\b(no|not|never|nothing|none|without|nor|neither|nobody|nowhere)\b|n't\b/gi;
function stacked(s) {
  return String(s).split(/(?<=[.!?])\s+/).filter(x => (x.match(NEG) || []).length >= 3);
}

// ── check ──────────────────────────────────────────────────────────────────
function report(errors, warnings, tail) {
  warnings.forEach(w => console.log('  warn   ' + w));
  errors.forEach(e => console.log('  ERROR  ' + e));
  if (tail) console.log('\n' + tail);
  console.log(`${errors.length} error${errors.length === 1 ? '' : 's'}, ${warnings.length} warning${warnings.length === 1 ? '' : 's'}`);
  process.exit(errors.length ? 1 : 0);
}

function parse(errors) {
  let sets = null, dm = null;
  try { sets = load(); } catch (e) { errors.push('data/ does not parse: ' + e.message); }
  try { dm = loadDM(); } catch (e) { errors.push('prime/data/ does not parse: ' + e.message); }
  return { sets, dm };
}

// The deploy's question, and only that: is data/ fit to publish.
function guard() {
  const errors = [];
  let sets = null;
  try { sets = load(); } catch (e) { errors.push('data/ does not parse: ' + e.message); }
  if (sets) shape(sets, m => errors.push(m));
  report(errors, [], errors.length ? 'data/ is not fit to publish.' : 'data/ holds only keys the record has.');
}

function check() {
  const errors = [], warnings = [];
  const err = m => errors.push(m), warn = m => warnings.push(m);

  const { sets, dm } = parse(errors);
  if (sets) shape(sets, err);
  if (dm) shapeDM(dm, err);
  if (errors.length) report(errors, warnings, 'The files are not the shape the record has. Fix these first; nothing else was checked.');

  const recs = all(sets);
  const byId = new Map();

  // 1. identity
  SETS.forEach(s => {
    const slugs = new Set();
    sets[s.key].forEach(r => {
      if (byId.has(r.id)) err(`${r.id} appears twice`);
      byId.set(r.id, r);
      if (!new RegExp('^' + s.prefix + '-[A-Za-z0-9]{8}$').test(r.id)) err(`${r.id}: ids in ${s.file} are ${s.prefix}- and eight letters or digits`);
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.slug)) err(`${r.id}: slug "${r.slug}" is not kebab-case`);
      if (slugs.has(r.slug)) err(`${s.file}: slug "${r.slug}" appears twice`);
      slugs.add(r.slug);
    });
  });

  // 2. voyages
  const played = sets.sessions.map(s => s.number).sort((a, b) => a - b);
  played.forEach((n, i) => { if (n !== i + 1) err(`sessions.json: voyages are not contiguous at ${n}`); });
  const latest = played.length ? played[played.length - 1] : 0;
  sets.sessions.forEach(s => {
    if (s.slug !== `voyage-${pad(s.number)}`) err(`${s.id}: slug should be voyage-${pad(s.number)}`);
  });

  // 3. references and voyage numbers
  recs.forEach(r => {
    (r.linked || []).forEach(t => {
      if (!byId.has(t)) err(`${r.id} ${r.name}: linked id ${t} does not exist`);
      if (t === r.id) err(`${r.id} ${r.name}: links to itself`);
    });
    if (r.parentId) {
      const p = byId.get(r.parentId);
      if (!p) err(`${r.id} ${r.name}: parentId ${r.parentId} does not exist`);
      else if (p.type !== r.type && p.id.split('-')[0] !== r.id.split('-')[0]) err(`${r.id} ${r.name}: parent ${p.id} is not in the same set`);
      else if (p.id === r.id) err(`${r.id} ${r.name}: is its own parent`);
    }
    if (r.giverId) {
      const g = byId.get(r.giverId);
      if (!g) err(`${r.id} ${r.name}: giverId ${r.giverId} does not exist`);
      else if (!GIVERS.some(t => SETS.find(s => s.type === t).prefix === g.id.split('-')[0])) err(`${r.id} ${r.name}: giver ${g.id} is not a character or a faction`);
    }
    const ns = new Set();
    (r.voyages || []).forEach(v => {
      if (!played.includes(v.number)) err(`${r.id} ${r.name}: bullets filed under Voyage ${v.number}, which is not on record`);
      if (ns.has(v.number)) err(`${r.id} ${r.name}: Voyage ${v.number} appears twice`);
      ns.add(v.number);
      v.bullets.forEach(b => stacked(b).forEach(s => warn(`${r.id} ${r.name}: stacked negation — "${s.slice(0, 90)}"`)));
    });
    [].concat(r.seen || [], r.mentioned || []).forEach(n => {
      if (!played.includes(n)) err(`${r.id} ${r.name}: seen/mentioned in Voyage ${n}, which is not on record`);
    });
    Object.keys(r.fields).forEach(k => {
      if (typeof r.fields[k] === 'string') stacked(r.fields[k]).forEach(s => warn(`${r.id} ${r.name} [${k}]: stacked negation — "${s.slice(0, 90)}"`));
    });
    if (r.id.startsWith('ITM-') && r.fields['Held By']) {
      const h = r.fields['Held By'].toLowerCase();
      if (!recs.some(x => /^(PC|NPC|LOC)-/.test(x.id) && x.name.toLowerCase() === h))
        warn(`${r.id} ${r.name}: Held By "${r.fields['Held By']}" matches no crew member, character or place`);
    }
  });
  if (errors.length) report(errors, warnings, 'The record does not hold together. Fix these first; the pages were not checked.');

  // 4. derived fields are current
  const fresh = derive(JSON.parse(JSON.stringify(sets)));
  SETS.forEach(s => {
    if (serialise(fresh[s.key]) !== fs.readFileSync(path.join(DATA, s.file), 'utf8'))
      err(`data/${s.file} is stale or hand-edited in a derived field — run: node scripts/data.js derive`);
  });
  const current = (p, want) => { if (!fs.existsSync(p) || fs.readFileSync(p, 'utf8') !== want) err(`${path.relative(ROOT, p)} is stale — run: node scripts/data.js derive`); };
  current(path.join(DATA, 'index.json'), serialise(indexFile(fresh)));
  current(path.join(DATA, 'voyage.js'), voyageRegistry(fresh));
  current(path.join(DM, 'dossiers.json'), serialise(dossierIndex(fresh, dm)));

  // 5. pages and registers show what the record says
  const guarded = (what, fn) => { try { fn(); } catch (e) { err(`${what}: could not be checked — ${e.message}`); } };
  all(fresh).forEach(r => guarded(r.url, () => checkPage(r, err)));
  SETS.forEach(s => guarded(s.index, () => checkIndex(s, fresh[s.key], err)));
  guarded('links', () => checkLinks(err));

  // 6. the command bar and the current bearing
  guarded('data/bearing.js', () => {
    const bearing = path.join(DATA, 'bearing.js');
    if (!fs.existsSync(bearing)) return err('data/bearing.js does not exist');
    const b = fs.readFileSync(bearing, 'utf8');
    const unq = s => s.replace(/\\u([0-9a-f]{4})/gi, (m, h) => String.fromCharCode(parseInt(h, 16))).replace(/\\(['"])/g, '$1');
    const str = key => { const m = new RegExp(key + ":\\s*(['\"])((?:\\\\.|(?!\\1).)*)\\1").exec(b); return m ? unq(m[2]) : null; };
    const cur = sets.sessions.find(x => x.number === latest);
    const v = /voyage:\s*(\d+)/.exec(b);
    if (!v || parseInt(v[1], 10) !== latest) err(`data/bearing.js: voyage is ${v ? v[1] : 'missing'}, the record's latest is ${latest}`);
    if (cur && plain(str('title')) !== plain(cur.name)) err(`data/bearing.js: title is "${str('title')}", the record's latest voyage is "${cur.name}"`);
    matches(/'([^']+\.html)'/g, b).forEach(m => { if (!exists(m[1])) err(`data/bearing.js: ${m[1]} does not exist`); });
    const page = `voyages/voyage-${pad(latest)}.html`;
    if (latest && !new RegExp("voyage:\\s*'" + page.replace(/[.]/g, '\\.') + "'").test(b)) err(`data/bearing.js: links.voyage should be ${page}`);
    // The bar quotes each quest's name and progress, and a quoted number is a
    // number that drifts. Every entry is read, whatever order its keys are in.
    const block = /quests:\s*\[([\s\S]*?)\]/.exec(b);
    matches(/\{([^{}]*)\}/g, block ? block[1] : '').forEach(m => {
      const get = k => { const x = new RegExp(k + ":\\s*(['\"])((?:\\\\.|(?!\\1).)*)\\1").exec(m[1]); return x ? unq(x[2]) : null; };
      const q = fresh.quests.find(x => x.url === get('href'));
      if (!q) return err(`data/bearing.js: ${get('href')} is not a quest in the record`);
      const want = q.progress ? `${q.progress.done}/${q.progress.total}` : null;
      if (get('progress') !== want) err(`data/bearing.js: ${q.slug} shows ${get('progress')}, record gives ${want || 'no objectives'}`);
      if (plain(get('name')) !== plain(q.name)) err(`data/bearing.js: ${q.slug} is named "${get('name')}", record says "${q.name}"`);
    });
    const bi = path.join(ROOT, 'bearings/index.html'), bl = path.join(ROOT, `bearings/voyage-${pad(latest)}.html`);
    if (!fs.existsSync(bl)) err(`bearings/voyage-${pad(latest)}.html does not exist`);
    // The current bearing is the latest voyage's bearing page, byte for byte.
    else if (!fs.existsSync(bi) || fs.readFileSync(bi, 'utf8') !== fs.readFileSync(bl, 'utf8'))
      err(`bearings/index.html is not a copy of bearings/voyage-${pad(latest)}.html`);
  });

  // 7. the DM layer
  const dv = dm.voyages.slice().sort((a, b) => a.number - b.number);
  const rank = { played: 0, next: 1, planned: 2 };
  dv.forEach((v, i) => {
    const at = `prime/data/voyages.json: Voyage ${v.number}`;
    if (v.number !== i + 1) err(`prime/data/voyages.json: voyages are not contiguous at ${v.number}`);
    if (!VOYAGE_STATES.includes(v.state)) return err(`${at} state "${v.state}" is not one of ${VOYAGE_STATES.join(', ')}`);
    if (i && rank[v.state] < rank[dv[i - 1].state]) err(`${at} is ${v.state}, after a voyage that is ${dv[i - 1].state}`);
    const onRecord = played.includes(v.number);
    if (v.state !== 'played') {
      if (onRecord) err(`${at} is ${v.state} but has a session record`);
      if (v.playerRecord || v.crewLog) err(`${at} is ${v.state}, so playerRecord and crewLog must be false`);
    } else if (!!v.playerRecord !== onRecord) {
      err(`${at} playerRecord is ${!!v.playerRecord}, and data/sessions.json ${onRecord ? 'has' : 'does not have'} it`);
    }
    if (onRecord) {
      const s = sets.sessions.find(x => x.number === v.number);
      if (v.title !== s.name) err(`${at} title "${v.title}" differs from the record's "${s.name}"`);
    }
  });
  if (dv.filter(v => v.state === 'next').length > 1) err('prime/data/voyages.json: more than one voyage is "next"');
  played.forEach(n => { if (!dv.some(v => v.number === n)) err(`prime/data/voyages.json: Voyage ${n} is on record and missing here`); });

  const known = dv.map(v => v.number);
  const lanes = new Set();
  const beatsOf = (id, o) => (o.voyages || []).forEach(v => {
    if (!known.includes(v.number)) err(`prime/data/overlay.json: ${id} has beats under Voyage ${v.number}, which prime/data/voyages.json does not list`);
    v.beats.forEach(b => stacked(b).forEach(s => warn(`prime/data/overlay.json ${id}: stacked negation — "${s.slice(0, 90)}"`)));
  });
  dm.overlay.lanes.forEach(l => {
    if (!/^DM-/.test(l.id || '')) err(`prime/data/overlay.json: lane id "${l.id}" should start with DM-`);
    if (lanes.has(l.id) || byId.has(l.id)) err(`prime/data/overlay.json: lane id ${l.id} is not unique`);
    lanes.add(l.id);
    if (!l.name) err(`prime/data/overlay.json: lane ${l.id} has no name`);
    if (l.dossier && !exists('prime/' + l.dossier)) err(`prime/data/overlay.json: lane ${l.id} dossier prime/${l.dossier} does not exist`);
    beatsOf(l.id, l);
  });
  Object.keys(dm.overlay.entities).forEach(id => {
    const o = dm.overlay.entities[id];
    if (!byId.has(id)) err(`prime/data/overlay.json: ${id} is not in the record`);
    if (o.dossier && !exists('prime/' + o.dossier)) err(`prime/data/overlay.json: ${id} dossier prime/${o.dossier} does not exist`);
    ['next', 'note'].forEach(k => { if (o[k]) stacked(o[k]).forEach(s => warn(`prime/data/overlay.json ${id}: stacked negation — "${s.slice(0, 90)}"`)); });
    beatsOf(id, o);
  });

  report(errors, warnings, SETS.map(s => `${sets[s.key].length} ${s.key}`).join(' · ') +
    `\nlatest voyage on record: ${latest ? 'V' + pad(latest) : 'none'}`);
}

// ── main ───────────────────────────────────────────────────────────────────
function runDerive() {
  const errors = [];
  const { sets, dm } = parse(errors);
  if (sets) shape(sets, m => errors.push(m));
  if (dm) shapeDM(dm, m => errors.push(m));
  if (errors.length) report(errors, [], 'Nothing was derived. Fix these first.');
  const out = derive(sets);
  SETS.forEach(s => fs.writeFileSync(path.join(DATA, s.file), serialise(out[s.key])));
  fs.writeFileSync(path.join(DATA, 'index.json'), serialise(indexFile(out)));
  fs.writeFileSync(path.join(DATA, 'voyage.js'), voyageRegistry(out));
  fs.mkdirSync(DM, { recursive: true });
  fs.writeFileSync(path.join(DM, 'dossiers.json'), serialise(dossierIndex(out, dm)));
  console.log('derived: ' + SETS.map(s => `${out[s.key].length} ${s.key}`).join(' · '));
}

const verb = process.argv[2];
if (verb === 'derive') runDerive();
else if (verb === 'check') check();
else if (verb === 'guard') guard();
else { console.log('usage: node scripts/data.js derive | check | guard'); process.exit(2); }
