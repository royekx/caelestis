/* ════════════════════════════════════════════════════════════════
   dm-listen.js — read DM pages aloud
   ----------------------------------------------------------------
   Uses the browser's own speech engine (Web Speech API): no server,
   no account, no audio files. The voice is whatever the reader's
   browser and system offer; the first voice chosen is remembered in
   that browser, so one reader hears one voice across every page.

     - every h2 and h3 in the page body gets a Listen button: it reads
       from that heading to the end of the page
     - every entry tab (.pill-panel) gets a Listen button: it reads
       that tab only
     - a player bar at the foot holds pause, previous and next section,
       stop, speed and voice
     - prose, headings, list items and callouts are read; tables,
       infoboxes, chips, navigation and anything marked
       [data-listen-skip] are not

   Loaded by dm-nav.js after the gate. Without speech support the
   script does nothing.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;
  var synth = window.speechSynthesis;

  var STORE = 'caelestis_listen';
  var READ = 'p, li, h2, h3, h4, h5, dt, dd, blockquote, .dm-callout, .entry-sub';
  var SKIP = 'table, nav, aside, .stat-card, .identity-card, .xref-card, .chip, .ent-links, ' +
             '.voyage-nav-bar, .dm-toc, .pill-tabs, .register-filters, .filter-row, ' +
             'button, script, style, [data-listen-skip], .listen-bar';
  var HEAD = /^H[23]$/;

  var ICON_PLAY = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 6h2.5L9 3v10L5.5 10H3z" fill="currentColor"/><path d="M11 5.5a3.5 3.5 0 010 5M12.5 3.5a6 6 0 010 9" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>';

  /* ── Settings, kept per browser ─────────────────────────────── */
  function load() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; }
  }
  function save(s) {
    try { localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) { /* storage blocked */ }
  }
  var settings = load();
  if (!settings.rate) settings.rate = 1;

  function voices() {
    return synth.getVoices().filter(function (v) { return /^en/i.test(v.lang); });
  }
  function pickVoice() {
    var list = voices();
    if (!list.length) return null;
    var saved = list.filter(function (v) { return v.voiceURI === settings.voice; })[0];
    if (saved) return saved;
    // First visit: prefer the natural-sounding voices some browsers ship,
    // then remember the choice so every page uses the same one.
    var rank = function (v) {
      var n = v.name;
      if (/Natural/i.test(n)) return 0;
      if (/Online/i.test(n)) return 1;
      if (/Google/i.test(n)) return 2;
      if (/^en-(US|GB)/i.test(v.lang) && v.localService) return 3;
      return 4;
    };
    var best = list.slice().sort(function (a, b) { return rank(a) - rank(b); })[0];
    settings.voice = best.voiceURI;
    save(settings);
    return best;
  }

  /* ── What gets read ─────────────────────────────────────────── */
  function shown(el) { return el.getClientRects().length > 0; }

  function ownText(el, selected) {
    var copy = el.cloneNode(true);
    // Drop nested elements read on their own, and anything skipped.
    var drop = copy.querySelectorAll(READ + ', ' + SKIP);
    for (var i = 0; i < drop.length; i++) drop[i].remove();
    return copy.textContent.replace(/\s+/g, ' ').trim();
  }

  function blocksIn(root) {
    var all = root.querySelectorAll(READ), out = [];
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el.closest(SKIP)) continue;
      if (!shown(el)) continue;
      var t = ownText(el);
      if (!t) continue;
      out.push({ el: el, text: t, head: HEAD.test(el.tagName) });
    }
    return out;
  }

  // Long paragraphs are spoken in sentence-sized pieces; some engines
  // stop partway through a long utterance.
  function chunks(text) {
    var parts = text.match(/[^.!?;:]+[.!?;:]*["”’)]*\s*/g) || [text], out = [], cur = '';
    parts.forEach(function (p) {
      if ((cur + p).length > 220 && cur) { out.push(cur.trim()); cur = ''; }
      cur += p;
    });
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  /* ── Player state ───────────────────────────────────────────── */
  var queue = [], bi = 0, ci = 0, parts = [], playing = false, token = 0, scopeLabel = '', fails = 0;

  function mark(el) {
    var old = document.querySelector('.is-listening');
    if (old) old.classList.remove('is-listening');
    if (!el) return;
    el.classList.add('is-listening');
    var r = el.getBoundingClientRect();
    if (r.top < 80 || r.bottom > window.innerHeight - 90) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }

  function speak() {
    var my = ++token;
    if (bi >= queue.length) { stop(); return; }
    var b = queue[bi];
    if (ci === 0) { parts = chunks(b.text); mark(b.el); }
    var u = new SpeechSynthesisUtterance(parts[ci]);
    var v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = settings.rate;
    u.onend = function () {
      if (my !== token || !playing) return;
      fails = 0;
      ci++;
      if (ci >= parts.length) { ci = 0; bi++; }
      setTimeout(speak, b.head && ci === 0 ? 350 : 60);
    };
    u.onerror = function (e) {
      if (my !== token) return;
      if (e.error === 'interrupted' || e.error === 'canceled') return;
      // A failing engine would race through the page: skip one block,
      // and pause after three failures in a row.
      if (++fails >= 3) { fails = 0; pause(); return; }
      ci = 0; bi++; if (playing) setTimeout(speak, 60);
    };
    synth.speak(u);
    render();
  }

  function start(blocks, label) {
    synth.cancel();
    queue = blocks; bi = 0; ci = 0; scopeLabel = label;
    if (!queue.length) return;
    playing = true;
    showBar();
    speak();
  }

  // Pause is a cancel that keeps the place: pause() is unreliable
  // across browsers, and resuming re-reads the current sentence.
  function pause() { playing = false; token++; synth.cancel(); render(); }
  function resume() { if (!queue.length) return; playing = true; speak(); }
  function stop() {
    playing = false; token++; synth.cancel();
    queue = []; bi = 0; ci = 0; mark(null); hideBar();
  }
  function jump(dir) {
    if (!queue.length) return;
    var i = bi + dir;
    while (i > 0 && i < queue.length && !queue[i].head) i += dir;
    bi = Math.max(0, Math.min(i, queue.length - 1)); ci = 0;
    token++; synth.cancel();
    if (playing) speak(); else { mark(queue[bi].el); render(); }
  }

  /* ── Player bar ─────────────────────────────────────────────── */
  var bar, btnPlay, labelEl, voiceSel;

  function buildBar() {
    bar = document.createElement('div');
    bar.className = 'listen-bar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Listening');
    bar.hidden = true;
    bar.innerHTML =
      '<button type="button" data-act="prev" aria-label="Previous section">&#9664;&#9664;</button>' +
      '<button type="button" data-act="play" aria-label="Pause">&#10074;&#10074;</button>' +
      '<button type="button" data-act="next" aria-label="Next section">&#9654;&#9654;</button>' +
      '<span class="listen-label"></span>' +
      '<label class="listen-opt">Speed <select data-opt="rate">' +
        [0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2].map(function (r) {
          return '<option value="' + r + '">' + r + '&times;</option>';
        }).join('') + '</select></label>' +
      '<label class="listen-opt listen-voice">Voice <select data-opt="voice"></select></label>' +
      '<button type="button" data-act="stop" aria-label="Stop">&#10005;</button>';
    document.body.appendChild(bar);
    btnPlay = bar.querySelector('[data-act="play"]');
    labelEl = bar.querySelector('.listen-label');
    voiceSel = bar.querySelector('[data-opt="voice"]');
    var rateSel = bar.querySelector('[data-opt="rate"]');
    rateSel.value = String(settings.rate);

    bar.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var a = b.getAttribute('data-act');
      if (a === 'play') { if (playing) pause(); else resume(); }
      else if (a === 'prev') jump(-1);
      else if (a === 'next') jump(1);
      else if (a === 'stop') stop();
    });
    rateSel.addEventListener('change', function () {
      settings.rate = parseFloat(rateSel.value); save(settings);
      if (playing) { token++; synth.cancel(); speak(); }
    });
    voiceSel.addEventListener('change', function () {
      settings.voice = voiceSel.value; save(settings);
      if (playing) { token++; synth.cancel(); speak(); }
    });
    fillVoices();
  }

  function fillVoices() {
    if (!voiceSel) return;
    var list = voices(), cur = pickVoice();
    voiceSel.innerHTML = list.map(function (v) {
      return '<option value="' + v.voiceURI.replace(/"/g, '&quot;') + '">' +
        v.name.replace(/</g, '&lt;') + '</option>';
    }).join('');
    if (cur) voiceSel.value = cur.voiceURI;
    voiceSel.parentNode.hidden = list.length < 2;
  }

  function render() {
    if (!bar) return;
    btnPlay.innerHTML = playing ? '&#10074;&#10074;' : '&#9654;';
    btnPlay.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    var here = '';
    for (var i = bi; i >= 0; i--) { if (queue[i] && queue[i].head) { here = queue[i].text; break; } }
    labelEl.textContent = here || scopeLabel;
  }
  function showBar() { bar.hidden = false; document.body.classList.add('has-listen-bar'); render(); }
  function hideBar() { if (bar) bar.hidden = true; document.body.classList.remove('has-listen-bar'); }

  /* ── Buttons on headings and tabs ───────────────────────────── */
  function listenButton(label) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'listen-btn';
    b.setAttribute('aria-label', label);
    b.title = label;
    b.innerHTML = ICON_PLAY;
    return b;
  }

  function from(main, el) {
    var all = blocksIn(main);
    for (var i = 0; i < all.length; i++) {
      if (all[i].el === el || el.contains(all[i].el) ||
          (el.compareDocumentPosition(all[i].el) & Node.DOCUMENT_POSITION_FOLLOWING)) {
        return all.slice(i);
      }
    }
    return [];
  }

  function wire(main) {
    var heads = main.querySelectorAll('h2, h3');
    Array.prototype.forEach.call(heads, function (h) {
      if (h.closest(SKIP) || h.closest('.pill-panel')) return;
      var b = listenButton('Listen from ' + h.textContent.trim());
      b.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        start(from(main, h), h.textContent.trim());
      });
      h.appendChild(b);
    });

    var panels = main.querySelectorAll('.pill-panel');
    Array.prototype.forEach.call(panels, function (p) {
      var tab = document.getElementById(p.getAttribute('aria-labelledby') || '');
      var name = tab ? tab.textContent.trim() : 'this tab';
      var row = document.createElement('div');
      row.className = 'listen-row';
      var b = listenButton('Listen to ' + name);
      b.insertAdjacentHTML('beforeend', '<span>Listen</span>');
      b.addEventListener('click', function () {
        var title = document.querySelector('.entry-name');
        var blocks = blocksIn(p);
        if (title) blocks.unshift({ el: title, text: title.textContent.trim() + '. ' + name + '.', head: true });
        start(blocks, name);
      });
      row.appendChild(b);
      p.insertBefore(row, p.firstChild);
    });
  }

  /* ── Styles, kept with the script ───────────────────────────── */
  function styles() {
    var css =
      '.listen-btn{display:inline-flex;align-items:center;gap:.35em;margin-left:.5em;padding:.15em .35em;' +
        'border:1px solid var(--panel-rule,rgba(255,255,255,.14));border-radius:4px;background:transparent;' +
        'color:var(--accent,#c9a96e);opacity:.55;cursor:pointer;vertical-align:middle;font:inherit;font-size:.7rem;line-height:1}' +
      '.listen-btn:hover,.listen-btn:focus-visible{opacity:1}' +
      '.listen-btn svg{width:1.05em;height:1.05em}' +
      'h2 .listen-btn,h3 .listen-btn{font-size:.55em}' +
      '.listen-row{display:flex;justify-content:flex-end;margin:-.25rem 0 .5rem}' +
      '.listen-row .listen-btn{margin:0;opacity:.75;font-size:.8rem;padding:.3em .6em}' +
      '.is-listening{background:color-mix(in srgb,var(--accent,#c9a96e) 12%,transparent);' +
        'box-shadow:-3px 0 0 var(--accent,#c9a96e);border-radius:2px}' +
      '.listen-bar{position:fixed;left:50%;bottom:12px;transform:translateX(-50%);z-index:900;' +
        'display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;max-width:min(760px,calc(100vw - 24px));' +
        'padding:.5rem .75rem;border:1px solid var(--panel-rule,rgba(255,255,255,.14));border-radius:8px;' +
        'background:var(--panel,rgba(9,12,20,.92));backdrop-filter:blur(8px);color:inherit;' +
        'box-shadow:0 6px 24px rgba(0,0,0,.45);font-size:.85rem}' +
      '.listen-bar[hidden]{display:none}' +
      '.listen-bar button{background:transparent;border:1px solid var(--panel-rule,rgba(255,255,255,.14));' +
        'border-radius:4px;color:inherit;padding:.25rem .5rem;cursor:pointer;font:inherit;line-height:1}' +
      '.listen-bar button:hover{border-color:var(--accent,#c9a96e);color:var(--accent,#c9a96e)}' +
      '.listen-label{flex:1 1 6rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:.85}' +
      '.listen-opt{display:inline-flex;align-items:center;gap:.3rem;opacity:.85}' +
      '.listen-opt select{background:rgba(0,0,0,.35);color:inherit;border:1px solid var(--panel-rule,rgba(255,255,255,.14));' +
        'border-radius:4px;padding:.15rem .25rem;font:inherit;max-width:12rem}' +
      'body.has-listen-bar{padding-bottom:84px}' +
      '@media (max-width:600px){.listen-voice select{max-width:8rem}.listen-label{flex-basis:100%;order:-1}}' +
      '@media print{.listen-btn,.listen-row,.listen-bar{display:none!important}}';
    var s = document.createElement('style');
    s.id = 'dm-listen-css';
    s.textContent = css;
    document.head.appendChild(s);
  }

  function init() {
    var main = document.querySelector('main.dm-content') || document.querySelector('main');
    if (!main) return;
    styles();
    buildBar();
    wire(main);
    if (typeof synth.onvoiceschanged !== 'undefined') synth.onvoiceschanged = fillVoices;
    window.addEventListener('pagehide', function () { synth.cancel(); });
  }

  // Run after the page's own scripts (dm-sections opens the article).
  function ready() { setTimeout(init, 0); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
