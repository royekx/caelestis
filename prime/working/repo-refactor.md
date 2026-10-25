# Repo refactor

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
| `crew-logs/` | Old brief and detailed logs V001–V004; index redirects to `voyages/` | Renamed to `voyages/` in August; kept for old links |
| `logs/` | Crew Logs: the Google Docs embed page | Distinct from voyage accounts |
| `crew-notes/` | Redirect stub to `logs/` (renamed in August) | Kept for old links |
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
| `assets/`, `styles/`, `scripts/` | Shared | `scripts/_benched/` is out of service |

### DM side

| Folder | What it is | Notes |
|---|---|---|
| `prime/` | DM wiki, 149 files | Overhaul planned separately |
| `prime/notes/` | Ten process docs, 3,200 lines | Several are one-off migration notes (FIXES-DEMO-MIGRATION is 1,002 lines). All are published with the site |
| `prime/working/` | Drafts, backlog, staging | Pruned from deploy |

### Clutter

- Empty placeholder files (one blank line each): `restricted/init.md`, `stellar-chart/init.md`, `wayfinder-path/init.md`, `prime/notes/init.md`, `prime/notes/restricted.md`, `handouts/README.md`.
- Redirect stubs: `crew-notes/index.html`, `crew-logs/index.html` (from the August renames). Retire once old links no longer matter.
- About 70 remote branches. Main's history was rewritten on 2026-10-18, so every old branch shows hundreds of commits "ahead" and none can be merged as is. Only `main` and the current working branch are live.
- `prime/notes/*.md` and `data/` ship with the site. The notes are DM process docs and should not be public files.

## Ground rules

- **Player and DM versions are separate on purpose.** A person, place, vessel or item can have a player page (what the crew knows) and a prime page (the DM truth). Same subject, two pages, is not duplication. A real duplicate is two pages on the same layer.
- **Vessels are vessels.** Ships are not locations and not items. Realms keep only what can be boarded as a place; ships live in the vessels register. (Ruled in the cosmic campaign chat; see `inbox/chat-cosmic-campaign-structure.md`.)
- **The refactor runs in tandem with the backlog.** Page moves and content rulings land together, so a page is rewritten once, in its new home, with ruled content.
- **`prime/notes/` is bloat.** A previous chat produced overlapping guideline docs. Consolidate to the few that are used (CLAUDE.md, the session run, one page guide, the data boundary) and retire the rest.

## Proposed shape

```
/                       index.html, hub.html
crew/                   the six crew pages
  bartholomew/aspects/  (was aspects/)
  casey/stellar-chart/  (was stellar-chart/)
  tumak/wayfinder-path/ (was wayfinder-path/)
voyages/                voyage accounts; the current bearing and timeline fold in here
people/                 NPC dossiers (was dossiers/)
places/                 locations (was navigation-records/, minus ships)
vessels/                ships, from navigation-records/ and vessels/
factions/               factions, including the Academy pages from spelljammer-nexus/
primer/                 the setting primer (was spelljammer-nexus/)
quests/                 unchanged
inventory/              one folder of item entries
handouts/               unchanged
restricted/             unchanged
search/                 unchanged
data/ assets/ styles/ scripts/
prime/                  DM wiki (overhaul separately)
docs/                   repo and process docs, not deployed (was prime/notes/)
```

Old URLs get one-line redirect stubs for a while, so links already shared with players keep working.

## Calls to make

1. Folder names. The shape above uses plain names (`people/`, `places/`). The current names are in-world (`navigation-records/`, `crew-manifest/`). Keep in-world names, or switch?
2. Old URLs. Keep redirect stubs, and for how long? Players have links in Discord.
3. Session accounts. Merge `bearings/`, `crew-logs/` and `logs/` into `voyages/`, or keep "current bearing" as its own page?
4. Order of work. Refactor the player side first and the prime overhaul second, or do both in one pass?
5. Stale branches. Delete all but `main` and the working branch?
6. `prime/notes/`. Which docs survive the consolidation, and do they move to an undeployed `docs/` folder?

## Promotes to

CLAUDE.md (folder map and rules), `scripts/nav.js`, `.github/workflows/deploy.yml` (search globs, prune list), `scripts/data.js` (record URLs).

## Open

The six calls above.
