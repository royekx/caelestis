/**
 * Caelestis — a voyage's account, by section
 * ──────────────────────────────────────────
 * On a voyage page the Brief Account and the Full Account each carry their
 * section headings (.brief-heading, .chapter-break-text). Where a panel has
 * three or more, this adds a Sections list beside the text: each heading a
 * link that scrolls the panel to it, the one in view marked. The text and
 * the list share the panel's width, so a wide screen has no empty column;
 * a narrow one hides the list and centres the text (register.css § 15).
 *
 * Without this script the panels read as before: headings in the text.
 */
(function () {
  var panels = document.querySelectorAll('.account-panel');
  if (!panels.length) return;

  var slug = function (s) {
    return s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  panels.forEach(function (panel) {
    var body = panel.querySelector('.account-body');
    if (!body) return;
    var heads = body.querySelectorAll('.brief-heading, .chapter-break-text');
    if (heads.length < 3) return;

    var main = document.createElement('div');
    main.className = 'account-main';
    while (body.firstChild) main.appendChild(body.firstChild);

    var nav = document.createElement('nav');
    nav.className = 'account-toc';
    nav.setAttribute('aria-label', 'Sections');
    nav.setAttribute('data-pagefind-ignore', '');
    var list = '<div class="account-toc-label">Sections</div><ol>';
    var targets = [];
    // The Full Account opens before its first chapter break; that opening
    // is a section too.
    if (main.querySelector('.narrative') && !main.querySelector('.narrative > .chapter-break:first-child')) {
      var first = main.querySelector('.narrative > *');
      first.id = first.id || panel.id + '-opening';
      targets.push(first);
      list += '<li><a href="#' + first.id + '">Opening</a></li>';
    }
    heads.forEach(function (h) {
      var el = h.classList.contains('chapter-break-text') ? h.parentNode : h;
      el.id = el.id || panel.id + '-' + slug(h.textContent);
      targets.push(el);
      list += '<li><a href="#' + el.id + '">' + h.textContent + '</a></li>';
    });
    nav.innerHTML = list + '</ol>';

    body.appendChild(main);
    body.appendChild(nav);
    body.classList.add('has-toc');

    var links = nav.querySelectorAll('a');
    // The panel scrolls on a wide screen and the page on a narrow one; a
    // link moves whichever holds the text.
    function scroller() {
      return getComputedStyle(panel).overflowY === 'auto' ? panel : null;
    }
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var t = targets[i], s = scroller();
        if (s) s.scrollTo({ top: t.getBoundingClientRect().top - s.getBoundingClientRect().top + s.scrollTop - 16, behavior: 'smooth' });
        else t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    function mark() {
      var s = scroller(), top = s ? s.getBoundingClientRect().top : 0, cur = 0;
      targets.forEach(function (t, i) { if (t.getBoundingClientRect().top - top < 120) cur = i; });
      links.forEach(function (a, i) { a.classList.toggle('is-current', i === cur); });
    }
    panel.addEventListener('scroll', mark, { passive: true });
    window.addEventListener('scroll', mark, { passive: true });
    mark();
  });
})();
