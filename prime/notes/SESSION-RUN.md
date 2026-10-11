# Session run

One voyage in. The record, the player site and the DM side out, as one pull
request.

This is the whole method. A run needs nothing from an earlier chat: the state
is in the repo, and a run that stops halfway is picked up from its branch.

## At a glance

| # | Step | Produces | DM approves |
|---|---|---|---|
| 0 | Open | a branch, and a passing check | |
| 1 | Read | nothing written | |
| 2 | Chronicle | the Full Account and its title | **yes** |
| 3 | Extract | the change table, player side then DM side | **yes** |
| 4 | Record | `data/*.json`, `prime/data/*.json` | |
| 5 | Render | the pages that show the record | |
| 6 | Check | zero errors | |
| 7 | Publish | the Crew Logs entry and the pull request | merges it |

Two approvals. Nothing is written to the repo before the first, and nothing is
written to the record before the second.

## What a run needs

| | Where |
|---|---|
| The session source | Drive, named `Caelestis _ The Spelljamming Academy _ Voyage NNN.txt`. A transcript, or a dictation saved under the same name |
| The repo | `royekx/caelestis`, with push access |
| The Crew Logs document | Google Doc titled "Voyages" |
| The voyage number | from the file name |

## 0 · Open

```bash
git fetch origin main && git checkout -b claude/voyage-NNN origin/main
node scripts/data.js check
```

The check must pass before anything changes. A run that starts on a record that
already disagrees with its pages cannot tell its own mistakes from old ones.
Fix what it reports first, in a separate commit.

## 1 · Read

In this order:

1. `prime/notes/CHRONICLE.md` — how the account is written.
2. The voyage's entry in `prime/campaign/voyages/index.html` — briefing, what
   was planned, and any **corrections** issued out of session.
3. The record: every `name`, plus current state for whoever is likely to
   appear. `data/vocabulary.js` for spellings.
4. The Full Account of the last two voyages, from `voyages/voyage-NNN.html`,
   for voice and for where things were left.
5. The source, in full.

## 2 · Chronicle

Write the Full Account to `CHRONICLE.md`. Give it to the DM in chat with:

- the proposed title
- the DM notes list: anything uncertain

**Stop for approval.** The account is the canon the rest of the run is taken
from. An error caught here costs one edit. Caught after step 5 it costs twenty.

## 3 · Extract

Work from the approved account, never from the source. Produce one table and
give it to the DM.

| Record | Change | Detail |
|---|---|---|
| Ostekk-6 `NPC-Hn4kW9vm` | bullets V005, Current State | … |
| *new* The Hollow Deck | location, in The Tyrant Ship | … |

### What counts as a record

> **A record exists if and only if the crew has encountered the entity.**

Met in person, or named to them. Everything else stays in `prime/`. At first
contact an entity gains a record and keeps its DM dossier.

### Rules for the player side

- **Consider all seven sets every run**: voyages, crew, cast, factions,
  places, things, threads. The usual miss is places visited, things changing
  hands, and threads touched only in passing.
- **Match on id, never on name.** A name close to an existing record and not
  identical is a question for the DM. Never a second record.
- **A new record** gets a new id: the set's prefix, a hyphen, eight random
  letters and digits (`NPC-7wK4mB9x`). An id is never reused or edited.
- **Every record has a page.** A new record is not finished until its page and
  its register row exist.
- **Bullets** go under `voyages[n].bullets`. One fact each, past tense, in the
  account's own wording. What the crew knows, and nothing they do not.
- **`seen` or `mentioned`.** Add the voyage number to `seen` if the entity was
  present, to `mentioned` if it was only named.
- **Fields that describe now are overwritten**: Current State, What They Last
  Learned, Status, Held By. They hold where things stand, never a history.
- **Overview** changes only when what the crew understands the thing to *be*
  has changed.
- **Objectives** hold what the party knows it must do next: decided, told, or
  the only reasonable inference. What they fought through to get there is a
  bullet. Tick what is done. Add what was newly taken on.
- **`linked`** is entered once, on either record. `derive` shows it on both.
- **The voyage itself** gets a record in `sessions.json` with its six summary
  fields.

Status vocabulary is in-world and fixed per set:

| Set | Status |
|---|---|
| Crew, factions | Active |
| Cast | Active · Deceased |
| Places | Accessible |
| Things | Held · Lost |
| Threads | Open · Complete |

A new value is a question for the DM.

### Rules for the DM side

Everything the players must not read goes in `prime/data/`, keyed by the same
record id, and never in `data/`.

| File | Holds | A run changes |
|---|---|---|
| `voyages.json` | every voyage, its state, whether the record has reached it | this voyage: `title`, `playerRecord: true`, `crewLog: true`. Adds the next voyage as `next` |
| `overlay.json` → `entities` | DM-only fields per record: `urgency`, `next`, `note`, `dossier`, and `voyages[n].beats` | urgency and next beat for every thread touched; DM beats for this voyage |
| `overlay.json` → `lanes` | powers the crew has never met, each with its own `DM-` id and beats by voyage | beats for anything that moved off-screen |

A **DM beat** is what a voyage meant that the crew could not see: a planned
beat that landed, a clue they read wrongly, something that moved behind them.
It is the DM-side twin of a bullet.

**Stop for approval.**

## 4 · Record

Edit the JSON by hand, authored fields only, then:

```bash
node scripts/data.js derive
```

| Authored — edit these | Derived — never edit |
|---|---|
| `id` `slug` `name` `number` `kind` `parentId` `giverId` | `type` `url` `links` `parent` `giver` |
| `fields` `objectives` `rewards` `voyages` `seen` `mentioned` `linked` | `children` `within` `items` `progress` |
| | `data/index.json` `data/voyage.js` `prime/data/dossiers.json` |

The record is closed: `derive` and `check` reject any key or field the schema
at the top of `scripts/data.js` does not list. A new field is a change to that
list, made in its own commit and named in the pull request.

## 5 · Render

Pages are written by hand from the record. Nothing generates them.

### Player side

| Surface | What changes |
|---|---|
| `voyages/voyage-NNN.html` | new, from `voyage-template.html`: At a Glance, Brief Account, Full Account, Recording |
| `voyages/voyage-(NNN-1).html` | its "next voyage" link |
| `voyages/index.html` | a row and its Overview |
| `bearings/voyage-NNN.html` | new, from the previous bearing page |
| `bearings/index.html` | a copy of the new bearing page |
| `data/bearing.js` | voyage, title, position, outstanding, consequence, quests, met, links |
| `data/vocabulary.js` | every new proper noun |
| each changed record's page | the new voyage becomes the latest block and the old one moves into Previous Voyages; stat rows; overview; objectives; Connections |
| each new record's page | new, from a sibling page of the same kind, with `data-entity` set to its id |
| each register | `crew-manifest/` `dossiers/` `factions/` `navigation-records/` `inventory/` `quests/` index pages: rows, overview text, progress, counts |

The Brief Account and At a Glance are taken from the approved Full Account.
They add nothing it does not say.

### DM side

| Surface | What changes |
|---|---|
| `prime/campaign/voyages/index.html` | this voyage's Actual and Delta; its pending flags cleared; the link to the player page; the Next session block for the voyage after |
| `prime/campaign/spine.html` | where the crew stands, if an arc beat closed |
| `prime/campaign/plot-hooks.html` | status of any hook that moved |
| `prime/dossiers/*.html` | History, in-world voice, for anyone who acted |
| `prime/crew/` | only if a PC's mechanics changed |

DM pages follow `PAGE-SHAPE.md` and `WIKI-PAGE-GUIDE.md`. The Tracker and the
Voyages board need no edit: they read the record.

## 6 · Check

```bash
node scripts/data.js check
```

Zero errors before the pull request opens. Warnings are read and either fixed
or named in the pull request.

| The check proves | The check cannot see |
|---|---|
| `data/` holds only keys the record has | whether a bullet is true to the session |
| ids, slugs and references are sound | whether a fact belongs on the player side at all |
| derived fields are current | a voyage page's glance, Brief and Full Account |
| each record's page shows its name, subtitle, overview, stat rows, pursuit, carried items, bullets under the right voyage, objectives, rewards, giver, parent and Connections | the wording of the bearing pages |
| each register row shows its record's name, overview, sub-line, state and progress | the bar's position, outstanding and consequence lines |
| each voyage page carries its number and title | the prose of any page under `prime/` |
| the command bar's voyage, title, quest names and progress | the Crew Logs document |
| `bearings/index.html` is the latest bearing page | |
| every local link and anchor on the site resolves | |
| the DM layer agrees with the record | |

The right-hand column is what the two approvals are for.

Then open the changed pages in a browser once.

## 7 · Publish

1. **Crew Logs.** Append the Full Account to the "Voyages" document under the
   heading `Voyage NNN – Title`.
2. **Pull request.** One per voyage, titled `Voyage NNN: Title`. The body is the
   change table from step 3 and anything the check warned about.
3. The DM reviews and merges. The deploy publishes on merge.

## Rules that hold in every run

- The record is the only place a fact is entered. A page is corrected by
  correcting the record and rendering it again.
- Nothing from `prime/` reaches `data/` or a player page.
- DM corrections outrank the source.
- A doubt is asked, never guessed: a name, an attribution, a new status.
- Nothing is invented to fill a gap in the source.
- Earlier voyages are history. A later correction is recorded in the voyage
  where the crew learned it, and earlier bullets stay as the crew understood
  things then, unless the DM rules otherwise.
