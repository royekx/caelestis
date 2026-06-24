# Caelestis DM Wiki — Page-Building Guide

A reference for building new entries in the DM wiki. The structure here is
load-bearing; entries that ignore it create maintenance debt fast. Read
this before adding new pages or significant new sections.

Three parts: **(1) the hierarchy** — what lives where and why;
**(2) the page responsibilities** — one-line descriptions of each page's
job; **(3) the conventions** — patterns, tags, prose standards, and
anti-patterns to avoid.

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
    ├── voyages/                    │  Per-session record + per-act planning
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

**Campaign** = facts about *this* run: who Vecna's current network is, who
the PCs are, what happened in the last voyage, the Brig heist plan, the
current state of the Fork. *Restart a campaign and most of this is reset.*

When the two overlap, **the setting page holds the durable object, and
the campaign page holds the current state.** Example: the World Surveyor
(setting) is held in the Brig (setting) — both belong on setting pages.
But *the network is currently trying to steal it via a graduation heist*
is campaign-state and belongs in The Remaking. The Artifacts page can
carry a one-line status field noting current custody (that's metadata
about the artifact, not plot); the plot of who's currently after it lives
in Remaking.

If you find yourself writing "the crew" or "the network" or naming a
specific PC on a setting page, you've crossed the boundary. Move it.

### Setting pages are encyclopedic

Setting pages describe **what is true in the world.** They do not carry
DM-craft guidance, "Running the X" preambles, prep notes, or operational
content. That stuff belongs on the Campaign index (the DM how-to) or in
this guide.

A setting page's job is: *if you go to look for the World Surveyor, you
get information about the World Surveyor.* Anything operational —
*how to use this during prep, when to surface what, what conventions to
follow* — lives in the Campaign cluster.

### How sub-areas relate

- **Setting pages cross-reference each other freely.** Cosmology → Realms
  → Factions → Artifacts. Backlinks are encouraged; the four pillars are
  one cosmological-anthropological reference system.

- **Campaign pages reference setting pages, not the reverse.** The
  Remaking links to Artifacts for object detail. Plot Hooks links to
  Factions for who. Setting pages do not link forward into campaign
  pages (with one exception: an artifact's *current custody* field can
  reference Remaking for "who's after it now," because that's
  legitimately campaign-state).

- **Campaign sub-pages reference each other freely** within the campaign
  cluster, the same way setting pillars do.

---

## 2. Page responsibilities

One-line description of what each page is for. **If content doesn't fit
the responsibility, it's on the wrong page.**

### Setting pillars

**Cosmology** — what is true about the universe. The Prime Continuum,
Continuity, the Axioms, paracausality, Zenith events, monoliths, the
Core, the Gods, the Reach. *Principles and structural facts.*

**Realms** — where things are. Geography organized Wildspace → celestial
body → locale. Includes the Untethered section for places not yet placed
in a sphere. Also holds **Things in Play** at the bottom — named physical
objects in the current campaign that don't yet warrant their own setting
entry. (When a Thing in Play becomes a major cosmologically-significant
artifact, it graduates to the Artifacts pillar.)

**Factions & Characters** — who's who. Organized as **groups with
members**: each faction's lead describes the faction; the people who
belong to it appear in a **dossier table** below, with deeper detail in
collapsibles.

**Artifacts** — named objects of cosmological weight. Each entry is the
artifact-as-object: physical description, mechanical function,
cosmological origin, general properties, set context, ethics,
current-custody status. A roster dossier at the top of the page shows
every artifact at a glance.

### Campaign cluster — in canonical reading order

The campaign cluster reads in **canonical order**: what *is* → where
we *want to go* → what *might resolve* → what's *unresolved*.

**Campaign (index)** — the DM how-to. *How this wiki works*. The
setting/campaign split, page guide, operating principles, hook taxonomy,
conventions, building-new-entries decision tree. Not a story document.

**Voyages** — *what is.* Per-session audit. Each entry shows the briefing
(planned) against the voyage (actual) with the Delta surfaced underneath.
Most recent first; the upcoming session sits as a "Next session" block at
the top. Briefings link to in-site `voyage-briefing-NNN.html` files in
the same directory; voyage columns link to player-site
`voyage-detailed-NNN.html` files under `/caelestis/crew-logs/detailed/`.

**The Spine** — *where we want to go (the campaign).* The authored shape
of the run. Operational links at top, the Crew (PC arcs in dossier form,
alphabetical), the Weather of Reality, then per-act collapsibles. Act 1
expanded by default; later acts more sketched.

**The Remaking** — *where we want to go (the antagonist).* Vecna's
project, the network, the inscription, the figure, the artifact-as-target,
the Fork.

**Plot Hooks** — *what might resolve.* Grounded threads. Each hook has a
foundation already in the wiki and is ready to develop if the crew pulls
on it. Tagged by type (character / place / event / object).

**What If** — *what's unresolved.* Untethered brainstorm. Cosmological
speculation, late-arc levers. When a What If gets grounded, it graduates
to Plot Hooks.

### Decision rule for new content

When adding something new, ask in order:

1. *Is this a cosmological principle?* → **Cosmology**.
2. *Is this a place?* → **Realms**.
3. *Is this a person, group, or faction?* → **Factions & Characters**.
4. *Is this a named object of cosmological weight?* → **Artifacts**. (If
   it's a minor named object specific to this campaign — Saerthe's
   miniature, the disc-marked crates — it goes in Realms → Things in
   Play, not Artifacts.)
5. *Is this story shape or per-act planning?* → **The Spine**.
6. *Is this antagonist throughline?* → **The Remaking**.
7. *Is this a pullable thread grounded in the wiki?* → **Plot Hooks**.
8. *Is this untethered speculation?* → **What If**.
9. *Did this just happen at the table?* → **Voyages**.

If you find content fitting two places, **one of them is the wrong
place**. Setting/campaign is usually the boundary at issue.

---

## 3. Conventions

Patterns the wiki uses consistently. New entries should match these
unless there's a deliberate reason to break the pattern.

### Page structure

Every wiki page follows this skeleton:

```
<header>
  <eyebrow>Setting | Campaign · [Category]</eyebrow>
  <h1>Page Title</h1>
  <lede>One paragraph: what this page is, what neighbors it has.</lede>
</header>

<h2>Main section 1</h2>
  Content.

<h2>Main section 2</h2>
  Content.

...

<div class="dm-footer">Page name · Caelestis DM</div>
```

**No "Running the X" sections on setting pages.** Setting pages get a
brief lede and then content; operational guidance lives on the Campaign
index. (This was a structural mistake earlier; it's been corrected.)

### The dossier pattern

For pages that catalog entities — Factions & Characters, Artifacts, The
Spine's Crew section — the visible default is a **dossier table** showing
each entity's portrait, name, role, and brief detail. Deeper content
lives in collapsible `<details class="dm-collapse">` blocks below the
table.

```html
<table class="dossier">
  <thead>
    <tr>
      <th></th><th>Name</th><th>Role</th><th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr id="character-anchor">
      <td class="dossier-portrait" data-key="character-key"></td>
      <td>
        <div class="dossier-name">Character Name</div>
        <div class="dossier-role">Title</div>
      </td>
      <td class="dossier-role">Title</td>
      <td class="dossier-detail">Brief one-line.</td>
    </tr>
  </tbody>
</table>

<details class="dm-collapse">
  <summary>Character Name — full notes</summary>
  <p>Full prose…</p>
</details>
```

Portraits live in `scripts/portraits.js` — a centralized map of character
keys to Google Drive file IDs. Rows reference the key via
`data-key="..."`; the rendering helper fills in the image (or a monogram
placeholder if no file ID is set).

### Adding portraits

Open `scripts/portraits.js` and find the entry for the character. Replace
the empty `fileId: ''` with the Drive file ID. The image hosting URL
follows `https://lh3.googleusercontent.com/d/{fileId}` automatically.

If a character doesn't have an entry yet, add one:
```js
'character-key': { name: 'Character Display Name', fileId: '' },
```

### Collapsibles

Anything multi-paragraph that lives under a heading should be collapsible
by default. The reader sees the heading and a brief identity statement;
they expand what they want detail on.

```html
<details class="dm-collapse">
  <summary>Section title</summary>
  <p>Detail prose…</p>
</details>
```

Open by default if the content should be visible on first load:
```html
<details class="dm-collapse" open>
```

The Spine's Act 1 is the canonical "open by default" example — you read
the page and the current act is already expanded.

### Heading hierarchy

- `<h1>` — page title only (one per page).
- `<h2>` — top-level sections. Anchored with `id="..."`.
- `<h3>` — subsections. Anchored.
- `<h4>` — generally avoid; convert to a `<details class="dm-collapse">`
  instead.

**No questions in headings.** Declarative only.

### Anchors

Anchor IDs are kebab-case, semantic, brief: `id="reach-monolith"`,
`id="hcatha"`, `id="world-surveyor"`. Anchors are part of the public
contract — other pages link to them. **Don't rename existing anchors
without sweeping all references**; run the integrity check.

### Cross-references

Use relative paths. From `prime/artifacts/index.html` to the Brig:
`<a href="../realms/#brig">the Brig</a>`. From `prime/campaign/remaking/index.html`
to Artifacts: `<a href="../../artifacts/#world-surveyor">…</a>`. The
double-up is correct — Remaking is one level deeper than its siblings.

For external links, use the external-link class:
`<a href="..." target="_blank" rel="noopener" class="dm-link-external">…</a>`.

### Tags

Tags appear inside headings or card titles. They communicate
*cosmological or structural* state at a glance. **Tags do not appear in
the TOC** — `scripts/dm-toc.js` strips them before reading heading text.

Standard tags:
- `<span class="dm-tag is-canon">…</span>` — established fact, locked.
- `<span class="dm-tag is-locked">…</span>` — committed, do not change.
- `<span class="dm-tag is-open">…</span>` — unresolved, pending decision.
- `<span class="dm-tag is-cosmic">…</span>` — cosmologically heavy, often
  used for hidden/mysterious entities.
- `<span class="dm-tag is-stub">…</span>` — placeholder, content deferred.
- `<span class="dm-tag is-warn">…</span>` — caution / requires care.

**Campaign-state tags do not belong on setting pages.** Tags like "Home
base," "Confirmed," "In the Brig," "Active," "This campaign" are
campaign-current, not setting-durable. They go on campaign pages instead.
Setting pages use only structural tags (is-cosmic, is-stub, is-open for
genuine resolution-pending content).

For Plot Hooks, use the *type tags* as plain `is-canon` tags with the
type label: `<span class="dm-tag is-canon">Object</span>`, `Place`,
`Event`, `Character`. Multiple type tags per hook are encouraged.

### Voyages — the briefing/voyage/delta pattern

Each voyage entry on `campaign/voyages/index.html` has three parts:

```html
<h3 id="vNNN">Voyage NNN — Title</h3>

<div class="voyage-grid">
  <div class="voyage-col">
    <div class="voyage-col-eyebrow">Briefing — Planned</div>
    <div class="voyage-col-body">
      <p>Brief summary of what was planned.</p>
    </div>
    <a class="voyage-col-link" href="voyage-briefing-NNN.html">Open briefing →</a>
  </div>

  <div class="voyage-col">
    <div class="voyage-col-eyebrow">Voyage — Actual</div>
    <div class="voyage-col-body">
      <p>Brief summary of what actually happened.</p>
    </div>
    <a class="voyage-col-link" href="../../../../crew-logs/detailed/voyage-detailed-NNN.html">Open in Crew Logs →</a>
  </div>
</div>

<div class="voyage-delta">
  <div class="voyage-delta-eyebrow">Delta — what to bring forward, what to scrap</div>
  <div class="voyage-delta-body">
    <p>What changed, what to bring forward, what to scrap.</p>
  </div>
</div>
```

Most recent voyage first. Upcoming voyage sits in a separate "Next
session" block above the list.

### Callouts

Three styles, each for a different purpose:

```html
<div class="dm-callout">
  <span class="dm-callout-label">Label</span>
  Body text.
</div>
```

Modifiers: `is-info`, `is-warn`, `is-cosmic`, or none for general.
Callouts are for things that **interrupt the reading flow** — "stop and
notice this." They should be rare. Three or more callouts in short
succession is a sign the prose itself should carry the point.

### Prose conventions

- **Terse and direct.** Short sentences. No throat-clearing.
- **No AI-isms.** Avoid "It's not just X, it's Y" / "Not [thing], but
  [thing]" / "imagine if…" / aphorism-heavy openers. Iterate prose down.
- **No questions as rhetorical bait.** Make the point.
- **Italics for emphasis at the sentence level**, bold for *terms the
  reader should retain*. Use both sparingly.
- **Definite verbs.** Avoid "may be," "might be," "could potentially be"
  unless the ambiguity is doing real work.
- **Setting voice = encyclopedic.** Campaign voice = DM-craft prep notes.

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

`[base]` depends on depth:
- Pages at `/prime/X/index.html` or `/prime/X.html`: `../..`
- Pages at `/prime/X/Y/index.html` (Remaking, Voyages): `../../..`

Include `portraits.js` only on pages that use dossier tables. The
`noindex` meta is critical — DM content must not be search-indexed.

### Nav

Defined in `scripts/dm-nav.js`. To add a new top-level pillar, add a
section entry. To add a sub-page, add an entry with `indent: true`.

Current Campaign-cluster order (canonical, reading direction):

```js
{ key: 'campaign',  label: 'Campaign',     path: 'campaign/' },
{ key: 'voyages',   label: 'Voyages',      path: 'campaign/voyages/',        indent: true },
{ key: 'spine',     label: 'The Spine',    path: 'campaign/spine.html',      indent: true },
{ key: 'remaking',  label: 'The Remaking', path: 'campaign/remaking/',       indent: true },
{ key: 'plot-hooks',label: 'Plot Hooks',   path: 'campaign/plot-hooks.html', indent: true },
{ key: 'what-if',   label: 'What If',      path: 'campaign/what-if.html',    indent: true },
```

The auth-guard at the top of `dm-nav.js` is non-negotiable. It refuses
to render the nav outside `/prime/` or before authentication. Don't
remove or weaken it.

### Integrity check

After any significant change, run the integrity check:

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

This catches broken links and dead anchors. The current expected residual
is the four `voyage-briefing-NNN.html` references (you'll create those
files as you write each briefing); everything else should resolve.

---

## Anti-patterns (learned the hard way)

Things that have gone wrong in the past, captured here so they don't
recur.

### Don't blur setting and campaign

**Old mistake:** The Artifacts page originally described the World
Surveyor with named-party reads (crew sees adventure hooks, network sees
target list, Vecna sees ley-line orientation). That mixed setting (the
artifact has three depths of reading) with campaign (these are *this
campaign's* three readers). **Fix:** Setting page describes the depths
generically (surface / operational / structural). Campaign page (The
Remaking) maps the parties to depths.

The rule: **if a one-shot DM in this universe would have to delete
content to reuse the page, it's mis-located.**

### Don't put "Running the X" sections on setting pages

**Old mistake:** Cosmology, Realms, Factions, and Artifacts each had a
"Running the X" section with DM-craft guidance — which contradicted the
pages' own "this is setting-level, reusable" principle. **Fix:**
"Running" content moved to the Campaign index (the DM how-to) or to this
guide. Setting pages get a brief lede and content only.

### Don't put plot material on the Campaign index page

**Old mistake:** The Campaign index page held a Seed Inventory section
and all the act/PC arc content. That made it a content store as well as
a guidance document. **Fix:** Plot threads → Plot Hooks; story shape →
The Spine; Campaign index is now the DM how-to only.

The rule: **the Campaign index is for how this works, not what this is.**

### Don't use questions as headings

"What is the Continuum?" / "How does Forbiddance work?" / "Why does Vecna
wait?" — all wrong. Declarative headings only.

### Don't paste DM scripts into player pages

**Old mistake:** Player nav was at one point modified to look like DM
nav, which leaked the DM sidebar onto crew-manifest pages. **Fix:** The
auth guard in `dm-nav.js` refuses to render outside `/prime/`; the
player `nav.js` is kept separate.

The rule: **player site and DM site never share a script file.**

### Don't put campaign-state tags on setting pages

**Old mistake:** Realms had tags like "Home base," "Confirmed," "Active,"
"In the Brig," "This campaign" on setting entries. These polluted the
TOC and tied setting content to *this* campaign's state. **Fix:** Tags
audit removed them; the `dm-toc.js` fix prevents any tag (even legitimate
ones) from showing in the TOC.

### Don't rename anchors silently

When you change an anchor ID — even just to make it more semantic — every
page that linked to the old anchor is now broken. Run the integrity
check before claiming the rename is done.

### Don't accumulate "is-open" without resolution paths

A `<span class="dm-tag is-open">` is a promise to decide later. If the
page accumulates many open tags without notes on *when* each should be
resolved, the wiki becomes a graveyard of deferred decisions.
Resolution-pending stubs should say "to resolve when [condition]" — a
trigger, not a vague hope.

### Don't write walls of text

Walls of text are the failure mode for digestibility. If a section's
detail runs more than a couple of paragraphs, wrap it in a
`<details class="dm-collapse">` block so the reader can scan first and
expand on demand.

### Don't deep-link inside campaign pages from setting pages

Setting pages do not assume any particular campaign is running. A
Cosmology entry should not link to "see The Remaking → The Network for
who's currently doing this" — because in a different campaign, *that
isn't true.* The campaign references the setting, never the reverse.

(One narrow exception: an Artifact's *current custody* field can
reference Remaking, because custody is genuinely current-state
metadata. But the rest of the artifact entry is setting.)

---

## Reference: the current site at a glance

| Path | Role | Domain |
|------|------|--------|
| `/prime/index.html` | Auth gate | (infrastructure) |
| `/prime/hub.html` | Landing after auth | (infrastructure) |
| `/prime/cosmology/` | Universe principles | Setting |
| `/prime/realms/` | Geography | Setting |
| `/prime/factions/` | People & groups | Setting |
| `/prime/artifacts/` | Named cosmologically-weighty objects | Setting |
| `/prime/campaign/` | How this wiki works (DM how-to) | Campaign |
| `/prime/campaign/voyages/` | Per-session briefing/voyage/delta audit | Campaign |
| `/prime/campaign/spine.html` | The campaign's authored shape | Campaign |
| `/prime/campaign/remaking/` | Antagonist throughline | Campaign |
| `/prime/campaign/plot-hooks.html` | Grounded threads | Campaign |
| `/prime/campaign/what-if.html` | Untethered brainstorm | Campaign |

External to wiki, but related:

- `FIA-BREADCRUMBS.md` (at site root): drafts for the player-facing FIA.
  Not part of the deploy; reference material for hand-pasting into the
  player site.
- The player site itself (under `/caelestis/` outside `/prime/`) is
  separate. The DM wiki references player-site `voyage-detailed-NNN.html`
  files via relative paths from the Voyages index.
- Live operational state (Campaign Tracker, Character Arc Tracker, etc.)
  lives in Google Sheets/Docs. The wiki holds durable structure; the
  trackers hold what's true today. Links live in the Spine's operational
  links bar and on the hub.
