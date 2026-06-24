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
     https://drive.google.com/drive/folders/1DEdQYRW2V3YpFDj8XZ2eKoSJF_eO7k1H

   The dossier helper expects a portrait URL of the form:
     https://lh3.googleusercontent.com/d/{fileId}
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Portrait map ──────────────────────────────────────────────────────────
  // Keys are kebab-case character identifiers (matching anchor ids where
  // possible). `fileId` is the Drive file ID; leave empty until populated.
  var PORTRAITS = {

    // ── PCs (The Crew) ──
    'bartholomew':   { name: 'Bartholomew Grayson', fileId: '' },
    'boogie':        { name: 'Boogie',              fileId: '' },
    'casey':         { name: 'Casey Geim',          fileId: '' },
    'gregory':       { name: 'Gregory',             fileId: '' },
    'sol':           { name: 'Sol Fortuna',         fileId: '' },
    'tumak':         { name: 'Tumak Swan',          fileId: '' },

    // ── Academy & Fleet ──
    'mirt':          { name: 'Mirt',                fileId: '' },
    'tarto':         { name: 'Boatswain Tarto',     fileId: '' },
    'saerthe':       { name: 'Saerthe Abyzine',     fileId: '' },
    'blip':          { name: 'Mr. Blip',            fileId: '' },
    'ryeback':       { name: 'Petty Officer Winston Ryeback', fileId: '' },
    'sorcur':        { name: 'Sorcur',              fileId: '' },
    'kip-pik':       { name: 'Kip & Pik',           fileId: '' },
    'rindle':        { name: 'Rindle Gearloft',     fileId: '' },

    // ── Cadets ──
    'miken':         { name: 'Miken Haverstance',   fileId: '' },
    'wizpop':        { name: 'Wizpop',              fileId: '' },

    // ── Order / Watchers ──
    'ezra':          { name: 'Ezra',                fileId: '' },

    // ── Network ──
    'vocath':        { name: 'Vocath',              fileId: '' },
    'qitru':         { name: 'Qitru',               fileId: '' },
    'crc':           { name: 'Crystalline Retrieval Construct', fileId: '' },

    // ── Deities & Cosmic Powers ──
    'beshaba':       { name: 'Beshaba',             fileId: '' },
    'tymora':        { name: 'Tymora',              fileId: '' },
    'astra':         { name: 'Astra',               fileId: '' },
    'polly':         { name: 'Polly',               fileId: '' },
    'zerathis':      { name: 'Zerathis',            fileId: '' },

    // ── Artifacts (treated as portrait-like for dossier consistency) ──
    'world-surveyor': { name: 'The World Surveyor', fileId: '' },

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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrate);
  } else {
    hydrate();
  }

  // Expose for debugging / future inline use.
  window.CaelestisPortraits = {
    map: PORTRAITS,
    urlFor: portraitUrl,
    monogramFor: monogramFor,
  };

})();
