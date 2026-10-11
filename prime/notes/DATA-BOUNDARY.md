# The data boundary

Where player-known material lives, where DM material lives, and the one rule
that decides which is which.

## The rule

> **A record exists if and only if the crew has encountered the entity.**

Met in person, or named to them. Everything else follows from it.

| | Lives in | Written by |
|---|---|---|
| An entity the crew has met | a record in `data/*.json` | a session run, from the approved account |
| DM truth about an entity they have met | `prime/data/overlay.json`, under that record's id, and its dossier in `prime/dossiers/` | a session run, or the DM |
| An entity they have **not** met | `prime/` only | the DM |
| A power moving off-screen | a lane in `prime/data/overlay.json` | a session run |

An entity crosses from `prime/` into the record **at first contact**, and keeps
its dossier afterward. The record holds what the crew saw; the dossier holds
what is true.

## The two layers

**`data/*.json` — the record.** Seven files: voyages, crew, cast, factions,
places, things, threads. One record per entity, keyed by a stable id that never
changes and is never reused. It holds only what the crew knows, so it is
player-safe by construction: there is no DM field in it to filter out. It is
published with the site.

**`prime/data/*.json` — the DM layer.** Keyed by the same ids, so one entity is
one id with two files' worth of knowledge.

| File | Holds |
|---|---|
| `voyages.json` | every voyage, its state, and whether the record has reached it |
| `overlay.json` | per record: urgency, next beat, notes, DM beats by voyage. Plus lanes for what the crew has never met |
| `dossiers.json` | derived: which DM dossiers exist and which record each belongs to |

The prep fields that were once published in the player data, Urgency and Next
Planned Beat, live in the overlay.

## How a fact moves

```
session source ─► Full Account ─► data/*.json ─► player pages
                   (approved)     prime/data/     DM pages, Tracker, board
                                  (approved)
```

- **The record is the only place a fact is entered.** Pages are its rendering.
  A page is corrected by correcting the record and rendering the page again.
- **Pages are written by hand**, during a session run. Nothing generates them.
- **`node scripts/data.js derive`** fills the fields that follow mechanically
  from the authored ones: links in both directions, parents and children, held
  items, progress, urls.
- **`node scripts/data.js check`** proves the record is sound and that every
  page displaying it agrees with it. It runs on every pull request.
- **`node scripts/data.js guard`** asks only whether `data/` is fit to publish.
  It runs in the deploy.
- **The Tracker** (`prime/tracker/`) and **the Voyages board** read both layers
  directly. They are views, and nothing is entered in them.

The method is in `SESSION-RUN.md`.

## What holds the boundary

1. **Construction.** The record's schema is closed. Every key a record may
   carry, and every field each set may hold, is listed at the top of
   `scripts/data.js`. None of them is a DM field, so a DM fact has no key in
   `data/` to sit under.
2. **The check.** `check` rejects any key or field outside that list, on every
   pull request.
3. **The deploy.** `guard` is the same test, and the deploy will not publish
   without it passing.

The schema tests the key, not the sentence. A DM fact typed into a player
field passes all three. That is what the two approvals in a session run are
for.

## What the boundary does not do

`prime/` is gated in the browser and disallowed to crawlers. It is published
with the site and it sits in a public repository, so it is out of the players'
way and it is not secret. `prime/data/` has exactly the exposure the rest of
`prime/` has. Anything that must stay private stays out of the repository.
