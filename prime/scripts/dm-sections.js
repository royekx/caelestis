/* ════════════════════════════════════════════════════════════════
   dm-sections.js — long DM pages read as one article
   ----------------------------------------------------------------
   The DM reference pages carry their sections as nested <details>.
   This turns them into one continuous article, the way a wiki page
   reads, with the "On this page" rail (dm-toc.js) as the navigation:

     - every <details class="dm-collapse-section"> is opened and stays
       open: its <summary> reads as a plain section heading
     - the page gets .is-article, which drops the boxes around sections
       (dm.css), and .has-toc, so the rail covers every h2 and h3
     - lists of rows meant to be scanned shut (data-keep-closed) and
       ordinary <details> rows are left as they are

   No markup changes: with this script absent the pages degrade to their
   <details> structure.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var main = document.querySelector('main.dm-content');
    if (!main) return;

    var sections = main.querySelectorAll('details.dm-collapse-section');
    for (var i = 0; i < sections.length; i++) {
      var s = sections[i];
      if (s.closest('[data-keep-closed]')) continue;
      s.open = true;
      s.classList.add('is-flat');
      var summary = s.querySelector(':scope > summary');
      if (summary) {
        summary.tabIndex = -1;
        summary.addEventListener('click', function (e) {
          // Section headings are headings, not toggles.
          if (!e.target.closest('a')) e.preventDefault();
        });
      }
    }

    main.classList.add('is-article', 'has-toc');

    // A hash pointing into the page lands once everything is open.
    if (location.hash.length > 1) {
      var deep = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (deep) setTimeout(function () { deep.scrollIntoView({ block: 'start' }); }, 0);
    }
  });
})();
