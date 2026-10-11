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
| What it is | in-world | nature, current state, and how it got here |
| What it wants | in-world | motive, drive, what it is for |
| What's hidden | in-world | true and unrevealed |
| Running it | DM | how to play it, what is open, what to decide |
| Stat block | — | the block, if it has one |

Every tab answers a question in the same form, so the set works whether the
subject is a person, a ship, a faction or a place. The earlier set — Bio,
History, Beliefs, Secrets, At the table — sat on four different axes at once
(subject matter, disclosure, audience, format), which is why it read as five
unrelated words. History was on 8 of 35 pages and folded into *What it is*.

Include only the tabs with content. Never invent a one-off tab name.

**The voice rule.** *What it is*, *What it wants* and *What's hidden* are written
from inside the world. They state what is true, not what it is for. *Running it* is where the
DM voice belongs — design notes, open calls and advice live there and nowhere
else. "The crew" and "the party" are in-world nouns and stay; "the players",
"the campaign", "the session" and "the scenario" are not.

**Bold marks the one claim a tab turns on.** If three things are bold, none of
them are.

## Group by likeness

The rule that decides where anything goes, and whether it gets a page.

> **A thing gets a page. A concept gets a section.**

A **thing** — a person, a place, a vessel, a physical object — has an entry
page of its own, however thin, and sits on a register of its own likeness.
A stub page is a correct outcome: a name, what little is known, and the tag
that says so. It is better than a bullet in a list, because next time there is
somewhere to put the next fact.

A **concept** — a mechanic, a cosmological principle, a term — is a section on
the page about its parent subject. Zeniths, Monoliths, hearts and Atria are
sections of Cosmology, not pages. A concept earns a page only when it grows
involved enough that a section can no longer hold it.

| Register | Holds | Each entry |
|---|---|---|
| `dossiers/` | people, and anything with a will | a page |
| `realms/` | places, grouped by sphere | a page |
| `vessels/` | ships with a name and a history | a page |
| `artifacts/` | objects that are carried, held or used | a page |
| `cosmology/` | how the universe works | a section |
| `rules/` | adjudication | a section |
| `glossary/` | definitions | a line |

### What a register page looks like

Not a scroll. A list you can narrow:

- a search field, filtering as you type
- facet pills, one group per axis — AND across axes, OR within one
- a result count, and a clear control that appears when a filter is on
- rows that expand in place for a preview, and link through to the entry

`prime/scripts/dm-register.js` drives all of it and knows nothing about the
subject: axes are discovered from whatever `data-` attributes the pills carry,
so a page adds a filter by adding a pill group. `prime/vessels/` is the worked
example.

### Why the scroll had to go

A reference page written as one long document works until there are more than
a dozen entries, and then it stops: no way to find one thing, no way to see
what exists, and a new entry means wedging another section into a document
that is already hard to navigate. Realms had 66 collapsible sections across 11
tabs before this rule, which is the same problem at a scale where it is
obvious.

A page should also not have to explain how it works. If a page opens by
telling you how to read it, the shape is wrong.

## Which register a thing belongs in

The split already in use, stated so it stops looking like duplication.

> **A dossier answers "what is it, and what does it want."**
> **A Realms entry answers "what happens when we go inside."**

A thing earns a **dossier** when a DM has to play it — when it has motive,
something withheld, and a way it reacts to being pushed. That is not the same
as being a person: a construct, a celestial, a god or a ship under command all
qualify. The tab set is written to work for any of them.

A thing earns a **Realms entry** when the crew can go there and the interior is
the adventure. Realms already carries a *Vessels as places* section for exactly
this.

**Both is normal, and is not duplication.** The Vth'oramu has a dossier because
it is alive, under command, and has a role in the campaign; it has a Realms
entry because the crew will board it and walk around inside. The two answer
different questions and link to each other. The tyrant ship, by contrast, is
Realms only — it is a dungeon with no will, so there is nothing for a dossier
to hold.

**Artifacts** is for objects that are carried, held or used. A vessel is not an
artifact, however important it is.

| | Dossier | Realms | Artifacts |
|---|---|---|---|
| A person, a construct, a god | yes | only if you can go there | no |
| A ship with something driving it | yes | yes, if boardable | no |
| A ship that is only a place | no | yes | no |
| A thing you carry | no | no | yes |

Every dossier carries a **Kind** line in its identity card, so a vessel or a
construct is not mistaken for a character.

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
