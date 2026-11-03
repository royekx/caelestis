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
  //   /caelestis/voyages/voyage-001.html          → 3 slashes → depth 1 → ../
  //   /caelestis/registry/dossiers/mirt.html      → 4 slashes → depth 2 → ../../

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
  // That is why Dossiers, Factions, Navigation Records and Vessels sit under
  // Intel: they are acquired in play. The Nexus is ambient world knowledge,
  // so it does not. Intel runs story, goals, people, organisations, places,
  // ships, things, then the crew's own notes.
  //
  // An item with `href` is external and opens in a new tab; one with `path`
  // is internal and resolves against the page's depth.

  var groups = [
    {
      label: 'Crew Operations',
      items: [
        { key: 'bearings',      label: 'Current Bearing', path: 'voyages/bearings/index.html', tip: 'Where the crew stands, what happened last, and what comes next.'        },
        { label: 'Take the Helm',        href: 'https://royek.foundryserver.com/game', tip: 'Join the game table in Foundry.'  },
        { label: 'Plot the Next Voyage', href: 'https://rallly.co/invite/B8uUYlcm4oKB', tip: 'Mark the days you can play next.' }
      ]
    },
    {
      label: 'Crew Intel',
      items: [
        { key: 'voyages',            label: 'Voyages',            path: 'voyages/index.html', tip: 'Every voyage on record: the recording, a quick account and the whole story.'            },
        { key: 'quests',             label: 'Quest Board',        path: 'quests/index.html', tip: 'Open quests and threads, and the next step on each.'             },
        { key: 'logs',               label: 'Logs',               path: 'voyages/logs/index.html', tip: 'The crew\u2019s own notes and running theories.'       },
        { key: 'crew-manifest',      label: 'Manifest',           path: 'registry/crew-manifest/index.html', tip: 'The crew\u2019s personnel files, with each cadet\u2019s private tabs.' },
        { key: 'dossiers',           label: 'Dossiers',           path: 'registry/dossiers/index.html', tip: 'Everyone the crew has met or heard named.'  },
        { key: 'factions',           label: 'Factions',           path: 'registry/factions/index.html', tip: 'The powers and organizations the crew has dealt with.'  },
        { key: 'inventory',          label: 'Inventory',          path: 'inventory/index.html', tip: 'What the crew carries, found or was given.'          },
        { key: 'vessels',            label: 'Vessels',            path: 'vessels/index.html', tip: 'Ships the crew has crewed, boarded or flown, with ship sheets.'            },
        { key: 'navigation-records', label: 'Navigation Records', path: 'navigation-records/index.html', tip: 'Charted systems and the places the crew has been.' }
      ]
    },
    {
      label: 'Fleet Records',
      items: [
        { key: 'spelljammer-nexus',  label: 'Spelljammer Nexus',  path: 'spelljammer-nexus/index.html', tip: 'The Academy\u2019s library on the Fleet, the drift and how ships sail it.'  },
        { key: 'protocols',          label: 'Fleet Protocols',    path: 'protocols/index.html', tip: 'Manuals for how things are done aboard: ship rules and crew roles.'          },
        { key: 'search',             label: 'S.E.A.R.C.H.',       path: 'search/index.html', tip: 'Search every record the crew holds.'             }
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

  // The next voyage's real-world date, from data/bearing.js nextSession
  // ('YYYY-MM-DD' or 'YYYY-MM-DD HH:MM'), as "Saturday, November 21 · 7 pm".
  // tools/data.js holds the Current Bearing's banner to the same wording.
  function sessionText(v) {
    var m = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?$/.exec(v || '');
    if (!m) return '';
    var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    var out = DAYS[d.getUTCDay()] + ', ' + MONTHS[+m[2] - 1] + ' ' + (+m[3]);
    if (m[4]) {
      var h = +m[4], min = m[5];
      out += ' \u00b7 ' + (h % 12 || 12) + (min !== '00' ? ':' + min : '') + (h < 12 ? ' am' : ' pm');
    }
    return out;
  }

  // The bar, top to bottom: the two operations, the arc's goal (linking the
  // Current Bearing) with the Fleet date, a drop-down with the level-up
  // reminder and the All Hands line, and site-wide search at the foot.
  // searchOnly gives the search row alone, for the Current Bearing, whose
  // banner already carries everything else.
  function buildCommandBar(searchOnly) {
    var b = window.CAELESTIS_BEARING;
    var L = (b && b.links) || {};

    // Site-wide search. Index pages keep their own field inside their filter
    // block — that one narrows the list in front of you, this one leaves it.
    var search =
      '<form class="cb-search" id="js-cb-search" role="search" autocomplete="off">' +
        '<button type="submit" class="cb-search-go" aria-label="Search">' + SEARCH_ICON + '</button>' +
        '<input type="text" id="js-cb-search-input" ' +
          'placeholder="Query the archive — a name, a place, a thing you half remember…" ' +
          'aria-label="Search all records">' +
        // Was a <span>, so only Enter ran the search. Both the glyph and the
        // tag are submit buttons now — the form's own handler does the rest.
        '<button type="submit" class="cb-search-tag">S.E.A.R.C.H.</button>' +
      '</form>';
    if (searchOnly) return '<div class="command-bar cb-search-only">' + search + '</div>';

    var helm = L.helm || 'https://royek.foundryserver.com/game';
    var sched = L.scheduler || 'https://rallly.co/invite/B8uUYlcm4oKB';
    var when = sessionText(b && b.nextSession);

    var ops =
      '<div class="cb-ops">' +
        '<a class="cb-op" href="' + helm + '" target="_blank" rel="noopener">' +
          '<span class="cb-op-name">Take the Helm</span>' +
          '<span class="cb-op-note">Enter Foundry · the game table</span>' + EXT_ICON +
        '</a>' +
        '<a class="cb-op" href="' + sched + '" target="_blank" rel="noopener">' +
          '<span class="cb-op-name">Plot the Next Voyage</span>' +
          (when ? '<span class="cb-op-note cb-op-date">' + when + '</span>'
                : '<span class="cb-op-note cb-op-poll">Date not set · answer the poll</span>') + EXT_ICON +
        '</a>' +
      '</div>';

    if (!b) return '<div class="command-bar">' + ops + search + '</div>';

    var bearing = base + (L.bearing || 'voyages/bearings/index.html');
    var strip =
      '<div class="cb-strip">' +
        '<a class="cb-face" href="' + bearing + '">' +
          '<span class="cb-label">Current Bearing</span>' +
          '<span class="cb-cell cb-goal"><span class="cb-key">Goal</span>' +
            '<span class="cb-val">' + b.goal + '</span></span>' +
          (b.date ? '<span class="cb-cell cb-date"><span class="cb-key">Fleet date</span>' +
            '<span class="cb-val">' + b.date + '</span></span>' : '') +
        '</a>' +
        '<button class="cb-expand" id="js-cb-expand" aria-expanded="false" aria-controls="js-cb-detail" aria-label="More">' +
          CARET + '</button>' +
      '</div>';

    var hands = (b.allHands || []).map(function (h) { return '<span>' + h + '</span>'; }).join(' · ');
    var detail =
      '<div class="cb-detail" id="js-cb-detail" hidden>' +
        (b.levelUp ? '<p class="cb-level">Level up to ' + b.level + ' before you sail</p>' : '') +
        (hands ? '<a class="cb-hands" href="' + bearing + '#sail"><span class="cb-key">All hands</span>' +
          '<span class="cb-hands-list">' + hands + '</span></a>' : '') +
        '<a class="cb-more" href="' + bearing + '">Full bearing ›</a>' +
      '</div>';

    return '<div class="command-bar">' + ops + strip + detail + search + '</div>';
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
    /* The drawer opens below the toggle bar, which stays on top as its close control. */
    '.side-nav{top:44px;transform:translateX(-100%);transition:transform .28s ease;}',
    '.side-nav.open{transform:translateX(0);}',
    '.side-nav-toggle{display:flex!important;top:0;left:0;right:0;height:44px;}',
    '}'
  ].join('');

  var styleEl = document.createElement('style');
  styleEl.textContent = criticalCSS;
  document.head.appendChild(styleEl);

  // ── Build HTML ────────────────────────────────────────────────────────────

  // A section's one-line description rides on its link as data-tip and shows
  // as a tooltip on hover or keyboard focus (wired below, after the nav is in
  // the page). The sidebar scrolls, so the tip is one fixed element on <body>.
  function tipAttr(s) {
    return s.tip ? ' data-tip="' + s.tip.replace(/"/g, '&quot;') + '"' : '';
  }

  var sectionLinks = groups.map(function (g) {
    var links = g.items.map(function (s) {
      if (s.href) {
        return '<a class="side-nav-ext-link" href="' + s.href + '" target="_blank" rel="noopener"' + tipAttr(s) + '>' +
               s.label + ' ' + EXT_ICON + '</a>';
      }
      return '<a class="side-nav-link" href="' + base + s.path + '" data-section="' + s.key + '"' + tipAttr(s) + '>' +
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
    '    <a class="side-nav-logo" href="' + base + 'voyages/bearings/index.html">Caelestis</a>',
    '    <a class="side-nav-hub" href="' + base + 'voyages/bearings/index.html">Fleet Terminal</a>',
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
  //
  // A page opts out with data-no-command-bar on <body>. The bearing pages
  // (data-command-bar="search") take the search row alone: the Current
  // Bearing's banner is its command bar, and a voyage's bearing page is a
  // record of that voyage. It sits under the banner, or above the voyage
  // strip on a page with no banner.
  var head = document.querySelector('.hub-head');
  var col = document.querySelector('.content');
  var term = document.querySelector('.terminal-wrap');   // S.E.A.R.C.H. names its column differently
  var banner = document.querySelector('.bearing-banner');
  var noBar = document.body.hasAttribute('data-no-command-bar');
  if (document.body.getAttribute('data-command-bar') === 'search') {
    var strip = document.querySelector('.bearing-strip');
    if (banner) banner.insertAdjacentHTML('afterend', buildCommandBar(true));
    else if (strip) strip.insertAdjacentHTML('beforebegin', buildCommandBar(true));
  } else if (noBar) {
    // no command bar on this page
  } else if (head) {
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
      // On a phone the operations fold away with the detail.
      cbBtn.closest('.command-bar').classList.toggle('cb-open', !open);
    });
  }

  // ── Active state ──────────────────────────────────────────────────────────

  // A section's folder is its path less the file. Sections nest
  // (voyages/bearings/ inside voyages/), so the longest folder in the
  // page's path wins.
  var activeLink = null, activeLen = 0;
  document.querySelectorAll('.side-nav-link[data-section]').forEach(function (link) {
    var s = groups.reduce(function (a, g) { return a.concat(g.items || []); }, [])
      .filter(function (x) { return x.key === link.dataset.section; })[0];
    var dir = '/' + (s && s.path ? s.path.replace(/[^\/]*$/, '') : link.dataset.section + '/');
    if (pathname.indexOf(dir) !== -1 && dir.length > activeLen) { activeLink = link; activeLen = dir.length; }
  });
  if (activeLink) activeLink.classList.add('active');

  // ── Section tooltips ──────────────────────────────────────────────────────
  // Hover (after a short pause) or keyboard focus on a sidebar link shows its
  // data-tip beside it. Touch screens skip it: a tap navigates.
  var tipEl = document.createElement('div');
  tipEl.className = 'nav-tip';
  tipEl.id = 'js-nav-tip';
  tipEl.setAttribute('role', 'tooltip');
  tipEl.hidden = true;
  document.body.appendChild(tipEl);
  var tipTimer = null;
  function showTip(link) {
    var r = link.getBoundingClientRect();
    tipEl.textContent = link.dataset.tip;
    tipEl.hidden = false;
    tipEl.style.left = (r.right + 10) + 'px';
    tipEl.style.top = Math.max(8, Math.min(r.top + r.height / 2 - tipEl.offsetHeight / 2,
      window.innerHeight - tipEl.offsetHeight - 8)) + 'px';
    link.setAttribute('aria-describedby', 'js-nav-tip');
  }
  function hideTip(link) {
    clearTimeout(tipTimer);
    tipEl.hidden = true;
    if (link) link.removeAttribute('aria-describedby');
  }
  var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  document.querySelectorAll('.side-nav [data-tip]').forEach(function (link) {
    if (canHover) {
      link.addEventListener('mouseenter', function () {
        clearTimeout(tipTimer);
        tipTimer = setTimeout(function () { showTip(link); }, 350);
      });
      link.addEventListener('mouseleave', function () { hideTip(link); });
    }
    link.addEventListener('focus', function () { showTip(link); });
    link.addEventListener('blur', function () { hideTip(link); });
  });
  if (nav0()) nav0().addEventListener('scroll', function () { hideTip(); });
  function nav0() { return document.getElementById('js-side-nav'); }

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


  // ── Image lightbox ────────────────────────────────────────────────────────
  // Every image on the page can be clicked to view full size. One script,
  // scripts/lightbox.js, serves the player, FIA and DM pages.
  var lb = document.createElement('script');
  lb.src = base + 'scripts/lightbox.js';
  document.head.appendChild(lb);

})();
