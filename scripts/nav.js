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
  //   /caelestis/crew-logs/brief/v-001.html → 4 slashes → depth 2 → ../../

  var pathname = window.location.pathname;
  var slashes  = (pathname.match(/\//g) || []).length;
  var depth    = Math.max(0, slashes - 2);
  var base     = depth > 0 ? new Array(depth + 1).join('../') : './';

  // ── Icons ─────────────────────────────────────────────────────────────────

  var EXT_ICON = '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2H2a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V6M6 1h3v3M9 1L4.5 5.5"/></svg>';

  var MENU_ICON = '<svg viewBox="0 0 18 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="0" y1="1" x2="18" y2="1"/><line x1="0" y1="7" x2="18" y2="7"/><line x1="0" y1="13" x2="18" y2="13"/></svg>';

  // ── Sections ──────────────────────────────────────────────────────────────
  // To add, remove, or rename a section: edit this array only.

  var sections = [
    { key: 'crew-logs',          label: 'Crew Logs',          path: 'crew-logs/index.html'          },
    { key: 'crew-manifest',      label: 'Crew Manifest',      path: 'crew-manifest/index.html'      },
    { key: 'dossiers',           label: 'Dossiers',           path: 'dossiers/index.html'           },
    { key: 'navigation-records', label: 'Navigation Records', path: 'navigation-records/index.html' },
    { key: 'inventory',          label: 'Inventory',          path: 'inventory/index.html'          },
    { key: 'handouts',           label: 'Corps Protocols',    path: 'handouts/index.html'           },
    { key: 'spelljammer-nexus',  label: 'Spelljammer Nexus',  path: 'spelljammer-nexus/index.html'  },
  ];

  // External links shown at the bottom of the sidebar.
  // To add a link: { label: 'Name', href: 'https://...' }

  var extLinks = [
    { label: 'Take the Helm',   href: 'https://royek.foundryserver.com/game'      },
    { label: 'Scheduler',       href: 'https://rallly.co/invite/B8uUYlcm4oKB'    },
  ];

  // ── Inject critical positioning CSS (self-contained — doesn't depend on caelestis.css load order) ──

  var criticalCSS = [
    /* Sidebar positioning — only what's needed to prevent flash of unstyled nav */
    '.side-nav{position:fixed!important;left:0;top:0;bottom:0;width:220px;z-index:200;',
    'display:flex;flex-direction:column;overflow-y:auto;',
    'background:rgba(6,4,14,0.99);border-right:1px solid rgba(201,153,58,0.15);}',
    /* Toggle hidden by default */
    '.side-nav-toggle{display:none!important;position:fixed!important;z-index:201;}',
    /* Body offset */
    'body.with-sidebar{padding-left:220px;}',
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

  var sectionLinks = sections.map(function (s) {
    return '<a class="side-nav-link" href="' + base + s.path + '" data-section="' + s.key + '">' + s.label + '</a>';
  }).join('');

  var externalLinks = extLinks.map(function (l) {
    return '<a class="side-nav-ext-link" href="' + l.href + '" target="_blank" rel="noopener">' + l.label + ' ' + EXT_ICON + '</a>';
  }).join('');

  var html = [
    '<button class="side-nav-toggle" id="js-nav-toggle" aria-label="Toggle navigation">',
    MENU_ICON,
    '<span class="side-nav-toggle-label">Caelestis</span>',
    '</button>',
    '<nav class="side-nav" id="js-side-nav">',
    '  <div class="side-nav-head">',
    '    <a class="side-nav-logo" href="' + base + 'index.html">Caelestis</a>',
    '  </div>',
    '  <div class="side-nav-body">',
    sectionLinks,
    '    <div class="side-nav-divider"></div>',
    externalLinks,
    '  </div>',
    '</nav>',
  ].join('');

  // ── Inject ────────────────────────────────────────────────────────────────

  document.body.insertAdjacentHTML('afterbegin', html);
  document.body.classList.add('with-sidebar');

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

})();
