#!/usr/bin/env node
/**
 * data.js — the campaign record's three verbs.
 *
 *   node tools/data.js derive    recompute every derived field, in place
 *   node tools/data.js check     verify the record, the DM layer and the pages
 *   node tools/data.js guard     the deploy's test: is data/ fit to publish
 *
 * The record is data/*.json. It is written by hand during a session run (see
 * docs/SESSION-RUN.md) and it is the only place a fact is entered.
 * Pages are its rendering. This script generates no page: `derive` fills in
 * the fields that follow mechanically from the authored ones, and `check`
 * proves that the record is consistent with itself, with the DM layer under
 * prime/data/, and with the pages that display it.
 *
 * AUTHORED  id slug name number date kind parentId giverId fields objectives
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
  { key: 'pcs',       file: 'player-characters.json', type: 'pc',       prefix: 'PC',  dir: 'registry/crew-manifest',
    index: 'registry/crew-manifest/index.html',
    fields: ['Species', 'Class', 'Specialisation', 'Station', 'Clearance', 'Player Concept (as known)',
      'Affiliation(s)', 'Personal Thread', 'Current State', 'What They Last Learned', 'Notable Items',
      'Overview (Player)', 'Status'] },
  { key: 'npcs',      file: 'npcs.json',              type: 'npc',      prefix: 'NPC', dir: 'registry/dossiers',
    index: 'registry/dossiers/index.html',
    fields: ['Gender', 'Affiliation(s)', 'Party Relationship', 'Role (as known)', 'Current State',
      'Overview (Player)', 'Category', 'Status'] },
  { key: 'factions',  file: 'factions.json',          type: 'faction',  prefix: 'FAO', dir: 'registry/factions',
    index: 'registry/factions/index.html',
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

const AUTHORED = ['id', 'slug', 'name', 'number', 'date', 'kind', 'parentId', 'giverId', 'fields',
  'objectives', 'rewards', 'voyages', 'seen', 'mentioned', 'linked'];
const DERIVED = ['type', 'url', 'links', 'parent', 'giver', 'children', 'within', 'items', 'progress'];
// The order keys are written in. Authored first, derived last, so a diff of a
// session run reads top-down as "what was entered" then "what followed".
const KEY_ORDER = ['id', 'type', 'slug', 'name', 'number', 'date', 'kind', 'parentId', 'giverId',
  'fields', 'objectives', 'rewards', 'voyages', 'seen', 'mentioned', 'linked',
  'url', 'links', 'parent', 'giver', 'children', 'within', 'items', 'progress'];
// Which sets may carry which of the optional authored keys.
const ONLY = { number: ['session'], date: ['session'], kind: ['location', 'quest'], parentId: ['location', 'quest'],
  giverId: ['quest'], objectives: ['quest'], rewards: ['quest'] };
// What a giver may be.
const GIVERS = ['npc', 'pc', 'faction'];
// A voyage's rough in-game date in Fleet time: cycle.kindling.ember, or a span
// of two such dates joined by an en dash ("1491.7.3–1491.7.12"). Sixteen
// kindlings to a cycle, about thirty embers to a kindling.
const FLEET_DATE = /^(\d{1,4})\.(\d{1,2})\.(\d{1,2})$/;
function fleetDate(s) {
  const parts = String(s).split('–');
  if (parts.length > 2) return null;
  const ds = parts.map(p => FLEET_DATE.exec(p));
  if (ds.some(m => !m)) return null;
  const n = ds.map(m => [+m[1], +m[2], +m[3]]);
  if (n.some(([, k, e]) => k < 1 || k > 16 || e < 1 || e > 31)) return null;
  const key = ([c, k, e]) => (c * 16 + k) * 32 + e;
  if (n.length === 2 && key(n[1]) <= key(n[0])) return null;
  return { from: n[0], to: n[n.length - 1], key, text: d => d.join('.') };
}

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
      if (r.date !== undefined && (typeof r.date !== 'string' || !fleetDate(r.date)))
        err(`${at}: date "${r.date}" is not a Fleet date: cycle.kindling.ember (kindling 1–16, ember 1–31), or an ascending span joined by an en dash`);
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
    ' * Written by `node tools/data.js derive` from data/sessions.json.',
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

// The infobox rows each kind of page carries, in order, and where each value
// comes from. A function is a derived value; a string is a field.
// What a page prints beside Last seen. Present in person beats named in
// passing: an entity the crew has only heard of reads "named only".
function lastSeenLabel(r) {
  const max = a => Math.max(...a);
  if (r.seen && r.seen.length) return `Voyage ${pad(max(r.seen))}`;
  if (r.mentioned && r.mentioned.length) return `Voyage ${pad(max(r.mentioned))} · named only`;
  if (r.voyages && r.voyages.length) return `Voyage ${pad(max(r.voyages.map(v => v.number)))}`;
  return null;
}
// Every voyage the record puts an entity in, oldest first: seen or mentioned,
// seen winning when it is both. A crew member or a quest has neither field and
// appears in the voyages its log holds.
function appearances(r) {
  const seen = r.seen || [], named = r.mentioned || [];
  if (seen.length || named.length)
    return uniqSorted(seen.concat(named)).map(n => ({ number: n, named: !seen.includes(n) }));
  return uniqSorted((r.voyages || []).map(v => v.number)).map(n => ({ number: n, named: false }));
}
// First seen: the earliest appearance of any kind, marked when it was a name only.
function firstSeenLabel(r) {
  const a = appearances(r)[0];
  return a ? `Voyage ${pad(a.number)}${a.named ? ' · named only' : ''}` : null;
}
const voyageEnd = end => r => {
  const a = (r.voyages || []).map(v => v.number);
  return a.length ? `Voyage ${pad(end === 'first' ? Math.min(...a) : Math.max(...a))}` : null;
};
const STATS = {
  pc: [['Species', 'Species'], ['Class', 'Class'], ['Specialisation', 'Specialisation', 'optional'],
    ['Station', 'Station'], ['Clearance', 'Clearance'], ['Status', 'Status'],
    ['First voyage', voyageEnd('first')], ['Last voyage', voyageEnd('last')]],
  npc: [['Role', 'Role (as known)'], ['Crew', 'Party Relationship'], ['Affiliation', 'Affiliation(s)', 'optional'],
    ['Gender', 'Gender', 'optional'], ['Status', 'Status'], ['First seen', firstSeenLabel], ['Last seen', lastSeenLabel]],
  faction: [['Type', 'Type'], ['Relationship', 'Party Relationship'], ['Status', 'Status'],
    ['First seen', firstSeenLabel], ['Last seen', lastSeenLabel]],
  location: [['Type', 'Type'], ['Located in', r => r.parent ? r.parent.name : null, 'optional'],
    [r => r.kind === 'Vessel' ? 'Known aboard' : 'Known figures', 'Key NPCs / Factions', 'optional'],
    ['Status', 'Status'], ['First seen', firstSeenLabel], ['Last seen', lastSeenLabel]],
  item: [['Type', 'Type'], ['Class', 'Class'], ['Item type', 'Item Type'], ['Rarity', 'Rarity', 'optional'],
    ['Held by', 'Held By', 'optional'], ['Origin', 'Origin'], ['Status', 'Status'],
    ['First seen', firstSeenLabel], ['Last seen', lastSeenLabel]],
  quest: [['Kind', r => r.kind], ['Type', 'Type'], ['Given by', r => r.giver ? r.giver.name : null, 'optional'],
    ['Involves', 'Related Character(s)'], ['Progress', r => r.progress ? `${r.progress.done} of ${r.progress.total}` : null, 'optional'],
    ['Status', 'Status'], ['First voyage', voyageEnd('first')], ['Last voyage', voyageEnd('last')]]
};
const SUBTITLE = { pc: 'Player Concept (as known)', npc: 'Role (as known)',
  faction: 'Type', location: 'Type', item: 'Type' };

function checkPage(r, err, voyages) {
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
    const date = region(src, 'date');
    if (r.date && date == null) err(`${at}: no date region; the record gives ${r.date}`);
    else if (date != null && text(date) !== plain(r.date || '')) err(`${at}: date reads "${text(date)}", record gives "${r.date || 'none'}"`);
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
      const want = STATS[r.type].map(([key, from, optional]) => {
        const label = typeof key === 'function' ? key(r) : key;
        const v = typeof from === 'function' ? from(r) : r.fields[from];
        return (v == null || v === '') ? (optional ? null : [label, '']) : [label, plain(v)];
      }).filter(Boolean);
      const keys = a => a.map(x => x[0]).join(' · ');
      if (keys(shown) !== keys(want)) err(`${at}: stat rows are "${keys(shown)}", record gives "${keys(want)}"`);
      else shown.forEach(([k, v], i) => { if (v !== want[i][1]) err(`${at}: ${k} reads "${v}", record gives "${want[i][1]}"`); });
      // A link in an infobox row names a record, never a quest; a row that
      // names people links only to dossiers, the crew manifest or factions.
      const PEOPLE = ['Crew', 'Given by', 'Involves', 'Known figures', 'Known aboard'];
      matches(/class="stat-key"[^>]*>([\s\S]*?)<\/span>\s*<span class="stat-val[^"]*"[^>]*>([\s\S]*?)<\/span>\s*<\/div>/g, stats).forEach(m => {
        const key = text(m[1]);
        matches(/href="([^"]+)"/g, m[2]).forEach(h => {
          const to = resolveFrom(at, h[1]);
          if (to.startsWith('quests/')) err(`${at}: the ${key} row links ${h[1]}, a quest; infobox links name records`);
          else if (PEOPLE.includes(key) && !/^registry\/(dossiers|crew-manifest|factions)\//.test(to)) err(`${at}: the ${key} row links ${h[1]}; it names people, so it links a dossier, a crew page or a faction`);
        });
      });
    }
  }

  // All appearances: the infobox fly-out lists every voyage the record puts
  // the entity in, oldest first, each linked to its voyage page under that
  // voyage's title, with "named only" where the crew only heard of it.
  {
    const want = appearances(r);
    const box = region(src, 'appearances');
    if (box == null) { if (want.length) err(`${at}: no appearances region; the record gives ${want.map(a => 'V' + pad(a.number)).join(' · ')}`); }
    else {
      const shown = matches(/<li[^>]*>([\s\S]*?)<\/li>/g, box).map(m => {
        const a = /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/.exec(m[1]);
        const t = /class="appear-title"[^>]*>([\s\S]*?)<\/span>/.exec(m[1]);
        const tag = /class="appear-tag"[^>]*>([\s\S]*?)<\/span>/.exec(m[1]);
        return { href: a ? resolveFrom(at, a[1]) : null, label: a ? text(a[2]) : '', title: t ? text(t[1]) : '', tag: tag ? text(tag[1]) : '' };
      });
      const list = x => x.map(v => v.label).join(', ') || 'none';
      const wantShown = want.map(a => ({ label: `Voyage ${pad(a.number)}`, a }));
      if (list(shown) !== list(wantShown)) err(`${at}: appearances list ${list(shown)}, record gives ${list(wantShown)}`);
      else shown.forEach((s, i) => {
        const a = want[i], v = voyages.get(a.number);
        if (v && s.href !== v.url) err(`${at}: appearance ${s.label} links ${s.href}, record gives ${v.url}`);
        if (v && s.title !== plain(v.name)) err(`${at}: appearance ${s.label} is titled "${s.title}", record says "${v.name}"`);
        if (s.tag !== (a.named ? 'named only' : '')) err(`${at}: appearance ${s.label} is tagged "${s.tag || 'nothing'}", record gives "${a.named ? 'named only' : 'nothing'}"`);
      });
      const count = /class="appear-count"[^>]*>([\s\S]*?)<\/span>/.exec(box);
      if (!count || text(count[1]) !== String(want.length)) err(`${at}: appearances count reads "${count ? text(count[1]) : 'nothing'}", record gives ${want.length}`);
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
  // The Previous Voyages summary names its voyages, oldest first: "V001 · V002".
  const keys = /<span class="prior-keys">([\s\S]*?)<\/span>/.exec(region(src, 'priorVoyages') || '');
  const wantKeys = rec.slice(1).map(v => 'V' + pad(v.number)).reverse().join(' · ');
  if (keys && text(keys[1]) !== wantKeys) err(`${at}: Previous Voyages keys read "${text(keys[1])}", record gives "${wantKeys}"`);
  if (!keys && wantKeys) err(`${at}: Previous Voyages has no prior-keys label; it should read "${wantKeys}"`);
  latest.concat(prior).forEach(p => {
    const v = rec.find(x => x.number === p.number);
    if (!v) return;
    if (p.bullets.length !== v.bullets.length) return err(`${at}: Voyage ${pad(p.number)} has ${p.bullets.length} bullets on the page, ${v.bullets.length} in the record`);
    p.bullets.forEach((t, i) => differs(`Voyage ${pad(p.number)} bullet ${i + 1}`, t, plain(v.bullets[i])));
  });

  // Connections: the chips on the page are the record's links, no more, no
  // fewer, each under the linked record's own name. On a tabbed record the
  // card ends its panel, so the next .rec-panel also ends it.
  const card = /<div class="xref-card">\s*<div class="xref-head"><span class="xref-title">Connections<\/span>[\s\S]*?(?=<div class="divider">|<div data-field|<div class="rec-panel|\n\s*<\/div>\s*<\/div>\s*<\/body>)/.exec(src);
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

  // A board with panels files each row under one of them. The row's own text
  // agreeing with the record is not enough: a finished quest left sitting in
  // the open panel reads as unfinished, and every check above it passes. So
  // the panel a row sits in, the nesting, and the count on each tab are tested.
  //   quests   every open quest, one top row each; under it, as .is-child rows,
  //            every open thread that is part of it. The tab counts quests.
  //   threads  every open thread once, a thread that is part of a quest saying
  //            so ("Part of <quest>"). The tab counts threads.
  //   closed   every complete record. The tab counts its rows.
  if (set.key === 'quests' && /class="board-panel/.test(src)) {
    const open = recs.filter(r => r.fields.Status !== 'Complete');
    const want = {
      quests: open.filter(r => r.kind !== 'Thread'),
      threads: open.filter(r => r.kind === 'Thread'),
      closed: recs.filter(r => r.fields.Status === 'Complete')
    };
    const counted = {};
    matches(/<section class="board-panel[^"]*" id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g, src).forEach(m => {
      const id = m[1];
      const rows = matches(/<div class="log-entry q-entry([^"]*)"[^>]*>\s*<div class="log-row">\s*<a class="log-row-link" href="([^"]+)">([\s\S]*?)<\/a>/g, m[2])
        .map(x => ({ child: /\bis-child\b/.test(x[1]), r: resolve(x[2]), href: x[2], body: x[3] }));
      rows.filter(x => !x.r).forEach(x => err(`${p}: the ${id} panel links ${x.href}, which is not a quest in the record`));
      const top = rows.filter(x => x.r && !x.child), kids = rows.filter(x => x.r && x.child);
      const exp = want[id];
      if (!exp) return err(`${p}: a board panel "${id}" the check does not know`);
      const slugs = a => a.map(r => r.slug).sort().join(', ');
      if (slugs(top.map(x => x.r)) !== slugs(exp)) err(`${p}: the ${id} panel lists ${slugs(top.map(x => x.r)) || 'nothing'}; the record gives ${slugs(exp) || 'nothing'}`);
      counted[id] = top.length;
      if (id === 'quests') {
        let parent = null;
        rows.forEach(x => {
          if (!x.r) return;
          if (!x.child) { parent = x.r; return; }
          if (!parent || !x.r.parent || x.r.parent.slug !== parent.slug) err(`${p}: ${x.r.slug} is nested under ${parent ? parent.slug : 'nothing'}; the record makes it part of ${x.r.parent ? x.r.parent.slug : 'no quest'}`);
        });
        const nestWant = want.threads.filter(t => t.parent && exp.some(q => q.slug === t.parent.slug));
        if (slugs(kids.map(x => x.r)) !== slugs(nestWant)) err(`${p}: the quests panel nests ${slugs(kids.map(x => x.r)) || 'nothing'}; the record gives ${slugs(nestWant) || 'nothing'}`);
      } else if (kids.length) err(`${p}: the ${id} panel nests rows; only the quests panel does`);
      if (id === 'threads') top.forEach(x => {
        const sub = /class="row-sub">([\s\S]*?)<\/span>/.exec(x.body);
        const shown = sub ? text(sub[1]) : '';
        const wantSub = x.r.parent ? 'Part of ' + plain(x.r.parent.name) : '';
        if (shown !== wantSub) err(`${p}: the threads row for ${x.r.slug} reads "${shown}", record gives "${wantSub}"`);
      });
    });
    // Each row's Details panel repeats its record: the player overview, the
    // objectives in order with their done marks, the rewards, and a link to
    // the quest's page. A panel is opened by the row's own toggle.
    matches(/<a class="log-row-link" href="([^"]+)">[\s\S]*?<\/a>\s*<button class="log-toggle"[^>]*aria-controls="([^"]+)"[^>]*>[\s\S]*?<\/button>\s*<\/div>\s*<div class="log-overview q-details" id="([^"]+)" hidden>([\s\S]*?)<div class="overview-foot"><a class="overview-link" href="([^"]+)"/g, src).forEach(m => {
      const [, href, ctl, id, body, foot] = m;
      const r = resolve(href);
      if (!r) return;
      const at = `${p}: the details for ${r.slug}`;
      if (ctl !== id) err(`${at}: its toggle opens #${ctl}, the panel is #${id}`);
      if (foot !== href) err(`${at}: link to ${foot}, the row links ${href}`);
      const syn = /class="glance-synopsis">([\s\S]*?)<\/div>/.exec(body);
      const wantSyn = plain(r.fields['Overview (Player)'] || '');
      if (!syn || text(syn[1]) !== wantSyn) err(`${at}: overview differs from the record`);
      const objs = matches(/<li class="obj-item([^"]*)"[\s\S]*?class="obj-text"[^>]*>([\s\S]*?)<\/span>/g, body)
        .map(o => ({ done: /is-done/.test(o[1]), text: text(o[2]) }));
      const wantO = (r.objectives || []).map(o => ({ done: !!o.done, text: plain(o.text) }));
      if (JSON.stringify(objs) !== JSON.stringify(wantO)) err(`${at}: objectives differ from the record`);
      const rw = matches(/<li class="loot-item is-reward">\s*<span class="loot-name">([\s\S]*?)<\/span>\s*(?:<span class="loot-note">([\s\S]*?)<\/span>)?/g, body)
        .map(o => ({ name: text(o[1]), note: text(o[2]) }));
      const wantR = (r.rewards || []).map(o => ({ name: plain(o.name), note: plain(o.note) }));
      if (JSON.stringify(rw) !== JSON.stringify(wantR)) err(`${at}: rewards differ from the record`);
    });
    const rowsAll = matches(/<div class="log-entry q-entry/g, src).length;
    const detailsAll = matches(/class="log-overview q-details"/g, src).length;
    if (detailsAll !== rowsAll) err(`${p}: ${rowsAll} rows, ${detailsAll} details panels; every row has one`);
    matches(/data-panel="([^"]+)"[^>]*>[^<]*<span class="board-count">(\d+)<\/span>/g, src).forEach(m => {
      const [, id, n] = m;
      if (counted[id] === undefined) return;
      if (Number(n) !== counted[id]) err(`${p}: the ${id} tab counts ${n}, the panel lists ${counted[id]}`);
    });
  }

}

// ── links ──────────────────────────────────────────────────────────────────
// Every local href and src on the site resolves, and every #anchor exists.
// Templates carry placeholders by design and are left out.
// Every stylesheet's braces balance. A lost } (twice now, both from merges)
// nests every rule after it and silently breaks the styles below.
function checkStyles(err) {
  const dir = path.join(ROOT, 'styles');
  fs.readdirSync(dir).filter(f => f.endsWith('.css')).forEach(f => {
    const src = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\/\*[\s\S]*?\*\//g, m => m.replace(/[^\n]/g, ' '));
    let depth = 0, line = 1, open = [];
    for (const ch of src) {
      if (ch === '\n') line++;
      else if (ch === '{') { depth++; open.push(line); }
      else if (ch === '}') { depth--; open.pop(); if (depth < 0) { err(`styles/${f}:${line}: a } with no {`); return; } }
    }
    if (depth > 0) err(`styles/${f}: ${depth} unclosed {, the first opened at line ${open[0]}`);
  });
}

function checkLinks(err) {
  const pages = new Map();
  (function walk(dir) {
    fs.readdirSync(path.join(ROOT, dir)).forEach(f => {
      const rel = dir ? `${dir}/${f}` : f;
      if (rel.startsWith('.') || rel === 'node_modules') return;
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

// ── player boundary ────────────────────────────────────────────────────────
// The player index is built from the glob in deploy.yml, so that glob is what
// "a player page" means here. Every page it matches carries one bare
// section:<top dir> filter on <body> (a root page uses its own name, the
// gate is "home", and a grouped subfolder uses its own name), or S.E.A.R.C.H.
// cannot scope it. And no player page links
// into the DM wiki, or into the FIA except from the Nexus index, which holds
// the FIA's door.
function globRe(g) {
  let re = '';
  for (let i = 0; i < g.length; i++) {
    const c = g[i];
    if (c === '*') {
      if (g[i + 1] === '*') { i++; if (g[i + 1] === '/') { i++; re += '(?:.*/)?'; } else re += '.*'; }
      else re += '[^/]*';
    } else re += c.replace(/[.+?^$()|[\]\\]/g, '\\$&');
  }
  return new RegExp('^' + re + '$');
}
function playerGlob() {
  const y = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'deploy.yml'), 'utf8');
  const m = /--site \.\s*\\\s*--glob "\{([^}"]*)\}"/.exec(y);
  if (!m) throw new Error('no player --glob found in .github/workflows/deploy.yml');
  return m[1].split(',').map(globRe);
}
// A page in a subfolder of a grouping folder takes the subfolder's name as
// its section: voyages/bearings/ is "bearings", registry/dossiers/ is
// "dossiers". A page directly in voyages/ is "voyages".
const GROUPED = ['voyages', 'registry'];
function checkPlayer(err) {
  const globs = playerGlob();
  const pages = [];
  (function walk(dir) {
    fs.readdirSync(path.join(ROOT, dir || '.')).forEach(f => {
      const rel = dir ? `${dir}/${f}` : f;
      if (/^(\.|node_modules$|prime$|restricted$|docs$|scripts$|tools$|styles$|assets$|data$|pagefind$)/.test(rel)) return;
      if (fs.statSync(path.join(ROOT, rel)).isDirectory()) return walk(rel);
      if (f.endsWith('.html') && !f.endsWith('-template.html')) pages.push(rel);
    });
  })('');
  pages.forEach(rel => {
    const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    if (globs.some(re => re.test(rel))) {
      const seg = rel.split('/');
      const top = seg.length > 2 && GROUPED.includes(seg[0]) ? seg[1]
        : seg.length > 1 ? seg[0] : rel === 'index.html' ? 'home' : rel.replace(/\.html$/, '');
      const body = /<body\b[^>]*>/.exec(src);
      const f = body && /data-pagefind-filter="([^"]*)"/.exec(body[0]);
      if (!f) err(`${rel}: <body> carries no data-pagefind-filter; it should read section:${top}`);
      else if (f[1] !== `section:${top}`) err(`${rel}: <body> filter reads "${f[1]}", it should read section:${top}`);
    }
    matches(/["'`]((?:\.{1,2}\/)*(prime|restricted)\/[^"'`]*)["'`]/g, src).forEach(m => {
      const t = path.posix.normalize(path.posix.join(path.posix.dirname(rel), m[1]));
      if (t.startsWith('prime/')) err(`${rel}: links ${m[1]}; no player page links into prime/`);
      else if (t.startsWith('restricted/') && rel !== 'spelljammer-nexus/index.html') err(`${rel}: links ${m[1]}; only the Nexus index links into restricted/`);
    });
  });
}

// ── bearing pages ──────────────────────────────────────────────────────────
// Every element <tag …> whose opening tag passes `test`, with depth counting,
// as { open, inner, outer }, in page order.
function elements(src, tag, test) {
  const out = [], openRe = new RegExp('<' + tag + '\\b[^>]*>', 'g');
  let open;
  while ((open = openRe.exec(src))) {
    if (!test(open[0])) continue;
    const start = open.index + open[0].length, re = new RegExp('<(/?)' + tag + '\\b[^>]*>', 'g');
    re.lastIndex = start;
    let depth = 1, m;
    while ((m = re.exec(src))) {
      depth += m[1] ? -1 : 1;
      if (depth === 0) { out.push({ open: open[0], inner: src.slice(start, m.index), outer: src.slice(open.index, m.index + m[0].length) }); break; }
    }
  }
  return out;
}
const hasClass = c => o => new RegExp('\\bclass="[^"]*\\b' + c + '\\b').test(o);
const links = h => matches(/<a\b[^>]*\bhref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, h).map(m => ({ href: m[1], text: text(m[2]), tag: m[0] }));

// The Current Bearing and the per-voyage bearing pages. Each page's Last time
// panel, its strip, its tabs and its Heading list are held to the
// record; the Current Bearing's Last time panel is the latest voyage page's,
// byte for byte, and its Quest Board is the record's open quests and threads.
// The banner is checked with data/bearing.js, in check § 6.
// The Heading groups: their data-group keys and their labels.
const GROUP_LABEL = { todo: 'Standing Orders', decide: 'All Hands', note: 'Weather Eye' };
// A count in words for the banner's passage: "Fourteen embers".
const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const inWords = n => NUMBER_WORDS[n] || String(n);
const counted = (n, one, many) => `${n} ${n === 1 ? one : many}`;
// The next voyage's real-world date as scripts/nav.js writes it:
// '2026-11-21 19:00' reads "Saturday, November 21 · 7 pm".
function sessionText(v) {
  const m = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?$/.exec(v || '');
  if (!m) return null;
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
  if (d.getUTCMonth() !== +m[2] - 1) return null;
  let out = `${DAYS[d.getUTCDay()]}, ${MONTHS[+m[2] - 1]} ${+m[3]}`;
  if (m[4]) { const h = +m[4]; out += ` · ${h % 12 || 12}${m[5] !== '00' ? ':' + m[5] : ''} ${h < 12 ? 'am' : 'pm'}`; }
  return out;
}

function checkBearings(fresh, latest, err) {
  const DIR = 'voyages/bearings';
  const read = f => fs.readFileSync(path.join(ROOT, DIR, f), 'utf8');
  const lastTime = src => elements(src, 'section', o => /\bid="last-time"/.test(o))[0];
  const sails = {};
  // Heading on one page. Standing Orders (todo) and All Hands (decide) hold only what the crew
  // can act on from where they are. Once a later voyage is written up, each
  // item on its own voyage page ends one of three ways: settled (is-done, an
  // outcome, and "· Voyage NNN" when a record pins the voyage), carried
  // forward (is-carried, "Carried forward") or set aside (is-aside, "Set
  // aside", with "on the Quest Board: <name>" where it still matters).
  // The Weather Eye (note) is one voyage's nudges, never ticked or carried.
  const questNames = new Set(fresh.quests.map(q => plain(q.name)));
  const sailItems = (rel, src, n, isIndex) => {
    const sec = elements(src, 'section', o => /\bid="sail"/.test(o))[0];
    if (!sec) err(`${rel}: no Heading section (section#sail)`);
    else {
      const kk = elements(sec.inner, 'span', hasClass('bearing-kicker'))[0], hh = elements(sec.inner, 'h2', hasClass('bearing-title'))[0];
      const want = isIndex ? ['Next time', 'Heading'] : [`After Voyage ${pad(n)}`, 'Heading'];
      if (!kk || !hh || text(kk.inner) !== want[0] || text(hh.inner) !== want[1]) err(`${rel}: the Heading header should read "${want.join(' · ')}"`);
    }
    const r = region(src, 'before-you-sail');
    if (r === null) { err(`${rel}: no Heading list (data-field="before-you-sail")`); return []; }
    const groups = elements(r, 'div', hasClass('sail-group'));
    groups.forEach(g => {
      const m = /\bdata-group="([^"]*)"/.exec(g.open);
      if (!m || !GROUP_LABEL[m[1]]) return err(`${rel}: a Heading group should carry data-group="todo", "decide" or "note"`);
      const l = elements(g.inner, 'h3', hasClass('sail-label'))[0];
      if (!l || text(l.inner) !== GROUP_LABEL[m[1]]) err(`${rel}: the ${m[1]} group's label reads "${l ? text(l.inner) : ''}"; it should read "${GROUP_LABEL[m[1]]}"`);
    });
    const groupOf = li => { const g = groups.find(x => x.inner.includes(li.outer)); const m = g && /\bdata-group="([^"]*)"/.exec(g.open); return m ? m[1] : ''; };
    return elements(r, 'li', hasClass('sail-item')).map(li => {
      const k = /\bdata-item="([^"]+)"/.exec(li.open);
      const o = elements(li.inner, 'span', hasClass('sail-outcome'))[0];
      // A Standing Orders item that is a quest's next step links that quest:
      // <a class="sail-quest" href="../../quests/…">Quest name</a>, after the item's words.
      const ql = /<a class="sail-quest" href="([^"]+)">([\s\S]*?)<\/a>/.exec(li.inner);
      if (ql) {
        const q = fresh.quests.find(x => x.url === path.posix.normalize(path.posix.join(DIR, ql[1])));
        const gi = groups.find(x => x.inner.includes(li.outer));
        if (!gi || !/data-group="todo"/.test(gi.open)) err(`${rel}: a quest link sits outside Standing Orders; only Standing Orders items link a quest`);
        if (!q) err(`${rel}: a Standing Orders item links ${ql[1]}, which is not a quest or thread on record`);
        else if (text(ql[2]) !== plain(q.name)) err(`${rel}: a Standing Orders item's quest link reads "${text(ql[2])}", the record says "${q.name}"`);
      }
      const it = { keys: k ? k[1].split(/\s+/) : [], text: text(li.inner.replace(/<span class="sail-outcome">[\s\S]*?<\/span>/, '').replace(/<a class="sail-quest"[\s\S]*?<\/a>/, '')),
        group: groupOf(li), done: hasClass('is-done')(li.open), carried: hasClass('is-carried')(li.open), aside: hasClass('is-aside')(li.open),
        outcome: o ? text(o.inner) : '', page: rel, n };
      const states = ['done', 'carried', 'aside'].filter(x => it[x]);
      if (!it.keys.length) err(`${rel}: Heading item "${it.text}" has no data-item key`);
      if (states.length > 1) err(`${rel}: "${it.text}" is ${states.join(' and ')}; an item ends one way only`);
      if (it.group === 'note') {
        if (states.length || o) err(`${rel}: "${it.text}" is on the Weather Eye; those are never ticked, carried or set aside`);
        return it;
      }
      if (isIndex || n === latest) {
        if (states.length || o) err(`${rel}: "${it.text}" is marked ${states.join(' ') || 'with an outcome'}; this list is still open, nothing on it is settled yet`);
        return it;
      }
      if (!states.length) err(`${rel}: "${it.text}" is still open; once Voyage ${pad(n + 1)} is written up, each Standing Orders and All Hands item is settled, carried forward or set aside`);
      if (states.length && !it.outcome) err(`${rel}: "${it.text}" is ${states[0]} with no outcome`);
      if (it.carried && it.outcome !== 'Carried forward') err(`${rel}: "${it.text}" is carried; its outcome should read "Carried forward"`);
      if (it.aside) {
        if (!/^Set aside\b/.test(it.outcome)) err(`${rel}: "${it.text}" is set aside; its outcome should begin "Set aside"`);
        const p = /on the Quest Board: (.+)$/.exec(it.outcome);
        if (p && !questNames.has(p[1])) err(`${rel}: "${it.text}" points to "${p[1]}" on the Quest Board; no quest or thread on record has that name`);
      }
      if (it.done && /^(Carried forward|Set aside)/.test(it.outcome)) err(`${rel}: "${it.text}" is ticked but its outcome reads "${it.outcome}"`);
      if (it.done || it.aside) {
        const v = matches(/Voyage (\d{3})/g, it.outcome).map(m => parseInt(m[1], 10));
        if (it.done && v.length && !/· Voyage \d{3}$/.test(it.outcome)) err(`${rel}: "${it.text}" is ticked; a voyage in its outcome goes at the end ("· Voyage NNN")`);
        v.forEach(x => { if (x <= n || x > latest) err(`${rel}: "${it.text}" names Voyage ${pad(x)}; it should be a voyage after ${pad(n)}, up to ${pad(latest)}`); });
      }
      return it;
    });
  };

  function page(rel, src, n, isIndex) {
    const s = fresh.sessions.find(x => x.number === n);
    // the strip
    const st = region(src, 'voyage-strip');
    if (st === null) err(`${rel}: no voyage strip (data-field="voyage-strip")`);
    else {
      const want = fresh.sessions.filter(x => isIndex || x.number <= n).sort((a, b) => a.number - b.number);
      const got = links(st);
      if (got.map(a => a.href).join() !== want.map(x => `voyage-${pad(x.number)}.html`).join())
        err(`${rel}: the strip links ${got.map(a => a.href.replace(/\D/g, '')).join(' ') || 'nothing'}; it should link ${want.map(x => pad(x.number)).join(' ')}`);
      got.forEach(a => {
        const x = want.find(w => a.href === `voyage-${pad(w.number)}.html`);
        const t = /class="bs-title">([\s\S]*?)<\/span>/.exec(a.tag), num = /class="bs-num">([\s\S]*?)<\/span>/.exec(a.tag);
        if (x && (!t || !num || text(t[1]) !== plain(x.name) || text(num[1]) !== pad(x.number)))
          err(`${rel}: the strip reads "${a.text}" for Voyage ${pad(x.number)}, the record says "${x.name}"`);
        const cur = /\baria-current="page"/.test(a.tag);
        if (x && cur !== (x.number === n)) err(`${rel}: Voyage ${pad(x.number)} ${cur ? 'carries' : 'lacks'} aria-current in the strip`);
      });
      const nx = elements(st, 'li', hasClass('is-next'));
      if (isIndex && (nx.length !== 1 || !text(nx[0].inner).startsWith(pad(latest + 1)))) err(`${rel}: the strip should end with "${pad(latest + 1)} Next voyage"`);
      if (!isIndex && nx.length) err(`${rel}: a voyage page's strip stops at its own voyage; bearing.js adds the rest`);
    }
    // the date
    if (!isIndex) {
      const d = fleetDate(s.date), end = d ? d.text(d.to) : null;
      const shown = regions(src, 'voyage-date').map(text);
      if (shown.length !== 1 || shown[0] !== end) err(`${rel}: Fleet date reads "${shown.join(', ')}", Voyage ${pad(n)} ends ${end}`);
    }
    // Last time
    const col = lastTime(src);
    if (!col) return err(`${rel}: no Last time column (section#last-time)`);
    if (!new RegExp(`\\bdata-voyage="${pad(n)}"`).test(col.open)) err(`${rel}: section#last-time should carry data-voyage="${pad(n)}"`);
    const k = elements(col.inner, 'span', hasClass('bearing-kicker'))[0];
    if (!k || text(k.inner) !== `Last time · Voyage ${pad(n)}`) err(`${rel}: the kicker should read "Last time · Voyage ${pad(n)}"`);
    const h = elements(col.inner, 'h2', hasClass('bearing-title'))[0];
    if (!h || text(h.inner) !== plain(s.name)) err(`${rel}: the title reads "${h ? text(h.inner) : ''}", the record says "${s.name}"`);
    const people = (name, want, label) => {
      const r = region(col.inner, name);
      if (r === null) return err(`${rel}: no ${name} list in Last time`);
      const got = links(r).map(a => ({ url: resolveFrom(`${DIR}/x.html`, a.href), text: a.text }));
      const gu = got.map(a => a.url).sort().join(), wu = want.map(x => x.url).sort().join();
      if (gu !== wu) err(`${rel}: ${label} lists ${got.map(a => a.text).join(', ')}; the record has ${want.map(x => x.name).join(', ')}`);
      got.forEach(a => { const x = want.find(w => w.url === a.url); if (x && a.text !== label2(x)) err(`${rel}: ${label} names ${x.name} "${a.text}"; it should read "${label2(x)}"`); });
    };
    const label2 = x => x.id.startsWith('PC-') ? plain(x.name.split(' ')[0]) : plain(x.name);
    people('crew', fresh.pcs.filter(p => (p.voyages || []).some(v => v.number === n)), 'What each of you did');
    people('met', fresh.npcs.filter(x => (x.seen || []).includes(n)), 'Who you met');
    if (!col.inner.includes(`href="../voyage-${pad(n)}.html"`)) err(`${rel}: Last time should link the full account, ../voyage-${pad(n)}.html`);
    sails[rel] = sailItems(rel, src, n, isIndex);
    // the tabs: a link per panel, each with its name and a short subtitle
    const tb = region(src, 'bearing-tabs');
    if (tb === null) err(`${rel}: no tabs (data-field="bearing-tabs")`);
    else {
      const want = isIndex ? ['last-time', 'sail', 'quest-board'] : ['last-time', 'sail'];
      const got = elements(tb, 'a', hasClass('bt-tab'));
      const key = t => { const m = /\bdata-tab="([^"]*)"/.exec(t.open); return m ? m[1] : ''; };
      if (got.map(key).join() !== want.join()) err(`${rel}: the tabs are ${got.map(key).join(', ') || 'none'}; they should be ${want.join(', ')}`);
      got.forEach(t => {
        const k = key(t);
        if (!new RegExp(`\\bhref="#${k}"`).test(t.open) || !new RegExp(`\\bid="tab-${k}"`).test(t.open)) err(`${rel}: the ${k} tab should carry href="#${k}" and id="tab-${k}"`);
      });
      const items = sails[rel] || [], count = g => items.filter(x => x.group === g).length;
      const sailSub = [count('todo') && counted(count('todo'), 'standing order', 'standing orders'),
        count('decide') && `${count('decide')} for all hands`, count('note') && `${count('note')} to watch`].filter(Boolean).join(' · ');
      const label = {
        'last-time': ['Last time', `Voyage ${pad(n)} · ${plain(s.name)}`],
        sail: isIndex ? ['Heading', sailSub] : ['Heading', `After Voyage ${pad(n)}`],
      };
      got.forEach(t => {
        const w = label[key(t)];
        if (!w) return;
        const nm = elements(t.inner, 'span', hasClass('bt-name'))[0], sb = elements(t.inner, 'span', hasClass('bt-sub'))[0];
        const shown = [nm ? text(nm.inner) : '', sb ? text(sb.inner) : ''];
        if (shown.join(' / ') !== w.join(' / ')) err(`${rel}: the ${key(t)} tab reads "${shown.join(' / ')}"; it should read "${w.join(' / ')}"`);
      });
    }
    return col;
  }

  const files = fs.readdirSync(path.join(ROOT, DIR)).filter(f => /^voyage-\d{3}\.html$/.test(f));
  fresh.sessions.forEach(x => { if (!files.includes(`voyage-${pad(x.number)}.html`)) err(`${DIR}/voyage-${pad(x.number)}.html does not exist`); });
  let latestCol = null;
  files.forEach(f => {
    const n = parseInt(f.replace(/\D/g, ''), 10);
    if (!fresh.sessions.some(x => x.number === n)) return err(`${DIR}/${f}: Voyage ${pad(n)} is not on record`);
    const c = page(`${DIR}/${f}`, read(f), n, false);
    if (n === latest) latestCol = c;
  });
  if (!exists(`${DIR}/index.html`)) return err(`${DIR}/index.html does not exist`);
  const isrc = read('index.html'), irel = `${DIR}/index.html`;
  const icol = page(irel, isrc, latest, true);
  // The Current Bearing's Last time is the latest voyage page's, byte for byte.
  if (icol && latestCol && icol.outer !== latestCol.outer)
    err(`${irel}: its Last time column differs from ${DIR}/voyage-${pad(latest)}.html; copy the column across`);

  // Heading, matched across pages by data-item. The Current
  // Bearing's Standing Orders and All Hands are the latest voyage's items plus every
  // item carried forward, each once. A settled or set-aside item is never
  // there; one that still matters is on the Quest Board. A key ends one way.
  const here = sails[irel] || [];
  const onIndex = k => here.find(x => x.keys.includes(k));
  const seenKeys = new Set();
  here.forEach(x => x.keys.forEach(k => { if (seenKeys.has(k)) err(`${irel}: Heading lists "${k}" twice`); seenKeys.add(k); }));
  const past = Object.keys(sails).filter(r => r !== irel).reduce((a, r) => a.concat(sails[r]), []);
  const ends = {};
  past.forEach(it => it.keys.forEach(k => {
    const on = onIndex(k);
    if (it.carried && !on) err(`${it.page}: "${it.text}" is carried forward but is not on the Current Bearing's Heading`);
    if ((it.done || it.aside) && on) err(`${irel}: "${on.text}" is ${it.done ? 'settled' : 'set aside'} on ${it.page}; only open items carried forward belong here`);
    const e = it.done ? 'settled' : it.aside ? 'set aside' : it.carried ? 'carried forward' : '';
    if (e) {
      if (ends[k] && ends[k].e !== e) err(`${it.page}: "${it.text}" is ${e}, but "${k}" is ${ends[k].e} on ${ends[k].page}`);
      ends[k] = ends[k] || { e, page: it.page };
    }
  }));
  const latestItems = sails[`${DIR}/voyage-${pad(latest)}.html`] || [];
  latestItems.forEach(it => it.keys.forEach(k => {
    if (!onIndex(k)) err(`${irel}: Heading is missing "${it.text}" from Voyage ${pad(latest)}'s list`);
  }));
  here.filter(x => x.group !== 'note').forEach(x => x.keys.forEach(k => {
    if (!latestItems.some(it => it.keys.includes(k)) && !past.some(it => it.carried && it.keys.includes(k)))
      err(`${irel}: "${x.text}" is neither on Voyage ${pad(latest)}'s list nor carried forward from an earlier one`);
  }));
  // The Current Bearing's Weather Eye is the latest voyage's, and only that.
  const notes = l => (l || []).filter(x => x.group === 'note').map(x => x.keys.join(' ')).join('|');
  if (notes(here) !== notes(sails[`${DIR}/voyage-${pad(latest)}.html`]))
    err(`${irel}: the Weather Eye should be Voyage ${pad(latest)}'s, in its order`);

  // The Quest Board: open quests, most recently active first, each with its
  // progress, its next objective and its open threads; then the loose threads.
  const qb = region(isrc, 'quest-board');
  if (qb === null) return err(`${irel}: no Quest Board (data-field="quest-board")`);
  if (!/href="\.\.\/\.\.\/quests\/index\.html"/.test(qb)) err(`${irel}: the Quest Board heading should link ../../quests/index.html`);
  const open = q => q.fields.Status === 'Open';
  const last = q => Math.max(0, ...(q.voyages || []).map(v => v.number));
  const want = fresh.quests.map((q, i) => [q, i]).filter(([q]) => q.kind === 'Quest' && open(q))
    .sort((a, b) => last(b[0]) - last(a[0]) || a[1] - b[1]).map(x => x[0]);
  const rows = elements(qb, 'li', hasClass('bq'));
  const url = h => resolveFrom(irel, h);
  const rowQ = rows.map(r => { const a = links(r.inner)[0]; return a ? fresh.quests.find(q => q.url === url(a.href)) : null; });
  if (rowQ.map(q => q ? q.slug : '?').join() !== want.map(q => q.slug).join())
    err(`${irel}: the Quest Board shows ${rowQ.map(q => q ? q.name : '?').join(', ')}; the record's open quests, most recent first, are ${want.map(q => q.name).join(', ')}`);
  rows.forEach((r, i) => {
    const q = rowQ[i];
    if (!q) return;
    const name = links(r.inner)[0];
    if (name.text !== plain(q.name)) err(`${irel}: the Quest Board names ${q.slug} "${name.text}", the record says "${q.name}"`);
    const p = q.progress || { done: 0, total: 0 };
    const prog = elements(r.inner, 'span', hasClass('bq-prog'))[0];
    if (!prog || text(prog.inner) !== `${p.done}/${p.total}`) err(`${irel}: ${q.slug} shows ${prog ? text(prog.inner) : 'no progress'}, the record gives ${p.done}/${p.total}`);
    const w = /width:\s*(\d+)%/.exec(r.inner), pct = p.total ? Math.round(100 * p.done / p.total) : 0;
    if (!w || +w[1] !== pct) err(`${irel}: ${q.slug}'s bar is ${w ? w[1] : '?'}%, it should be ${pct}%`);
    const nx = elements(r.inner, 'span', hasClass('bq-next'))[0];
    const first = (q.objectives || []).find(o => !o.done);
    const shown = nx ? text(nx.inner).replace(/^Next\s*/, '') : '';
    if (shown !== (first ? plain(first.text) : '')) err(`${irel}: ${q.slug} Next reads "${shown}", its first open objective is "${first ? first.text : 'none'}"`);
    const th = fresh.quests.filter(t => t.kind === 'Thread' && t.parentId === q.id && open(t));
    const tl = elements(r.inner, 'ul', hasClass('bq-threads'))[0];
    const got = tl ? links(tl.inner) : [];
    if (got.map(a => url(a.href)).join() !== th.map(t => t.url).join())
      err(`${irel}: ${q.slug} lists threads ${got.map(a => a.text).join(', ') || 'none'}; the record has ${th.map(t => t.name).join(', ') || 'none'}`);
    got.forEach(a => { const t = th.find(x => x.url === url(a.href)); if (t && a.text !== plain(t.name)) err(`${irel}: thread "${a.text}" should read "${t.name}"`); });
  });
  const loose = fresh.quests.filter(t => t.kind === 'Thread' && !t.parentId && open(t));
  const qt = elements(region(isrc, 'bearing-tabs') || '', 'a', o => /\bdata-tab="quest-board"/.test(o))[0];
  const qsub = qt && elements(qt.inner, 'span', hasClass('bt-sub'))[0];
  const qwant = `${counted(want.length, 'quest', 'quests')} · ${counted(loose.length, 'loose thread', 'loose threads')}`;
  if (qt && (!qsub || text(qsub.inner) !== qwant)) err(`${irel}: the Quest Board tab reads "${qsub ? text(qsub.inner) : ''}"; the record gives "${qwant}"`);
  const fold = elements(qb, 'details', hasClass('bearing-fold')).find(d => /Loose threads/.test(d.inner));
  if (!fold) return err(`${irel}: no Loose threads fold on the Quest Board`);
  const sum = /<summary>([\s\S]*?)<\/summary>/.exec(fold.inner);
  if (!sum || text(sum[1]) !== `Loose threads (${loose.length})`) err(`${irel}: the fold reads "${sum ? text(sum[1]) : ''}"; the record has ${loose.length} loose threads`);
  const lg = links(fold.inner.replace(/<summary>[\s\S]*?<\/summary>/, ''));
  if (lg.map(a => url(a.href)).join() !== loose.map(t => t.url).join())
    err(`${irel}: Loose threads lists ${lg.map(a => a.text).join(', ')}; the record has ${loose.map(t => t.name).join(', ')}`);
  lg.forEach(a => { const t = loose.find(x => x.url === url(a.href)); if (t && a.text !== plain(t.name)) err(`${irel}: loose thread "${a.text}" should read "${t.name}"`); });
}

// ── prose ──────────────────────────────────────────────────────────────────
// CLAUDE.md § Writing: three or more negations in one sentence is a rewrite.
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
    if (!s.date) err(`${s.id}: Voyage ${pad(s.number)} has no date; give its rough Fleet date (cycle.kindling.ember)`);
  });
  // Fleet dates run forward: no voyage starts before the one before it ends.
  sets.sessions.slice().sort((a, b) => a.number - b.number).reduce((prev, s) => {
    const d = s.date && fleetDate(s.date);
    if (prev && d && d.key(d.from) < prev.key(prev.to)) err(`${s.id}: Voyage ${pad(s.number)} starts ${d.text(d.from)}, before Voyage ${pad(s.number - 1)} ends ${prev.text(prev.to)}`);
    return d || prev;
  }, null);

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
    // A record that keeps seen and mentioned lists every voyage its bullets
    // are filed under, or All appearances and First seen leave that voyage out.
    if (/^(NPC|FAO|LOC|ITM)-/.test(r.id)) (r.voyages || []).forEach(v => {
      if (!(r.seen || []).includes(v.number) && !(r.mentioned || []).includes(v.number))
        err(`${r.id} ${r.name}: bullets filed under Voyage ${v.number}, which is in neither seen nor mentioned`);
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
      err(`data/${s.file} is stale or hand-edited in a derived field — run: node tools/data.js derive`);
  });
  const current = (p, want) => { if (!fs.existsSync(p) || fs.readFileSync(p, 'utf8') !== want) err(`${path.relative(ROOT, p)} is stale — run: node tools/data.js derive`); };
  current(path.join(DATA, 'index.json'), serialise(indexFile(fresh)));
  current(path.join(DATA, 'voyage.js'), voyageRegistry(fresh));
  current(path.join(DM, 'dossiers.json'), serialise(dossierIndex(fresh, dm)));

  // 5. pages and registers show what the record says
  const guarded = (what, fn) => { try { fn(); } catch (e) { err(`${what}: could not be checked — ${e.message}`); } };
  const voyages = new Map(fresh.sessions.map(v => [v.number, v]));
  all(fresh).forEach(r => guarded(r.url, () => checkPage(r, err, voyages)));
  SETS.forEach(s => guarded(s.index, () => checkIndex(s, fresh[s.key], err)));
  guarded('links', () => checkLinks(err));
  guarded('styles', () => checkStyles(err));
  guarded('player pages', () => checkPlayer(err));

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
    // The current Fleet date is where the latest voyage ends.
    const cd = cur && cur.date && fleetDate(cur.date);
    const now = cd ? cd.text(cd.to) : null;
    if (now && str('date') !== now) err(`data/bearing.js: date is ${str('date') || 'missing'}, the latest voyage ends ${now}`);
    if (now) {
      const pages = ['spelljammer-nexus/fleet-time.html', 'voyages/bearings/index.html'];
      pages.forEach(pg => {
        if (!exists(pg)) return;
        const shown = regions(fs.readFileSync(path.join(ROOT, pg), 'utf8'), 'current-date').map(text);
        if (!shown.length) err(`${pg}: no current-date region; it should read ${now}`);
        shown.forEach(t => { if (t !== now) err(`${pg}: current date reads "${t}", the latest voyage ends ${now}`); });
      });
    }
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
    // The Current Bearing's banner shows next, the date, passage, level and
    // nextSession as data/bearing.js gives them, and its two actions are
    // links.scheduler and links.helm. next is the first Standing Orders item.
    guarded('voyages/bearings/index.html banner', () => {
      const pg = 'voyages/bearings/index.html', at = `${pg}: the banner`;
      if (!exists(pg)) return;
      const src = fs.readFileSync(path.join(ROOT, pg), 'utf8');
      const ban = elements(src, 'section', hasClass('bearing-banner'))[0];
      if (!ban) return err(`${pg}: no banner (section.bearing-banner)`);
      const one = name => { const r = regions(ban.inner, name); return r.length === 1 ? text(r[0]) : null; };
      const next = str('next');
      if (!next) err('data/bearing.js: next is missing; it is the banner\'s headline');
      else if (one('bearing-next') !== plain(next)) err(`${at} reads "${one('bearing-next')}", data/bearing.js next is "${next}"`);
      const so = elements(region(src, 'before-you-sail') || '', 'div', o => /\bdata-group="todo"/.test(o))[0];
      const first = so && elements(so.inner, 'li', hasClass('sail-item'))[0];
      const firstText = first ? text(first.inner.replace(/<a class="sail-quest"[\s\S]*?<\/a>/, '')) : null;
      if (next && firstText !== plain(next)) err(`data/bearing.js: next is "${next}"; the Current Bearing's first Standing Orders item reads "${firstText || 'nothing'}"`);
      if (now && one('current-date') !== now) err(`${at}'s Fleet date reads "${one('current-date')}", the latest voyage ends ${now}`);
      const lv = /\blevel:\s*(\d+)/.exec(b);
      if (!lv) err('data/bearing.js: level is missing');
      else if (one('crew-level') !== lv[1]) err(`${at}'s crew level reads "${one('crew-level')}", data/bearing.js level is ${lv[1]}`);
      // The level-up reminder shows only while levelUp is true.
      const lu = /\blevelUp:\s*(true|false)/.exec(b);
      const shown = /data-field="level-up"/.test(src);
      if (!lu) err('data/bearing.js: levelUp is missing (true while the crew has a level-up waiting, false otherwise)');
      else if ((lu[1] === 'true') !== shown) err(`${at} ${shown ? 'shows' : 'lacks'} the level-up reminder, but data/bearing.js levelUp is ${lu[1]}`);
      else if (shown && one('level-up') !== 'Level up before you sail') err(`${at}'s level-up reminder should read "Level up before you sail"`);
      const ps = /passage:\s*\{([^}]*)\}/.exec(b);
      const em = ps && /embers:\s*(\d+)/.exec(ps[1]);
      const to = ps && /to:\s*(['"])((?:\\.|(?!\1).)*)\1/.exec(ps[1]);
      if (!em || !to) err('data/bearing.js: passage should read { embers: N, to: \'place\' }');
      else {
        const place = unq(to[2]);
        if (!fresh.locations.some(l => plain(l.name) === plain(place))) err(`data/bearing.js: passage.to is "${place}", which is not a location on record`);
        const w = inWords(+em[1]);
        const pw = `${w[0].toUpperCase()}${w.slice(1)} ${+em[1] === 1 ? 'ember' : 'embers'} to ${plain(place)}`;
        if (one('passage') !== pw) err(`${at}'s passage reads "${one('passage')}"; data/bearing.js gives "${pw}"`);
      }
      const ns = str('nextSession');
      if (ns === null) err('data/bearing.js: nextSession is missing; it is \'\' until the poll settles');
      else {
        const nw = ns === '' ? 'Date not set · answer the poll' : sessionText(ns);
        if (nw === null) err(`data/bearing.js: nextSession is "${ns}"; write it 'YYYY-MM-DD' or 'YYYY-MM-DD HH:MM'`);
        else if (one('next-session') !== nw) err(`${at}'s next voyage reads "${one('next-session')}"; data/bearing.js gives "${nw}"`);
      }
      ['scheduler', 'helm'].forEach(k => {
        const a = elements(ban.inner, 'a', o => new RegExp(`\\bdata-link="${k}"`).test(o))[0];
        const want = str(k), href = a && /\bhref="([^"]*)"/.exec(a.open);
        if (!a || !href || href[1] !== want) err(`${at}'s ${k} link is ${href ? href[1] : 'missing'}; data/bearing.js links.${k} is ${want}`);
      });
    });
    // The bar's Met list is the people seen in the latest voyage.
    const metBlock = /met:\s*\[([\s\S]*?)\]/.exec(b);
    const metShown = matches(/href:\s*'([^']+)'/g, metBlock ? metBlock[1] : '').map(m => m[1]).sort();
    const metWant = fresh.npcs.filter(n => (n.seen || []).includes(latest)).map(n => n.url).sort();
    if (metShown.join() !== metWant.join()) err(`data/bearing.js: met lists ${metShown.length} people, the record has ${metWant.length} seen in Voyage ${pad(latest)}`);
  });
  guarded('voyages/bearings/', () => checkBearings(fresh, latest, err));

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
else { console.log('usage: node tools/data.js derive | check | guard'); process.exit(2); }
