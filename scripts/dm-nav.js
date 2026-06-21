/**
 * Caelestis — DM Space Navigation
 * ────────────────────────────────
 * Injects the DM-space sidebar nav. Parallel to scripts/nav.js but for /prime/.
 * To update the DM nav for ALL DM pages, edit only this file.
 *
 * Reuses .side-nav styling from styles/caelestis.css (visually identical to
 * the player nav). DM-specific additions live in styles/dm.css.
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

  // ── Path resolution ───────────────────────────────────────────────────────
  // Derives a relative base path from the current page's URL depth.
  // Base resolves to the /prime/ root.
  //
  //   /caelestis/prime/index.html               → /prime depth 0 → ./
  //   /caelestis/prime/continuum.html           → /prime depth 0 → ./
  //   /caelestis/prime/voyages/voyage-002.html  → /prime depth 1 → ../

  var pathname = window.location.pathname;

  // Find the position of '/prime/' in the path. Everything after it tells us
  // how deep we are relative to the prime root.
  var primeIdx = pathname.indexOf('/prime/');
  var afterPrime = primeIdx >= 0 ? pathname.slice(primeIdx + 7) : '';
  var primeDepth = (afterPrime.match(/\//g) || []).length;
  var base = primeDepth > 0 ? new Array(primeDepth + 1).join('../') : './';

  // For external-out links (player site, drive root), we need to escape /prime/
  // entirely. siteBase points one level above the prime root.
  var siteBase = base + '../';

  // ── Icons ─────────────────────────────────────────────────────────────────

  var EXT_ICON = '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2H2a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V6M6 1h3v3M9 1L4.5 5.5"/></svg>';

  var MENU_ICON = '<svg viewBox="0 0 18 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="0" y1="1" x2="18" y2="1"/><line x1="0" y1="7" x2="18" y2="7"/><line x1="0" y1="13" x2="18" y2="13"/></svg>';

  // ── Sections ──────────────────────────────────────────────────────────────
  // Internal links — pages inside /prime/.
  // To add, remove, or rename a section: edit this array only.

  var sections = [
    { key: 'continuum', label: 'Continuum', path: 'continuum.html'      },
    { key: 'campaign',  label: 'Campaign',  path: 'campaign.html'       },
    { key: 'world',     label: 'World',     path: 'world.html'          },
    { key: 'voyages',   label: 'Voyages',   path: 'voyages/index.html'  },
  ];

  // External links shown at the bottom of the sidebar.
  // Sheets, Drive docs, and a link back to the player site.
  // Sign Out is appended programmatically below — it clears the auth
  // sessionStorage and returns to the gate.

  var extLinks = [
    { label: 'Campaign Tracker',     href: 'https://docs.google.com/spreadsheets/d/1m4V9t2Z6hq0rjeUVZyTooNI8LMGOrd9gHezWY9o5-nY/edit' },
    { label: 'Character Tracker',    href: 'https://docs.google.com/spreadsheets/d/1UbXgV-SDR_gMit1qTJl9tqrBxZVr__Ef7W1MHQ1dYew/edit' },
    { label: 'Wildspace Tracker',    href: 'https://docs.google.com/spreadsheets/d/1Bwu1iG0Xd3SgFzoiP8Kuqo7DVGBR0H-qPo_G77dOg8E/edit' },
    { label: 'Wildspace Lore Bible', href: 'https://docs.google.com/document/d/1XjOAGPAWvDivwI2ThihwCG84ACk2eF_HKtzbxgbVTMQ/edit' },
    { label: 'Crew Logs',            href: 'https://docs.google.com/document/d/1BHK5I0sLMoEUCDQ89Qic1tqkup7KPMQbZ01Ko6vnnLU/edit' },
    { label: 'Drive Root',           href: 'https://drive.google.com/drive/folders/1suJFIN_LYDmRrkzjk3PkVv2pOmbJxE8r' },
    { label: 'Player Site',          href: siteBase + 'index.html' },
  ];

  // ── Inject critical positioning CSS ───────────────────────────────────────
  // Mirrors scripts/nav.js — self-contained, prevents flash of unstyled nav.

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

  var sectionLinks = sections.map(function (s) {
    return '<a class="side-nav-link" href="' + base + s.path + '" data-section="' + s.key + '">' + s.label + '</a>';
  }).join('');

  var externalLinks = extLinks.map(function (l) {
    return '<a class="side-nav-ext-link" href="' + l.href + '" target="_blank" rel="noopener">' + l.label + ' ' + EXT_ICON + '</a>';
  }).join('');

  // Sign Out is a button (no href) styled like an external link but visually
  // distinct. It clears the auth flag and sends the user back to the gate.
  var signOutLink = '<a class="side-nav-ext-link side-nav-signout" href="#" id="js-dm-signout">Sign out</a>';

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
  // Match the section key against the current pathname so the right link
  // highlights on each wiki page or voyages page.
  // Keys are bare ('continuum', 'campaign', 'world', 'voyages') — we match
  // either /key.html (top-level wiki page) or /key/ (voyages folder).

  document.querySelectorAll('.side-nav-link[data-section]').forEach(function (link) {
    var key = link.dataset.section;
    if (pathname.indexOf('/' + key + '.html') !== -1 ||
        pathname.indexOf('/' + key + '/')      !== -1) {
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

  // ── Sign Out ──────────────────────────────────────────────────────────────
  // Clears the auth sessionStorage flag (same key the gate uses) and sends
  // the user back to the gate at /prime/index.html.

  var signOut = document.getElementById('js-dm-signout');
  if (signOut) {
    signOut.addEventListener('click', function (e) {
      e.preventDefault();
      try { sessionStorage.removeItem('caelestis_continuum_auth'); } catch (err) { /* ignore */ }
      window.location.replace(base + 'index.html');
    });
  }

})();
