#!/usr/bin/env node
/* ════════════════════════════════════════════════════════════════
   visual.js — full-page screenshots of the site, and a pixel diff
   ----------------------------------------------------------------
   Proves a CSS or markup change looks the same before and after.

     node scripts/visual.js capture <outdir> [--pages=<glob>] [--player]
                                    [--root=<dir>] [--fonts=<dir>]
                                    [--widths=1440,390] [--jobs=4]
     node scripts/visual.js diff <beforedir> <afterdir>
                                 [--out=<dir>] [--noise=0.0005]

   capture
     Serves --root (default: this repo) on a free localhost port and
     opens every DM page under prime/. --player adds every player page
     and the FIA (restricted/). --pages narrows the set with a glob on
     the repo-relative path, e.g. --pages='prime/campaign/**'.
     Each page is shot full page at each width (1440 and 390) with every
     <details> open and animations off, then once more per .pill-tab
     (-tabN), and once after the register toggles and first Thread Board
     beat are clicked (-interact). Both gates are passed through
     sessionStorage (caelestis_continuum_auth, caelestis_restricted_v1).
     Requests leaving localhost are blocked, apart from Google Fonts;
     remote images (Drive portraits) are answered with one grey pixel.

     Fonts: with --fonts=<dir> or CAELESTIS_FONTS=<dir>, Google Fonts
     requests are answered offline from @fontsource packages in <dir>
     (a node_modules folder, or its @fontsource folder; install with
     `npm i @fontsource/cinzel @fontsource/crimson-pro …`). A family with
     no package falls back to a system font, the same on both runs.
     Without a fonts dir, Google Fonts load live.

   diff
     Compares every PNG in <beforedir> with its namesake in <afterdir>,
     pixel by pixel. A pair differing in fewer than --noise of its pixels
     is reported as noise. --out writes a highlight image per differing
     pair. Exits 1 when anything differs or is missing.

   Before-and-after on a branch:
     git worktree add /tmp/base origin/main
     node scripts/visual.js capture /tmp/shots/before --root=/tmp/base
     node scripts/visual.js capture /tmp/shots/after
     node scripts/visual.js diff /tmp/shots/before /tmp/shots/after

   The 'Tap to Expand' portrait label is hidden in every shot: it is added
   on a timer that races portraits.js. Known noise, which differs between
   two runs of the same commit: the Tracker at 1440 (about 65,000px tall)
   and the -interact shots of Crew and Artifacts, where a section body
   sometimes paints empty. Re-shoot those with --pages; a match on any
   run settles it.

   Needs Node 22 or later (zlib.crc32).

   Capture needs Playwright with Chromium (not a dependency of the site):
   `npm i --no-save playwright && npx playwright install chromium`, or
   point NODE_PATH at an existing install. The diff needs only Node.
   Not deployed: pruned in .github/workflows/deploy.yml.
   ════════════════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const zlib = require('zlib');

const REPO = path.resolve(__dirname, '..');

function flag(args, name, dflt) {
  const a = args.find((x) => x === '--' + name || x.startsWith('--' + name + '='));
  if (!a) return dflt;
  return a.includes('=') ? a.slice(a.indexOf('=') + 1) : true;
}

function die(msg) { console.error(msg); process.exit(2); }

/* ---- glob ------------------------------------------------------ */

function globToRegex(glob) {
  let re = '';
  for (let i = 0; i < glob.length; i++) {
    const c = glob[i];
    if (c === '*') {
      if (glob[i + 1] === '*') {
        i++;
        if (glob[i + 1] === '/') { i++; re += '(?:.*/)?'; } else re += '.*';
      } else re += '[^/]*';
    } else if (c === '?') re += '[^/]';
    else if (c === '{') re += '(?:';
    else if (c === '}') re += ')';
    else if (c === ',') re += '|';
    else re += c.replace(/[.+^$()|[\]\\]/g, '\\$&');
  }
  return new RegExp('^' + re + '$');
}

/* ---- pages ----------------------------------------------------- */

const SKIP = /^(\.git|node_modules|docs|scripts|styles|assets|data|pagefind|prime\/(working|data|pagefind|scripts)|restricted\/pagefind)(\/|$)/;

function walk(root, dir, out) {
  for (const f of fs.readdirSync(path.join(root, dir))) {
    const rel = dir ? dir + '/' + f : f;
    if (SKIP.test(rel)) continue;
    const st = fs.statSync(path.join(root, rel));
    if (st.isDirectory()) walk(root, rel, out);
    else if (f.endsWith('.html') && !f.endsWith('-template.html')) out.push(rel);
  }
  return out;
}

function listPages(root, player, glob) {
  let pages = walk(root, '', []).filter((p) => player || p.startsWith('prime/'));
  if (glob) { const re = globToRegex(glob); pages = pages.filter((p) => re.test(p)); }
  return pages.sort();
}

/* ---- local server ---------------------------------------------- */

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.txt': 'text/plain',
  '.pdf': 'application/pdf', '.mp3': 'audio/mpeg', '.mp4': 'video/mp4',
};

function serve(root, fontsDir) {
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let base = root;
    if (fontsDir && p.startsWith('/__fonts/')) { base = fontsDir; p = p.slice(8); }
    let file = path.join(base, path.normalize(p));
    if (!file.startsWith(base)) { res.writeHead(403); return res.end(); }
    try { if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html'); } catch (e) { /* 404 below */ }
    fs.readFile(file, (err, buf) => {
      if (err) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      res.end(buf);
    });
  });
  return new Promise((ok) => server.listen(0, '127.0.0.1', () => ok(server)));
}

/* ---- offline Google Fonts from @fontsource ---------------------- */

function fontsourceDir(dir) {
  if (!dir) return null;
  const d = path.resolve(dir);
  if (fs.existsSync(path.join(d, '@fontsource'))) return path.join(d, '@fontsource');
  if (fs.existsSync(d)) return d;
  die('fonts dir not found: ' + d);
}

const missingFonts = new Set();

// Turns a css2 request (family=Cinzel:wght@400;600&family=Crimson+Pro:ital,wght@0,300;1,400)
// into the matching @fontsource stylesheets, their files served from /__fonts/.
function fontCss(url, fontsDir, origin) {
  const css = [];
  for (const spec of new URL(url).searchParams.getAll('family')) {
    const [name, axes] = spec.split(':');
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    let styles = [[0, 400]];
    if (axes) {
      const [keys, vals] = axes.split('@');
      const k = keys.split(',');
      styles = vals.split(';').map((v) => {
        const parts = v.split(',');
        const o = {}; k.forEach((key, i) => { o[key] = parts[i]; });
        return [+(o.ital || 0), o.wght || 400];
      });
    }
    for (const [ital, wght] of styles) {
      for (const w of String(wght).split('..')) {
        const f = path.join(fontsDir, slug, w + (ital ? '-italic' : '') + '.css');
        if (!fs.existsSync(f)) { missingFonts.add(name + ' ' + w + (ital ? ' italic' : '')); continue; }
        css.push(fs.readFileSync(f, 'utf8').replace(/url\(\.\/files\//g, 'url(' + origin + '/__fonts/' + slug + '/files/'));
      }
    }
  }
  return css.join('\n');
}

/* ---- capture --------------------------------------------------- */

// Remote images (portraits on Drive) become one grey pixel, so they load
// the same way every run.
const GREY = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGOwsXECAAFyALtnshCKAAAAAElFTkSuQmCC', 'base64');

// Animations off. The lightbox's 'Tap to Expand' label is hidden too: dm-nav.js
// adds it on a timer that races portraits.js, so it comes and goes between
// runs of the same page.
const NOANIM = '*,*::before,*::after{transition:none!important;animation:none!important;caret-color:transparent!important}' +
  '.portrait-label{display:none!important}';

function loadPlaywright() {
  for (const m of ['playwright', 'playwright-core']) {
    try { return require(m); } catch (e) { /* next */ }
  }
  die('visual.js needs Playwright: npm i --no-save playwright && npx playwright install chromium (or set NODE_PATH)');
}

async function openAll(p) {
  await p.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
}

// Every image loaded or failed (portraits from Drive are blocked and fall
// back to a monogram on error), twice over in case a fallback adds one.
async function settle(p) {
  for (let i = 0; i < 2; i++) {
    await p.evaluate(() => Promise.all(Array.from(document.images, (img) => {
      img.loading = 'eager';
      return img.complete ? null : new Promise((r) => {
        img.addEventListener('load', r, { once: true });
        img.addEventListener('error', r, { once: true });
      });
    })));
    await p.waitForLoadState('networkidle').catch(() => {});
    await p.waitForTimeout(100);
  }
}

async function shoot(p, file) {
  await settle(p);
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: file, fullPage: true });
}

async function capturePage(browser, origin, rel, widths, out, fontsDir) {
  const slug = rel.replace(/\.html$/, '').replace(/\//g, '__');
  let n = 0;
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: w < 600 ? 844 : 900 } });
    await ctx.addInitScript(() => {
      sessionStorage.setItem('caelestis_continuum_auth', '1');
      sessionStorage.setItem('caelestis_restricted_v1', '1');
    });
    await ctx.route(/^https?:\/\//, (r) => {
      const u = r.request().url();
      if (u.startsWith(origin)) return r.continue();
      if (fontsDir && /^https:\/\/fonts\.googleapis\.com\//.test(u)) {
        return r.fulfill({ status: 200, contentType: 'text/css', body: fontCss(u, fontsDir, origin) });
      }
      if (!fontsDir && /^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(u)) return r.continue();
      if (r.request().resourceType() === 'image') return r.fulfill({ status: 200, contentType: 'image/png', body: GREY });
      return r.abort();
    });
    const p = await ctx.newPage();
    await p.goto(origin + '/' + rel, { waitUntil: 'networkidle' }).catch(() => {});
    await p.evaluate(() => document.fonts.ready);
    await p.addStyleTag({ content: NOANIM });
    await openAll(p);
    await p.waitForTimeout(400);
    const stem = path.join(out, slug + '-' + w);
    await shoot(p, stem + '.png'); n++;

    const tabs = p.locator('.pill-tab');
    const ntabs = await tabs.count();
    for (let i = 0; i < ntabs; i++) {
      const t = tabs.nth(i);
      if (!(await t.isVisible())) continue;
      await t.click().catch(() => {});
      await openAll(p);
      await p.waitForTimeout(150);
      await shoot(p, stem + '-tab' + i + '.png'); n++;
    }

    const interactive = await p.evaluate(() => !!document.querySelector('.ent-toggle, .tb-beat'));
    if (interactive) {
      await p.evaluate(() => {
        document.querySelectorAll('.ent-toggle').forEach((x) => x.click());
        const b = document.querySelector('.tb-beat'); if (b) b.click();
      });
      await openAll(p);
      await p.waitForTimeout(300);
      await shoot(p, stem + '-interact.png'); n++;
    }
    await ctx.close();
  }
  return n;
}

async function capture(args) {
  const out = args[0];
  if (!out || out.startsWith('--')) die('usage: node scripts/visual.js capture <outdir> [--pages=<glob>] [--player] [--root=<dir>] [--fonts=<dir>]');
  const root = path.resolve(flag(args, 'root', REPO));
  const fontsDir = fontsourceDir(flag(args, 'fonts', process.env.CAELESTIS_FONTS));
  const widths = String(flag(args, 'widths', '1440,390')).split(',').map(Number);
  const jobs = +flag(args, 'jobs', 4);
  const pages = listPages(root, !!flag(args, 'player', false), flag(args, 'pages', null));
  if (!pages.length) die('no pages match');
  fs.mkdirSync(out, { recursive: true });

  const { chromium } = loadPlaywright();
  const server = await serve(root, fontsDir);
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch();
  console.log(`capturing ${pages.length} pages from ${root} at ${widths.join(', ')}; fonts ${fontsDir || 'live'}`);

  const t0 = Date.now();
  let next = 0, shots = 0, done = 0;
  async function worker() {
    while (next < pages.length) {
      const rel = pages[next++];
      try { const n = await capturePage(browser, origin, rel, widths, out, fontsDir); shots += n; }
      catch (e) { console.error('  FAILED', rel, e.message.split('\n')[0]); }
      done++;
      console.log(`  ${String(Math.round((Date.now() - t0) / 1000)).padStart(4)}s  ${done}/${pages.length}  ${rel}`);
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, jobs) }, worker));
  await browser.close();
  server.close();
  if (missingFonts.size) console.log('no @fontsource file (system fallback): ' + [...missingFonts].sort().join(', '));
  console.log(`${shots} screenshots in ${out}`);
}

/* ---- PNG ------------------------------------------------------- */

function readPng(file) {
  const buf = fs.readFileSync(file);
  let pos = 8, width, height, depth, type, interlace;
  const idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const kind = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (kind === 'IHDR') {
      width = data.readUInt32BE(0); height = data.readUInt32BE(4);
      depth = data[8]; type = data[9]; interlace = data[12];
    } else if (kind === 'IDAT') idat.push(data);
    else if (kind === 'IEND') break;
    pos += 12 + len;
  }
  const channels = { 0: 1, 2: 3, 4: 2, 6: 4 }[type];
  if (depth !== 8 || !channels || interlace) throw new Error(file + ': unsupported PNG (depth ' + depth + ', type ' + type + ')');
  const raw = zlib.inflateSync(Buffer.concat(idat), { maxOutputLength: 2 ** 31 - 1 });
  const stride = width * channels;
  const px = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y++) {
    const f = raw[y * (stride + 1)];
    const src = y * (stride + 1) + 1, dst = y * stride, up = dst - stride;
    for (let x = 0; x < stride; x++) {
      const a = x >= channels ? px[dst + x - channels] : 0;
      const b = y ? px[up + x] : 0;
      const c = x >= channels && y ? px[up + x - channels] : 0;
      let v = raw[src + x];
      if (f === 1) v += a;
      else if (f === 2) v += b;
      else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) {
        const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      px[dst + x] = v & 255;
    }
  }
  // Normalise to RGBA.
  if (channels === 4) return { width, height, data: px };
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0, j = 0; i < width * height; i++, j += channels) {
    const g = channels <= 2;
    rgba[i * 4] = px[j]; rgba[i * 4 + 1] = g ? px[j] : px[j + 1]; rgba[i * 4 + 2] = g ? px[j] : px[j + 2];
    rgba[i * 4 + 3] = channels === 2 ? px[j + 1] : 255;
  }
  return { width, height, data: rgba };
}

function writePng(file, width, height, rgba) {
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  function chunk(kind, data) {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
    const body = Buffer.concat([Buffer.from(kind, 'ascii'), data]);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(zlib.crc32(body) >>> 0);
    return Buffer.concat([len, body, crc]);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4); ihdr[8] = 8; ihdr[9] = 6;
  fs.writeFileSync(file, Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0)),
  ]));
}

/* ---- diff ------------------------------------------------------ */

function compare(fb, fa, outFile) {
  const b = readPng(fb), a = readPng(fa);
  if (b.width !== a.width || b.height !== a.height) {
    return { kind: 'diff', note: `size ${b.width}x${b.height} -> ${a.width}x${a.height}` };
  }
  const n = b.width * b.height;
  let count = 0, x0 = Infinity, y0 = Infinity, x1 = -1, y1 = -1;
  const mask = outFile ? new Uint8Array(n) : null;
  for (let i = 0; i < n; i++) {
    const k = i * 4;
    if (b.data[k] !== a.data[k] || b.data[k + 1] !== a.data[k + 1] || b.data[k + 2] !== a.data[k + 2] || b.data[k + 3] !== a.data[k + 3]) {
      count++;
      const x = i % b.width, y = (i / b.width) | 0;
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
      if (mask) mask[i] = 1;
    }
  }
  if (!count) return { kind: 'same' };
  const frac = count / n;
  return { kind: 'changed', count, frac, bbox: [x0, y0, x1 + 1, y1 + 1], mask, img: a };
}

function diff(args) {
  const [B, A] = args;
  if (!B || !A || B.startsWith('--') || A.startsWith('--')) die('usage: node scripts/visual.js diff <beforedir> <afterdir> [--out=<dir>] [--noise=0.0005]');
  const noiseAt = +flag(args, 'noise', 0.0005);
  const outDir = flag(args, 'out', null);
  if (outDir) fs.mkdirSync(outDir, { recursive: true });
  const before = fs.readdirSync(B).filter((f) => f.endsWith('.png')).sort();
  const after = new Set(fs.readdirSync(A).filter((f) => f.endsWith('.png')));
  const res = { same: [], noise: [], diff: [], missing: [], extra: [] };
  for (const f of before) {
    if (!after.has(f)) { res.missing.push(f); continue; }
    after.delete(f);
    const r = compare(path.join(B, f), path.join(A, f), outDir);
    if (r.kind === 'same') { res.same.push(f); continue; }
    if (r.kind === 'diff') { res.diff.push(`${f}  ${r.note}`); continue; }
    const line = `${f}  ${r.count} px (${(r.frac * 100).toFixed(4)}%) bbox ${r.bbox.join(',')}`;
    if (r.frac < noiseAt) { res.noise.push(line); continue; }
    res.diff.push(line);
    if (outDir) {
      // The after image faded to a third, changed pixels in red.
      const d = Buffer.from(r.img.data);
      for (let i = 0; i < r.mask.length; i++) {
        const k = i * 4;
        if (r.mask[i]) { d[k] = 255; d[k + 1] = 0; d[k + 2] = 0; d[k + 3] = 255; }
        else { d[k] = 170 + (d[k] / 3 | 0); d[k + 1] = 170 + (d[k + 1] / 3 | 0); d[k + 2] = 170 + (d[k + 2] / 3 | 0); }
      }
      writePng(path.join(outDir, f), r.img.width, r.img.height, d);
    }
  }
  res.extra = [...after].sort();
  console.log(`screenshots: ${before.length} pairs; identical ${res.same.length}; noise ${res.noise.length}; different ${res.diff.length}; missing ${res.missing.length}; new ${res.extra.length}`);
  for (const x of res.noise) console.log('  NOISE   ' + x);
  for (const x of res.diff) console.log('  DIFF    ' + x);
  for (const x of res.missing) console.log('  MISSING ' + x);
  for (const x of res.extra) console.log('  NEW     ' + x);
  process.exit(res.diff.length || res.missing.length || res.extra.length ? 1 : 0);
}

/* ---- main ------------------------------------------------------ */

const [cmd, ...rest] = process.argv.slice(2);
if (cmd === 'capture') capture(rest).catch((e) => { console.error(e); process.exit(2); });
else if (cmd === 'diff') diff(rest);
else die('usage: node scripts/visual.js capture <outdir> [options] | diff <beforedir> <afterdir> [options]\nSee the header of scripts/visual.js.');
