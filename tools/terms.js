#!/usr/bin/env node
/**
 * terms.js — keep retired terms, decision voice and moved paths off the DM wiki, the FIA and the player site.
 *
 *   node tools/terms.js            summary by folder; exit 1 if a finished folder has a retired hit
 *   node tools/terms.js --list     every hit, file:line, with what to use instead
 *   node tools/terms.js --voice    include decision-voice and placeholder warnings in the list
 *   node tools/terms.js PATH...    only these files or folders
 *
 * The lists live in prime/working/terms.json:
 *   retired  terms that must not appear (pattern → what to use instead); matched on the
 *            line with tags removed, or on the raw line when "raw": true (for markup such
 *            as a retired attribute name); "i": true makes a pattern case-insensitive
 *   voice    decision voice and placeholders ("ruled", "pending", "TBD", "unresolved");
 *            matched on the text with tags stripped, or on the raw line when "raw": true
 *            (for markup such as a bare "Open" label or an is-open class)
 *   moved    old page paths that must not be linked (old → new); matched as a substring of
 *            the raw line, or, with "link": true, against every relative link on the line
 *            resolved from the page's own folder (old is then a site path: a page, or a
 *            folder ending in /), for an old folder whose name lives on inside a new path
 *            (bearings/ → voyages/bearings/)
 *   scan     what to read: top folders (prime, restricted, the player folders) and single
 *            root pages by their .html path (index.html)
 *   finished folders (or single pages, by their .html path) whose retired-term and moved-path hits fail the check
 *   allow    "path:regex" pairs for legitimate uses (a quoted archive line, say)
 *   docs     process docs (CLAUDE.md, docs/, .github/workflows/) read only for moved
 *            entries marked "docs": true; a hit there fails
 *
 * Scans the entries in terms.json 'scan' (the DM wiki prime/, the FIA's restricted/, the
 * player folders and the player root pages): every .html file and prime/timeline/timeline.json,
 * skipping prime/working/, prime/data/ and any pagefind/ index. Text inside <style> is skipped; everything else, including
 * inline page data, is read, because that is what the reader sees. Pruned from
 * deploy like data.js.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONF = path.join(ROOT, 'prime', 'working', 'terms.json');
const args = process.argv.slice(2);
const LIST = args.includes('--list') || args.includes('--voice');
const VOICE = args.includes('--voice');
const only = args.filter(a => !a.startsWith('--')).map(a => path.resolve(ROOT, a));

const conf = JSON.parse(fs.readFileSync(CONF, 'utf8'));
const rx = list => list.map(t => Object.assign({}, t, { re: new RegExp(t.pattern, t.i ? 'gi' : 'g') }));
const RETIRED = rx(conf.retired || []);
const VOICES = rx(conf.voice || []);
const MOVED = (conf.moved || []).filter(m => !m.link).map(m => Object.assign({}, m, { re: new RegExp(m.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g') }));
const LINKED = (conf.moved || []).filter(m => m.link);
// Relative paths on a line (in quotes, or in url()), resolved from the page's folder.
const PATHS = /["'`(]((?:\.{1,2}\/)*[A-Za-z0-9_][A-Za-z0-9_.\-\/]*)(?:[?#][^"'`)\s]*)?["'`)]/g;
const linked = (f, line) => [...line.matchAll(PATHS)].map(m => m[1]).filter(v => v.includes('/') || /\.html$/.test(v))
  .map(v => ({ v, to: path.posix.normalize(path.posix.join(path.posix.dirname(f), v)) }));
const ALLOW = (conf.allow || []).map(a => { const i = a.indexOf(':'); return { file: a.slice(0, i), re: new RegExp(a.slice(i + 1)) }; });
// A folder entry gets a trailing slash so prime/campaign does not also claim prime/campaign-x; a page entry (prime/principles.html) is matched as written.
const FINISHED = (conf.finished || []).map(f => /\.html$/.test(f) ? f : f.replace(/\/?$/, '/'));

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    const rel = path.relative(ROOT, p).split(path.sep).join('/');
    if (e.isDirectory()) { if (!/^prime\/(working|data)$|(^|\/)pagefind$/.test(rel)) walk(p, out); }
    else if (/\.html$/.test(e.name) || rel === 'prime/timeline/timeline.json') out.push(rel);
  }
  return out;
}
// A scan entry is a folder (walked) or a single page (index.html at the root).
let files = (conf.scan || ['prime']).reduce((acc, d) => {
  const p = path.join(ROOT, d);
  if (!fs.existsSync(p)) return acc;
  return fs.statSync(p).isDirectory() ? walk(p, acc) : acc.concat(d);
}, []);
if (only.length) files = files.filter(f => only.some(o => path.join(ROOT, f).startsWith(o)));

// Blank out <style> blocks and HTML comments, keeping line numbers.
const blank = s => s.replace(/<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, m => m.replace(/[^\n]/g, ' '));
// For voice checks, read text only: drop tags and attribute values.
const textOnly = line => line.replace(/<[^>]*>/g, ' ');
// For retired terms, remove tags outright, so markup inside a term ("<strong>Convergence</strong> fragment") cannot split it.
const stripTags = line => line.replace(/<[^>]*>/g, '');

const hits = [];
for (const f of files) {
  const lines = blank(fs.readFileSync(path.join(ROOT, f), 'utf8')).split('\n');
  const allowed = (line) => ALLOW.some(a => f.startsWith(a.file) && a.re.test(line));
  lines.forEach((line, i) => {
    if (allowed(line)) return;
    const at = (kind, m, note) => hits.push({ f, n: i + 1, kind, term: m, note, finished: FINISHED.some(p => f.startsWith(p)) });
    const bare = stripTags(line);
    for (const t of RETIRED) for (const m of (t.raw ? line : bare).matchAll(t.re)) at('retired', m[0], t.use);
    for (const t of MOVED) for (const m of line.matchAll(t.re)) at('moved', m[0], t.new);
    if (LINKED.length) for (const l of linked(f, line)) for (const t of LINKED) {
      if (t.old.endsWith('/') ? (l.to + '/').startsWith(t.old) : l.to === t.old) at('moved', l.v, t.new);
    }
    if (VOICE) { const tx = textOnly(line); for (const t of VOICES) for (const m of (t.raw ? line : tx).matchAll(t.re)) at('voice', m[0].trim(), t.note); }
  });
}

// The process docs (terms.json 'docs': CLAUDE.md, docs/, the workflows) are read for
// moved entries marked "docs": true only, such as a build script that moved to tools/.
// Retired terms and voice are not checked there: the docs name them on purpose. A hit
// in a doc fails the check.
const DOCMOVED = MOVED.filter(m => m.docs);
const docFiles = (conf.docs || []).reduce((acc, d) => {
  const p = path.join(ROOT, d);
  if (!fs.existsSync(p)) return acc;
  if (!fs.statSync(p).isDirectory()) return acc.concat(d);
  return acc.concat(fs.readdirSync(p).filter(n => /\.(md|ya?ml)$/.test(n)).map(n => d.replace(/\/$/, '') + '/' + n));
}, []).filter(f => !only.length || only.some(o => path.join(ROOT, f).startsWith(o)));
for (const f of docFiles) {
  fs.readFileSync(path.join(ROOT, f), 'utf8').split('\n').forEach((line, i) => {
    for (const t of DOCMOVED) for (const m of line.matchAll(t.re)) hits.push({ f, n: i + 1, kind: 'moved', term: m[0], note: t.new, finished: true });
  });
}
files = files.concat(docFiles);

const hard = hits.filter(h => h.finished && h.kind !== 'voice');
if (LIST) {
  for (const h of hits) console.log(`${h.finished && h.kind !== 'voice' ? 'error' : 'warn '}  ${h.f}:${h.n}  [${h.kind}] "${h.term}" → ${h.note}`);
} else {
  const by = {};
  for (const h of hits) { const seg = h.f.split('/'); const k = /^(prime|restricted)$/.test(seg[0]) ? seg.slice(0, 2).join('/') : seg[0]; (by[k] = by[k] || { retired: 0, moved: 0 }); by[k][h.kind] = (by[k][h.kind] || 0) + 1; }
  Object.keys(by).sort().forEach(k => console.log(`${k.padEnd(22)} ${String(by[k].retired).padStart(4)} retired  ${String(by[k].moved).padStart(3)} moved${FINISHED.some(p => (k + '/').startsWith(p)) ? '  (finished)' : ''}`));
  console.log(`${files.length} files · ${hits.length} hits · ${hard.length} errors in finished folders. Run with --list for each hit, --voice for decision voice.`);
}
process.exitCode = hard.length ? 1 : 0;
