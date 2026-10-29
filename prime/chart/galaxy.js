/* ════════════════════════════════════════════════════════════════
   The Erevos Galaxy's geometry, shared by the Chart's two views:
   the flat chart (index.html) and the 3D holochart (holo.html).

   Chart units: the galaxy canvas is 4400 x 3800 with the core at
   (2200, 1900) and a radius of 1650. Scene units (3D): the chart's x and
   y become x and z, scaled so the radius is 100; y is height above the
   disc.

   Four spiral arms, a quarter turn apart. Arm 0 is Realmspace's arm and
   the Caelestis Sector's; the arms are numbered in the order the Beacon's
   beam reaches them (gtc.js).

   The inscription. Each of the fifteen heart worlds sits in its own
   system, set along the line of sight from Oerth through its point of the
   eye, at a seeded depth chosen so its height stays inside the stellar
   disc (or, failing that, the halo). From Oerth, looking at the core, the
   hearts fold into the eye with the core as its pupil.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const GX = { cx: 2200, cy: 1900, R: 1650 };
  const ARMS = 4;
  const TIP = 3.3;                       // an arm runs t = 0 (root) to about 3.3 (tip)

  function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function gauss(r) { let u = 0, v = 0; while (!u) u = r(); while (!v) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

  /* A point on a spiral arm. */
  const armAngle = (arm, t, ja, spin) => t * 1.55 + arm * Math.PI / 2 + 0.35 + (ja || 0) + (spin || 0);
  function armPt(arm, t, jr, ja, spin) {
    const ang = armAngle(arm, t, ja, spin), r = GX.R * (0.09 + t / 3.6) + (jr || 0);
    return [GX.cx + r * Math.cos(ang), GX.cy + r * Math.sin(ang) * 0.9];
  }

  /* The named systems. Realmspace and Krynnspace lie on arm 0, Greyspace on
     arm 2, across the core; Fonains's system, CSC 50743, sits beside
     Krynnspace; the rest are set from Realmspace. */
  const RS = armPt(0, 2.1);
  const OUT = (() => { const dx = RS[0] - GX.cx, dy = RS[1] - GX.cy, l = Math.hypot(dx, dy); return [dx / l, dy / l]; })();
  const TAN = [-OUT[1], OUT[0]];
  const at = (base, o, t) => [base[0] + OUT[0] * o + TAN[0] * t, base[1] + OUT[1] * o + TAN[1] * t];
  const POS = {
    realmspace: RS,
    virenspace: at(RS, -40, 760),
    aethris: at(RS, -120, -720),
    krynnspace: armPt(0, 1.2, 30),
    fonains: [armPt(0, 1.2, 30)[0] - 260, armPt(0, 1.2, 30)[1] + 260],   // CSC 50743, Fonains's system, beside Krynnspace
    greyspace: armPt(2, 2.7, -20),
    wayfinders: [3250, 950]
  };

  /* Where each arm's sector is labelled, and the four marker clusters the
     kindling lights along each arm (one per kindling, sixteen in all). */
  const SECTORS = [0, 1, 2, 3].map(arm => ({ arm, name: arm === 0 ? 'Caelestis Sector' : 'Sector', pos: armPt(arm, 1.6, -40) }));
  const MARKER_T = [0.25, 1.05, 1.85, 2.65];
  const MARKERS = [];
  for (let arm = 0; arm < ARMS; arm++) MARKER_T.forEach((t, j) => MARKERS.push({ arm, j, t, pos: armPt(arm, t, 0) }));
  /* The wave of light runs out along the kindled arm over its spark: it
     stands at marker j when the spark is j quarters through. */
  const frontAt = p => MARKER_T[0] + (MARKER_T[1] - MARKER_T[0]) * 4 * p;

  /* ── Scene units ─────────────────────────────────────────────── */
  const S = 100 / GX.R;
  const toScene = (p, y) => [(p[0] - GX.cx) * S, y || 0, (p[1] - GX.cy) * S];
  const toChart = v => [GX.cx + v[0] / S, GX.cy + v[2] / S];
  /* The disc's thickness (one standard deviation of star height) at a
     radius in scene units, as the holochart scatters its stars. */
  const discSigma = r => { const t = Math.max(0, (r / 100 - 0.09) * 3.6); return 2.2 + 3.5 * Math.exp(-t * 1.2); };
  const HALO_SIGMA = 14;

  /* Heights above the disc. Greyspace, with Oerth, lies above the
     galaxy's plane: far enough that the axis from Oerth through Erevos
     rises AXIS_TILT from the plane, so the eye is a tilted superimposition. */
  const AXIS_TILT = 18 * Math.PI / 180;
  const GREY_Y = Math.hypot(POS.greyspace[0] - GX.cx, POS.greyspace[1] - GX.cy) * S * Math.tan(AXIS_TILT);
  /* The other named systems sit a little above or below the disc's middle,
     so the disc is not flat; Realmspace's cluster stays near it. */
  const SYS_Y = { realmspace: 0.3, virenspace: 1.7, aethris: -1.3, krynnspace: 2.1, fonains: -1.8, wayfinders: 1.5, greyspace: GREY_Y };
  const sysScene = id => toScene(POS[id], SYS_Y[id] != null ? SYS_Y[id] : 0.4);

  /* ── The inscription ─────────────────────────────────────────── */
  const v3 = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
    sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
    mul: (a, k) => [a[0] * k, a[1] * k, a[2] * k],
    len: a => Math.hypot(a[0], a[1], a[2]),
    norm: a => { const l = Math.hypot(a[0], a[1], a[2]); return [a[0] / l, a[1] / l, a[2] / l]; },
    cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    dist: (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
  };
  const OERTH = sysScene('greyspace');
  const CORE = [0, 0, 0];
  const F = v3.norm(v3.sub(CORE, OERTH));               // Oerth's line of sight
  const RT = v3.norm(v3.cross(F, [0, 1, 0]));
  const UP = v3.norm(v3.cross(RT, F));
  /* Seen from Oerth is a superimposition: Vecna sees at the scale of a
     galaxy. The eye is an orthographic projection along the axis from Oerth
     through the core. Each point of the eye is a line parallel to that axis,
     and its heart system can lie anywhere along it, near side or far. Eye
     coordinates x and y become offsets across and up from the axis, in scene
     units: EYE_W wide so the lids span most of the galaxy's breadth, EYE_H
     high so the lids open wide; the hearts at their peaks and troughs sit in the halo. */
  const EYE_W = 80, EYE_H = 55;
  const eyeBase = (x, y) => v3.add(v3.add(CORE, v3.mul(RT, x * EYE_W)), v3.mul(UP, y * EYE_H));
  const D = v3.dist(OERTH, CORE);

  /* The eye in Oerth's view: lid width 1, lid height .373, iris radius .24.
     Upper lid six points, lower lid four, iris five: fifteen hearts. */
  const EYE2D = [];
  [-1, -0.6, -0.2, 0.2, 0.6, 1].forEach(u => EYE2D.push({ part: 'upper', x: u, y: 0.373 * (1 - u * u) }));
  [0.6, 0.2, -0.2, -0.6].forEach(u => EYE2D.push({ part: 'lower', x: u, y: -0.373 * (1 - u * u) }));
  for (let k = 0; k < 5; k++) EYE2D.push({ part: 'iris', x: -0.24 * Math.cos(2 * Math.PI * k / 5 - Math.PI / 2), y: 0.24 * Math.sin(-2 * Math.PI * k / 5 + Math.PI / 2) });
  const LID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], IRIS = [10, 11, 12, 13, 14];
  const PAIR = [2, 3];                                  // two neighbouring upper-lid systems, opened and linked
  const FOUND = 6;                                      // Nowhere, on the lower lid

  /* From above the inscription must read as gibberish. Each heart's depth
     along its line is seeded; a layout is drawn for each of a few hundred
     seeds, and the chart keeps the one whose strokes, seen from above, cross
     each other most and reach most of the disc (all eight octants around the
     core), with no two systems crowded and none crowding Oerth. The search is deterministic, so the
     same layout comes up on every visit. The two opened hearts are
     neighbours in the eye; from above they can lie far apart. */
  /* Hearts stay in the disc or the thick disc where the eye allows (a
     bonus for each), within the halo's spread (HALO_LIMIT) at most. */
  const HEART_LAYOUT = {}, THICK_LIMIT = 9, HALO_LIMIT = 2 * HALO_SIGMA;
  const HEARTS = (() => {
    const avoid = Object.keys(POS).map(sysScene), oerthFlat = [OERTH[0], OERTH[2]];
    const edges = [];
    LID.forEach((a, k) => edges.push([a, LID[(k + 1) % LID.length]]));
    IRIS.forEach((a, k) => edges.push([a, IRIS[(k + 1) % IRIS.length]]));
    const cross2 = (p1, p2, p3, p4) => {
      const d = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
      return d(p1, p2, p3) * d(p1, p2, p4) < 0 && d(p3, p4, p1) * d(p3, p4, p2) < 0;
    };
    function layout(seed) {
      const R = rng(seed), out = [];
      for (let i = 0; i < EYE2D.length; i++) {
        const e = EYE2D[i], base = eyeBase(e.x, e.y);
        let got = null;
        for (let k = 0; k < 300 && !got; k++) {
          const t = -170 + R() * 340, p = v3.add(base, v3.mul(F, t)), r = Math.hypot(p[0], p[2]);
          if (r > 100 || r < 10 || Math.abs(p[1]) > HALO_LIMIT) continue;   // inside the disc or the halo
          if (avoid.some(q => v3.dist(p, q) < 9) || Math.hypot(p[0] - oerthFlat[0], p[2] - oerthFlat[1]) < 20) continue;
          if (out.some(h => Math.hypot(p[0] - h.v[0], p[2] - h.v[2]) < 14)) continue;
          got = { v: p, depth: t };
        }
        if (!got) return null;
        out.push(got);
      }
      const flat = out.map(h => [h.v[0], h.v[2]]);
      let crossings = 0;
      for (let m = 0; m < edges.length; m++) for (let n = m + 1; n < edges.length; n++) {
        const [a, b] = edges[m], [c, d] = edges[n];
        if (a === c || a === d || b === c || b === d) continue;
        if (cross2(flat[a], flat[b], flat[c], flat[d])) crossings++;
      }
      const oct = new Set(flat.map(f => Math.floor((Math.atan2(f[1], f[0]) + Math.PI) / (Math.PI / 4)) % 8));
      let gap = Infinity;
      flat.forEach((a, m) => flat.forEach((b, n) => { if (m < n) gap = Math.min(gap, Math.hypot(a[0] - b[0], a[1] - b[1])); }));
      const inDisc = out.filter(h => Math.abs(h.v[1]) <= 1.5 * discSigma(Math.hypot(h.v[0], h.v[2]))).length;
      const inThick = out.filter(h => Math.abs(h.v[1]) <= THICK_LIMIT).length;
      return { out, score: crossings + 4 * oct.size + 0.5 * gap + 0.3 * inDisc + 0.3 * inThick, crossings, octants: oct.size, gap, inDisc, inThick };
    }
    let best = null;
    for (let s = 0; s < 300; s++) { const L = layout(4127 + s); if (L && (!best || L.score > best.score)) best = L; }
    HEART_LAYOUT.crossings = best.crossings; HEART_LAYOUT.octants = best.octants; HEART_LAYOUT.gap = best.gap; HEART_LAYOUT.inDisc = best.inDisc; HEART_LAYOUT.inThick = best.inThick;
    return best.out.map((c, i) => {
      const e = EYE2D[i], r = Math.hypot(c.v[0], c.v[2]);
      return { i, n: i + 1, part: e.part, eye: [e.x, e.y], v: c.v, depth: c.depth, inDisc: Math.abs(c.v[1]) <= 1.5 * discSigma(r),
        state: PAIR.includes(i) ? 'linked' : i === FOUND ? 'found' : 'unknown' };
    });
  })();

  /* ── Generated systems ─────────────────────────────────────────
     Everything on the chart that is not a named system is a survey.js roll:
     the unnamed systems that fill the arms and the fifteen heart systems.
     Positions are seeded here; what each system is comes from
     survey-core.js by seed, once the survey is loaded (rollSystems), so a
     system clicked on the chart reads as `node scripts/survey.js roll
     --seed N` prints it, and `--save` keeps it. */
  const FILLER_SEED0 = 200000, HEART_SEED0 = 300000;
  /* About two thirds follow the arms and a third fill the space between
     them; no eighth of the disc (an octant around the core) takes more than
     its share, so no quarter of the galaxy sits empty. */
  const FILLERS = (() => {
    const R = rng(5113), out = [], N = 340, CAP = Math.ceil(N / 8 * 1.2), oct = new Array(8).fill(0);
    const named = Object.values(POS), hearts = HEARTS.map(h => toChart(h.v));
    for (let tries = 0; tries < 20000 && out.length < N; tries++) {
      let p;
      if (R() < 0.66) {
        const arm = Math.floor(R() * ARMS) % ARMS, t = 0.3 + Math.pow(R(), 0.85) * 3.0;
        p = armPt(arm, t, gauss(R) * 120 * (0.5 + t / 3), gauss(R) * 0.12);
      } else {
        const rr = GX.R * (0.2 + 0.85 * Math.sqrt(R())), a = R() * Math.PI * 2;
        p = [GX.cx + rr * Math.cos(a), GX.cy + rr * Math.sin(a) * 0.9];
      }
      const rc = Math.hypot(p[0] - GX.cx, p[1] - GX.cy), y = gauss(R);
      if (rc < 300 || rc > GX.R * 1.08) continue;
      const o = Math.floor((Math.atan2(p[1] - GX.cy, p[0] - GX.cx) + Math.PI) / (Math.PI / 4)) % 8;
      if (oct[o] >= CAP) continue;
      if (Math.hypot(p[0] - RS[0], p[1] - RS[1]) < 560) continue;      // Caelestis's cluster keeps its saved places clear
      if (named.some(q => Math.hypot(p[0] - q[0], p[1] - q[1]) < 200)) continue;
      if (hearts.some(q => Math.hypot(p[0] - q[0], p[1] - q[1]) < 110)) continue;
      if (out.some(f => Math.hypot(p[0] - f.pos[0], p[1] - f.pos[1]) < 105)) continue;
      oct[o]++;
      out.push({ i: out.length, pos: p, rc });
    }
    /* Heights, from their own seed so the map positions stay put: most in
       the disc, a good share in the halo above and below it, and a scattered
       few notably higher on both sides. A spiral's thin disc is very flat,
       about a fiftieth of its radius; the chart keeps that feel. */
    const H = rng(7171);
    out.forEach(f => {
      const roll = H(), side = H() < 0.5 ? -1 : 1, g = gauss(H);
      let y, band;
      if (roll < 0.74) { y = Math.max(-3, Math.min(3, g * 1.2)); band = 'disc'; }            // the thin disc, with a little bob
      else if (roll < 0.95) { y = side * Math.min(9, 3 + Math.abs(g) * 2.5); band = 'thick'; } // the thick disc
      else { y = side * (11 + H() * 7); band = 'high'; }                                       // a handful, at most 18
      f.v = toScene(f.pos, y); f.band = band; delete f.rc;
    });
    return out;
  })();
  /* Roll every generated system against the survey. A seed whose number or
     Bayer name is already taken, by the survey or by an earlier system on
     the chart, passes to the next seed, so each system's roll matches the
     command line exactly. */
  function rollSystems(survey) {
    const core = window.SURVEY_CORE; if (!core || !survey) return false;
    const taken = { nums: new Set(), bayer: new Set() };
    survey.systems.forEach(x => { if (x.catalogue) taken.nums.add(x.catalogue); if (x.bayer) taken.bayer.add(x.bayer); });
    let seed;
    const next = () => { for (;;) { const sys = core.roll(survey, { seed: seed++ });
      if (taken.nums.has(sys.catalogue) || (sys.bayer && taken.bayer.has(sys.bayer))) continue;
      taken.nums.add(sys.catalogue); if (sys.bayer) taken.bayer.add(sys.bayer);
      return { sys, summary: core.summary(sys) }; } };
    seed = HEART_SEED0; HEARTS.forEach(h => Object.assign(h, next()));
    seed = FILLER_SEED0; FILLERS.forEach(f => Object.assign(f, next()));
    return true;
  }

  window.EREVOS = {
    GX, ARMS, TIP, rng, gauss, armAngle, armPt, RS, OUT, TAN, at, POS,
    SECTORS, MARKER_T, MARKERS, frontAt,
    S, toScene, toChart, discSigma, HALO_SIGMA, sysScene, SYS_Y, AXIS_TILT,
    OERTH, F, RT, UP, EYE_W, EYE_H, eyeBase, HEART_LAYOUT, D, EYE2D, HEARTS, LID, IRIS, PAIR, FOUND,
    FILLERS, rollSystems
  };
})();
