/* ════════════════════════════════════════════════════════════════
   portraits.js — centralized portrait map for the DM wiki
   ----------------------------------------------------------------
   Single source of truth for character/entity portraits used in
   dossier tables across the wiki. Fill in the `fileId` field with
   the Google Drive file ID for each entry. When fileId is empty,
   the dossier helper renders a styled monogram placeholder.

   To get a fileId from Drive: open the image, click Share → Copy
   link. The URL looks like:
     https://drive.google.com/file/d/THIS_PART_IS_THE_ID/view
   The fileId is the long alphanumeric string between /d/ and /view.

   Drive folder for all wiki images:
     (see the DM copy)

   The dossier helper expects a portrait URL of the form:
     https://lh3.googleusercontent.com/d/{fileId}
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Portrait map ──────────────────────────────────────────────────────────
  // Keys are kebab-case character identifiers (matching anchor ids where
  // possible). `fileId` is the Drive file ID; leave empty until populated.
  var PORTRAITS = {
    'mirt':          { name: 'Mirt',                fileId: '1D9Hh3pn8e_QbMAF69ABg4bld6kMHj4qr' },
    'tarto':         { name: 'Boatswain Tarto',     fileId: '13-w6epUMG5kO54FqZpJpelexFufDzu2W' }
  };

  // ── Rendering helpers ─────────────────────────────────────────────────────
  function portraitUrl(key) {
    var entry = PORTRAITS[key];
    if (!entry || !entry.fileId) return null;
    return 'https://lh3.googleusercontent.com/d/' + entry.fileId;
  }

  function monogramFor(key) {
    var entry = PORTRAITS[key];
    var name = (entry && entry.name) || key;
    var parts = name.split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '?';
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  // After DOM ready, walk every <td class="dossier-portrait" data-key="..."> and
  // fill it with either an <img> or a monogram fallback. This lets the HTML
  // declare just the key and stay terse.
  // Quest givers: .giver-face on a quest page, .row-giver-face on the board.
  // A data-key wins; otherwise the key comes from the dossier link beside it.
  var SLUG_KEY = { 'boatswain-tarto': 'tarto', 'saerthe-abizjn': 'saerthe', 'mr-blip': 'blip' };
  function keyFromSlug(slug) {
    if (!slug) return null;
    if (SLUG_KEY[slug]) return SLUG_KEY[slug];
    return PORTRAITS[slug] ? slug : null;
  }
  function hydrateGivers() {
    document.querySelectorAll('.giver-face, .row-giver-face').forEach(function (el) {
      if (el.querySelector('img')) return;
      var key = el.getAttribute('data-key');
      if (!key) {
        var strip = el.closest('.giver-strip, .row-giver, .log-title') || el.parentNode;
        var link = strip && strip.querySelector('a[href*="/dossiers/"], a[href*="dossiers/"]');
        if (link) {
          var slug = link.getAttribute('href').split('/').pop().replace('.html', '');
          key = keyFromSlug(slug);
        }
      }
      if (!key) return;
      var url = portraitUrl(key);
      if (url) {
        var img = document.createElement('img');
        img.src = url;
        img.alt = (PORTRAITS[key] && PORTRAITS[key].name) || key;
        img.loading = 'lazy';
        el.innerHTML = '';
        el.appendChild(img);
      } else if (!el.textContent.trim()) {
        el.innerHTML = '<span class="monogram">' + monogramFor(key) + '</span>';
      }
    });
  }

  function hydrate() {
    var cells = document.querySelectorAll('.dossier-portrait[data-key]');
    cells.forEach(function (cell) {
      var key = cell.getAttribute('data-key');
      var url = portraitUrl(key);
      if (url) {
        var img = document.createElement('img');
        img.src = url;
        img.alt = (PORTRAITS[key] && PORTRAITS[key].name) || key;
        img.loading = 'lazy';
        cell.appendChild(img);
      } else {
        var mono = document.createElement('span');
        mono.className = 'dossier-monogram';
        mono.textContent = monogramFor(key);
        cell.appendChild(mono);
      }
    });
  }

  function hydrateAll() { hydrate(); hydrateGivers(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrateAll);
  } else {
    hydrateAll();
  }

  // Expose for debugging / future inline use.
  window.CaelestisPortraits = {
    map: PORTRAITS,
    urlFor: portraitUrl,
    monogramFor: monogramFor,
  };

})();
