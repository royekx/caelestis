#!/usr/bin/env node
/**
 * build-pages.js — scaffolds missing entity pages and injects current data
 * into existing ones.
 *
 * Reads  : data/*.json          (written by build-data.js)
 *          _templates/entity.html
 * Writes : <dir>/<slug>.html    one per entity
 *
 * Two rules that make this safe to run on every push:
 *
 *   1. A page is scaffolded ONCE. If the file exists, it is never replaced.
 *   2. Only the inner HTML of [data-field] elements is rewritten. Anything
 *      outside a marker — hand-written sections, bespoke layout, extra
 *      scripts — survives every build untouched.
 *
 * Pages bind by id (data-entity), not by slug, so renaming an entity updates
 * its page rather than orphaning it.
 *
 * Run:  node scripts/build-pages.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'data');
const TEMPLATE = path.join(ROOT, '_templates', 'entity.html');

// ---------------------------------------------------------------------------
// Per-type configuration
// ---------------------------------------------------------------------------

const TYPES = {
  'player-characters.json': {
    dir: 'crew-manifest',
    label: 'Crew Manifest',
    subtitleField: 'Player Concept (as known)',
    stats: [
      ['Concept', 'Player Concept (as known)'],
      ['Affiliation', 'Affiliation(s)'],
      ['Last Seen', '_lastSeen'],
      ['Status', 'Status']
    ]
  },
  'npcs.json': {
    dir: 'dossiers',
    label: 'Dossiers',
    subtitleField: 'Role (as known)',
    classField: 'Category',
    stats: [
      ['Role', 'Role (as known)'],
      ['Crew', 'Party Relationship'],
      ['Affiliation', 'Affiliation(s)'],
      ['Last Seen', '_lastSeen'],
      ['Status', 'Status']
    ]
  },
  'factions.json': {
    dir: 'factions',
    label: 'Factions',
    subtitleField: 'Type',
    stats: [
      ['Type', 'Type'],
      ['Relationship', 'Party Relationship'],
      ['Last Seen', '_lastSeen'],
      ['Status', 'Status']
    ]
  },
  'locations.json': {
    dir: 'locations',
    label: 'Locations',
    subtitleField: 'Type',
    classField: 'Region',
    stats: [
      ['Type', 'Type'],
      ['Region', 'Region'],
      ['Notable', 'Key NPCs / Factions'],
      ['Last Visited', '_lastSeen'],
      ['Status', 'Status']
    ]
  },
  'items.json': {
    dir: 'inventory',
    label: 'Inventory',
    subtitleField: 'Type',
    stats: [
      ['Type', 'Type'],
      ['Held By', 'Held By'],
      ['Origin', 'Origin'],
      ['Last Seen', '_lastSeen'],
      ['Status', 'Status']
    ]
  },
  'quests.json': {
    dir: 'quests',
    label: 'Quests',
    subtitleField: 'Type',
    classField: 'Urgency',
    stats: [
      ['Type', 'Type'],
      ['Involves', 'Related Character(s)'],
      ['Urgency', 'Urgency'],
      ['Last Engaged', 'Last Engaged (Session #)'],
      ['Status', 'Status']
    ]
  }
};

// Portrait map, reused from the existing wiki helper.
const PORTRAITS = loadPortraits();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function loadPortraits() {
  // scripts/portraits.js holds a PORTRAITS object keyed by short names.
  // Parsed loosely so the build does not depend on evaluating the file.
  const p = path.join(ROOT, 'scripts', 'portraits.js');
  if (!fs.existsSync(p)) return {};
  const src = fs.readFileSync(p, 'utf8');
  const map = {};
  const re = /'([a-z0-9-]+)'\s*:\s*\{[^}]*?fileId:\s*'([^']*)'/g;
  let m;
  while ((m = re.exec(src))) {
    if (m[2]) map[m[1]] = m[2];
  }
  return map;
}

/** Matches a slug against the portrait map, tolerating short-name keys. */
function portraitFor(rec) {
  if (PORTRAITS[rec.slug]) return PORTRAITS[rec.slug];
  const parts = rec.slug.split('-');
  for (const p of [parts[0], parts[parts.length - 1]]) {
    if (PORTRAITS[p]) return PORTRAITS[p];
  }
  return null;
}

function sessionLabel(key) {
  const n = parseInt(String(key).replace(/\D/g, ''), 10);
  return Number.isNaN(n) ? key : `Voyage ${String(n).padStart(3, '0')}`;
}

function lastSeen(rec) {
  const all = [...(rec.seen || []), ...(rec.mentioned || [])];
  if (!all.length) return null;
  const latest = all.sort().pop();
  return sessionLabel(latest);
}

function classModifier(value) {
  const v = String(value || '').toLowerCase();
  if (/threat|enemy|antagonist|high/.test(v)) return 'class-threat';
  if (/cadet|command|staff|crew|ally/.test(v)) return 'class-ally';
  return 'class-neutral';
}

// ---------------------------------------------------------------------------
// Renderers — each returns the inner HTML for one [data-field]
// ---------------------------------------------------------------------------

function renderPortrait(rec) {
  const fileId = portraitFor(rec);
  if (fileId) {
    return `<img src="https://lh3.googleusercontent.com/d/${esc(fileId)}" alt="${esc(rec.name)}">`;
  }
  // Monogram placeholder until a portrait is added to scripts/portraits.js
  const initial = esc(rec.name.trim().charAt(0).toUpperCase());
  return `<span style="font-family:'Cinzel',serif;font-size:2.4rem;opacity:0.25;">${initial}</span>`;
}

function renderStats(rec, cfg) {
  const rows = [];
  for (const [label, key] of cfg.stats) {
    const value = key === '_lastSeen' ? lastSeen(rec) : rec.fields[key];
    if (value == null || value === '') continue;
    rows.push(
      `<div class="stat-row"><span class="stat-key">${esc(label)}</span>` +
      `<span class="stat-val">${esc(value)}</span></div>`
    );
  }
  return rows.join('');
}

function renderClassification(rec, cfg) {
  const raw = cfg.classField ? rec.fields[cfg.classField] : null;
  if (!raw) return '';
  return `<div class="classification ${classModifier(raw)}">${esc(raw)}</div>`;
}

function renderOverview(rec) {
  const text = rec.fields['Overview (Player)'];
  if (!text) return `<p class="entity-empty">No overview recorded yet.</p>`;
  return String(text)
    .split(/\n{2,}/)
    .map(p => `<p>${esc(p.trim())}</p>`)
    .join('');
}

function renderVoyageBlock(group) {
  const items = group.bullets
    .map(b => `<div class="log-item">${esc(b)}</div>`)
    .join('');
  return `<div class="section-block">` +
    `<div class="section-label">${esc(sessionLabel(group.session))}</div>` +
    `<div class="log-list">${items}</div></div>`;
}

function renderLatestVoyage(rec) {
  if (!rec.voyages.length) return '';
  return renderVoyageBlock(rec.voyages[rec.voyages.length - 1]);
}

function renderPriorVoyages(rec) {
  const prior = rec.voyages.slice(0, -1);
  if (!prior.length) return '';
  // Keys stay visible while collapsed so appearance history can be scanned.
  const keys = prior.map(g => esc(g.session)).join(' · ');
  const blocks = prior.reverse().map(renderVoyageBlock).join('');
  return `<details class="prior-voyages">` +
    `<summary>Previous Voyages <span class="prior-keys">${keys}</span></summary>` +
    blocks + `</details>`;
}

function renderXrefs(list, heading) {
  if (!list || !list.length) return '';
  const chips = list.map(l =>
    `<a class="xref" href="${esc(l.url)}">` +
    `<span class="xref-type">${esc(l.type)}</span>${esc(l.name)}</a>`
  ).join('');
  return `<div class="section-block">` +
    `<div class="section-label">${esc(heading)}</div>` +
    `<div class="xref-list">${chips}</div></div>`;
}

function renderSiblingNav(rec, siblings, cfg) {
  const i = siblings.findIndex(s => s.id === rec.id);
  const prev = i > 0 ? siblings[i - 1] : siblings[siblings.length - 1];
  const next = i < siblings.length - 1 ? siblings[i + 1] : siblings[0];
  const arrowL = `<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 2L4 7l5 5"/></svg>`;
  const arrowR = `<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 2l5 5-5 5"/></svg>`;
  return `<a class="voyage-nav-link" href="${esc(prev.slug)}.html">${arrowL} ${esc(prev.name)}</a>` +
    `<a class="voyage-nav-center" href="index.html">${esc(cfg.label)}</a>` +
    `<a class="voyage-nav-link" href="${esc(next.slug)}.html">${esc(next.name)} ${arrowR}</a>`;
}

function renderPagefindFilters(rec, cfg) {
  // Returned as an attribute string rather than inner HTML; handled separately.
  const parts = [`section:${cfg.dir}`];
  if (rec.fields.Category) parts.push(`category:${rec.fields.Category}`);
  if (rec.fields.Region) parts.push(`region:${rec.fields.Region}`);
  if (rec.fields.Status) parts.push(`status:${rec.fields.Status}`);
  return parts.join(', ');
}

// ---------------------------------------------------------------------------
// Injection
// ---------------------------------------------------------------------------

/**
 * Replaces the inner HTML of every <tag data-field="name"> ... </tag>.
 * Deliberately does not use a DOM parser: a regex that only touches the
 * span between a marked opening tag and its matching close keeps the rest
 * of the file byte-identical, which makes diffs readable.
 */
function inject(html, fields) {
  for (const [field, value] of Object.entries(fields)) {
    // Global: a field may legitimately appear more than once on a page
    // (the page title and the entry name both bind to "name").
    const re = new RegExp(
      `(<([a-zA-Z0-9]+)([^>]*\\sdata-field="${field}"[^>]*)>)([\\s\\S]*?)(</\\2>)`,
      'g'
    );
    html = html.replace(re, (_m, open, _tag, _attrs, _inner, close) =>
      `${open}${value}${close}`);
  }
  return html;
}

function setBodyAttrs(html, id, filters) {
  html = html.replace(/(<body[^>]*\sdata-entity=")[^"]*(")/, `$1${esc(id)}$2`);
  html = html.replace(/(<body[^>]*\sdata-pagefind-filter=")[^"]*(")/, `$1${esc(filters)}$2`);
  return html;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

if (!fs.existsSync(TEMPLATE)) {
  console.error(`Missing template: ${TEMPLATE}`);
  process.exit(1);
}
const template = fs.readFileSync(TEMPLATE, 'utf8');

let scaffolded = 0;
let updated = 0;
let skipped = 0;

for (const [file, cfg] of Object.entries(TYPES)) {
  const src = path.join(DATA, file);
  if (!fs.existsSync(src)) {
    console.warn(`  ! ${file} not found, skipping`);
    continue;
  }

  const records = JSON.parse(fs.readFileSync(src, 'utf8'));
  if (!records.length) continue;

  const dir = path.join(ROOT, cfg.dir);
  fs.mkdirSync(dir, { recursive: true });

  // Alphabetical, for stable prev/next navigation.
  const siblings = [...records].sort((a, b) => a.name.localeCompare(b.name));

  for (const rec of records) {
    const dest = path.join(dir, `${rec.slug}.html`);
    let html;

    if (fs.existsSync(dest)) {
      html = fs.readFileSync(dest, 'utf8');
      // A page with no data-entity has not been converted yet. Leave it be
      // rather than guessing — converting it is a deliberate one-time move.
      if (!/<body[^>]*\sdata-entity=/.test(html)) {
        skipped++;
        continue;
      }
      updated++;
    } else {
      html = template.replace(/\{\{REL\}\}/g, '../')
                     .replace(/\{\{ID\}\}/g, esc(rec.id))
                     .replace(/\{\{DIR\}\}/g, esc(cfg.dir));
      scaffolded++;
    }

    const fields = {
      pageTitle: `Caelestis — ${esc(rec.name)}`,
      name: esc(rec.name),
      subtitle: esc(rec.fields[cfg.subtitleField] || ''),
      classification: renderClassification(rec, cfg),
      portrait: renderPortrait(rec),
      stats: renderStats(rec, cfg),
      overview: renderOverview(rec),
      latestVoyage: renderLatestVoyage(rec),
      priorVoyages: renderPriorVoyages(rec),
      heldItems: renderXrefs(rec.items, 'Carried'),
      connections: renderXrefs(rec.links, 'Connections'),
      siblingNav: renderSiblingNav(rec, siblings, cfg)
    };

    html = inject(html, fields);
    html = setBodyAttrs(html, rec.id, renderPagefindFilters(rec, cfg));

    fs.writeFileSync(dest, html);
  }

  console.log(`  ${cfg.dir.padEnd(16)} ${records.length} entities`);
}

console.log(`\nScaffolded ${scaffolded}, updated ${updated}, skipped ${skipped} (not yet converted).`);
if (skipped) {
  console.log('Skipped pages have no data-entity attribute. Add one to bring a page under the build.');
}
