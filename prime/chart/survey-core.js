/* ════════════════════════════════════════════════════════════════
   survey-core.js: the survey's tables and rolls, shared by
   scripts/survey.js (node) and the Chart (prime/chart/, in the browser).

   One seed, one system: the Chart's unnamed systems and heart systems are
   rolled here by seed, the same way `node scripts/survey.js roll --seed N`
   rolls them, so a system clicked on the Chart can be kept with
   `node scripts/survey.js roll --seed N --save`. Only systems someone has
   kept live in prime/data/survey.json.

   roll(survey, opts) takes opts.taken = { nums:Set, bayer:Set } for numbers
   and Bayer names already given out by other rolls on the same chart, on top
   of those saved in the survey.
   ════════════════════════════════════════════════════════════════ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.SURVEY_CORE = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
// ── tables ─────────────────────────────────────────────────────────────────
  // [weight, value]. Edit freely; a weight of 0 removes an entry.
  const T = {
    primary: [[28, 'yellow star'], [20, 'red dwarf'], [10, 'white star'], [8, 'red giant'], [5, 'blue giant'],
      [10, 'binary pair'], [7, 'white dwarf, a cinder of a star'], [5, 'elemental fire body'],
      [3, 'a world at the centre, the star circling it'], [2, 'black hole'], [2, 'something that should not shine']],
    kind: [[56, 'planet'], [12, 'asteroid belt'], [8, 'cluster of floating bodies'], [6, 'comet'],
      [6, 'nebula or cloud'], [5, 'giant of air'], [4, 'wreck large enough to chart'], [3, 'titanic remains']],
    shape: [[70, 'sphere'], [6, 'disk'], [6, 'shards'], [4, 'torus'], [4, 'hollow sphere'], [3, 'ribbon'],
      [3, 'irregular'], [2, 'cube or other solid'], [2, 'a shape that changes']],
    composition: [[40, 'earth'], [15, 'air'], [15, 'water'], [12, 'fire'], [8, 'life'], [10, 'mixed']],
    size: [[15, 'tiny'], [30, 'small'], [30, 'medium'], [18, 'large'], [7, 'huge']],
    habitability: [[20, 'livable'], [30, 'livable with protection'], [50, 'hostile']],
    life: [[45, 'none'], [25, 'benign'], [18, 'hostile'], [12, 'infestation']],
    inhabitants: {
      'livable': [[58, 'none'], [12, 'ruins'], [10, 'outpost'], [12, 'settlement'], [8, 'civilization']],
      'livable with protection': [[80, 'none'], [10, 'ruins'], [8, 'outpost'], [2, 'settlement']],
      'hostile': [[90, 'none'], [7, 'ruins'], [3, 'outpost']]
    },
    hazard: [[50, null], [5, 'aether storms'], [5, 'gravity shear'], [5, 'crushing atmosphere'],
      [5, 'elemental storms'], [4, 'wild magic'], [3, 'dead magic'], [4, 'psychic static'],
      [4, 'sargasso of debris'], [4, 'unstable orbit'], [4, 'corrosive air'], [3, 'color pools nearby']],
    oddity: [[70, null], [4, 'a wreck in orbit'], [3, 'an abandoned station'], [3, 'a signal on repeat'],
      [3, 'crystalline growth'], [3, 'a petrified leviathan'], [2, 'gravity runs the wrong way'],
      [3, 'a storm that never ends'], [2, 'time slips near it'], [2, 'it sings'], [2, 'old bones of something vast'],
      [3, 'ruins older than anyone can date']],
    status: {
      near: [[25, 'charted'], [30, 'surveyed'], [35, 'sighted'], [10, 'uncharted']],
      far: [[100, 'uncharted']]
    }
  };
  const STATUSES = ['uncharted', 'sighted', 'surveyed', 'charted'];
  const GREEK = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa',
    'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega'];
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  
  // ── dice ───────────────────────────────────────────────────────────────────
  function rng(seed) { // mulberry32: same seed, same system
    let a = seed >>> 0;
    return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  const pick = (r, table) => { const sum = table.reduce((s, [w]) => s + w, 0); let n = r() * sum;
    for (const [w, v] of table) { if ((n -= w) < 0) return v; } return table[table.length - 1][1]; };
  const int = (r, lo, hi) => lo + Math.floor(r() * (hi - lo + 1));

  // ── rolling ────────────────────────────────────────────────────────────────
  function rollBody(r, near) {
    const kind = pick(r, T.kind);
    const b = { designation: null, name: null, kind, status: pick(r, near ? T.status.near : T.status.far) };
    if (kind === 'planet' || kind === 'cluster of floating bodies' || kind === 'giant of air') {
      b.shape = kind === 'planet' ? pick(r, T.shape) : kind === 'giant of air' ? 'sphere' : 'cluster';
      b.composition = kind === 'giant of air' ? 'air' : pick(r, T.composition);
      b.size = kind === 'giant of air' ? pick(r, [[1, 'large'], [1, 'huge']]) : pick(r, T.size);
      let hab = pick(r, T.habitability);
      if (b.composition === 'fire' && hab !== 'hostile') hab = pick(r, [[3, 'hostile'], [1, hab]]);
      if (b.size === 'tiny' && hab === 'livable') hab = 'livable with protection';
      b.habitability = hab;
      b.life = hab === 'hostile' ? pick(r, [[70, 'none'], [10, 'benign'], [12, 'hostile'], [8, 'infestation']]) : pick(r, T.life);
      b.inhabitants = pick(r, T.inhabitants[hab]);
    } else {
      b.life = pick(r, [[85, 'none'], [5, 'benign'], [5, 'hostile'], [5, 'infestation']]);
      b.inhabitants = pick(r, [[90, 'none'], [6, 'ruins'], [4, 'outpost']]);
    }
    if (kind === 'comet') b.returns = r() < 0.5;
    b.hazard = pick(r, T.hazard);
    b.oddity = pick(r, T.oddity);
    const moons = kind !== 'planet' ? 0 : b.size === 'huge' ? int(r, 1, 5) : b.size === 'large' ? int(r, 0, 3) : b.size === 'medium' ? int(r, 0, 2) : 0;
    b.moons = [];
    for (let i = 0; i < moons; i++) {
      const m = { designation: null, name: null, kind: 'moon', status: b.status === 'uncharted' ? 'uncharted' : pick(r, near ? T.status.near : T.status.far),
        composition: pick(r, T.composition), size: pick(r, [[50, 'tiny'], [35, 'small'], [15, 'medium']]) };
      m.habitability = pick(r, [[8, 'livable'], [27, 'livable with protection'], [65, 'hostile']]);
      m.life = m.habitability === 'hostile' ? pick(r, [[80, 'none'], [10, 'hostile'], [10, 'infestation']]) : pick(r, T.life);
      m.inhabitants = pick(r, T.inhabitants[m.habitability]);
      m.hazard = pick(r, T.hazard);
      b.moons.push(m);
    }
    if (!b.moons.length) delete b.moons;
    ['hazard', 'oddity'].forEach(k => { if (b[k] == null) delete b[k]; });
    return b;
  }
  
  function used(survey) {
    const nums = new Set(), bayer = new Set();
    survey.systems.forEach(s => { if (s.catalogue) nums.add(s.catalogue); if (s.bayer) bayer.add(s.bayer); });
    return { nums, bayer };
  }
  
  function roll(survey, opts) {
    const seed = opts.seed != null ? Number(opts.seed) : Math.floor(Math.random() * 2 ** 31);
    const r = rng(seed);
    const galaxy = (opts.galaxy || 'GAL-01').toUpperCase();
    const gal = survey.galaxies.find(s => s.id === galaxy);
    if (!gal) throw new Error(`unknown galaxy ${galaxy}`);
    const near = gal.home === true;
    const { nums, bayer } = used(survey);
    if (opts.taken) { opts.taken.nums.forEach(n => nums.add(n)); opts.taken.bayer.forEach(x => bayer.add(x)); }
    const sys = { id: null, galaxy, seed, catalogue: null, bayer: null, bearing: null, name: opts.name || null,
      primary: pick(r, T.primary), status: near ? pick(r, [[30, 'charted'], [40, 'surveyed'], [30, 'sighted']]) : 'uncharted',
      bodies: [], notes: '' };
    if (near) { // Caelestis catalogues what it can see; other galaxies it barely knows
      let n; do { n = int(r, 1000, 99999); } while (nums.has(n));
      sys.catalogue = n;
      sys.bearing = int(r, 0, 359);
      const con = `CON-${String(sys.bearing).padStart(3, '0')}`;
      const free = GREEK.filter(g => !bayer.has(`${g} ${con}`));
      if (free.length) sys.bayer = `${free[Math.min(free.length - 1, Math.floor(r() * r() * free.length))]} ${con}`;
    }
    const count = opts.bodies != null ? Number(opts.bodies) : int(r, 1, 4) + int(r, 1, 4) + 1;
    for (let i = 0; i < count; i++) sys.bodies.push(rollBody(r, near));
    sys.id = sys.catalogue ? `CSC ${sys.catalogue}` : `${galaxy}-U${seed}`;
    designate(sys, survey.year);
    return sys;
  }
  
  // Letters go to bodies in the order Caelestis charted them, which need not be
  // the order they orbit. A roll letters what it charts; `chart` letters the rest
  // as play reaches them, so later letters can sit anywhere in the orbit.
  function designate(sys, year) {
    const base = sys.starName || sys.id; // a named star lends its name; otherwise its catalogue number
    const letters = 'bcdefghijklmnopqrstuvwxyz';
    const takenL = new Set(sys.bodies.map(b => b.letter).filter(Boolean));
    sys.bodies.forEach((b, i) => {
      if (b.status === 'uncharted' || b.letter) return;
      if (b.kind === 'comet') {
        b.designation = b.designation || `${b.returns ? 'P' : 'C'}/${year} ${'ABCDEFGHJKLMNOPQRSTUVWXY'[i % 24]}${i + 1}`;
        return;
      }
      const l = [...letters].find(c => !takenL.has(c)); takenL.add(l); b.letter = l;
    });
    sys.bodies.forEach(b => {
      if (b.letter) b.designation = `${base} ${b.letter}`;
      (b.moons || []).forEach((m, i) => {
        if (m.status === 'uncharted' || !b.letter) return;
        if (!m.numeral) m.numeral = ROMAN[(b.moons.filter(x => x.numeral).length)] || String(i + 1);
        m.designation = `${base} ${b.letter} ${m.numeral}`;
      });
    });
  }

  // ── a short reading of a rolled system, for the Chart's panel ────────────
  const NUM = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  function summary(sys) {
    const kinds = {};
    sys.bodies.forEach(b => { kinds[b.kind] = (kinds[b.kind] || 0) + 1; });
    const plural = (k, n) => n === 1 ? k : k === 'planet' ? 'planets' : k === 'asteroid belt' ? 'asteroid belts' : k === 'comet' ? 'comets'
      : k === 'giant of air' ? 'giants of air' : k === 'nebula or cloud' ? 'nebulae or clouds' : k === 'cluster of floating bodies' ? 'clusters of floating bodies'
      : k === 'wreck large enough to chart' ? 'wrecks large enough to chart' : k;
    const list = Object.entries(kinds).map(([k, n]) => `${NUM[n] || n} ${plural(k, n)}`);
    const lived = sys.bodies.filter(b => ['outpost', 'settlement', 'civilization'].includes(b.inhabitants)).map(b => b.inhabitants);
    const odd = sys.bodies.map(b => b.oddity).filter(Boolean);
    const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
    let t = `${cap(sys.primary)}, with ${list.join(', ')}.`;
    t += lived.length ? ` Someone lives on ${NUM[lived.length]} of them (${lived.join(', ')}).` : ' Nobody lives there.';
    if (odd.length) t += ` Of note: ${odd[0]}.`;
    return t;
  }

  return { T, STATUSES, GREEK, ROMAN, rng, pick, int, rollBody, used, roll, designate, summary };
});
