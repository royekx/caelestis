/* ════════════════════════════════════════════════════════════════
   bearing.js — the voyage strip on the bearing pages, and the past
   voyages on the Current Bearing.

   The strip (.bearing-strip) opens scrolled to the voyage on show, its
   ‹ › arrows step it a few stops at a time, and its edges fade where
   stops are cut off. A voyage page is a frozen snapshot whose strip ends
   at its own voyage; the strip is completed here from data/voyage.js,
   so an old page needs no upkeep.

   The tabs (.bearing-tabs) show one panel at a time: Last time, Before
   you sail and, on the Current Bearing, the Quest Board. The open tab is
   kept in the URL hash (#last-time, #sail, #quest-board) and, per viewer,
   in localStorage when it is there. Without this script the tabs are
   plain links and the panels stack.

   On the Current Bearing (<body data-bearing-current>) a voyage in the
   strip swaps Last time and Before you sail in place, for the ones on
   voyages/bearings/voyage-NNN.html, tabs and all; the Quest Board stays
   current. The URL becomes index.html?voyage=NNN, Back and Forward
   follow, and a line at the top of the panel leads back to the current
   bearing. If a fetch fails, the link is followed as a plain link.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var nav = document.querySelector('.bearing-strip');
  if (!nav) return;
  var track = nav.querySelector('.bs-track');
  var list = nav.querySelector('.bs-list');
  var prev = nav.querySelector('.bs-arrow[data-step="-1"]');
  var next = nav.querySelector('.bs-arrow[data-step="1"]');
  var pad = function (n) { return ('00' + n).slice(-3); };
  var numOf = function (a) { return a.getAttribute('href').replace(/^.*voyage-(\d{3})\.html.*$/, '$1'); };

  // ── Complete the strip from the voyage registry ──
  var stops = function () { return Array.prototype.slice.call(list.querySelectorAll('a.bs-stop')); };
  var have = {};
  stops().forEach(function (a) { have[numOf(a)] = true; });
  var reg = window.CAELESTIS_VOYAGES || [];
  var marker = list.querySelector('li.is-next');
  reg.forEach(function (v) {
    if (have[v.num]) return;
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = 'bs-stop';
    a.href = 'voyage-' + v.num + '.html';
    a.innerHTML = '<span class="bs-num"></span><span class="bs-title"></span>';
    a.firstChild.textContent = v.num;
    a.lastChild.textContent = v.title.replace(/'/g, '’');
    li.appendChild(a);
    list.insertBefore(li, marker);
    have[v.num] = true;
  });
  if (reg.length) {
    var last = parseInt(reg[reg.length - 1].num, 10) + 1;
    if (marker) marker.querySelector('.bs-num').textContent = pad(last);
    else {
      marker = document.createElement('li');
      marker.className = 'is-next';
      marker.innerHTML = '<span class="bs-stop"><span class="bs-num">' + pad(last) +
        '</span><span class="bs-title">Next voyage</span></span>';
      list.appendChild(marker);
    }
  }
  nav.classList.add('is-live');

  // ── Scrolling ──
  function edges() {
    var max = track.scrollWidth - track.clientWidth;
    var atStart = track.scrollLeft <= 4, atEnd = track.scrollLeft >= max - 4;
    prev.disabled = atStart;
    next.disabled = atEnd;
    track.classList.toggle('fade-l', !atStart);
    track.classList.toggle('fade-r', !atEnd);
  }
  function stepWidth() {
    var li = list.querySelector('li');
    var w = li ? li.getBoundingClientRect().width : 170;
    return Math.max(w, Math.floor(track.clientWidth / w) * w - w);
  }
  function scrollToCurrent(smooth) {
    var cur = list.querySelector('[aria-current]');
    if (!cur) return;
    var item = cur.parentNode, li = item.getBoundingClientRect(), box = track.getBoundingClientRect();
    var left = track.scrollLeft + (li.left - box.left) - (track.clientWidth - li.width) / 2;
    // The latest voyage: show the end of the strip, with the next voyage beside it.
    var after = item.nextElementSibling;
    if (!after || after.classList.contains('is-next')) left = track.scrollWidth;
    track.scrollTo({ left: Math.max(0, left), behavior: smooth ? 'smooth' : 'auto' });
  }
  [prev, next].forEach(function (b) {
    b.addEventListener('click', function () {
      track.scrollBy({ left: stepWidth() * parseInt(b.dataset.step, 10), behavior: 'smooth' });
    });
  });
  track.addEventListener('scroll', edges, { passive: true });
  window.addEventListener('resize', edges);

  // ── Tabs ──
  // Each .bt-tab links its panel (href="#id"). The open tab comes from the
  // hash, else the viewer's last choice, else Last time.
  var panel = document.querySelector('.bearing');
  var tabBar = document.querySelector('.bearing-tabs');
  var TAB_KEY = 'caelestis.bearing.tab';
  var tabs = function () { return tabBar ? Array.prototype.slice.call(tabBar.querySelectorAll('.bt-tab')) : []; };
  var ids = tabs().map(function (t) { return t.getAttribute('data-tab'); });
  var openTab = null;
  function remembered() {
    try { return localStorage.getItem(TAB_KEY); } catch (e) { return null; }
  }
  function fromHash() {
    var h = location.hash.replace(/^#/, '');
    return ids.indexOf(h) >= 0 ? h : null;
  }
  function select(id, opts) {
    opts = opts || {};
    if (ids.indexOf(id) < 0) id = ids[0];
    openTab = id;
    tabs().forEach(function (t) {
      var on = t.getAttribute('data-tab') === id;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.setAttribute('tabindex', on ? '0' : '-1');
      if (on && opts.focus) t.focus();
    });
    ids.forEach(function (x) {
      var p = document.getElementById(x);
      if (!p) return;
      p.setAttribute('role', 'tabpanel');
      p.setAttribute('aria-labelledby', 'tab-' + x);
      p.hidden = x !== id;
    });
    if (opts.remember) { try { localStorage.setItem(TAB_KEY, id); } catch (e) { /* storage blocked */ } }
    if (opts.hash) {
      var url = location.pathname + location.search + '#' + id;
      try { history.replaceState(history.state, '', url); } catch (e) { /* file: or sandboxed */ }
    }
  }
  if (tabBar && panel && ids.length) {
    tabBar.setAttribute('role', 'tablist');
    tabBar.setAttribute('aria-label', 'Bearing');
    tabs().forEach(function (t) {
      t.setAttribute('role', 'tab');
      t.setAttribute('aria-controls', t.getAttribute('data-tab'));
    });
    panel.classList.add('is-tabbed');
    tabBar.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('.bt-tab');
      if (!t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
      e.preventDefault();
      select(t.getAttribute('data-tab'), { remember: true, hash: true });
    });
    tabBar.addEventListener('keydown', function (e) {
      var all = tabs(), i = all.indexOf(document.activeElement);
      if (i < 0) return;
      var to = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: all.length - 1 }[e.key];
      if (to === undefined) return;
      e.preventDefault();
      to = (to + all.length) % all.length;
      select(all[to].getAttribute('data-tab'), { remember: true, hash: true, focus: true });
    });
    window.addEventListener('hashchange', function () {
      var h = fromHash();
      if (h && h !== openTab) select(h, { remember: true });
    });
    var first = fromHash();
    select(first || remembered());
    // A link to #sail or #quest-board lands at the tabs, not part-way down.
    if (first) requestAnimationFrame(function () { tabBar.scrollIntoView({ block: 'start' }); });
  }

  // ── Past voyages, in place (the Current Bearing only) ──
  // A voyage in the strip swaps Last time and Before you sail for that
  // voyage page's own: its Last time, and its Before you sailed as the
  // voyages after it settled it. The Quest Board stays current.
  var live = document.body.hasAttribute('data-bearing-current');
  var parts = ['last-time', 'sail'];
  var cur = function (id) { return document.getElementById(id); };
  if (!live || !panel || !cur('last-time') || !cur('sail') || !window.fetch || !window.DOMParser || !history.pushState) {
    scrollToCurrent(false); edges();
    return;
  }

  var home = cur('last-time').getAttribute('data-voyage');   // the voyage the page was written with
  var cache = {}, pending = {};
  // A voyage's parts: its two panels, then its two tabs' contents.
  var tabOf = function (root, id) { return root.querySelector('.bt-tab[data-tab="' + id + '"]'); };
  var snapshot = function (root, get) {
    return parts.map(get).concat(parts.map(function (id) { var t = tabOf(root, id); return t ? t.innerHTML : null; }));
  };
  cache[home] = Promise.resolve(snapshot(document, function (id) { return cur(id).cloneNode(true); }));

  function load(num) {
    if (cache[num]) return cache[num];
    if (pending[num]) return pending[num];
    pending[num] = fetch('voyage-' + num + '.html', { credentials: 'same-origin' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var found = snapshot(doc, function (id) { return doc.getElementById(id); });
        if (!found[0] || !found[1]) throw new Error('no sections');
        cache[num] = Promise.resolve(found);
        return found;
      });
    pending[num].catch(function () { delete pending[num]; });
    return pending[num];
  }
  function mark(num) {
    stops().forEach(function (a) {
      if (numOf(a) === num) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }
  // The line at the top of the panel while a past voyage is showing.
  var banner = null;
  function flag(num) {
    if (num === home) { if (banner) { banner.parentNode.removeChild(banner); banner = null; } return; }
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'bearing-showing';
      banner.setAttribute('data-pagefind-ignore', '');
      banner.innerHTML = '<span></span><a class="bearing-return" href="index.html">Back to the current bearing</a>';
      banner.lastChild.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
        e.preventDefault();
        go(home, 'index.html');
      });
      panel.insertBefore(banner, panel.firstChild);
    }
    banner.firstChild.textContent = 'Voyage ' + num + ', as it stood';
  }
  function show(num) {
    return load(num).then(function (found) {
      var y = window.scrollY;
      parts.forEach(function (id, i) {
        var old = cur(id);
        old.parentNode.replaceChild(document.importNode(found[i], true), old);
        var t = tabOf(document, id);
        if (t && found[parts.length + i] !== null) t.innerHTML = found[parts.length + i];
      });
      if (ids.length) select(fromHash() || openTab);
      mark(num);
      flag(num);
      window.scrollTo(0, y);
      scrollToCurrent(true);
    });
  }
  function urlFor(num) { return (num === home ? 'index.html' : 'index.html?voyage=' + num) + location.hash; }
  function go(num, href) {
    if (num === cur('last-time').getAttribute('data-voyage')) return;
    // A past voyage has no Quest Board of its own: open its Last time.
    if (openTab === 'quest-board' && num !== home) select('last-time', { hash: true });
    show(num).then(function () {
      history.pushState({ voyage: num }, '', urlFor(num));
    }, function () { location.href = href; });
  }

  list.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.bs-stop');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
    e.preventDefault();
    go(numOf(a), a.href);
  });
  var warm = function (e) {
    var a = e.target.closest && e.target.closest('a.bs-stop');
    if (a) load(numOf(a)).catch(function () {});
  };
  list.addEventListener('mouseover', warm);
  list.addEventListener('focusin', warm);

  window.addEventListener('popstate', function (e) {
    var num = (e.state && e.state.voyage) || wanted() || home;
    show(num).catch(function () { location.reload(); });
  });
  history.replaceState({ voyage: home }, '');

  function wanted() {
    var m = /[?&]voyage=(\d{1,3})\b/.exec(location.search);
    return m ? pad(parseInt(m[1], 10)) : null;
  }
  var start = wanted();
  if (start && start !== home && have[start]) {
    history.replaceState({ voyage: start }, '');
    mark(start);
    show(start).catch(function () { location.href = 'voyage-' + start + '.html'; });
  }
  scrollToCurrent(false);
  edges();
})();
