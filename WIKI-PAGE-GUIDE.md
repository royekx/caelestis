# Caelestis DM Wiki — Page-Building Guide

A reference for building new entries in the DM wiki. The structure here is
load-bearing; entries that ignore it create maintenance debt fast.

Three parts: **(1) the hierarchy** — what lives where and why;
**(2) the page responsibilities** — one-line descriptions of each page's
job; **(3) the conventions** — patterns, tags, prose standards, and
anti-patterns.

---

## 1. The hierarchy

The wiki lives under `/prime/` (DM-only, gated). It is organized into
**two domains** — setting and campaign — plus shared infrastructure.

```
/prime/
├── index.html                      ← gate (auth)
├── hub.html                        ← landing page after auth
│
├── cosmology/                      ┐
├── realms/                         │  SETTING — reusable across any campaign
├── factions/                       │  in this universe. A one-shot or a
├── artifacts/                      ┘  different crew can use these unchanged.
│
└── campaign/                       ┐
    ├── index.html                  │  CAMPAIGN — this run specifically.
    ├── voyages/                    │  Per-session record + per-arc planning
    ├── spine.html                  │  + antagonist throughline + grounded
    ├── remaking/                   │  threads + untethered brainstorm.
    ├── plot-hooks.html             │  Resets if you start a new campaign
    └── what-if.html                ┘  in this universe.
```

### The setting/campaign distinction

This is the most important boundary on the site. **A new entry must
belong to one side, not both.**

**Setting** = facts about the universe that exist regardless of which
campaign runs in it. The Continuum, the All-Father, monoliths,
Caelestis-the-station, the Order of the All-Father, Beshaba as a deity,
the World Surveyor as an artifact. *Other DMs running in this universe
should be able to reuse these.*

**Campaign** = facts about *this* run: who Vecna's current network is,
who the PCs are, what happened in the last voyage, the Brig heist plan,
the current state of the Fork. *Restart a campaign and most of this is
reset.*

If you find yourself writing "the crew" or "the network" or naming a
specific PC on a setting page, you've crossed the boundary. Move it.

### Setting pages are encyclopedic

Setting pages describe **what is true in the world, currently.** They
do not carry DM-craft guidance, "Running the X" preambles, prep notes,
operational content, or authorial framing. That stuff belongs on the
Campaign index (the DM how-to) or in this guide.

A setting page's job is: *if you go to look for the World Surveyor, you
get information about the World Surveyor.* Anything operational —
*how to use this during prep, when to surface what* — lives in the
Campaign cluster.

#### Content discipline — what stays on Setting and what doesn't

**Setting describes what each entity is.** Not what it isn't. Not what
it isn't typical of. Not comparatively. Not what's rare. The reader
builds the picture by reading across entries.

The clearest examples of how this works:

- *Gregory's entry* says he is an autognome wizard who casts spells.
  It does not say "the only known casting autognome." That comparison
  is for the reader to make by also reading the Autognome entry.
- *H'Catha's entry* describes H'Catha — torus geometry, beholder
  rulership, the Spire. It does not describe how the crew is about to
  visit it or what arc they're approaching it under.
- *Sol's entry* says he's a paladin of Beshaba who survived Aethris's
  failed Zenith ritual and is pursued by the Crystalline Retrieval
  Construct. It does not say "Sol's arc explores the question of
  personhood vs. function" — that's authorial framing.

#### What comes off Setting

- **Authorial planning.** "Forthcoming fetch quest," "to be revealed when,"
  "specifics pending until the table reaches it," "Arc III lever," "held
  for late-late-game," "DM menu," "deferred until each enters play."
- **Authorial framing.** "Arc centers on," "thematic question," "his
  thematic role is," "we author toward," "we are authoring toward."
- **Forward planning.** "The crew will approach via," "the Arc 1 finale
  will take them," "this is where the first encounter lands."
- **Player-facing meta.** "If players wonder X — no," "plants the
  question in the player's own head," "answers their concern about Y."
- **Comparative absolutes.** "The only known X," "no other X can do
  this," "few are X." Describe the entity. Let the reader infer.

#### What stays on Setting

- **Current state, including state that implicates PCs.** Tumak is a
  Wayfinder. Sol is pursued by the CRC. Boogie carries the Fonains
  shard. Gregory casts. All currently true; all setting.
- **Permanent historical events,** even ones a campaign generated. If
  the campaign ever produces something that becomes a permanent fact
  about the world (a destroyed city, a discovered artifact, a Zenith),
  it goes in Setting as history.
- **Current operations,** stated as fact. Vocath has a long-standing
  commercial conflict with Mirt. Saerthe maintains the station's
  Forbiddance. The Foundling is currently assigned to the senior
  cadet cohort. These are world-facts that any observer could state.
- **Working assumptions and partial knowledge** about cosmological
  questions. The Reach's name is not known. The Restorers' awareness of
  the Hollow is not known. These are gaps in record, not DM
  plan-deferrals; phrase them as such.

#### Setting ↔ Campaign — the seam

The seam is the shape of the test. Two phrasings of nearly the same
sentence sit on opposite sides:

| Campaign (planning, framing) | Setting (current state) |
|---|---|
| The crew will approach H'Catha disguised as a tyrant ship. | H'Catha is patrolled by beholders; non-beholder traffic is rare and dangerous. |
| Vocath's grudge-op is the cover for a Brig recon. | Vocath is in active commercial conflict with Mirt. |
| Sol's arc centers on existence through endurance. | Sol bears Beshaba's mark openly and manifests her Oath of Misfortune. |
| The Latchling is the first anomaly Gregory's resonance locates. | The Latchling is a paracausal entity currently hidden at the Sea Dock by Rindle Gearloft. |

When in doubt: *would a one-shot DM running a different campaign in
this world need to delete the sentence?* If yes → Campaign. If no →
Setting.

### How sub-areas relate

- **Setting pages cross-reference each other freely.** Cosmology → Realms
  → Factions → Artifacts.

- **Campaign pages reference setting pages, not the reverse.** With one
  narrow exception: an artifact's current custody field can reference
  Remaking, because custody is current-state metadata.

- **Campaign sub-pages reference each other freely** within the campaign
  cluster.

---

## 2. Page responsibilities

### Setting pillars

**Cosmology** — what is true about the universe. Principles and
structural facts.

**Realms** — where things are. Geography organized Wildspace → celestial
body → locale. Plus *Untethered* for un-placed locations and *Things in
Play* for named campaign objects that don't yet warrant an Artifacts
entry.

**Factions & Characters** — who's who. Organized as groups with members,
using the **collapsible-row dossier pattern** (see § 3).

**Artifacts** — named objects of cosmological weight. Each artifact is
one collapsible row showing image, name, function, location at a glance.

### Campaign cluster — canonical order

**Campaign (index)** — the DM how-to. How this wiki works.

**Voyages** — *what is.* Per-session briefing-vs-voyage audit with Delta.
Most recent first; upcoming session in a "Next session" block at top.

**Spine** — *where we want to go (the campaign).* Authored shape, with
sections: operational links, Central Question, Cosmological Pressures,
Crew, Arcs.

**Remaking** — *where we want to go (the antagonist).* Vecna's project.

**Plot Hooks** — *what might resolve.* Threads with two states: **Active**
(in motion or imminent) and **Inactive** (planted, available to pull).

**What If** — *what's unresolved.* Untethered brainstorm.

### Decision rule for new content

1. Cosmological principle? → **Cosmology**
2. Place? → **Realms**
3. Person, group, or faction? → **Factions & Characters**
4. Named cosmologically-weighty object? → **Artifacts**
5. Story shape or per-arc planning? → **Spine**
6. Antagonist throughline? → **Remaking**
7. Grounded, pullable thread? → **Plot Hooks** (Active or Inactive)
8. Untethered speculation? → **What If**
9. Just happened at the table? → **Voyages**

---

## 3. Conventions

### Universal collapsibility

**Every header with content under it is collapsible.** No exceptions.
H2 sections, H3 subsections, individual entries — all use the
`dm-collapse-section` pattern.

```html
<details class="dm-collapse-section" id="section-id">
  <summary><h2 style="display:inline;margin:0;font:inherit;color:inherit;">Section Title</h2></summary>
  <div class="dm-collapse-section-body">
    <p>Content…</p>
  </div>
</details>
```

For h3 subsections inside an h2 section, use `.is-sub`:

```html
<details class="dm-collapse-section is-sub" id="sub-id">
  <summary><h3 style="display:inline;margin:0;font:inherit;color:inherit;">Subsection Title</h3></summary>
  <div class="dm-collapse-section-body">
    <p>Content…</p>
  </div>
</details>
```

The page reads as an outline of summaries; click to expand. The
`style="display:inline;margin:0;font:inherit;color:inherit;"` on the
inner heading lets the summary control the visual styling while keeping
the semantic heading element for accessibility and the TOC.

### Default-open behavior

Most sections should be **closed by default**. Add `open` only where the
section is what the page is for on first load:

- **Spine:** Central Question open; Arcs open (Arc 1 open inside);
  everything else closed
- **Voyages:** Next session open; Record open; most recent recorded
  voyage (V003) open; older voyages closed
- **Plot Hooks:** Active open; Inactive closed
- **All other pages:** everything closed

### Unified dossier-row pattern

For pages cataloging entities (Factions, Artifacts, Plot Hooks, Crew on
the Spine), each entity is **one collapsible row** — not a row in a
table AND a separate full-notes section below.

```html
<div class="dossier-list">
  <details class="dossier-row" id="entity-id">
    <summary>
      <div class="dossier-portrait" data-key="entity-key"></div>
      <div class="dossier-id">
        <div class="dossier-name">Entity Name</div>
        <div class="dossier-role">Role / Status</div>
      </div>
      <div class="dossier-detail">One-line summary visible in the collapsed row.</div>
    </summary>
    <div class="dossier-row-body">
      <p>Full prose detail, expanded under the row.</p>
    </div>
  </details>
</div>
```

For artifacts/places (wider portraits), wrap the list with
`dossier-list dossier-artifacts`.

For Plot Hooks rows, include a status pill and type tags in the role
column:
```html
<div class="dossier-role">
  <span class="dm-tag is-canon">Object</span>
  <span class="dm-tag is-canon">Event</span>
</div>
<div class="dossier-status is-active">Active</div>
```

Status pill variants: `is-active`, `is-forthcoming`, `is-imminent`,
`is-inactive`.

**No duplicate scannable tables.** The collapsed rows ARE the
scannable view. Do not add a separate "Status Table" section.

### Image map

All images for the wiki (character portraits, artifact images, place
images, object sketches) come from `scripts/portraits.js`. Each entity
has a kebab-case key; the file ID for the Drive-hosted image goes in
the `fileId` field.

```js
'character-key': { name: 'Display Name', fileId: '' },
```

The dossier row references the key via `data-key="..."` on the portrait
cell. Empty `fileId` shows a monogram placeholder; populate to show the
image. The same mechanism serves characters, artifacts, places, ships.

### Functional titles

Section titles describe what's in the section. They are signposts, not
poetry. Specifically:

- **Avoid stylistic "The"** at the start of section titles unless the
  noun is genuinely the name of something (*The Reach* is a place's
  proper name; *The Bridge* is what the Academy's command is called).
  Otherwise drop it: *Network*, *Spectrum*, *Inscription*, *Failure
  state*, *Fork*.

- **Avoid enumeration leftovers.** If a heading reads "D — The End"
  because earlier drafts had A/B/C/D, rename to what the section
  actually is: *Failure state*.

- **Setting-page titles can carry weight** because they name things in
  the world. *The Prime Continuum*, *The Axioms*, *The Reach*, *The
  Core*, *The Gods*, *The Hollow* — these are world-objects.

- **Campaign-page titles should be functional.** *Central Question*
  (not "The North"). *Cosmological Pressures* (not "The Weather of
  Reality"). *Arcs* (not "Acts" or "The Acts").

### Heading hierarchy

- `<h1>` — page title only.
- `<h2>` — top-level sections. Wrapped in `dm-collapse-section`.
- `<h3>` — subsections. Wrapped in `dm-collapse-section is-sub`.
- `<h4>` — generally avoid; use a nested `<details class="dm-collapse">`
  for deeper detail inside a row body.

**No questions in headings.** Declarative only.

### Anchors

Anchor IDs are kebab-case, semantic, brief: `world-surveyor`, `arc-1`,
`failure-state`. Anchors are part of the public contract — don't rename
without sweeping references and running the integrity check.

### Cross-references

Relative paths. From `prime/artifacts/index.html` to the Brig:
`<a href="../realms/#brig">the Brig</a>`. From
`prime/campaign/remaking/index.html` to Artifacts:
`<a href="../../artifacts/#world-surveyor">…</a>`. The double-up is
correct — Remaking is one level deeper than its siblings.

For external links use:
`<a href="..." target="_blank" rel="noopener" class="dm-link-external">…</a>`

### Tags

Tags communicate cosmological or structural state at a glance. **Tags do
not appear in the TOC** — `scripts/dm-toc.js` strips them.

Standard tags:
- `dm-tag is-canon` — established fact, locked
- `dm-tag is-locked` — committed, do not change
- `dm-tag is-open` — unresolved
- `dm-tag is-cosmic` — cosmologically heavy
- `dm-tag is-stub` — placeholder
- `dm-tag is-warn` — caution

**Campaign-state tags do not belong on setting pages.** Tags like "Home
base," "Confirmed," "Active," "In the Brig," "This campaign" are
campaign-current, not setting-durable.

For Plot Hooks, the type tags (Character / Place / Event / Object /
Pattern) use plain `dm-tag is-canon` styling.

### Voyages — briefing/voyage/delta pattern

```html
<details class="dm-collapse-section is-sub" id="vNNN">
  <summary><h3 ...>Voyage NNN — Title</h3></summary>
  <div class="dm-collapse-section-body">
    <div class="voyage-grid">
      <div class="voyage-col">
        <div class="voyage-col-eyebrow">Briefing — Planned</div>
        <div class="voyage-col-body"><p>Summary…</p></div>
        <a class="voyage-col-link" href="voyage-briefing-NNN.html">Open briefing →</a>
      </div>
      <div class="voyage-col">
        <div class="voyage-col-eyebrow">Voyage — Actual</div>
        <div class="voyage-col-body"><p>Summary…</p></div>
        <a class="voyage-col-link" href="../../../../crew-logs/detailed/voyage-detailed-NNN.html">Open in Crew Logs →</a>
      </div>
    </div>
    <div class="voyage-delta">
      <div class="voyage-delta-eyebrow">Delta — what to bring forward, what to scrap</div>
      <div class="voyage-delta-body"><p>What changed.</p></div>
    </div>
  </div>
</details>
```

Most recent voyage first; upcoming voyage in a separate "Next session"
section above the Record list.

### Page-level metadata template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>[Page Name] · Caelestis · DM</title>
<link rel="stylesheet" href="[base]/styles/caelestis.css">
<link rel="stylesheet" href="[base]/styles/dm.css">
<script src="[base]/scripts/dm-nav.js" defer></script>
<script src="[base]/scripts/dm-toc.js" defer></script>
<script src="[base]/scripts/portraits.js" defer></script>
</head>
```

`[base]` is `../..` for pages at `/prime/X/index.html`, `../../..` for
pages at `/prime/X/Y/index.html`. Include `portraits.js` on any page
using dossier rows.

### Prose conventions

- Terse and direct. Short sentences.
- No AI-isms. Avoid "It's not just X, it's Y" / "Not [thing], but
  [thing]" / aphorism-heavy openers.
- No questions as rhetorical bait.
- Italics for sentence-level emphasis, bold for terms to retain. Both
  sparingly.
- Definite verbs. Avoid "may be," "might be" unless the ambiguity is
  doing work.
- Setting voice = encyclopedic. Campaign voice = working notes.

### Integrity check

After any significant change:

```bash
cd /path/to/site
python3 << 'EOF'
import os, re, glob
pages={}
for path in glob.glob('prime/**/*.html', recursive=True):
    html=open(path).read()
    pages[path]=(html,set(re.findall(r'\bid="([^"]+)"',html)))
def resolve(src,href):
    if href.startswith(('http','mailto','#')): return None
    page,_,anchor=href.partition('#')
    if page=='': target=src
    else:
        if page.endswith('/'): page+='index.html'
        target=os.path.normpath(os.path.join(os.path.dirname(src),page))
    return (target,anchor)
problems=[]
for src,(html,_) in pages.items():
    for href in re.findall(r'href="([^"]+)"',html):
        r=resolve(src,href)
        if not r: continue
        t,a=r
        if t.startswith('../') or '/crew-logs/' in t: continue
        if t not in pages:
            if t.endswith('.html'): problems.append(f'{src}: broken page -> {href}')
            continue
        if a and a not in pages[t][1]: problems.append(f'{src}: dead anchor -> {href}')
for p in sorted(set(problems)): print('  '+p)
print(f'  {len(set(problems))} problems')
EOF
```

Expected residual: four `voyage-briefing-NNN.html` references (forward
references to files you'll create).

---

## Anti-patterns (learned the hard way)

### Don't duplicate dossier data

**Old mistake:** A `<table class="dossier">` listing characters in a
faction, then *separate* `<details class="dm-collapse">` blocks below
with the same characters' full notes. Two passes of the same data; the
reader has to scan both to know everything about one character.

**Fix:** Each entity is *one* collapsible row. Row collapsed = scannable
summary. Row expanded = full detail. One representation per entity.

### Don't blur setting and campaign

The Artifacts page once described the World Surveyor with named-party
reads (crew/network/Vecna). Setting got named campaign parties; **fix**
is generic depths on Setting, named parties on Remaking.

### Don't write Setting in campaign voice

The Realms page once described H'Catha as "where the crew's Arc I
finale will take them via the disguised tyrant ship — the Foundling
can't survive the approach." That's authorial planning, not world
description. **Fix:** describe what H'Catha is (torus, beholder-ruled,
the Spire); the crew's approach lives on Spine and the Voyages
briefing.

The rule: a one-shot DM running this universe should be able to read
the Setting entry and use it. If they'd have to delete sentences,
those sentences are mis-located.

### Don't list PCs as illustrations of cosmological principles

The Paracausality section once read as a list of "Gregory is paracausal
because X, Mr. Blip is the control case because Y, Wizpop surfaces it,
the Latchling is a different shape." That's a campaign roster pretending
to be a principle. **Fix:** describe paracausality generically — how it
manifests, what shapes change can take, what resonance is. PCs appear
in their own entries with their own current-state facts.

### Don't use comparative absolutes

"The only known X." "No other Y can do this." "Few are Z." Describe
what the entity is; let the reader build the comparison by reading
other entries. Gregory's entry says he casts. The Autognome entry, if
written, would say casting isn't typical of them.

### Don't enumerate authorial options on Setting

The World Surveyor's heart once had a "DM menu" with four ranked
candidates and a "lead candidate" tag. **Fix:** commit to the one
that's true in the world; drop the menu. If you change your mind, you
change the entry. The wiki states facts, not the author's working
options.

### Don't put "Running the X" sections on setting pages

Setting pages get a brief lede and content only. DM craft moves to the
Campaign index and this guide.

### Don't use questions or enumeration leftovers as headings

"What is the Continuum?" / "How does Forbiddance work?" — declarative
only. "D — The End" — rename to what the section actually contains
("Failure state").

### Don't paste DM scripts into player pages

Player nav once leaked DM sidebar onto crew-manifest pages. The auth
guard in `dm-nav.js` refuses to render outside `/prime/`; player
`nav.js` is kept separate.

### Don't put campaign-state tags on setting pages

"Home base," "Confirmed," "Active," "In the Brig" are campaign-current.
Setting pages use only structural tags.

### Don't rename anchors silently

Run the integrity check after every rename.

### Don't write walls of text

Wrap any header-with-multi-paragraph-content in
`dm-collapse-section`. The reader scans first and expands on demand.

### Don't add stylistic "The" to functional titles

Campaign-page titles are signposts. *Network*, *Spectrum*,
*Inscription*, *Fork*, *Failure state*. The "The" goes on world-objects
(*The Reach*, *The Hollow*) where it's part of the name.

---

## Reference

| Path | Role | Domain |
|------|------|--------|
| `/prime/index.html` | Auth gate | infra |
| `/prime/hub.html` | Landing after auth | infra |
| `/prime/cosmology/` | Universe principles | Setting |
| `/prime/realms/` | Geography | Setting |
| `/prime/factions/` | People & groups | Setting |
| `/prime/artifacts/` | Cosmologically-weighty objects | Setting |
| `/prime/campaign/` | DM how-to | Campaign |
| `/prime/campaign/voyages/` | Briefing/voyage/delta audit | Campaign |
| `/prime/campaign/spine.html` | Authored shape | Campaign |
| `/prime/campaign/remaking/` | Antagonist throughline | Campaign |
| `/prime/campaign/plot-hooks.html` | Active + Inactive threads | Campaign |
| `/prime/campaign/what-if.html` | Untethered brainstorm | Campaign |
