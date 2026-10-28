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
- **No bold or colour inside running prose.** A paragraph reads straight
  through: no bolded phrases, no coloured words. Links are the one exception,
  in the link colour with an underline. Bold is for structure only: headings,
  table headers, and a short label that opens a list item ("**H'Catha.** …").
  Italics are for titles, ship names and the odd word that needs stress.

### Headings

- `<h1>` is the page title only. Sections are `<h2>`, subsections `<h3>`, then
  `<h4>`.
- Headings are declarative, never questions: "Forbiddance", not "How does
  Forbiddance work?"
- Headings say what the section holds. Rename enumeration leftovers ("D — The
  End" becomes "Failure state"). Campaign-page headings are functional:
  "Theme", "Pressures", "Arcs".
- Drop a stylistic leading "The" unless it is part of a world-object's name
  (The Reach, The Bridge, The Prime Continuum, The Axioms).

### Anchors and links

- Anchor ids are kebab-case, semantic and brief: `atlas`, `arc-1`,
  `failure-state`. Anchors are part of the public contract. Rename one only
  with a sweep of every reference and a passing `check`.
- Cross-references are relative paths. From `prime/artifacts/index.html` to the
  Brig: `<a href="../locations/caelestis.html#brig">the Brig</a>`.
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
anything still to decide. A fact about the world never lives only in DM notes, except a subject's secrets, which live in *What's hidden* (§ 5).

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
| story shape and per-arc planning | Campaign |
| the antagonists' workings | Opposition |
| a grounded thread the DM can pull | Plot Hooks, Active or Inactive |
| untethered speculation | Plot Hooks, Speculation section |
| what happened at the table | Voyages |
| how the DM runs the campaign, the hook taxonomy | Principles |

### Campaign and Opposition

The Campaign page and the Opposition pages are two cuts through one matrix:
arcs down the side, forces across the top. Campaign (`campaign/index.html`)
reads across the rows, one arc at a time with every force in it. Each
Opposition page (`opposition/vecna.html`, `opposition/vthorama.html`) reads
down one column, everything that force does from Arc 1 to Arc 4. Neither
retells who a subject is; that is the dossier's job.

Each Opposition page carries its column as `#arc-1` to `#arc-4`. Those ids are
the embed contract and do not change. Campaign ends each arc with the cells
for it, as plain links:

```html
<a class="dm-cell" href="../opposition/vecna.html#arc-1">Opposition: Vecna · Arc 1</a>
```

`prime/scripts/dm-cells.js` replaces each link with that section's body under
a `.dm-embed` bar ("Open full →"). Without the script the link stays, `check`
validates it, and Pagefind indexes the passage once, on its own page. Embeds
are for the matrix only; elsewhere, pages link.

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
- rows in strict alphabetical order by the name as written, first word first:
  Winston Ryeback sorts under W, Haymond Rolt under H. A leading "The" and a
  rank title (Captain, Boatswain, Quartermaster) are skipped for sorting and
  kept on the row. The entries' prev/next bars follow the same order.

A register loads `dm-nav.js` and `dm-register.js` only: no tab strip, no table
of contents. Concept material sits below the rows as a collapsed section. A
tool the page needs is embedded in a `.dm-embed` with **Open full**.

| Register | Holds | Axes |
|---|---|---|
| `locations/` | places, grouped by system | system, kind, standing |
| `dossiers/` | anything with a will | side, kind, standing |
| `factions/` | organized interests | reach, posture |
| `crew/` | the player characters | where the rules live (on their page, Rules page, a player page, role-play only; a row may hold several) |
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

For artifacts and places, use `dossier-list dossier-artifacts`; it takes the
same rows.

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
| `dm-sections.js` and `dm-toc.js` | every long page (sections in `<details>`); `<main class="dm-content has-toc">` |
| `dm-register.js` | a register page |
| `dm-cells.js` | Campaign (arc cells); see § 3, Campaign and Opposition |

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
inside the `<summary>`; subsections are `is-sub` with an `<h3>`. A long page
reads as one article: `dm-sections.js` opens every section, makes the
summaries plain headings, drops the boxes, and the "On this page" rail
(`dm-toc.js`) lists every section and subsection. There are no section tabs
and nothing collapses; the rail is the navigation. Entries (§ 5) keep their
two tabs, About and DM notes; crew pages keep four (§ 5, Other kinds).

```html
<details class="dm-collapse-section" id="section-id">
  <summary><h2>Section</h2></summary>
  <div class="dm-collapse-section-body">
    <p>…</p>
  </div>
</details>
```

A subsection may be wrapped the same way with `class="dm-collapse-section is-sub"`
and an `<h3>`. The heading takes the summary's type from `dm.css`
(`.dm-collapse-section > summary > h2, h3`) and carries no inline style.

Sections are closed by default. Open only these:

| Page | Open |
|---|---|
| Campaign | Theme; Arcs, with Arc 1 open inside |
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

## 5. Entries: dossiers, factions, items and places

Every entry for one subject, a person, a faction, an item or a place, reads
like a fan-wiki page (the model is the Critical Role wiki: Veth Brenatto for a
person, the Cobalt Soul for an order, the Luxon beacon for an item, Rexxentrum
for a place). They share one frame: an infobox on the right, *About* and *DM
notes* tabs, and the Connections card at the foot. Only the *About* sections
and the infobox rows change with the kind; see § Other kinds, below.

A dossier reads like a fan-wiki character page: an infobox on the right, a
short overview, then the character in sections. It is the page the DM opens to grab anything about its subject
mid-session: a face, a voice, a signature item, the short version of their
past. Some dossiers are dense and some are sparse; every one follows the same
order and includes only the sections with content.

### Tabs

| Tab | Voice | Holds |
|---|---|---|
| About | in-world | the infobox and the sections below: everything about them that a wiki would say |
| DM notes | DM | what the DM needs to run them, below |
| Stat block | | the block, if it has one |

Tabs are `.pill-tab` buttons in a `.pill-tabs[data-pill-group]` strip with
`.pill-panel` panels, driven by `dm-tabs.js`. Headings inside a tab start at
`<h4>`.

### The infobox

A right-hand column beside every tab (`.entry-header.is-wiki`), so the face
and key facts stay in view while reading DM notes; it stacks on top on a
phone. Portrait, then the rows that apply: species, class or role, affiliation, origin, home or
base, status, key items (linked), first appearance (voyage).

### About, in order

| Section | Holds |
|---|---|
| Overview | two to four sentences, unheaded: who they are and why they matter |
| Appearance | what they look like, how they dress, what people notice first |
| Personality | temperament, manner, voice, what they want and what drives them |
| Biography | *Background*: their past before the crew, short and exact ("an archmage of Oerth who became a lich, gathered magical secrets, and rose to godhood"), never a recount of the cosmos. *In the campaign*: a recap of what has happened with them, by arc or voyage |
| Relationships | one short subsection per person or group that matters to them, linked |
| Abilities | what they can do, in prose; numbers go in *Stat block* |
| Notable items | each item on its own line, linked to its artifact page |
| Quotes | lines said in play or canon, when there are any |

When appearance is not set, *DM notes* says so in a sentence.

### DM notes, in order

Only the subsections with content.

| Subsection | Holds |
|---|---|
| What's hidden | true things about them that are secret and that running them depends on (Vecna's hand in the Sovereign Eye), in in-world voice |
| How to run them | voice, tactics, how they engage, how they react under pressure |
| Their arc | where their story is going in this campaign |
| Threads | why a connection matters to running them, in sentences; the links themselves are in *Connections* |
| Still to decide | each a full, specific sentence ("Ezra's surname is not chosen yet."), never a bare label |

### Other kinds

Same frame, same *DM notes*, same Connections card. *About* sections, in
order, only those with content:

| Kind | Infobox rows | About sections |
|---|---|---|
| Faction (`factions/`) | kind, what it serves, leader, seat, reach, ranks, device, standing with Caelestis | Overview · Beliefs (public aim; a secret aim goes in *What's hidden*) · Structure and ranks · History · Operations · How they look (device, dress, magic) · Seats and branches (one subsection each, with its known members) · Members · Relationships |
| Item (`artifacts/`) | kind, made by, made of, held by, where, status | Overview · Appearance · Properties (what it does, in prose, then the rules as an item card) · History · In the campaign (a recap by voyage) |
| Place (`locations/`) | kind, designation, system, galaxy, ruled by, peoples, status | Overview · Description (look, climate, terrain) · History · Peoples and culture · Notable people · Points of interest (one subsection each) · In the campaign (a recap by voyage) |
| Vessel (`vessels/`) | kind, built by, held by or under command of, where, status | Overview · Appearance · Decks and interior (one subsection per deck or space) · History · In the campaign (a recap by voyage) |
| Player character (`crew/`) | kind, species, class, station (from the record), origin, affiliation, patron, carries (linked), where the rules live, first voyage, player page, plus kind-specific rows (for example First tether, Maker, Specialisation, Constellation) | Overview · Appearance · Personality · Biography (*Background*; *In the campaign*, one entry per voyage, written from the record) · Relationships · Abilities (prose, no numbers) · Notable items · Quotes |

A player character page has four tabs, not two, because the arc and the
homebrew are each too large for DM notes:

| Tab | Voice | Holds |
|---|---|---|
| About | in-world | the sections above |
| Arc | DM | *What he is missing* (`#missing`, linking Campaign § Crew) · *Where it heads* (`#heads`) · *Gates and escalation* · *Observation flags* · *Next beat* (`#next-beat`, linking the Voyages beat, never restating it) · *Table notes* · *Inspirations* |
| Mechanics | DM | *Build* (`#build`: class and level path, key scores, feats, the sheet), then each homebrew system under its own id |
| DM notes | DM | *What's hidden* (`#hidden`) · *Threads* · *Still to decide* |

The eyebrow reads `Crew · <class> · <station>`. A character whose record
deliberately differs from the truth adds an **On the record** row to the
infobox (Tumak: human rogue).

A residue item adds a **fragment** row to its infobox. The DM item page holds
the full rules; the player inventory entry holds what the crew has learned of
them. The rules sit in an item card (`styles/dm.css`, § Entries) after the
Properties prose:

```html
<div class="item-card" id="item-card">
  <div class="item-card-name">Item name</div>
  <div class="item-card-type">Wondrous item, uncommon</div>
  <dl class="item-card-props">
    <dt>Charges</dt><dd>3, regained at dawn</dd>
  </dl>
  <p>What it does, in rules terms.</p>
</div>
```

### Connections

Every entry ends with the Connections card, below the tabs and visible
whichever tab is open: a hot bar of chips linking to everything the entry
touches. Columns, only those with chips: *People and factions*, *Places*,
*Items*, *Campaign* (voyages, arcs, Opposition pages). The card lists;
*Threads* explains. A connection that needs no explanation is a chip and
nothing more.

*About* holds what a wiki would say about them. A secret that the DM needs to
run them or the things around them is true, but it lives in *What's hidden*,
not in *About*. There is no "Open" subsection: a note says exactly what is
undecided.

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
  <summary><h3>Voyage NNN — Title</h3></summary>
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
