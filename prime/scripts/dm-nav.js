/**
 * Caelestis — DM Space Navigation
 * ────────────────────────────────
 * Injects the DM-space sidebar nav. Parallel to scripts/nav.js but for /prime/.
 * To update the DM nav for ALL DM pages, edit only this file.
 *
 * Reuses .side-nav styling from styles/caelestis.css (visually identical to
 * the player nav). DM-specific additions live in styles/dm.css.
 *
 * In-page navigation is handled separately by the right-rail TOC (dm-toc.js)
 * on pages that opt in with class "has-toc".
 *
 * Usage (in <head> with defer):
 *   /prime/index.html:           <script src="../scripts/dm-nav.js" defer></script>
 *   /prime/continuum.html:       <script src="../scripts/dm-nav.js" defer></script>
 *   /prime/campaign.html:        <script src="../scripts/dm-nav.js" defer></script>
 *   /prime/world.html:           <script src="../scripts/dm-nav.js" defer></script>
 *   /prime/voyages/*.html:       <script src="../../scripts/dm-nav.js" defer></script>
 */

(function () {
  'use strict';

  // ── Early guard: the DM nav must NEVER render on a player-facing page,
  // and it must NEVER render before the gate has authenticated the session.
  // Two checks, both must pass before any DOM injection happens.
  var SESSION_KEY = 'caelestis_continuum_auth';

  // 1. Must be inside /prime/. If somehow this script is loaded by a page
  //    outside /prime/ (player root, etc.), do nothing.
  if (window.location.pathname.indexOf('/prime/') === -1) {
    return;
  }

  // 2. Must be authenticated. The gate page (/prime/index.html) handles auth
  //    itself and does NOT include this script — so we only get here on a
  //    protected page. But if a non-authenticated visitor somehow lands here
  //    directly (deep link, stale tab, etc.), redirect to the gate without
  //    rendering anything.
  try {
    if (sessionStorage.getItem(SESSION_KEY) !== '1') {
      // Compute the gate URL from current depth and redirect.
      var pn = window.location.pathname;
      var pIdx = pn.indexOf('/prime/');
      var depth = (pn.slice(pIdx + 7).match(/\//g) || []).length;
      var gateBase = depth > 0 ? new Array(depth + 1).join('../') : './';
      window.location.replace(gateBase + 'index.html');
      return;
    }
  } catch (err) {
    // sessionStorage unavailable (private mode quirks, etc.) — fail closed.
    return;
  }

  // ── Path resolution ───────────────────────────────────────────────────────
  var pathname = window.location.pathname;
  var primeIdx = pathname.indexOf('/prime/');
  var afterPrime = primeIdx >= 0 ? pathname.slice(primeIdx + 7) : '';
  var primeDepth = (afterPrime.match(/\//g) || []).length;
  var base = primeDepth > 0 ? new Array(primeDepth + 1).join('../') : './';
  var siteBase = base + '../';

  // ── Icons ─────────────────────────────────────────────────────────────────
  var EXT_ICON = '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2H2a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V6M6 1h3v3M9 1L4.5 5.5"/></svg>';
  var MENU_ICON = '<svg viewBox="0 0 18 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="0" y1="1" x2="18" y2="1"/><line x1="0" y1="7" x2="18" y2="7"/><line x1="0" y1="13" x2="18" y2="13"/></svg>';
  var SEARCH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>';

  // ── Sections ──────────────────────────────────────────────────────────────
  // Internal links — pages inside /prime/.
  // To add, remove, or rename a section: edit this array only.
  //
  // Order: Campaign (+ Remaking, Voyages nested) / Cosmology / Realms / Factions & Characters.
  // a divider, then the trackable throughlines (The Remaking / Voyages).

  // Five groups, one for each Axiom colour (dm.css). The page takes its
  // group's colour as its accent, and each group label carries its own.
  //
  //   Play      — Determination — what you open at the table
  //   Story     — Consolidation — the campaign, the opposition, the timeline
  //   People    — Distinction   — the crew, everyone else, the factions
  //   World     — Expansion     — what is true regardless of who is in the room
  //   Reference — Dissolution   — terms and principles
  var groups = [
    {
      label: 'Play',
      axiom: 'determination',
      items: [
        { key: 'voyages',   label: 'Voyages',       path: 'campaign/voyages/' },
        { key: 'tracker',   label: 'Tracker',       path: 'tracker/'    },
        { key: 'plot-hooks',label: 'Plot Hooks',    path: 'campaign/plot-hooks.html' },
        { key: 'statblocks',label: 'Stat Blocks',   path: 'statblocks/' },
        { key: 'rules',     label: 'Rules',         path: 'rules/'      },
      ]
    },
    {
      label: 'Story',
      axiom: 'consolidation',
      items: [
        { key: 'campaign',  label: 'Campaign',      path: 'campaign/'   },
        { key: 'spine',     label: 'Spine',         path: 'campaign/spine.html',   indent: true },
        { key: 'what-if',   label: 'What If',       path: 'campaign/what-if.html', indent: true },
        { key: 'vecna',     label: 'Vecna',         path: 'opposition/vecna.html',    indent: true },
        { key: 'vthorama',  label: "Vth'orama",     path: 'opposition/vthorama.html', indent: true },
        { key: 'timeline',  label: 'Timeline',      path: 'timeline/'   },
      ]
    },
    {
      label: 'People',
      axiom: 'distinction',
      items: [
        { key: 'crew',      label: 'Crew',          path: 'crew/'       },
        { key: 'dossiers',  label: 'Dossiers',      path: 'dossiers/'   },
        { key: 'factions',  label: 'Factions',      path: 'factions/'   },
      ]
    },
    {
      label: 'World',
      axiom: 'expansion',
      items: [
        { key: 'cosmology', label: 'Cosmology',     path: 'cosmology/'  },
        { key: 'realms',    label: 'Locations',     path: 'locations/', also: ['realms/'] },
        { key: 'vessels',   label: 'Vessels',       path: 'vessels/'    },
        { key: 'artifacts', label: 'Artifacts',     path: 'artifacts/'  },
        { key: 'chart',     label: 'Chart',         path: 'chart/'      },
      ]
    },
    {
      label: 'Reference',
      axiom: 'dissolution',
      items: [
        { key: 'glossary',  label: 'Glossary',      path: 'glossary/'   },
        { key: 'principles',label: 'Principles',    path: 'principles.html' },
      ]
    },
  ];

  // Flattened for the active-link logic further down, which keys off paths.
  var sections = groups.reduce(function (all, g) { return all.concat(g.items); }, []);

  var extLinks = [
    { label: 'Player Site',          href: siteBase + 'index.html' },
  ];

  // ── Inject critical positioning CSS ───────────────────────────────────────
  var criticalCSS = [
    '.side-nav{position:fixed!important;left:0;top:0;bottom:0;width:220px;z-index:200;',
    'display:flex;flex-direction:column;overflow-y:auto;',
    'background:rgba(6,4,14,0.99);border-right:1px solid rgba(201,153,58,0.15);}',
    '.side-nav-toggle{display:none!important;position:fixed!important;z-index:201;}',
    'body.with-sidebar{padding-left:220px;}',
    '@media(max-width:768px){',
    'body.with-sidebar{padding-left:0!important;padding-top:52px!important;}',
    '.side-nav{transform:translateX(-100%);transition:transform .28s ease;}',
    '.side-nav.open{transform:translateX(0);}',
    '.side-nav-toggle{display:flex!important;top:0;left:0;right:0;height:44px;}',
    '}'
  ].join('');
  var styleEl = document.createElement('style');
  styleEl.textContent = criticalCSS;
  document.head.appendChild(styleEl);

  // ── Build HTML ────────────────────────────────────────────────────────────
  function linkFor(s) {
    var cls = 'side-nav-link' + (s.indent ? ' side-nav-link-indent' : '');
    return '<a class="' + cls + '" href="' + base + s.path + '" data-section="' + s.key + '" data-path="' + s.path + '">' + s.label + '</a>';
  }

  var sectionLinks = groups.map(function (g) {
    return '<div class="side-nav-group" data-axiom="' + g.axiom + '"><div class="side-nav-group-label">' + g.label + '</div>' + g.items.map(linkFor).join('') + '</div>';
  }).join('');

  var externalLinks = extLinks.map(function (l) {
    return '<a class="side-nav-ext-link" href="' + l.href + '" target="_blank" rel="noopener">' + l.label + ' ' + EXT_ICON + '</a>';
  }).join('');

  var signOutLink = '<a class="side-nav-ext-link side-nav-signout" href="#" id="js-dm-signout">Sign out</a>';

  var searchField =
    '<form class="side-nav-search" id="js-nav-search" role="search" autocomplete="off">' +
    SEARCH_ICON +
    '<input type="text" id="js-nav-search-input" placeholder="Search DM archive\u2026" aria-label="Search DM archive">' +
    '</form>';

  var html = [
    '<button class="side-nav-toggle" id="js-nav-toggle" aria-label="Toggle navigation">',
    MENU_ICON,
    '<span class="side-nav-toggle-label">Caelestis · DM</span>',
    '</button>',
    '<nav class="side-nav" id="js-side-nav">',
    '  <div class="side-nav-head">',
    '    <a class="side-nav-logo" href="' + base + 'hub.html">Caelestis · DM</a>',
    '  </div>',
    '  <div class="side-nav-body">',
    searchField,
    sectionLinks,
    '    <div class="side-nav-divider"></div>',
    externalLinks,
    '    <div class="side-nav-divider"></div>',
    signOutLink,
    '  </div>',
    '</nav>',
  ].join('');

  // ── Inject ────────────────────────────────────────────────────────────────
  document.body.insertAdjacentHTML('afterbegin', html);
  document.body.classList.add('with-sidebar');

  // ── Active state ──────────────────────────────────────────────────────────
  // Active-state: match each section's full path against the current URL and
  // pick the MOST SPECIFIC (longest) match, so /campaign/voyages/ highlights
  // Voyages, not its parent Campaign.
  (function () {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.side-nav-link[data-section]')
    );
    var best = null, bestLen = -1;
    links.forEach(function (link) {
      var p = link.dataset.path;          // e.g. "campaign/voyages/"
      if (!p) return;
      // Normalize: strip trailing index.html if present in the URL.
      var here = pathname;
      // The section is current if the URL contains "/<path>" (path already ends in /).
      // A section can also claim a folder it is moving out of (realms/ keeps Fonains until it moves to locations/).
      var sec = sections.filter(function (s) { return s.path === p; })[0];
      [p].concat((sec && sec.also) || []).forEach(function (q) {
        if (here.indexOf('/' + q) !== -1 && q.length > bestLen) {
          best = link; bestLen = q.length;
        }
      });
    });
    if (best) best.classList.add('active');
    // Each nav group carries an Axiom colour; the page takes its group's.
    var key = best && best.dataset.section;
    var group = groups.filter(function (g) {
      return g.items.some(function (s) { return s.key === key; });
    })[0];
    document.documentElement.dataset.axiom = (group && group.axiom) || 'dissolution';
  })();

  // ── Page navigation ───────────────────────────────────────────────────────
  // The prev/next bar under the title becomes two quieter pieces: the
  // eyebrow links back to the index, and prev/next sit at the foot of
  // the page, where you reach for them when you have finished reading.
  (function () {
    var main = document.querySelector('main.dm-content');
    var bar = main && main.querySelector(':scope > .voyage-nav-bar');
    if (!bar) return;
    var center = bar.querySelector('.voyage-nav-center');
    var header = main.querySelector(':scope > .dm-page-header');
    if (center && header) {
      // The eyebrow's first part ("DM Dossier", "Faction") becomes the link
      // back to the index; a page without an eyebrow gets one.
      var eyebrow = header.querySelector('.dm-page-eyebrow');
      if (!eyebrow) {
        eyebrow = document.createElement('div');
        eyebrow.className = 'dm-page-eyebrow';
        eyebrow.textContent = center.textContent.trim();
        header.insertBefore(eyebrow, header.firstChild);
      }
      var first = eyebrow.firstChild;
      if (first && first.nodeType === 3 && first.textContent.trim()) {
        var crumb = document.createElement('a');
        crumb.className = 'dm-crumb';
        crumb.href = center.getAttribute('href');
        crumb.title = center.textContent.trim();
        crumb.textContent = first.textContent.trim();
        eyebrow.replaceChild(crumb, first);
      }
      center.parentNode.removeChild(center);
    }
    bar.classList.add('is-foot');
    var foot = main.querySelector(':scope > .dm-footer');
    if (foot) main.insertBefore(bar, foot); else main.appendChild(bar);
  })();

  // ── Connections in their Axiom colours ───────────────────────────────────
  // Each chip takes the colour of the nav group its target belongs to
  // (a dossier jade, a place blue, an arc gold); each column heading takes
  // the colour most of its chips share.
  (function () {
    var cards = document.querySelectorAll('.xref-card');
    if (!cards.length) return;
    function axiomFor(href) {
      var u;
      try { u = new URL(href, window.location.href); } catch (e) { return null; }
      var i = u.pathname.indexOf('/prime/');
      if (i === -1) return null;
      var rel = u.pathname.slice(i + 7);
      var best = null, bestLen = -1;
      groups.forEach(function (g) {
        g.items.forEach(function (it) {
          [it.path].concat(it.also || []).forEach(function (q) {
            var hit = q.slice(-1) === '/' ? rel.indexOf(q) === 0 : rel === q;
            if (hit && q.length > bestLen) { best = g.axiom; bestLen = q.length; }
          });
        });
      });
      return best;
    }
    Array.prototype.forEach.call(cards, function (card) {
      Array.prototype.forEach.call(card.querySelectorAll('.xref-col'), function (col) {
        var count = {};
        Array.prototype.forEach.call(col.querySelectorAll('a.chip'), function (chip) {
          var ax = axiomFor(chip.getAttribute('href'));
          if (!ax) return;
          chip.dataset.axiom = ax;
          count[ax] = (count[ax] || 0) + 1;
        });
        var top = Object.keys(count).sort(function (a, b) { return count[b] - count[a]; })[0];
        var head = col.querySelector('.xref-col-head');
        if (top && head) head.dataset.axiom = top;
      });
    });
  })();

  // ── Mobile toggle ─────────────────────────────────────────────────────────
  var toggle = document.getElementById('js-nav-toggle');
  var nav    = document.getElementById('js-side-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
    nav.querySelectorAll('.side-nav-link').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // ── Sign Out ──────────────────────────────────────────────────────────────
  var signOut = document.getElementById('js-dm-signout');
  if (signOut) {
    signOut.addEventListener('click', function (e) {
      e.preventDefault();
      try { sessionStorage.removeItem('caelestis_continuum_auth'); } catch (err) { /* ignore */ }
      window.location.replace(base + 'index.html');
    });
  }

  // ── Global DM search field ────────────────────────────────────────────────
  var searchForm  = document.getElementById('js-nav-search');
  var searchInput = document.getElementById('js-nav-search-input');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var term = searchInput.value.trim();
      window.location.href = base + 'search.html' + (term ? '?q=' + encodeURIComponent(term) : '');
    });
  }

  // ── Portrait lightbox ──
  // Ported verbatim from scripts/nav.js, which the DM pages do not load.
  // Keep the two in step: a change there wants the same change here.
  // ── (original comment follows) ─────────────────────────────────────────────────────
  // Any .portrait-frame containing an image becomes click-to-expand. Runs on
  // every page that loads nav.js, so crew, dossiers, inventory and navigation
  // records all pick it up without per-page markup. Frames that already carry
  // their own handler (the Realmspace chart) are left alone.

  // On the player pages the <img> is in the markup, so nav.js can wire this
  // immediately. Here portraits.js injects the image on DOMContentLoaded, and
  // it is loaded after this file, so its handler runs after ours. Deferring
  // by a tick puts this behind it and the frames have images by then.
  function initLightbox() {
    var frames = document.querySelectorAll('.portrait-frame');
    var targets = [];

    frames.forEach(function (frame) {
      var img = frame.querySelector('img');
      if (!img) return;                                   // placeholder frames
      if (frame.hasAttribute('onclick')) return;          // already wired
      if (frame.classList.contains('map-thumb')) return;
      targets.push({ frame: frame, img: img });
    });

    // Charts, handouts and any other standing image expand the same way.
    document.querySelectorAll('.survey, .expandable, figure.plate').forEach(function (frame) {
      var img = frame.querySelector('img');
      if (!img || frame.hasAttribute('onclick')) return;
      frame.classList.add('is-expandable');
      targets.push({ frame: frame, img: img });
    });

    if (!targets.length) return;

    var box = document.createElement('div');
    box.className = 'cae-lightbox';
    box.innerHTML =
      '<button class="cae-lightbox-close" type="button" aria-label="Close">Close \u2715</button>' +
      '<img alt="">';
    document.body.appendChild(box);

    var boxImg = box.querySelector('img');

    // Drive thumbnails serve small by default — ask for a wide render instead.
    function fullSize(src) {
      if (src.indexOf('googleusercontent.com') === -1) return src;
      return src.replace(/=[swh]\d+.*$/, '') + '=w1600';
    }

    function open(t) {
      boxImg.src = fullSize(t.img.getAttribute('src'));
      boxImg.alt = t.img.getAttribute('alt') || '';
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      box.classList.remove('open');
      document.body.style.overflow = '';
    }

    targets.forEach(function (t) {
      t.frame.classList.add('cae-expandable');
      t.frame.setAttribute('role', 'button');
      t.frame.setAttribute('tabindex', '0');
      t.frame.setAttribute('aria-label', 'Expand ' + (t.img.getAttribute('alt') || 'portrait'));
      t.frame.addEventListener('click', function () { open(t); });
      t.frame.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(t); }
      });

      // A quiet caption, matching the Realmspace chart's affordance
      if (!t.frame.nextElementSibling ||
          !t.frame.nextElementSibling.classList.contains('portrait-label')) {
        var label = document.createElement('div');
        label.className = 'portrait-label';
        label.textContent = 'Tap to Expand';
        t.frame.parentNode.insertBefore(label, t.frame.nextSibling);
      }
    });

    box.addEventListener('click', function (e) { if (e.target !== boxImg) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box.classList.contains('open')) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(initLightbox, 0); });
  } else {
    setTimeout(initLightbox, 0);
  }

})();
