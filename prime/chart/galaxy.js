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

  const SYS_Y = { wayfinders: 3 };
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
  const HALF = 0.43;                                    // the eye's half-width, as a tangent
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

  const HEARTS = (() => {
    const HR = rng(4127), out = [];
    const avoid = Object.keys(POS).map(sysScene);
    EYE2D.forEach((e, i) => {
      const dir = v3.norm(v3.add(v3.add(F, v3.mul(RT, e.x * HALF)), v3.mul(UP, e.y * HALF)));
      const partner = i === PAIR[1] ? out[PAIR[0]] : null;
      let disc = null, halo = null;
      for (let tries = 0; tries < 600 && !disc; tries++) {
        const depth = partner ? partner.depth * (0.75 + HR() * 0.5) : D * (0.2 + HR() * 1.35);
        const p = v3.add(OERTH, v3.mul(dir, depth)), r = Math.hypot(p[0], p[2]);
        if (r > 104 || r < 12 || v3.dist(p, OERTH) < 14) continue;
        if (avoid.some(q => v3.dist(p, q) < 9)) continue;
        if (out.some(h => v3.dist(p, h.v) < (partner && h === partner ? 4 : 5))) continue;
        const c = { v: p, depth };
        if (Math.abs(p[1]) <= 1.5 * discSigma(r)) disc = c;
        else if (!halo && Math.abs(p[1]) <= HALO_SIGMA) halo = c;
      }
      const c = disc || halo;
      out.push({
        i, n: i + 1, part: e.part, eye: [e.x, e.y], v: c.v, depth: c.depth, inDisc: !!disc,
        state: PAIR.includes(i) ? 'linked' : i === FOUND ? 'found' : 'unknown'
      });
    });
    return out;
  })();

  /* ── Generated systems ─────────────────────────────────────────
     Everything on the chart that is not a named system is a survey.js roll:
     the unnamed systems that fill the arms and the fifteen heart systems.
     Positions are seeded here; what each system is comes from
     survey-core.js by seed, once the survey is loaded (rollSystems), so a
     system clicked on the chart reads as `node scripts/survey.js roll
     --seed N` prints it, and `--save` keeps it. */
  const FILLER_SEED0 = 200000, HEART_SEED0 = 300000;
  const FILLERS = (() => {
    const R = rng(5113), out = [];
    const named = Object.values(POS), hearts = HEARTS.map(h => toChart(h.v));
    for (let tries = 0; tries < 6000 && out.length < 380; tries++) {
      const arm = Math.floor(R() * ARMS) % ARMS, t = 0.3 + Math.pow(R(), 0.8) * 3.0;
      const p = armPt(arm, t, gauss(R) * 120 * (0.5 + t / 3), gauss(R) * 0.12);
      const rc = Math.hypot(p[0] - GX.cx, p[1] - GX.cy), y = gauss(R);
      if (rc < 300 || rc > GX.R * 1.08) continue;
      if (Math.hypot(p[0] - RS[0], p[1] - RS[1]) < 940) continue;      // Caelestis's cluster keeps its saved places clear
      if (named.some(q => Math.hypot(p[0] - q[0], p[1] - q[1]) < 200)) continue;
      if (hearts.some(q => Math.hypot(p[0] - q[0], p[1] - q[1]) < 110)) continue;
      if (out.some(f => Math.hypot(p[0] - f.pos[0], p[1] - f.pos[1]) < 105)) continue;
      const v = toScene(p, y * discSigma(rc * S));
      out.push({ i: out.length, pos: p, v });
    }
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
    S, toScene, toChart, discSigma, HALO_SIGMA, sysScene,
    OERTH, F, RT, UP, HALF, D, EYE2D, HEARTS, LID, IRIS, PAIR, FOUND,
    FILLERS, rollSystems
  };
})();
