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

   The inscription. The eye is drawn on the inscription plane, through
   Oerth and square to the axis from Oerth through Erevos, by straight
   projection along that axis. Each of its fifteen points is a stroke, a
   line through the galaxy parallel to the axis; each stroke's mark is a
   whole catalogue system on it. Projected onto the plane, the marks form
   the eye around Erevos; from above they zigzag across the galaxy.
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

  /* Heights above the disc. Greyspace, with Oerth, lies GREY_Y above the
     galaxy's plane, among the highest systems of the halo, so the axis
     from Oerth through Erevos slopes AXIS_TILT to the galaxy's plane. */
  const GREY_Y = 17.5;
  const AXIS_TILT = Math.atan2(GREY_Y, Math.hypot(POS.greyspace[0] - GX.cx, POS.greyspace[1] - GX.cy) * S);
  /* The other named systems sit a little above or below the disc's middle,
     so the disc is not flat; Realmspace's cluster stays near it. */
  const SYS_Y = { realmspace: 0.3, virenspace: 1.7, aethris: -1.3, krynnspace: 2.1, fonains: -1.8, wayfinders: 1.5, greyspace: GREY_Y };
  const sysScene = id => toScene(POS[id], SYS_Y[id] != null ? SYS_Y[id] : 0.4);

  /* ── The inscription ───────────────────────────────────────────
     The eye is drawn on the inscription plane: the plane through Oerth,
     perpendicular to the axis, the line from Oerth through Erevos. Erevos
     is the eye's centre, its pupil. The image is a straight projection
     along the axis, with no perspective: a system's place in the eye is
     its offset from the axis (RT across, UP up), and its depth along the
     axis does not count. Every mark lies in front of Oerth, on Erevos's
     side of the plane. */
  const v3 = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
    sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
    mul: (a, k) => [a[0] * k, a[1] * k, a[2] * k],
    len: a => Math.hypot(a[0], a[1], a[2]),
    norm: a => { const l = Math.hypot(a[0], a[1], a[2]); return [a[0] / l, a[1] / l, a[2] / l]; },
    cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    dist: (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]),
    dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
  };
  const OERTH = sysScene('greyspace');
  const CORE = [0, 0, 0];
  const AXIS = v3.norm(v3.sub(CORE, OERTH));            // from Oerth through Erevos
  const RT = v3.norm(v3.cross(AXIS, [0, 1, 0]));        // across the eye, level with the galaxy's plane
  const UP = v3.norm(v3.cross(RT, AXIS));               // up the eye: mostly up, tipped toward Erevos
  const D = v3.dist(OERTH, CORE);
  /* EYE_HALF is half the eye's width, lid corner to lid corner, in scene
     units (the galaxy's radius is 100); its height is .373 of its width.
     tools/eye-fit.js sets it, as large as the galaxy holds. */
  /* EYE_HALF: written by tools/eye-fit.js */
  const EYE_HALF = 70;
  /* /EYE_HALF */
  /* STROKE_TOL: how far from a stroke's centre line a system still lands
     on its point of the eye, in scene units. */
  const STROKE_TOL = 2.5;
  /* How far along the eye is: the share of the figure that is whole. The
     DM sets it here, as the story needs; the chart shows it and dims the
     rest of the figure to match. Individual marks stay unnamed until the
     crew draws near the truth. */
  const EYE_PROGRESS = 0.67;

  /* The eye on the plane: lid width 1 (from -1 to 1), lid height .373,
     iris radius .24. Upper lid six points, lower lid four, iris five:
     fifteen strokes. */
  const EYE2D = [];
  [-1, -0.6, -0.2, 0.2, 0.6, 1].forEach(u => EYE2D.push({ part: 'upper', x: u, y: 0.373 * (1 - u * u) }));
  [0.6, 0.2, -0.2, -0.6].forEach(u => EYE2D.push({ part: 'lower', x: u, y: -0.373 * (1 - u * u) }));
  for (let k = 0; k < 5; k++) EYE2D.push({ part: 'iris', x: -0.24 * Math.cos(2 * Math.PI * k / 5 - Math.PI / 2), y: 0.24 * Math.sin(-2 * Math.PI * k / 5 + Math.PI / 2) });
  const LID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], IRIS = [10, 11, 12, 13, 14];
  const PAIR = [2, 3];                                  // two neighbouring upper-lid marks, opened and linked
  const NOWHERE = 6;                                    // Nowhere, on the lower lid
  /* The links trace the drawing: each lid mark to its two lid neighbours
     (a ring of ten), each iris mark to its two iris neighbours (a ring of
     five), and each mark once to Oerth ('oerth'). The rings meet only
     through Oerth. */
  const LINKS = [];
  LID.forEach((p, k) => LINKS.push([p, LID[(k + 1) % LID.length]]));
  IRIS.forEach((p, k) => LINKS.push([p, IRIS[(k + 1) % IRIS.length]]));
  for (let i = 0; i < 15; i++) LINKS.push([i, 'oerth']);
  /* A stroke: the line through the galaxy parallel to the axis, through
     eye point i. strokeAt(i, s) is the point s units along it from the
     plane; a system there lands exactly on point i. */
  const eyeOffset = (x, y) => v3.add(v3.mul(RT, x * EYE_HALF), v3.mul(UP, y * EYE_HALF));
  const strokeAt = (i, s) => v3.add(v3.add(OERTH, eyeOffset(EYE2D[i].x, EYE2D[i].y)), v3.mul(AXIS, s));
  /* Where a point in the galaxy lands on the plane: [x, y] in eye units and
     its depth along the axis. */
  const toPlane = v => { const d = v3.sub(v, OERTH); return [v3.dot(d, RT) / EYE_HALF, v3.dot(d, UP) / EYE_HALF, v3.dot(d, AXIS)]; };

  /* ── Generated systems ─────────────────────────────────────────
     Everything on the chart that is not a named system is a survey.js roll:
     the Fleet's catalogue of unnamed systems, fifteen of which are the
     inscription's marks.
     Positions are seeded here; what each system is comes from
     survey-core.js by seed, once the survey is loaded (rollSystems), so a
     system clicked on the chart reads as `node tools/survey.js roll
     --seed N` prints it, and `--save` keeps it. */
  const FILLER_SEED0 = 200000, RETIRED_SEED0 = 300000, NEW_SEED0 = 400000;
  /* About two thirds follow the arms and a third fill the space between
     them; no eighth of the disc (an octant around the core) takes more than
     its share, so no quarter of the galaxy sits empty. The catalogue was
     drawn with fifteen spaces kept clear (CLEAR, chart units); they stay in
     the draw so every system keeps its place and its seed. */
  const CLEAR = [[1008, 2675], [1484, 2358], [1961, 2054], [2249, 795], [2911, 1415], [3494, 1638], [3061, 2170], [2474, 1925],
    [2233, 3418], [1372, 1796], [2025, 1020], [2037, 2624], [1942, 1560], [2332, 1610], [2649, 2613]];
  const FILLERS = (() => {
    const R = rng(5113), out = [], N = 340, CAP = Math.ceil(N / 8 * 1.2), oct = new Array(8).fill(0);
    const named = Object.values(POS);
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
      if (CLEAR.some(q => Math.hypot(p[0] - q[0], p[1] - q[1]) < 110)) continue;
      if (out.some(f => Math.hypot(p[0] - f.pos[0], p[1] - f.pos[1]) < 105)) continue;
      oct[o]++;
      out.push({ i: out.length, pos: p, rc });
    }
    /* Heights, from their own seed so the map positions stay put. Two
       thirds lie in the thin disc, with a little bob; the rest thin out
       steadily through the thick disc into the halo, above and below the
       plane alike, up to 18. A spiral's thin disc is very flat, about a
       fiftieth of its radius; the chart keeps that feel, and the halo has
       no floor or layer of its own, so a high system is unremarkable
       anywhere. */
    const H = rng(7171);
    out.forEach(f => {
      const roll = H(), side = H() < 0.5 ? -1 : 1, g = gauss(H), u = H();
      const y = roll < 0.66 ? Math.max(-3, Math.min(3, g * 1.2))       // the thin disc
        : side * (3 + 15 * (1 - Math.pow(u, 1 / 1.5)));                 // tapering from 3 to 18
      f.v = toScene(f.pos, y); f.band = Math.abs(y) <= 3 ? 'disc' : Math.abs(y) <= 9 ? 'thick' : 'high'; delete f.rc;
    });
    /* A few systems stand high in the halo, so a high mark keeps company
       like any other halo system: catalogue index and height. */
    const COMPANY = { 51: 11.4, 54: -13.1, 91: 15.1, 110: 10.5, 140: 15.1, 141: 11.2, 159: 17.8, 185: -11.2, 214: 12.8, 257: 12.3, 258: -11.8, 283: 10.7, 303: 10.5, 317: 10.5 };
    Object.entries(COMPANY).forEach(([i, y]) => { const f = out[i]; f.v = toScene(f.pos, y); f.band = 'high'; });
    return out;
  })();
  /* ── The marks, fitted to the catalogue ────────────────────────
     A mark is the system chosen on a stroke. Each is a catalogue system:
     most lay within reach of their stroke and are nudged onto its centre
     line, the shortest move; some are moved along the stroke to a better
     depth; a new catalogue system may be placed on a stroke (rolled after
     the rest, so no other system's seed changes). A mark's depth along its
     stroke sets where it lies in the galaxy and how high, and leaves its
     place in the eye alone.
     MARK_FIT holds the choice for each stroke, in EYE2D order:
     [catalogue index, depth], or ['new', depth, seed]. tools/eye-fit.js
     searches seeded layouts for it and writes it here: marks in front of
     Oerth and inside the galaxy first; then a zigzag from above (many
     crossings, all eight wedges around the core, no eye-like figure); then
     heights as common as the catalogue's; then systems with few planets;
     then the smallest moves. */
  const THICK_LIMIT = 9, HALO_LIMIT = 2 * HALO_SIGMA;
  const bandOf = y => Math.abs(y) <= 3 ? 'disc' : Math.abs(y) <= THICK_LIMIT ? 'thick' : 'halo';
  /* MARK_FIT: written by tools/eye-fit.js */
  const MARK_FIT = [
    [135, 66],
    ['new', 160, 400034],
    [281, 126],
    [290, 171],
    [101, 87],
    [1, 57],
    [305, 12],
    ['new', 44, 400082],
    ['new', 6, 400090],
    [324, 6],
    [110, 153],
    [165, 99],
    [256, 12],
    ['new', 22, 400248],
    [168, 138]
  ];
  /* /MARK_FIT */
  const MARKS = MARK_FIT.map(([ref, s, seed], i) => {
    const e = EYE2D[i], v = strokeAt(i, s);
    let f, move = 0, how;
    if (ref === 'new') {
      f = { i: FILLERS.length, added: true, seed }; FILLERS.push(f); how = 'new';
    } else {
      f = FILLERS[ref]; move = v3.dist(f.v, v);
      const sStar = v3.dot(v3.sub(f.v, strokeAt(i, 0)), AXIS);
      how = move <= STROKE_TOL ? 'on its stroke' : Math.abs(s - sStar) < 0.05 ? 'nudged' : 'moved';
      f.from = f.v;
    }
    f.v = v; f.pos = toChart(v); f.mark = i;
    f.band = Math.abs(v[1]) > THICK_LIMIT ? 'high' : Math.abs(v[1]) > 3 ? 'thick' : 'disc';
    return { i, n: i + 1, part: e.part, eye: [e.x, e.y], v, s, filler: f, how, move, band: bandOf(v[1]),
      known: PAIR.includes(i) ? 'linked' : i === NOWHERE ? 'nowhere' : null };
  });

  /* Roll every generated system against the survey. A seed whose number or
     Bayer name is already taken, by the survey or by an earlier system on
     the chart, passes to the next seed, so each system's roll matches the
     command line exactly. */
  /* A mark needs every planet in its system; a moon shares its planet's
     heart, and giants of air are planets. A link needs a Monolith on each
     world, and a Monolith answers a Zenith, which comes only to a world
     with life on it. So a system qualifies as a mark only if every planet
     in it carries life. Asteroid belts and titanic remains are not
     planets. A destroyed world keeps its heart but raises no Monolith, so
     a charted wreck rules its system out, unless the world was destroyed
     by its own Zenith and a Monolith answered: Nowhere, on its stroke. */
  const PLANET_KINDS = ['planet', 'giant of air'], WRECK = 'wreck large enough to chart';
  const LIVED = ['outpost', 'settlement', 'civilization'];
  const alive = b => b.life !== 'none' || LIVED.includes(b.inhabitants);
  const planetsOf = sys => sys.bodies.filter(b => PLANET_KINDS.includes(b.kind)).length;
  const wrecksOf = sys => sys.bodies.filter(b => b.kind === WRECK).length;
  const qualifies = (sys, nowhere) => { const pl = sys.bodies.filter(b => PLANET_KINDS.includes(b.kind));
    return pl.length > 0 && pl.every(alive) && (nowhere ? wrecksOf(sys) > 0 : wrecksOf(sys) === 0); };
  function rollSystems(survey) {
    const core = window.SURVEY_CORE; if (!core || !survey) return false;
    const taken = { nums: new Set(), bayer: new Set() };
    survey.systems.forEach(x => { if (x.catalogue) taken.nums.add(x.catalogue); if (x.bayer) taken.bayer.add(x.bayer); });
    let seed;
    const next = () => { for (;;) { const sys = core.roll(survey, { seed: seed++ });
      if (taken.nums.has(sys.catalogue) || (sys.bayer && taken.bayer.has(sys.bayer))) continue;
      taken.nums.add(sys.catalogue); if (sys.bayer) taken.bayer.add(sys.bayer);
      return { sys, summary: core.summary(sys) }; } };
    /* Seeds 300000 to 300014 rolled the heart systems before they were
       fitted to the catalogue; their numbers stay given out, so every
       catalogue system keeps the roll it had. */
    seed = RETIRED_SEED0; for (let k = 0; k < 15; k++) next();
    seed = FILLER_SEED0; FILLERS.forEach(f => { if (!f.added) Object.assign(f, next()); });
    /* A new mark carries its own seed (from tools/eye-fit.js, which
       picks seeds from NEW_SEED0 up that roll a qualifying system with a
       free number), so its roll matches `survey.js roll --seed N`. */
    FILLERS.forEach(f => { if (f.added) { seed = f.seed; Object.assign(f, next()); } });
    MARKS.forEach(m => { m.sys = m.filler.sys; m.summary = m.filler.summary; m.planets = planetsOf(m.sys) + (m.i === NOWHERE ? wrecksOf(m.sys) : 0); });   // a mark is its catalogue system
    return true;
  }

  window.EREVOS = {
    GX, ARMS, TIP, rng, gauss, armAngle, armPt, RS, OUT, TAN, at, POS,
    SECTORS, MARKER_T, MARKERS, frontAt,
    S, toScene, toChart, discSigma, HALO_SIGMA, sysScene, SYS_Y, AXIS_TILT,
    v3, OERTH, AXIS, RT, UP, D, EYE_HALF, STROKE_TOL, EYE_PROGRESS, eyeOffset, strokeAt, toPlane,
    bandOf, THICK_LIMIT, HALO_LIMIT, MARK_FIT, EYE2D, MARKS, LID, IRIS, LINKS, PAIR, NOWHERE, PLANET_KINDS, WRECK, alive, planetsOf, wrecksOf, qualifies,
    FILLERS, NEW_SEED0, rollSystems
  };
})();
