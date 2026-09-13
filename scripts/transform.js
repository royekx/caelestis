#!/usr/bin/env node
/**
 * transform.js — turns the raw tracker export into site-ready JSON.
 *
 * Reads  : data/raw/*.json
 * Writes : data/*.json  + data/coverage.md
 *
 * Everything the tracker cannot yet express is applied here as an overlay:
 * item classification, quest kind and objectives, slug corrections, and the
 * H'catha spelling. Each overlay is listed in coverage.md so the tracker can
 * be backfilled from it afterwards.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const RAW = path.join(ROOT, 'data', 'raw');
const OUT = path.join(ROOT, 'data');

const read = f => JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8'));
const EMPTY = new Set(['', '—', '-', 'N/A', 'n/a']);
const blank = v => v == null || EMPTY.has(String(v).trim());
const clean = v => (blank(v) ? null : String(v).trim());

// ── Overlays ───────────────────────────────────────────────────────────────
// Slugs follow the files that already exist, except where the file preserves
// a misspelling — those get corrected and the old path becomes a redirect.
const SLUG = {
  npc: {
    'Veena': 'veena',                      // file was vena.html
    'Saerthe Abizjn': 'saerthe-abizjn',    // file was saerth-abyzine.html
    "Sor'Kur": 'sor-kur',
    'Mirt the Merciless': 'mirt',
    "Krik'Lit": 'krik-lit',                // tracker had "Crick Lit"
    'Kip and Pik': 'kip-and-pik'
  },
  pc: {
    'Boogie': 'boogie',
    'Casey Geim': 'casey-geim',
    'Gregory': 'gregory',
    'Sol Fortuna': 'sol-fortuna',
    'Tumak Swan': 'tumak-swan',
    'Bartholomew Grayson': 'bartholomew-grayson'
  },
  item: {
    'Incomplete Model Spelljamming Ship': 'half-ship',
    'Star-Etched Constellation Shirt': 'constellation-shirt'
  }
};

// Names the tracker records differently from canon.
const RENAME = {
  npc: { 'Crick Lit': "Krik'Lit", 'Sorcur': "Sor'Kur" },
  pc:  { 'Casey': 'Casey Geim', 'Bartholomew': 'Bartholomew Grayson' },
  loc: { 'Hakatha': "H'catha" }
};

// Class · Item Type · Rarity — the vocabulary the tracker does not carry yet.
const ITEM_META = {
  'half-ship':                    ['Magic Item', 'Wondrous Item', 'Unknown'],
  'constellation-shirt':          ['Mundane',    'Wondrous Item', null],
  'crimson-bag-of-holding':       ['Magic Item', 'Wondrous Item', 'Uncommon'],
  'mirts-wardrobe':               ['Magic Item', 'Wondrous Item', 'Unknown'],
  'crated-centipede-creature':    ['Evidence',   'Curiosity',     null],
  'saerthes-miniature-ship':      ['Magic Item', 'Wondrous Item', 'Unknown'],
  'vocath-arcane-rod':            ['Magic Item', 'Rod',           'Unknown'],
  'marked-crate':                 ['Evidence',   'Container',     null],
  'tumaks-soul-knife':            ['Magic Item', 'Weapon',        null],
  'derelict-logbook':             ['Document',   'Curiosity',     null],
  'collection-manifest':          ['Document',   'Curiosity',     null]
};
const ITEM_SLUG_FIX = {
  "Saerthe's Miniature Spelljamming Ship": 'saerthes-miniature-ship',
  'Marked Crate at the Sky Dock': 'marked-crate'
};

// Items with a page but no tracker row.
const NEW_ITEMS = [
  {
    id: 'ITM-Dk4nW7pv', Item: 'Derelict Logbook', Slug: 'derelict-logbook',
    Type: 'Ship\u2019s log', 'Held By': 'Boogie',
    Origin: 'Recovered from a derelict in the salvage simulation',
    'Overview (Player)': 'The logbook the crews raced for in the salvage exercise, found behind the body of something long decomposed. Boogie slipped it into his own chest and has carried it since. Casey and Gregory each bound a duplicate of its pages during the githyanki attack, so three identical copies exist.',
    'Key Details (Player)': '\u2022 [S02] Found in the captain\u2019s quarters of the derelict, half-tucked behind a long-decomposed body\n\u2022 [S02] Boogie slipped it inside his own chest without explaining the impulse\n\u2022 [S02] Casey bound a duplicate of the pages and Gregory followed with a second, leaving three identical logbooks\n\u2022 [S03] Boogie confirmed it still rests in his chest beside the half-ship',
    Seen: 'S02, S03', Mentioned: null, Status: 'Held', Visibility: 'Player', Linked: ''
  },
  {
    id: 'ITM-Cm8rT3wk', Item: 'Collection Manifest', Slug: 'collection-manifest',
    Type: 'Cargo manifest', 'Held By': 'The Tyrant Ship',
    Origin: 'Found aboard the tyrant ship',
    'Overview (Player)': 'The tyrant ship\u2019s own cargo record. It is what gave the broken autognome in the hold a name \u2014 Ostekk-6 \u2014 and it lists what else the vessel was carrying.',
    'Key Details (Player)': '\u2022 [S04] Gave the broken autognome in the cargo hold its name: Ostekk-6',
    Seen: 'S04', Mentioned: null, Status: 'Held', Visibility: 'Player', Linked: ''
  }
];

// Kind · Giver · Parent · Objectives. An objective is what the party knows it
// must do next — decided, told, or the only reasonable inference. What they
// fought through to get there is record, not objective.
const QUEST_META = {
  'the-caelestis-burglaries': {
    kind: 'Quest', giver: 'Mirt the Merciless', giverSlug: 'mirt', parent: null,
    objectives: [
      ['x', 'Recover the arcane device from the wrecked simulation chamber'],
      [' ', 'Look into Joffrey and the man named Jeffrey'],
      [' ', "Trace the marked crate\u2019s route through Mr. Blip"]
    ]
  },
  'the-tyrant-ship-and-the-hakatha-meteor': {
    kind: 'Quest', giver: 'Boatswain Tarto', giverSlug: 'boatswain-tarto', parent: null,
    slugFix: 'the-tyrant-ship-and-the-hcatha-meteor',
    nameFix: "The Tyrant Ship and the H\u2019catha Meteor",
    objectives: [
      ['x', 'Board the tyrant ship'],
      [' ', 'Commandeer the tyrant ship'],
      [' ', 'Install the spelljamming helm on the command deck'],
      [' ', "Fly to H\u2019catha"],
      [' ', 'Recover the adamantine meteor']
    ]
  },
  'the-path-to-viren': {
    kind: 'Quest', giver: null, parent: null,
    objectives: [
      ['x', 'Learn what the wardrobe shows'],
      [' ', 'Find Zerathis, or charts and word of him'],
      [' ', 'Find a route to Viren']
    ]
  },
  'tumaks-search-for-family': {
    kind: 'Quest', giver: null, parent: null,
    objectives: [[' ', 'Find a way home']]
  },
  'the-living-clue-in-the-crate':     { kind: 'Thread', parent: 'the-caelestis-burglaries' },
  'vocaths-grudge':                   { kind: 'Thread', parent: 'the-caelestis-burglaries' },
  'ostekk-6':                         { kind: 'Thread', parent: 'the-tyrant-ship-and-the-hcatha-meteor' },
  'tumaks-runes-and-the-tether-home': { kind: 'Thread', parent: 'tumaks-search-for-family' },
  'gregorys-pull':                    { kind: 'Thread', parent: null },
  'the-unfinished-ship-within-boogie':{ kind: 'Thread', parent: null },
  'the-laughter-of-beshaba':          { kind: 'Thread', parent: null }
};

// Threads the tracker does not hold yet.
const NEW_QUESTS = [
  {
    id: 'QST-Vg7kR2nw', Quest: "Vocath\u2019s Grudge Against Mirt", Slug: 'vocaths-grudge',
    Type: 'World / Mystery', 'Related Character(s)': 'Mirt the Merciless',
    'Current State': 'Mirt has named Vocath an old enemy who has borne him a grudge for a long time, which makes anyone connected to Mirt a target.',
    'Overview (Player)': 'The arcane device that nearly killed a chamber of cadets carried a single marking: Vocath. Mirt knew the name at once. He has said only that Vocath has held a grudge against him for a long time, and that anyone connected to him is a potential target.',
    'Key Details (Player)': '\u2022 [S03] The rod recovered from the simulation chamber bore the marking Vocath\n\u2022 [S03] Saerthe raised an illusion of the rod before Mirt and named the marking\n\u2022 [S03] Mirt\u2019s face went still \u2014 not confusion. He said Vocath had harboured a grudge against him for a long time\n\u2022 [S03] He told the cadets to keep it to themselves, and warned that anyone connected to him could be a target',
    'Last Engaged (Session #)': 3, Urgency: 'High', Status: 'Open', Visibility: 'Player', Linked: ''
  },
  {
    id: 'QST-Ok5mB8tz', Quest: 'Ostekk-6', Slug: 'ostekk-6-thread',
    Type: 'Character / Mystery', 'Related Character(s)': 'Gregory',
    'Current State': 'Ostekk-6 is saved but mute and broken, its core intact and its body beyond what magic can mend. It wears Gregory\u2019s face and nobody has explained why.',
    'Overview (Player)': 'The autognome the crew pulled out of the wreckage in the tyrant ship\u2019s cargo hold wears Gregory\u2019s face. Its core is sound; its body is a mechanical problem no spell will close. It speaks only through the link Tumak opened, and what it knows about the ship has already proved worth having.',
    'Key Details (Player)': '\u2022 [S03] Found in the cargo hold with its lower half gone and its voice box destroyed, the clockwork horrors still feeding on it\n\u2022 [S03] Gregory looked at its face and saw his own\n\u2022 [S04] The cargo manifest gave it a name: Ostekk-6\n\u2022 [S04] Its core is arcane and intact, but the frame is a physical repair beyond what the crew can do aboard\n\u2022 [S04] It warned of a mimic aboard, a spreading bloom, and more clockwork horrors',
    'Last Engaged (Session #)': 4, Urgency: 'Medium', Status: 'Open', Visibility: 'Player', Linked: ''
  }
];

// Only bodies, spheres, stations and vessels get pages by default. Rooms
// stay data, surfaced in the Within section of whatever contains them,
// until one earns promotion to its own page.
const LOC_TYPE = {
  'realmspace': 'Sphere', 'viren-star-system': 'Sphere',
  'toril': 'Planet', 'hcatha': 'Planet',
  'caelestis': 'Station', 'the-tyrant-ship': 'Vessel',
  'spelljammer-nexus': 'Room', 'mirts-quarters': 'Room', 'sky-dock': 'Room',
  'the-weeping-goddess': 'Room', 'the-sea-dock': 'Room', 'simulation-deck': 'Room'
};
const LOC_PARENT = {
  'toril': 'realmspace', 'hcatha': 'realmspace',
  'caelestis': 'toril', 'the-tyrant-ship': 'toril',
  'spelljammer-nexus': 'caelestis', 'mirts-quarters': 'caelestis', 'sky-dock': 'caelestis',
  'the-weeping-goddess': 'caelestis', 'the-sea-dock': 'caelestis', 'simulation-deck': 'caelestis'
};
// Sphere row the tracker does not hold yet — nothing above Toril and
// H'catha existed for Parent to point at. Viren already has its own row.
const NEW_LOCATIONS = [
  {
    id: 'LOC-Sp4hR9nk', Location: 'Realmspace', Slug: 'realmspace',
    Type: 'Sphere', 'Key NPCs / Factions': null,
    'Overview (Player)': 'The crystal sphere the crew calls home \u2014 a sun, a scatter of inner and outer worlds, and the shell of Deep Astral holding it all in.',
    'Key Details (Player)': null, Visited: null, Mentioned: 'S01, S02, S03, S04',
    Status: 'Accessible', Visibility: 'Player', Linked: ''
  }
];

// ── Helpers ────────────────────────────────────────────────────────────────
const notes = { renamed: [], reslugged: [], added: [], overlaid: [], questions: [] };

function fixText(s) {
  if (s == null) return null;
  return String(s).replace(/Hakatha/g, 'H\u2019catha').replace(/Crick Lit/g, 'Krik\u2019Lit')
                  .replace(/\bSorcur\b/g, 'Sor\u2019Kur');
}

function groupBullets(cell) {
  if (blank(cell)) return [];
  const groups = new Map();
  String(cell).split('\n').map(l => l.replace(/^\s*[\u2022\u00b7*-]\s*/, '').trim()).filter(Boolean)
    .forEach(line => {
      const m = line.match(/^\[(S\d+)\]\s*(.*)$/i);
      const key = m ? m[1].toUpperCase() : null;
      const text = fixText(m ? m[2].trim() : line);
      if (!text) return;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(text);
    });
  return [...groups].map(([session, bullets]) => ({
    session, number: session ? parseInt(session.slice(1), 10) : null, bullets
  })).sort((a, b) => (a.number ?? 999) - (b.number ?? 999));
}

const list = cell => blank(cell) ? []
  : String(cell).split(',').map(s => s.trim()).filter(Boolean);

// ── Load ───────────────────────────────────────────────────────────────────
const raw = {
  sessions: read('session-log.json'),
  pcs:      read('player-characters.json'),
  npcs:     read('npcs.json'),
  factions: read('factions.json'),
  locations:read('locations.json'),
  items:    read('items.json'),
  quests:   read('quests.json')
};

console.log('Transforming...');

// ── NPCs ───────────────────────────────────────────────────────────────────
let npcs = raw.npcs.filter(r => !blank(r.id) && r.Visibility !== 'DM');

// Kip and Pik speak as one and share a page; they merge until they diverge.
const kip = npcs.find(n => n.Name === 'Kip'), pik = npcs.find(n => n.Name === 'Pik');
let pikRedirect = null;
if (kip && pik) {
  pikRedirect = pik.id;              // anything linking to Pik's old id now resolves to Kip's
  kip.Name = 'Kip and Pik';
  kip['Key Details (Player)'] = [kip['Key Details (Player)'], pik['Key Details (Player)']]
    .filter(x => !blank(x)).join('\n');
  kip['Overview (Player)'] = 'Two gnomes who run the Sky Dock and speak almost as a shared thought. They taught the cadets the anatomy of a spelljamming vessel and what the helm actually does \u2014 that a ship is not steered so much as joined.';
  npcs = npcs.filter(n => n.Name !== 'Pik');
  notes.overlaid.push('Merged Kip and Pik into one record; they share a page and speak as one.');
}

npcs.forEach(n => {
  const was = n.Name;
  if (RENAME.npc[n.Name]) { n.Name = RENAME.npc[n.Name]; notes.renamed.push(`NPC ${was} \u2192 ${n.Name}`); }
  const slug = SLUG.npc[n.Name] || n.Slug;
  if (slug !== n.Slug) notes.reslugged.push(`NPC ${n.Name}: ${n.Slug} \u2192 ${slug}`);
  n.Slug = slug;
});

// ── Player characters ──────────────────────────────────────────────────────
const pcs = raw.pcs.filter(r => !blank(r.id)).map(p => {
  const was = p.Character;
  if (RENAME.pc[p.Character]) { p.Character = RENAME.pc[p.Character]; notes.renamed.push(`PC ${was} \u2192 ${p.Character}`); }
  const slug = SLUG.pc[p.Character] || p.Slug;
  if (slug !== p.Slug) notes.reslugged.push(`PC ${p.Character}: ${p.Slug || '\u2014'} \u2192 ${slug}`);
  p.Slug = slug;
  return p;
});

// ── Locations ──────────────────────────────────────────────────────────────
const locations = raw.locations.filter(r => !blank(r.id) && r.Visibility !== 'DM').map(l => {
  if (RENAME.loc[l.Location]) {
    notes.renamed.push(`Location ${l.Location} \u2192 ${RENAME.loc[l.Location]}`);
    l.Location = RENAME.loc[l.Location];
    l.Slug = 'hcatha';
  }
  return l;
});
NEW_LOCATIONS.forEach(l => { locations.push(l); notes.added.push(`Location: ${l.Location} (sphere row; nothing pointed above Toril/H\u2019catha before)`); });

// ── Items ──────────────────────────────────────────────────────────────────
let items = raw.items.filter(r => !blank(r.id) && r.Visibility !== 'DM');
NEW_ITEMS.forEach(it => { items.push(it); notes.added.push(`Item: ${it.Item} (page existed, no tracker row)`); });
items.forEach(it => {
  if (ITEM_SLUG_FIX[it.Item]) it.Slug = ITEM_SLUG_FIX[it.Item];
  const slug = SLUG.item[it.Item] || it.Slug;
  if (slug !== it.Slug) notes.reslugged.push(`Item ${it.Item}: ${it.Slug} \u2192 ${slug}`);
  it.Slug = slug;
  const meta = ITEM_META[it.Slug];
  if (!meta) { notes.questions.push(`No Class/Type/Rarity for item "${it.Item}"`); return; }
  [it.Class, it['Item Type'], it.Rarity] = meta;
});
notes.overlaid.push(`Applied Class / Item Type / Rarity to ${items.length} items.`);

// ── Quests ─────────────────────────────────────────────────────────────────
let quests = raw.quests.filter(r => !blank(r.id) && r.Visibility !== 'DM');
NEW_QUESTS.forEach(q => { quests.push(q); notes.added.push(`Thread: ${q.Quest}`); });
quests.forEach(q => {
  const meta = QUEST_META[q.Slug] || QUEST_META[q.Slug.replace('-thread', '')];
  if (meta && meta.slugFix) { notes.reslugged.push(`Quest ${q.Quest}: ${q.Slug} \u2192 ${meta.slugFix}`); q.Slug = meta.slugFix; }
  if (meta && meta.nameFix) { q.Quest = meta.nameFix; }
  if (!meta) { notes.questions.push(`No Kind for quest "${q.Quest}"`); return; }
  q.Kind = meta.kind;
  q.Giver = meta.giver || null;
  q.GiverSlug = meta.giverSlug || null;
  q.Parent = meta.parent || null;
  q.Objectives = (meta.objectives || []).map(([state, text]) => ({ done: state === 'x', text }));
});
notes.overlaid.push('Applied Kind / Giver / Parent / Objectives to all quests.');

// ── Build published records ────────────────────────────────────────────────
const byId = new Map();
function build(rows, cfg) {
  return rows.map(r => {
    const rec = {
      id: String(r.id).trim(),
      type: cfg.type,
      slug: r.Slug,
      name: fixText(r[cfg.nameCol]),
      url: `/${cfg.dir}/${r.Slug}.html`,
      voyages: groupBullets(r['Key Details (Player)']),
      seen: list(r.Seen || r.Visited),
      mentioned: list(r.Mentioned),
      links: [],
      _linked: list(r.Linked),
      fields: {}
    };
    for (const [k, v] of Object.entries(r)) {
      if (['id','Slug','Key Details (DM)','Overview (DM)','Flag','action','sheet',
           'row_number','Sessions Since','Heat','Key Details (Player)','Region'].includes(k)) continue;
      rec.fields[k] = typeof v === 'string' ? fixText(clean(v)) : (v ?? null);
    }
    byId.set(rec.id, rec);
    return rec;
  });
}

const out = {
  sessions: build(raw.sessions.filter(r => !blank(r.id)),
    { type: 'session', nameCol: 'Title', dir: 'voyages' })
    .map(s => ({ ...s, slug: `voyage-${String(parseInt(s.fields.Session.slice(1),10)).padStart(3,'0')}`,
                 url: `/voyages/voyage-${String(parseInt(s.fields.Session.slice(1),10)).padStart(3,'0')}.html` })),
  playerCharacters: build(pcs, { type: 'pc', nameCol: 'Character', dir: 'crew-manifest' }),
  npcs:      build(npcs,      { type: 'npc',      nameCol: 'Name',     dir: 'dossiers' }),
  factions:  build(raw.factions.filter(r => !blank(r.id) && r.Visibility !== 'DM'),
                              { type: 'faction',  nameCol: 'Faction',  dir: 'factions' }),
  locations: build(locations, { type: 'location', nameCol: 'Location', dir: 'navigation-records' }),
  items:     build(items,     { type: 'item',     nameCol: 'Item',     dir: 'inventory/entries' }),
  quests:    build(quests,    { type: 'quest',    nameCol: 'Quest',    dir: 'quests' })
};

// Locations: real Type per row, parent chain, and page eligibility. Rooms
// are excluded from hasPage by default until one is promoted.
out.locations.forEach(l => {
  l.fields.Type = LOC_TYPE[l.slug] || l.fields.Type;
  const parentSlug = LOC_PARENT[l.slug] || null;
  const p = parentSlug ? out.locations.find(o => o.slug === parentSlug) : null;
  l.parent = p ? { slug: p.slug, name: p.name, url: p.url } : null;
  l.kind = l.fields.Type || 'Room';
  l.hasPage = l.kind !== 'Room';
  if (!l.hasPage) l.url = null;
});
out.locations.forEach(l => { l.within = out.locations.filter(o => o.parent && o.parent.slug === l.slug)
  .map(o => ({ slug: o.slug, name: o.name, url: o.url, type: o.kind })); });

// Quests: resolve parent and giver into usable references.
const questBySlug = new Map(out.quests.map(q => [q.slug, q]));
out.quests.forEach(q => {
  const p = q.fields.Parent ? questBySlug.get(q.fields.Parent) : null;
  q.parent = p ? { slug: p.slug, name: p.name, url: p.url } : null;
  q.kind = q.fields.Kind || 'Thread';
  q.objectives = q.fields.Objectives || [];
  const done = q.objectives.filter(o => o.done).length;
  q.progress = q.objectives.length ? { done, total: q.objectives.length } : null;
  if (q.fields.Giver) q.giver = { name: q.fields.Giver, slug: q.fields.GiverSlug,
                                  url: `/dossiers/${q.fields.GiverSlug}.html` };
  ['Kind','Objectives','Parent','Giver','GiverSlug'].forEach(k => delete q.fields[k]);
});
out.quests.forEach(q => { q.children = out.quests.filter(c => c.parent && c.parent.slug === q.slug)
  .map(c => ({ slug: c.slug, name: c.name, url: c.url, kind: c.kind })); });

// ── Links, both directions ─────────────────────────────────────────────────
const stub = r => ({ id: r.id, name: r.name, type: r.type, slug: r.slug, url: r.url });
const dangling = [];
Object.values(out).flat().forEach(rec => {
  (rec._linked || []).forEach(tid0 => {
    // Pik's id was retired in the merge; anything that pointed at it now
    // resolves to the combined Kip-and-Pik record instead of dangling.
    const tid = (tid0 === pikRedirect && kip) ? kip.id : tid0;
    const t = byId.get(tid);
    if (!t) { dangling.push(`${rec.name} (${rec.id}) \u2192 ${tid}`); return; }
    if (!rec.links.some(l => l.id === t.id)) rec.links.push(stub(t));
    if (!t.links.some(l => l.id === rec.id)) t.links.push(stub(rec));
  });
});
Object.values(out).flat().forEach(r => { delete r._linked;
  r.links.sort((a,b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name)); });

// Held items, derived rather than typed on the character.
[...out.playerCharacters, ...out.npcs, ...out.locations].forEach(holder => {
  const held = out.items.filter(i => i.fields['Held By'] &&
    i.fields['Held By'].toLowerCase() === holder.name.toLowerCase());
  if (held.length) holder.items = held.map(stub);
});

// ── Write ──────────────────────────────────────────────────────────────────
const FILES = { sessions:'sessions.json', playerCharacters:'player-characters.json',
  npcs:'npcs.json', factions:'factions.json', locations:'locations.json',
  items:'items.json', quests:'quests.json' };
for (const [k, f] of Object.entries(FILES)) {
  fs.writeFileSync(path.join(OUT, f), JSON.stringify(out[k], null, 2));
  console.log(`  data/${f.padEnd(24)} ${out[k].length}`);
}
const latest = Math.max(...out.sessions.map(s => parseInt(s.fields.Session.slice(1), 10)));
fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify({
  generated: new Date().toISOString(),
  latestSession: `S${String(latest).padStart(2,'0')}`, latestSessionNumber: latest,
  counts: Object.fromEntries(Object.entries(out).map(([k,v]) => [k, v.length]))
}, null, 2));

// ── Coverage ───────────────────────────────────────────────────────────────
const L = [];
L.push('# Transform coverage', '');
L.push('What this pass changed that the tracker does not yet reflect. Backfill from here.', '');
const sec = (t, rows) => { L.push(`## ${t} (${rows.length})`, ''); rows.length ? rows.forEach(r => L.push(`- ${r}`)) : L.push('None.'); L.push(''); };
sec('Renamed', notes.renamed);
sec('Re-slugged', notes.reslugged);
sec('Added', notes.added);
sec('Overlays applied', notes.overlaid);
sec('Links pointing at nothing', dangling);
sec('Needs a decision', notes.questions);
L.push('## Pages to create', '');
Object.entries(FILES).forEach(([k]) => {
  if (k === 'sessions' || k === 'factions') return;
  out[k].filter(r => r.url).forEach(r => {
    const f = path.join(ROOT, r.url.replace(/^\//, ''));
    if (!fs.existsSync(f)) L.push(`- \`${r.url.replace(/^\//,'')}\` \u2014 ${r.name}`);
  });
});
L.push('');
fs.writeFileSync(path.join(OUT, 'coverage.md'), L.join('\n'));
console.log('  data/coverage.md');
console.log('\nDone.');
