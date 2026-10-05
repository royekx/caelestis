CAELESTIS DM WIKI — DEPLOY BUNDLE
==================================
Generated for royekx.github.io/caelestis/

Cumulative bundle. Every change since the prior structural pass. Deploy
this bundle, delete the stale files listed below, hard-refresh.


WHAT'S IN THIS BUNDLE
---------------------
Mirrors the live site layout. Unzip and copy contents so they land at
your repository root (the /caelestis/ level):

  /caelestis/
  ├── styles/
  │   └── dm.css                              (deploy — overwrite)
  ├── scripts/
  │   ├── dm-nav.js                            (deploy — overwrite)
  │   ├── dm-toc.js                            (deploy — overwrite)
  │   └── portraits.js                         (deploy — overwrite; Hakatha key removed)
  └── prime/
      ├── index.html                           (gate)
      ├── hub.html                             (Realms tile description updated)
      ├── cosmology/
      │   └── index.html                       (Setting cleanup — see below)
      ├── realms/
      │   └── index.html                       (rebuilt from scratch — Setting voice)
      ├── factions/
      │   └── index.html                       (rebuilt from scratch — PCs added; Setting voice)
      ├── artifacts/
      │   └── index.html                       (Setting cleanup; heart's-nature committed)
      └── campaign/
          ├── index.html                       (cross-references updated)
          ├── spine.html                       (cross-references updated; Almosts content inlined)
          ├── voyages/
          │   └── index.html
          ├── plot-hooks.html                  (cross-references updated)
          ├── what-if.html
          └── remaking/
              └── index.html

NOTE: caelestis.css is NOT in this bundle. Keep your existing one.


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


KEY CHANGES SINCE LAST DEPLOY
-----------------------------
1. SETTING CONTENT AUDIT
   Setting pages now read as encyclopedia entries: each entity is
   described by what it currently is. Authorial planning, arc framing,
   forward-looking "the crew will" language, comparative absolutes
   ("the only known"), and DM-menu enumerations are stripped.

   - Realms rebuilt from scratch. Each place describes itself.
     H'Catha is a torus world ruled by beholders with a central Spire,
     not "where the crew's Arc I finale will take them." Caelestis is
     a Fleet station with two wings, not "the campaign's broader
     headquarters." Aethris describes the Misfortuned and Fortuned as
     categories of person on Aethris; Sol's name does not appear in
     the entry. Tumak's homeworld renamed "Lunarfoot" (working name).

   - Factions & Characters rebuilt from scratch. PCs added as Setting
     entries under a new "The Crew" subsection of Academy & Fleet,
     each described by current state. Vessels subsection added with
     the Foundling. Vocath's commercial conflict with Mirt stated as
     fact; the cover operation lives on Remaking. The "Unaffiliated /
     Almosts" subsection removed entirely — that was campaign-specific
     authorial framing of Bartholomew's arc.

   - Cosmology surgically cleaned. The "Paracausal entities in play"
     PC-roster subsection rewritten as a generic description of how
     paracausal change manifests. "Forward hook" / "Held for late-late
     game" / "Arc III lever" framings stripped. The Remaking H2 (a
     forward-link to campaign content) removed. Counter-spore plant
     player-facing callout reframed as encyclopedic.

   - Artifacts cleaned. "Heart's nature DM menu" replaced with a
     committed Setting description of the central fragment. The
     "Other Reach artifacts" entry stripped of authorial planning
     ("they do not need to know the set exists until the moment that
     matters" → simply describes the set's distribution).

2. HAKATHA CONSOLIDATED INTO H'CATHA
   A stale Hakatha stub existed as a separate place. It's the same
   world. Removed entirely; all references redirected to H'Catha.
   Portraits.js Hakatha image key removed.

3. CROSS-REFERENCE FIXES
   - The Brig anchor (#brig) restored on the new Caelestis page
   - Cosmology/#remaking references (now gone) redirected to
     campaign/remaking/ on Campaign-index, Spine, and Factions
   - Factions/#almosts (now gone) reference on Spine inlined as prose
   - All anchor cross-references verified clean by integrity check

4. NEW CONTENT-DISCIPLINE RULE
   The WIKI-PAGE-GUIDE now documents the actual content rule, with
   examples and anti-patterns. The structural rules (universal
   collapsibles, unified dossier rows, canonical campaign order) were
   already documented. What's added: the Setting/Campaign content
   seam, the table of "Campaign voice vs. Setting voice" sentence
   pairs, and the "one-shot DM test" — if a different DM running this
   universe would have to delete the sentence, it's mis-located.


VERIFICATION AFTER DEPLOY
-------------------------
Hard-refresh (Cmd/Ctrl-Shift-R) and check:

  1. /prime/ loads with NO sidebar before sign-in.

  2. After sign-in, click into Realms → H'Catha. The entry describes
     the world (torus geometry, beholder rulership, the Spire). No
     reference to "the crew," "Arc I," "the Foundling," or "the
     tyrant ship approach."

  3. Click into Factions & Characters → Academy & Fleet → The Crew.
     All six PCs (Bartholomew, Boogie, Casey, Gregory, Sol, Tumak)
     appear as dossier rows. Each row describes who they are, not
     what their arc is.

  4. Same section, scroll to Vessels — the Foundling appears as a
     dossier row.

  5. Click into Factions → Unaffiliated. The "Unbloomed bud / Almosts"
     section is gone (that was campaign-specific framing of
     Bartholomew's arc; it lives on Spine now).

  6. Click into Cosmology → The Axioms → Paracausality → "How
     paracausal change manifests." The subsection describes the
     phenomenon generically. No PC roster.

  7. Click into Cosmology and scroll to the bottom. The Remaking H2
     section is gone (Setting doesn't forward-link to campaign
     content).

  8. Click into Artifacts → World Surveyor → "The heart's nature."
     The fragment is described as a piece of the Reach's own
     Boundary-signature. No "DM menu," no candidate list.

  9. Anchor sanity-check: from Plot Hooks, click any "→ realms/" or
     "→ factions/" cross-reference. Each should resolve to a real
     section on the target page. The integrity check passes with only
     the four briefing-file forward-references as expected residuals.


STILL PENDING
-------------
- /prime/campaign/voyages/voyage-briefing-NNN.html files (create as
  you write each briefing)
- Image fileIds in scripts/portraits.js (paste Drive IDs into the
  empty fileId slots to render images wiki-wide)


PAGE-BUILDING GUIDE
-------------------
WIKI-PAGE-GUIDE.md at the bundle root documents the content rule
under "Setting pages are encyclopedic," with examples, a Campaign-vs-
Setting sentence table, and anti-patterns. Read it before creating
new Setting entries.
