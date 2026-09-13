# Caelestis — the demo migration, and four bugs it was hiding

The listing pages emitted the demo markup. Nothing defined the rules behind it.
That is the same gap `bearing.css` was written to close, repeated wider.

---

## 1. THE CAUSE

`voyages/index.html` carries its layout in an inline `<style>` that only that
page can see. Quest Board, Dossiers, Inventory and the Manifest use the same
class names against stylesheets that never received them.

Missing from every stylesheet before this pass:

```
.facets  .facet  .facet-label  .facet-pills  .board-body
.result-line  .result-count  .no-results
.ent-face  .ent-rarity  .item-row  .npc-row  .crew-row
.log-table  .log-row-link  .log-open  .log-num*  .log-toggle*
.glance-*  .overview-*  .intro-note
```

Now in `styles/register.css`, linked from Quest Board, Dossiers, Inventory,
Manifest, Navigation Records and Factions. The board-row rules are the voyage
index's, moved to shared ground so the two pages cannot drift apart again.

---

## 2. FOUR BUGS

**Rows that would not open.** Dossiers, Inventory and Navigation Records each
bound `.ent-row` in their own inline script while `ui.js` bound the same rows.
Both fired, the row toggled open and shut, and nothing appeared to happen.
`ui.js` now owns row expansion; the duplicates are gone.

**Inventory's tabs fought themselves.** `ui.js` ran its panel machinery on any
`.board-tab`. Inventory uses those tabs to switch a filter, not a panel, so it
picked up `.js-tabs` on `<html>` and worked against its own handler. `initTabs`
now requires both tabs and panels.

**The hub had no Current Bearing.** `hub.html` loaded `nav.js` without
`data/bearing.js`. `buildCommandBar()` renders operations only when the data is
absent, so the hub alone was missing the strip every other page had.

**Six locations had no page.** `build-pages.js` wrote locations to `locations/`
while `locations.json` points at `/navigation-records/`. Spelljammer Nexus,
Mirt's Quarters, Sky Dock, The Weeping Goddess, The Sea Dock and Simulation
Deck are now scaffolded, and the builder writes to the right directory.

Also corrected there: the builder emitted `<details class="prior-voyages">`
where `entity.css` styles `.prior`, so every scaffolded history block rendered
without summary chrome. The builder now emits `prior`; the old class is aliased
in `entity.css` so pages generated before this pass pick the chrome up without
being regenerated.

---

## 3. THE HUB

The Helm and Scheduler cards are gone. Both already sit in the command bar, on
the hub and on every other page, so the band repeated the only two things the
terminal offers everywhere.

Crew Operations now carries a **Current Bearing** card, rendered from
`data/bearing.js` — the same file the command bar reads, so the two cannot
disagree. Position, last voyage, outstanding, and the open quests as chips.
Missing data hides the card rather than showing em-dashes.

---

## 4. CREW MANIFEST

Was a grid of `.s-card`s holding truncated overview text. Now a register
matching Dossiers: portrait, name, species · class · station, clearance.
Rows expand to the overview and where each cadet currently stands.

Facets filter by species, class and station. Station order runs bridge-first
— Tumak, Gregory, Casey, Boogie, Sol, Bartholomew.

Species, class and station are held in the page, not the tracker. The tracker
has no column for them, and the crew pages lost the rows an earlier pass added.
See Outstanding below.

---

## 5. NAVIGATION RECORDS

The schematic shipped as CSS and JS and never as markup. `board.css` already
had `.chart`, `.orbit`, `.body`, `.sun-core`, `.sat`, `.bound-arc` and
`.tether`; `ui.js` already had the selection logic.

Realmspace now renders as a chart: the sun, two orbits, Toril and H'catha,
Caelestis and the tyrant ship tethered in Toril's orbit, and the Deep Astral
shell as the sphere itself. Selecting a body narrows the register.

`ui.js` selection was extended to carry children — a body stands for itself and
everything filed inside it, so selecting Caelestis brings its six rooms with
it. Switching spheres clears the selection, which otherwise left the Viren
entry hidden behind its own tab.

All twelve entries link to a record. Prev/next chains re-run across the full
roster rather than the six that existed before.

---

## 6. PER-PAGE SEARCH

`scripts/search.js` injected a scoped box after the page header on every
section index. Removed from Voyages, Spelljammer Nexus and Corps Protocols —
the only three that included it. The command bar's S.E.A.R.C.H. covers the
site; the field inside a facet block narrows the list in front of you. The
script is left in place for any page that wants it back.

Navigation Records lost its bare search row. The chart is the filter there.

---

## STILL OUTSTANDING

- **`_templates/entity.html` is missing from the repo.** `build-pages.js` exits
  immediately without it. The six new location pages were scaffolded directly
  from `toril.html`'s shape; the template needs restoring before the builder
  runs again.
- **Crew pages lost their reconciled rows.** Species, Class, Station,
  Specialisation and Clearance are gone from all six, and every one reads
  `Last Seen: Unseen` — wrong for cadets who appear in all four voyages.
  `lastSeen()` reads `rec.seen`, so either the tracker's Visited column is
  empty for player characters or `build-data.js` is not carrying it through.
- `prime/campaign/voyages/index.html` still links `voyage-briefing-001/003/004`,
  and only `002` exists. Unchanged from the last pass.

---

## FILES CHANGED

```
styles/register.css                 NEW — the migration
styles/entity.css                   appended: .prior-voyages alias
scripts/ui.js                       tab guard, single row binder, child selection
scripts/build-pages.js              locations dir, .prior class
hub.html                            bearing.js load, Current Bearing card
crew-manifest/index.html            rebuilt as a register
navigation-records/index.html       rebuilt with the schematic
navigation-records/*.html           6 scaffolded, 12 re-chained
dossiers/index.html                 duplicate binder removed, register.css
inventory/index.html                duplicate binder removed, register.css
quests/, factions/                  register.css
voyages/, spelljammer-nexus/, handouts/   search.js include removed
```

---

# Second pass — against the four demos

The demos arrived after the first pass. Three of the four
(`hub-demo`, `check-voyages-index`, `inventory-index-demo`) carry the current
token palette and are authoritative. `nav-records-demo` carries the **old**
palette — `--gold: #c9993a` on `--bg: #06040e`, with no `--ice` tokens at all.
Its structure is the spec; its colours are not, and were not adopted.

## The command bar

Three separate faults, one visible symptom.

**It was outside the page column.** `nav.js` inserted it after `.page-header`,
making it a sibling of `.content` rather than a child. `.content` is
`max-width: 900px` centred; `.page-content` has no max-width at all. So on
every sub-page the bar rendered the full width of the viewport above a 900px
page — and a different width again on the hub, which nests inside `.hub` at
1040px. It now injects into the column itself on every page: `.content`,
or `.hub` under the title, or `.terminal-wrap` on S.E.A.R.C.H.

**Sixteen pages had no bearing strip.** `buildCommandBar()` renders operations
only when `window.CAELESTIS_BEARING` is absent, and sixteen pages never loaded
`data/bearing.js` — all four voyage records, all six Nexus pages, Corps
Protocols, Crew Logs, S.E.A.R.C.H. and the stellar chart. That is the bulk of
what "not uniform" was. All sixteen now load it.

**It no longer sticks.** Now `position: relative`, and it scrolls away with
the page. The blur surface went with it.

Guards added so it cannot outgrow its column again: `max-width: 100%` and
`overflow: hidden` on the bar, `min-width: 0` on `.cb-strip` and `.cb-op`,
ellipsis on `.cb-op-note`.

## The overflow

Same root cause. The bar was the widest thing on the page and the only element
not bound by the column, so it set the page's scroll width. Pages loading
`board.css` or `entity.css` hid it behind `html, body { overflow-x: hidden }`
and pages that didn't showed it — which is exactly the "some pages overflow and
others don't" split.

## register.css, rebuilt from the demos

The first pass approximated these rules. They are now copied verbatim:

- **Section 1** — the Inventory demo's stylesheet: the register, the facet
  block, the tabbed `.board-body` panel, the rarity scale, `.facet[hidden]`
  and `.filter-tag[hidden]` (without which the JS hides pills that keep
  rendering), and the 760px responsive block.
- **Section 2** — the voyage index's stylesheet, which was byte-identical to
  its demo. It lived inline where only that page could see it; the Quest Board
  uses the same class names and had nothing. `voyages/index.html` now loads the
  shared file instead of holding its own copy.
- **Section 3** — what no demo covered: `.board-body` without a tab row above
  it, portrait faces in crew and dossier rows, and `min-width: 0` on every
  listing container.
- **Section 4** — Navigation Records. Section 1 gives every `.ent-row` a 34px
  face column; Navigation Records has an 11px glyph and a distance column
  instead. Both grids are now scoped and stop overwriting each other.

## Navigation Records, rebuilt from its demo

The first pass invented a two-orbit schematic. The demo is an orrery: sun at
the right, Deep Astral at the left, and all eight Realmspace worlds at their
charted distances — Anadia, Coliar, Toril, Karpri, Chandos, Glyth, Garden,
H'catha — with Caelestis and the tyrant ship tethered to Toril.

Also from the demo: the survey chart above it, the `.ent-dist` column carrying
distance from the sun, charted-but-unreached worlds drawn back as
`.is-unknown`, Caelestis's six rooms as `.det-chips` under its own entry rather
than as register rows of their own, and Viren as a single `.stub` card on its
own tab. Naming retargeted from the demo's `Hakatha` to the repo's `H'catha`,
and the truncated demo descriptions replaced with the full text from
`locations.json`.

## Listing structure

Dossiers had no `.board-body` and the Crew Manifest had its search field inside
`.facets` rather than above it. Both now follow the Inventory demo:
`.board-body > .search-row > .facets > .result-line > .register`.

---

# Third pass — against the screenshots

## The command bar sticks again

Read "should scroll with the page" as "should not be sticky" and made it
`position: relative`. Wrong call — the hub demo is sticky, and sticky *is*
travelling down the page and parking at the top. Restored, with the overflow
guards from the second pass kept.

## The hub is the demo now

Rather than patching toward it, `hub.html` is the demo's markup and the demo's
stylesheet, with the repo's script wiring re-attached.

That means the condensed card: `.s-card-head` putting icon and title on one
row, description clamped to two lines, links wrapping instead of forcing card
width. The tall centred card it replaces was hub-local CSS that predated the
migration into `entity.css`.

It also means **no Crew Operations band**. The demo goes header → command bar →
Crew Intel → Fleet Records. The helm and the scheduler are in the command bar
on every page, so the band was showing the same two things twice. That settles
the judgment call left open two passes ago.

## The Quest Board

Section 2 of `register.css` is the voyage index verbatim, and a voyage row
leads with a 70px `.log-num` plate — `grid-template-columns: 70px 1fr auto`. A
quest row has no plate: its three children are the title, the objective count
and the open link. So every quest title inherited the 70px column and wrapped
one letter per line, and the row's min-content width set the page's scroll
width. That is both the broken rendering and the remaining overflow.

Scoped in Section 5. Quest rows get `minmax(0, 1fr) auto auto`; voyage rows
keep the plate.

## The survey chart

The demo's survey was a wide strip. The chart on file is a tall poster, so at
`width: 100%` it ran most of a screen before the register came into view.
Capped at 360px and centred, in Section 6.

This is a stopgap. Merging the survey with the location records is a design
question, not a CSS one — it needs deciding before it needs building.

## The FIA gate

The gate was drawing a CSS starfield where the demo has the lattice survey
grid. Extracted to `assets/fia-lattice.jpg` (116KB) rather than left inline,
with the demo's veil over it — a radial gradient holding text contrast steady,
since the lattice runs bright along its filaments. `html` carries the fallback
colour because an opaque `body` fill would paint over `body::before`.

Note this is **not** the existing `assets/lattice.jpg`, which is a different
image and is left alone.

---

# Fourth pass — portraits, and one click

## Why no portrait ever loaded

Not a Drive problem and not a sharing problem — the files are shared with
`anyone: reader`, and checked. **No page ever had an `<img>` in it.** Every
`portrait-frame` and every register face held a monogram.

`build-pages.js` was what rendered portraits, from the map in
`scripts/portraits.js`. The scaffolder is benched, so nothing has rendered them
since. The pages are static now, so the portraits are baked in: fifteen entity
pages, and the register rows on Dossiers and the Manifest.

Two were missing from the map entirely — **Ostekk-6** and **Pffred**, both
present in the Drive folder. Added to `scripts/portraits.js` and baked. That
brings the Dossiers index to eight faces.

The Drive folder holds eight NPC portraits in total; all eight are now on the
site. Anyone added later needs a line in `portraits.js` *and* a bake, until the
pipeline comes back.

## One click, not two

A row expanded to reveal an account and an "Open ›" link you then had to click.
Two clicks to reach a page, and the first one told you almost nothing.

Now the account is on the row and the row is the link. Applied to Dossiers,
Navigation Records, Inventory and the Manifest. The `Open ›` links are gone —
the row carries their href.

Rows with no record behind them — the charted-but-unreached worlds, the
named-but-unfiled NPCs — render as `.ent-row.is-unlinked`: same layout, no
hover, no cursor. Their account still shows.

Filtering is what shrinks the list, as you said. Blurbs clamp to three lines so
twenty open rows still scan; the row selected on the chart un-clamps.

`ui.js` no longer toggles `.ent-detail` when the chart selects a body, and the
inline filter scripts no longer collapse rows they hide — both would have shut
the accounts that are now meant to stay open.

### One thing to watch

The clickable area is the row header — face, name, meta. The account below it
is not part of the anchor, because it contains its own links (the "In orbit"
chips under Toril, the sites under Caelestis) and anchors cannot nest. If the
blurb should be clickable too, that wants an overlay anchor and a pass over
those chips.
