/* ════════════════════════════════════════════════════════════════
   dm-toc.js — auto-generated right-rail Table of Contents
   ----------------------------------------------------------------
   Opt-in: only runs on pages where <main class="dm-content"> also
   carries the class "has-toc". Walks the page's <h2> and <h3>
   headings, builds a sticky right-rail nav, and highlights the
   section currently in view (scroll-spy).

   No build step, no dependencies. Drop-in alongside dm-nav.js:
     <script src="../scripts/dm-toc.js" defer></script>   (depth 0, /prime/*)
     <script src="../../scripts/dm-toc.js" defer></script> (depth 1, /prime/voyages/*)

   Headings with class "dm-toc-skip" are excluded.
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

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 60);
  }

  var teardown = null;

  function build(main, scope) {
    if (teardown) { teardown(); teardown = null; }
    var stale = main.querySelector(':scope > nav.dm-toc');
    if (stale) stale.parentNode.removeChild(stale);

    // Collect h2 + h3 in document order, skipping opted-out headings.
    // `scope` is the active section panel when dm-sections.js has turned
    // the top level into tabs; the rail then covers the open tab only,
    // which is the only part of the page that can actually be scrolled to.
    var headings = Array.prototype.slice
      .call((scope || main).querySelectorAll(scope ? 'h3, h4' : 'h2, h3'))
      .filter(function (h) {
        return !h.classList.contains('dm-toc-skip');
      });

    // Fewer than two and the rail is noise; the page reclaims the column.
    // A rail with two or three entries costs a column of page width and
    // saves nobody a scroll - the section tab strip already got you here,
    // and what is left is short enough to see. It earns its place only
    // once a section is long enough to get lost in.
    if (headings.length < 4) {
      main.classList.add('toc-empty');
      return;
    }
    main.classList.remove('toc-empty');

    // Read heading text without the noise of inline <span> tag chips.
    // Headings like:  <h3 id="caelestis">Caelestis <span class="dm-tag is-canon">Home base</span></h3>
    // should appear in the TOC as "Caelestis", not "Caelestis Home base".
    function headingText(h) {
      var clone = h.cloneNode(true);
      var spans = clone.querySelectorAll('span');
      for (var i = 0; i < spans.length; i++) {
        spans[i].parentNode.removeChild(spans[i]);
      }
      return (clone.textContent || '').replace(/\s+/g, ' ').trim();
    }

    // Ensure every heading has a stable id to anchor to.
    var seen = {};
    headings.forEach(function (h) {
      if (!h.id) {
        var base = slugify(headingText(h)) || 'section';
        var id = base;
        var n = 2;
        while (document.getElementById(id) || seen[id]) {
          id = base + '-' + n++;
        }
        h.id = id;
      }
      seen[h.id] = true;
    });

    // Build the rail.
    var nav = document.createElement('nav');
    nav.className = 'dm-toc';
    nav.setAttribute('aria-label', 'On this page');

    var title = document.createElement('div');
    title.className = 'dm-toc-title';
    title.textContent = 'On this page';
    nav.appendChild(title);

    var ul = document.createElement('ul');
    var linkFor = {};

    headings.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = headingText(h);
      if (h.tagName.toLowerCase() === 'h3') {
        a.className = 'dm-toc-sub';
      }
      // Smooth-scroll without leaving a janky jump.
      a.addEventListener('click', function (e) {
        var target = document.getElementById(h.id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', '#' + h.id);
        }
      });
      li.appendChild(a);
      ul.appendChild(li);
      linkFor[h.id] = a;
    });

    nav.appendChild(ul);
    var old = main.querySelector(':scope > nav.dm-toc');
    if (old) old.parentNode.removeChild(old);
    main.appendChild(nav);

    // ── Scroll-spy ──
    // Highlight the heading nearest the top of the viewport. We track
    // intersection ratios and pick the topmost currently-visible heading;
    // when none are visible (mid-section), keep the last one above the fold.
    var visible = {};
    var lastActive = null;

    function setActive(id) {
      if (id === lastActive) return;
      if (lastActive && linkFor[lastActive]) {
        linkFor[lastActive].classList.remove('is-active');
      }
      if (id && linkFor[id]) {
        linkFor[id].classList.add('is-active');
      }
      lastActive = id;
    }

    function recompute() {
      // Among visible headings, choose the one highest on the page.
      var best = null;
      var bestTop = Infinity;
      headings.forEach(function (h) {
        if (visible[h.id]) {
          var top = h.getBoundingClientRect().top;
          if (top < bestTop) {
            bestTop = top;
            best = h.id;
          }
        }
      });

      if (best) {
        setActive(best);
        return;
      }

      // Nothing intersecting — find the last heading above the viewport top.
      var above = null;
      headings.forEach(function (h) {
        if (h.getBoundingClientRect().top < 120) {
          above = h.id;
        }
      });
      if (above) setActive(above);
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting;
        });
        recompute();
      },
      {
        // Top band of the viewport is the "active zone".
        rootMargin: '-10% 0px -75% 0px',
        threshold: 0,
      }
    );

    headings.forEach(function (h) {
      observer.observe(h);
    });

    // Initial state.
    recompute();

    teardown = function () {
      observer.disconnect();
      if (nav.parentNode) nav.parentNode.removeChild(nav);
      main.classList.remove('toc-empty');
    };
  }

  ready(function () {
    var main = document.querySelector('main.dm-content.has-toc');
    if (!main) return;

    // dm-sections.js fires this on every tab change.
    main.addEventListener('dm:sectionchange', function (e) {
      build(main, e.detail && e.detail.panel);
    });

    // Its first dispatch happens inside its own DOMContentLoaded handler,
    // which runs before this one, so the listener above would miss it. It
    // also records the active panel on the element, which does not race.
    // Absent that property, the page has no tabs and the rail covers it all.
    build(main, main.dmActivePanel || null);
  });
})();
