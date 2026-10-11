/* ════════════════════════════════════════════════════════════════
   dm-sections.js — top-level sections become a tab strip
   ----------------------------------------------------------------
   The DM reference pages carry 8 to 13 top-level <details> sections,
   each holding 2 to 30 subsections. Collapsed by default, a page loaded
   as a column of closed headings with no substance, and the "On this
   page" rail offered links to subsections that could not be reached
   because their parent was shut.

   This converts the top level into tabs and leaves everything inside the
   active tab expanded:

     - direct-child <details class="dm-collapse-section"> of .dm-content
       become tab panels, their <summary> replaced by a button in a strip
     - every nested <details> is opened, and stays collapsible by hand
     - a #hash pointing anywhere inside a panel selects that tab first,
       so deep links from other pages still land

   No markup changes: the pages keep their <details> structure, so with
   this script absent they degrade to exactly what they were before.

   Pairs with dm-toc.js, which rebuilds the rail on dm:sectionchange.
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

  // Heading text without the inline <span class="dm-tag"> chips, so a tab
  // reads "Zeniths & Monoliths" rather than "Zeniths & Monoliths Canon".
  function labelOf(section) {
    var summary = section.querySelector(':scope > summary');
    if (!summary) return '';
    var clone = summary.cloneNode(true);
    var chips = clone.querySelectorAll('.dm-tag, span');
    for (var i = 0; i < chips.length; i++) {
      chips[i].parentNode.removeChild(chips[i]);
    }
    return (clone.textContent || '').replace(/\s+/g, ' ').trim();
  }

  ready(function () {
    var main = document.querySelector('main.dm-content');
    if (!main) return;

    // Only the top level. :scope keeps nested sections out of it.
    var sections = Array.prototype.slice.call(
      main.querySelectorAll(':scope > details.dm-collapse-section')
    ).filter(function (s) { return !s.classList.contains('is-sub'); });

    // Two sections do not need a strip; the page reads fine as a stack.
    if (sections.length < 3) {
      openEverything(main);
      return;
    }

    var strip = document.createElement('div');
    strip.className = 'dm-sectabs';
    strip.setAttribute('role', 'tablist');
    strip.setAttribute('aria-label', 'Sections');

    var tabs = [];

    sections.forEach(function (section, i) {
      var label = labelOf(section) || ('Section ' + (i + 1));
      if (!section.id) section.id = 'section-' + (i + 1);

      var tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'dm-sectab';
      tab.setAttribute('role', 'tab');
      tab.textContent = label;
      tab.setAttribute('aria-controls', section.id);
      tab.addEventListener('click', function () { select(i, true); });
      tab.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var n = (i + d + sections.length) % sections.length;
        select(n, true);
        tabs[n].focus();
      });

      strip.appendChild(tab);
      tabs.push(tab);

      // The section becomes a panel: permanently open, summary hidden.
      section.open = true;
      section.classList.add('is-sectab-panel');
      section.setAttribute('role', 'tabpanel');
    });

    // The strip sits after the page header, before the first section.
    sections[0].parentNode.insertBefore(strip, sections[0]);

    function select(index, focusMove) {
      sections.forEach(function (s, i) {
        var on = i === index;
        s.hidden = !on;
        s.open = true;
        tabs[i].setAttribute('aria-selected', on ? 'true' : 'false');
        tabs[i].tabIndex = on ? 0 : -1;
      });
      tabs[index].scrollIntoView({ block: 'nearest', inline: 'nearest' });
      openEverything(sections[index]);
      // dm-toc.js reads this. Both scripts run inside DOMContentLoaded, so
      // the initial event can fire before the rail has a listener attached;
      // state on the element survives that race, an event does not.
      main.dmActivePanel = sections[index];
      if (focusMove) {
        history.replaceState(null, '', '#' + sections[index].id);
        main.dispatchEvent(new CustomEvent('dm:sectionchange', {
          bubbles: true,
          detail: { panel: sections[index] }
        }));
      }
    }

    // Which tab opens: whatever the hash points into, else the first.
    var start = 0;
    if (location.hash.length > 1) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) {
        for (var i = 0; i < sections.length; i++) {
          if (sections[i] === target || sections[i].contains(target)) {
            start = i;
            break;
          }
        }
      }
    }
    select(start, false);

    // A hash landing mid-panel needs the panel shown before it can scroll.
    if (start > 0 || location.hash.length > 1) {
      var deep = document.getElementById(location.hash.slice(1));
      if (deep && deep !== sections[start]) {
        setTimeout(function () {
          deep.scrollIntoView({ block: 'start' });
        }, 0);
      }
    }

    // In-page links to a section in another tab should switch to it.
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].hidden && (sections[i] === el || sections[i].contains(el))) {
          e.preventDefault();
          select(i, true);
          setTimeout(function () {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 0);
          return;
        }
      }
    });

    main.dispatchEvent(new CustomEvent('dm:sectionchange', {
      bubbles: true,
      detail: { panel: sections[start] }
    }));
  });

  // Subsections render expanded. They keep their marker, so anything read
  // can still be folded away by hand.
  function openEverything(root) {
    var inner = root.querySelectorAll('details');
    for (var i = 0; i < inner.length; i++) {
      // A list of rows meant to be scanned shut marks itself data-keep-closed.
      // Opening seventy tracker rows at once is the opposite of a glance.
      if (inner[i].closest('[data-keep-closed]')) continue;
      if (!inner[i].classList.contains('is-sectab-panel')) inner[i].open = true;
    }
  }
})();
