/* ════════════════════════════════════════════════════════════════
   dm-threadboard.js — the Voyages board

   ────────────────────────────────────────────────────────────────
   WHY THIS IS NOT A CHAPTER GRID

   The obvious build is a novel's flow board: time across, characters
   down, a cell per scene. It was tried and it is the wrong instrument,
   for three reasons that are about campaigns rather than about taste.

   1. A BOOK'S FUTURE IS AUTHORED; A CAMPAIGN'S IS NOT. Chapters exist
      before they are written, so a chapter grid has a right-hand half
      to plan into. Sessions only exist in the past. A session grid is
      therefore all history and no planning surface - it answers "what
      happened in V003" and the record below already does that better.

   2. "COLD" IS THREE DIFFERENT THINGS. A thread untouched since V001
      may be resolved, parked on purpose, or genuinely dropped. Flagging
      all three the same way produced eight warnings of which three were
      real, and a signal that cries eight times to mean three is noise.

   3. A CAMPAIGN'S DEBTS ARE WRITTEN DOWN. quests.json carries
      `objectives` with done flags. An objective the players still hold
      and nobody has moved is not a vibe - it is a fact, and it is the
      thing prep actually needs.

   ────────────────────────────────────────────────────────────────
   SO THE AXIS IS OBLIGATION, NOT CHRONOLOGY

     OWED    open objectives, nothing moved lately  -> act on this
     LIVE    open objectives, moved recently        -> in play
     QUIET   no open objectives, not moved lately   -> fine, dim it

   Only OWED is marked in alarm colour, because only OWED is a problem.
   A lane with nothing outstanding that has not appeared since V001 gets
   "last seen V001" in muted type: information, not an accusation. That
   distinction is the whole difference between a dashboard a DM trusts
   and one they learn to ignore.

   The matrix stays, underneath the ledger, because seeing the shape of
   a thread over time is still worth having. It is the evidence; the
   ledger is the finding.

   ────────────────────────────────────────────────────────────────
   GROUPINGS

   The same lanes, regrouped, answer different prep questions:

     Threads  what is running          -> what do I open with
     Crew     per PC, threads nested   -> who is being starved
     Status   owed / live / quiet      -> what is overdue

   ────────────────────────────────────────────────────────────────
   SOURCE

   Reads the record in data/ - the same files the player pages are
   rendered from - and the DM layer in prime/data/ for what sits behind
   it: which voyages exist past the record, and the beats the crew never
   saw. Nothing is entered here. Delete this file and the page is the
   archive it was.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var MOUNT = 'thread-board';

  var SETS = [
    { id: 'crew',    label: 'Crew',    file: 'player-characters.json' },
    { id: 'threads', label: 'Threads', file: 'quests.json', nest: true },
    { id: 'cast',    label: 'Cast',    file: 'npcs.json' },
    { id: 'places',  label: 'Places',  file: 'locations.json' },
    { id: 'things',  label: 'Things',  file: 'items.json' }
  ];

  // Voyages the record has not reached come from prime/data/voyages.json,
  // because from the record alone an absent column and an unplayed session
  // are indistinguishable. A played voyage the record lacks is "unsynced";
  // anything not yet played is a ghost column.
  function extraColumns(voyages, dataMax) {
    return (voyages || []).filter(function (v) { return v.number > dataMax; })
      .sort(function (a, b) { return a.number - b.number; })
      .map(function (v) {
        return {
          number: v.number,
          title: v.title || v.working || '',
          state: v.state === 'played' ? 'unsynced' : 'ghost',
          label: v.state === 'played' ? 'not synced' : v.state
        };
      });
  }

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
  function pad(n) { return String(n).padStart(3, '0'); }

  ready(function () {
    var mount = document.getElementById(MOUNT);
    if (!mount) return;
    var base = mount.getAttribute('data-base') || '../../../data/';
    var dmBase = mount.getAttribute('data-dm-base') || '../../data/';
    // Record urls are site-relative ("quests/x.html"), so they are resolved
    // against the site root rather than against this page.
    var site = base.replace(/data\/$/, '');

    function get(url, fallback) {
      return fetch(url)
        .then(function (r) { return r.ok ? r.json() : fallback; })
        .catch(function () { return fallback; });
    }

    Promise.all(SETS.map(function (s) { return get(base + s.file, []); }).concat([
      get(dmBase + 'voyages.json', []),
      get(dmBase + 'overlay.json', { entities: {}, lanes: [] })
    ])).then(function (got) {
      var overlay = got.pop(), voyages = got.pop();
      build(mount, got, window.CAELESTIS_VOYAGES || null,
        { site: site, prime: dmBase.replace(/data\/$/, ''), voyages: voyages, overlay: overlay });
    }).catch(function (e) {
      mount.appendChild(el('p', 'tb-empty', 'The board could not load its data. ' + e));
    });
  });

  /* ═══════════════════════════════════════════════════════════════
     MODEL
     ═══════════════════════════════════════════════════════════════ */

  function build(mount, raw, registry, dm) {
    var behind = (dm.overlay && dm.overlay.entities) || {};
    /* ---- columns ---- */
    var seen = {};
    raw.forEach(function (list) {
      list.forEach(function (e) {
        (e.voyages || []).forEach(function (v) { seen[v.number] = true; });
      });
    });
    var nums = Object.keys(seen).map(Number).sort(function (a, b) { return a - b; });
    var dataMax = nums.length ? nums[nums.length - 1] : 0;

    var cols = nums.map(function (n) {
      return {
        number: n,
        title: registry && registry[n - 1] ? registry[n - 1].title : '',
        state: 'synced'
      };
    });
    extraColumns(dm.voyages, dataMax).forEach(function (c) { cols.push(c); });

    /* ---- lanes ---- */
    var lanes = [];
    raw.forEach(function (list, i) {
      var set = SETS[i];
      list.forEach(function (e) {
        var by = {};
        (e.voyages || []).forEach(function (v) { by[v.number] = v.bullets || []; });
        var ns = Object.keys(by).map(Number);
        var objs = e.objectives || [];
        var open = objs.filter(function (o) { return !o.done; });
        lanes.push({
          set: set.id,
          setLabel: set.label,
          name: e.name,
          slug: e.slug,
          url: e.url ? dm.site + e.url : '',
          kind: e.kind || '',
          // DM-only beats for this record, by voyage, from the overlay.
          dm: dmBeats(behind[e.id]),
          parent: (e.parent && e.parent.slug) || null,
          // Who the thread belongs to. The tracker spells PC names a little
          // loosely here ("Bartholomew", "Casey"), so matching is by prefix
          // against the real roster rather than by equality.
          forRaw: (e.fields && e.fields['Related Character(s)']) || '',
          state: (e.fields && e.fields['Current State']) || '',
          objectives: objs,
          open: open,
          by: by,
          last: ns.length ? Math.max.apply(null, ns) : 0
        });
      });
    });

    // Lanes for what the crew has never met. They hold only DM beats, and
    // the group stays off the board until the overlay has one.
    ((dm.overlay && dm.overlay.lanes) || []).forEach(function (l) {
      var d = dmBeats(l);
      var ns = Object.keys(d).map(Number);
      lanes.push({
        set: 'offscreen', setLabel: 'Off-screen', name: l.name, slug: l.id,
        url: l.dossier ? dm.prime + l.dossier : '', kind: l.kind || '', parent: null,
        forRaw: '', state: l.state || '', objectives: [], open: [],
        by: d, dm: {}, offscreen: true,
        last: ns.length ? Math.max.apply(null, ns) : 0
      });
    });

    var pcNames = lanes.filter(function (l) { return l.set === 'crew'; })
      .map(function (l) { return l.name; });

    lanes.forEach(function (l) {
      l.forPCs = matchPCs(l.forRaw, pcNames);
      l.status = statusOf(l, dataMax);
    });

    var model = {
      cols: cols, lanes: lanes, dataMax: dataMax,
      pcNames: pcNames,
      bySlug: lanes.reduce(function (m, l) { m[l.slug] = l; return m; }, {})
    };

    render(mount, model);
  }

  function dmBeats(o) {
    var by = {};
    ((o && o.voyages) || []).forEach(function (v) { by[v.number] = v.beats || []; });
    return by;
  }

  // OWED is the only status that is a problem, so it is the only one that
  // gets alarm treatment. A lane with no outstanding objectives is quiet,
  // not late - Krik'Lit leaving at the swap is not a thread going cold.
  function statusOf(lane, dataMax) {
    var warm = dataMax > 0 && lane.last >= dataMax;
    if (lane.open.length) return warm ? 'live' : 'owed';
    return warm ? 'live' : 'quiet';
  }

  function matchPCs(raw, pcNames) {
    if (!raw) return [];
    var parts = raw.split(/\s*,\s*/).filter(Boolean);
    var out = [];
    parts.forEach(function (p) {
      var hit = pcNames.filter(function (n) {
        var a = n.toLowerCase(), b = p.toLowerCase();
        return a === b || a.indexOf(b) === 0 || b.indexOf(a) === 0;
      })[0];
      if (hit && out.indexOf(hit) < 0) out.push(hit);
    });
    return out;
  }

  /* ═══════════════════════════════════════════════════════════════
     VIEW
     ═══════════════════════════════════════════════════════════════ */

  function render(mount, m) {
    mount.textContent = '';

    var state = { group: 'threads', selected: null, openGroups: {} };

    var ledger = el('div', 'tb-ledger');
    var controls = el('div', 'tb-controls');
    var wrap = el('div', 'tb-wrap');
    var grid = el('div', 'tb');
    wrap.appendChild(grid);
    var panel = el('div', 'tb-panel');

    mount.appendChild(ledger);
    mount.appendChild(controls);
    mount.appendChild(wrap);
    mount.appendChild(panel);

    drawLedger(ledger, m);
    drawControls(controls, m, state, function () { drawGrid(grid, m, state, panel); });
    resetPanel(panel);
    drawGrid(grid, m, state, panel);
  }

  /* ---- the ledger: what the table is owed -------------------- */

  function drawLedger(root, m) {
    var owed = m.lanes.filter(function (l) { return l.status === 'owed'; })
      .sort(function (a, b) { return a.last - b.last; });
    var live = m.lanes.filter(function (l) { return l.status === 'live' && l.open.length; });

    var head = el('div', 'tb-ledger-head');
    head.appendChild(el('span', 'tb-ledger-title', 'What the table is owed'));
    head.appendChild(el('span', 'tb-ledger-sub',
      owed.length + ' outstanding · ' + live.length + ' in play · as of V' + pad(m.dataMax)));
    root.appendChild(head);

    if (!owed.length) {
      root.appendChild(el('p', 'tb-empty', 'Nothing outstanding.'));
      return;
    }

    owed.forEach(function (l) {
      var row = el('div', 'tb-debt');

      var age = m.dataMax - l.last;
      var tag = el('span', 'tb-debt-age' + (age >= 3 ? ' is-old' : ''),
        age + (age === 1 ? ' voyage' : ' voyages'));
      row.appendChild(tag);

      var body = el('div', 'tb-debt-body');
      var nameLine = el('div', 'tb-debt-name');
      if (l.url) {
        var a = el('a', null, l.name); a.href = l.url; nameLine.appendChild(a);
      } else { nameLine.textContent = l.name; }
      if (l.forPCs.length) {
        nameLine.appendChild(el('span', 'tb-debt-for', l.forPCs.join(' · ')));
      }
      body.appendChild(nameLine);

      var ul = el('ul', 'tb-debt-objs');
      l.open.forEach(function (o) { ul.appendChild(el('li', null, o.text)); });
      body.appendChild(ul);

      body.appendChild(el('div', 'tb-debt-last',
        'last moved V' + pad(l.last)));
      row.appendChild(body);
      root.appendChild(row);
    });
  }

  /* ---- controls ---------------------------------------------- */

  function drawControls(root, m, state, redraw) {
    var groups = [
      { id: 'threads', label: 'By thread', hint: 'what is running' },
      { id: 'crew',    label: 'By crew',   hint: 'who is being starved' },
      { id: 'status',  label: 'By status', hint: 'what is overdue' }
    ];
    var strip = el('div', 'tb-group-strip');
    strip.setAttribute('role', 'tablist');
    groups.forEach(function (g) {
      var b = el('button', 'tb-group', g.label);
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.title = g.hint;
      b.setAttribute('aria-selected', state.group === g.id ? 'true' : 'false');
      b.addEventListener('click', function () {
        state.group = g.id;
        state.openGroups = {};
        [].forEach.call(strip.children, function (c) {
          c.setAttribute('aria-selected', c === b ? 'true' : 'false');
        });
        redraw();
      });
      strip.appendChild(b);
    });
    root.appendChild(strip);

    // The key says what each term MEANS, not just which colour it is. A
    // legend that only maps colour to word still has to be memorised.
    var legend = el('div', 'tb-legend');
    [
      ['owed',  'open objectives, nothing moved lately'],
      ['live',  'open objectives, moved recently'],
      ['quiet', 'nothing outstanding']
    ].forEach(function (p) {
      var x = el('span', 'tb-legend-item');
      x.appendChild(el('span', 'tb-pip is-' + p[0]));
      x.appendChild(el('b', null, p[0]));
      x.appendChild(document.createTextNode(' — ' + p[1]));
      legend.appendChild(x);
    });
    var u = el('span', 'tb-legend-item');
    u.appendChild(el('span', 'tb-legend-swatch is-unsynced'));
    u.appendChild(document.createTextNode('voyage the tracker has not reached'));
    legend.appendChild(u);
    root.appendChild(legend);
  }

  /* ---- the matrix -------------------------------------------- */

  function groupLanes(m, state) {
    var out = [];
    if (state.group === 'crew') {
      m.pcNames.forEach(function (pc) {
        var lane = m.lanes.filter(function (l) {
          return l.set === 'crew' && l.name === pc;
        })[0];
        var threads = m.lanes.filter(function (l) {
          return l.set === 'threads' && l.forPCs.indexOf(pc) >= 0;
        }).sort(byStatus);
        var rows = (lane ? [lane] : []).concat(threads.map(function (t) {
          return Object.assign({}, t, { indent: true });
        }));
        out.push({
          key: 'pc-' + pc, label: pc, rows: rows,
          note: threads.length ? null : 'no personal thread'
        });
      });
      var shared = m.lanes.filter(function (l) {
        return l.set === 'threads' && l.forPCs.length === 0;
      }).sort(byStatus);
      if (shared.length) out.push({ key: 'unassigned', label: 'Unassigned threads', rows: shared });
      return out;
    }

    if (state.group === 'status') {
      [['owed', 'Owed'], ['live', 'Live'], ['quiet', 'Quiet']].forEach(function (p) {
        var rows = m.lanes.filter(function (l) {
          return l.status === p[0] && (l.set === 'threads' || l.set === 'crew');
        }).sort(function (a, b) { return a.last - b.last; });
        if (rows.length) out.push({ key: p[0], label: p[1], rows: rows });
      });
      ['cast', 'places', 'things'].forEach(function (sid) {
        var rows = m.lanes.filter(function (l) { return l.set === sid; }).sort(byStatus);
        if (rows.length) {
          out.push({
            key: sid,
            label: rows[0].setLabel,
            rows: rows,
            closed: true
          });
        }
      });
      return out;
    }

    // by thread — the sets in order, threads nested under their quest
    SETS.forEach(function (s) {
      var rows = m.lanes.filter(function (l) { return l.set === s.id; });
      if (!rows.length) return;
      rows = s.nest ? nest(rows, m) : rows.slice().sort(byStatus);
      out.push({ key: s.id, label: s.label, rows: rows, closed: s.id !== 'crew' && s.id !== 'threads' });
    });
    var off = m.lanes.filter(function (l) { return l.set === 'offscreen'; });
    if (off.length) out.push({ key: 'offscreen', label: 'Off-screen', rows: off });
    return out;
  }

  function byStatus(a, b) {
    var rank = { owed: 0, live: 1, quiet: 2 };
    if (rank[a.status] !== rank[b.status]) return rank[a.status] - rank[b.status];
    return b.last - a.last;
  }

  function nest(rows, m) {
    var present = {};
    rows.forEach(function (r) { present[r.slug] = true; });
    var roots = rows.filter(function (r) { return !r.parent || !present[r.parent]; }).sort(byStatus);
    var kids = {};
    rows.forEach(function (r) {
      if (r.parent && present[r.parent]) (kids[r.parent] = kids[r.parent] || []).push(r);
    });
    var out = [];
    roots.forEach(function (r) {
      out.push(r);
      (kids[r.slug] || []).sort(byStatus).forEach(function (k) {
        out.push(Object.assign({}, k, { indent: true }));
      });
    });
    return out;
  }

  function drawGrid(grid, m, state, panel) {
    grid.textContent = '';
    grid.style.gridTemplateColumns =
      'minmax(190px, 230px) repeat(' + m.cols.length + ', 112px)';

    var corner = el('div', 'tb-corner', 'Lane');
    grid.appendChild(corner);

    m.cols.forEach(function (c) {
      var h = el('div', 'tb-col' +
        (c.state === 'unsynced' ? ' is-unsynced' : '') +
        (c.state === 'ghost' ? ' is-ghost' : ''));
      h.appendChild(el('div', 'tb-col-num', 'V' + pad(c.number)));
      var sub = c.title || '';
      if (c.state === 'unsynced') sub = (sub || 'played') + ' · not synced';
      if (c.state === 'ghost') sub = (sub || 'planned') + ' · ' + (c.label || 'next');
      h.appendChild(el('div', 'tb-col-title', sub));
      grid.appendChild(h);
    });

    groupLanes(m, state).forEach(function (g) {
      if (state.openGroups[g.key] === undefined) state.openGroups[g.key] = !g.closed;
      var open = state.openGroups[g.key];

      var band = el('div', 'tb-tier' + (open ? '' : ' is-closed'));
      band.appendChild(el('span', 'tb-tier-caret', '▾'));
      band.appendChild(el('span', null, g.label));
      if (g.note) band.appendChild(el('span', 'tb-tier-note', g.note));
      var owed = g.rows.filter(function (r) { return r.status === 'owed'; }).length;
      band.appendChild(el('span', 'tb-tier-count',
        g.rows.length + (owed ? ' · ' + owed + ' owed' : '')));
      band.setAttribute('role', 'button');
      band.tabIndex = 0;
      band.addEventListener('click', function () {
        state.openGroups[g.key] = !open;
        drawGrid(grid, m, state, panel);
      });
      band.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); band.click(); }
      });
      grid.appendChild(band);
      if (!open) return;

      g.rows.forEach(function (lane) {
        grid.appendChild(laneCell(lane, m));
        m.cols.forEach(function (c) {
          grid.appendChild(beatCell(lane, c, m, state, panel, grid));
        });
      });
    });
  }

  function laneCell(lane, m) {
    var g = el('div', 'tb-lane is-' + lane.status + (lane.indent ? ' is-child' : ''));
    var nm = el('div', 'tb-lane-name');
    nm.appendChild(el('span', 'tb-pip is-' + lane.status));
    if (lane.url) {
      var a = el('a', null, lane.name); a.href = lane.url; nm.appendChild(a);
    } else { nm.appendChild(document.createTextNode(lane.name)); }
    g.appendChild(nm);

    // Every row states its own status in words. The pip repeats it in colour
    // rather than carrying it alone, so nothing here depends on remembering
    // what a colour meant.
    var note;
    if (!lane.last) {
      note = 'not yet on screen';
    } else if (lane.status === 'owed') {
      note = 'owed · ' + lane.open.length + ' open since V' + pad(lane.last);
    } else if (lane.status === 'live') {
      note = lane.open.length
        ? 'live · ' + lane.open.length + ' open'
        : 'live';
    } else {
      note = 'quiet · last V' + pad(lane.last);
    }
    g.appendChild(el('div', 'tb-lane-note is-' + lane.status, note));
    return g;
  }

  function beatCell(lane, c, m, state, panel, grid) {
    var beats = lane.by[c.number] || [];
    var hidden = (lane.dm && lane.dm[c.number]) || [];
    var cell = el('div', 'tb-cell' +
      (c.state === 'unsynced' ? ' is-unsynced' : '') +
      (beats.length || hidden.length ? '' : ' is-empty'));
    if (!beats.length && !hidden.length) return cell;

    // The count alone, not a row of dots. Dots here collided with the status
    // pip in the gutter - same shape, unrelated meaning - and a reader who
    // has to learn which dots are which is a reader the board has failed.
    var b = el('button', 'tb-beat is-' + lane.status);
    b.type = 'button';
    b.appendChild(el('span', 'tb-beat-n', String(beats.length)));
    b.appendChild(el('span', 'tb-beat-unit', beats.length === 1 ? 'beat' : 'beats'));
    // Beats the crew did not see are counted apart, so the number on the
    // left stays the number the players could repeat back.
    if (hidden.length) b.appendChild(el('span', 'tb-beat-dm', '+' + hidden.length + ' DM'));
    b.setAttribute('aria-label',
      lane.name + ', voyage ' + pad(c.number) + ', ' + beats.length + ' beats');
    if (state.selected && state.selected.slug === lane.slug && state.selected.col === c.number) {
      b.classList.add('is-selected');
    }
    b.addEventListener('click', function () {
      state.selected = { slug: lane.slug, col: c.number };
      showPanel(panel, lane, c, beats, hidden);
      drawGrid(grid, m, state, panel);
    });
    cell.appendChild(b);
    return cell;
  }

  /* ---- panel -------------------------------------------------- */

  function resetPanel(panel) {
    panel.textContent = '';
    panel.appendChild(el('p', 'tb-empty',
      'Pick any cell to read that lane’s beats for that voyage.'));
  }

  function showPanel(panel, lane, col, beats, hidden) {
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

    if (lane.state) {
      panel.appendChild(el('p', 'tb-panel-state', lane.state));
    }

    if (beats.length) {
      if (lane.offscreen) panel.appendChild(el('div', 'tb-panel-objs-label', 'Behind the screen'));
      var ul = el('ul');
      beats.forEach(function (t) { ul.appendChild(el('li', null, t)); });
      panel.appendChild(ul);
    }

    if (hidden && hidden.length) {
      panel.appendChild(el('div', 'tb-panel-objs-label', 'Behind the screen'));
      var hl = el('ul', 'tb-panel-dm');
      hidden.forEach(function (t) { hl.appendChild(el('li', null, t)); });
      panel.appendChild(hl);
    }

    if (lane.objectives.length) {
      panel.appendChild(el('div', 'tb-panel-objs-label', 'Objectives'));
      var ol = el('ul', 'tb-panel-objs');
      lane.objectives.forEach(function (o) {
        var li = el('li', o.done ? 'is-done' : 'is-open', o.text);
        ol.appendChild(li);
      });
      panel.appendChild(ol);
    }
  }
})();
