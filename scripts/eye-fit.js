#!/usr/bin/env node
/* ════════════════════════════════════════════════════════════════
   eye-fit.js: fits the inscription's fifteen heart systems to the
   Fleet's catalogue on the Chart (prime/chart/galaxy.js).

   The eye's shape is fixed in galaxy.js (EYE2D, EYE_FOV, EYE_ASPECT).
   Oerth's heart is the eye's retina: each eye point is a sight line from
   Oerth, and any system on that line lands exactly on its point in Oerth's
   view. For each point the fit may take:
     - a catalogue system near the line, nudged onto it (the shortest move)
     - a catalogue system moved further, to anywhere on its line
     - a new catalogue system placed on the line
   It searches many seeded layouts and scores each, in priority order:
     (a) the exact eye from Oerth: every candidate is on its line
     (b) gibberish from above: lid and iris links crossing, hearts in all
         eight wedges around the core, no affine copy of the eye, no clumps
     (c) heights in the disc, the thick disc or the halo, iris hearts low
     (d) small moves
   The search is seeded, so it gives the same layout on every run.

   node scripts/eye-fit.js           report the best layout
   node scripts/eye-fit.js --write   and write it to HEART_FIT in galaxy.js
   node scripts/eye-fit.js --fov N   try an eye N degrees wide (with --write,
                                     EYE_FOV in galaxy.js becomes N)
   ════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');

const FILE = path.join(__dirname, '..', 'prime', 'chart', 'galaxy.js');
const OPEN = '  /* HEART_FIT: written by scripts/eye-fit.js */', CLOSE = '  /* /HEART_FIT */';
const src = fs.readFileSync(FILE, 'utf8');
const a = src.indexOf(OPEN), b = src.indexOf(CLOSE);
if (a < 0 || b < 0) throw new Error('HEART_FIT markers not found in galaxy.js');
const fovArg = process.argv.indexOf('--fov'), FOV = fovArg > 0 ? +process.argv[fovArg + 1] : null;
const FOV_RE = /const EYE_FOV = [\d.]+/;
const withFov = t => FOV ? t.replace(FOV_RE, 'const EYE_FOV = ' + FOV) : t;
const blank = withFov(src.slice(0, a) + OPEN + '\n  const HEART_FIT = [];\n' + src.slice(b));

// galaxy.js with no hearts fitted: the catalogue as drawn
const ctx = { window: {}, Math }; vm.createContext(ctx); vm.runInContext(blank, ctx);
const E = ctx.window.EREVOS;
const { EYE2D, EYE_FOV, LID, IRIS, OERTH, POS, RS, S, THICK_LIMIT, eyeDir } = E;
const FILLERS = E.FILLERS;

const add = (p, q) => [p[0] + q[0], p[1] + q[1], p[2] + q[2]];
const sub = (p, q) => [p[0] - q[0], p[1] - q[1], p[2] - q[2]];
const mul = (p, k) => [p[0] * k, p[1] * k, p[2] * k];
const dot = (p, q) => p[0] * q[0] + p[1] * q[1] + p[2] * q[2];
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
const flatD = (p, q) => Math.hypot(p[0] - q[0], p[2] - q[2]);

// ── where a heart may stand ─────────────────────────────────────
// No heart higher than the catalogue's own highest systems (18 units).
const Y_CAP = 18;
const named = Object.keys(POS).map(E.sysScene);
const rsScene = E.toScene(RS, 0), CLUSTER = 560 * S;   // Caelestis's cluster, kept clear as the catalogue keeps it
function valid(v) {
  const r = Math.hypot(v[0], v[2]);
  if (r < 12 || r > 100 || Math.abs(v[1]) > Y_CAP) return false;
  if (named.some(q => dist(v, q) < 9) || flatD(v, OERTH) < 20 || flatD(v, rsScene) < CLUSTER) return false;
  return true;
}
// a heart standing over another catalogue system would hide it on the flat map
const clearOf = (v, self) => FILLERS.every(f => f === self || flatD(v, f.v) >= 4);

const NEW_COST = 4, MOVE_W = 0.15, CAP = 40, MIN_S = 25;   // MIN_S: no heart within 25 units of Oerth
function heightCost(y, wasHigh, iris) {
  const h = Math.abs(y);
  if (h <= 3) return 0;
  if (h <= THICK_LIMIT) return iris ? 3 : 1;
  return (wasHigh ? 1 : 3) + 0.15 * (h - THICK_LIMIT) + (iris ? 6 : 0);
}

// ── candidates for each eye point ───────────────────────────────
const cands = EYE2D.map((e, i) => {
  const dir = eyeDir(i), line = t => add(OERTH, mul(dir, t)), out = [], iris = e.part === 'iris';
  for (const f of FILLERS) {
    const tStar = dot(sub(f.v, OERTH), dir), nudge = dist(f.v, line(tStar));
    if (tStar <= 0 || nudge > CAP) continue;
    const t0 = Math.round(tStar * 100) / 100, ts = new Set([t0]);
    for (let t = Math.ceil((tStar - CAP) / 3) * 3; t <= tStar + CAP; t += 3) ts.add(t);
    for (const t of ts) {
      if (t < MIN_S) continue;
      const v = line(t), move = dist(f.v, v);
      if (move > CAP || !valid(v) || !clearOf(v, f)) continue;
      out.push({ i, ref: f.i, t, v, move, how: t === t0 ? 'nudged' : 'moved', cost: MOVE_W * move + heightCost(v[1], f.band === 'high', iris) });
    }
  }
  for (let t = MIN_S; t <= 300; t += 2) {
    const v = line(t);
    if (!valid(v) || FILLERS.some(f => flatD(v, f.v) < 105 * S)) continue;
    out.push({ i, ref: 'new', t, v, move: 0, how: 'new', cost: NEW_COST + heightCost(v[1], false, iris) });
  }
  if (!out.length) throw new Error(`eye point ${i + 1} has nowhere to stand at EYE_FOV ${EYE_FOV}`);
  return out.sort((p, q) => p.cost - q.cost);
});

// ── the score ───────────────────────────────────────────────────
const EDGES = [];
LID.forEach((p, k) => EDGES.push([p, LID[(k + 1) % LID.length]]));
IRIS.forEach((p, k) => EDGES.push([p, IRIS[(k + 1) % IRIS.length]]));
const orient = (p, q, r) => (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
const crosses = (p1, p2, p3, p4) => orient(p1, p2, p3) * orient(p1, p2, p4) < 0 && orient(p3, p4, p1) * orient(p3, p4, p2) < 0;
const wedge = p => Math.floor((Math.atan2(p[1], p[0]) + Math.PI) / (Math.PI / 4)) % 8;
/* How far the top-down figure is from any affine copy of the eye: the
   residual of a least-squares affine fit, over the spread of the points. */
function eyeLikeness(flat) {
  const X = EYE2D.map(e => [e.x, e.y, 1]), M = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], bx = [0, 0, 0], by = [0, 0, 0];
  X.forEach((x, n) => { for (let r = 0; r < 3; r++) { for (let c = 0; c < 3; c++) M[r][c] += x[r] * x[c]; bx[r] += x[r] * flat[n][0]; by[r] += x[r] * flat[n][1]; } });
  const solve = (A, y) => { const m = A.map((r, k) => [...r, y[k]]);
    for (let c = 0; c < 3; c++) { let p = c; for (let r = c + 1; r < 3; r++) if (Math.abs(m[r][c]) > Math.abs(m[p][c])) p = r; [m[c], m[p]] = [m[p], m[c]];
      for (let r = 0; r < 3; r++) if (r !== c) { const k = m[r][c] / m[c][c]; for (let q = c; q < 4; q++) m[r][q] -= k * m[c][q]; } }
    return m.map((r, k) => r[3] / m[k][k]); };
  const ax = solve(M, bx), ay = solve(M, by);
  let res = 0, spread = 0; const mx = flat.reduce((s, p) => s + p[0], 0) / flat.length, my = flat.reduce((s, p) => s + p[1], 0) / flat.length;
  X.forEach((x, n) => { const px = ax[0] * x[0] + ax[1] * x[1] + ax[2], py = ay[0] * x[0] + ay[1] * x[1] + ay[2];
    res += (px - flat[n][0]) ** 2 + (py - flat[n][1]) ** 2; spread += (flat[n][0] - mx) ** 2 + (flat[n][1] - my) ** 2; });
  return Math.sqrt(res / spread);                     // 0: an exact affine eye; near 1: no trace of it
}
function measure(pick) {
  const flat = pick.map(c => [c.v[0], c.v[2]]);
  let crossings = 0;
  for (let m = 0; m < EDGES.length; m++) for (let n = m + 1; n < EDGES.length; n++) {
    const [p, q] = EDGES[m], [r, s] = EDGES[n];
    if (p === r || p === s || q === r || q === s) continue;
    if (crosses(flat[p], flat[q], flat[r], flat[s])) crossings++;
  }
  const wedges = new Set(flat.map(wedge)).size;
  let gap = Infinity;
  for (let m = 0; m < 15; m++) for (let n = m + 1; n < 15; n++) gap = Math.min(gap, Math.hypot(flat[m][0] - flat[n][0], flat[m][1] - flat[n][1]));
  const resid = eyeLikeness(flat), cost = pick.reduce((s, c) => s + c.cost, 0);
  const score = 3 * crossings - 40 * (8 - wedges) + 25 * resid + 0.3 * Math.min(gap, 25) - (gap < 10 ? 30 : 0) - cost;
  return { score, crossings, wedges, gap, resid, cost };
}

// ── the search: seeded restarts, each annealed ──────────────────
function search(seed) {
  const R = E.rng(seed), used = new Map(), pick = [];
  const take = (i, c) => { if (pick[i] && pick[i].ref !== 'new') used.delete(pick[i].ref); pick[i] = c; if (c.ref !== 'new') used.set(c.ref, i); };
  const draw = i => { const L = cands[i]; for (let k = 0; k < 50; k++) { const c = L[Math.floor(Math.pow(R(), 2.5) * L.length)];
    if (c.ref === 'new' || !used.has(c.ref) || used.get(c.ref) === i) return c; } return null; };
  for (let i = 0; i < 15; i++) { const c = draw(i); if (!c) return null; take(i, c); }
  let cur = measure(pick), best = { score: cur.score, pick: pick.slice(), m: cur };
  const STEPS = 12000;
  for (let k = 0; k < STEPS; k++) {
    const T = 6 * (1 - k / STEPS) + 0.05, i = Math.floor(R() * 15), c = draw(i);
    if (!c || c === pick[i]) continue;
    const old = pick[i]; take(i, c); const m = measure(pick);
    if (m.score >= cur.score || R() < Math.exp((m.score - cur.score) / T)) { cur = m; if (m.score > best.score) best = { score: m.score, pick: pick.slice(), m }; }
    else take(i, old);
  }
  return best;
}
let best = null;
for (let s = 0; s < 160; s++) { const L = search(9001 + s * 7919); if (L && (!best || L.score > best.score)) best = L; }

// ── report ──────────────────────────────────────────────────────
const band = y => Math.abs(y) <= 3 ? 'disc' : Math.abs(y) <= THICK_LIMIT ? 'thick' : 'halo';
const rows = best.pick.map((c, i) => {
  return { n: i + 1, part: EYE2D[i].part, how: c.how, ref: c.ref, move: +c.move.toFixed(1), s: +c.t.toFixed(1), y: +c.v[1].toFixed(1), band: band(c.v[1]), r: +Math.hypot(c.v[0], c.v[2]).toFixed(0), wedge: wedge([c.v[0], c.v[2]]) };
});
console.log(`EYE_FOV ${EYE_FOV} degrees`);
console.table(rows);
const moves = rows.filter(r => r.how !== 'new').map(r => r.move);
console.log(`crossings ${best.m.crossings}, wedges ${best.m.wedges}/8, smallest gap ${best.m.gap.toFixed(1)}, eye residual ${best.m.resid.toFixed(2)}`);
console.log(`move max ${Math.max(...moves).toFixed(1)}, mean ${(moves.reduce((s, x) => s + x, 0) / moves.length).toFixed(1)} over ${moves.length} catalogue systems`);
console.log(`bands: ${['disc', 'thick', 'halo'].map(k => k + ' ' + rows.filter(r => r.band === k).length).join(', ')}`);

const lit = '  const HEART_FIT = [\n' + best.pick.map((c, i) => `    [${c.ref === 'new' ? "'new'" : c.ref}, ${+c.t.toFixed(2)}]`).join(',\n') + '\n  ];\n';
if (process.argv.includes('--write')) {
  fs.writeFileSync(FILE, withFov(src.slice(0, a) + OPEN + '\n' + lit + src.slice(b)));
  console.log('HEART_FIT written to prime/chart/galaxy.js');
} else process.stdout.write(lit);
