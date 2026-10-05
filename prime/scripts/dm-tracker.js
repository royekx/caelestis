/* ════════════════════════════════════════════════════════════════
   dm-tracker.js — the Tracker

   The campaign tracker used to be a Google Sheet: seven tabs, one row
   per thing the crew had met, a column for what the players knew and a
   column for what they did not. It fell behind because it was a second
   place to type.

   This page is that sheet as a view. It enters nothing. It reads

     data/*.json              the record: what the crew knows
     prime/data/overlay.json  the DM layer over it, keyed by record id
     prime/data/voyages.json  which voyages exist, and how far the
                              record has got
     prime/data/dossiers.json which DM dossiers exist

   and lays the second over the first, row by row. The Voyages board
   reads the same files across time; this reads them as they stand.

   A row is the wiki's dossier row: closed, it is the scannable line;
   open, it is everything held about that record. One representation
   per entity, as WIKI-PAGE-GUIDE.md asks.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var MOUNT = 'tracker';

  // Each set says how its rows read when closed: the italic line under
  // the name, the sentence beside it, and what is already on show and so
  // does not need repeating among the facts.
  var SETS = [
    { id: 'quests', file: 'quests.json', noun: 'thread',
      role: function (r) { return r.fields['Related Character(s)'] || r.fields.Type || ''; },
      line: function (r) { return r.fields['Current State'] || ''; },
      shown: ['Related Character(s)', 'Current State'] },
    { id: 'pcs', file: 'player-characters.json', noun: 'crew member',
      role: function (r) { return join([r.fields.Species, r.fields.Class, r.fields.Station]); },
      line: function (r) { return r.fields['Current State'] || ''; },
      shown: ['Species', 'Class', 'Station', 'Current State'] },
    { id: 'npcs', file: 'npcs.json', noun: 'character',
      role: function (r) { return r.fields['Role (as known)'] || ''; },
      line: function (r) { return r.fields['Current State'] || ''; },
      shown: ['Role (as known)', 'Current State'] },
    { id: 'locations', file: 'locations.json', noun: 'place',
      role: function (r) { return join([r.kind, r.parent && ('in ' + r.parent.name)]); },
      line: function (r) { return r.fields['Overview (Player)'] || ''; },
      shown: ['Type', 'Overview (Player)'] },
    { id: 'items', file: 'items.json', noun: 'thing',
      role: function (r) { return join([r.fields.Type, r.fields['Held By'] && ('held by ' + r.fields['Held By'])]); },
      line: function (r) { return r.fields['Overview (Player)'] || ''; },
      shown: ['Type', 'Held By', 'Overview (Player)'] },
    { id: 'factions', file: 'factions.json', noun: 'faction',
      role: function (r) { return r.fields.Type || ''; },
      line: function (r) { return r.fields['Current State'] || ''; },
      shown: ['Type', 'Current State'] }
  ];

  function join(parts) {
    return parts.filter(Boolean).join(' · ');
  }
  function pad(n) { return String(n).padStart(3, '0'); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function link(cls, text, href) {
    var a = el('a', cls, text);
    a.href = href;
    return a;
  }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function get(url, fallback) {
    return fetch(url)
      .then(function (r) { return r.ok ? r.json() : fallback; })
      .catch(function () { return fallback; });
  }

  ready(function () {
    var mount = document.getElementById(MOUNT);
    if (!mount) return;
    var base = mount.getAttribute('data-base') || '../../data/';
    var dmBase = mount.getAttribute('data-dm-base') || '../data/';
    var ctx = {
      site: base.replace(/data\/$/, ''),       // record urls are site-relative
      prime: dmBase.replace(/data\/$/, '')     // dossier paths are prime-relative
    };

    Promise.all(SETS.map(function (s) { return get(base + s.file, null); }).concat([
      get(base + 'sessions.json', []),
      get(dmBase + 'voyages.json', []),
      get(dmBase + 'overlay.json', { entities: {}, lanes: [] }),
      get(dmBase + 'dossiers.json', [])
    ])).then(function (got) {
      ctx.dossiers = got.pop();
      ctx.overlay = got.pop();
      ctx.voyages = got.pop();
      ctx.sessions = got.pop();
      if (got.some(function (x) { return x === null; })) {
        mount.appendChild(el('p', 'tr-empty', 'The tracker could not load the record from ' + base + '.'));
        return;
      }
      build(mount, got, ctx);
    });
  });

  /* ═══════════════════════════════════════════════════════════════
     MODEL
     ═══════════════════════════════════════════════════════════════ */

  function build(mount, sets, ctx) {
    var recordMax = ctx.sessions.reduce(function (m, s) { return Math.max(m, s.number); }, 0);
    var dossierFor = {};
    ctx.dossiers.forEach(function (d) {
      (d.records || []).forEach(function (id) { dossierFor[id] = d.path; });
    });

    var rows = [];
    SETS.forEach(function (set, i) {
      sets[i].forEach(function (r) {
        var o = (ctx.overlay.entities || {})[r.id] || {};
        var touched = {};
        (r.voyages || []).forEach(function (v) { touched[v.number] = true; });
        (r.seen || []).concat(r.mentioned || []).forEach(function (n) { touched[n] = true; });
        var ns = Object.keys(touched).map(Number);
        rows.push({
          set: set, r: r, o: o,
          dossier: o.dossier || dossierFor[r.id] || null,
          touched: touched,
          last: ns.length ? Math.max.apply(null, ns) : 0,
          namedOnly: !(r.seen && r.seen.length) && !!(r.mentioned && r.mentioned.length),
          hay: haystack(r, o)
        });
      });
    });

    var state = { q: '', voyage: 0, open: {} };
    var model = { rows: rows, recordMax: recordMax, ctx: ctx };

    mount.appendChild(standing(model));
    var bar = controls(model, state, function () { draw(model, state); });
    mount.appendChild(bar);
    // Following a connection to a row the filter is hiding lifts the filter.
    model.clearFilter = function () {
      state.q = ''; state.voyage = 0;
      bar.querySelector('.tr-filter').value = '';
      [].forEach.call(bar.querySelectorAll('.tr-voyage'), function (c, i) { c.setAttribute('aria-pressed', i === 0 ? 'true' : 'false'); });
      draw(model, state);
    };
    draw(model, state);
    offscreen(model);
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
  }

  function haystack(r, o) {
    var parts = [r.name];
    Object.keys(r.fields || {}).forEach(function (k) { if (r.fields[k]) parts.push(String(r.fields[k])); });
    (r.voyages || []).forEach(function (v) { parts = parts.concat(v.bullets); });
    (r.objectives || []).forEach(function (x) { parts.push(x.text); });
    if (o.next) parts.push(o.next);
    (o.voyages || []).forEach(function (v) { parts = parts.concat(v.beats || []); });
    return parts.join(' \n ').toLowerCase();
  }

  /* ═══════════════════════════════════════════════════════════════
     VIEW
     ═══════════════════════════════════════════════════════════════ */

  /* ---- where the record stands -------------------------------- */

  // The Sheet went stale silently. This strip is the first thing on the
  // page so that cannot happen here: it says how far the record reaches,
  // and names any voyage that has been played and not yet written in.
  function standing(m) {
    var box = el('div', 'tr-standing');
    var latest = m.ctx.sessions.filter(function (s) { return s.number === m.recordMax; })[0];
    var behind = m.ctx.voyages.filter(function (v) { return v.state === 'played' && v.number > m.recordMax; });
    var next = m.ctx.voyages.filter(function (v) { return v.state === 'next'; })[0];
    var voyagesPage = m.ctx.prime + 'campaign/voyages/';

    function fact(cls, label, voyage, text, href) {
      var f = el('div', 'tr-fact' + (cls ? ' ' + cls : ''));
      f.appendChild(el('span', 'tr-fact-label', label));
      var body = el('span', 'tr-fact-body');
      if (voyage) body.appendChild(link('tr-fact-voyage', voyage, href));
      if (text) body.appendChild(document.createTextNode((voyage ? ' · ' : '') + text));
      f.appendChild(body);
      return f;
    }

    box.appendChild(fact('', 'Record through',
      m.recordMax ? 'V' + pad(m.recordMax) : null,
      latest ? latest.name : 'nothing on record', voyagesPage + '#v' + pad(m.recordMax)));
    behind.forEach(function (v) {
      box.appendChild(fact('is-behind', 'Played, not in the record', 'V' + pad(v.number),
        v.title || v.working || '', voyagesPage + '#' + (v.anchor || 'v' + pad(v.number))));
    });
    if (next) {
      box.appendChild(fact('is-next', 'Next', 'V' + pad(next.number),
        next.title || next.working || '', voyagesPage + '#' + (next.anchor || 'v' + pad(next.number))));
    }
    return box;
  }

  /* ---- controls ----------------------------------------------- */

  function controls(m, state, redraw) {
    var bar = el('div', 'tr-controls');

    var input = el('input', 'tr-filter');
    input.type = 'search';
    input.placeholder = 'Filter the record…';
    input.setAttribute('aria-label', 'Filter the record');
    input.addEventListener('input', function () { state.q = input.value.trim().toLowerCase(); redraw(); });
    bar.appendChild(input);

    var strip = el('div', 'tr-voyages');
    strip.setAttribute('role', 'group');
    strip.setAttribute('aria-label', 'Touched in voyage');
    function chip(n, label, title) {
      var b = el('button', 'tr-voyage', label);
      b.type = 'button';
      if (title) b.title = title;
      b.setAttribute('aria-pressed', state.voyage === n ? 'true' : 'false');
      b.addEventListener('click', function () {
        state.voyage = n;
        [].forEach.call(strip.children, function (c) { c.setAttribute('aria-pressed', c === b ? 'true' : 'false'); });
        redraw();
      });
      strip.appendChild(b);
    }
    chip(0, 'Any voyage');
    m.ctx.sessions.slice().sort(function (a, b) { return a.number - b.number; })
      .forEach(function (s) { chip(s.number, 'V' + pad(s.number), s.name); });
    bar.appendChild(strip);
    return bar;
  }

  /* ---- the sets ------------------------------------------------ */

  function draw(m, state) {
    SETS.forEach(function (set) {
      var host = document.querySelector('.tr-set[data-set="' + set.id + '"]');
      if (!host) return;
      host.textContent = '';
      var all = m.rows.filter(function (x) { return x.set === set; });
      var rows = all.filter(function (x) {
        if (state.q && x.hay.indexOf(state.q) === -1) return false;
        if (state.voyage && !x.touched[state.voyage]) return false;
        return true;
      });
      rows = set.id === 'quests' ? nested(rows) : rows.sort(order);

      var count = rows.length + (rows.length === all.length ? '' : ' of ' + all.length) + ' ' +
        set.noun + (all.length === 1 ? '' : 's');
      host.appendChild(el('div', 'tr-count', count));

      if (!rows.length) { host.appendChild(el('p', 'tr-empty', 'Nothing matches.')); return; }
      var list = el('div', 'dossier-list tr-list');
      rows.forEach(function (x) { list.appendChild(row(x, m, state)); });
      host.appendChild(list);
    });
  }

  // Most recently touched first, so the top of every list is what moved
  // last session. A thread sits directly under the quest it belongs to and
  // moves with it; a child whose parent is filtered out stands on its own.
  function order(a, b) {
    if (b.last !== a.last) return b.last - a.last;
    return a.r.name.localeCompare(b.r.name);
  }
  function nested(rows) {
    var present = {};
    rows.forEach(function (x) { present[x.r.id] = true; });
    var out = [];
    rows.filter(function (x) { return !x.r.parentId || !present[x.r.parentId]; }).sort(order)
      .forEach(function (root) {
        out.push(root);
        rows.filter(function (x) { return x.r.parentId === root.r.id; }).sort(order)
          .forEach(function (kid) { out.push(kid); });
      });
    return out;
  }

  function portrait(x) {
    var cell = el('div', 'dossier-portrait');
    var P = window.CaelestisPortraits;
    var slug = x.r.slug, parts = slug.split('-');
    var keys = [slug, parts[0], parts[parts.length - 1], parts.slice(0, 2).join('-')];
    var url = null;
    if (P) for (var i = 0; i < keys.length && !url; i++) url = P.urlFor(keys[i]);
    if (url) {
      var img = el('img');
      img.src = url; img.alt = ''; img.loading = 'lazy';
      cell.appendChild(img);
    } else {
      var words = x.r.name.replace(/^The\s+/i, '').split(/\s+/).filter(Boolean);
      var mono = words.length > 1 ? words[0].charAt(0) + words[words.length - 1].charAt(0) : (words[0] || '?').charAt(0);
      cell.appendChild(el('span', 'dossier-monogram', mono.toUpperCase()));
    }
    return cell;
  }

  function row(x, m, state) {
    var r = x.r, o = x.o;
    var d = el('details', 'dossier-row' + (r.parentId && x.set.id === 'quests' ? ' is-child' : ''));
    d.id = r.id;

    var s = el('summary');
    s.appendChild(portrait(x));

    var id = el('div', 'dossier-id');
    var name = el('div', 'dossier-name', r.name);
    if (r.kind && x.set.id === 'quests') name.appendChild(el('span', 'dm-tag is-stub', r.kind));
    id.appendChild(name);
    var role = x.set.role(r);
    if (role) id.appendChild(el('div', 'dossier-role', role));
    s.appendChild(id);

    s.appendChild(el('div', 'dossier-detail', x.set.line(r)));

    var meta = el('div', 'tr-meta');
    if (r.progress) meta.appendChild(el('span', 'tr-meta-main', r.progress.done + ' of ' + r.progress.total));
    else if (r.fields.Status) meta.appendChild(el('span', 'tr-meta-main', r.fields.Status));
    if (o.urgency) meta.appendChild(el('span', 'tr-meta-dm',
      /^(low|medium|high)$/i.test(o.urgency) ? o.urgency + ' urgency' : o.urgency));
    meta.appendChild(el('span', 'tr-meta-last',
      x.last ? 'V' + pad(x.last) + (x.namedOnly ? ' · named' : '') : 'not yet on screen'));
    s.appendChild(meta);
    d.appendChild(s);

    // The body is built the first time the row opens. Seventy rows of
    // bullets nobody has asked for is a slow page and a long one.
    var built = false;
    d.addEventListener('toggle', function () {
      // Remembered, so that typing in the filter does not shut a row that is
      // being read: every redraw rebuilds the list from the model.
      if (state) state.open[r.id] = d.open;
      if (!d.open || built) return;
      built = true;
      d.appendChild(body(x, m));
    });
    if (state && state.open[r.id]) d.open = true;
    return d;
  }

  function body(x, m) {
    var r = x.r, o = x.o;
    var b = el('div', 'dossier-row-body');
    var dl = el('dl');
    function section(label, node, cls) {
      var dt = el('dt', cls || null, label);
      var dd = el('dd', cls || null);
      dd.appendChild(node);
      dl.appendChild(dt); dl.appendChild(dd);
    }

    // What the crew knows -------------------------------------------------
    var ov = r.fields['Overview (Player)'];
    if (ov && x.set.shown.indexOf('Overview (Player)') === -1) section('Overview', el('p', null, ov));

    var facts = el('div', 'tr-facts');
    Object.keys(r.fields).forEach(function (k) {
      var v = r.fields[k];
      if (v == null || v === '' || k === 'Overview (Player)' || x.set.shown.indexOf(k) !== -1) return;
      facts.appendChild(el('span', 'tr-fact-key', k));
      facts.appendChild(el('span', 'tr-fact-val', String(v)));
    });
    if (facts.children.length) section('On record', facts);

    if (r.objectives && r.objectives.length) {
      var ol = el('ul', 'tr-objs');
      r.objectives.forEach(function (ob) { ol.appendChild(el('li', ob.done ? 'is-done' : 'is-open', ob.text)); });
      section('Objectives', ol);
    }

    if (r.rewards && r.rewards.length) {
      var rw = el('div', 'tr-facts');
      r.rewards.forEach(function (x) {
        rw.appendChild(el('span', 'tr-fact-key', x.name));
        rw.appendChild(el('span', 'tr-fact-val', x.note || ''));
      });
      section('Rewards', rw);
    }

    var record = el('div', 'tr-record');
    (r.voyages || []).slice().sort(function (a, c) { return c.number - a.number; }).forEach(function (v, i) {
      var block = el('details', 'tr-voyage-block');
      if (i === 0) block.open = true;
      var sum = el('summary', null, 'Voyage ' + pad(v.number));
      sum.appendChild(el('span', 'tr-voyage-n', v.bullets.length + (v.bullets.length === 1 ? ' beat' : ' beats')));
      block.appendChild(sum);
      var ul = el('ul');
      v.bullets.forEach(function (t) { ul.appendChild(el('li', null, t)); });
      block.appendChild(ul);
      record.appendChild(block);
    });
    if (record.children.length) section('What the crew knows', record);

    // Behind the screen ---------------------------------------------------
    var dm = el('div', 'tr-dm');
    if (o.urgency) { dm.appendChild(el('span', 'tr-fact-key', 'Urgency')); dm.appendChild(el('span', 'tr-fact-val', o.urgency)); }
    if (o.next) { dm.appendChild(el('span', 'tr-fact-key', 'Next beat')); dm.appendChild(el('span', 'tr-fact-val', o.next)); }
    if (o.note) { dm.appendChild(el('span', 'tr-fact-key', 'Note')); dm.appendChild(el('span', 'tr-fact-val', o.note)); }
    (o.voyages || []).slice().sort(function (a, c) { return c.number - a.number; }).forEach(function (v) {
      dm.appendChild(el('span', 'tr-fact-key', 'V' + pad(v.number)));
      var ul = el('ul', 'tr-fact-val');
      (v.beats || []).forEach(function (t) { ul.appendChild(el('li', null, t)); });
      dm.appendChild(ul);
    });
    if (dm.children.length) section('Behind the screen', dm, 'is-dm');

    // Connections ---------------------------------------------------------
    var related = (r.links || []).concat(r.items || [])
      .concat(r.parent ? [{ name: r.parent.name, slug: r.parent.slug, type: r.type }] : []);
    if (related.length) {
      var chips = el('div', 'tr-chips');
      var seen = {};
      related.forEach(function (l) {
        var target = m.rows.filter(function (y) { return l.id ? y.r.id === l.id : (y.r.type === l.type && y.r.slug === l.slug); })[0];
        if (!target || seen[target.r.id]) return;
        seen[target.r.id] = true;
        var chip = link('tr-chip', l.name, '#' + target.r.id);
        // dm-sections.js switches to the tab the target sits in and scrolls
        // to it. Opening the row is the part it cannot know to do.
        chip.addEventListener('click', function () {
          if (!document.getElementById(target.r.id) && m.clearFilter) m.clearFilter();
          var t = document.getElementById(target.r.id);
          if (t) t.open = true;
        });
        chips.appendChild(chip);
      });
      if (chips.children.length) section('Connections', chips);
    }

    b.appendChild(dl);

    var out = el('div', 'tr-out');
    if (r.url) out.appendChild(link(null, 'Player page →', m.ctx.site + r.url));
    if (x.dossier) out.appendChild(link(null, 'DM dossier →', m.ctx.prime + x.dossier));
    out.appendChild(el('span', 'tr-id', r.id));
    b.appendChild(out);
    return b;
  }

  /* ---- off-screen ---------------------------------------------- */

  // What the crew has never met has no record, by rule. It is listed here
  // so the page still answers "where is everything": overlay lanes first,
  // then every DM dossier that belongs to no record.
  function offscreen(m) {
    var host = document.querySelector('.tr-set[data-set="offscreen"]');
    if (!host) return;
    var lanes = m.ctx.overlay.lanes || [];
    var unmet = m.ctx.dossiers.filter(function (d) { return !(d.records && d.records.length); });
    host.appendChild(el('div', 'tr-count', lanes.length + ' lane' + (lanes.length === 1 ? '' : 's') +
      ' · ' + unmet.length + ' dossier' + (unmet.length === 1 ? '' : 's') + ' with no record'));

    if (lanes.length) {
      var list = el('div', 'dossier-list tr-list');
      lanes.forEach(function (l) {
        var d = el('details', 'dossier-row');
        d.id = l.id;
        var s = el('summary');
        var cell = el('div', 'dossier-portrait');
        cell.appendChild(el('span', 'dossier-monogram', l.name.replace(/^The\s+/i, '').charAt(0).toUpperCase()));
        s.appendChild(cell);
        var id = el('div', 'dossier-id');
        id.appendChild(el('div', 'dossier-name', l.name));
        if (l.kind) id.appendChild(el('div', 'dossier-role', l.kind));
        s.appendChild(id);
        s.appendChild(el('div', 'dossier-detail', l.state || ''));
        var ns = (l.voyages || []).map(function (v) { return v.number; });
        var meta = el('div', 'tr-meta');
        meta.appendChild(el('span', 'tr-meta-last', ns.length ? 'V' + pad(Math.max.apply(null, ns)) : 'no beats yet'));
        s.appendChild(meta);
        d.appendChild(s);
        var b = el('div', 'dossier-row-body');
        var dm = el('div', 'tr-dm');
        (l.voyages || []).slice().sort(function (a, c) { return c.number - a.number; }).forEach(function (v) {
          dm.appendChild(el('span', 'tr-fact-key', 'V' + pad(v.number)));
          var ul = el('ul', 'tr-fact-val');
          (v.beats || []).forEach(function (t) { ul.appendChild(el('li', null, t)); });
          dm.appendChild(ul);
        });
        b.appendChild(dm);
        if (l.dossier) {
          var out = el('div', 'tr-out');
          out.appendChild(link(null, 'DM dossier →', m.ctx.prime + l.dossier));
          b.appendChild(out);
        }
        d.appendChild(b);
        list.appendChild(d);
      });
      host.appendChild(list);
    }

    if (unmet.length) {
      var chips = el('div', 'tr-chips');
      unmet.forEach(function (d) { chips.appendChild(link('tr-chip', d.name, m.ctx.prime + d.path)); });
      host.appendChild(chips);
    }
  }

  /* ---- deep links ---------------------------------------------- */

  // #NPC-… opens that row. The row may sit in a tab that is not showing,
  // so its tab is selected first; dm-sections.js labels each tab with the
  // id of the section it controls.
  function openFromHash() {
    var id = decodeURIComponent((location.hash || '').slice(1));
    if (!id) return;
    var target = document.getElementById(id);
    if (!target || !target.classList.contains('dossier-row')) return;
    var section = target.closest('details.dm-collapse-section');
    if (section) {
      var tab = document.querySelector('.dm-sectab[aria-controls="' + section.id + '"]');
      if (tab && tab.getAttribute('aria-selected') !== 'true') tab.click();
      section.open = true;
    }
    target.open = true;
    target.scrollIntoView({ block: 'start' });
  }
})();
