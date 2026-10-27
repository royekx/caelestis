# Page guide

How a page is built and written, for the player site, the DM wiki (`prime/`)
and the Fleet Intelligence Archive (`restricted/`). The writing rules that hold
everywhere are in `CLAUDE.md` § Writing; the DM nav groups and target paths are
in `CLAUDE.md` § Folder map.

## 1. Every page

### Content

- **Depth follows weight.** A page gives all the appropriate information at the
  depth its subject deserves. A central figure like N'ghathrod gets a full,
  detailed page; his lieutenants get shorter pages that still carry their key
  details. Factual, with a little narrative prose where it helps; never a
  generalized or flowery recount.
- **Back-link** every person, place, vessel, artifact or faction that has its
  own page, on its first weighty mention in each panel. Leave passing nouns
  alone.
- **No status labels on factual pages.** "Unresolved", "open", "pending" and
  similar labels go in the page's DM notes tab or on a DM planning page. If an
  entry is light because little is known, write what is known and stop.
- **Bold** marks the one claim a tab or section turns on, and terms to retain.
  *Italics* mark sentence emphasis. Both sparingly: if three things are bold,
  none of them are.

### Headings

- `<h1>` is the page title only. Sections are `<h2>`, subsections `<h3>`, then
  `<h4>`.
- Headings are declarative, never questions: "Forbiddance", not "How does
  Forbiddance work?"
- Headings say what the section holds. Rename enumeration leftovers ("D — The
  End" becomes "Failure state"). Campaign-page headings are functional:
  "Central Question", "Cosmological Pressures", "Arcs".
- Drop a stylistic leading "The" unless it is part of a world-object's name
  (The Reach, The Bridge, The Prime Continuum, The Axioms).

### Anchors and links

- Anchor ids are kebab-case, semantic and brief: `atlas`, `arc-1`,
  `failure-state`. Anchors are part of the public contract. Rename one only
  with a sweep of every reference and a passing `check`.
- Cross-references are relative paths. From `prime/artifacts/index.html` to the
  Brig: `<a href="../realms/caelestis.html#brig">the Brig</a>`.
- External links: `<a href="…" target="_blank" rel="noopener" class="dm-link-external">…</a>`.

### Markup and layout

- Every page declares `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- A page that uses a shared component class loads the sheet it lives in:
  `railed`, `tabrail`, `board-tab`, `account-tab`, `ent-row`, `register`,
  `facets`, `entry-header`, `stat-card` live in `entity.css`, `board.css` and
  `register.css`.
- Use `html { overflow-x: clip }`, never `overflow-x: hidden` on `body` (it
  breaks `position: sticky`).
- Give grid and flex children `min-width: 0`.
- `auto-fit` needs a real track minimum: `minmax(min(210px, 100%), 1fr)`.
- Inline scripts escape `</` as `<\/`.
- When cutting HTML programmatically, use a depth-counting slice, never a
  greedy regex, and check `<div>` balance afterward.

## 2. DM wiki: setting and campaign

### Two domains

| Domain | Pages | Voice |
|---|---|---|
| Setting | the World and People groups, and Glossary | in-world: what is true in the world, currently |
| Campaign | the Play and Story groups, and Principles | DM working notes: this run, its plans and its table |

A setting page is usable unchanged by a DM running a different campaign in
this universe. **The one-shot test:** if that DM would have to delete a
sentence, the sentence belongs on a campaign page.

Campaign pages link to setting pages. Setting pages link to each other and
never to campaign pages, with one exception: an artifact's custody line.

### What a setting page holds

- **Current state, including state that implicates the crew.** Tumak is a
  Wayfinder. Sol is pursued by the CRC. Boogie carries the Fonains shard.
- **Permanent history**, including events the campaign created: a destroyed
  city, a discovered artifact.
- **Current operations, stated as fact.** Vocath has a long-standing commercial
  conflict with Mirt. Saerthe maintains the station's Forbiddance.
- **What is true whether anyone knows it or not.** The whole wiki is DM
  knowledge, but a setting page's in-world tabs describe the world itself, not
  what people in it have noticed. A phenomenon nobody has named is still
  described there, under the wiki's name for it.

**In-world tabs and the DM notes tab.** In-world tabs hold facts about the
world. The DM notes tab holds what is meta to the DM: how a fact is used at the
table, a lever for play, pacing, a name chosen for the DM's convenience, and
anything still to decide. A fact about the world never lives only in DM notes.

**Meta lives beside its subject.** Most setting pages carry a DM notes tab,
the last tab before a stat block. Meta about one subject goes in that
subject's tab, next to the facts it concerns, and not on a campaign page.
Campaign pages hold the meta that spans subjects (arcs, voyages, plot hooks)
and link to the subject tabs for the rest.

"The crew" and "the party" are in-world nouns and may appear. "The players",
"the campaign", "the session" and "the scenario" are not in-world.

### What stays off a setting page

- **Authorial planning**: "forthcoming fetch quest", "to be revealed when",
  "Arc III lever", "held for late game".
- **Authorial framing**: "arc centers on", "thematic question", "we author
  toward".
- **Forward planning**: "the crew will approach via", "the Arc 1 finale will
  take them".
- **Player-facing meta**: "if players wonder X", "plants the question in the
  player's head".
- **Comparative absolutes**: "the only known X", "no other X can", "few are X".
  Describe the entity; the reader builds the comparison. Gregory's entry says
  he casts.
- **Option menus.** Commit to what is true in the world. If it changes,
  rewrite the entry.
- **"Running the X" sections.** DM craft goes on Principles.
- **A PC roster illustrating a principle.** Describe the principle generically;
  each PC's facts go on that PC's own page.

### The seam

| Campaign (planning, framing) | Setting (current state) |
|---|---|
| The crew will approach H'Catha disguised as a tyrant ship. | H'Catha is patrolled by beholders; non-beholder traffic is rare and dangerous. |
| Vocath's grudge-op is the cover for a Brig recon. | Vocath is in active commercial conflict with Mirt. |
| Sol's arc centers on existence through endurance. | Sol bears Beshaba's mark openly and manifests her Oath of Misfortune. |
| The Latchling is the first anomaly Gregory's resonance locates. | The Latchling is a paracausal entity hidden at the Sea Dock by Rindle Gearloft. |

## 3. DM structure

### Where content goes

| Content | Goes on |
|---|---|
| a principle of how the universe works | Cosmology, as a section |
| a place | Locations |
| a ship with a name and a history | Vessels |
| an object that is carried, held or used | Artifacts |
| anything with a will | Dossiers |
| an organized group | Factions |
| a player character | Crew |
| a definition | Glossary, as a line |
| adjudication | Rules, as a section; a stat block goes on Stat Blocks |
| story shape and per-arc planning | Spine |
| the antagonists' workings | Opposition |
| a grounded thread the DM can pull | Plot Hooks, Active or Inactive |
| untethered speculation | Plot Hooks, Speculation section |
| what happened at the table | Voyages |
| how the DM runs the campaign, the hook taxonomy | Principles |

### Things and concepts

**A thing gets a page; a concept gets a section.** A person, place, vessel or
object has an entry page of its own, however thin, on the register of its
likeness. A stub page is a correct outcome. A concept (a mechanic, a
cosmological principle, a term) is a section on its parent subject's page
(hearts, Monoliths and Atria are sections of Cosmology) and earns a page only
when a section can no longer hold it.

- A system gets its own page only when it holds two or more places with pages
  (Realmspace, Krynnspace) or has no world (Virenspace). Otherwise it is a
  section on its world's page.
- Fragment pages are named by Axiom: `artifacts/dissolution-fragment.html`,
  `artifacts/expansion-fragment.html`.

### Which register

**A dossier answers "what is it, and what does it want."** It is earned when a
DM has to play the thing: it has motive, something withheld, and a way it
reacts to being pushed. A construct, a god or a ship under command qualifies.

**A Locations entry answers "what happens when we go inside."** A system,
world, station, region or stop on a lane.

**A Vessels entry** is any named ship with a history, interior included.
Locations says where a ship is; Vessels says what it is and what is inside it.

**Artifacts** holds objects that are carried, held or used, never a vessel.

| | Dossier | Locations | Vessels | Artifacts |
|---|---|---|---|---|
| a person, a construct, a god | yes | | | |
| a ship with something driving it | yes | | yes | |
| a ship that is only a place | | | yes | |
| a system, world, station or site | | yes | | |
| a thing you carry | | | | yes |

A dossier and a vessel entry for the same ship is normal: the Vth'oramu has
both; the tyrant ship has a vessel entry only.

Every dossier carries a **Kind** row in its identity card.

### Registers

A register page is a list you can narrow, driven by `prime/scripts/dm-register.js`:

- a search field (`.dm-register-search`), filtering as you type
- facet pills, one `.facet` per axis: `button.filter-tag[data-<axis>="value"]`;
  AND across axes, OR within one
- a result count and a clear control (`.result-line`)
- rows (`.register > .ent`) that expand in place and link through to the entry;
  a row may carry several space-separated values on one axis

A register loads `dm-nav.js` and `dm-register.js` only: no tab strip, no table
of contents. Concept material sits below the rows as a collapsed section. A
tool the page needs is embedded in a `.dm-embed` with **Open full**.

| Register | Holds | Axes |
|---|---|---|
| `locations/` | places, grouped by system | system, kind, standing |
| `dossiers/` | anything with a will | side, kind, standing |
| `factions/` | organized interests | reach, posture |
| `crew/` | the player characters | where the rules live |
| `vessels/` | ships | where, standing, depth |
| `artifacts/` | things you carry | fragment, standing |

### Containers and rows

A faction, a system or a ship is a container: it gets a page, and its members
get a `.dossier-row` on it (portrait, name, role, one-line read, expanding in
place, linking to their own entry). The row is the quick read; anyone
substantial has a dossier the row links to. Each entity has one representation
on a page: no separate status table, no table plus a notes section.

```html
<div class="dossier-list">
  <details class="dossier-row" id="entity-id">
    <summary>
      <div class="dossier-portrait" data-key="entity-key"></div>
      <div class="dossier-id">
        <div class="dossier-name">Entity Name</div>
        <div class="dossier-role">Role</div>
      </div>
      <div class="dossier-detail">One-line read.</div>
    </summary>
    <div class="dossier-row-body">
      <p>The fuller paragraph, and a link to the entry.</p>
    </div>
  </details>
</div>
```

For artifacts and places (wider portraits), use `dossier-list dossier-artifacts`.

## 4. DM page anatomy

### Head

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>[Page] · Caelestis · DM</title>
<link rel="stylesheet" href="../../styles/caelestis.css">
<link rel="stylesheet" href="../../styles/entity.css">   <!-- entry pages -->
<link rel="stylesheet" href="../../styles/dm.css">
<script src="../scripts/dm-nav.js" defer></script>
</head>
```

Paths are for a page at `prime/<folder>/page.html`. Styles are at the site
root, DM scripts in `prime/scripts/`:

| Page at | Styles | DM scripts |
|---|---|---|
| `prime/page.html` | `../styles/` | `scripts/` |
| `prime/<folder>/page.html` | `../../styles/` | `../scripts/` |
| `prime/<folder>/<sub>/page.html` | `../../../styles/` | `../../scripts/` |

Add only the scripts the page uses:

| Script | Loads on |
|---|---|
| `portraits.js` | a page with portraits or dossier rows; a frame with `data-key` renders from the map |
| `dm-tabs.js` | a dossier (its tab set) |
| `dm-sections.js` | a page with three or more top-level sections |
| `dm-toc.js` | a page whose `<main class="dm-content">` also carries `has-toc` |
| `dm-register.js` | a register page |

`dm-nav.js` renders only under `/prime/`. DM scripts never load on a player
page; the player site uses `scripts/nav.js`.

### Opening

```html
<header class="dm-page-header">
  <div class="dm-page-eyebrow">Section<span class="sep">·</span>Kind</div>
  <h1>Name</h1>
  <p class="dm-page-lede">One paragraph: what is here, and what is elsewhere.</p>
</header>
```

The lede carries the routing: what the page holds, what a neighbouring page
holds instead, and where terms are defined. A page has no "how to use this
page" box.

### Sections

Top-level sections are `<details class="dm-collapse-section">` with the `<h2>`
inside the `<summary>`. With three or more, `dm-sections.js` turns them into a
tab strip.

```html
<details class="dm-collapse-section" id="section-id">
  <summary><h2 style="display:inline;margin:0;font:inherit;color:inherit;">Section</h2></summary>
  <div class="dm-collapse-section-body">
    <p>…</p>
  </div>
</details>
```

A subsection may be wrapped the same way with `class="dm-collapse-section is-sub"`
and an `<h3>`.

Sections are closed by default. Open only these:

| Page | Open |
|---|---|
| Spine | Central Question; Arcs, with Arc 1 open inside |
| Voyages | Next session; Record; the most recent recorded voyage |
| Plot Hooks | Active |

### Callouts

**A callout is a one-breath aside inside prose.** Anything carrying a table or
more than one paragraph is a subsection with a heading. There is one callout
treatment:

```html
<div class="dm-callout"><span class="dm-callout-label">Label</span> One or two sentences.</div>
```

`is-warn`, `is-cosmic` and `is-info` are not used.

## 5. Dossiers

One tab set for every dossier, in this order, including only the tabs with
content. Never add a one-off tab. Labels never inflect for the subject.

| Tab | Voice | Holds |
|---|---|---|
| Who they are | in-world | nature, current state, and how it got here (history) |
| What they want | in-world | motive, drive, what it is for |
| DM notes | DM | the subsections below |
| Stat block | | the block, if it has one |

Tabs are `.pill-tab` buttons in a `.pill-tabs[data-pill-group]` strip with
`.pill-panel` panels, driven by `dm-tabs.js`. Headings inside a tab start at
`<h4>`.

*DM notes* subsections, in order, only those with content:

| Subsection | Holds |
|---|---|
| What's hidden | what is true and unrevealed, in in-world voice |
| Threads | where they connect: to whom, to which arc, to what else |
| How to run them | personality, tactics, how they engage |
| DM notes | anything still to decide or keep track of, each written as a full, specific sentence ("Ezra's surname is not chosen yet."), never a bare label |

*Who they are*, *What they want* and *What's hidden* state what is true, not
what it is for. Design notes, calls still to make and advice go in the rest of *DM
notes* and nowhere else on the dossier. There is no "Open" subsection: a note says exactly what is undecided.

## 6. Tags

Three classes. A tag answers one question, and the class is the question.

| Class | Question | Labels |
|---|---|---|
| `is-canon` | How settled is it? | **Canon**, **Played** |
| `is-dm` | Can this go player-side? | **DM only** |
| `is-kind` | What sort of thing is it? | **Character**, **Object**, **Place**, **Event**, **Pattern** |

- A tag is a label, never a sentence. If it needs a verb, it is prose.
- A tag never restates the text beside it.
- A fact about the subject (a standing, a state, a role) is a stat row or words
  in the heading, never a tag.
- There is no "open" tag. Something undecided is written as a sentence in a DM notes tab or on a planning page, saying exactly what is undecided.
- `dm-toc.js` strips tags from the table of contents.

**Plot Hooks rows** are dossier rows with `is-kind` type tags in the role
column and a status pill:

```html
<div class="dossier-role">
  <span class="dm-tag is-kind">Object</span>
  <span class="dm-tag is-kind">Event</span>
</div>
<div class="dossier-status is-active">Active</div>
```

Status pills: `is-active`, `is-forthcoming`, `is-imminent`, `is-inactive`.

## 7. Voyages page

Most recent voyage first. The upcoming voyage sits in a **Next session** block
above the Record list.

A planned voyage carries these slots, chosen by what kind of note it is:

- **What this session can pay**: the outstanding debts in reach
- **The swap / cast changes**: who joins and leaves
- **Settled**: decided, and staying decided
- **Still to decide**: each call written as a full sentence
- **To run**: how it plays at the table

A played voyage carries Briefing, Actual and Delta:

```html
<details class="dm-collapse-section is-sub" id="vNNN">
  <summary><h3 style="display:inline;margin:0;font:inherit;color:inherit;">Voyage NNN — Title</h3></summary>
  <div class="dm-collapse-section-body">
    <div class="voyage-grid">
      <div class="voyage-col">
        <div class="voyage-col-eyebrow">Briefing — Planned</div>
        <div class="voyage-col-body"><p>…</p></div>
      </div>
      <div class="voyage-col">
        <div class="voyage-col-eyebrow">Voyage — Actual</div>
        <div class="voyage-col-body"><p>…</p></div>
        <a class="voyage-col-link" href="../../../voyages/voyage-NNN.html">Open in Crew Voyages →</a>
      </div>
    </div>
    <div class="voyage-delta">
      <div class="voyage-delta-eyebrow">Delta — what to bring forward, what to scrap</div>
      <div class="voyage-delta-body"><p>…</p></div>
    </div>
  </div>
</details>
```

## 8. Player pages

The player site and the DM wiki hold two versions of the same subjects: dossiers, locations, vessels, inventory and the rest each have a player page and a DM page. The DM page almost always holds more. The player page holds only what the crew knows, and exists only for entries the crew has met or been told of. The two never mirror each other.

Player pages hold only what the crew could know, drawn from the record. Search
attributes are in `CLAUDE.md` § Deploy and search.

- **Player dossiers.** A named presence gets a page under `dossiers/`: met,
  mentioned, or only heard (Beshaba from laughter, the Runekeeper from a
  voice). It carries only what the table has, sourced to the voyage, with
  "named only" or "laughter only" in Last Seen when that is all. The player
  and DM dossiers never mirror each other.
- **Inventory.** An entry (`inventory/entries/`) is the ledger record: what it
  is, who holds it, what happened to it. An item (`inventory/items/`) is the
  readable object, where one exists. An entry with an object carries "The
  Object Itself" linking through; its ledger row gets a **Readable** badge; the
  item links back. New entries start from `entry-template.html`.
- **Crew manifest.** Each cadet reads species · class · station. Specialisation
  (Bartholomew's Wilder) is its own row, never the class. Station is the
  current assignment and moves.
- **Portraits.** A new face on a player page gets a line in
  `scripts/portraits-player.js` and its `<img>` baked into the page's portrait
  frame and register row. A new face on a DM page gets a line in
  `prime/scripts/portraits.js` and a frame with `data-key`.
- **Companion pages** (`wayfinder-path/`, `stellar-chart/`, `aspects/`) keep
  their own skin and carry a return link to their crew page. Crew pages link
  out through a `.companion-card`.
- **Navigation.** The player home is `hub.html`; the sidebar logo points
  there, and the gate (`index.html`) is linked only from the hub footer. The
  sidebar groups in `scripts/nav.js` match the hub's bands.

## 9. The FIA (`restricted/`)

- The FIA is Fleet Intelligence speaking to Fleet personnel: dry, factual,
  bureaucratic, clipped. Write as an author mildly puzzled but professionally
  restrained. The mystery comes from the reader noticing patterns the FIA has
  not connected.
- The FIA reports facts about incidents, never theories about a coherent enemy
  project. It never lists the Brig's contents and never names A.T.L.A.S.,
  Vecna, N'ghathrod's colony or the Reach until the crew has made them
  readable.
- It knows only what Fleet Intelligence would know, and stays in line with the
  finished DM pages.
- It is a separate security context: its own search index, its own chrome, and
  no bearing strip.
