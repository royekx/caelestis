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
