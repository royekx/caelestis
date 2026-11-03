#!/usr/bin/env node
/**
 * Caelestis — names in prose link to their pages
 * ───────────────────────────────────────────────
 * On a record page (a dossier, crew page, navigation record, vessel, quest
 * or inventory entry), the first time the prose names another record that
 * has a page, the name links to it. A reader who meets a name can follow it.
 *
 *   node tools/link-names.js          list the names that should link (exit 1 if any)
 *   node tools/link-names.js --fix    link them, in place
 *
 * `node tools/data.js check` runs the list and reports each as an error.
 *
 * Prose is text inside p, li, dd, td or blockquote, outside links, headings,
 * the infobox, Connections, All appearances, chips, the page header and
 * anything marked data-pagefind-ignore. Each record links once per page, at
 * its first prose mention; a page never links itself. A quest whose name is
 * also a person's or place's name is skipped (the name means the person).
 * "Caelestis" alone is skipped: it names the ship, the academy and the sector.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIRS = ['registry/dossiers', 'registry/crew-manifest', 'registry/factions', 'navigation-records',
  'vessels', 'quests', 'inventory/entries'];
const SKIP_NAMES = new Set(['Caelestis']);
// Short forms the prose uses for a record, by record name.
const ALIASES = {
  'Winston Ryeback': ['Ryeback'], 'Boatswain Tarto': ['Tarto'], 'Captain Sardax': ['Sardax'],
  'Saerthe Abizjn': ['Saerthe'], 'Rindle Gearloft': ['Rindle']
};

const load = f => JSON.parse(fs.readFileSync(path.join(ROOT, 'data', f + '.json'), 'utf8'));
function targets() {
  const recs = [];
  ['npcs', 'player-characters', 'locations', 'items', 'factions', 'quests'].forEach(f => load(f).forEach(r => recs.push(r)));
  const taken = new Set(recs.filter(r => r.type !== 'quest').map(r => r.name));
  const out = [];
  recs.forEach(r => {
    if (!r.url || SKIP_NAMES.has(r.name)) return;
    if (r.type === 'quest' && taken.has(r.name)) return;
    const names = new Set([r.name]);
    if (/^The /.test(r.name)) names.add(r.name.slice(4));
    if (r.type === 'pc') names.add(r.name.split(' ')[0]);
    (ALIASES[r.name] || []).forEach(a => names.add(a));
    out.push({ url: r.url, name: r.name, names: [...names].filter(n => n.length >= 3 && !SKIP_NAMES.has(n)) });
  });
  return out;
}

// A name as it may appear in raw HTML: apostrophes in any of their forms.
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const APOS = "(?:'|’|&#x27;|&#39;|&rsquo;|&apos;)";
const AMP = '(?:&|&amp;)';
function nameRe(n) {
  const body = n.split('').map(c => c === "'" || c === '’' ? APOS : c === '&' ? AMP : esc(c)).join('');
  // Not inside a longer word or a hyphenated name (Ostekk is not Ostekk-6),
  // and not the start of a possessive-free compound like "Tumak's" — that one
  // is fine to link, so only letters, digits and hyphens block.
  return new RegExp('(?<![\\w\\-])' + body + '(?![\\w]|-\\w)');
}

const PROSE = new Set(['p', 'li', 'dd', 'td', 'blockquote']);
const SKIP_TAGS = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'script', 'style', 'head', 'title', 'nav',
  'button', 'summary', 'select', 'option', 'label', 'svg', 'figcaption', 'dt']);
const SKIP_CLASS = /(^|\s)(stat-card|xref-card|appear|page-header|page-title|page-subtitle|entry-name|entry-sub|voyage-nav-bar|rec-tabs|summary-row|file-head|portrait-frame|ent-row|ent-face|stub-chips|chip[\w-]*|stub-chip|crew-tag|loot-name|loot-seen)(\s|$)/;
const VOID = new Set(['br', 'img', 'hr', 'input', 'meta', 'link', 'source', 'wbr', 'area', 'col', 'embed', 'param', 'track']);

function scan(rel, list, fix) {
  const file = path.join(ROOT, rel);
  const src = fs.readFileSync(file, 'utf8');
  const dir = path.posix.dirname(rel);
  const relHref = u => path.posix.relative(dir, u) || path.posix.basename(u);
  const tokens = src.split(/(<!--[\s\S]*?-->|<[^>]+>)/);
  const stack = [];   // { tag, skip, prose }
  const skipping = () => stack.some(s => s.skip);
  const inProse = () => stack.some(s => s.prose);
  // Links in the infobox and Connections do not count: the prose still links.
  const proseLinked = new Set([rel]);
  const self = u => u.split('#')[0] === rel;   // a notable item kept on this page is this page
  const found = [];
  const out = [];
  for (const t of tokens) {
    if (t.startsWith('<!--')) { out.push(t); continue; }
    if (t.startsWith('<')) {
      const m = /^<(\/?)([a-zA-Z0-9]+)/.exec(t);
      if (m) {
        const tag = m[2].toLowerCase();
        if (m[1]) {
          for (let i = stack.length - 1; i >= 0; i--) if (stack[i].tag === tag) { stack.length = i; break; }
        } else if (!VOID.has(tag) && !t.endsWith('/>')) {
          const cls = (/\bclass="([^"]*)"/.exec(t) || [, ''])[1];
          const skip = SKIP_TAGS.has(tag) || SKIP_CLASS.test(cls) || /\bdata-pagefind-ignore\b/.test(t);
          stack.push({ tag, skip, prose: PROSE.has(tag) });
          if (tag === 'a' && inProse()) {
            const h = /\bhref="([^"#?]+)/.exec(t);
            if (h && !/^[a-z]+:/.test(h[1])) proseLinked.add(path.posix.normalize(path.posix.join(dir, h[1])));
          }
        }
      }
      out.push(t); continue;
    }
    if (!t.trim() || skipping() || !inProse()) { out.push(t); continue; }
    let text = t;
    for (const r of list) {
      if (proseLinked.has(r.url) || self(r.url)) continue;
      let best = null;
      for (const n of r.names) {
        const mm = nameRe(n).exec(text);
        if (mm && (!best || mm.index < best.index)) best = mm;
      }
      if (!best) continue;
      proseLinked.add(r.url);
      found.push({ rel, name: best[0], url: r.url });
      if (fix) text = text.slice(0, best.index) + '<a href="' + relHref(r.url) + '">' + best[0] + '</a>' + text.slice(best.index + best[0].length);
    }
    out.push(text);
  }
  if (fix && found.length) fs.writeFileSync(file, out.join(''));
  return found;
}

function pages() {
  const all = [];
  DIRS.forEach(d => {
    const abs = path.join(ROOT, d);
    if (!fs.existsSync(abs)) return;
    fs.readdirSync(abs).filter(f => f.endsWith('.html') && f !== 'index.html' && !/template/.test(f))
      .forEach(f => all.push(d + '/' + f));
  });
  return all;
}

function run(fix) {
  const list = targets();
  return pages().flatMap(p => scan(p, list, fix));
}

module.exports = { run };

if (require.main === module) {
  const fix = process.argv.includes('--fix');
  const found = run(fix);
  found.forEach(f => console.log(`${fix ? 'linked' : 'unlinked'}  ${f.rel}: ${f.name} → ${f.url}`));
  console.log(`${found.length} ${fix ? 'linked' : 'to link'}`);
  if (!fix && found.length) process.exitCode = 1;
}
