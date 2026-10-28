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
   a pill group. Nothing here knows what a system or a kind is.

   Filtering is AND across axes, OR within one: picking two systems
   widens, picking a system and a status narrows. That is what people
   expect from facets and it is worth the extra few lines.

   Grouping. A register may carry data-group-axis="<axis>" and a
   .register-view with two .view-btn buttons (data-view="az" and
   data-view="group"). In group view the rows are reordered by the first
   value each row holds on that axis, in the order of that axis's pills,
   and a .register-group-head is inserted before each group, labelled
   from the pill's text. A to Z order inside a group is the page's own
   order. A row with several values sits under its first and shows an
   "also:" note for the rest; a value with no pill heads its group raw.
   A group head hides when every row under it is filtered out. Pills,
   search, count and view buttons are looked up in the register's own
   container.
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

    // Everything the register drives lives in the same container as it.
    var scope = register.parentNode;
    var ents = Array.prototype.slice.call(register.querySelectorAll('.ent'));
    var pills = Array.prototype.slice.call(scope.querySelectorAll('.filter-tag'));
    var search = scope.querySelector('.dm-register-search');
    var count = scope.querySelector('.result-count');
    var clear = scope.querySelector('.clear-btn');

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
      // A group head shows only while a row under it does.
      Array.prototype.forEach.call(register.querySelectorAll('.register-group-head'), function (h) {
        var any = false;
        for (var n = h.nextElementSibling; n && !n.classList.contains('register-group-head'); n = n.nextElementSibling) {
          if (n.classList.contains('ent') && !n.hidden) { any = true; break; }
        }
        h.hidden = !any;
      });
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

    // Grouping by one axis, when the page asks for it.
    var groupAxis = register.getAttribute('data-group-axis');
    var viewBtns = Array.prototype.slice.call(scope.querySelectorAll('.view-btn'));
    var heads = [];
    var original = ents.slice();
    var empty = register.querySelector('.register-empty');

    function valuesOf(e) {
      return (e.dataset[groupAxis] || '').split(/\s+/).filter(Boolean);
    }
    function groupOf(e) { return valuesOf(e)[0] || ''; }

    // A row with several values sits under its first; the rest show as
    // a small "also" note while the view is grouped.
    function labelFor(v) {
      var pill = pills.filter(function (p) { return p.dataset[groupAxis] === v; })[0];
      return pill ? pill.textContent : v;
    }
    function setAlso(on) {
      original.forEach(function (e) {
        var old = e.querySelector('.ent-also');
        if (old) old.parentNode.removeChild(old);
        var rest = valuesOf(e).slice(1);
        if (!on || !rest.length) return;
        var sub = e.querySelector('.ent-sub') || e.querySelector('.ent-name');
        if (!sub) return;
        var note = document.createElement('span');
        note.className = 'ent-also';
        note.textContent = 'also: ' + rest.map(labelFor).join(', ');
        sub.parentNode.insertBefore(note, sub.nextSibling);
      });
    }

    function setView(view) {
      heads.forEach(function (h) { h.parentNode.removeChild(h); });
      heads = [];
      var order = original.slice();
      if (view === 'group' && groupAxis) {
        var axisPills = pills.filter(function (p) { return p.dataset[groupAxis] !== undefined; });
        var values = axisPills.map(function (p) { return p.dataset[groupAxis]; });
        var rank = function (e) { var i = values.indexOf(groupOf(e)); return i < 0 ? values.length : i; };
        order = original.map(function (e, i) { return { e: e, i: i }; })
          .sort(function (a, b) { return (rank(a.e) - rank(b.e)) || (a.i - b.i); })
          .map(function (x) { return x.e; });
        var last = null;
        order.forEach(function (e) {
          var g = groupOf(e);
          if (g !== last) {
            var head = document.createElement('div');
            head.className = 'register-group-head';
            head.setAttribute('data-group', g);
            head.textContent = labelFor(g);
            register.insertBefore(head, empty || null);
            heads.push(head);
            last = g;
          }
          register.insertBefore(e, empty || null);
        });
      } else {
        order.forEach(function (e) { register.insertBefore(e, empty || null); });
      }
      setAlso(view === 'group' && !!groupAxis);
      viewBtns.forEach(function (b) {
        var on = b.getAttribute('data-view') === view;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      apply();
    }

    if (groupAxis && viewBtns.length) {
      viewBtns.forEach(function (b) {
        b.addEventListener('click', function () { setView(b.getAttribute('data-view')); });
      });
    }

    apply();
  });
})();
