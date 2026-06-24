CAELESTIS DM WIKI — DEPLOY BUNDLE
==================================
Generated for royekx.github.io/caelestis/

This bundle is CUMULATIVE — it contains every change since the last
structural reorganization. If you deploy this bundle, you deploy
everything. No partial-deploy risk; the only thing you still need
to do by hand is delete the stale files listed below.


WHAT'S IN THIS BUNDLE
---------------------
This archive mirrors your live site layout. Unzip and copy the contents
so they land at your repository root (the /caelestis/ level):

  /caelestis/
  ├── styles/
  │   └── dm.css                              (deploy — overwrite)
  │       NOTE: caelestis.css is NOT in this bundle. Keep your existing one.
  ├── scripts/
  │   ├── dm-nav.js                            (deploy — overwrite)
  │   ├── dm-toc.js                            (deploy — overwrite; tag-strip fix)
  │   └── portraits.js                         (NEW — centralized portrait map)
  └── prime/
      ├── index.html                           (gate — overwrite)
      ├── hub.html                             (rebuilt — canonical-order tiles)
      ├── cosmology/
      │   └── index.html                       (stripped of "Running the X"; h4s collapsibled)
      ├── realms/
      │   └── index.html                       (stripped of "Running the X"; campaign-state tags removed)
      ├── factions/
      │   └── index.html                       (rebuilt — dossier model with portraits)
      ├── artifacts/
      │   └── index.html                       (rebuilt — dossier roster + collapsibles)
      └── campaign/
          ├── index.html                       (rewritten — DM how-to / wiki guide)
          ├── spine.html                       (NEW — the campaign's authored shape, act-by-act)
          ├── voyages/
          │   └── index.html                   (rebuilt — briefing/voyage/delta audit)
          ├── plot-hooks.html
          ├── what-if.html
          └── remaking/
              └── index.html                   (cross-references updated)


DELETE THESE STALE FILES/DIRS FROM THE LIVE REPO
------------------------------------------------
Anything under /prime/ NOT listed above is stale. In particular remove:

  Old flat HTML files (replaced by directory/index.html):
    - /prime/continuum.html
    - /prime/campaign.html
    - /prime/world.html
    - /prime/factions.html
    - /prime/seeds.html
    - /prime/remaking.html

  Old top-level directories (content moved under /prime/campaign/):
    - /prime/seeds/
    - /prime/remaking/
    - /prime/voyages/

  Bad intermediate copies (if any exist from earlier passes):
    - /prime/cosmology/campaign.html
    - /prime/cosmology/world.html
    - /prime/cosmology/remaking.html

If you only ADD the new files without DELETING the old ones, both
versions coexist and stale links resolve to old content.


KEY CHANGES SINCE LAST DEPLOY
-----------------------------
1. Canonical-order navigation under Campaign:
     Voyages → Spine → Remaking → Plot Hooks → What If

2. Setting pages are now encyclopedic only — no "Running the X" preambles.
   DM craft moved to the Campaign index (the how-to) and WIKI-PAGE-GUIDE.md.

3. Factions & Characters uses the dossier pattern: each faction has a
   brief identity statement, a tabular dossier of members with portraits,
   and collapsible prose detail.

4. Artifacts has a dossier roster at the top showing every artifact at
   a glance. World Surveyor entry uses collapsibles for detail.

5. Voyages is now a briefing-vs-voyage audit with a Delta surfaced under
   each entry. Most recent first; the upcoming session sits at the top
   as a "Next session" block.

6. The Spine is a new page — the campaign's authored shape. Operational
   links at the top, the Crew (PC arcs in dossier form), the Weather of
   Reality, then per-act collapsibles. Act 1 expanded by default.

7. Tracker links removed from the nav. They live in the Spine's
   operational-links bar and on the hub's Trackers tile section.

8. dm-toc.js strips tag spans before reading heading text, so tags inside
   headings no longer pollute the right-rail TOC.

9. portraits.js is a centralized map of character keys → Drive file IDs.
   Empty slots ready to fill; dossier rows show a monogram placeholder
   until you populate the map.


VERIFICATION AFTER DEPLOY
-------------------------
Hard-refresh the site (Cmd/Ctrl-Shift-R) and check:

  1. The DM gate (/prime/) loads bare — no sidebar nav before you sign in.
     If you see the nav before login, the gate is still stale; force-refresh
     and recheck that you deployed the new /prime/index.html.

  2. After sign-in, the hub shows tiles in three groups: Campaign (six
     tiles in canonical order), Setting (four pillars), and Trackers.

  3. Sidebar shows Campaign-cluster in canonical order: Voyages, The
     Spine, The Remaking, Plot Hooks, What If. Tracker links are GONE
     from the nav.

  4. Click into any setting page — no "Running the X" section. Pages
     start with a brief lede and go straight to content.

  5. Click into Factions & Characters — each group has a dossier table.
     Portrait cells show monogram placeholders (until you populate
     scripts/portraits.js).

  6. Click into Voyages — see the "Next session" block at top, then the
     audit list (V003 → V002 → V001) with briefing/voyage/delta layout.

  7. Click into The Spine — operational links bar at top, the Crew
     section, then collapsibles per act with Act 1 expanded.

  8. Tags inside headings (e.g., "Convergence Locked" in Cosmology) no
     longer appear in the right-rail TOC.

  9. Visit a player page (e.g. /caelestis/crew-manifest/) — should show
     NO DM sidebar.


STILL PENDING (manual — not in this bundle)
-------------------------------------------
The Voyages page references in-site briefing files:
  /prime/campaign/voyages/voyage-briefing-001.html
  /prime/campaign/voyages/voyage-briefing-002.html
  /prime/campaign/voyages/voyage-briefing-003.html
  /prime/campaign/voyages/voyage-briefing-004.html

These don't exist yet. The "Open briefing →" links 404 until you create
each file. Create them as you write each session's briefing.

The Voyages page also references player-site detailed files:
  /caelestis/crew-logs/detailed/voyage-detailed-001.html
  /caelestis/crew-logs/detailed/voyage-detailed-002.html
  /caelestis/crew-logs/detailed/voyage-detailed-003.html

These are on the player site (outside /prime/). The integrity check
treats them as external; they need to exist on the player side, which is
outside this bundle's scope.


FIA BREADCRUMBS — drafts for the player-facing FIA site
-------------------------------------------------------
FIA-BREADCRUMBS.md in this bundle is NOT part of the DM wiki deploy.
It contains drafts of subtle entries to paste into your player-facing
Fleet Intelligence Archive site (outside /prime/) — a Brig existence-
reference and an incident-pattern liaison line.


PAGE-BUILDING GUIDE
-------------------
WIKI-PAGE-GUIDE.md, at the root of this bundle, is the reference for how
to build new wiki entries — site hierarchy, where each kind of content
belongs, conventions, and patterns. Read it before creating new pages.
