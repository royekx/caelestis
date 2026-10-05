/* ════════════════════════════════════════════════════════════════
   dm-threadboard.js — the Voyages board

   The Voyages page was an archive: briefing, actual, delta, one
   session after another. Read top to bottom it answers "what happened
   in V003" perfectly well, and it cannot answer the question prep
   actually asks, which is "what have I let go quiet." That answer only
   exists ACROSS sessions, so it needs an axis the page did not have.

   The matrix is already in the data. Every entity in data/*.json
   carries a voyages[] array of { session, number, bullets }, so this
   script reads what the pipeline already publishes and arranges it:

     columns = voyages          rows = lanes          cell = that lane's
                                                              beats there

   A row of marks that stops is a thread going cold. Nothing computes
   that judgement for you; you see it, which is the point.

   Three things this is careful about:

   1. UNSYNCED COLUMNS. data/*.json currently reaches V004 while the
      page below covers V006. A blank column for a session that was
      played would read as a quiet session, which is the opposite of
      the truth, so voyages past the data's reach are hatched and
      labelled rather than left empty.

   2. NESTED THREADS. quests.json carries `parent`, so a thread sits
      under its quest. The board keeps that, because "The Living Clue
      in the Crate" going cold means something different once you can
      see it belongs to the Burglaries.

   3. PLAYER-SAFE SOURCE. This reads the transformed data/, never
      data/raw/. The board is DM-side, the numbers on it are not.

   No build step and no new authoring format: delete this file and the
   page is the archive it was.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var MOUNT = 'thread-board';

  // Lane groups, in reading order. `child` means the set nests by parent.
  var TIERS = [
    { id: 'crew',    label: 'Crew',    file: 'player-characters.json', open: true },
    { id: 'threads', label: 'Threads', file: 'quests.json',            open: true,  nest: true },
    { id: 'cast',    label: 'Cast',    file: 'npcs.json',              open: false },
    { id: 'places',  label: 'Places',  file: 'locations.json',         open: false },
    { id: 'things',  label: 'Things',  file: 'items.json',             open: false }
  ];

  // Voyages the data does not cover yet. Kept here rather than inferred,
  // because an absent column and an unplayed session look identical from
  // the data alone.
  var EXTRA_COLUMNS = [
    { number: 5, title: 'the descent',               state: 'unsynced' },
    { number: 6, title: 'the Command Deck → the swap', state: 'ghost' }
  ];

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else { fn(); }
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  ready(function () {
    var mount = document.getElementById(MOUNT);
    if (!mount) return;

    var base = mount.getAttribute('data-base') || '../../../data/';

    Promise.all(TIERS.map(function (t) {
      return fetch(base + t.file)
        .then(function (r) { return r.ok ? r.json() : []; })
        .catch(function () { return []; });
    })).then(function (sets) {
      var registry = null;
      // voyage.js is a plain script, so titles come from the global it
      // defines if the page already loaded it; otherwise the number alone.
      if (window.CAELESTIS_VOYAGES) registry = window.CAELESTIS_VOYAGES;
      build(mount, sets, registry);
    }).catch(function (e) {
      mount.appendChild(el('p', 'tb-panel-empty',
        'The board could not load its data. ' + e));
    });
  });

  function build(mount, sets, registry) {
    /* ---- columns ------------------------------------------------ */
    var seen = {};
    sets.forEach(function (list) {
      list.forEach(function (e) {
        (e.voyages || []).forEach(function (v) { seen[v.number] = true; });
      });
    });
    var dataMax = Math.max.apply(null, Object.keys(seen).map(Number).concat([0]));

    var cols = Object.keys(seen).map(Number).sort(function (a, b) { return a - b; })
      .map(function (n) {
        var t = registry && registry[n - 1] ? registry[n - 1].title : '';
        return { number: n, title: t, state: 'synced' };
      });
    EXTRA_COLUMNS.forEach(function (c) {
      if (c.number > dataMax) cols.push(c);
    });

    /* ---- lanes -------------------------------------------------- */
    var tiers = TIERS.map(function (t, i) {
      var list = sets[i] || [];
      var lanes = list.map(function (e) {
        var by = {};
        (e.voyages || []).forEach(function (v) { by[v.number] = v.bullets || []; });
        var nums = Object.keys(by).map(Number);
        return {
          name: e.name,
          url: e.url || '',
          slug: e.slug,
          parent: (e.parent && e.parent.slug) || null,
          kind: e.kind || '',
          by: by,
          last: nums.length ? Math.max.apply(null, nums) : 0
        };
      });
      if (t.nest) lanes = nest(lanes);
      else lanes.sort(function (a, b) { return b.last - a.last; });
      return { def: t, lanes: lanes };
    }).filter(function (t) { return t.lanes.length; });

    /* ---- DOM ---------------------------------------------------- */
    var controls = el('div', 'tb-controls');
    var coldOnly = toggle('Cold threads only');
    controls.appendChild(coldOnly.label);

    var legend = el('div', 'tb-legend');
    var lgU = el('span', null);
    lgU.appendChild(el('span', 'tb-legend-swatch is-unsynced'));
    lgU.appendChild(document.createTextNode('awaiting tracker sync'));
    legend.appendChild(lgU);
    legend.appendChild(el('span', null,
      'cold = no beat since V' + pad(dataMax)));
    controls.appendChild(legend);

    var wrap = el('div', 'tb-wrap');
    var grid = el('div', 'tb');
    // Fixed voyage columns rather than 1fr: a fraction stretches the few
    // early voyages to fill the board and pushes the later ones off screen,
    // which defeats the comparison the board exists for.
    grid.style.gridTemplateColumns =
      'minmax(170px, 210px) repeat(' + cols.length + ', 118px)';
    wrap.appendChild(grid);

    var panel = el('div', 'tb-panel');
    panel.appendChild(el('p', 'tb-panel-empty',
      'Pick any cell to read that lane’s beats for that voyage.'));

    mount.appendChild(controls);
    mount.appendChild(wrap);
    mount.appendChild(panel);

    var selected = null;

    function render() {
      grid.textContent = '';

      var corner = el('div', 'tb-corner');
      corner.appendChild(el('span', null, 'Lane'));
      grid.appendChild(corner);

      cols.forEach(function (c) {
        var h = el('div', 'tb-col' +
          (c.state === 'unsynced' ? ' is-unsynced' : '') +
          (c.state === 'ghost' ? ' is-ghost' : ''));
        h.appendChild(el('div', 'tb-col-num', 'V' + pad(c.number)));
        var sub = c.title || '';
        if (c.state === 'unsynced') sub = (sub || 'played') + ' · not synced';
        if (c.state === 'ghost') sub = (sub || 'planned') + ' · upcoming';
        h.appendChild(el('div', 'tb-col-title', sub));
        grid.appendChild(h);
      });

      tiers.forEach(function (tier) {
        var visible = tier.lanes.filter(function (l) {
          return !coldOnly.input.checked || isCold(l, dataMax);
        });

        var band = el('div', 'tb-tier' + (tier.def.open ? '' : ' is-closed'));
        band.appendChild(el('span', 'tb-tier-caret', '▾'));
        band.appendChild(el('span', null, tier.def.label));
        var coldN = tier.lanes.filter(function (l) { return isCold(l, dataMax); }).length;
        band.appendChild(el('span', 'tb-tier-count',
          tier.lanes.length + (coldN ? ' · ' + coldN + ' cold' : '')));
        band.setAttribute('role', 'button');
        band.tabIndex = 0;
        band.addEventListener('click', function () {
          tier.def.open = !tier.def.open; render();
        });
        band.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); band.click(); }
        });
        grid.appendChild(band);

        if (!tier.def.open) return;

        visible.forEach(function (lane) {
          var cold = isCold(lane, dataMax);
          var g = el('div', 'tb-lane' +
            (lane.parent ? ' is-child' : '') + (cold ? ' is-cold' : ''));
          var nm = el('div', 'tb-lane-name');
          if (lane.url) {
            var a = el('a', null, lane.name);
            a.href = lane.url;
            nm.appendChild(a);
          } else { nm.textContent = lane.name; }
          g.appendChild(nm);
          if (cold) {
            g.appendChild(el('div', 'tb-lane-note', lane.last
              ? 'cold since V' + pad(lane.last)
              : 'never on screen'));
          }
          grid.appendChild(g);

          cols.forEach(function (c) {
            var beats = lane.by[c.number];
            var cell = el('div', 'tb-cell' +
              (c.state === 'unsynced' ? ' is-unsynced' : '') +
              (beats && beats.length ? '' : ' is-empty'));
            if (beats && beats.length) {
              var b = el('button', 'tb-beat');
              b.type = 'button';
              var dots = el('span', 'tb-dots');
              for (var i = 0; i < Math.min(beats.length, 4); i++) {
                dots.appendChild(el('span', 'tb-dot'));
              }
              b.appendChild(dots);
              b.appendChild(el('span', 'tb-beat-n', String(beats.length)));
              b.setAttribute('aria-label',
                lane.name + ', V' + pad(c.number) + ', ' + beats.length + ' beats');
              if (selected && selected.lane === lane && selected.col === c.number) {
                b.classList.add('is-selected');
              }
              b.addEventListener('click', function () {
                selected = { lane: lane, col: c.number };
                showPanel(panel, lane, c, beats);
                render();
              });
              cell.appendChild(b);
            }
            grid.appendChild(cell);
          });
        });
      });
    }

    coldOnly.input.addEventListener('change', render);
    render();
  }

  /* ---- helpers -------------------------------------------------- */

  function showPanel(panel, lane, col, beats) {
    panel.textContent = '';
    var head = el('div', 'tb-panel-head');
    head.appendChild(el('span', 'tb-panel-name', lane.name));
    head.appendChild(el('span', 'tb-panel-where',
      'Voyage ' + pad(col.number) + (col.title ? ' · ' + col.title : '')));
    if (lane.url) {
      var a = el('a', 'tb-panel-link', 'Open the page →');
      a.href = lane.url;
      head.appendChild(a);
    }
    panel.appendChild(head);
    var ul = el('ul');
    beats.forEach(function (t) { ul.appendChild(el('li', null, t)); });
    panel.appendChild(ul);
  }

  // A lane is cold when its last beat predates the newest voyage the data
  // covers. Judged against the data's own reach, never against a column
  // the tracker has not reached - otherwise every lane reads cold at once.
  function isCold(lane, dataMax) {
    return dataMax > 0 && lane.last < dataMax;
  }

  // Children follow their parent; each group keeps the warmest first.
  function nest(lanes) {
    var bySlug = {};
    lanes.forEach(function (l) { bySlug[l.slug] = l; });
    var roots = lanes.filter(function (l) { return !l.parent || !bySlug[l.parent]; });
    var kids = {};
    lanes.forEach(function (l) {
      if (l.parent && bySlug[l.parent]) {
        (kids[l.parent] = kids[l.parent] || []).push(l);
      }
    });
    var warm = function (a, b) { return b.last - a.last; };
    roots.sort(warm);
    var out = [];
    roots.forEach(function (r) {
      out.push(r);
      (kids[r.slug] || []).sort(warm).forEach(function (k) { out.push(k); });
    });
    return out;
  }

  function toggle(text) {
    var label = el('label', 'tb-toggle');
    var input = document.createElement('input');
    input.type = 'checkbox';
    label.appendChild(input);
    label.appendChild(document.createTextNode(text));
    return { label: label, input: input };
  }

  function pad(n) { return String(n).padStart(3, '0'); }
})();
