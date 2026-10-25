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
| `crew-logs/` | Old brief and detailed logs V001–V004; index is a "Moved" stub | Superseded by `voyages/` and `logs/` |
| `logs/` | Crew Logs index | Overlaps the two above |
| `crew-notes/` | "Moved" stub redirecting to `logs/` | Remove |
| `dossiers/` | 26 NPC pages | `jeffrey.html` and `joffrey.html` are copies with the name swapped |
| `factions/` | Factions index and one faction | Thin |
| `navigation-records/` | 19 places and ships | Ships overlap `vessels/` |
| `vessels/` | Vessels index | Thin |
| `spelljammer-nexus/` | Setting primer (spheres, wildspace, the Academy) | Overlaps `navigation-records/` and `factions/` |
| `quests/` | Quest board and 12 quests | Core |
| `inventory/` | Inventory, `entries/` (15) and `items/` (1) | `items/collection-manifest.html` duplicates `entries/collection-manifest.html` with different content |
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
- Redirect stubs: `crew-notes/index.html`, `crew-logs/index.html`.
- About 70 remote branches. Main's history was rewritten on 2026-10-18, so every old branch shows hundreds of commits "ahead" and none can be merged as is. Only `main` and the current working branch are live.
- `prime/notes/*.md` and `data/` ship with the site. The notes are DM process docs and should not be public files.

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
6. `prime/notes/`. Move to an undeployed `docs/` folder, merge the overlapping guides (PAGE-SHAPE, WIKI-PAGE-GUIDE), and retire the one-off migration notes?

## Promotes to

CLAUDE.md (folder map and rules), `scripts/nav.js`, `.github/workflows/deploy.yml` (search globs, prune list), `scripts/data.js` (record URLs).

## Open

The six calls above.
