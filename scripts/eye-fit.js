#!/usr/bin/env node
/* ════════════════════════════════════════════════════════════════
   eye-fit.js: fits the inscription's fifteen marks to the Fleet's
   catalogue on the Chart (prime/chart/galaxy.js).

   The eye is drawn on the inscription plane, the plane through Oerth
   square to the axis from Oerth through Erevos, by straight projection
   along the axis. Each eye point is a stroke: a line through the galaxy
   parallel to the axis. Any system on a stroke lands on its point of the
   eye, whatever its depth along the axis. For each stroke the fit may take:
     - a catalogue system near the stroke, nudged onto it (the shortest move)
     - a catalogue system moved further, to another depth on the stroke
     - a new catalogue system placed on the stroke
   A mark is a whole system, and every planet in it must be opened and
   linked, so the fit reads each system's planets from its survey roll
   (survey-core.js, as the Chart rolls it) and prefers systems with few
   planets. Only systems whose every planet carries life qualify (a Zenith,
   and the Monolith a link needs, comes only to a world with life); a
   charted wreck rules a system out, except on Nowhere's stroke, where the
   wreck is Nowhere and its Monolith answered.
   It searches many seeded layouts and scores each, in priority order:
     (a) every mark in front of Oerth, inside the galaxy, no higher than 18
     (b) a zigzag from above: lid and iris links crossing, marks in all
         eight wedges around the core, no affine copy of the eye, few
         marks crowded together
     (c) heights as common as the catalogue's: no more marks in the thick
         disc or the halo than chance would put there, and high marks
         apart from each other and in company
     (d) few planets
     (e) small moves
   The search is seeded, so it gives the same layout on every run.

   node scripts/eye-fit.js             report the best layout at EYE_HALF
   node scripts/eye-fit.js --half H    fit an eye H units in half-width
   node scripts/eye-fit.js --scan      fit a range of sizes and compare
   node scripts/eye-fit.js --write     write the layout (and --half) to
                                       galaxy.js
   ════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');

const FILE = path.join(__dirname, '..', 'prime', 'chart', 'galaxy.js');
const SURVEY = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'prime', 'data', 'survey.json'), 'utf8'));
const CORE_LIB = require('../prime/chart/survey-core.js');
const OPEN = '  /* MARK_FIT: written by scripts/eye-fit.js */', CLOSE = '  /* /MARK_FIT */';
const HALF_RE = /(\/\* EYE_HALF: written by scripts\/eye-fit\.js \*\/\n  const EYE_HALF = )[\d.]+;/;
const src = fs.readFileSync(FILE, 'utf8');
const a = src.indexOf(OPEN), b = src.indexOf(CLOSE);
if (a < 0 || b < 0 || !HALF_RE.test(src)) throw new Error('MARK_FIT or EYE_HALF markers not found in galaxy.js');
const arg = k => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const withHalf = (t, h) => h ? t.replace(HALF_RE, `$1${h};`) : t;
const blankSrc = h => withHalf(src.slice(0, a) + OPEN + '\n  const MARK_FIT = [];\n' + src.slice(b), h);

function load(h) {
  const ctx = { window: { SURVEY_CORE: CORE_LIB }, Math }; vm.createContext(ctx); vm.runInContext(blankSrc(h), ctx);
  const E = ctx.window.EREVOS; E.rollSystems(SURVEY); return E;
}

const sub = (p, q) => [p[0] - q[0], p[1] - q[1], p[2] - q[2]];
const dot = (p, q) => p[0] * q[0] + p[1] * q[1] + p[2] * q[2];
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
const flatD = (p, q) => Math.hypot(p[0] - q[0], p[2] - q[2]);
const W_CROSS = +(arg('--wc') || 6), W_RESID = +(arg('--wr') || 70), W_H = +(arg('--wh') || 1), W_FILL = +(arg('--wf') || 40);
const LIVED = ['outpost', 'settlement', 'civilization'];

function fit(h, quiet) {
  const E = load(h);
  const { EYE2D, LID, IRIS, OERTH, POS, RS, S, THICK_LIMIT, strokeAt, AXIS, STROKE_TOL, planetsOf, PLANET_KINDS } = E;
  const FILLERS = E.FILLERS;
  FILLERS.forEach(f => {
    const pl = f.sys.bodies.filter(x => PLANET_KINDS.includes(x.kind));
    f.planets = pl.length;
    f.lived = pl.some(x => LIVED.includes(x.inhabitants));
    f.ok = E.qualifies(f.sys, false); f.okNowhere = E.qualifies(f.sys, true);
  });

  /* Seeds for new marks: from NEW_SEED0 up, each rolling a qualifying
     system whose number is free, fewest planets first. */
  // a pool seed must keep its roll when the Chart rolls it: its number and
  // Bayer name free of the survey, the catalogue and the other pool seeds
  const taken = new Set(), bayer = new Set();
  SURVEY.systems.forEach(x => { if (x.catalogue) taken.add(x.catalogue); if (x.bayer) bayer.add(x.bayer); });
  FILLERS.forEach(f => { taken.add(f.sys.catalogue); if (f.sys.bayer) bayer.add(f.sys.bayer); });
  const POOL = [];
  for (let sd = E.NEW_SEED0; POOL.length < 40 && sd < E.NEW_SEED0 + 20000; sd++) {
    const r = CORE_LIB.roll(SURVEY, { seed: sd });
    if (taken.has(r.catalogue) || (r.bayer && bayer.has(r.bayer)) || !E.qualifies(r, false)) continue;
    taken.add(r.catalogue); if (r.bayer) bayer.add(r.bayer);
    POOL.push({ seed: sd, sys: r, planets: E.planetsOf(r) });
  }
  POOL.sort((p, q) => p.planets - q.planets || p.seed - q.seed);
  const QUAL = FILLERS.filter(f => f.ok).length, QUAL_N = FILLERS.filter(f => f.okNowhere).length;
  // ── where a mark may stand ──────────────────────────────────────
  const Y_CAP = 18, MIN_S = 6;
  const named = Object.keys(POS).filter(k => k !== 'greyspace').map(E.sysScene);
  const rsScene = E.toScene(RS, 0), CLUSTER = 560 * S;
  function valid(v, s) {
    const r = Math.hypot(v[0], v[2]);
    if (s < MIN_S || r < 12 || r > 100 || Math.abs(v[1]) > Y_CAP) return false;
    if (named.some(q => flatD(v, q) < 9) || flatD(v, OERTH) < 12 || flatD(v, rsScene) < CLUSTER) return false;
    return true;
  }
  const clearOf = (v, self) => FILLERS.every(f => f === self || flatD(v, f.v) >= 4);

  /* A mark's height costs what that height is rare in the catalogue: the
     log of how much less common it is than the thin disc (two-unit bins,
     lightly smoothed). */
  const BIN = 2, NB = Math.ceil(Y_CAP / BIN) + 1, counts = new Array(NB).fill(0);
  FILLERS.forEach(f => { counts[Math.min(NB - 1, Math.floor(Math.abs(f.v[1]) / BIN))]++; });
  const dens = counts.map((c, k) => ((counts[k - 1] || c) + 2 * c + (counts[k + 1] || c)) / 4 + 0.5);
  const heightCost = y => Math.abs(y) <= 3 ? 0 : W_H * 0.6 * Math.log(dens[0] / dens[Math.min(NB - 1, Math.floor(Math.abs(y) / BIN))]);
  const share = t => FILLERS.filter(f => Math.abs(f.v[1]) > t).length / FILLERS.length;
  const EXPECT = { thick: 15 * (share(3) - share(THICK_LIMIT)), halo: 15 * share(THICK_LIMIT), over14: 15 * share(14) };
  const highOnes = FILLERS.filter(f => Math.abs(f.v[1]) > THICK_LIMIT);

  /* Few planets: every planet in a mark must be found, opened and linked. */
  const PLANET_W = 2.2, MOVE_W = 0.18, NEW_COST = +(arg("--new") || 12), CAP = +(arg("--cap") || 22);
  const sysCost = f => PLANET_W * (f.planets - 1);

  // ── candidates for each stroke ──────────────────────────────────
  const cands = EYE2D.map((e, i) => {
    const base = strokeAt(i, 0), out = [];
    for (const f of FILLERS) {
      if (i === E.NOWHERE ? !f.okNowhere : !f.ok) continue;
      const sStar = dot(sub(f.v, base), AXIS), nudge = dist(f.v, strokeAt(i, sStar));
      if (nudge > CAP) continue;
      const s0 = Math.round(sStar * 100) / 100, ss = new Set([s0]);
      for (let s = Math.ceil((sStar - CAP) / 3) * 3; s <= sStar + CAP; s += 3) ss.add(s);
      for (const s of ss) {
        const v = strokeAt(i, s), move = dist(f.v, v);
        if (move > CAP || !valid(v, s) || !clearOf(v, f)) continue;
        out.push({ i, ref: f.i, f, s, v, move, how: move <= STROKE_TOL ? 'on stroke' : s === s0 ? 'nudged' : 'moved',
          cost: MOVE_W * Math.max(0, move - STROKE_TOL) + heightCost(v[1]) + sysCost(f) });
      }
    }
    for (let s = MIN_S; s <= 260 && i !== E.NOWHERE; s += 2) {
      const v = strokeAt(i, s);
      if (!valid(v, s) || !clearOf(v, null)) continue;
      out.push({ i, ref: 'new', s, v, move: 0, how: 'new', cost: NEW_COST + heightCost(v[1]) + PLANET_W * (POOL[0].planets - 1) });
    }
    if (!out.length) return null;
    return out.sort((p, q) => p.cost - q.cost);
  });
  if (cands.some(c => !c)) return { h, fail: cands.map((c, i) => c ? null : i + 1).filter(Boolean) };

  // ── the score ───────────────────────────────────────────────────
  const EDGES = [];
  LID.forEach((p, k) => EDGES.push([p, LID[(k + 1) % LID.length]]));
  IRIS.forEach((p, k) => EDGES.push([p, IRIS[(k + 1) % IRIS.length]]));
  const orient = (p, q, r) => (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
  const crosses = (p1, p2, p3, p4) => orient(p1, p2, p3) * orient(p1, p2, p4) < 0 && orient(p3, p4, p1) * orient(p3, p4, p2) < 0;
  const wedge = p => Math.floor((Math.atan2(p[1], p[0]) + Math.PI) / (Math.PI / 4)) % 8;
  /* How far the top-down figure is from any affine copy of the eye (which
     covers a stretched or squashed eye): the residual of a least-squares
     affine fit, over the spread of the points. 0 is an exact eye. */
  function eyeLikeness(flat) {
    const X = EYE2D.map(e => [e.x, e.y, 1]), M = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], bx = [0, 0, 0], by = [0, 0, 0];
    X.forEach((x, n) => { for (let r = 0; r < 3; r++) { for (let c = 0; c < 3; c++) M[r][c] += x[r] * x[c]; bx[r] += x[r] * flat[n][0]; by[r] += x[r] * flat[n][1]; } });
    const solve = (A, y) => { const m = A.map((r, k) => [...r, y[k]]);
      for (let c = 0; c < 3; c++) { let p = c; for (let r = c + 1; r < 3; r++) if (Math.abs(m[r][c]) > Math.abs(m[p][c])) p = r; [m[c], m[p]] = [m[p], m[c]];
        for (let r = 0; r < 3; r++) if (r !== c) { const k = m[r][c] / m[c][c]; for (let q = c; q < 4; q++) m[r][q] -= k * m[c][q]; } }
      return m.map((r, k) => r[3] / m[k][k]); };
    const ax = solve(M, bx), ay = solve(M, by);
    let res = 0, spread = 0; const mx = flat.reduce((t, p) => t + p[0], 0) / flat.length, my = flat.reduce((t, p) => t + p[1], 0) / flat.length;
    X.forEach((x, n) => { const px = ax[0] * x[0] + ax[1] * x[1] + ax[2], py = ay[0] * x[0] + ay[1] * x[1] + ay[2];
      res += (px - flat[n][0]) ** 2 + (py - flat[n][1]) ** 2; spread += (flat[n][0] - mx) ** 2 + (flat[n][1] - my) ** 2; });
    return Math.sqrt(res / spread);
  }
  /* The lid seen from above as a smooth lens is what gives an eye away:
     how much of its convex hull the lid ring fills (1 is a convex lens),
     and how many iris marks sit inside it. */
  const area = P => { let t = 0; for (let k = 0; k < P.length; k++) { const p = P[k], q = P[(k + 1) % P.length]; t += p[0] * q[1] - q[0] * p[1]; } return Math.abs(t) / 2; };
  function hull(P) {
    const pts = P.slice().sort((p, q) => p[0] - q[0] || p[1] - q[1]), lo = [], up = [];
    for (const p of pts) { while (lo.length > 1 && orient(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
    for (const p of pts.reverse()) { while (up.length > 1 && orient(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
    return lo.slice(0, -1).concat(up.slice(0, -1));
  }
  const inside = (P, q) => { let c = false; for (let k = 0, j = P.length - 1; k < P.length; j = k++) { const a = P[k], b = P[j];
    if ((a[1] > q[1]) !== (b[1] > q[1]) && q[0] < (b[0] - a[0]) * (q[1] - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
  function measure(pick) {
    const flat = pick.map(c => [c.v[0], c.v[2]]);
    let crossings = 0;
    for (let m = 0; m < EDGES.length; m++) for (let n = m + 1; n < EDGES.length; n++) {
      const [p, q] = EDGES[m], [r, s] = EDGES[n];
      if (p === r || p === s || q === r || q === s) continue;
      if (crosses(flat[p], flat[q], flat[r], flat[s])) crossings++;
    }
    /* with the links to Oerth drawn as well, as the chart draws them */
    const oer = [OERTH[0], OERTH[2]];
    let spokes = 0;
    for (const [p, q] of EDGES) for (let k = 0; k < 15; k++) {
      if (k === p || k === q) continue;
      if (crosses(flat[p], flat[q], flat[k], oer)) spokes++;
    }
    const lidP = LID.map(k => flat[k]), fill = area(lidP) / area(hull(lidP));
    const irisIn = IRIS.filter(k => inside(lidP, flat[k])).length;
    const wedges = new Set(flat.map(wedge)).size;
    let gap = Infinity, crowd = 0;
    for (let m = 0; m < 15; m++) for (let n = m + 1; n < 15; n++) { const g = Math.hypot(flat[m][0] - flat[n][0], flat[m][1] - flat[n][1]); gap = Math.min(gap, g); if (g < 15) crowd++; }
    const resid = eyeLikeness(flat), cost = pick.reduce((t, c) => t + c.cost, 0);
    const ys = pick.map(c => Math.abs(c.v[1]));
    const nThick = ys.filter(y => y > 3 && y <= THICK_LIMIT).length, nHalo = ys.filter(y => y > THICK_LIMIT).length, n14 = ys.filter(y => y > 14).length;
    const excess = W_H * (4 * Math.max(0, nThick - Math.ceil(EXPECT.thick)) + 8 * Math.max(0, nHalo - Math.ceil(EXPECT.halo)) + 10 * Math.max(0, n14 - Math.ceil(EXPECT.over14)));
    // high marks: apart from each other, and each with high catalogue systems nearby
    const highs = pick.filter(c => Math.abs(c.v[1]) > THICK_LIMIT);
    let cluster = 0, lonely = 0;
    for (let m = 0; m < highs.length; m++) {
      for (let n = m + 1; n < highs.length; n++) if (flatD(highs[m].v, highs[n].v) < 45) cluster++;
      if (!highOnes.some(f => f !== highs[m].f && flatD(f.v, highs[m].v) < 30)) lonely++;
    }
    const score = W_CROSS * crossings + 1.5 * spokes - 40 * (8 - wedges) + W_RESID * resid - W_FILL * fill - 6 * irisIn + 0.3 * Math.min(gap, 20) - (gap < 8 ? 25 : 0) - 4 * crowd
      - cost - excess - 16 * cluster - 5 * lonely;
    return { score, fill, irisIn, crossings, spokes, wedges, gap, resid, cost, nThick, nHalo, n14, crowd, cluster, lonely };
  }

  // ── the search: seeded restarts, each annealed ──────────────────
  function search(seed) {
    const R = E.rng(seed), used = new Map(), pick = [];
    const take = (i, c) => { if (pick[i] && pick[i].ref !== 'new') used.delete(pick[i].ref); pick[i] = c; if (c.ref !== 'new') used.set(c.ref, i); };
    const draw = i => { const L = cands[i]; for (let k = 0; k < 50; k++) { const c = L[Math.floor(Math.pow(R(), 2.2) * L.length)];
      if (c.ref === 'new' || !used.has(c.ref) || used.get(c.ref) === i) return c; } return null; };
    for (let i = 0; i < 15; i++) { const c = draw(i); if (!c) return null; take(i, c); }
    let cur = measure(pick), best = { score: cur.score, pick: pick.slice(), m: cur };
    const STEPS = 9000;
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
  const RESTARTS = +(arg('--restarts') || 80);
  for (let k = 0; k < RESTARTS; k++) { const L = search(9001 + k * 7919); if (L && (!best || L.score > best.score)) best = L; }
  best.h = h; best.E = E; best.POOL = POOL; best.QUAL = QUAL; best.QUAL_N = QUAL_N; best.cat = cands.map(L => L.filter(c => c.ref !== 'new').length); best.EXPECT = EXPECT; best.wedge = wedge;
  return best;
}

function report(best) {
  const { E, EXPECT, wedge } = best;
  const rows = best.pick.map((c, i) => ({
    n: i + 1, part: E.EYE2D[i].part, sys: c.ref === 'new' ? (c.pool ? c.pool.sys.id + ' (new)' : 'new') : c.f.sys.id, idx: c.ref === 'new' && c.pool ? 'seed ' + c.pool.seed : c.ref, planets: c.ref === 'new' ? (c.pool ? c.pool.planets : '?') : c.f.planets + (i === E.NOWHERE ? E.wrecksOf(c.f.sys) : 0),
    life: (c.ref === 'new' ? (c.pool && c.pool.sys.bodies.some(x => LIVED.includes(x.inhabitants))) : c.f.lived) ? 'inhabited' : 'living', how: c.how, move: +c.move.toFixed(1),
    depth: +c.s.toFixed(1), y: +c.v[1].toFixed(1), band: E.bandOf(c.v[1]), r: +Math.hypot(c.v[0], c.v[2]).toFixed(0), wedge: wedge([c.v[0], c.v[2]])
  }));
  console.log(`EYE_HALF ${best.h}: eye ${2 * best.h} units wide (${(2 * best.h / 200 * 100).toFixed(0)}% of the galaxy's diameter), ${(0.746 * best.h).toFixed(1)} high`);
  console.log(`qualifying catalogue systems: ${best.QUAL} of ${E.FILLERS.length} (every planet living, no wreck), and ${best.QUAL_N} with a wreck that could be Nowhere's; catalogue candidates per stroke: ${best.cat.join(' ')}`);
  console.table(rows);
  const moves = rows.filter(r => r.how !== 'new').map(r => r.move);
  console.log(`ring crossings from above ${best.m.crossings}, with the links to Oerth ${best.m.crossings + best.m.spokes}, wedges ${best.m.wedges}/8, smallest gap ${best.m.gap.toFixed(1)}, pairs within 15 ${best.m.crowd}, eye residual from above ${best.m.resid.toFixed(2)}, lid fills ${(100 * best.m.fill).toFixed(0)}% of its hull, iris marks inside the lid ${best.m.irisIn}/5`);
  console.log(`moves: mean ${(moves.reduce((t, x) => t + x, 0) / moves.length).toFixed(1)}, max ${Math.max(...moves).toFixed(1)} over ${moves.length} catalogue systems; new ${rows.length - moves.length}`);
  console.log(`heights: thick ${best.m.nThick} (chance ${EXPECT.thick.toFixed(1)}), halo ${best.m.nHalo} (chance ${EXPECT.halo.toFixed(1)}), above 14 ${best.m.n14} (chance ${EXPECT.over14.toFixed(1)}); high marks within 45 of each other ${best.m.cluster}, without company ${best.m.lonely}`);
  const pl = rows.filter(r => r.planets !== '?').map(r => r.planets);
  console.log(`planets: total ${pl.reduce((t, x) => t + x, 0)}, mean ${(pl.reduce((t, x) => t + x, 0) / pl.length).toFixed(2)}; ${rows.filter(r => r.life === 'inhabited').length} inhabited, ${rows.filter(r => r.life === 'living').length} living, ${rows.filter(r => r.life === 'lifeless').length} lifeless`);
  return rows;
}

if (process.argv.includes('--scan')) {
  for (const h of [60, 65, 70, 75, 80, 85, 90, 95]) {
    const r = fit(h);
    if (r.fail) { console.log(`half ${h}: strokes ${r.fail.join(', ')} have nowhere to stand`); continue; }
    const mv = r.pick.filter(c => c.ref !== 'new').map(c => c.move);
    console.log(`half ${h}: score ${r.score.toFixed(1)} · crossings ${r.m.crossings}+${r.m.spokes} · wedges ${r.m.wedges} · resid ${r.m.resid.toFixed(2)} fill ${r.m.fill.toFixed(2)} irisIn ${r.m.irisIn} · thick ${r.m.nThick} halo ${r.m.nHalo} >14 ${r.m.n14} · cluster ${r.m.cluster} lonely ${r.m.lonely} · planets ${r.pick.reduce((t, c) => t + (c.f ? c.f.planets : 3), 0)} · move mean ${(mv.reduce((t, x) => t + x, 0) / mv.length).toFixed(1)} max ${Math.max(...mv).toFixed(1)} · new ${15 - mv.length}`);
  }
} else {
  const h = arg('--half') ? +arg('--half') : null;
  const best = fit(h || load(null).EYE_HALF);
  if (best.fail) { console.log(`strokes ${best.fail.join(', ')} have nowhere to stand`); process.exit(1); }
  let k = 0; best.pick.forEach(c => { if (c.ref === 'new') { c.pool = best.POOL[k++]; } });
  report(best);
  const lit = '  const MARK_FIT = [\n' + best.pick.map(c => c.ref === 'new' ? `    ['new', ${+c.s.toFixed(2)}, ${c.pool.seed}]` : `    [${c.ref}, ${+c.s.toFixed(2)}]`).join(',\n') + '\n  ];\n';
  if (process.argv.includes('--write')) {
    fs.writeFileSync(FILE, withHalf(src.slice(0, a) + OPEN + '\n' + lit + src.slice(b), h));
    console.log('MARK_FIT written to prime/chart/galaxy.js');
  } else process.stdout.write(lit);
  if (arg('--dump')) fs.writeFileSync(arg('--dump'), JSON.stringify({ h: best.h, oerth: best.E.OERTH, marks: best.pick.map((c, i) => ({ i, v: c.v, eye: [best.E.EYE2D[i].x, best.E.EYE2D[i].y], from: c.f ? c.f.v : null })), fillers: best.E.FILLERS.map(f => f.v) }));
}
