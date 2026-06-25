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
    'bartholomew':   { name: 'Bartholomew Grayson', fileId: '1ThgrZS-SGvWVIgGkvuwEm08oMyWActWF' },
    'boogie':        { name: 'Boogie',              fileId: '1_ZhT9rX4PrCKjegHu3Fc8gPnubg27Dqu' },
    'casey':         { name: 'Casey Geim',          fileId: '1XLFP2beF16GU12VCcwInFzpfTv3mjhaO' },
    'gregory':       { name: 'Gregory',             fileId: '1fzRY-WITl425-WA_HCThclBYYsRH4tun' },
    'sol':           { name: 'Sol Fortuna',         fileId: '1PT-7qxrvN3XUFPm3xAkUZ8IbToM5qsDo' },
    'tumak':         { name: 'Tumak Swan',          fileId: '1Qk-udGpqGpv2oZL9hahqjXgMRRCDrWnr' },

    // ── Academy & Fleet ──
    'mirt':          { name: 'Mirt',                fileId: '1D9Hh3pn8e_QbMAF69ABg4bld6kMHj4qr' },
    'tarto':         { name: 'Boatswain Tarto',     fileId: '13-w6epUMG5kO54FqZpJpelexFufDzu2W' },
    'saerthe':       { name: 'Saerthe Abyzine',     fileId: '1d7cDR1TYwEkaSuDVJC8bEOOJnoPT5S_D' },
    'blip':          { name: 'Mr. Blip',            fileId: '1gcMlDsoM10pyQ62SC6MG1UcLgWnepLcX' },
    'ryeback':       { name: 'Petty Officer Winston Ryeback', fileId: '1H3TaoPPU1F_Ocit_CLn1RCbdR2f-FnJl' },
    'sorcur':        { name: 'Sorcur',              fileId: '' },
    'kip-pik':       { name: 'Kip & Pik',           fileId: '' },
    'rindle':        { name: 'Rindle Gearloft',     fileId: '' },

    // ── Cadets ──
    'miken':         { name: 'Miken Haverstance',   fileId: '1naBafRe55ibGcJ7vcQ1vxHCpg0rhaKpk' },
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
    'world-surveyor': { name: 'The World Surveyor', fileId: '1PszrX48t8qd24acEGVLa87ir5AXlLJeR' },

    // ── Places ──
    'realmspace':    { name: 'Realmspace',          fileId: '1kI7fIgdRRyDrNaoauZBw_QsKadJmgHf8' },
    'caelestis':     { name: 'Caelestis',           fileId: '12jMujp5d1d3RehxqPDrtQiW33_iKM6_Q' },
    'caelestis-interior': { name: 'Caelestis (interior)', fileId: '1whKOZlbCNZru1zzQN715dif4OXJfL9bC' },
    'caelestis-sim-deck': { name: 'Caelestis (Simulation Deck)', fileId: '1fEQepmzGqnT7MN-qOD-dDjyOVdbd6Ds6' },
    'brig':          { name: 'The Brig',            fileId: '' },
    'sea-dock':      { name: 'Sea Dock',            fileId: '' },
    'sky-dock':      { name: 'Sky Dock',            fileId: '' },
    'weeping-goddess': { name: 'Weeping Goddess',   fileId: '' },
    'toril':         { name: 'Toril',               fileId: '' },
    'hcatha':        { name: 'H\'Catha',            fileId: '' },
    'virenspace':    { name: 'Virenspace',          fileId: '' },
    'aethris':       { name: 'Aethris',             fileId: '' },
    'hollow':        { name: 'The Hollow',          fileId: '' },
    'tumak-homeworld': { name: 'Lunarfoot',         fileId: '' },
    'cairn-station': { name: 'Cairn Station',       fileId: '' },

    // ── Ships & vehicles ──
    'foundling':     { name: 'The Foundling',       fileId: '' },
    'moonraider':    { name: 'The Moonraider',      fileId: '' },
    'tyrant-ship':   { name: 'Tyrant ship',         fileId: '' },

    // ── Threads, hooks, named objects (sketches/icons) ──
    'hcatha-meteor': { name: 'H\'Catha Meteor',     fileId: '' },
    'sabotage-sigil':{ name: 'Sabotage sigil',      fileId: '' },
    'latchling':     { name: 'The Latchling',       fileId: '' },
    'fonains-shard': { name: 'Fonains shard',       fileId: '' },
    'wardrobe':      { name: 'Mirt\'s wardrobe',    fileId: '' },

    // ── Security stars & badges (available for in-prose use) ──
    'security-star-visitor': { name: 'Visitor clearance star', fileId: '1aRgq_BbRCWtQACZoHUQM_IUvxVpIoF1D' },
    'security-star-sailor':  { name: 'Sailor clearance star',  fileId: '1KCRQ4OJ-7G5RmKUg-NACrRM3DKmVVpEA' },
    'security-star-officer': { name: 'Officer clearance star', fileId: '1cnruOaO9A-2TVB0s8Dx_RKUTRJS-2AKz' },
    'security-star-cadet':   { name: 'Cadet clearance star',   fileId: '1BntfZECdJWqMpkWfd-S6MMarJb6UrZxr' },
    'security-star-bridge':  { name: 'Bridge clearance star',  fileId: '1QfPTPyN7UA0IdkDmDrX4Vcu4xDBa9sCE' },
    'cadet-badge':           { name: 'Cadet badge',            fileId: '1vOloKg0dEMeRobUJzL8i5dQXG2WxQzQj' },

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
