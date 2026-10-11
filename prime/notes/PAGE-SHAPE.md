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
so a page adds a filter by adding a pill group.

Six pages are registers, and they are the six collections of things:

| Register | Entries | Axes |
|---|---|---|
| `prime/realms/` | places | system, kind, standing |
| `prime/dossiers/` | everyone the DM plays | side, kind, standing |
| `prime/factions/` | organized interests | reach, posture |
| `prime/crew/` | the player characters | where the rules live |
| `prime/vessels/` | ships | where, standing, depth |
| `prime/artifacts/` | things you carry | fragment, standing |

A row can hold several values on one axis, space-separated, which is how Joffrey
sits under both Caelestis and the colony. One axis is enough when there is only
one question worth asking, as on the crew.

### A thing that contains other things

A faction has members, a system has worlds, a ship has a crew. The container
gets a page; the things inside it get a row on that page, and the row expands
in place.

That is what `.dossier-row` is for, and it is the shape to reach for whenever a
page lists people: portrait, name, role, and a one-line read, with the fuller
paragraph a click away and a link onward to the entry of their own. A reader
scanning for who is in a faction never leaves the page; a reader who wants the
whole of someone is one click from it.

The row is not the entry. Anyone substantial enough to need motive, something
withheld, and a way they react to being pushed has a dossier, and their row
links to it. The row is the quick read.

A register page carries `dm-nav.js` and `dm-register.js` and nothing else. The
register is the page's navigation, so a section tab strip and a right-rail
table of contents both duplicate it.

Material that is a concept rather than an entry stays on the register as a
collapsed section below the rows — routes, the sphere table, the constellation
catalogue. A tool the page needs is embedded rather than linked away to: the
Cosmos Chart renders inside the sphere section in a `.dm-embed`, with
**Open full** for the times a chart in a panel is not enough.

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

A thing earns a **Realms entry** when it is somewhere the crew can go: a
system, a world, a station, a region, or a stop on a lane.

A thing earns a **Vessels entry** when it is a ship with a name and a history.
A ship is a thing rather than a place, so its interior belongs on its own
entry rather than in Realms. Realms says where it is; Vessels says what it is
and what is inside it.

**Artifacts** is for objects that are carried, held or used. A vessel is not an
artifact, however important it is.

| | Dossier | Realms | Vessels | Artifacts |
|---|---|---|---|---|
| A person, a construct, a god | yes | no | no | no |
| A ship with something driving it | yes | no | yes | no |
| A ship that is only a place | no | no | yes | no |
| A system, world, station or site | no | yes | no | no |
| A thing you carry | no | no | no | yes |

**A dossier and a vessel entry together is normal, and is not duplication.**
The Vth'oramu has a dossier because it is alive, under command, and has a role
in the campaign; it is a vessel because it is a ship. The tyrant ship has a
vessel entry only — it is a dungeon with no will, so there is nothing for a
dossier to hold.

### Grouping inside a register

A register of more than a dozen entries needs an axis the DM already thinks in.
Realms groups by the system an entry sits in, because that is how travel works:
the question at the table is "what is in Realmspace", not "what is a station".
Kind and standing are the second and third axes, and a row carries its own
designation in the face column so the list reads like a chart.

Containers get rows too. A system is a thing, so SYS-01 has an entry listing
its worlds, and so does SYS-04, even though most of its content is on the two
worlds below it. Uniformity is worth a thin page.

Every dossier carries a **Kind** line in its identity card, so a vessel or a
construct is not mistaken for a character.

## Tags

A tag answers exactly one question, and which question it answers is the class.
There are four, and there is no fifth.

| Class | The question | Labels |
|---|---|---|
| `is-canon` | How settled is it? | **Canon**, **Played** |
| `is-open` | What is still open? | a short label, three words at most |
| `is-dm` | Can this go player-side? | **DM only** |
| `is-kind` | What sort of thing is it? | **Character**, **Object**, **Place**, **Event**, **Pattern** |

`is-canon` and `is-dm` have fixed labels. `is-open` is the one that takes its
own words, because *what* is open is the useful part: "Name open", "Scale open",
"To build", "Your call".

**Three rules, all of them learned the hard way.**

A tag is a label, not a sentence. If it needs a verb it is prose, and it belongs
in the paragraph underneath.

A tag never restates the text beside it. Most of the one-off tags removed in
this pass were saying what the next sentence already said.

A fact about the subject is not a tag. A ship's standing, a world's state, a
character's role — those are rows in the identity card or words in the heading.
`is-locked` and `is-stub` were retired because they had filled up with exactly
this: "Encounter dial", "Zenith underway", "Arc 2 antagonist", "Running now".

The retired pair is worth remembering as the failure mode. `is-locked` ended up
meaning *settled canon* on one page and *never show the players* on another, two
unrelated things in one word, which is why "Locked" stopped meaning anything at
all.

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
