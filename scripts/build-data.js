#!/usr/bin/env node
/**
 * build-data.js — transforms raw tracker exports into site-ready JSON.
 *
 * Reads  : data/raw/*.json   (committed by n8n Workflow C)
 * Writes : data/*.json       (consumed by page templates)
 *          data/coverage.md  (what needs attention)
 *
 * Run:  node scripts/build-data.js
 *
 * No dependencies. Node 18+.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const RAW = path.join(ROOT, 'data', 'raw');
const OUT = path.join(ROOT, 'data');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

// Columns stripped from every record before publishing.
const DROP_COLUMNS = [
  'Key Details (DM)',
  'Overview (DM)',
  'Flag',
  'action',
  'sheet',
  'row_number',
  'Sessions Since',
  'Heat'
];

const TYPES = {
  sessions: {
    raw: 'session-log.json',
    out: 'sessions.json',
    type: 'session',
    nameCol: 'Title',
    dir: 'voyages',
    hasSlug: false          // derived from the session key
  },
  playerCharacters: {
    raw: 'player-characters.json',
    out: 'player-characters.json',
    type: 'pc',
    nameCol: 'Character',
    dir: 'crew-manifest',
    hasSlug: true
  },
  npcs: {
    raw: 'npcs.json',
    out: 'npcs.json',
    type: 'npc',
    nameCol: 'Name',
    dir: 'dossiers',
    hasSlug: true
  },
  factions: {
    raw: 'factions.json',
    out: 'factions.json',
    type: 'faction',
    nameCol: 'Faction',
    dir: 'factions',
    hasSlug: true
  },
  locations: {
    raw: 'locations.json',
    out: 'locations.json',
    type: 'location',
    nameCol: 'Location',
    dir: 'locations',
    hasSlug: true
  },
  items: {
    raw: 'items.json',
    out: 'items.json',
    type: 'item',
    nameCol: 'Item',
    dir: 'inventory',
    hasSlug: true
  },
  quests: {
    raw: 'quests.json',
    out: 'quests.json',
    type: 'quest',
    nameCol: 'Quest',
    dir: 'quests',
    hasSlug: true
  }
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const EMPTY = new Set(['', '—', '-', 'N/A', 'n/a']);

function isEmpty(v) {
  return v == null || EMPTY.has(String(v).trim());
}

function readRaw(filename) {
  const p = path.join(RAW, filename);
  if (!fs.existsSync(p)) {
    console.warn(`  ! missing ${filename}, skipping`);
    return [];
  }
  const text = fs.readFileSync(p, 'utf8').trim();
  if (!text) {
    console.warn(`  ! ${filename} is empty — the export node wrote nothing`);
    return [];
  }
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    console.warn(`  ! ${filename} is not valid JSON: ${e.message}`);
    return [];
  }
  return Array.isArray(parsed) ? parsed : [];
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** "S03" -> 3, "3" -> 3, anything else -> null */
function sessionNumber(key) {
  const m = String(key || '').match(/(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

/**
 * Splits a bulleted, session-tagged cell into per-session groups.
 *
 *   "• [S01] Did a thing\n• [S03] Did another"
 *   -> [ {session:'S01', number:1, bullets:['Did a thing']},
 *        {session:'S03', number:3, bullets:['Did another']} ]
 *
 * Bullets with no tag collect under session null so nothing is lost.
 */
function groupBullets(cell) {
  if (isEmpty(cell)) return [];

  const lines = String(cell)
    .split('\n')
    .map(l => l.replace(/^\s*[•·*-]\s*/, '').trim())
    .filter(Boolean);

  const groups = new Map();

  for (const line of lines) {
    const m = line.match(/^\[(S\d+)\]\s*(.*)$/i);
    const key = m ? m[1].toUpperCase() : null;
    const text = m ? m[2].trim() : line;
    if (!text) continue;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(text);
  }

  const out = [];
  for (const [session, bullets] of groups) {
    out.push({ session, number: sessionNumber(session), bullets });
  }

  // Untagged last; otherwise chronological.
  out.sort((a, b) => {
    if (a.number == null) return 1;
    if (b.number == null) return -1;
    return a.number - b.number;
  });

  return out;
}

/** "S01, S02, S04" -> ['S01','S02','S04'] */
function sessionList(cell) {
  if (isEmpty(cell)) return [];
  return String(cell)
    .split(',')
    .map(s => s.trim().toUpperCase())
    .filter(Boolean);
}

function idList(cell) {
  if (isEmpty(cell)) return [];
  return String(cell)
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
}

// ---------------------------------------------------------------------------
// Load and normalize
// ---------------------------------------------------------------------------

console.log('Reading raw exports...');

const records = {};   // typeKey -> [record]
const byId = new Map();
const issues = {
  missingSlug: [],
  duplicateSlug: [],
  danglingLinks: [],
  missingPage: [],
  dmFiltered: 0,
  flagged: []
};

for (const [key, cfg] of Object.entries(TYPES)) {
  const rows = readRaw(cfg.raw);
  const out = [];

  for (const row of rows) {
    // Skip blank rows left behind by spreadsheet formulas.
    if (isEmpty(row.id)) continue;

    // Note anything the DM flagged before we strip the column.
    if (!isEmpty(row.Flag)) {
      issues.flagged.push({
        type: cfg.type,
        id: row.id,
        name: row[cfg.nameCol],
        flag: String(row.Flag).trim()
      });
    }

    // DM-only entities never reach the published site.
    if (String(row.Visibility || '').trim().toUpperCase() === 'DM') {
      issues.dmFiltered++;
      continue;
    }

    const name = isEmpty(row[cfg.nameCol]) ? '(unnamed)' : String(row[cfg.nameCol]).trim();

    let slug;
    if (cfg.hasSlug) {
      if (isEmpty(row.Slug)) {
        slug = slugify(name);
        issues.missingSlug.push({ type: cfg.type, id: row.id, name, derived: slug });
      } else {
        slug = String(row.Slug).trim();
      }
    } else {
      // Sessions: S03 -> voyage-003
      const n = sessionNumber(row.Session);
      slug = n == null ? slugify(name) : `voyage-${String(n).padStart(3, '0')}`;
    }

    // Everything else, minus the DM-only and bookkeeping columns.
    const fields = {};
    for (const [k, v] of Object.entries(row)) {
      if (DROP_COLUMNS.includes(k)) continue;
      if (k === 'id' || k === 'Slug') continue;
      fields[k] = isEmpty(v) ? null : v;
    }

    const record = {
      id: String(row.id).trim(),
      type: cfg.type,
      slug,
      name,
      url: `/${cfg.dir}/${slug}.html`,
      voyages: groupBullets(row['Key Details (Player)']),
      seen: sessionList(row.Seen || row.Visited),
      mentioned: sessionList(row.Mentioned),
      links: [],                     // filled in below
      _linkedRaw: idList(row.Linked),
      fields
    };

    // Bullets now live in `voyages`; drop the raw cell.
    delete record.fields['Key Details (Player)'];

    out.push(record);

    if (byId.has(record.id)) {
      console.warn(`  ! duplicate id ${record.id}`);
    }
    byId.set(record.id, record);
  }

  records[key] = out;
  console.log(`  ${cfg.out.padEnd(24)} ${out.length} records`);
}

// ---------------------------------------------------------------------------
// Resolve links, both directions
// ---------------------------------------------------------------------------

console.log('Resolving links...');

function stub(rec) {
  return { id: rec.id, name: rec.name, type: rec.type, slug: rec.slug, url: rec.url };
}

for (const list of Object.values(records)) {
  for (const rec of list) {
    for (const targetId of rec._linkedRaw) {
      const target = byId.get(targetId);

      if (!target) {
        // Either a typo, or it pointed at a DM-only entity we filtered out.
        issues.danglingLinks.push({ from: rec.id, fromName: rec.name, to: targetId });
        continue;
      }

      // Forward
      if (!rec.links.some(l => l.id === target.id)) {
        rec.links.push(stub(target));
      }
      // Reverse — this is why Linked only needs writing one direction.
      if (!target.links.some(l => l.id === rec.id)) {
        target.links.push(stub(rec));
      }
    }
  }
}

for (const list of Object.values(records)) {
  for (const rec of list) {
    delete rec._linkedRaw;
    rec.links.sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name));
  }
}

// ---------------------------------------------------------------------------
// Derive held items per character
// ---------------------------------------------------------------------------

console.log('Deriving held items...');

const holders = [...records.playerCharacters, ...records.npcs, ...records.locations];

for (const holder of holders) {
  const held = records.items.filter(item => {
    const by = item.fields['Held By'];
    return by && String(by).trim().toLowerCase() === holder.name.toLowerCase();
  });
  if (held.length) {
    holder.items = held.map(stub);
  }
}

// ---------------------------------------------------------------------------
// Page existence
// ---------------------------------------------------------------------------

for (const [key, cfg] of Object.entries(TYPES)) {
  for (const rec of records[key]) {
    const file = path.join(ROOT, cfg.dir, `${rec.slug}.html`);
    rec.hasPage = fs.existsSync(file);
    if (!rec.hasPage) {
      issues.missingPage.push({ type: rec.type, name: rec.name, path: `${cfg.dir}/${rec.slug}.html` });
    }
  }

  // Duplicate slugs within a type would collide on disk.
  const seen = new Map();
  for (const rec of records[key]) {
    if (seen.has(rec.slug)) {
      issues.duplicateSlug.push({ type: rec.type, slug: rec.slug, ids: [seen.get(rec.slug), rec.id] });
    }
    seen.set(rec.slug, rec.id);
  }
}

// ---------------------------------------------------------------------------
// Latest session, for the hub and the changed-this-session page
// ---------------------------------------------------------------------------

const latestNumber = records.sessions.reduce((max, s) => {
  const n = sessionNumber(s.fields.Session);
  return n != null && n > max ? n : max;
}, 0);
const latestKey = `S${String(latestNumber).padStart(2, '0')}`;

const changed = [];
for (const [key, cfg] of Object.entries(TYPES)) {
  if (key === 'sessions') continue;
  for (const rec of records[key]) {
    if (rec.voyages.some(v => v.session === latestKey)) {
      changed.push(stub(rec));
    }
  }
}

// ---------------------------------------------------------------------------
// Write
// ---------------------------------------------------------------------------

console.log('Writing...');

for (const [key, cfg] of Object.entries(TYPES)) {
  const dest = path.join(OUT, cfg.out);
  fs.writeFileSync(dest, JSON.stringify(records[key], null, 2));
  console.log(`  data/${cfg.out}`);
}

fs.writeFileSync(
  path.join(OUT, 'index.json'),
  JSON.stringify({
    generated: new Date().toISOString(),
    latestSession: latestKey,
    latestSessionNumber: latestNumber,
    counts: Object.fromEntries(
      Object.entries(records).map(([k, v]) => [k, v.length])
    ),
    changedThisSession: changed
  }, null, 2)
);
console.log('  data/index.json');

// ---------------------------------------------------------------------------
// Coverage report
// ---------------------------------------------------------------------------

const lines = [];
lines.push('# Coverage report');
lines.push('');
lines.push(`Generated ${new Date().toISOString()} · latest session ${latestKey}`);
lines.push('');

function section(title, rows, render) {
  lines.push(`## ${title} (${rows.length})`);
  lines.push('');
  if (!rows.length) {
    lines.push('None.');
  } else {
    rows.forEach(r => lines.push(`- ${render(r)}`));
  }
  lines.push('');
}

section('Pages that do not exist yet', issues.missingPage,
  r => `\`${r.path}\` — ${r.name} (${r.type})`);

section('Rows flagged for review', issues.flagged,
  r => `${r.name} (${r.type}, \`${r.id}\`) — ${r.flag}`);

section('Links pointing at nothing', issues.danglingLinks,
  r => `${r.fromName} (\`${r.from}\`) links to \`${r.to}\``);

section('Missing slugs (derived from name)', issues.missingSlug,
  r => `${r.name} (${r.type}, \`${r.id}\`) — using \`${r.derived}\``);

section('Duplicate slugs', issues.duplicateSlug,
  r => `\`${r.slug}\` (${r.type}) — ${r.ids.join(' and ')}`);

lines.push('## Summary');
lines.push('');
lines.push(`- DM-only rows withheld from the site: ${issues.dmFiltered}`);
lines.push(`- Entities touched in ${latestKey}: ${changed.length}`);
Object.entries(records).forEach(([k, v]) => lines.push(`- ${k}: ${v.length}`));
lines.push('');

fs.writeFileSync(path.join(OUT, 'coverage.md'), lines.join('\n'));
console.log('  data/coverage.md');

console.log('\nDone.');
if (issues.danglingLinks.length || issues.duplicateSlug.length) {
  console.log('Check data/coverage.md — there are link or slug problems.');
}
