CAELESTIS DM WIKI — DEPLOY BUNDLE
==================================
Generated for royekx.github.io/caelestis/

This bundle is CUMULATIVE — every change since the prior structural pass.
Deploy this bundle, delete the stale files listed below, hard-refresh.


WHAT'S IN THIS BUNDLE
---------------------
Mirrors your live site layout. Unzip and copy the contents so they land
at your repository root (the /caelestis/ level):

  /caelestis/
  ├── styles/
  │   └── dm.css                              (deploy — overwrite)
  │       NOTE: caelestis.css is NOT in this bundle. Keep your existing one.
  ├── scripts/
  │   ├── dm-nav.js                            (deploy — overwrite)
  │   ├── dm-toc.js                            (deploy — overwrite; tag-strip)
  │   └── portraits.js                         (deploy — overwrite; expanded image map)
  └── prime/
      ├── index.html                           (gate — overwrite)
      ├── hub.html                             (rebuilt — canonical-order tiles)
      ├── cosmology/
      │   └── index.html                       (universal collapsibles)
      ├── realms/
      │   └── index.html                       (universal collapsibles)
      ├── factions/
      │   └── index.html                       (rebuilt — unified dossier rows)
      ├── artifacts/
      │   └── index.html                       (rebuilt — unified dossier rows)
      └── campaign/
          ├── index.html                       (DM how-to + universal collapsibles)
          ├── spine.html                       (rebuilt — Central Question / Cosmological Pressures / Crew / Arcs)
          ├── voyages/
          │   └── index.html                   (briefing/voyage/delta + custom default-opens)
          ├── plot-hooks.html                  (rebuilt — Active + Inactive, no duplicate table)
          ├── what-if.html                     (universal collapsibles)
          └── remaking/
              └── index.html                   (universal collapsibles + Failure state rename)


DELETE THESE STALE FILES/DIRS FROM THE LIVE REPO
------------------------------------------------
Anything under /prime/ NOT listed above is stale. In particular:

  Old flat HTML files (replaced by directory/index.html):
    - /prime/continuum.html
    - /prime/campaign.html
    - /prime/world.html
    - /prime/factions.html
    - /prime/seeds.html
    - /prime/remaking.html

  Old top-level directories:
    - /prime/seeds/
    - /prime/remaking/
    - /prime/voyages/

  Bad intermediate copies (if any exist from earlier passes):
    - /prime/cosmology/campaign.html
    - /prime/cosmology/world.html
    - /prime/cosmology/remaking.html

ADD without DELETE and stale links coexist with new ones.


KEY CHANGES SINCE LAST DEPLOY
-----------------------------
1. UNIVERSAL COLLAPSIBLE PATTERN
   Every h2 and h3 section across the wiki is now collapsible. Pages
   read as outlines of summaries; click any section to expand. Default
   behavior:
     - Spine: Central Question open; Arcs open with Arc 1 expanded
     - Voyages: Next session open; Record open; V003 (most recent
       recorded) open; V002/V001 collapsed
     - Plot Hooks: Active open; Inactive collapsed
     - All other pages: collapsed by default

2. UNIFIED DOSSIER ROWS
   Factions, Artifacts, Plot Hooks, and the Spine's Crew all use one
   collapsible row per entity. No more "table here, full notes
   collapsibles below" duplication. Click any row to expand it inline.

3. RENAMES (FUNCTIONAL TITLES)
   - "The North" → "Central Question"
   - "The Weather of Reality" → "Cosmological Pressures"
   - "Acts" / "The Acts" → "Arcs"
   - "D — The End" → "Failure state"
   - "The Spine" → "Spine" (nav, hub tile, page heading)
   - Stylistic "The" stripped from non-canonical section titles in
     Remaking (Network / Inscription / Fork / Mechanism / Node ladder /
     Planning method / Artifact / World-hearts chase / Dual attack)
   - World-object names retain their "The" (The Reach, The Core, The
     Gods, The Hollow, The Remaking, The Prime Continuum, The Axioms,
     The Bridge — these are names, not stylistic flourishes)

4. PLOT HOOKS CONSOLIDATED
   Active section is now the scannable view (rows with type-tags and
   status pills); no separate status-table at the bottom. Inactive
   section uses the same row pattern for planted-but-not-active threads.

5. EXPANDED IMAGE MAP
   `scripts/portraits.js` now carries keys for places (Caelestis, the
   Brig, Sea Dock, Sky Dock, Weeping Goddess, Toril, H'Catha, Hakatha,
   Virenspace, Aethris, the Hollow, Lunarfoot, Cairn Station), ships
   (Foundling, Moonraider, tyrant ship), and thread/object icons
   (H'Catha meteor, sabotage sigil, Latchling, Fonains shard, wardrobe).
   All `fileId` slots empty and ready to populate.

6. CAMPAIGN-CLUSTER NAV ORDER LOCKED
   Voyages → Spine → Remaking → Plot Hooks → What If
   (Tracker external links removed from nav; they live in Spine's
   operational-links bar and on the hub's Trackers tile section.)

7. SETTING PAGES ARE ENCYCLOPEDIC
   No "Running the X" preambles. Setting pages start with a brief lede
   and go straight to content. DM craft lives on the Campaign index.

8. ANCHOR UPDATES
   `#act-2` / `#act-3` / `#end` references in Remaking and Realms
   updated to `#arc-2` / `#arc-3` / `#failure-state`. Integrity check
   passes cleanly except for the four briefing-file forward references.


VERIFICATION AFTER DEPLOY
-------------------------
Hard-refresh (Cmd/Ctrl-Shift-R) and check:

  1. /prime/ loads with NO sidebar before sign-in. If you see the nav
     before login, the gate file is stale — re-deploy /prime/index.html.

  2. After sign-in, hub shows three sections: Campaign (six tiles in
     canonical order), Setting (four pillars), Trackers.

  3. Sidebar shows Campaign cluster in canonical order: Voyages, Spine,
     The Remaking, Plot Hooks, What If. Tracker links are GONE from the
     nav.

  4. Click into Cosmology — every h2 section is a closed collapsible
     showing a chevron at the leading edge. Click any section to expand.

  5. Click into Factions & Characters — every faction is a closed
     collapsible. Expand Order of the All-Father → the Watchers section
     contains one dossier row (Ezra). Click Ezra's row — body unfolds
     directly underneath. No "Ezra — full notes" elsewhere.

  6. Click into Artifacts — World Surveyor is one collapsible row.
     Expand it. Inside are nested collapsibles (Function, Cosmological
     depths of reading, Status, Heart's nature, Ethics).

  7. Click into Plot Hooks — Active section is open by default with six
     rows visible (H'Catha Meteor, Sabotage sigil, Latchling, Boogie/
     Fonains shard, Sol/Aethris, World Surveyor at graduation). Each
     row shows status pill + type tags. NO duplicate scannable table
     at the bottom. Inactive section is collapsed.

  8. Click into Spine — operational links bar visible at top. Central
     Question is open. Cosmological Pressures is closed. Crew is closed.
     Arcs is open with Arc 1 expanded.

  9. Click into Voyages — Next session is open with V004 expanded.
     Record is open. V003 expanded inside Record. V002 and V001
     collapsed.

 10. Click into Remaking — Failure state subsection exists (not
     "D — The End"). Section titles read functionally: Network,
     Inscription, Fork, Mechanism, etc.

 11. Tags inside headings no longer appear in the right-rail TOC.

 12. Visit a player page (e.g. /caelestis/crew-manifest/) — NO DM
     sidebar visible.


STILL PENDING (manual — not in this bundle)
-------------------------------------------
The Voyages page forward-references in-site briefing files:
  /prime/campaign/voyages/voyage-briefing-001.html
  /prime/campaign/voyages/voyage-briefing-002.html
  /prime/campaign/voyages/voyage-briefing-003.html
  /prime/campaign/voyages/voyage-briefing-004.html

These don't exist yet. The "Open briefing →" links 404 until you create
each file. Create them as you write each briefing.

The Voyages page also references player-site detailed files:
  /caelestis/crew-logs/detailed/voyage-detailed-001.html
  /caelestis/crew-logs/detailed/voyage-detailed-002.html
  /caelestis/crew-logs/detailed/voyage-detailed-003.html

These live on the player site (outside /prime/). Integrity check treats
them as external; they need to exist on the player side.

To populate character/place/artifact images: open scripts/portraits.js,
find each entry, paste the Drive file ID into the empty `fileId: ''`
slot. Dossier rows pick them up automatically. No per-page edits needed.


FIA BREADCRUMBS
---------------
FIA-BREADCRUMBS.md is NOT part of the DM wiki deploy. Drafts of subtle
entries to paste into your player-facing Fleet Intelligence Archive site.


PAGE-BUILDING GUIDE
-------------------
WIKI-PAGE-GUIDE.md at the root is the reference for building new wiki
entries — hierarchy, conventions, anti-patterns. Read it before
creating new pages.
