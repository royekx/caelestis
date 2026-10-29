# Session run

One voyage in. The record, the player site and the DM side out, as one pull
request.

A run needs nothing from an earlier chat: the state is in the repo, and a run
that stops halfway is picked up from its branch. The record's rules (the
encounter rule, the two layers, authored and derived fields) are in
`CLAUDE.md` § The record.

## At a glance

| # | Step | Produces | DM approves |
|---|---|---|---|
| 0 | Open | a branch, and a passing check | |
| 1 | Read | nothing written | |
| 2 | Chronicle | the Full Account and its title | **yes** |
| 3 | Extract | the change table, player side then DM side | **yes** |
| 4 | Record | `data/*.json`, `prime/data/*.json` | |
| 5 | Render | the pages that show the record | |
| 6 | Check | zero errors | |
| 7 | Publish | the Crew Logs entry and the pull request | merges it |

Two approvals. Nothing is written to the repo before the first, and nothing is
written to the record before the second.

## What a run needs

| | Where |
|---|---|
| The session source | Drive, named `Caelestis _ The Spelljamming Academy _ Voyage NNN.txt`: a transcript, or a dictation saved under the same name |
| The repo | `royekx/caelestis`, with push access |
| The Crew Logs document | Google Doc titled "Voyages" |
| The voyage number | from the file name |

## Rules that hold in every run

- DM corrections outrank the source.
- A doubt is asked, never guessed: a name, an attribution, a new status.
- Nothing is invented to fill a gap in the source.
- Match on id, never on name. A name close to an existing record and not
  identical is a question for the DM, never a second record.
- Earlier voyages are history. A later correction is recorded in the voyage
  where the crew learned it, and earlier bullets and accounts stay as the crew
  understood things then, unless the DM rules otherwise. Correct the record and
  current pages only.

## 0 · Open

```bash
git fetch origin main && git checkout -b claude/voyage-NNN origin/main
node scripts/data.js check
```

The check must pass before anything changes. If it fails, fix what it reports
first, in a separate commit.

## 1 · Read

In this order:

1. Step 2 of this document: how the account is written.
2. The voyage's entry in `prime/campaign/voyages/index.html`: briefing, what
   was planned, and any **corrections** issued out of session.
3. The record: every `name`, plus current state for whoever is likely to
   appear. `data/vocabulary.js` for spellings.
4. The Full Account of the last two voyages, from `voyages/voyage-NNN.html`,
   for voice and for where things were left.
5. The source, in full.

## 2 · Chronicle

Write the Full Account: the player-facing recap that appears on the voyage page
and is appended to Crew Logs. It reads like the next chapter of one continuous
fantasy-adventure novel set in wildspace and the Astral Sea, matching the
style, detail and perspective of the voyages before it, and stays completely
faithful to what happened at the table.

### The source

Infer the source type from the text. The recap never says which it was.

| | Audio transcript | Dictated recollection |
|---|---|---|
| Sequence of events | reliable | may be out of order, compressed, or skip beats |
| Proper nouns | **unreliable**, mangled phonetically | generally correct |
| Who did what | **unreliable**, speakers misattributed | generally correct |
| Also contains | table talk, rules talk, crosstalk | asides to the chronicler, first person, shifting tense |

- From a transcript: correct every proper noun against the record. Leave
  attribution unassigned where the source does not settle it.
- From a dictation: treat it as authoritative for events, names and
  attribution. Rebuild loose chronology. Fold asides and uncertainty into your
  understanding; never narrate them. Where the DM flags doubt about who did
  something, treat it as an ambiguous transcript.

### Fidelity and length

- Length is set by the source, not by earlier voyages. A thin source makes a
  shorter chapter. Do not pad.
- The prose rules govern how to render what the source gives. They never
  license invention. Where the source does not say how a place looked, what a
  creature resembled or what crossed a face, write the beat without that detail.
- Physical description established in earlier voyages or the record may carry
  forward. Anything appearing for the first time gets only what the source gave.

### Authority

When sources disagree, the higher one wins.

1. **DM corrections** on the voyage's entry in `prime/campaign/voyages/`. They
   are canon as though they happened at the table: write them as events, in
   their place in the sequence.
2. **The record**, `data/*.json`: spellings, names, pronouns, roles, current
   state.
3. **Earlier voyages**: canon for any name, fact or relationship the record
   does not address.
4. **The source**: what happened, unreliable on the points in the table above.

The record governs continuity only. Events come from the source, the
corrections and earlier voyages. Apply record corrections silently.

### Names

Build the name list fresh each run from the `name` of every record in `data/`
plus `data/vocabulary.js`. Garbles seen in past transcripts, as a guide:
"Calestis" (Caelestis), "Hakatha" (H'Catha), "Sareth Abazine" (Saerthe
Abizjn), "Aztec-6" and "Austech" (Ostekk-6), "Volkath" (Vocath), "Vena"
(Veena), "Crick Lit" (Krik'Lit).

### Perspective

Include only what was revealed, experienced, learned, witnessed or reasonably
inferred during this voyage or an earlier one. Leave out:

- DM notes, future plot, anything from a later voyage
- motives, identities, titles, designations and affiliations not yet revealed
- anything from `prime/`; corrections are the one exception, as the crew
  perceived them
- rules, dice, classes, levels and feat names; render mechanics as lived
  experience ("wrapping himself in cold, star-bright magic", not "casting a
  spell")
- connections the players have not made themselves, even where both sides
  have appeared in play
- names for anything only glimpsed or sensed; describe what was perceived

Two checks on every recap:

1. **Perceived is not named.** A glimpsed shape or an unnamed voice is rendered
   as the perception, never the label. The presence that spoke to Casey in the
   wardrobe is "a familiar voice".
2. **The narrator knows what the crew knows.** It may set mood and tension. It
   may not confirm an enemy's awareness, an NPC's secret nature or any
   off-screen fact. Cut a knowing aside, or rewrite it as something a character
   observed or felt.

An unresolved mystery stays unresolved. A suspicion is written as a suspicion.
An unexposed lie is written as the characters experienced it.

### Style

Narrative, clear modern prose, in the manner of classic fantasy and adventure
writing: a story retold after the fact. Multiple paragraphs and natural
transitions; no bullet points, scene rules or timestamps.

- Third person, ensemble: follow the crew through places and beats, give each
  cadet attention as the scene calls for it, then draw back to the crew as a
  whole.
- Paragraphs tend to open on a place or a transition ("The sky dock opened the
  scale of Caelestis all at once"), then move through what each character did.
- Short declarative sentences stand alone on purpose for emphasis ("It had
  never been meant to be won.").
- The em-dash belongs to this voice, for an appositive, a reflective turn or a
  closing qualification. Never stack several in one sentence.
- A sentence much longer than its neighbours usually reads better as two.
- Close on a reflective paragraph that names what is still gathering without
  resolving it.

Tone: adventurous, reflective, character-driven; hopeful, melancholic or epic
when earned. Wonder, the strangeness of wildspace, a crew forming, small
loyalties. Humour only where it happened at the table. No exaggerated drama,
modern slang or wiki-entry phrasing.

### Prose discipline

**Render the specific thing; do not characterize the type of thing.** Put the
image, action or detail in front of the reader: "a cluttered monument to status
and excess", "a fishbowl containing two octopi, Flotsam and Jetsam".

Remove five tics:

1. **"The kind of / the way of / the sort of."** Write the particular: what the
   place looked, sounded and smelled like.
2. **Definition by negation.** "Began not with fire but with paperwork." One
   deliberate contrast is allowed where the negated thing was truly expected.
   Lead with what it is.
3. **Clipped negation as false depth.** "He did not look. He did not need to."
   One such beat per recap at most. Show the action or the felt reason.
4. **The aphorism reflex.** Do not cap a moment with a general law about life.
5. **Hollow intensifier framing.** "Something that made every word seem
   chosen." Use a concrete observation.

The test for every sentence: could a reader picture or feel exactly what
happened? These rules apply however the source phrased things: keep the fact,
rewrite the wording.

### Characters and combat

- Use names consistently. Draw out moments that show personality, values,
  fears and relationships, and decisions that changed events.
- Carry important dialogue in prose. Quote a handful of lines per voyage, at
  the moments that turned it ("What is here has not left," "Nice job,
  cadets"), spread through the account.
- Register what each cadet present was doing, without forcing equal space.
- Tie each vision, dream or private scene to the cadet who had it. The record
  and earlier voyages show whose imagery is whose.
- Where the source does not settle who did something, write "one of the
  cadets", or raise it in the DM notes.
- Combat is a novel scene: the flow of the fight, its turning points,
  significant actions, injuries, sacrifices, clever tactics, and what it meant.
  Never round by round. The opening simulation in Voyage 001 is the model.

### Format

- Title: `Voyage NNN – Title`, en dash, three-digit number. Short and
  evocative, from the voyage's central event or turning point ("The Shape of a
  Crew"), never repeating an earlier title.
- Detailed enough that a reader who missed the session understands everything
  important.

### Before it goes to the DM

1. **Names**: every proper noun matches the record.
2. **Continuity**: every pronoun, role and status matches the record.
3. **Corrections**: every DM correction for this voyage is in the account.
4. **Attribution**: every vision, action and line belongs to the right cadet,
   or is left unattributed on purpose.
5. **Spoilers**: `prime/` contributes only corrections, glimpsed things stay
   unnamed, and every aside knows only what the crew knows.
6. **Invention**: every physical detail is in the source or already
   established.
7. **Voice**: the cadence above, the standalone emphasis sentence, the
   reflective close.
8. **Prose discipline**: each of the five tics searched for and rewritten.

### Hand-off

Give the DM, in chat:

- the Full Account
- the proposed title
- the **DM notes** list: uncertain attributions, names close to a record and
  not identical, and any place a correction and the source could not be
  reconciled. The list is never published.

The account is written into the repo at step 5, on the voyage page.

**Stop for approval.**

## 3 · Extract

Work from the approved account, never from the source. Produce one table and
give it to the DM.

| Record | Change | Detail |
|---|---|---|
| Ostekk-6 `NPC-Hn4kW9vm` | bullets V005, Current State | … |
| *new* The Hollow Deck | location, in Tyrant Ship | … |

### Player side

- **Consider all seven files every run**: `sessions`, `player-characters`,
  `npcs`, `factions`, `locations`, `items`, `quests`. The usual misses are
  places visited, items changing hands, and quests touched only in passing.
- **A new record** gets a new id: the file's prefix, a hyphen, eight random
  letters and digits (`NPC-7wK4mB9x`). Prefixes: `SES` sessions, `PC`
  player-characters, `NPC` npcs, `FAO` factions, `LOC` locations, `ITM` items,
  `QST` quests. An id is never reused or edited.
- **Every record has a page.** A new record is finished only when its page and
  its register row exist.
- **The voyage** gets a record in `sessions.json` with its six summary fields.
  Its `date` is the voyage's rough Fleet date, cycle.kindling.ember, or a
  span joined by an en dash (`1491.7.7–1491.7.12`), counted on from the
  previous voyage's end by the embers the account gives. Its end is the
  current date: the voyage page's header, `data/bearing.js` `date`, the
  bearing page's subtitle and the Fleet Time page all show it.
- **Ships the crew encounters** get a record in `locations.json`: Type
  `Vessel`, parented to where it was last seen, with whoever the crew met
  aboard in Key NPCs / Factions. A ship met only in simulation is parented to
  the Simulation Deck with Status `Simulated`. Every vessel also gets a row in
  `vessels/index.html`; vessel pages chain to each other and to that register.
- **Bullets** go under `voyages[n].bullets`: one fact each, past tense, in the
  account's own wording, only what the crew knows.
- **`seen` or `mentioned`**: add the voyage number to `seen` if the entity was
  present, to `mentioned` if it was only named.
- **"Now" fields are overwritten**, never kept as a history: Current State,
  What They Last Learned, Status, Held By.
- **Overview** changes only when what the crew understands the thing to *be*
  has changed.
- **Objectives** hold what the party knows it must do next: decided, told, or
  the only reasonable inference. What they fought through is a bullet. Tick
  what is done; add what was newly taken on.
- **`linked`** is entered once, on either record. `derive` shows it on both.

Status values are in-world and fixed per file. A new value is a question for
the DM.

| File | Status |
|---|---|
| `player-characters`, `factions` | Active |
| `npcs` | Active · Deceased |
| `locations` | Accessible · Simulated |
| `items` | Held · Lost |
| `quests` | Open · Complete |

### DM side

Everything the players must not read goes in `prime/data/`, keyed by the same
record id.

| File | A run changes |
|---|---|
| `voyages.json` | this voyage: `title`, `playerRecord: true`, `crewLog: true`; adds the next voyage as `next` |
| `overlay.json` → `entities` | `urgency` and `next` for every quest touched; DM beats for this voyage under `voyages[n].beats` |
| `overlay.json` → `lanes` | beats for anything that moved off-screen |

A **DM beat** is what a voyage meant that the crew could not see: a planned
beat that landed, a clue misread, something that moved behind them. It is the
DM-side twin of a bullet.

**Stop for approval.**

## 4 · Record

Edit the JSON by hand, authored fields only, then:

```bash
node scripts/data.js derive
```

`derive` and `check` reject any key or field the schema does not list.

## 5 · Render

### Player side

| Surface | What changes |
|---|---|
| `voyages/voyage-NNN.html` | new, from `voyage-template.html`: At a Glance, Brief Account, Full Account (the approved account), Recording |
| `voyages/voyage-(NNN-1).html` | its "next voyage" link |
| `voyages/index.html` | a row and its Overview |
| `bearings/voyage-NNN.html` | new, from the previous bearing page |
| `bearings/index.html` | a copy of the new bearing page |
| `data/bearing.js` | voyage, title, date, position, outstanding, consequence, quests, met, links |
| `data/vocabulary.js` | every new proper noun |
| each changed record's page | the new voyage becomes the latest block and the old one moves into Previous Voyages; stat rows; overview; objectives; Connections |
| each new record's page | new, from a sibling page of the same kind, with `data-entity` set to its id |
| each register | `crew-manifest/` `dossiers/` `factions/` `navigation-records/` `vessels/` `inventory/` `quests/` index pages: rows, overview text, progress, counts |

The Brief Account and At a Glance are taken from the approved Full Account and
add nothing it does not say.

### DM side

| Surface | What changes |
|---|---|
| `prime/campaign/voyages/index.html` | this voyage's Actual and Delta; its flags cleared; the link to the player page; the Next session block for the voyage after |
| `prime/campaign/index.html` | where the crew stands, if an arc beat closed |
| `prime/campaign/plot-hooks.html` | status of any hook that moved |
| `prime/dossiers/*.html` | Who they are, in-world, for anyone who acted |
| `prime/crew/` | only if a PC's mechanics changed |

When a page moves under the approved DM structure (`CLAUDE.md` § Folder map),
this table follows it. DM pages follow `docs/PAGE-GUIDE.md`. The Tracker and the
Voyages board read the record and need no edit.

## 6 · Check

```bash
node scripts/data.js check
node scripts/terms.js
```

Zero errors before the pull request opens. Warnings are fixed or named in the
pull request. Then open the changed pages in a browser once.

| The check proves | The approvals cover |
|---|---|
| `data/` holds only keys the record has | whether a bullet is true to the session |
| ids, slugs and references are sound | whether a fact belongs on the player side at all |
| derived fields are current | a voyage page's glance, Brief and Full Account |
| each record's page shows its name, subtitle, overview, stat rows, pursuit, carried items, bullets under the right voyage, objectives, rewards, giver, parent and Connections | the wording of the bearing pages |
| each register row shows its record's name, overview, sub-line, state and progress | the bar's position, outstanding and consequence lines |
| each voyage page carries its number and title | the prose of any page under `prime/` |
| the command bar's voyage, title, quest names and progress | the Crew Logs document |
| `bearings/index.html` is the latest bearing page | |
| every local link and anchor on the site resolves | |
| the DM layer agrees with the record | |

## 7 · Publish

1. **Crew Logs.** Append the Full Account to the "Voyages" document under the
   heading `Voyage NNN – Title`.
2. **Pull request.** One per voyage, titled `Voyage NNN: Title`. The body is the
   change table from step 3 and anything the check warned about.
3. The DM reviews and merges. The deploy publishes on merge.
