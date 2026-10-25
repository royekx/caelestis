# Backlog: automation and tracker

Korey is revisiting the pipeline and tracker alternatives during the prime
overhaul. This file sets out the current state, then the open choices. Items
run decide, fix, drop, add.

## Current state (checked against the repo, 2026-10-25)

- **Session ingest.** n8n is dropped. A session runs in chat against the repo, following `prime/notes/SESSION-RUN.md`: Open → Read → Chronicle (**approval 1**) → Extract (**approval 2**) → Record → Render → Check → Publish. Nothing is written to the repo before approval 1, and nothing to the record before approval 2. A run goes up as one pull request; a run that stops halfway is picked up from its branch. The source is the Drive file `Caelestis _ The Spelljamming Academy _ Voyage NNN.txt` (transcript or dictation).
- **The record.** `data/*.json` is the player-facing campaign record, kept by hand: sessions, npcs, locations, items, factions, quests, player-characters (plus derived `index.json`, `voyage.js`). `prime/data/*.json` is the DM layer over it, keyed by the same ids (`overlay.json`, `voyages.json`, derived `dossiers.json`). The schema is closed and listed at the top of `scripts/data.js`; a DM fact has no key to sit under, which keeps `data/` player-safe. Records already carry `parentId` (16 locations use it).
- **Verbs.** `node scripts/data.js derive` fills derived fields; `check` verifies record, DM layer and pages (must report 0 errors before a PR); `guard` is the deploy test.
- **CI.** `check.yml` runs `data.js check`. `deploy.yml` builds three Pagefind indexes (player, DM, FIA), runs `data.js guard`, prunes, and deploys to GitHub Pages. There is no build step.
- **Benched.** `scripts/_benched/build-pages.js` (the template-entity scaffolder) is out of service and must not be run. `build-data.js` and `transform.js` were retired with the Google Sheet.
- **The Google Sheet tracker** ("Caelestis Campaign Tracker") is frozen. `prime/tracker/` shows the repo record plus the DM overlay.
- **Unmigrated sheets.** "Caelestis Character Arc Tracker" and "Caelestis Wildspace Tracker" still exist as synced Google Sheets; the hub still links them.
- **Timeline.** `prime/timeline/timeline.json` is hand-edited JSON with four lanes and a clocks list; `prime/timeline/index.html` fetches it in the browser.
- **Crew Logs.** Step 7 of the runbook still appends the Full Account to the Crew Logs Google Doc ("Voyages"), embedded on the player site at `logs/`.

## Pipeline and tracker

- **[decide]** Session ingest
  Current: the in-chat runbook above, with two approvals and a PR. Options: (a) keep the in-chat runbook as is; (b) keep it and trim steps (for example, drop the Crew Logs append, see below); (c) adopt an alternative pipeline. Whatever is chosen, SESSION-RUN.md and CLAUDE.md change together.
  src: automation § Voyage 5 Method; memory-canon (open-decisions, Plan 2026-10-25; site-and-automation)

- **[decide]** The tracker
  Current: the repo JSON record (`data/` plus `prime/data/`), checked in CI and shown on `prime/tracker/`; the Sheet is frozen. Options: (a) keep the repo record as the tracker; (b) move to a tracker alternative, which would need its own player/DM boundary to replace what the closed schema gives now. Touches hub.html (Trackers band), prime/tracker/, SESSION-RUN.md, DATA-BOUNDARY.md.
  src: automation § Voyage 5 Method; memory-canon (site-and-automation; open-decisions, Plan 2026-10-25)

- **[decide]** The Character Arc Tracker and Wildspace Tracker sheets
  Both are unmigrated. Options: fold them into the record (arcs into the DM layer, wildspace into locations); keep them as sheets; or retire them. The hub's Trackers band follows (see new-pages.md, hub.html).
  src: automation § Open (both chats)

- **[decide]** The Crew Logs Google Doc
  Korey calls it unused, yet the V005 run appended to it, the runbook's step 7 still does, and the voyage pages carry the same text. Options: retire it (drop step 7's append and the `logs/` embed); or keep appending.
  src: automation § Open; prime/notes/SESSION-RUN.md step 7

- **[decide]** Deploy and search
  Current: deploy.yml builds the three Pagefind indexes and guards the record; the transform and scaffold steps are gone, and `scripts/_benched/` is out of service. Options: keep as is, or revise during the overhaul (for example, retire or delete the benched scaffolder).
  src: automation § Documents produced; memory-canon (site-and-automation); scripts/_benched/README.md

## DM views

- **[decide]** The Campaign Board and a Chronicle view
  The Campaign Board is an arc timeline with a "where are we" marker and parallel tracks; a Chronicle view was also planned. `prime/timeline/` exists (timeline.json with lanes and clocks); neither view is built under those names, and the Board exists only as claude.ai artifacts. Options: treat `prime/timeline/` as the Campaign Board and extend it; or build the Board and Chronicle as separate pages. See new-pages.md, NEW: Campaign board.
  src: framework § Open; memory-canon (open-decisions, DM views)

- **[decide]** Where the weather of reality is tracked
  timeline.json has no clock or lane for it. Options: a timeline clock; a timeline lane; or a tracker row.
  src: framework § Open; memory-canon (campaign-canon)

- **[decide]** The prep brief
  A brief generated from open threads plus act structure was planned; there is no sign it was built. Options: build it from the record and timeline; or drop it.
  src: automation § Open

- **[decide]** Locale-level places
  Merchants, shipyards and taverns with a parent world or station, so the register can filter by them. This was proposed for the Sheet's Locations tab, which is frozen. The record's locations already carry `parentId` (16 do). Options: use `parentId` for locales and add filtering to the register; or drop the idea.
  src: framework § Open; scripts/data.js schema

## Housekeeping

- **[decide]** The SotDQ tracker cleanup
  Deferred. Schedule it or drop it.
  src: automation § Open

- **[decide]** "Autognome" in V003 and V004
  Those voyages call the OSTEKK units "autognomes"; canon makes them automatons (Gregory is the autognome). Runbook default: leave them as history, since that is what the crew believed then. Confirm the default, or sweep them to "automaton".
  src: automation § Open; memory-canon § Key NPCs (OSTEKK-6)

- **[fix]** The search-repair table runs backwards
  `prime/notes/RESTRUCTURE-NOTES.md` maps wrong spellings to right ones. Line 348 reads "Saerthe → Saerth"; change to "Saerth → Saerthe". The roster line (line 225) lists "Saerth"; change to "Saerthe". "Sor'kur" should read "Sor'Kur" on lines 226, 341 and 347 (line 347: "Sorker → Sor'Kur").
  src: automation § Open; memory-canon (campaign-canon, spellings)
