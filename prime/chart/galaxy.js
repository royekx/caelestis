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
   system, a catalogue system on the sight line from Oerth through its
   point of the eye. Seen from Oerth, the hearts frame the core as lids and
   iris frame a pupil; seen from anywhere else they scatter.
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
     galaxy's plane: far enough that the line of sight from Oerth to Erevos
     falls AXIS_TILT below Oerth's horizon. */
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
    dist: (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]),
    dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
  };
  const OERTH = sysScene('greyspace');
  const CORE = [0, 0, 0];
  const F = v3.norm(v3.sub(CORE, OERTH));               // Oerth's line of sight to the core
  const RT = v3.norm(v3.cross(F, [0, 1, 0]));           // across Oerth's view, level with the plane
  const UP = v3.norm(v3.cross(RT, F));                  // up in Oerth's view
  const D = v3.dist(OERTH, CORE);
  /* Oerth's heart is the eye's retina: Vecna looks out through the eye from
     within it. The eye is a point projection from Oerth, as a pinhole
     camera sees: each point of the eye is a sight line from Oerth, and its
     heart system lies somewhere along that line, near or far. The
     projection is rectilinear, so a perspective camera standing at Oerth
     and looking at the core sees the eye exactly. EYE_FOV is the eye's
     width across Oerth's sky, lid corner to lid corner; EYE_ASPECT squeezes
     the eye's height against its width. These proportions are the
     template; the hearts are fitted to them, never the other way round. */
  const EYE_FOV = 90, EYE_ASPECT = 55 / 80;
  const EYE_K = Math.tan(EYE_FOV / 2 * Math.PI / 180);  // half the eye's width on a picture plane one unit from Oerth
  /* Oerth's view of an eye point (x, y): its place on that picture plane. */
  const eyeView = (x, y) => [x * EYE_K, y * EYE_ASPECT * EYE_K];

  /* The eye in Oerth's view: lid width 1, lid height .373, iris radius .24.
     Upper lid six points, lower lid four, iris five: fifteen hearts. */
  const EYE2D = [];
  [-1, -0.6, -0.2, 0.2, 0.6, 1].forEach(u => EYE2D.push({ part: 'upper', x: u, y: 0.373 * (1 - u * u) }));
  [0.6, 0.2, -0.2, -0.6].forEach(u => EYE2D.push({ part: 'lower', x: u, y: -0.373 * (1 - u * u) }));
  for (let k = 0; k < 5; k++) EYE2D.push({ part: 'iris', x: -0.24 * Math.cos(2 * Math.PI * k / 5 - Math.PI / 2), y: 0.24 * Math.sin(-2 * Math.PI * k / 5 + Math.PI / 2) });
  const LID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], IRIS = [10, 11, 12, 13, 14];
  const PAIR = [2, 3];                                  // two neighbouring upper-lid systems, opened and linked
  const FOUND = 6;                                      // Nowhere, on the lower lid
  /* The sight line from Oerth through eye point i, and the point s units
     out along it. */
  const eyeDir = i => { const e = EYE2D[i], p = eyeView(e.x, e.y); return v3.norm(v3.add(v3.add(F, v3.mul(RT, p[0])), v3.mul(UP, p[1]))); };
  const eyeRay = (i, s) => v3.add(OERTH, v3.mul(eyeDir(i), s));

  /* ── Generated systems ─────────────────────────────────────────
     Everything on the chart that is not a named system is a survey.js roll:
     the Fleet's catalogue of unnamed systems, fifteen of which hold the
     inscription's heart worlds.
     Positions are seeded here; what each system is comes from
     survey-core.js by seed, once the survey is loaded (rollSystems), so a
     system clicked on the chart reads as `node scripts/survey.js roll
     --seed N` prints it, and `--save` keeps it. */
  const FILLER_SEED0 = 200000, RETIRED_SEED0 = 300000;
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
    /* A few systems stand high in the halo where the upper lid's hearts
       rise, so a heart up there keeps company like any other halo system:
       catalogue index and height. */
    const COMPANY = { 91: 15.1, 140: 15.1, 110: 10.5, 141: 11.2, 159: 17.8, 185: -11.2, 214: 12.8, 303: 10.5, 317: -16.8 };
    Object.entries(COMPANY).forEach(([i, y]) => { const f = out[i]; f.v = toScene(f.pos, y); f.band = 'high'; });
    return out;
  })();
  /* ── The inscription, fitted to the catalogue ──────────────────
     The eye's shape is fixed: EYE_FOV wide, two lids and a pentagon iris
     around the core. Each eye point is a sight line from Oerth (eyeRay), and
     its heart system lies on that line s units from Oerth. Each heart is a
     catalogue system. Most were already near their line and are nudged
     onto it, the shortest move; some are moved further along the line to a
     better height; a few may be new catalogue systems placed on the line
     (rolled after the rest, so no other system's seed changes).
     HEART_FIT holds the choice for each eye point, in EYE2D order:
     [catalogue index, s], or ['new', s]. scripts/eye-fit.js searches seeded
     layouts for it and writes it here: the exact eye from Oerth first; then
     gibberish from above (many crossings, all eight wedges around the core,
     no eye-like figure); then heights in the disc, the thick disc or the
     halo; then the smallest moves. */
  const THICK_LIMIT = 9, HALO_LIMIT = 2 * HALO_SIGMA;
  const bandOf = y => Math.abs(y) <= 3 ? 'disc' : Math.abs(y) <= THICK_LIMIT ? 'thick' : 'halo';
  /* HEART_FIT: written by scripts/eye-fit.js */
  const HEART_FIT = [
    [201, 118.84],
    [159, 51],
    [300, 170.66],
    [266, 172.21],
    [102, 111],
    [208, 102],
    [63, 64.77],
    [252, 44.43],
    [55, 66],
    [106, 73.8],
    [290, 169.77],
    [337, 96],
    [258, 51],
    [163, 54.46],
    [30, 90.69]
  ];
  /* /HEART_FIT */
  const HEARTS = HEART_FIT.map(([ref, t], i) => {
    const e = EYE2D[i], v = eyeRay(i, t);
    let f, move = 0, how;
    if (ref === 'new') {
      f = { i: FILLERS.length, added: true }; FILLERS.push(f); how = 'new';
    } else {
      f = FILLERS[ref]; move = v3.dist(f.v, v);
      const tStar = v3.dot(v3.sub(f.v, OERTH), eyeDir(i));
      how = Math.abs(t - tStar) < 0.05 ? 'nudged' : 'moved';
      f.from = f.v;
    }
    f.v = v; f.pos = toChart(v); f.heart = i;
    f.band = Math.abs(v[1]) > THICK_LIMIT ? 'high' : Math.abs(v[1]) > 3 ? 'thick' : 'disc';
    return { i, n: i + 1, part: e.part, eye: [e.x, e.y], v, t, filler: f, how, move, band: bandOf(v[1]),
      state: PAIR.includes(i) ? 'linked' : i === FOUND ? 'found' : 'unknown' };
  });

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
    /* Seeds 300000 to 300014 rolled the heart systems before they were
       fitted to the catalogue; their numbers stay given out, so every
       catalogue system keeps the roll it had. */
    seed = RETIRED_SEED0; for (let k = 0; k < 15; k++) next();
    seed = FILLER_SEED0; FILLERS.forEach(f => Object.assign(f, next()));
    HEARTS.forEach(h => { h.sys = h.filler.sys; h.summary = h.filler.summary; });   // a heart is its catalogue system
    return true;
  }

  window.EREVOS = {
    GX, ARMS, TIP, rng, gauss, armAngle, armPt, RS, OUT, TAN, at, POS,
    SECTORS, MARKER_T, MARKERS, frontAt,
    S, toScene, toChart, discSigma, HALO_SIGMA, sysScene, SYS_Y, AXIS_TILT,
    OERTH, F, RT, UP, D, EYE_FOV, EYE_ASPECT, EYE_K, eyeView, eyeDir, eyeRay, bandOf, THICK_LIMIT, HALO_LIMIT, HEART_FIT, EYE2D, HEARTS, LID, IRIS, PAIR, FOUND,
    FILLERS, rollSystems
  };
})();
