/* ════════════════════════════════════════════════════════════════
   dm-cells.js — embed an Opposition cell in the Campaign page
   ----------------------------------------------------------------
   The Campaign page reads across the arcs; each Opposition page reads
   down one column (prime/working/page-split.md, the matrix). Where the
   Campaign page wants a whole Opposition passage in line, it carries a
   plain link to that passage:

     <a class="dm-cell" href="../opposition/vecna.html#arc-1">Opposition: Vecna · Arc 1</a>

   This script fetches the linked page, lifts the body of the section
   with that id (its .dm-collapse-section-body), and puts it in place of
   the link under a bar with the cell's title and "Open full →".

     - links inside the cell are resolved against the page they came
       from, so "#failure-state" and "vthorama.html" still land
     - ids inside the cell are dropped, so the host page keeps unique ids
       and its rail (dm-toc.js) is untouched
     - each page is fetched once, however many cells it feeds

   Without this script, or if the fetch fails, the reader keeps the link,
   and `node scripts/data.js check` validates it like any other link. The
   inserted text is not in the static HTML, so Pagefind does not index
   the same passage twice.
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

  var cache = {};
  function page(url) {
    if (!cache[url]) {
      cache[url] = fetch(url, { credentials: 'same-origin' })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(function (html) { return new DOMParser().parseFromString(html, 'text/html'); });
    }
    return cache[url];
  }

  function embed(link) {
    var target = new URL(link.getAttribute('href'), location.href);
    var id = decodeURIComponent(target.hash.slice(1));
    if (!id) return;
    var pageUrl = target.href.split('#')[0];

    page(pageUrl).then(function (doc) {
      var section = doc.getElementById(id);
      var body = section && section.querySelector(':scope > .dm-collapse-section-body');
      if (!body) return;

      var content = document.importNode(body, true);
      content.className = 'dm-cell-body';
      content.removeAttribute('id');
      Array.prototype.forEach.call(content.querySelectorAll('[id]'), function (el) {
        el.removeAttribute('id');
      });
      Array.prototype.forEach.call(content.querySelectorAll('a[href]'), function (a) {
        var href = a.getAttribute('href');
        if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) return;
        a.setAttribute('href', new URL(href, pageUrl).href);
      });

      var box = document.createElement('div');
      box.className = 'dm-embed dm-cell-embed';
      var bar = document.createElement('div');
      bar.className = 'dm-embed-bar';
      var title = document.createElement('span');
      title.className = 'dm-embed-title';
      title.textContent = link.textContent;
      var out = document.createElement('a');
      out.className = 'dm-embed-out';
      out.href = target.href;
      out.textContent = 'Open full →';
      bar.appendChild(title);
      bar.appendChild(out);
      box.appendChild(bar);
      box.appendChild(content);
      link.parentNode.replaceChild(box, link);
    }).catch(function () { /* keep the plain link */ });
  }

  ready(function () {
    var links = document.querySelectorAll('main a.dm-cell[href*="#"]');
    for (var i = 0; i < links.length; i++) embed(links[i]);
  });
})();
