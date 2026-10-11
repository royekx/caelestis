/* ════════════════════════════════════════════════════════════════
   dm-register.js — a filterable register of entries

   The DM reference pages were long scrolls: every system, every
   artifact, every vessel written out in full, one after another, with
   a paragraph at the top explaining how to read the page. That shape
   stops working the moment there are more than a dozen of anything,
   and it was already past that.

   A register is the other shape. The index lists entries and lets you
   narrow them; each entry has a page of its own, however thin. A new
   vessel is a new row and a stub page, rather than another section
   wedged into a scroll that nobody can navigate.

   Markup contract - the same classes the player site uses, so the two
   halves of the wiki look like one wiki:

     .dm-register-search  input, filters on every keystroke
     .facet               one per axis
       .facet-pills > button.filter-tag[data-<axis>="value"]
     .result-line > .result-count + .clear-btn
     .register
       .ent[data-<axis>="a b"]     space-separated: a row can hold
                                   several values on one axis
         a.ent-row                 the click target
         .ent-detail               shown by the row's own disclosure

   Axes are discovered from the pills, so a page adds a filter by adding
   a pill group. Nothing here knows what a sphere or a kind is.

   Filtering is AND across axes, OR within one: picking two spheres
   widens, picking a sphere and a status narrows. That is what people
   expect from facets and it is worth the extra few lines.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else { fn(); }
  }

  ready(function () {
    var register = document.querySelector('.register');
    if (!register) return;

    var ents = Array.prototype.slice.call(register.querySelectorAll('.ent'));
    var pills = Array.prototype.slice.call(document.querySelectorAll('.filter-tag'));
    var search = document.querySelector('.dm-register-search');
    var count = document.querySelector('.result-count');
    var clear = document.querySelector('.clear-btn');

    // Each pill declares its axis through its data attribute. Collect the
    // axis names once rather than hard-coding what this page filters on.
    var axes = [];
    pills.forEach(function (p) {
      Object.keys(p.dataset).forEach(function (k) {
        if (axes.indexOf(k) < 0) axes.push(k);
      });
    });

    var active = {};   // axis -> [values]
    axes.forEach(function (a) { active[a] = []; });

    function matches(ent) {
      for (var i = 0; i < axes.length; i++) {
        var axis = axes[i];
        var want = active[axis];
        if (!want.length) continue;
        var has = (ent.dataset[axis] || '').split(/\s+/).filter(Boolean);
        var hit = want.some(function (v) { return has.indexOf(v) >= 0; });
        if (!hit) return false;
      }
      var q = search && search.value.trim().toLowerCase();
      if (q) {
        if ((ent.textContent || '').toLowerCase().indexOf(q) < 0) return false;
      }
      return true;
    }

    function apply() {
      var shown = 0;
      ents.forEach(function (e) {
        var ok = matches(e);
        e.hidden = !ok;
        if (ok) shown++;
      });
      if (count) {
        count.textContent = shown === ents.length
          ? ents.length + (ents.length === 1 ? ' entry' : ' entries')
          : shown + ' of ' + ents.length;
      }
      var any = axes.some(function (a) { return active[a].length; }) ||
                (search && search.value.trim());
      if (clear) clear.hidden = !any;
      // An empty result is a dead end unless the page says so.
      var empty = register.querySelector('.register-empty');
      if (empty) empty.hidden = shown !== 0;
    }

    pills.forEach(function (p) {
      p.setAttribute('aria-pressed', 'false');
      p.addEventListener('click', function () {
        var axis = Object.keys(p.dataset)[0];
        if (!axis) return;
        var val = p.dataset[axis];
        var at = active[axis].indexOf(val);
        if (at >= 0) active[axis].splice(at, 1);
        else active[axis].push(val);
        p.setAttribute('aria-pressed', at >= 0 ? 'false' : 'true');
        p.classList.toggle('is-active', at < 0);
        apply();
      });
    });

    if (search) search.addEventListener('input', apply);

    if (clear) {
      clear.addEventListener('click', function () {
        axes.forEach(function (a) { active[a] = []; });
        pills.forEach(function (p) {
          p.setAttribute('aria-pressed', 'false');
          p.classList.remove('is-active');
        });
        if (search) search.value = '';
        apply();
        if (search) search.focus();
      });
    }

    // Rows expand in place. The anchor still navigates, so the detail is a
    // preview rather than the only way to reach the entry.
    ents.forEach(function (e) {
      var row = e.querySelector('.ent-row');
      var detail = e.querySelector('.ent-detail');
      if (!row || !detail) return;
      var toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'ent-toggle';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Show more');
      toggle.textContent = '▾';
      toggle.addEventListener('click', function () {
        var open = e.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      row.parentNode.insertBefore(toggle, row.nextSibling);
    });

    apply();
  });
})();
