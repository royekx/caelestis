# Repo refactor and distribution plan

The repo has grown past its first plan: 332 tracked files, 25 top-level folders
on the player side, three systems for session accounts, per-character pages at
the root, placeholder files, and about 70 stale branches. This draft maps what
is there, proposes a shape, and lists the calls to make before anything moves.

## What is there now

### Player site (root)

| Folder | What it is | Notes |
|---|---|---|
| `index.html`, `hub.html` | Landing page and the Terminal hub | Keep at root |
| `crew-manifest/` | The six crew pages | Core |
| `aspects/` | Bartholomew's Aspects page | Belongs under his crew page |
| `wayfinder-path/` | Tumak's Wayfinder's Path | Belongs under his crew page |
| `stellar-chart/` | Casey's Stellar Reading chart | Belongs under his crew page |
| `voyages/` | Voyage accounts V001–V006 | Core |
| `bearings/` | Current bearing, a timeline, per-voyage bearing pages | Overlaps `voyages/` |
| `logs/` | Crew Logs: the Google Docs embed page | Distinct from voyage accounts |
| `dossiers/` | 26 NPC pages (player-facing) | Jeffrey and Joffrey are two different people |
| `factions/` | Factions index and one faction | Thin |
| `navigation-records/` | 19 places and ships | Ships overlap `vessels/` |
| `vessels/` | Vessels index | Thin |
| `spelljammer-nexus/` | Setting primer (spheres, wildspace, the Academy) | Overlaps `navigation-records/` and `factions/` |
| `quests/` | Quest board and 12 quests | Core |
| `inventory/` | Inventory: `entries/` are ledger records (15), `items/` are readable artifacts (1) | By design; the Collection Manifest has both a ledger entry and a readable page |
| `handouts/` | Corps Protocols (crew roles, ship mechanics) | Fine |
| `restricted/` | The Fleet Intelligence Archive (in-world gated files) | Fine; keep separate |
| `search/` | S.E.A.R.C.H. | Fine |
| `data/` | The campaign record (JSON) | Fine |
| `assets/`, `styles/`, `scripts/` | Shared | Fine |

### DM side

| Folder | What it is | Notes |
|---|---|---|
| `prime/` | DM wiki, 149 files | Overhaul planned separately |
| `prime/notes/` | Ten process docs, 3,200 lines | Several are one-off migration notes (FIXES-DEMO-MIGRATION is 1,002 lines). All are published with the site |
| `prime/working/` | Drafts, backlog, staging | Pruned from deploy |

### Clutter

- Empty placeholder files (one blank line each): `restricted/init.md`, `stellar-chart/init.md`, `wayfinder-path/init.md`, `prime/notes/init.md`, `prime/notes/restricted.md`, `handouts/README.md`.
- About 70 remote branches. Main's history was rewritten on 2026-10-18, so every old branch shows hundreds of commits "ahead" and none can be merged as is. Only `main` and the current working branch are live.
- `prime/notes/*.md` and `data/` ship with the site. The notes are DM process docs and should not be public files.

## Ground rules

- **Player and DM versions are separate on purpose.** A person, place, vessel or item can have a player page (what the crew knows) and a prime page (the DM truth). Same subject, two pages, is not duplication. A real duplicate is two pages on the same layer.
- **Vessels are vessels.** Ships are not locations and not items. Realms keep only what can be boarded as a place; ships live in the vessels register. (Ruled in the cosmic campaign chat; see `inbox/chat-cosmic-campaign-structure.md`.)
- **The refactor runs in tandem with the backlog.** Page moves and content rulings land together, so a page is rewritten once, in its new home, with ruled content.
- **`prime/notes/` is bloat.** A previous chat produced overlapping guideline docs. Consolidate to the few that are used (CLAUDE.md, the session run, one page guide, the data boundary) and retire the rest.

## Why the plan is strict

Past rewrites left pages diluted, contradicting each other, or half updated:
"World Surveyor" outlived its retirement on three pages, Clint still rides a
psychic wind on four, and the cosmology page still counts four Axioms. Each
came from patching pages one line at a time, from facts living on several pages
at once, and from nobody checking a finished page against its sources. The plan
below closes those three gaps.

## Guardrails

1. **One home per fact.** Every staged fact is written on one page, its home.
   Other pages link to it or summarize it in a line that adds nothing new. A
   fact stated in full in two places drifts.
2. **Rewrite, never patch.** A page that receives staged content is rewritten
   whole, from its sources (STAGING, its BACKLOG items, the current page, the
   pages it links to), in its target shape and path. No line survives because
   it was already there.
3. **Nothing half-written merges.** No "pending", "TBD", "Open:" on a world
   page, no hedges standing in for facts, no stub sections promising content.
   If a detail is unknown the page says what is known and stops (README §
   Writing staged entries and pages).
4. **Retired terms are checked by a script, not by memory.** A list of retired
   terms and their replacements (spheres, SPH-/SYS-/W- designations, World
   Surveyor, the old Axiom names, Circle of Fifteenths, downward tithe, psychic
   wind, the godless sphere, claimed/primed, Knowhere, Ascension World as a
   separate place) is run over prime/ on every pull request. It warns during the
   overhaul and fails once a section is done.
5. **Two readers.** The page is written by one pass and read cold by a separate
   reviewer that has only STAGING, the page and this checklist: every staged
   fact present, nothing contradicting STAGING or another finished page, no
   decision voice, no hedging, no retired term, specific rather than sparse.
6. **Distribution consumes its sources.** The commit that writes a page deletes
   the STAGING entries and BACKLOG items it used. STAGING empties section by
   section; anything left over is visibly undistributed.
7. **Moves and content land together, with no redirects.** A page moves to its
   new path in the same commit as its rewrite, and every link to it is updated.
   Old paths are not kept. Each pull request adds its moves to the link
   catalogue below (old path → new path), and `check` proves every new link
   resolves.
8. **Depth follows weight.** Pages carry all the appropriate information at the
   depth their subject deserves, factual with a little narrative prose, with
   back-links. Status labels such as "unresolved" stay off factual pages; they
   go in a DM notes tab or a planning page (README § Writing staged entries and
   pages).

## Phases

### 0. Decisions before anything moves
The calls at the end of this section. Nothing below starts until they are made.

### 1. Tooling
- Built 2026-10-27, reading `prime/` and `restricted/`: `scripts/terms.js` and a terms list in `prime/working/terms.json`: retired
  term → replacement, with an allow-list for legitimate uses (FIA history,
  quoted in-world speech). Run in `check.yml` as a warning; promoted to an error
  per finished section. Pruned from deploy like `data.js`.
- A voice pass in the same script: flags "ruled", "retired", "replaces",
  "pending", "TBD", "to be decided", "not yet set" on pages under prime/.
- Baseline, 2026-10-27: 308 retired-term hits across 109 DM files (realms 173,
  cosmology 64, campaign 18, artifacts 17, dossiers 8, vessels 8, timeline 8,
  glossary 6, factions 4, crew 1, hub 1); chart 0. `node scripts/terms.js --list`
  gives each one. The FIA adds 22 hits across 6 of its 14 files.

### 2. Rules in one place
The prime/notes consolidation below (three documents). The page rewrites follow
one page guide, not four.

### 3. DM structure (approved 2026-10-27)

DM folders and pages use plain, functional names; the in-world names are for
the player side.

**Navigation**

| Group | Pages |
|---|---|
| Play | Voyages · Tracker · Plot Hooks · Stat Blocks · Rules |
| Story | Campaign · Opposition · Timeline |
| People | Crew · Dossiers · Factions |
| World | Cosmology · Locations · Vessels · Artifacts · Chart |
| Reference | Glossary · Principles |

**Moves**

| Now | Becomes |
|---|---|
| `realms/` (whole folder) | `locations/` |
| `realms/first-world.html` | `locations/rykoe.html` |
| `realms/ascension-world.html` | `locations/oerth.html` (Greyspace as a section) |
| `realms/sys04.html` | `locations/krynnspace.html` |
| `realms/aethris.html` (system page) | `locations/aethris.html`, the world page with its system as a section |
| `campaign/ascension/index.html` | `opposition/vecna.html` (Vecna's working, the eye, Oerth) |
| `campaign/colony/index.html` | `opposition/colony.html` |
| `campaign/spine.html` | `campaign/index.html` |
| `factions/academy-fleet.html` | `factions/fleet.html` |
| `artifacts/runekeepers-fragment.html` | `artifacts/dissolution-fragment.html` |
| `artifacts/transformation-fragment.html` | `artifacts/expansion-fragment.html` |

**Consolidations**

| Merge | Into |
|---|---|
| `campaign/index.html` (the wiki manual) | `principles.html` (operating principles, hook taxonomy, staged DM principles) and the page guide (wiki conventions) |
| `campaign/what-if.html` | a Speculation section on Plot Hooks |
| `campaign/voyages/voyage-briefing-002.html` | the Voyages page |
| `factions/spectrum.html` | `factions/seekers.html` |
| `factions/external.html` | `factions/index.html` or `factions/deities.html` |
| single-world system pages | the world's page; a system keeps its own page only when it holds two or more places with pages (Realmspace, Krynnspace) or has no world (Virenspace) |

**New pages**: `dossiers/vecna.html` (the god; his working is on the Opposition
page), `dossiers/haymond-rolt.html`, `dossiers/ilsevaine-corr.html`,
`dossiers/aurel-venn.html`, `locations/nowhere.html`,
`locations/ondrel-anchorage.html`, `principles.html`.

**Unchanged**: Tracker, Timeline (with Connections), Stat Blocks, Rules
(with Tumak's Wayfinder's Path copy), Glossary, Cosmology, Vessels, the Chart,
every dossier, the stations and sites, `locations/astral-sea.html` (the Astral
Sea; the Fleet calls it the drift).

Each move updates every link, joins the link catalogue, and puts the old path on
the terms check's moved list.

### 4. Distribution, in dependency order
One pull request per section, each reviewed and merged before the next starts,
because later sections link into earlier ones.

1. **Cosmology and glossary**: the Axioms, galaxies and cores, Rykoe and the
   First Heart, the Reach, the gods, hearts and links, residue, designations,
   most of space is empty. Chart is done; recheck it against this pass.
2. **Factions**: deities and the Accordance, the Fleet and Caelestis, the Order,
   the Seekers, the Vth'orama, the Restorers, Aethris, Vocath's crew.
3. **Realms**: Oerth and Greyspace, Krynnspace, Rykoe, H'Catha, Aethris,
   Krynn, Nowhere, Ondrel, the retirements above.
4. **Artifacts and vessels**: the five fragments, A.T.L.A.S. and its sister,
   the Rod, the twins' fragment.
5. **Dossiers**: Vecna (new), N'ghathrod, Vth'oramu, Thessalar, Clint,
   Tarroway, Rolt, Ilsevaine, Venn, OSTEKK.
6. **Campaign**: spine (theme, shape, failure state), ascension (Vecna's
   working, the eye, Oerth), colony (N'ghathrod now), plot hooks, principles.
7. **Crew**: the five crew items in STAGING, plus the crew backlog.
8. **Fonains and timeline**: the Fonains page and doc, `timeline.json`.
9. **The FIA (`restricted/`)**, next after the DM side and before any player
   page. Fourteen files. Bring each in line with the finished DM pages, in the
   FIA's own voice (§ FIA below): new designations, the Fleet and its
   structure, Clint, Tarroway, Strake's readings. The FIA only knows what Fleet
   Intelligence would: no Vecna, no Reach, no A.T.L.A.S. by name until the
   crew has made them readable. The terms check already reads `restricted/`.
10. **Player side**: only what the record already carries. Nothing from prime/
   crosses.

### 5. Per-page procedure
1. Gather: the page's STAGING entries (by home), its BACKLOG items, the current
   page, the finished pages it links to, and any meta about this subject now
   sitting on campaign pages (spine, plot hooks, voyages, what-if). That meta
   moves into the page's DM notes tab; the campaign page keeps only what spans
   subjects and links to the tab.
2. Write the whole page in its target shape (page guide), at its target path.
3. Run `check` and the terms/voice script: zero hits.
4. Cold review (guardrail 5). Fix what it finds.
5. Delete the consumed STAGING entries and BACKLOG items in the same commit.
6. Update the Connections layer (`prime/data/connections.json`) for any fact
   the page changed.

### 6. Player-side refactor
After the DM overhaul, in its own pull requests. Folder names stay in-world but
functional and distinct (`dossiers/`, `inventory/`). `bearings/` and the logs
keep their own files, moved under `voyages/` as subfolders. No redirects: every
moved path goes into the link catalogue so links already shared with players can
be reissued.

### 7. Done means
STAGING holds only undistributed future material; BACKLOG holds no fix or add
item for a finished section; the terms check runs as an error across prime/;
`check` reports zero errors.

## Staging homes
The first target listed on each STAGING subject is its home page. Subjects
whose home moves under phase 3 follow the move (Oerth → `locations/oerth.html`,
Vecna → `dossiers/vecna.html`, the Fleet → `factions/fleet.html`, DM principles
→ `principles.html`, Rolt → `dossiers/haymond-rolt.html`).

## Calls

Answered 2026-10-27:

1. **Player folder names**: in-world, but functional and distinct, like `dossiers/` and `inventory/`.
2. **Old URLs**: no redirects. Clean everything up, verify the new links, and keep the link catalogue below.
3. **Session accounts**: `bearings/` and the logs stay separate files; they may move under `voyages/` as subfolders.
4. **Order of work**: DM side first.
5. **Stale branches**: list them for Korey; delete at the very end, after review. The list is below.
6. **prime/notes**: consolidate where it makes sense (the three-document plan below).
7. **DM structure** (phase 3): approved, with `realms/` → `locations/`, the nav regrouping and the consolidations.
8. **Terms check**: approved, as a separate script.

## Link catalogue

Old path → new path, added by each pull request that moves a page.

| Old | New | Pull request |
|---|---|---|
| `prime/realms/hcatha.html` | `prime/locations/hcatha.html` | H'Catha pilot (deep-lore-working) |
| `prime/campaign/ascension/index.html` | `prime/opposition/vecna.html` | Opposition: Vecna (opposition-vecna) |
| `crew-logs/index.html` | `voyages/index.html` | Removed redirect stub (pass-0) |
| `crew-logs/brief/voyage-brief-001.html` | `voyages/voyage-001.html` | Removed redirect stub (pass-0) |
| `crew-logs/brief/voyage-brief-002.html` | `voyages/voyage-002.html` | Removed redirect stub (pass-0) |
| `crew-logs/brief/voyage-brief-003.html` | `voyages/voyage-003.html` | Removed redirect stub (pass-0) |
| `crew-logs/brief/voyage-brief-004.html` | `voyages/voyage-004.html` | Removed redirect stub (pass-0) |
| `crew-logs/detailed/voyage-detailed-001.html` | `voyages/voyage-001.html` | Removed redirect stub (pass-0) |
| `crew-logs/detailed/voyage-detailed-002.html` | `voyages/voyage-002.html` | Removed redirect stub (pass-0) |
| `crew-logs/detailed/voyage-detailed-003.html` | `voyages/voyage-003.html` | Removed redirect stub (pass-0) |
| `crew-logs/detailed/voyage-detailed-004.html` | `voyages/voyage-004.html` | Removed redirect stub (pass-0) |
| `crew-notes/index.html` | `logs/index.html` | Removed redirect stub (pass-0) |
| `prime/factions/academy-fleet.html` | `prime/factions/fleet.html` | Factions (factions) |
| `prime/factions/spectrum.html` | `prime/factions/seekers.html` | Factions (factions) |
| `prime/factions/external.html` | `prime/factions/index.html#other-powers` | Factions (factions) |
| `prime/realms/index.html` | `prime/locations/index.html` | Locations (locations) |
| `prime/realms/realmspace.html` | `prime/locations/realmspace.html` | Locations (locations) |
| `prime/realms/caelestis.html` | `prime/locations/caelestis.html` | Locations (locations) |
| `prime/realms/toril.html` | `prime/locations/toril.html` | Locations (locations) |
| `prime/realms/glyth.html` | `prime/locations/glyth.html` | Locations (locations) |
| `prime/realms/strake-station.html` | `prime/locations/strake-station.html` | Locations (locations) |
| `prime/realms/cairn-station.html` | `prime/locations/cairn-station.html` | Locations (locations) |
| `prime/realms/aethris.html` | `prime/locations/aethris.html` | Locations (locations) |
| `prime/realms/krynn.html` | `prime/locations/krynn.html` | Locations (locations) |
| `prime/realms/virenspace.html` | `prime/locations/virenspace.html` | Locations (locations) |
| `prime/realms/wayfinders-homeworld.html` | `prime/locations/wayfinders-homeworld.html` | Locations (locations) |
| `prime/realms/astral-sea.html` | `prime/locations/astral-sea.html` | Locations (locations) |
| `prime/realms/waystation.html` | `prime/locations/waystation.html` | Locations (locations) |
| `prime/realms/cantina.html` | `prime/locations/cantina.html` | Locations (locations) |
| `prime/realms/meteor-hub.html` | `prime/locations/meteor-hub.html` | Locations (locations) |
| `prime/realms/sys04.html` | `prime/locations/krynnspace.html` | Locations (locations) |
| `prime/realms/first-world.html` | `prime/locations/rykoe.html` | Locations (locations) |
| `prime/realms/ascension-world.html` | `prime/locations/oerth.html` | Locations (locations) |
| `prime/realms/tetherbreak.html` | `prime/locations/realmspace.html#perimeter-watch` | Locations (locations) |

## Stale branches

Seventy remote branches as of 2026-10-27; only `main` and `deep-lore-working` are live. The full list is in the pull request for this plan. They are deleted last, after Korey reviews the list.

## prime/notes consolidation

### Done (2026-10-27)

`prime/notes/` is deleted. Its rules now live in three files; `docs/` is pruned
from deploy.

| File | Holds |
|---|---|
| `CLAUDE.md` | folder map (current and the approved DM structure), the record and the data boundary, commands (`data.js`, `terms.js`), writing rules, naming, working flow, deploy and search, repo rules |
| `docs/SESSION-RUN.md` | the session run, with CHRONICLE merged in as step 2; sets and statuses named by record file |
| `docs/PAGE-GUIDE.md` | one page guide for player, DM and FIA pages: page rules, setting voice, DM structure and registers, page anatomy, dossiers, tags, the Voyages page, player pages, FIA voice |

References updated: `CLAUDE.md`, `scripts/data.js`, `data/bearing.js`,
`.github/workflows/check.yml` and `deploy.yml`, `prime/tracker/index.html`,
`prime/campaign/index.html`, `prime/scripts/dm-tracker.js`.

The retired notes and the rule checklist below are kept as the record of what
was carried.

### Retired notes

- **FIXES-DEMO-MIGRATION.md**: sixteen passes of CSS/demo migration logs (missing classes, sticky bar, overflow, register.css sections 1–16, rails, phones, quest loot). Durable lessons extracted above; the rest is history in git.
- **RESTRUCTURE-NOTES.md**: one-off bundle notes for the gate/hub, crew-logs → voyages rename, legibility pass, portrait CSS, inventory split, V004 manifest reconcile, dossier batch, search bleed, stat-row wrap. Durable rules extracted above.
- **DEPLOY-README.txt**: a zip-bundle deploy list from before Actions deploy; stale-file deletions already done; verification steps and "still pending" refer to the old flat prime/ layout and World Surveyor.
- **SEARCH-SETUP.md** "one thing you do once": done. Alias section: replaced. Remaining rules move to CLAUDE.md.
- **FIA-BREADCRUMBS.md** entries 1–2: paste-ready Brig drafts. Content belongs in BACKLOG/STAGING (as FIA page items) or is already placed; voice rules move to the guide.
- **WPG integrity-check script**: replaced by `data.js check`.
- **WPG tag list** (`is-locked`, `is-cosmic`, `is-stub`, `is-warn`, `is-info`): retired; zero uses on prime pages.
- **WPG hierarchy diagram and reference table**: pre-register layout (`remaking/` no longer exists; `ascension/`, `colony/`, registers missing).
- **WPG "Things in Play" / "Untethered" Realms subsections**: replaced by registers.
- **PS "Why the scroll had to go" and the tab-set history paragraphs**: rationale, not rules.
- **FIX "Still outstanding"**: `_templates/entity.html`, `build-data.js`, tracker Visited column: scaffolder is benched, Sheet retired.
- **Voyage-briefing-001/003/004 missing links** (RN, FIX, DEP): a BACKLOG item, not a guide rule.
- **Side-tab demos** (`demo-*-side-tabs.html`): folded into the site in pass 13.
- **`init.md`, `restricted.md`**: empty.
- **DEP "Tumak's homeworld renamed Lunarfoot"**: superseded (Lunarfoot is the clan).
- **FIX open UI calls** (FIA bearing strip, survey chart merge, nav-records 1024px clip, clickable blurb overlay): move to BACKLOG if still wanted.

### Rules to carry into the three docs

Lifted from the notes; each line keeps its source file. Conflicts with the new
writing rules are in BACKLOG.md § Repo and process.

### Data boundary and the record

- A record exists if and only if the crew has encountered the entity: met in person, or named to them. Everything else lives in `prime/` only. (DB, SR)
- An entity crosses into the record at first contact and keeps its DM dossier afterward. The record holds what the crew saw; the dossier holds what is true. (DB)
- Where each kind of fact lives: a met entity → a record in `data/*.json`; DM truth about it → `prime/data/overlay.json` under the same id, plus its dossier in `prime/dossiers/`; an unmet entity → `prime/` only; a power moving off-screen → a lane in `overlay.json` with its own `DM-` id. (DB, SR)
- The record is the only place a fact is entered. Pages are its rendering, written by hand. To correct a page, correct the record, run `derive`, edit the page to match. (DB, SR, PS; already in CLAUDE.md)
- `derive` fills mechanical fields; `check` runs on every PR and proves record, DM layer and pages agree, including every local link and anchor; `guard` runs in the deploy and asks only whether `data/` is fit to publish. (DB)
- The schema is closed and listed at the top of `scripts/data.js`. A new field is a change to that list, made in its own commit and named in the PR. (SR, DB)
- Authored fields (edit): `id slug name number kind parentId giverId fields objectives rewards voyages seen mentioned linked`. Derived (never edit): `type url links parent giver children within items progress`, plus `data/index.json`, `data/voyage.js`, `prime/data/dossiers.json`. (SR; matches data.js)
- The schema tests the key, not the sentence. A DM fact typed into a player field passes every check. That is what the two session-run approvals are for. (DB)
- `prime/` is gated in the browser and disallowed to crawlers, but it is published and the repo is public: out of the players' way, not secret. Anything that must stay private stays out of the repository. Same for the DM and FIA search indexes. (DB, SRCH)
- The Tracker (`prime/tracker/`) and the Voyages board read both layers directly. They are views; nothing is entered in them. (DB, SR)
- DM-side `overlay.json` keys per record: `urgency`, `next`, `note`, `dossier`, `voyages[n].beats`. Urgency and Next Planned Beat live here, never in `data/`. (DB, SR)
- A DM beat is what a voyage meant that the crew could not see: a planned beat that landed, a clue misread, something that moved behind them. It is the DM-side twin of a bullet. (SR)

#### Session run

- Steps 0–7: Open (branch + passing check) → Read → Chronicle (**approval 1**) → Extract (**approval 2**) → Record → Render → Check → Publish. Nothing written to the repo before approval 1; nothing to the record before approval 2. (SR; matches CLAUDE.md)
- A run needs nothing from an earlier chat. A run that stops halfway is picked up from its branch. (SR)
- Step 0: `git fetch origin main && git checkout -b claude/voyage-NNN origin/main`, then `check`. If it fails, fix it first in a separate commit; a run that starts on a disagreeing record cannot tell its mistakes from old ones. (SR)
- Inputs: source in Drive named `Caelestis _ The Spelljamming Academy _ Voyage NNN.txt` (transcript or dictation, same name); repo `royekx/caelestis`; Crew Logs = Google Doc "Voyages"; voyage number from the file name. (SR)
- Read order: CHRONICLE rules → the voyage's entry in `prime/campaign/voyages/index.html` (briefing, plan, corrections) → every record `name` and current state, `data/vocabulary.js` → Full Accounts of the last two voyages → the source in full. (SR)
- Extract works from the approved account, never the source. Output is one change table: Record | Change | Detail. (SR)
- Consider all seven sets every run (sessions, PCs, NPCs, factions, locations, items, quests). Usual misses: places visited, things changing hands, threads touched in passing. (SR)
- Match on id, never on name. A near-match name is a question for the DM, never a second record. (SR, CHR)
- New id: set prefix, hyphen, eight random letters/digits (`NPC-7wK4mB9x`). Never reused or edited. Prefixes per data.js: `SES PC NPC FAO LOC ITM QST`. (SR + data.js)
- Every record has a page; a new record is not finished until its page and its register row exist. (SR)
- Bullets go under `voyages[n].bullets`: one fact each, past tense, the account's own wording, only what the crew knows. (SR)
- `seen` if present, `mentioned` if only named. (SR)
- "Now" fields are overwritten, never a history: Current State, What They Last Learned, Status, Held By. Overview changes only when what the crew understands the thing to *be* has changed. (SR)
- Objectives hold what the party knows it must do next (decided, told, or the only reasonable inference). What they fought through is a bullet. Tick done, add new. (SR)
- `linked` is entered once, on either record; `derive` shows it on both. (SR)
- Status vocabulary is in-world and fixed per set: crew/factions Active; cast Active · Deceased; places Accessible · Simulated; things Held · Lost; threads Open · Complete. A new value is a question for the DM. (SR)
- Player render surfaces: new `voyages/voyage-NNN.html` from `voyage-template.html` (At a Glance, Brief Account, Full Account, Recording); previous voyage's next link; `voyages/index.html` row + Overview; `bearings/voyage-NNN.html` from the previous one; `bearings/index.html` = copy of latest; `data/bearing.js`; `data/vocabulary.js` (every new proper noun); each changed record's page (new voyage becomes latest block, old moves to Previous Voyages; stat rows, overview, objectives, Connections); each new record's page from a sibling with `data-entity` set; every register index. (SR) *Bearings rows depend on refactor call 3.*
- Brief Account and At a Glance are taken from the approved Full Account and add nothing it does not say. (SR)
- DM render surfaces: `prime/campaign/voyages/index.html` (Actual, Delta, clear its flags, player link, Next session block); `spine.html` if an arc beat closed; `plot-hooks.html` for hooks that moved; `prime/dossiers/*` History, in-world, for anyone who acted; `prime/crew/` only if a PC's mechanics changed. (SR)
- Check: zero errors before the PR; warnings fixed or named in the PR. Then open the changed pages in a browser once. (SR)
- What `check` cannot see (the approvals cover it): whether a bullet is true to the session, whether a fact belongs player-side at all, voyage glance/Brief/Full prose, bearing wording, any `prime/` prose, the Crew Logs doc. (SR)
- Publish: append Full Account to "Voyages" under `Voyage NNN – Title`; one PR per voyage titled `Voyage NNN: Title`, body = the change table + check warnings; Korey merges; deploy publishes on merge. (SR)
- Standing rules: DM corrections outrank the source. A doubt is asked, never guessed (name, attribution, new status). Nothing invented to fill a gap. Earlier voyages are history: a later correction is recorded in the voyage where the crew learned it, earlier bullets stay as the crew understood things then, unless the DM rules otherwise. (SR)

#### The chronicle (Full Account)

- Player-facing; on the voyage page and appended to Crew Logs. Reads like the next chapter of one continuous fantasy-adventure novel, fully faithful to the table. (CHR)
- Infer source type. Transcript: order reliable, proper nouns and speaker attribution unreliable; correct names against the record, never guess attribution. Dictation: authoritative for events, names, attribution; rebuild loose chronology; never narrate asides; flagged doubt → treat as ambiguous transcript. The recap never says which it was. (CHR)
- Length is set by the source, not earlier voyages. Do not pad. Prose rules never license invention: no unsourced physical description; established description may carry forward. (CHR)
- Authority, high to low: DM corrections on `prime/campaign/voyages/` (written as events in sequence) → the record (spellings, names, pronouns, roles, state) → earlier voyages → the source. The record governs continuity only, never adds events. Apply record corrections silently. (CHR)
- Build the name list fresh each run from every record's `name` plus `data/vocabulary.js`. Known garbles as a guide: Calestis, Hakatha, Sareth Abazine, Aztec-6/Austech, Volkath, Vena (for Veena), Crick Lit (for Krik'Lit). (CHR)
- Perspective: only what was revealed, experienced, learned, witnessed or reasonably inferred this voyage or earlier. Exclude DM notes, future plot, unrevealed motives/identities/titles/affiliations, anything from `prime/` (corrections excepted, as perceived), rules/dice/classes/levels/feat names (render mechanics as lived experience), connections the players have not made, names for things only glimpsed. (CHR)
- Two checks every recap: perceived is not named; the narrator knows only what the crew knows. Unresolved stays unresolved; suspicion stays suspicion; an unexposed lie is written as experienced. (CHR)
- Style: third person ensemble; paragraphs open on a place or transition; deliberate short standalone sentences; em-dash allowed but never stacked; overlong sentences split; closes on a reflective paragraph naming what is still gathering. No bullets, scene rules or timestamps. Humour only where it happened. (CHR)
- Prose discipline, the core rule: render the specific thing, do not characterize the type of thing. Remove five tics: "the kind of / the way of"; definition by negation (one earned contrast max); clipped negation as false depth; the aphorism reflex; hollow intensifier framing. Applies even when the source used the construction. (CHR)
- Characters: consistent names; quote a handful of turning-point lines per voyage, spread through; no artificial equal space but register each cadet present; tie each vision to its cadet; unattributed actions stay "one of the cadets". Combat is a novel scene, never round-by-round (V001 simulation is the model). (CHR)
- Title: `Voyage NNN – Title`, en dash, three digits; short, evocative, never repeated; approved with the account. (CHR)
- Eight-point pre-approval checklist (names, continuity, corrections, attribution, spoilers, invention, voice, prose tics) and a DM-notes list after the account (uncertain attributions, near-match names, unreconciled corrections), never published. (CHR)

#### DM page shape (`prime/`)

- A callout is a one-breath aside inside prose. Anything with a table or more than one paragraph is a subsection with a heading. One callout treatment; `is-warn/is-cosmic/is-info` no longer paint and are not used. (PS)
- Page opening: `dm-page-header` with eyebrow `Section · Kind`, `<h1>`, and one-paragraph lede carrying the routing (what is here, what is elsewhere, where terms are defined). No "how to use this page" box. A page that has to explain how to read it has the wrong shape. (PS)
- Top-level sections are `<details class="dm-collapse-section">` with `<h2>` in the summary; three or more become a tab strip via `dm-sections.js`. Subsections `<h3>`, then `<h4>`; inside a dossier tab start at `<h4>`. (PS)
- Dossier tabs, in order, only those with content, never a one-off name: Who they are (in-world) · What they want (in-world) · DM notes (DM) · Stat block. DM notes subsections in order: What's hidden (in-world) · Threads · How to run them · Open. Labels never inflect for the subject. History folds into Who they are. (PS) *See Conflicts #1 and #2.*
- Voice: in-world tabs state what is true, not what it is for. "The crew"/"the party" are in-world nouns; "the players", "the campaign", "the session", "the scenario" are not. (PS)
- Link a name that has its own page on first weighty mention per panel; leave passing nouns alone. (PS) Candidate addition from the cosmic-campaign sweep (BACKLOG): concept backlinks deep-link to the section, not the page.
- Bold marks the one claim a tab turns on. Italics for sentence emphasis, bold for terms to retain, both sparingly. (PS, WPG)
- A thing gets a page; a concept gets a section. A stub page is a correct outcome. A concept earns a page only when a section can no longer hold it. (PS)
- Registers and what they hold: dossiers = anything with a will; realms = places, grouped by system; vessels = ships with a name and history; artifacts = objects carried, held or used; factions; crew. Cosmology and rules = sections; glossary = lines. (PS)
- A register page is a narrowable list: search field, facet pills (AND across axes, OR within), result count, clear control, rows expanding in place and linking through. It loads `dm-nav.js` and `dm-register.js` only (no tab strip, no TOC). Axes come from `data-` attributes on pills; a row may hold several space-separated values on one axis. Concept material sits as a collapsed section below the rows; tools are embedded (`.dm-embed`, "Open full"). (PS)
- Register axes: realms system/kind/standing; dossiers side/kind/standing; factions reach/posture; crew where the rules live; vessels where/standing/depth; artifacts fragment/standing. (PS)
- A container (faction, system, ship) gets a page; its members get `.dossier-row`s on it (portrait, name, role, one-line read, expand, link to their own entry). The row is the quick read, not the entry. One representation per entity: no separate status table, no table-plus-notes duplication. (PS, WPG)
- Which register: a dossier answers "what is it and what does it want" (earned when a DM has to play it); a Realms entry answers "what happens when we go inside"; a Vessels entry is any named ship with a history, interior included; Artifacts never holds a vessel. A dossier and a vessel entry for the same ship is normal (Vth'oramu yes/yes; tyrant ship vessel only). (PS; matches refactor rule)
- Containers get entries even when thin (SYS-01, SYS-04). Every dossier carries a Kind line in its identity card. (PS)
- Tags: four classes, no fifth. `is-canon` (Canon, Played) · `is-open` (own label, three words max) · `is-dm` (DM only) · `is-kind` (Character, Object, Place, Event, Pattern). A tag is a label, never a sentence; never restates adjacent text; a fact about the subject is a stat row, not a tag. `is-locked`/`is-stub` stay retired. Tags are stripped from the TOC by `dm-toc.js`. (PS, WPG) *`is-open` placement: Conflicts #2.*
- Plot Hooks rows: type tags with `is-canon` styling; status pill `dossier-status is-active | is-forthcoming | is-imminent | is-inactive` (all four are live). (WPG)
- Voyage entries (planned): What this session can pay · The swap / cast changes · Settled · Open · To run. Played: Briefing, Actual, Delta, using the `voyage-grid` / `voyage-delta` markup. Most recent first; upcoming in a Next session block on top. (PS, WPG)
- Setting describes what an entity is, currently. No comparative absolutes ("the only known X"); no authorial planning, framing, forward planning or player-facing meta; no option menus (commit to what is true, rewrite if it changes); no "Running the X" sections; no PC roster as illustration of a principle. Current state that implicates PCs and permanent history the campaign created both stay. The one-shot DM test: if a DM running a different campaign in this universe would delete the sentence, it is misplaced. (WPG; this is the new in-world-voice rule with worked examples)
- Campaign pages reference setting pages, not the reverse (exception: an artifact's custody line). (WPG)
- Functional headings: declarative, never questions; no enumeration leftovers ("D — The End" → "Failure state"); no stylistic "The" except where it is part of a world-object's name (The Reach, The Hollow, The Bridge). (WPG)
- Anchors: kebab-case, semantic, brief; part of the public contract; rename only with a reference sweep and `check`. (WPG)
- Cross-references are relative. External links: `target="_blank" rel="noopener" class="dm-link-external"`. (WPG) Record urls: site-relative, no leading slash (CLAUDE.md).
- Head template: charset, viewport, `robots noindex,nofollow`, title `[Page] · Caelestis · DM`, `caelestis.css` + `dm.css` (+ `entity.css` on entries), `dm-nav.js` from `prime/scripts/`. (WPG, corrected: WPG's `[base]/scripts/dm-nav.js` paths are wrong; live pages use `../scripts/dm-nav.js`.)
- Default open: Spine (Central Question, Arcs, Arc 1); Voyages (Next session, Record, most recent voyage); Plot Hooks (Active). Everything else closed. (WPG; drop the hard-coded "V003")
- `dm-nav.js` refuses to render outside `/prime/`; player `nav.js` stays separate. Never load DM scripts on a player page. (WPG)

#### Player pages

- A named presence gets a player dossier under `dossiers/`: met, mentioned or only heard (Beshaba from laughter, the Runekeeper from a voice). It carries only what the table has, sourced to the voyage, with "named only"/"laughter only" in Last Seen when that is all. The player and DM dossiers never mirror each other. (PS; matches refactor rule 1)
- Ships the crew encounters get a record and a page. (SR) *Shape: Conflicts #3.*
- Inventory: an entry is the ledger record (what it is, who holds it, what happened); an item is the readable object, where one exists. An entry with an object carries "The Object Itself" linking through, its ledger row gets a Readable badge, and the item links back. New entries start from `entry-template.html`. (RN, FIX) *Refactor proposes "one folder of item entries"; keep the entry/item rule either way.*
- Crew manifest reads species · class · station; Specialisation (e.g. Bartholomew's Wilder) is its own row, not the class. Stations are current assignment and expected to move. (RN)
- Every new player page carries `data-pagefind-filter="section:<top-level dir>"` on `<body>`, one bare value only. Pagefind reads a comma list as a single filter, so extra facets each need their own element. (SRCH, FIX)
- Navigation chrome and listing containers that only repeat their target pages carry `data-pagefind-ignore` (prev/next bars, portrait labels, filter rows, `.crew-list`/`.dossier-list`/`.item-grid`, voyage overview panels), so index pages do not outrank or pollute detail pages. Named-but-unfiled lines stay indexed. (FIX, RN)
- Misspelling support: add every new proper noun to `data/vocabulary.js`; `scripts/spelling.js` corrects as a fallback only (query runs as typed first, then "Showing results for…"). Nothing goes on the page. (RN)
- Never reuse a retired path for different content; retire and redirect instead (the `crew-logs/` → `voyages/` lesson). Redirect stubs carry `data-pagefind-ignore`. (RN; directly relevant to refactor call 2)
- Every page declares a viewport meta. (FIX)
- A page that uses a shared component class must load the sheet it lives in (`railed`, `tabrail`, `board-tab`, `account-tab`, `ent-row`, `register`, `facets`, `entry-header`, `stat-card` → `entity.css`/`board.css`/`register.css`). Missing sheets caused three silent failures. (FIX)
- Layout guards worth one line each in the guide: use `html { overflow-x: clip }` never `overflow-x: hidden` on body (it breaks sticky); give grid/flex children `min-width: 0`; `auto-fit` needs a real track minimum, e.g. `minmax(min(210px,100%),1fr)`; inline scripts escape `</` as `<\/`; cut HTML with a depth-counting slice, never a greedy regex, and check `<div>` balance. (FIX)
- Portraits: every new face needs a line in `scripts/portraits.js` (DM) or `scripts/portraits-player.js` and the `<img>` baked into the page; nothing renders them at runtime while the scaffolder is benched. (FIX, WPG)
- Bespoke companion pages (wayfinder path, stellar chart) keep their own skin and carry a return link to their crew page; crew pages link out via `.companion-card`. (FIX)

#### Deploy and search

- Deploy runs on push to `main` (Pages source = GitHub Actions): builds three Pagefind indexes (player `/pagefind/`, DM `/prime/pagefind/`, FIA `/restricted/pagefind/`), runs `guard`, prunes, publishes. The index is never committed. (SRCH, deploy.yml)
- The security boundary is the index contents: the player glob names only player directories. A new player top-level folder must be added to the glob (and to the S.E.A.R.C.H. scope selector) or it is unsearchable. (SRCH, FIX) Note: `vessels/` is currently missing from the player glob.
- Pagefind indexes static HTML only; JS-injected text is not indexed. Debug via the Action's `--verbose` log: glob, static vs JS, section filter. (SRCH)
- Local test: the Action's `npx -y pagefind --site . --glob "{…}" --exclude-selectors "[data-pagefind-ignore], nav, .site-nav, footer"`. (FIX)
- Gated search pages check the same sessionStorage flags as their sections: DM `caelestis_continuum_auth`, FIA `caelestis_restricted_v1`. Client-side gating only. (SRCH)
- Player home is `hub.html` (the terminal); `index.html` is the gate, reachable only from the hub footer. Sidebar groups match the hub bands. (RN, FIX)

#### FIA (restricted/)

- The FIA is Fleet Intelligence speaking to Fleet personnel: dry, factual, bureaucratic, clipped; never mysterious or suggestive. The mystery comes from the reader noticing patterns the FIA has not connected. Write as an author mildly puzzled but professionally restrained. (FIA)
- FIA reports facts about incidents, not theories about coherent enemy projects. Never list Brig contents, never name the central artifact (now A.T.L.A.S.), never reference Vecna, the network or the Reach until they are FIA-readable. (FIA)
- The FIA is a separate security context: its own index, its own chrome, no bearing strip (left deliberately; Korey's call). (SRCH, FIX)

#### Naming (settled in these notes)

- H'Catha, never Hakatha (stub removed, portrait key removed). (DEP)
- Pffred, never Fred. (RN)
- Ostekk-6, Vocath, Saerthe Abizjn, Veena, Krik'Lit, Sor'kur, Winston Ryeback, Rindle Gearloft (from the garble and correction lists). (CHR, RN) *Vena/Veena and Crick Lit/Krik'Lit are inconsistent across notes; record spelling wins.*
- Jeffrey and Joffrey are two different people. (repo-refactor, kept for the guide)
- Lunarfoot is the clan; the Wayfinders' homeworld stays unnamed by doctrine. (BACKLOG supersedes DEP's "homeworld renamed Lunarfoot")
- The World Surveyor is retired; the artifact is A.T.L.A.S. (BACKLOG; WPG, DEP and FIA still say World Surveyor)
- Voyage, never session, in player-facing labels. Folder and file naming: `voyage-NNN`, three digits. (RN, SR)

## Promotes to

CLAUDE.md (folder map and rules), `scripts/nav.js`, `.github/workflows/deploy.yml` (search globs, prune list), `scripts/data.js` (record URLs).

## Open

None. Phase 2 (process notes) is done; phase 3 is next.
