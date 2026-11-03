/**
 * Caelestis — image lightbox
 * ──────────────────────────
 * Every image on the site can be clicked (or focused and Entered) to view it
 * full size. Loaded by scripts/nav.js on the player pages and FIA, and by
 * prime/scripts/dm-nav.js on the DM pages, so one file serves all three.
 *
 * What expands:
 *   - a framed image: .portrait-frame, .survey, .expandable, figure.plate
 *     (these also get a quiet "Tap to Expand" label under the frame);
 *   - any other <img> on the page, including ones scripts add later
 *     (portraits, runes, tab content).
 * What does not:
 *   - an image inside a link or button (the click already goes somewhere);
 *   - an image in the sidebar, the command bar or a page emblem;
 *   - an image drawn smaller than 48px (row avatars, icons);
 *   - an image or frame that opts out with data-no-expand, or a frame that
 *     wires its own handler (onclick, .map-thumb).
 * Clicks are delegated from the document, so images that arrive after load
 * work with no extra wiring.
 */
(function () {
  'use strict';
  if (window.__caeLightbox) return;
  window.__caeLightbox = true;

  var FRAMES = '.portrait-frame, .survey, .expandable, figure.plate';
  var SKIP = 'a, button, .side-nav, .side-nav-toggle, .command-bar, [id^="js-cb"], .page-emblem, .cae-lightbox, [data-no-expand]';
  var MIN = 48;

  var box = null, boxImg = null, lastFocus = null;

  // Drive thumbnails serve small by default; ask for a wide render instead.
  function fullSize(src) {
    if (!src || src.indexOf('googleusercontent.com') === -1) return src;
    return src.replace(/=[swh]\d+.*$/, '') + '=w1600';
  }

  function ensureBox() {
    if (box) return;
    box = document.createElement('div');
    box.className = 'cae-lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML = '<button class="cae-lightbox-close" type="button" aria-label="Close">Close ✕</button><img alt="">';
    document.body.appendChild(box);
    boxImg = box.querySelector('img');
    box.addEventListener('click', function (e) { if (e.target !== boxImg) close(); });
  }

  function open(img) {
    ensureBox();
    lastFocus = document.activeElement;
    boxImg.src = fullSize(img.currentSrc || img.getAttribute('src'));
    boxImg.alt = img.getAttribute('alt') || '';
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
    box.querySelector('.cae-lightbox-close').focus();
  }
  function close() {
    if (!box) return;
    box.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function frameOf(el) {
    var f = el.closest && el.closest(FRAMES);
    if (!f || f.hasAttribute('onclick') || f.classList.contains('map-thumb') || f.closest('[data-no-expand]')) return null;
    return f.querySelector('img') ? f : null;
  }

  function eligible(img) {
    if (!img || img.tagName !== 'IMG' || !img.getAttribute('src')) return false;
    if (img.closest(SKIP)) return false;
    var r = img.getBoundingClientRect();
    return r.width >= MIN && r.height >= MIN;
  }

  // The image a click or keypress on `el` should open, or null.
  function target(el) {
    if (!el || (el.closest && el.closest('.cae-lightbox'))) return null;
    var f = frameOf(el);
    if (f) return f.querySelector('img');
    var img = el.tagName === 'IMG' ? el : null;
    return eligible(img) ? img : null;
  }

  document.addEventListener('click', function (e) {
    var img = target(e.target);
    if (!img) return;
    e.preventDefault();
    open(img);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && box && box.classList.contains('open')) { close(); return; }
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var el = document.activeElement;
    if (!el || !el.classList || !el.classList.contains('cae-expandable')) return;
    var img = target(el.tagName === 'IMG' ? el : el.querySelector('img') || el);
    if (!img) return;
    e.preventDefault();
    open(img);
  });

  // Mark what can expand: a zoom cursor, keyboard focus, an accessible name,
  // and the label under framed images. Re-run when the page changes.
  function mark() {
    document.querySelectorAll(FRAMES).forEach(function (f) {
      if (f.classList.contains('cae-expandable') || !frameOf(f)) return;
      var img = f.querySelector('img');
      f.classList.add('cae-expandable');
      if (!f.matches('.portrait-frame')) f.classList.add('is-expandable');
      f.setAttribute('role', 'button');
      f.setAttribute('tabindex', '0');
      f.setAttribute('aria-label', 'Expand ' + (img.getAttribute('alt') || 'image'));
      var next = f.nextElementSibling;
      if (!next || !next.classList.contains('portrait-label')) {
        var label = document.createElement('div');
        label.className = 'portrait-label';
        label.textContent = 'Tap to Expand';
        f.parentNode.insertBefore(label, f.nextSibling);
      }
    });
    document.querySelectorAll('img:not(.cae-expandable)').forEach(function (img) {
      if (img.closest(FRAMES) || !eligible(img)) return;
      img.classList.add('cae-expandable', 'cae-zoomable');
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      if (!img.getAttribute('aria-label')) img.setAttribute('aria-label', 'Expand ' + (img.getAttribute('alt') || 'image'));
    });
  }

  var pending = null;
  function schedule() {
    if (pending) return;
    pending = setTimeout(function () { pending = null; mark(); }, 120);
  }
  function start() {
    mark();
    window.addEventListener('load', schedule);
    document.addEventListener('load', schedule, true);   // images finishing
    if (window.MutationObserver) {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'hidden', 'class'] });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
