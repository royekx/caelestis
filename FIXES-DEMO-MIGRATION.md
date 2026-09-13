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

---

# Fifth pass — the sticky bar, the overlay, and the filter

## Why the command bar never stuck

`board.css` and `entity.css` both opened with `html, body { overflow-x: hidden }`.

`overflow-x: hidden` on `body` makes the body a scroll container, and a scroll
container silently breaks `position: sticky` on everything inside it. The rule
was there to hide sideways scroll — so it was hiding the overflow *and*
disabling the fix for it at the same time.

Both now use `html { overflow-x: clip }`. Clip stops the sideways scroll
without creating a scroll container, so sticky works.

Section 9 of `register.css` then puts `min-width: 0` and `max-width: 100%` on
every page column, panel, register and row, because clip stops the scrollbar
but still clips — the guards have to go on the elements themselves.

## The Navigation Records overlay

Broken markup, and mine. Rebuilding the register last pass left it **ten
`</div>` heavier than it should have been**, so the panel closed early and the
rows after it rendered on the page backdrop instead of inside the card.

Two regex mistakes stacked up. The extractor matched `<div class="ent"` exactly,
which skipped every `is-unknown` row; and the detail was pulled with a greedy
`([\s\S]*)</div>` that swallowed the detail's own closing tag. Both replaced
with a depth-counting slice. All eleven rows are back and the page balances at
50 `<div>` / 50 `</div>`.

Every page is now checked for `<div>` balance. All 132 balance.

## The Dossiers filter

Reproduced exactly as described: location, then affiliation, then location
again, and the list empties with a pill still lit.

The old script recomputed which pills were still reachable on every pass, and
in that loop it could clear an axis whose pill it had just decided to hide.
State and pills then disagreed, and the filter ran against a value nothing
carried.

Rewritten: two axes, one value each, pills reflect state rather than steering
it. The count and the empty line carry the feedback the pill-hiding was
attempting. Walked through the failing sequence and the one after it —
20 → 2 → 0 → 1 → 20.

That 0 is real, incidentally. Nobody is filed under both the Caelestis location
and the bare Caelestis affiliation.

## The FIA gate

The backdrop was in place and still invisible. `body` kept
`background: #030208`, which is opaque and paints straight over `body::before`
at `z-index: -2`. I wrote a comment about exactly this last pass and then left
the rule in. Removed; `html` holds the fallback colour.

## Portraits

34px read as a stamp next to two lines of type. The row is two lines tall, so
the portrait is now 52px (40px under 760px), with the account indented to line
up under the name rather than under the face.

## The Nexus and Corps Protocols

Neither loaded `entity.css`, `board.css` or `register.css` — they had
`caelestis.css` alone, so their rows sat on the backdrop with no panel. Both
now load the shared sheets and wrap their list in `.board-body`, with row
separators and hover to match the registers.

## Left alone, deliberately

The eleven pages behind the FIA gate render the command bar without a bearing
strip. They are a separate security context with their own chrome, so that may
well be right — but say the word and they get the strip like everything else.

---

# Sixth pass — the column, the brass, the backdrop

## One column width

`body.with-sidebar .content` was `max-width: 100%`, so every page except the
hub ran to the edge of whatever monitor it was opened on. The hub reads better
because it has always been bounded.

A `--column` token now holds `min(1180px, 100%)`, and the page header, the
content and the command bar all sit inside it. It is a `min()` rather than a
fixed width, so the column still gives space back on a laptop — it just stops
growing once a line gets too long to scan.

That is also what "the command bar is incorrectly placed on the dossier pages"
was. Checked the injection point on eight pages across every page type: it is
the first child of the page column on all of them, hub included. The bar was in
the right place and the column around it was not.

## The command bar in brass

Two blues stacked: an ice-toned bar above ice-toned panels, so it read as
another panel rather than as the thing sitting above them. The bar is now
brass — a warm dark gradient, gold rules between its bands, gold on the search
glyph, the caret and the chips, and a gold wash on hover.

## The backdrop

`assets/astral.jpg`, replacing `nebula.jpg` on the player-facing site. The
scrim behind `.content` is unchanged and still carries text contrast, which
matters more with this one — it is a brighter image than the one it replaces.

If it turns out too loud behind long prose, the dial is `.content::before` in
`caelestis.css`; raising its alpha darkens every page at once without touching
the image.

## Inventory

**The manifest was missing from Evidence & Documents.** The tab carried
`data-class="evidence"` and matched by equality, so the one row classed
`document` fell through — it appeared under All Items and nowhere else. The tab
now carries both classes and the matcher reads it as a set. Evidence &
Documents returns 4.

**The entry did not link to the object.** The distinction from the earlier
restructure — an entry is the ledger record, an item is the thing the crew can
actually read — had the return link but not the outbound one. The entry now
carries an *"The Object Itself"* block through to `items/collection-manifest.html`,
and the ledger row carries a **Readable** badge, which is what marks the one
entry in eleven that has an object behind it.

---

# Seventh pass — the backdrop, and the type

## Darkening the backdrop

Done to the file, not with a veil over it. A heavy veil flattens colour, and
the colour was the reason for choosing the image.

`assets/astral.jpg` is the upload at **34% brightness** with saturation pushed
back up 18% and a touch of contrast — darkening reads as desaturating, so the
colour needs a nudge to survive it. Mean value lands around `rgb(20, 22, 33)`,
which is roughly where the old nebula sat.

`assets/astral-source.jpg` is the original, kept in the repo so the cut can be
redone at a different strength without re-uploading anything.

The veil is now a token pair rather than a hardcoded gradient:

```
--veil-centre: rgba(8, 11, 20, 0.28);
--veil-edge:   rgba(8, 11, 20, 0.62);
```

Between the file and those two values there are two independent dials — bake
it darker, or sink it further under the veil.

## Type

Root size **112% → 118%**, which moves everything at once since the site is in
rem throughout.

On top of that the bottom of the scale was lifted, because the smallest sizes
carry the most labels and were furthest from readable: anything under 0.60rem
up 22%, 0.60–0.75rem up 16%, 0.75–0.92rem up 7%. Body copy and the `clamp()`
headings are untouched. 134 declarations across the six stylesheets, plus 33
pages that still hold their own `<style>` — the FIA files, the voyage records
and the stellar chart among them.

The command bar gets a further bump on top of that, since it reads first.

## A fourth text tier

`--text-dim` was doing two jobs: body-adjacent prose and small labels. At label
size it sat too close to the background to read, and lightening it enough for
labels would have washed out the prose.

Four tiers now, all in the same blue family:

```
--text        #e4ebf5   headings, values
--text-soft   #c6d2e2   prose — accounts, overviews, descriptions
--text-dim    #b3c1d5   subtext — was #a6b4c8
--text-muted  #8797ad   small labels — was #6f7d92
--text-faint  #6f7d92   placeholders, hints, unreached entries
```

The old `--text-muted` survives as `--text-faint`, so anything that should stay
recessive still can. Section 11 of `register.css` assigns the prose tier in one
place rather than chasing it through four stylesheets.

---

# Eighth pass — the companion pages

Casey's stellar chart and Tumak's wayfinder runes exist in the repo and neither
was reachable from the crew pages.

## What the old build actually did

Only half of it. `crew-manifest/casey.html` carried a **Stellar Reading**
section — intro, a rules card with the feat, the two outcomes, a coda — and a
"Consult the chart →" link out to `stellar-chart/`. All of it was inline CSS on
that one page.

`crew-manifest/tumak.html` had nothing. No block, no link. That is why the
wayfinder page has never been reachable: there was never a pattern to follow,
only a one-off on Casey's page.

## Ported as a component

`.companion-card` now lives in `register.css`, and both crew pages use it. The
next crew member who gets a page of their own needs markup and nothing else.

Casey's block is the old one carried over as written — the feat text, the
outcomes and the coda are unchanged. Tumak's is new prose, drawn from what the
site already records: the half-marks, the soul knife coming through a piece of
the home he is looking for, the tether being a connection rather than a
heading. **Read it before you ship it** — the canon is yours, and I was working
from the voyage records rather than from what you know.

While linking the sheet, `register.css` went onto all 62 entity pages. They
were carrying `caelestis.css`, `entity.css` and `board.css` but not the shared
one, so they missed the type-tier pass as well as the companion styles.

## The wayfinder page keeps its own skin

It is a bespoke artifact — bronze and parchment, its own font stack, its own
tokens, closer to the FIA files than to the rest of the site. Wrapping it in
the sidebar and the command bar would have cost it that.

So it keeps its design and gains only the thing it lacked: a return link to
Tumak, built from its own palette rather than the site's. The stellar chart
already returns to Casey the same way.

---

# Ninth pass — the bar and the scrim

`.content` carries a scrim — `.content::before`, a blurred dark rectangle
inset `-1.5rem -1.75rem` so it sits behind the page's own material and holds
prose legible over the backdrop.

The bar was the first child of `.content`, so it was drawn on that scrim. But
the bar is not page material. It is terminal chrome — the same object on every
page — and it belongs on the backdrop, not on the panel the page's content
sits on. The hub is the reference: it has no scrim, and the bar reads
correctly there.

`nav.js` now inserts it **before** `.content` rather than inside it, so the
scrim begins below it. Since it no longer inherits the column, it carries
`max-width: var(--column)` and `margin: 0 auto` itself, which keeps it aligned
with the content beneath. The 2.2rem bottom margin clears the scrim's 1.5rem
overhang.

Verified across ten pages of every kind — listing, dossier, item, crew,
voyage, bearing, S.E.A.R.C.H., hub. On all of them the bar is followed
immediately by the column it heads.

S.E.A.R.C.H. keeps the bar inside `.terminal-wrap`; that page has no `.content`
and no scrim, so there is nothing to sit outside of.

---

# Tenth pass — wrapping, and a side-tab demo

## The identity card

`caelestis.css` already carried the fix for this — keys that never wrap, values
that drop to their own full-width line rather than colliding. It was scoped to
`.stat-list`. The pages use `.stat-card`. So it never applied, and at the old
root size the values happened to fit anyway.

At 118% they stopped fitting, and long ones ran out of the column: *Caelestis
Academy (sky dock)* clipped mid-word.

Section 13 of `register.css` applies the same rule to `.stat-card`, and the
portrait column goes 196px → 224px to match the larger type. 43 values longer
than about 26 characters are marked `stat-val-long` and take their own line.

## Side tabs — demo only

`quest-board-side-tabs-demo.html`, built from the live Quest Board rather than
mocked, so what you are looking at is the real page with the rail swapped in.
It opens on its own — the four stylesheets and the backdrop are inlined.

The change is about 40 lines. `.board-tabs` stops being a row above the panel
and becomes a 200px rail beside it, `position: sticky` at `top: 8.5rem` so it
clears the command bar and stays in reach while a long board scrolls. The
active tab bleeds one pixel into the panel so the two read as one surface,
and the panel's radius moves to `0 12px 12px 12px`.

Under 820px the rail costs more than it gives, so the tabs go back across the
top and the panel takes the full width.

Nothing in the site itself changed. If it works, the same rail drops onto
Navigation Records and Inventory — both already use `.board-tabs` and
`.board-panel`, so it is the same wrapper and the same block of CSS.

---

# Eleventh pass — the demo that broke, and a voyage rail

## Why the first demo rendered as source code

`scripts/nav.js` contains two literal `</script>` strings inside its HTML
builders. An HTML parser ends a `<script>` block at the first `</script` it
sees — anywhere, including inside a quoted JavaScript string. So the block
closed early and the rest of nav.js was parsed as page content, which is the
`', sectionLinks, '` and `var EXT_ICON = '` in the screenshot.

Inlined scripts now have `</` escaped to `<\/`, which is identical to the
engine and invisible to the parser. Both demos are checked for a bare
`</script` inside a script block, and for script source reaching the page as
visible text. Neither has any.

## Two demos now

Both built from the live pages, not mocked, and both open standalone —
stylesheets and backdrop inlined.

- `demo-quest-board-side-tabs.html` — Quests / Threads / Closed
- `demo-voyage-side-tabs.html` — Voyage 004: Brief / Full / Recording

The rail is one shared block of CSS keyed off two classes, `.railed` on the
wrapper and `.tabrail` on the tab container. It does not care whether the tabs
inside are `.board-tab` or `.account-tab`, which is what let the voyage page
take it without changes.

Two variables sit at the top: `--rail` for its width and `--rail-top` for how
far down the sticky rail parks. `--rail-top` is measured to clear the command
bar's three bands — the number to change if the bar ever gains or loses one.

The voyage rail differs in one way. A voyage tab carries a name *and* a note
("What happened, beat by beat"), and the top row hides the note under 640px for
want of width. The rail has the height instead, so it stacks them and the note
stays.

Under 820px both fall back to tabs across the top.

Still demo-only. Nothing in the site changed.

---

# Twelfth pass — the voyage demo, properly

Two faults, both mine, both in how the demo was assembled rather than in the
rail itself.

**Index arithmetic again.** I sliced the panels block by searching for a
closing string instead of counting depth, and came up two `</div>` heavy. The
grid collapsed, the rail sat on top of the panel and the account ran underneath
it. This is the same mistake that broke the Navigation Records register a few
passes back, made the same way.

Both demos are now cut with a depth-counting `element()` helper, and each is
checked for `<div>` balance as it is written. Quest Board 33/33, voyage 32/32.

**The page's own stylesheet was left out.** Voyage records carry an inline
`<style>` holding `.brief-heading`, `.brief-list` and `.account-body` — the
structure of the account itself. Only the four shared sheets were inlined, so
the account rendered as unstyled prose with its headings indistinguishable from
its bullets.

The builder now inlines the source page's own `<style>` blocks after the shared
sheets. `.brief-heading` is confirmed present in the voyage demo and absent
from the Quest Board demo, which is correct — the Quest Board does not have one.

Both demos verified end to end: rail and panels are grid children, three tabs
and three panels each, every tab switches, the sidebar and command bar build,
and no script source reaches the page as text.

---

# Thirteenth pass — the rail folded in, and the bar made uniform

## Why the bar never matched on entity pages

On a listing page `.content::before` is a scrim — a dark blur behind the page's
material. On an entity page the same pseudo-element becomes the **panel**: card
background, border, shadow. And it was inset `-1.75rem -2rem`, bleeding 2rem
past `.content` on each side.

The command bar carries the column width exactly. The panel was the column plus
4rem. They were never going to line up.

Horizontal inset is 0 now, so the panel *is* the column — the same width as the
bar above it and as the listing panels everywhere else. `.content` keeps its own
2.5rem padding, so the record itself does not move; only the panel edge does.

## The identity card, again

Section 13 widened the column to 224px and let values wrap. Not enough: a key
like AFFILIATION is `nowrap` and eats most of that column, so even a short value
had nothing left to wrap into and clipped mid-word.

Side-by-side was never going to hold at that width. Section 14 stacks them —
key on its own line, value beneath it, left-aligned and free to wrap. Nothing
can clip at any root size.

A quest is the exception: it has no portrait, so its stat card is the full page
column, where key-beside-value still reads better. That case is carved out.

## The rail is in

Section 15 of `register.css`, same two hooks as the demo — `.railed` on the
wrapper, `.tabrail` on the tab container. Applied to:

- **Quest Board** — Quests / Threads / Closed
- **Navigation Records** — Realmspace / Viren
- **Voyages 001–004** — Brief / Full / Recording

Every one was wrapped with the depth-counting slice and checked for `<div>`
balance as it was written. All balance, all switch panels, all keep their
command bar.

**Inventory is railed too.** I skipped it first time on bad reasoning: its tabs
filter one list rather than switching panels, so there is no `.board-panels`,
and I took that to mean the rail could not apply.

Wrong — the rail never needed panels. It needs a wrapper and two children, and
the second can be anything. Inventory's `.board-body` takes `.panels` and sits
beside the rail exactly as a panel group would. No change to its filter model;
all four tabs still filter the register (11 / 6 / 1 / 4).

The voyage rail keeps the tab notes ("What happened, beat by beat") that the top
row hid for want of width.

---

# Fourteenth pass — the rail was on the voyage pages, the CSS was not

The markup was right: all four voyage records carried `.railed` and `.tabrail`,
and the tabs switched. They just rendered as a row, because
**`voyages/voyage-00*.html` loaded `caelestis.css` and nothing else.** No
`board.css`, no `register.css` — so Section 15, where the rail lives, was never
on those pages.

That is the third time a fix has been written correctly and landed nowhere
because a page was missing a stylesheet. So rather than patch these four, the
check is now mechanical: every page that loads `nav.js` is scanned for the
shared component classes it actually uses — `railed`, `tabrail`, `board-tab`,
`account-tab`, `ent-row`, `register`, `facets`, `entry-header`, `stat-card` —
and given the sheets those classes live in.

Ten pages were short:

```
voyages/voyage-001…004.html          + board.css, register.css
spelljammer-nexus/*.html (5 pages)   + entity.css, board.css, register.css
inventory/entries/entry-template.html + entity.css, board.css
```

The five Nexus article pages were in the same state as the voyage records —
using shared classes with none of the shared sheets behind them.

Verified after: all seven railed pages carry `register.css`, all switch, and no
railed page is missing it.

---

# Fifteenth pass — search

## Why a scoped search found nothing

Built the Pagefind index locally and read the filter file, which settled it in
one look.

Pages carried filters like:

```
data-pagefind-filter="section:dossiers, category:Tyrant Ship, status:Active"
```

Pagefind does **not** split that comma list once the first token carries an
explicit value. It read the whole string as one filter named `section` with the
value `dossiers, category:Tyrant Ship, status:Active`. So the search page
asking for `{ section: 'dossiers' }` matched nothing, on every page that had
more than one facet.

The pages that worked were the ones with a single bare filter — which is why
the failure looked arbitrary rather than total.

61 pages are now `section:<dir>` alone. Rebuilt and read back, the recorded
values are clean: `crew-manifest`, `dossiers`, `inventory`, `navigation-records`,
`quests`, `voyages`, `factions`, `handouts`, `spelljammer-nexus`, `logs`,
`bearings`.

The `category`, `status` and `kind` facets are gone. Nothing surfaced them —
the search page only ever offered `section`. If they are wanted later, each
needs its own element; they cannot share one attribute.

**Two sections were indexed but missing from the scope selector**, so they were
unreachable: **Quest Board** and **Factions**. Both added.

## The S.E.A.R.C.H. tag now searches

It was a `<span>`, so only Enter submitted. Both the magnifying glyph and the
tag are `<button type="submit">` now, and the form's existing handler does the
rest. Styled to look as they did, with a hover state they lacked.

## Note on the index

`pagefind/` is not in the bundle. The GitHub Action rebuilds it on push, and a
committed copy would be stale from the first edit. To check search locally
before pushing, the Action's own command works from the repo root:

```
npx -y pagefind --site . \
  --glob "{index.html,hub.html,voyages/*.html,bearings/*.html,logs/*.html,crew-manifest/**/*.html,dossiers/**/*.html,factions/**/*.html,quests/**/*.html,spelljammer-nexus/**/*.html,inventory/**/*.html,handouts/**/*.html,navigation-records/**/*.html}" \
  --exclude-selectors "[data-pagefind-ignore], nav, .site-nav, footer"
```

---

# Sixteenth pass — phones

Tested at 320, 360 and 390px against every page on the site, plus 768,
1024 and 1280 to check nothing moved on the way back up. The measure is
whether a page can be scrolled sideways and whether any content sits
outside the viewport, not whether it looks narrow.

## The one-word columns

`bearing.css` built its quest and crew strips with:

```
grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
```

`auto-fit` only wraps when the minimum is a real width. With a minimum of `0`
it never wraps — it makes one track per item and shrinks each to nothing. Six
crew members, six columns, one word per line, at any screen size narrow enough
to matter.

Now `minmax(210px, 1fr)` for quests and `minmax(180px, 1fr)` for crew, and
`minmax(min(210px, 100%), 1fr)` under 620px, since a fixed track minimum
overflows once the column is narrower than the minimum itself.

## The register rows were the same bug wearing a different hat

`.ent-row` is a face, a name and a trailing badge, and the badge column is
`auto`. An `auto` track takes its whole max-content width before an `fr`
track gets anything left over, so "Spelljammer Nexus" sitting beside a name
left the name track **0px wide** on Dossiers and 30px on Inventory — and
`overflow-wrap: anywhere` then broke the names one character per line. That
is the column of single letters in the report.

Hiding `.ent-type` and `.ent-dist` does not help: `display: none` takes the
element out of the grid but the tracks are declared explicitly, so they stay.
Under 620px the badge columns now get their own line under the name instead
of competing with it for the same one.

## A media query that never applied

`bearing.css` opened with `@media (max-width: 880px)`, above every rule it
was meant to override. Equal specificity, and a media query adds none, so the
later plain rules won: the timeline stayed sticky on a phone, its stops kept
the 16px number column that clipped "004", and the connector line and dots
stayed drawn over the card layout. The block now sits at the end of the file.

## What actually pushed the bearings page sideways

`.panel-head` puts two labels either side of a rule and both are `nowrap`, so
the head reported a min-content width of ~400px, the `1fr` track floored at
that, and the page went with it. The second label now drops to its own line
under 620px. `.bearing > *` also carries `min-width: 0`, since a grid item's
automatic minimum is its min-content width — one wide child sizes the track
rather than the track sizing the child.

Worth noting for the next pass: the bearings pages and the hub do not load
`register.css`, so anything put there does not reach them. The bearing strip
(`.cb-face`) is injected into every page by `nav.js`, so its phone rule lives
in `caelestis.css` now — it was rendering two columns on bearings and one
everywhere else.

## Prev / next bars

`.nav-bar`, `.voyage-nav-bar` and `.voyage-nav-bottom` are three links in a
row, all `nowrap`, and the centre link is `flex-shrink: 0`. Min-content up to
700px, on pages 390px wide. Under 620px they become two rows: the centre link
across the top, prev and next below. All three also wrap when they do not fit,
which fixes the next link being clipped on a 1024px laptop as well.

## A phone layer

Several grids were written for a desktop column with no fallback at all.
Section 16 of `register.css` collapses them:

- under 820px — `.brief-grid`, `.bearing`, `.xref-cols`, `.card-grid`
- under 620px — the entity header, so the portrait sits above the stats rather
  than beside them; the register rows above

## The narrow end

At 320px a further set of `nowrap` and no-shrink cases clipped: the chart
tabs, the nexus document-source line, the DM briefing's scene tags, the
combat-flow rows on the ship-mechanics handout, the log page's button row,
and `.carry-chips` (a flex item cannot shrink below its min-content unless
told to). Each now wraps. `.col-wide` and its siblings on the handout use
`minmax(0, 1fr)` rather than `1fr` for the same reason as everything else
above.

## Eleven pages had no viewport meta

`crew-logs/`, `crew-notes/` and one Prime briefing. Without it a phone renders
the page at 980px and scales the whole thing down, which produces sideways
scroll on its own regardless of the CSS. All eleven now declare it; every page
on the site does.

## Still open

`navigation-records/index.html` clips its last `.ent-state` badge at 1024px —
the railed layout leaves the register a 362px panel and five columns do not
fit in it. Pre-existing, and not a phone width; it wants a container query or
a rethink of the rail rather than another breakpoint.
