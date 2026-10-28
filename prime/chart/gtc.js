/* ════════════════════════════════════════════════════════════════
   Galactic time cycles on the Chart: the Beacon's clock, shared by the
   flat chart (index.html) and the holochart (holo.html).

   Erevos turns once a cycle and throws an unseen beam. When the beam
   reaches an arm's root, that arm kindles: a wave of light runs root to tip
   over a quarter cycle, lighting the arm's four marker clusters in turn.
     a beacon (cycle) = one full turn = 4 sparks = 16 kindlings
     a spark          = one arm's quarter = 4 kindlings
     a kindling       = one marker step = about 30 embers
     an ember         = about a day
   Fleet logs write cycle.kindling.ember: 1491.7.12.

   Time T is counted in embers from Cycle 0. The chart's defaults: thirty
   embers to a kindling, Realmspace's arm (arm 0) kindling first, and now at
   1491.7.12. Which arm kindles first, and the current kindling and ember,
   are not set; the control says so in a DM note.

   The quickening (DM only): the arms kindle slightly early against the
   Discerners' old tables. The ghost shows the old tables a few embers
   behind; the size of the gap is illustrative.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  const E = window.EREVOS;
  const KINDLINGS = 16, EMBERS = 30, CYCLE = KINDLINGS * EMBERS, SPARK = CYCLE / 4;
  const FIRST_ARM = 0;
  const QUICK = 6;
  const toT = (c, k, e) => c * CYCLE + (k - 1) * EMBERS + (e - 1);
  const NOW = toT(1491, 7, 12) + 0.5;

  function parts(T) {
    const cycle = Math.floor(T / CYCLE), inC = T - cycle * CYCLE;
    const k = Math.floor(inC / EMBERS), e = Math.floor(inC - k * EMBERS);
    const s = Math.floor(inC / SPARK), p = (inC - s * SPARK) / SPARK;
    const arm = (FIRST_ARM + s) % 4;
    return { cycle, kindling: k + 1, ember: e + 1, spark: s + 1, arm, marker: k % 4, p, frac: inC / CYCLE, front: E.frontAt(p) };
  }
  /* The beam's direction, as an angle in the chart's spiral space: at each
     spark it points at that arm's root. */
  const beamAngle = T => E.armAngle(FIRST_ARM, 0) + parts(T).frac * 2 * Math.PI;
  const armName = a => a === 0 ? 'arm 1, the Caelestis Sector\'s' : 'arm ' + (a + 1);
  function fmt(T) {
    const q = parts(T);
    return {
      order: `Cycle ${q.cycle} · kindling ${q.kindling} · ember ${q.ember}`,
      fleet: `${q.cycle}.${q.kindling}.${q.ember}`,
      spark: `Spark ${q.spark}: ${armName(q.arm)} kindled`
    };
  }

  /* ── The control ─────────────────────────────────────────────── */
  const SPEEDS = [
    [30, 'A kindling a second'], [5, 'Five embers a second'], [1, 'An ember a second'],
    [1 / 60, 'An ember a minute'], [1 / 86400, 'Real time']
  ];
  const CSS = `
.gtc{display:flex;flex-wrap:wrap;align-items:center;gap:.35rem .8rem;font-family:"Crimson Pro",Georgia,serif;color:#dfe6f0;min-width:0}
.gtc-read{display:flex;flex-direction:column;line-height:1.2;min-width:0}
.gtc-order{font-family:"Cinzel",Georgia,serif;font-size:13px;letter-spacing:.06em;white-space:nowrap}
.gtc-sub{font-size:13px;color:#8c9cb2;white-space:nowrap}
.gtc-fleet{font-family:ui-monospace,Menlo,Consolas,monospace;color:#a8c2ec;margin-right:.45rem}
.gtc-ctl{display:flex;align-items:center;gap:.4rem;flex:1 1 260px;min-width:0}
.gtc button,.gtc select{font:inherit;font-size:14px;color:#dfe6f0;background:rgba(28,36,52,.9);border:1px solid rgba(196,212,232,.16);border-radius:4px;min-height:34px;padding:0 .55rem;cursor:pointer}
.gtc button:focus-visible,.gtc select:focus-visible,.gtc input:focus-visible{outline:2px solid #6E95D4;outline-offset:2px}
.gtc .gtc-play{min-width:34px}
.gtc select{max-width:10.5rem}
.gtc-scrub{flex:1 1 90px;min-width:70px;accent-color:#6E95D4}
.gtc-quick{display:inline-flex;align-items:center;gap:.3rem;font-size:13px;color:#b6a6dc;white-space:nowrap;cursor:pointer}
.gtc-quick input{accent-color:#9683c4}
.gtc-note{flex:1 1 100%;margin:0;font-size:12.5px;line-height:1.35;color:#8c9cb2;font-style:italic}
.gtc-note b{font-style:normal;font-weight:600;color:#b6a6dc;letter-spacing:.06em;font-size:11px}
@media (max-width:640px){.gtc-ctl{flex-wrap:wrap}.gtc select{max-width:9.5rem}.gtc-scrub{flex-basis:100%;order:5}.gtc-order{font-size:12px}}`;
  function mount(host, opts) {
    opts = opts || {};
    if (!document.getElementById('gtc-css')) { const st = document.createElement('style'); st.id = 'gtc-css'; st.textContent = CSS; document.head.appendChild(st); }
    host.innerHTML = `<div class="gtc" role="group" aria-label="Galactic time">
      <div class="gtc-read" aria-live="off"><span class="gtc-order"></span><span class="gtc-sub"><span class="gtc-fleet"></span><span class="gtc-spark"></span></span></div>
      <div class="gtc-ctl">
        <button type="button" class="gtc-play" aria-label="Play">&#9654;</button>
        <select class="gtc-speed" aria-label="Speed">${SPEEDS.map(([v, l], i) => `<option value="${v}"${i === 2 ? ' selected' : ''}>${l}</option>`).join('')}</select>
        <input type="range" class="gtc-scrub" min="0" max="${CYCLE - 0.01}" step="0.25" aria-label="Through the cycle">
        <button type="button" class="gtc-now">Now</button>
        <label class="gtc-quick" title="DM: the arms kindle slightly early against the old tables"><input type="checkbox" class="gtc-q"> Quickening</label>
      </div>
      <p class="gtc-note"><b>DM</b> Now (1491.7.12, Realmspace's arm kindling first) is the chart's default. Which arm kindles first, and the current kindling and ember, are not set.</p>
    </div>`;
    const $ = c => host.querySelector(c);
    const st = { T: NOW, playing: false, speed: 1, quick: false };
    let last = 0, raf = 0;
    function render() {
      const f = fmt(st.T);
      $('.gtc-order').textContent = f.order; $('.gtc-fleet').textContent = f.fleet; $('.gtc-spark').textContent = f.spark;
      $('.gtc-scrub').value = String(st.T - parts(st.T).cycle * CYCLE);
      if (opts.onTime) opts.onTime(st);
    }
    function tick(now) {
      if (!st.playing) return;
      const dt = Math.min(0.25, (now - last) / 1000); last = now;
      st.T += dt * st.speed; render(); raf = requestAnimationFrame(tick);
    }
    function setPlaying(on) {
      st.playing = on; const b = $('.gtc-play');
      b.innerHTML = on ? '&#10074;&#10074;' : '&#9654;'; b.setAttribute('aria-label', on ? 'Pause' : 'Play');
      cancelAnimationFrame(raf); if (on) { last = performance.now(); raf = requestAnimationFrame(tick); }
    }
    $('.gtc-play').addEventListener('click', () => setPlaying(!st.playing));
    $('.gtc-speed').addEventListener('change', e => { st.speed = +e.target.value; });
    $('.gtc-scrub').addEventListener('input', e => { st.T = parts(st.T).cycle * CYCLE + (+e.target.value); render(); });
    $('.gtc-now').addEventListener('click', () => { st.T = NOW; render(); });
    $('.gtc-q').addEventListener('change', e => { st.quick = e.target.checked; render(); });
    render();
    return { state: st, render, set(T) { st.T = T; render(); }, play: setPlaying };
  }

  window.GTC = { KINDLINGS, EMBERS, CYCLE, SPARK, FIRST_ARM, QUICK, NOW, toT, parts, beamAngle, fmt, armName, mount };
})();
