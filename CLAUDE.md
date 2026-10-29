# Caelestis

The site for a homebrew Spelljammer campaign. Player-facing pages at the root,
the DM wiki under `prime/`. Static HTML on GitHub Pages at `/caelestis/`.

## When given a session transcript or a dictation

Follow `docs/SESSION-RUN.md` from step 0. It has two approval points.
Do not write to the repo before the first or to the record before the second.

## Read before editing

| For | Read |
|---|---|
| a session run | `docs/SESSION-RUN.md` |
| any page: player, DM (`prime/`) or FIA (`restricted/`) | `docs/PAGE-GUIDE.md` |
| drafts, BACKLOG, STAGING | `prime/working/README.md` |
| the record or the DM layer | § The record, below |

## Folder map

| Side | Folders |
|---|---|
| Player (root) | `index.html` (the gate), `hub.html` (the terminal, the player home), `voyages/`, `bearings/`, `logs/`, `crew-manifest/`, `dossiers/`, `factions/`, `navigation-records/`, `vessels/`, `quests/`, `inventory/` (`entries/`, `items/`), `handouts/`, `spelljammer-nexus/`, `search/`; companion pages `aspects/`, `wayfinder-path/`, `stellar-chart/` |
| FIA | `restricted/`: the Fleet Intelligence Archive, gated, its own chrome and index |
| DM | `prime/`: the DM wiki, gated |
| Record | `data/` (player-safe), `prime/data/` (DM layer) |
| Shared | `assets/`, `styles/`, `scripts/` (player and build scripts), `prime/scripts/` (DM scripts) |
| Process, not deployed | `docs/`, `prime/working/`, `CLAUDE.md` |

**DM side today**: `campaign/` (index, `voyages/`, `plot-hooks.html`), `opposition/` (`vecna.html`, `vthorama.html`), `tracker/`, `timeline/`, `crew/`, `dossiers/`, `factions/`, `statblocks/`, `cosmology/`, `locations/`, `vessels/`, `artifacts/`, `chart/`, `rules/`, `glossary/`, `principles.html`, `hub.html`, `search.html`.

**DM side target** (approved 2026-10-27; moves land page by page, see
`prime/working/repo-refactor.md` § 3 and its link catalogue):

| Nav group | Pages |
|---|---|
| Play | Voyages · Tracker · Plot Hooks · Stat Blocks · Rules |
| Story | Campaign (`campaign/index.html`) · Opposition (`opposition/vecna.html`, `opposition/vthorama.html`) · Timeline |
| People | Crew · Dossiers · Factions (`factions/fleet.html` for the Fleet) |
| World | Cosmology · Locations (`locations/`, was `realms/`) · Vessels · Artifacts · Chart |
| Reference | Glossary · Principles (`principles.html`) |

DM folders and pages use plain, functional names. Player folders use in-world
names that are functional and distinct (`dossiers/`, `inventory/`).

**Two versions of the same subjects.** A dossier, location, vessel or item can
have a player page and a DM page. The DM page almost always holds more; the
player page holds only what the crew knows, and only for entries the crew has
met or been told of. Same subject on both sides is not duplication.

## The record

**A record exists if and only if the crew has encountered the entity**: met in
person, or named to them. An entity gains a record at first contact and keeps
its DM dossier afterward. The record holds what the crew saw; the dossier holds
what is true.

| Fact | Lives in |
|---|---|
| an entity the crew has met | a record in `data/*.json` |
| DM truth about a met entity | `prime/data/overlay.json` under the same id, and its dossier in `prime/dossiers/` |
| an entity the crew has not met | `prime/` only |
| a power moving off-screen | a lane in `prime/data/overlay.json`, with its own `DM-` id |

**`data/`**, the record: `sessions.json`, `player-characters.json`,
`npcs.json`, `factions.json`, `locations.json`, `items.json`, `quests.json`.
One record per entity, keyed by an id that never changes and is never reused.
It holds only what the crew knows and is published with the site.

**`prime/data/`**, the DM layer, keyed by the same ids:

| File | Holds |
|---|---|
| `voyages.json` | every voyage, its state, whether the record has reached it |
| `overlay.json` | `entities`: per record `urgency`, `next`, `note`, `dossier`, `voyages[n].beats`; `lanes`: powers the crew has never met |
| `dossiers.json` | derived: which DM dossiers exist and which record each belongs to |
| `connections.json` | the Connections view on `prime/timeline/` |
| `survey.json` | the DM's survey of systems, kept by `scripts/survey.js` |

Urgency and Next Planned Beat live in the overlay, never in `data/`.

**Fields.** Authored (edit): `id slug name number date kind parentId giverId fields
objectives rewards voyages seen mentioned linked`. Derived (never edit): `type
url links parent giver children within items progress`, plus `data/index.json`,
`data/voyage.js`, `prime/data/dossiers.json`.

**Rules of the record.**

- A fact is entered in the record and nowhere else. Pages are written by hand
  from it; nothing generates them. To correct a page, correct the record, run
  `derive`, and edit the page to match.
- The schema is closed and listed at the top of `scripts/data.js`. A new field
  is a change to that list, made in its own commit and named in the pull request.
- The schema tests the key, not the sentence. A DM fact typed into a player
  field passes every check; the two session-run approvals catch it.
- Nothing from `prime/` reaches `data/` or a player page.
  The one exception: a companion page (`aspects/`, `wayfinder-path/`,
  `stellar-chart/`) keeps its password-protected DM mode on the player page,
  by mutual trust with the players. Leave those modes where they are.
- The Tracker (`prime/tracker/`) and the Voyages board read both layers. They
  are views; nothing is entered in them.
- `prime/` and the DM and FIA search indexes are gated in the browser and
  disallowed to crawlers, but published from a public repository: out of the
  players' way, not secret. Anything that must stay private stays out of the
  repository.

## Commands

```bash
node scripts/data.js derive   # after editing the record: fills derived fields
node scripts/data.js check    # record, DM layer and pages agree, every local link and anchor resolves, player pages keep the boundary; 0 errors before a pull request
node scripts/terms.js         # retired terms, decision voice, moved paths on prime/, restricted/ and the player site; rules in prime/working/terms.json
node scripts/visual.js capture <dir> [--player] / diff <before> <after>   # screenshots and pixel diff; usage in its header
```

`node scripts/data.js guard` runs in the deploy and asks only whether `data/`
is fit to publish. Both `check` and `terms.js` run on every pull request.
`terms.js --list` gives each hit; a folder listed as finished in `terms.json`
fails on any hit.

## Writing

These hold on every page, staged entry and doc. Page-level rules are in
`docs/PAGE-GUIDE.md`.

- **Specific over sparse.** Write the detail out. A long, exact entry beats a
  generic line.
- **Plain, simple, precise.** Short sentences, concrete nouns, definite verbs,
  no hedging. Skip rhetorical questions and "it's not just X, it's Y".
- **In-world voice** for anything that exists in the world: people, places,
  items, factions, history, events. "Thessalar's craft fell about 500 years
  ago," never "Korey decided the craft fell".
- **DM voice** for how it is played: mechanics, rules, encounter tables,
  session plans, pacing.
- **Open questions stay on the planning layer**: BACKLOG, drafts, planning
  pages and DM notes tabs. If a detail is unknown, say what is known and stop.
  Rewrite the entry when a ruling changes.
- **Canon voice, not changelog voice.** A page states what is true; it does not
  narrate its own editing history.
- **No stacked negations.** Three or more of no/not/never/nothing/none/without/nor
  in one sentence is a rewrite (`check` flags them).
- **No three short sentences in a row for emphasis.** Vary the rhythm; let one sentence carry the weight.
- **Names.** Avoid "The" plus a vague word ("the Figure"). Places and celestial
  bodies get proper names, often paired with a catalogue designation.
  Constructs and concepts get plain, definitive descriptions. People may carry
  monikers.

## Naming

The record's `name` is the spelling authority; `data/vocabulary.js` lists every
proper noun. Settled:

- H'Catha (never Hakatha). Pffred (never Fred). Sor'Kur, Veena, Krik'Lit,
  Ostekk-6, Vocath, Saerthe Abizjn, Winston Ryeback, Rindle Gearloft.
- Jeffrey and Joffrey are two different people.
- Lunarfoot is Tumak's clan; the Wayfinders' homeworld is unnamed.
- The artifact is A.T.L.A.S.; "World Surveyor" is a retired term.
- Player-facing labels say voyage, never session. Files are `voyage-NNN`,
  three digits.

## Working flow

`inbox/ → drafts → BACKLOG.md → STAGING.md → pages`, all under
`prime/working/`. Deliberation lives in drafts and BACKLOG; STAGING and pages
state what is. Rules: `prime/working/README.md`.

## Deploy and search

- Deploy (`.github/workflows/deploy.yml`) runs on push to `main`: builds three
  Pagefind indexes (player `/pagefind/`, DM `/prime/pagefind/`, FIA
  `/restricted/pagefind/`), runs `guard`, prunes process files, publishes. The
  index is never committed.
- The player glob in `deploy.yml` is the security boundary: it names only
  player folders. The companion pages and `search/` stay out of it. A new player top-level folder goes into the glob and into the
  S.E.A.R.C.H. scope selector (`search/index.html`), or it is unsearchable.
- Pagefind indexes static HTML only. To debug, read the Action's `--verbose`
  log. To test locally, run the Action's `npx -y pagefind --site . --glob "{…}"
  --exclude-selectors "[data-pagefind-ignore], nav, .site-nav, footer"`.
- Every player page carries `data-pagefind-filter="section:<top-level dir>"` on
  `<body>`, one bare value. A further facet needs its own element.
- Navigation chrome and listing containers that only repeat their target pages
  carry `data-pagefind-ignore` (prev/next bars, portrait labels, filter rows,
  `.crew-list`, `.dossier-list`, `.item-grid`, voyage overview panels). Named
  entries with no page of their own stay indexed.
- Misspellings: add every new proper noun to `data/vocabulary.js`.
  `scripts/spelling.js` corrects only when the query as typed finds nothing.
  Nothing goes on the page.
- Gated search pages check their section's sessionStorage flag: DM
  `caelestis_continuum_auth`, FIA `caelestis_restricted_v1`.

## Rules

- Changes go up as a pull request for review. Do not push to `main`.
- Record urls are site-relative with no leading slash. An absolute path
  resolves above `/caelestis/` on Pages.
- A moved page updates every link to it in the same commit, joins the link
  catalogue in `prime/working/repo-refactor.md`, and goes on the moved list in
  `terms.json`. Old paths get no redirect. A retired path is never reused for
  different content.
