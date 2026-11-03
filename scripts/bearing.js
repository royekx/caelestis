/* ════════════════════════════════════════════════════════════════
   bearing.js — the voyage strip on the bearing pages, and the past
   voyages on the Current Bearing.

   The strip (.bearing-strip) opens scrolled to the voyage on show, its
   ‹ › arrows step it a few stops at a time, and its edges fade where
   stops are cut off. A voyage page is a frozen snapshot whose strip ends
   at its own voyage; the strip is completed here from data/voyage.js,
   so an old page needs no upkeep.

   Each section (<details class="sec">) remembers whether the viewer left
   it open or closed, in localStorage when it is there.

   On the Current Bearing (<body data-bearing-current>) a voyage in the
   strip swaps Last time and Before you sail in place, for the ones on
   voyages/bearings/voyage-NNN.html; the Quest Board stays current. The
   URL becomes index.html?voyage=NNN, Back and Forward follow, and a line
   at the top of the panel leads back to the current bearing. If a fetch
   fails, the link is followed as a plain link.
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

  // ── Open and closed sections, remembered per viewer ──
  // Each section is a <details class="sec" data-sec="…" open>. The state is
  // kept in localStorage when it is there; the page works the same without it.
  var KEY = 'caelestis.bearing.sections';
  function stored() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function applyOpen(root) {
    var st = stored();
    Array.prototype.forEach.call(root.querySelectorAll('details.sec[data-sec]'), function (d) {
      var k = d.getAttribute('data-sec');
      if (Object.prototype.hasOwnProperty.call(st, k)) d.open = !!st[k];
    });
  }
  document.addEventListener('toggle', function (e) {
    var d = e.target;
    if (!d.matches || !d.matches('details.sec[data-sec]')) return;
    var st = stored();
    st[d.getAttribute('data-sec')] = d.open;
    try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (err) { /* storage blocked */ }
  }, true);
  applyOpen(document);

  // ── Past voyages, in place (the Current Bearing only) ──
  // A voyage in the strip swaps Last time and Before you sail for that
  // voyage page's own: its Last time, and its Before you sailed as the
  // voyages after it settled it. The Quest Board stays current.
  var live = document.body.hasAttribute('data-bearing-current');
  var panel = document.querySelector('.bearing');
  var parts = ['last-time', 'sail'];
  var cur = function (id) { return document.getElementById(id); };
  if (!live || !panel || !cur('last-time') || !cur('sail') || !window.fetch || !window.DOMParser || !history.pushState) {
    scrollToCurrent(false); edges();
    return;
  }

  var home = cur('last-time').getAttribute('data-voyage');   // the voyage the page was written with
  var cache = {}, pending = {};
  cache[home] = Promise.resolve(parts.map(function (id) { return cur(id).cloneNode(true); }));

  function load(num) {
    if (cache[num]) return cache[num];
    if (pending[num]) return pending[num];
    pending[num] = fetch('voyage-' + num + '.html', { credentials: 'same-origin' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var found = parts.map(function (id) { return doc.getElementById(id); });
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
      });
      applyOpen(panel);
      mark(num);
      flag(num);
      window.scrollTo(0, y);
      scrollToCurrent(true);
    });
  }
  function urlFor(num) { return num === home ? 'index.html' : 'index.html?voyage=' + num; }
  function go(num, href) {
    if (num === cur('last-time').getAttribute('data-voyage')) return;
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
