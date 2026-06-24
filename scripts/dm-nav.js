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

  // ── Sections ──────────────────────────────────────────────────────────────
  // Internal links — pages inside /prime/.
  // To add, remove, or rename a section: edit this array only.
  //
  // Order: Campaign (+ Remaking, Voyages nested) / Cosmology / Realms / Factions & Characters.
  // a divider, then the trackable throughlines (The Remaking / Voyages).

  var sections = [
    { key: 'campaign',  label: 'Campaign',     path: 'campaign/'   },
    { key: 'remaking',  label: 'The Remaking', path: 'campaign/remaking/',     indent: true },
    { key: 'plot-hooks',label: 'Plot Hooks',   path: 'campaign/plot-hooks.html', indent: true },
    { key: 'what-if',   label: 'What If',      path: 'campaign/what-if.html',    indent: true },
    { key: 'voyages',   label: 'Voyages',      path: 'campaign/voyages/',     indent: true },
    { key: 'cosmology', label: 'Cosmology',    path: 'cosmology/'  },
    { key: 'realms',    label: 'Realms',       path: 'realms/'     },
    { key: 'factions',  label: 'Factions &amp; Characters', path: 'factions/' },
    { key: 'artifacts', label: 'Artifacts',    path: 'artifacts/'  },
  ];

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
    if (s.key === '__divider') {
      return '<div class="side-nav-divider"></div>';
    }
    var cls = 'side-nav-link' + (s.indent ? ' side-nav-link-indent' : '');
    return '<a class="' + cls + '" href="' + base + s.path + '" data-section="' + s.key + '" data-path="' + s.path + '">' + s.label + '</a>';
  }).join('');

  var externalLinks = extLinks.map(function (l) {
    return '<a class="side-nav-ext-link" href="' + l.href + '" target="_blank" rel="noopener">' + l.label + ' ' + EXT_ICON + '</a>';
  }).join('');

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
  // Active-state: match each section's full path against the current URL and
  // pick the MOST SPECIFIC (longest) match, so /campaign/remaking/ highlights
  // The Remaking, not its parent Campaign.
  (function () {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.side-nav-link[data-section]')
    );
    var best = null, bestLen = -1;
    links.forEach(function (link) {
      var p = link.dataset.path;          // e.g. "campaign/remaking/"
      if (!p) return;
      // Normalize: strip trailing index.html if present in the URL.
      var here = pathname;
      // The section is current if the URL contains "/<path>" (path already ends in /).
      var needle = '/' + p;
      if (here.indexOf(needle) !== -1 && p.length > bestLen) {
        best = link; bestLen = p.length;
      }
    });
    if (best) best.classList.add('active');
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

})();
