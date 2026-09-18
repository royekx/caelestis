/**
 * Caelestis — Shared Navigation
 * ─────────────────────────────
 * Injects the sidebar nav into any page that includes this script.
 * To update the nav for ALL pages, edit only this file.
 *
 * Usage (in <head> with defer):
 *   Depth 1:  <script src="../scripts/nav.js" defer></script>
 *   Depth 2:  <script src="../../scripts/nav.js" defer></script>
 */

(function () {
  'use strict';

  // ── Path resolution ───────────────────────────────────────────────────────
  // Derives a relative base path from the current page's URL depth.
  // Works for GitHub Pages at royekx.github.io/caelestis/
  //
  //   /caelestis/dossiers/mirt.html         → 3 slashes → depth 1 → ../
  //   /caelestis/voyages/voyage-001.html     → 3 slashes → depth 1 → ../

  var pathname = window.location.pathname;
  var slashes  = (pathname.match(/\//g) || []).length;
  var depth    = Math.max(0, slashes - 2);
  var base     = depth > 0 ? new Array(depth + 1).join('../') : './';

  // ── Icons ─────────────────────────────────────────────────────────────────

  var EXT_ICON = '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2H2a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V6M6 1h3v3M9 1L4.5 5.5"/></svg>';

  var MENU_ICON = '<svg viewBox="0 0 18 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="0" y1="1" x2="18" y2="1"/><line x1="0" y1="7" x2="18" y2="7"/><line x1="0" y1="13" x2="18" y2="13"/></svg>';
  var SEARCH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>';

  // ── Sections ──────────────────────────────────────────────────────────────
  // To add, remove, or rename a section: edit this array only.
  //
  // The split is by how a reader came to know a thing, not by subject:
  //   Crew Operations — what you do to run a session
  //   Crew Intel      — what this crew has learned, been given, or carries
  //   Fleet Records   — what anyone aboard would already know
  //
  // That is why Dossiers and Navigation Records sit under Intel: they are
  // acquired in play. The Nexus is ambient world knowledge, so it does not.
  //
  // An item with `href` is external and opens in a new tab; one with `path`
  // is internal and resolves against the page's depth.

  var groups = [
    {
      label: 'Crew Operations',
      items: [
        { key: 'bearings',      label: 'Current Bearing', path: 'bearings/index.html'                },
        { label: 'Plot the Next Voyage', href: 'https://rallly.co/invite/B8uUYlcm4oKB' },
        { label: 'Take the Helm',        href: 'https://royek.foundryserver.com/game'  }
      ]
    },
    {
      label: 'Crew Intel',
      items: [
        { key: 'voyages',            label: 'Voyages',            path: 'voyages/index.html'            },
        { key: 'quests',             label: 'Quest Board',        path: 'quests/index.html'             },
        { key: 'crew-manifest',      label: 'Manifest',           path: 'crew-manifest/index.html'      },
        { key: 'dossiers',           label: 'Dossiers',           path: 'dossiers/index.html'           },
        { key: 'navigation-records', label: 'Navigation Records', path: 'navigation-records/index.html' },
        { key: 'inventory',          label: 'Inventory',          path: 'inventory/index.html'          },
        { key: 'logs',               label: 'Logs',               path: 'logs/index.html'               }
      ]
    },
    {
      label: 'Fleet Records',
      items: [
        { key: 'factions',           label: 'Factions',           path: 'factions/index.html'           },
        { key: 'spelljammer-nexus',  label: 'Spelljammer Nexus',  path: 'spelljammer-nexus/index.html'  },
        { key: 'handouts',           label: 'Corps Protocols',    path: 'handouts/index.html'           },
        { key: 'search',             label: 'S.E.A.R.C.H.',       path: 'search/index.html'             }
      ]
    }
  ];


  // ── Command bar ───────────────────────────────────────────────────────────
  // Sticks to the top of every page. Two operations, then where the crew
  // stands. The strip trims with ellipsis by design — the caret opens the
  // detail it had to cut, and the strip itself links through to the full
  // bearing and its timeline.
  //
  // Data comes from data/bearing.js, which the publish step regenerates.
  // Without that file the bar renders operations only and nothing breaks.

  var CARET = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l4 4 4-4"/></svg>';

  function buildCommandBar() {
    var b = window.CAELESTIS_BEARING;
    var L = (b && b.links) || {};

    // Site-wide search. Index pages keep their own field inside their filter
    // block — that one narrows the list in front of you, this one leaves it.
    var search =
      '<form class="cb-search" id="js-cb-search" role="search" autocomplete="off">' +
        '<button type="submit" class="cb-search-go" aria-label="Search">' + SEARCH_ICON + '</button>' +
        '<input type="text" id="js-cb-search-input" ' +
          'placeholder="Query the archive \u2014 a name, a place, a thing you half remember\u2026" ' +
          'aria-label="Search all records">' +
        // Was a <span>, so only Enter ran the search. Both the glyph and the
        // tag are submit buttons now — the form's own handler does the rest.
        '<button type="submit" class="cb-search-tag">S.E.A.R.C.H.</button>' +
      '</form>';
    var helm = L.helm || 'https://royek.foundryserver.com/game';
    var sched = L.scheduler || 'https://rallly.co/invite/B8uUYlcm4oKB';

    var ops =
      '<div class="cb-ops">' +
        '<a class="cb-op" href="' + helm + '" target="_blank" rel="noopener">' +
          '<span class="cb-op-name">Take the Helm</span>' +
          '<span class="cb-op-note">Enter Foundry</span>' + EXT_ICON +
        '</a>' +
        '<a class="cb-op" href="' + sched + '" target="_blank" rel="noopener">' +
          '<span class="cb-op-name">Plot the Next Voyage</span>' +
          '<span class="cb-op-note">Open Scheduler</span>' + EXT_ICON +
        '</a>' +
      '</div>';

    if (!b) return '<div class="command-bar">' + search + ops + '</div>';

    var pad = function (n) { return ('00' + n).slice(-3); };
    var strip =
      '<div class="cb-strip">' +
        '<a class="cb-face" href="' + base + (L.bearing || 'bearings/index.html') + '">' +
          '<span class="cb-label">Current Bearing</span>' +
          '<span class="cb-cell"><span class="cb-key">Position</span>' +
            '<span class="cb-val">' + b.position +
            (b.posNote ? ' <span class="cb-note">' + b.posNote + '</span>' : '') + '</span></span>' +
          '<span class="cb-cell"><span class="cb-key">Last Voyage</span>' +
            '<span class="cb-val">' + pad(b.voyage) + ' \u00b7 ' + b.title + '</span></span>' +
          '<span class="cb-cell"><span class="cb-key">Outstanding</span>' +
            '<span class="cb-val">' + b.outstanding + '</span></span>' +
        '</a>' +
        '<button class="cb-expand" id="js-cb-expand" aria-expanded="false" aria-controls="js-cb-detail" aria-label="More detail">' +
          CARET + '</button>' +
      '</div>';

    var d = b.detail || {};
    var quests = (d.quests || []).map(function (q) {
      return '<a class="cb-quest" href="' + base + q.href + '">' + q.name +
             '<span class="cb-prog">' + q.progress + '</span></a>';
    }).join('');
    var met = (d.met || []).map(function (m) {
      return '<a class="cb-chip" href="' + base + m.href + '">' + m.name + '</a>';
    }).join('');

    var detail =
      '<div class="cb-detail" id="js-cb-detail" hidden>' +
        (d.consequence ? '<p class="cb-conseq">' + d.consequence + '</p>' : '') +
        (quests ? '<div class="cb-row"><span class="cb-key">Quests</span><div class="cb-quests">' + quests + '</div></div>' : '') +
        (met ? '<div class="cb-row"><span class="cb-key">Met</span><div class="cb-chips">' + met + '</div></div>' : '') +
        '<a class="cb-more" href="' + base + (L.bearing || 'bearings/index.html') + '">Full bearing and timeline \u203a</a>' +
      '</div>';

    return '<div class="command-bar">' + search + ops + strip + detail + '</div>';
  }

  // ── Inject critical positioning CSS (self-contained — doesn't depend on caelestis.css load order) ──

  var criticalCSS = [
    /* Sidebar positioning — only what's needed to prevent flash of unstyled nav */
    '.side-nav{position:fixed!important;left:0;top:0;bottom:0;width:244px;z-index:200;',
    'display:flex;flex-direction:column;overflow-y:auto;',
    'background:rgba(6,4,14,0.99);border-right:1px solid rgba(201,153,58,0.15);}',
    /* Toggle hidden by default */
    '.side-nav-toggle{display:none!important;position:fixed!important;z-index:201;}',
    /* Body offset */
    'body.with-sidebar{padding-left:244px;}',
    /* Mobile */
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

  var sectionLinks = groups.map(function (g) {
    var links = g.items.map(function (s) {
      if (s.href) {
        return '<a class="side-nav-ext-link" href="' + s.href + '" target="_blank" rel="noopener">' +
               s.label + ' ' + EXT_ICON + '</a>';
      }
      return '<a class="side-nav-link" href="' + base + s.path + '" data-section="' + s.key + '">' +
             s.label + '</a>';
    }).join('');
    return '<div class="side-nav-group-label">' + g.label + '</div>' + links;
  }).join('');


  var html = [
    '<button class="side-nav-toggle" id="js-nav-toggle" aria-label="Toggle navigation">',
    MENU_ICON,
    '<span class="side-nav-toggle-label">Caelestis</span>',
    '</button>',
    '<nav class="side-nav" id="js-side-nav">',
    '  <div class="side-nav-head">',
    '    <a class="side-nav-logo" href="' + base + 'hub.html">Caelestis</a>',
    '    <a class="side-nav-hub" href="' + base + 'hub.html">Terminal Hub</a>',
    '  </div>',
    '  <div class="side-nav-body">',
    sectionLinks,
    '  </div>',
    '</nav>',
  ].join('');

  // ── Inject ────────────────────────────────────────────────────────────────

  document.body.insertAdjacentHTML('afterbegin', html);
  document.body.classList.add('with-sidebar');

  // The bar goes INSIDE the page column, at its top.
  //
  // It used to be inserted after .page-header, which made it a sibling of
  // .content rather than a child. .content is max-width:900px centred;
  // .page-content has no max-width at all. So on every sub-page the bar
  // rendered the full width of the viewport while the page under it sat in a
  // 900px column — wider than its own page, and a different width on the hub
  // (which nests inside .hub at 1040px) than anywhere else. One insertion
  // point fixes both the overflow and the inconsistency.
  // Where the bar goes.
  //
  // .content carries a scrim (.content::before) that sits behind the page's
  // own material. The bar is not page material — it is the terminal chrome,
  // the same on every page — so it belongs outside that scrim, sitting on the
  // backdrop the way it does on the hub, which has no scrim at all.
  //
  // So on a normal page it is inserted BEFORE .content rather than inside it,
  // and given the column width itself (see .command-bar in caelestis.css).
  // On the hub the column is .hub and the title lives inside it, so the bar
  // goes under the title as before.
  var head = document.querySelector('.hub-head');
  var col = document.querySelector('.content');
  var term = document.querySelector('.terminal-wrap');   // S.E.A.R.C.H. names its column differently
  if (head) {
    head.insertAdjacentHTML('afterend', buildCommandBar());
  } else if (col) {
    col.insertAdjacentHTML('beforebegin', buildCommandBar());
  } else if (term) {
    term.insertAdjacentHTML('afterbegin', buildCommandBar());
  } else {
    document.body.insertAdjacentHTML('afterbegin', buildCommandBar());
  }

  var cbBtn = document.getElementById('js-cb-expand');
  if (cbBtn) {
    cbBtn.addEventListener('click', function () {
      var panel = document.getElementById('js-cb-detail');
      var open = cbBtn.getAttribute('aria-expanded') === 'true';
      cbBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel.hidden = open;
    });
  }

  // ── Active state ──────────────────────────────────────────────────────────

  document.querySelectorAll('.side-nav-link[data-section]').forEach(function (link) {
    if (pathname.indexOf('/' + link.dataset.section + '/') !== -1) {
      link.classList.add('active');
    }
  });

  // ── Mobile toggle ─────────────────────────────────────────────────────────

  var toggle = document.getElementById('js-nav-toggle');
  var nav    = document.getElementById('js-side-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('open');
    });

    // Close when clicking outside the nav on mobile
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });

    // Close when a nav link is clicked (navigating away)
    nav.querySelectorAll('.side-nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // ── Global search field ───────────────────────────────────────────────────
  // Submitting jumps to the full S.E.A.R.C.H. terminal with the query pre-run.

  var searchForm  = document.getElementById('js-cb-search');
  var searchInput = document.getElementById('js-cb-search-input');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var term = searchInput.value.trim();
      if (term) {
        window.location.href = base + 'search/index.html?q=' + encodeURIComponent(term);
      } else {
        window.location.href = base + 'search/index.html';
      }
    });
  }


  // ── Portrait lightbox ─────────────────────────────────────────────────────
  // Any .portrait-frame containing an image becomes click-to-expand. Runs on
  // every page that loads nav.js, so crew, dossiers, inventory and navigation
  // records all pick it up without per-page markup. Frames that already carry
  // their own handler (the Realmspace chart) are left alone.

  (function () {
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
  })();

})();
