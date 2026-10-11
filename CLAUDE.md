# Caelestis

The site for a homebrew Spelljammer campaign. Player-facing pages at the root,
the DM wiki under `prime/`. Static HTML on GitHub Pages at `/caelestis/`.

## The record

`data/*.json` is the campaign record: what the crew has met, kept by hand.
`prime/data/*.json` is the DM layer over it, keyed by the same ids. Pages are
written by hand from the record. Nothing generates them.

```bash
node scripts/data.js derive   # after editing the record
node scripts/data.js check    # must report 0 errors before a pull request
```

A fact is entered in the record and nowhere else. To correct a page, correct
the record, run `derive`, and edit the page to match. The record's schema is
closed and listed at the top of `scripts/data.js`.

## When given a session transcript or a dictation

Follow `prime/notes/SESSION-RUN.md` from step 0. It has two approval points.
Do not write to the repo before the first or to the record before the second.

## Read before editing

| For | Read |
|---|---|
| a session run | `prime/notes/SESSION-RUN.md`, `prime/notes/CHRONICLE.md` |
| player or DM data | `prime/notes/DATA-BOUNDARY.md` |
| any page under `prime/` | `prime/notes/PAGE-SHAPE.md`, `prime/notes/WIKI-PAGE-GUIDE.md` |

## Rules

- Nothing from `prime/` reaches `data/` or a player page.
- Record urls are site-relative with no leading slash. An absolute path
  resolves above `/caelestis/` on Pages.
- Prose: no stacked negations, canon voice, in-world voice on narrative tabs.
- Changes go up as a pull request for review. Do not push to `main`.
- `scripts/_benched/` is out of service. Do not run it.
