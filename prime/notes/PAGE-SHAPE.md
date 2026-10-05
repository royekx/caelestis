# Page shape

The conventions the DM wiki already follows, written down so a page does not
have to be reverse-engineered before it can be edited. Everything here was
derived from the pages themselves; none of it is new policy.

## The one rule that decides most things

> **A callout is a one-breath aside inside a flow of prose.**
> Anything carrying a table, or more than one paragraph, is a subsection and
> takes a heading.

This is the rule that was being broken most often. 27 blocks across 16 files
were headings' worth of content wearing an aside's chrome, which is what made
pages read as stacked boxes rather than as writing. A page with seven callouts
in one tab has seven subsections and no headings.

There is one callout treatment, not three. `is-warn`, `is-cosmic` and `is-info`
still parse and no longer paint, because they were applied with no consistent
meaning — "The objective" was info, "The visible symptom" was warn, "The pattern
is the person" was cosmic. Colour that teaches nothing only fragments the column.

## How a page opens

Every page opens the same way, and nothing explains how to read it.

```
<header class="dm-page-header">
  <div class="dm-page-eyebrow">Section<span class="sep">·</span>Kind</div>
  <h1>Name</h1>
  <p class="dm-page-lede">One paragraph: what is here, and what is elsewhere.</p>
</header>
```

The lede carries the routing — what this page holds, what the neighbouring page
holds instead, and where the terms are defined. Six pages used to open with a
second lede in a box labelled "What is on this page" or "How to use this"; a page
that has to explain itself before it starts is the learning curve. Those were
folded into the lede and the boxes deleted.

## Sections

Top-level sections are `<details class="dm-collapse-section">` with an `<h2>`
inside the `<summary>`. On a page with three or more, `dm-sections.js` converts
them into a tab strip and keeps the active one expanded.

Subsections are `<h3>`, and `<h4>` below that. Inside a dossier tab, start at
`<h4>` — the tab label is already doing the `<h3>` job.

## Dossiers

One shape, every character:

| Tab | Voice | Holds |
|---|---|---|
| Bio | in-world | who they are now |
| History | in-world | what happened, in order |
| Beliefs | in-world | what they think is true |
| Secrets | in-world | what is true that they would not say |
| At the table | DM | how to run them, what is open, what to decide |
| Stat Block | — | the block, if they have one |

Include only the tabs with content. Never invent a one-off tab name.

**The voice rule.** Bio, History, Beliefs and Secrets are written from inside the
world. They state what is true, not what it is for. "At the table" is where the
DM voice belongs — design notes, open calls and advice live there and nowhere
else. "The crew" and "the party" are in-world nouns and stay; "the players",
"the campaign", "the session" and "the scenario" are not.

**Bold marks the one claim a tab turns on.** If three things are bold, none of
them are.

## Open questions

A call that has not been made gets `<span class="dm-tag is-open">` with a short
label, not a sentence of authorial hedging. "Undecided", "Held open" and "Your
call" as prose were replaced by the tag, which is the convention the rest of the
wiki already used.

## Voyages

Each voyage entry carries the same slots, and the slot is chosen by what kind of
note it is rather than by how important it felt:

- **What this session can pay** — the outstanding debts in reach
- **The swap / cast changes** — who joins and leaves
- **Settled** — decided, and not being revisited
- **Open** — calls still to make
- **To run** — how it plays at the table

A played voyage carries Briefing, Actual and Delta instead.

## Prose

- No stacked negations. Three or more of no/not/never/nothing/none/without/nor
  in one sentence is a rewrite.
- Canon voice, not changelog voice. A page states what is true; it does not
  narrate its own editing history.
- Near-encyclopedic detail, no padding.

## Where things live

| | Holds |
|---|---|
| `prime/` | DM canon. Everything the players should not read. |
| the site root | player-facing, indexed, published. |
| the Google Sheet | the operational snapshot of what the party knows. |
| `data/raw/` | the verbatim machine dump. Never hand-edited. |
| `data/*.json` | the player-safe output of `transform.js`. |

A fix to published data belongs in the Sheet, or in `transform.js`'s overlays
when the tracker cannot express it. See `DATA-BOUNDARY.md`.
