/* ═══════════════════════════════════════════════════════════
   search.js — per-section S.E.A.R.C.H. box
   Injects a compact, pre-scoped search box into a section's
   index page. Auto-detects which section it's in from the URL,
   filters the player Pagefind index to that section, and shows
   inline dropdown results. A footer link jumps to the full
   S.E.A.R.C.H. terminal, carrying the query + scope.

   Include on a section index page with:
     <script src="../scripts/search.js" defer></script>
   Optionally place an explicit mount point where the box should
   appear:  <div id="section-search-mount"></div>
   If no mount point exists, the box injects after the page header.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var STOPWORDS = {a:1,an:1,the:1,of:1,to:1,in:1,on:1,at:1,by:1,'for':1,and:1,or:1,but:1,is:1,was:1,it:1,as:1,'with':1,from:1,that:1,'this':1,his:1,her:1,their:1,they:1,them:1,he:1,she:1};
  function cleanExcerpt(html) {
    return html.replace(/<mark>(.*?)<\/mark>/g, function (m, w) {
      return STOPWORDS[w.trim().toLowerCase()] ? w : m;
    });
  }

  // Map top-level directory → display label. Determines scope.
  var SECTIONS = {
    'voyages': 'Crew Voyages',
    'logs': 'Crew Logs',
    'crew-manifest': 'Crew Manifest',
    'dossiers': 'Dossiers',
    'navigation-records': 'Navigation Records',
    'spelljammer-nexus': 'Spelljammer Nexus',
    'inventory': 'Crew Inventory',
    'handouts': 'Corps Protocols'
  };

  // Detect the section from the URL path.
  function detectSection() {
    var parts = location.pathname.replace(/^\//, '').split('/');
    for (var i = 0; i < parts.length; i++) {
      if (SECTIONS[parts[i]]) return parts[i];
    }
    return null;
  }

  var section = detectSection();
  if (!section) return; // Not on a recognised section page — do nothing.
  var label = SECTIONS[section];

  // Path back up to site root from this page (for /pagefind/ and /search/).
  // Section index pages sit one level deep, so root is '../'.
  var ROOT = '../';

  // Build the box.
  function buildBox() {
    var wrap = document.createElement('div');
    wrap.className = 'section-search';
    wrap.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>' +
      '<input type="text" id="ss-input" autocomplete="off" placeholder="Search ' + label + '\u2026">' +
      '<div class="section-search-results" id="ss-results"></div>';
    return wrap;
  }

  // Insert: prefer an explicit mount, else after the first header/.page-header, else top of main/body.
  function insertBox(box) {
    var mount = document.getElementById('section-search-mount');
    if (mount) { mount.appendChild(box); return; }
    var header = document.querySelector('.page-header, header, .content > h1, main > h1');
    if (header && header.parentNode) {
      header.parentNode.insertBefore(box, header.nextSibling);
    } else {
      var main = document.querySelector('main, .content') || document.body;
      main.insertBefore(box, main.firstChild);
    }
  }

  // Site root path for the current deployment (e.g. /caelestis/). Derived
  // from this page's location so it works on any GitHub Pages subpath.
  // Section index pages sit at <root>/<section>/index.html, so stripping the
  // last path segment twice would overshoot — instead strip the section dir.
  var SITE_ROOT = location.pathname.replace(new RegExp(section + '/(index\\.html)?$'), '');

  var pagefind = null;
  function loadPagefind() {
    if (pagefind) return Promise.resolve(pagefind);
    return import(ROOT + 'pagefind/pagefind.js')
      .then(function (pf) {
        pagefind = pf;
        return pf.options({ excerptLength: 25, baseUrl: SITE_ROOT }).then(function () {
          return pf.init().then(function () { return pf; });
        });
      })
      .catch(function (e) { console.error('Pagefind load failed:', e); return null; });
  }

  function sectionSubLabel(url) {
    var m = url.match(/voyage-\w+-(\d+)/);
    return m ? label + ' \u00b7 Voyage ' + m[1] : label;
  }

  function render(resultsEl, data, term) {
    if (!data.length) {
      resultsEl.innerHTML = '<div class="search-state">No records in ' + label + ' for \u201c' + term + '\u201d.</div>';
      return;
    }
    var html = data.map(function (d) {
      var title = (d.meta && d.meta.title) ? d.meta.title : d.url;
      // d.url already carries the site root via Pagefind's baseUrl option.
      return '<a class="result" href="' + d.url + '">' +
        '<div class="result-head"><div class="result-title">' + title + '</div>' +
        '<div class="result-path">' + sectionSubLabel(d.url) + '</div></div>' +
        '<div class="result-snippet">' + cleanExcerpt(d.excerpt) + '</div></a>';
    }).join('');
    // Footer link to the full terminal, scoped + pre-filled.
    html += '<a class="result" href="' + ROOT + 'search/index.html?scope=' + section +
      '&q=' + encodeURIComponent(term) + '" style="text-align:center;">' +
      '<div class="result-snippet" style="color:var(--gold-dim);">Open in S.E.A.R.C.H. \u2192</div></a>';
    resultsEl.innerHTML = html;
  }

  function wire(box) {
    var input = box.querySelector('#ss-input');
    var resultsEl = box.querySelector('#ss-results');
    var debounce;

    function close() { resultsEl.classList.remove('open'); }
    function open() { resultsEl.classList.add('open'); }

    input.addEventListener('input', function () {
      clearTimeout(debounce);
      var term = input.value.trim();
      if (!term) { close(); resultsEl.innerHTML = ''; return; }
      debounce = setTimeout(function () {
        loadPagefind().then(function (pf) {
          if (!pf) return;
          pf.search(term, { filters: { section: section } }).then(function (search) {
            open();
            if (!search.results.length) {
              render(resultsEl, [], term);
              return;
            }
            Promise.all(search.results.slice(0, 12).map(function (r) { return r.data(); }))
              .then(function (allData) {
                // Drop results whose only match is a stopword.
                var qTerms = term.toLowerCase().split(/\s+/).filter(Boolean);
                var meaningful = qTerms.filter(function (w) { return !STOPWORDS[w]; });
                var data = allData.filter(function (d) {
                  if (!meaningful.length) return true;
                  var marks = (d.excerpt.match(/<mark>(.*?)<\/mark>/g) || [])
                    .map(function (m) { return m.replace(/<\/?mark>/g, '').trim().toLowerCase(); });
                  if (marks.some(function (w) { return !STOPWORDS[w]; })) return true;
                  var plain = d.excerpt.replace(/<\/?mark>/g, '').toLowerCase();
                  return meaningful.some(function (w) { return plain.indexOf(w) !== -1; });
                });
                if (!data.length) { render(resultsEl, [], term); return; }
                render(resultsEl, data.slice(0, 8), term);
              });
          });
        });
      }, 180);
    });

    // Enter → jump to full terminal
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var term = input.value.trim();
        if (term) location.href = ROOT + 'search/index.html?scope=' + section + '&q=' + encodeURIComponent(term);
      }
    });

    // Click outside → close dropdown
    document.addEventListener('click', function (e) {
      if (!box.contains(e.target)) close();
    });
    input.addEventListener('focus', function () {
      if (resultsEl.innerHTML.trim()) open();
    });
  }

  function init() {
    var box = buildBox();
    insertBox(box);
    wire(box);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
