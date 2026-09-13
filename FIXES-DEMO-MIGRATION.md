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
