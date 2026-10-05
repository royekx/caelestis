# The data boundary

Where player-known material lives, where DM material lives, and the one rule
that decides which is which.

## The rule

> **A tracker row exists if and only if the players have encountered the entity.**

Everything else follows from it.

| | Lives in | Written by |
|---|---|---|
| An entity the players have met | a Google Sheet tracker row | the triage agent, from the recap |
| DM truth about an entity they have met | that row's `Key Details (DM)` / `Overview (DM)` | you, by dictation, via the DM agent |
| An entity they have **not** met | `prime/` only | you |
| A PC's hidden interior | the character arc tracker (`Visibility`: Public / Hidden / Private) | the arc agent |

The campaign tracker's own README states the intent: *"It is framed around what
the players know"* and *"Only record what the players know; deep hidden material
lives in separate DM notes."* The rule above is that sentence made operational.

## Why entity rows and not a Visibility flag

`Visibility: DM` on a **row** was the earlier answer, and it works mechanically —
`transform.js` drops those rows. It fails for three other reasons.

1. **It creates a second canon.** The `prime/` wiki is the DM source of truth. A
   `Visibility: DM` row is a one-line stub of something already written properly
   in `prime/`, so the two drift and you reconcile by hand. That is exactly the
   friction the data-driven rebuild was meant to remove.
2. **It drifts stale.** The three rows this rule retired were
   *Order of the All-Father*, *Watchers* and *Vecna's network*. The first two were
   one-sentence summaries of full `prime/factions` sections. The third described a
   faction that **no longer exists** — the network was retired and replaced by the
   Seekers — so the tracker was carrying superseded canon that nothing updated.
3. **It puts DM material on the wrong side of the publish boundary.** `data/raw/`
   is a verbatim dump committed by n8n, so a DM row travels into the repo and,
   with `path: .`, onto the public site. The filter has to work perfectly forever
   for that to stay safe. Keeping DM entities out of the Sheet means the raw dump
   is **player-safe by construction**, and the filter becomes a second line rather
   than the only one.

`Visibility` stays useful. It still marks the **columns** to drop
(`Key Details (DM)`, `Overview (DM)`, `action`, `sheet`, `Sessions Since`,
`Heat`, `Flag`) and it remains a working safety net for rows. It just stops being
the mechanism the boundary depends on.

## What the two halves hold

**The Sheet** — the operational snapshot of what the party knows. Current state,
what to prep next. Seven tabs, each row keyed by a stable 8-character `id`.

**`prime/`** — DM canon. Cosmology, the antagonist, factions the crew has never
heard of, NPC interiors, the arc spine, rulings. Far richer than a tracker cell,
and under version control.

An entity crosses from `prime/` into the Sheet **at first contact**, and keeps its
`prime/` dossier afterward. The row holds what the party saw; the dossier holds
what is true.

## The pipeline contract

```
Google Sheet  ──n8n Workflow C──►  data/raw/*.json  ──transform.js──►  data/*.json
  player-known                      VERBATIM dump            drops DM rows + DM columns
  by construction                   machine-written          player-safe output
```

- **Never hand-edit `data/raw/`.** It is regenerated on every publish, so an edit
  is overwritten and the repo silently drifts from the Sheet. If something is
  wrong there, fix the Sheet.
- **`transform.js` is the designated filter.** All seven builds drop
  `Visibility: DM`. (`pcs` and `sessions` were missing that check until it was
  added — worth remembering that the filter is per-build, not global.)
- **The deploy prunes machine inputs from the artifact**: `data/raw/`, the two
  build scripts, `coverage.md`, and the `*-template.html` files. The repo keeps
  them; only the published tree loses them.
- **CI fails the deploy** if a published JSON would carry a `Visibility: DM` row
  or a DM column with content.

## Known gap

The spec says *"a GitHub Action handles all transformation logic."* It does not
yet — `deploy.yml` builds the three Pagefind indexes and uploads, with no
transform step, because the scaffolder is benched and pages are maintained as
rendered static HTML. So `transform.js` runs by hand, and its filters are
**dormant in CI**. The prune step and the guard are what actually hold the
boundary today.
