#!/usr/bin/env node
/**
 * terms.js — keep retired terms, decision voice and moved paths off the DM wiki and the FIA.
 *
 *   node scripts/terms.js            summary by folder; exit 1 if a finished folder has a retired hit
 *   node scripts/terms.js --list     every hit, file:line, with what to use instead
 *   node scripts/terms.js --voice    include decision-voice and placeholder warnings in the list
 *   node scripts/terms.js PATH...    only these files or folders
 *
 * The lists live in prime/working/terms.json:
 *   retired  terms that must not appear (pattern → what to use instead)
 *   voice    decision voice and placeholders ("ruled", "pending", "TBD", "unresolved")
 *   moved    old page paths that must not be linked (old → new)
 *   scan     top folders to read (prime, restricted)
 *   finished folders whose retired-term and moved-path hits fail the check
 *   allow    "path:regex" pairs for legitimate uses (a quoted archive line, say)
 *
 * Scans the folders in terms.json 'scan' (the DM wiki prime/ and the FIA's restricted/):
 * every .html file and prime/timeline/timeline.json, skipping prime/working/ and prime/data/. Text inside <style> is skipped; everything else, including
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
const rx = list => list.map(t => Object.assign({}, t, { re: new RegExp(t.pattern, 'g') }));
const RETIRED = rx(conf.retired || []);
const VOICES = rx(conf.voice || []);
const MOVED = (conf.moved || []).map(m => Object.assign({}, m, { re: new RegExp(m.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g') }));
const ALLOW = (conf.allow || []).map(a => { const i = a.indexOf(':'); return { file: a.slice(0, i), re: new RegExp(a.slice(i + 1)) }; });
const FINISHED = (conf.finished || []).map(f => f.replace(/\/?$/, '/'));

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    const rel = path.relative(ROOT, p).split(path.sep).join('/');
    if (e.isDirectory()) { if (!/^prime\/(working|data)$/.test(rel)) walk(p, out); }
    else if (/\.html$/.test(e.name) || rel === 'prime/timeline/timeline.json') out.push(rel);
  }
  return out;
}
let files = (conf.scan || ['prime']).reduce((acc, d) => fs.existsSync(path.join(ROOT, d)) ? walk(path.join(ROOT, d), acc) : acc, []);
if (only.length) files = files.filter(f => only.some(o => path.join(ROOT, f).startsWith(o)));

// Blank out <style> blocks and HTML comments, keeping line numbers.
const blank = s => s.replace(/<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, m => m.replace(/[^\n]/g, ' '));
// For voice checks, read text only: drop tags and attribute values.
const textOnly = line => line.replace(/<[^>]*>/g, ' ');

const hits = [];
for (const f of files) {
  const lines = blank(fs.readFileSync(path.join(ROOT, f), 'utf8')).split('\n');
  const allowed = (line) => ALLOW.some(a => f.startsWith(a.file) && a.re.test(line));
  lines.forEach((line, i) => {
    if (allowed(line)) return;
    const at = (kind, m, note) => hits.push({ f, n: i + 1, kind, term: m, note, finished: FINISHED.some(p => f.startsWith(p)) });
    for (const t of RETIRED) for (const m of line.matchAll(t.re)) at('retired', m[0], t.use);
    for (const t of MOVED) for (const m of line.matchAll(t.re)) at('moved', m[0], t.new);
    if (VOICE) { const tx = textOnly(line); for (const t of VOICES) for (const m of tx.matchAll(t.re)) at('voice', m[0], t.note); }
  });
}

const hard = hits.filter(h => h.finished && h.kind !== 'voice');
if (LIST) {
  for (const h of hits) console.log(`${h.finished && h.kind !== 'voice' ? 'error' : 'warn '}  ${h.f}:${h.n}  [${h.kind}] "${h.term}" → ${h.note}`);
} else {
  const by = {};
  for (const h of hits) { const k = h.f.split('/').slice(0, 2).join('/'); (by[k] = by[k] || { retired: 0, moved: 0 }); by[k][h.kind] = (by[k][h.kind] || 0) + 1; }
  Object.keys(by).sort().forEach(k => console.log(`${k.padEnd(22)} ${String(by[k].retired).padStart(4)} retired  ${String(by[k].moved).padStart(3)} moved${FINISHED.some(p => (k + '/').startsWith(p)) ? '  (finished)' : ''}`));
  console.log(`${files.length} files · ${hits.length} hits · ${hard.length} errors in finished folders. Run with --list for each hit, --voice for decision voice.`);
}
process.exitCode = hard.length ? 1 : 0;
