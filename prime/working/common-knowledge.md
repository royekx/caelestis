# Common knowledge

What a cadet at Caelestis would know about the people in the player record
without having played a scene with them: the staff-profile facts picked up
between voyages, in the mess, on the notice board and in orientation. Korey's
brief (2026-11-02): "almost like an HR page where you can see your coworker's
profile: standard information you'd probably know about them."

This is a draft. Nothing here is in the record or on a player page yet. Each
entity is approved, cut or corrected by Korey before anything moves.

## Rules for a fact

- **Public at the Academy.** A cadet hears it in the Weeping Goddess, reads it
  on the notice board or in the Nexus library, or sees it walking the station.
  A fact that sits in *What's hidden*, a DM notes tab or a planning page is
  out, whatever its source page.
- **From the About tab.** Every fact traces to the in-world About section of a
  finished DM page (`prime/dossiers/`, `prime/factions/fleet.html`,
  `prime/locations/caelestis.html`), or to published Spelljammer and core
  lore under PAGE-GUIDE § 8 (the Nexus rule). Sources are cited as
  `dossier/<page>`, `fleet` (Fleet page, Caelestis Sector roster) and
  `caelestis` (Caelestis location page).
- **Already in the record is skipped.** A fact the crew learned in play is a
  bullet already; this list adds only what they would know besides.
- **Confidence.**
  - *High*: visible to anyone on station, or taught to every cadet.
  - *Medium*: staff talk a cadet would plausibly overhear; true and harmless,
    but a judgement call on how far it has spread.
  - *Hold*: true in the About tab, but it points at a live thread or a secret
    next to it. Listed so Korey can rule; the default is to leave it out.

## How it fits the record

The NPC record's authored fields are `Gender`, `Affiliation(s)`, `Party
Relationship`, `Role (as known)`, `Current State`, `Overview (Player)`,
`Category` and `Status` (`tools/data.js`, SETS). None of them holds a list
of standing facts. Three ways to carry this:

| Option | What changes | For | Against |
|---|---|---|---|
| **A. New `Common Knowledge` field** (recommended) | Schema: one text field on `npcs`, one fact per line. Page: a "Common knowledge" list in the Record tab under the overview, `data-field="commonKnowledge"`, held to the record by `check` like the overview. PAGE-GUIDE § 8 and SESSION-RUN step 3 name it. | Keeps play (bullets, overview) apart from background. Reads like the profile Korey described. One place to correct. | A schema change: its own commit, named in the pull request. |
| **B. New `Species` field as well** | Schema: an optional `Species` field on `npcs`, shown as an infobox row after Role. | The most-asked profile fact gets a row, as crew pages already have. | A second field. Several species are not set yet (Joffrey, Veena, Derek, Kip and Pik, Pffred). |
| **C. No schema change** | Fold the approved facts into `Overview (Player)`, and fill `Gender` where the crew already knows it. | Nothing new to build. | The overview stops being "what the crew understands it to be" from play, and every register row repeats the longer paragraph. |

Recommendation: **A with B**, in one schema commit. Whichever is chosen,
`Gender` can be filled now from what the crew has heard (below, under each
entity); it is an existing field and needs no schema change.

A fact taken up in a later voyage (the crew learns it on screen) moves to a
bullet under that voyage and leaves this list.

## Entities

Sorted by name, a rank title skipped (PAGE-GUIDE § 3, Registers).

### Barret
Gender: Male (already set).

No common knowledge beyond the record: a cadet on Veena's squad, met in V002.

### Beshaba
Gender: Female (already set).

| Fact | Source | Confidence |
|---|---|---|
| A goddess: the Maid of Misfortune, also called Lady Doom, goddess of bad luck, misfortune and random mischance. | dossier/beshaba; published Forgotten Realms lore | High |
| Twin sister and rival of Tymora, goddess of good fortune. | dossier/beshaba; published lore | High |

### Boatswain Tarto
Gender: Female (record has none; she is "she" in every account).

| Fact | Source | Confidence |
|---|---|---|
| A hadozee: scarred, grey at the temples, rarely without a cigar. | dossier/boatswain-tarto, fleet | High |
| One wing flap was torn away long ago; she has not glided since. | dossier/boatswain-tarto, fleet | High |
| Runs the Simulation Deck and manages cadet operations; assignments, postings and the training schedule go through her office. | fleet; spelljammer-nexus/spelljammer-academy.html | High |
| Wears worn leathers, a cutlass, and a belaying pin of dark wood banded in brass with a ship's name carved into it. | dossier/boatswain-tarto | High |
| Draws on bulkheads with a charcoal-stained ring: charts, boarding plans, gone by the next watch. | dossier/boatswain-tarto | High |
| Known for the line "Listen to what I tell you; it might just save your life." | dossier/boatswain-tarto, fleet | High |
| Wears a leather band on her wrist that matches Saerthe's. | dossier/boatswain-tarto | High |
| The bands date from the loss of Clint Dashforest, who went overboard from *Bellwether Crow*. | dossier/boatswain-tarto, fleet | Medium |
| She once had the helm of a ship and gave it up. | dossier/boatswain-tarto (Personality) | Medium |

### Captain Sardax
Gender: Female (already set).

| Fact | Source | Confidence |
|---|---|---|
| Commanded the *Moonraider*, a Caelestis ship lost with her to astral reavers. | dossier/captain-sardax | High |
| Every new intake starts at Caelestis inside her last battle, on the Simulation Deck. | dossier/captain-sardax | High |
| The Academy teaches her last fight as a lesson in courage first and judgement second. | dossier/captain-sardax (Personality) | Medium |

### Derek
Gender: Male (record has none; "a cadet named Derek", "he" in the DM page).

| Fact | Source | Confidence |
|---|---|---|
| A cadet on Veena's squad, the crew that races opposite the party. | dossier/veena-derek | High |
| Unconscious in the infirmary since the simulation blast, and not yet woken. | dossier/veena-derek | High |

### Jeffrey
Gender: Male (record has none).

| Fact | Source | Confidence |
|---|---|---|
| A merchant whose ship trades into the Sky Dock. | dossier/jeffrey, caelestis | Hold: true and public on the dock, but it hands the crew the thread Mirt asked them to pull. |
| A friend of Joffrey; the two names get cadets sent after the wrong man. | dossier/jeffrey, dossier/joffrey | Hold, for the same reason |

### Joffrey
Gender: Male (record has none).

| Fact | Source | Confidence |
|---|---|---|
| An officer of the Caelestis Corps, the Fleet's branch for the sector, and not Academy staff. | dossier/joffrey, fleet | High |
| Was top of his class. | dossier/joffrey | High |
| Decorated for taking charge of *Bellwether Crow* when it broke up a pirate handover of captives, about a year ago: he led the recovery of the captives and got the crew out, on the survivors' unanimous account. | dossier/joffrey, fleet | High |
| Posted to Caelestis after *Crow*, and risen on merit since; cadets know him and instructors trust him. | dossier/joffrey, fleet | High |
| *Crow* had gone out to look in on Cairn Station. | dossier/joffrey (Background), fleet | Hold: Cairn is a live thread. |

The record's `Affiliation(s)` stays "Caelestis Academy", the place he is posted (Korey, 2026-11-02); the first row carries the Corps.

### Kip and Pik
Gender: not set in canon.

| Fact | Source | Confidence |
|---|---|---|
| Two rock gnomes who run the Sky Dock. | caelestis, fleet | High |
| Run ship-anatomy drills, dock procedures and basic spelljamming exercises with cadets. | fleet, caelestis | High |
| Finish each other's sentences. | fleet | High |

### Krik'Lit
Gender: not set in canon.

| Fact | Source | Confidence |
|---|---|---|
| A thri-kreen deckhand who signed on under Ryeback to help fit the tyrant ship's helm. | dossier/krik-lit | High |
| Speaks little and keeps to his trade. | dossier/krik-lit (Personality) | High |

### Miken
Gender: Male (already set).

| Fact | Source | Confidence |
|---|---|---|
| Full name Miken Haverstance. | dossier/miken | High |
| Newer to the cohort than the crew. | dossier/miken | High |
| Engaged to someone off-station. | dossier/miken | Hold: true in About, but it sits next to the debt that drives his secret. |

### Mirt
Gender: Male (record has none; "he" in every account).

| Fact | Source | Confidence |
|---|---|---|
| Headmaster of the Academy, long in the post. He runs the Academy only; the Caelestis Corps and the Bridge operate outside him. | dossier/mirt, caelestis, fleet | High |
| A well-known adventurer who made his name in the Astral Sea, and made enemies doing it. | dossier/mirt, fleet | High |
| Caelestis protects him, and keeps him quiet. | dossier/mirt, fleet | Medium |
| His quarters are on the Bridge level. | caelestis | High |
| A big, bearded old adventurer gone comfortably to seed, more often in a dressing gown than a uniform. | dossier/mirt (Appearance) | Hold: the DM page marks his appearance as a sketch awaiting confirmation. |
| His feud with the mercane merchant Vocath is old and known in the trade. | fleet, dossier/vocath | Hold: he asked the crew to keep Vocath quiet, and the trade is not the cadet mess. |

### Mr. Blip
Gender: not set in canon (record has none).

| Fact | Source | Confidence |
|---|---|---|
| Runs Stores, the station's supply office: issued kit, ration rotation and the rest of the logistics. | caelestis, fleet | High |
| Practical and knowledgeable about logistics, and uncurious about why anyone wants what they requisition. | fleet | High |
| Does not volunteer what he knows. | fleet | Medium |

### Ostekk, Ostekk-2, Ostekk-6, Ostekk-10
No common knowledge. The crew met them on the tyrant ship, and everything a
cadet could know about them came from that. One candidate for Ostekk alone:

| Fact | Source | Confidence |
|---|---|---|
| H'Catha is divided among ruling beholders; Ostekk is one of them. | dossier/ostekk | Hold: the crew has not learned it, and it is H'Catha briefing material, not mess talk. |

### Pffred
Gender: not set in canon.

| Fact | Source | Confidence |
|---|---|---|
| A plasmoid deckhand contracted for the tyrant ship's commissioning only. | campaign/voyages (V006 swap table) | Medium: the only source is a DM planning table, not an About tab. |
| Saerthe ribs him about seating a helm the wrong way once. | voyage-006.html, interlude | High: the crew heard it. A bullet candidate more than common knowledge. |

### Rindle Gearloft
Gender: Male (already set).

| Fact | Source | Confidence |
|---|---|---|
| A rock gnome. | dossier/rindle-gearloft, fleet | High |
| Dark hair tied back, goggles pushed up, a vest crowded with tools. | dossier/rindle-gearloft, fleet | High |
| Works the docks by the Sea Dock and knows every berth and strut there. | dossier/rindle-gearloft | High |
| Guarded about the lower dock storage. | dossier/rindle-gearloft (Appearance) | Hold: points at the Latchling. |

### The Runekeeper
No common knowledge. The order and its homeworld are hidden, and Tumak heard
the voice alone.

### Saerthe Abizjn
Gender: Male (record has none; "he" in every account and on the DM page; confirmed by Korey 2026-11-02).

| Fact | Source | Confidence |
|---|---|---|
| A wizard, and the station's senior caster as well as its helm instructor. | dossier/saerthe-abizjn, fleet | High |
| Keeps the station's Forbiddance; teleportation fails anywhere on Caelestis. | dossier/saerthe-abizjn, caelestis | Medium: that teleportation fails is common; who keeps the ward is staff talk. |
| From Nimbral; his quicksilver eyes are a trait of his birthplace, nothing his casting does. | dossier/saerthe-abizjn, fleet | High |
| Builds barriers out of nothing, and walks on squares of air that form under his feet. | dossier/saerthe-abizjn | High (the crew saw it in the V006 interlude) |
| Dresses like a noble, in a fitted coat with sapphires at the cuffs. | dossier/saerthe-abizjn | High (seen in the interlude) |
| Teaches with a deck of illusion cards when the Nexus is unavailable. | dossier/saerthe-abizjn (Abilities, Notable items) | Medium |
| Stern by default, given to wide grins in unguarded moments. | dossier/saerthe-abizjn, fleet | High |
| Wears a leather band on his wrist that matches Tarto's, since Clint Dashforest went overboard. | dossier/saerthe-abizjn | Medium |
| His miniature spelljamming ship is missing from the Nexus. | dossier/saerthe-abizjn, fleet | High (the crew saw him lose his composure over it; already a bullet) |

### Sor'Kur
Gender: Female (record has none; ruled by Korey 2026-11-02).

| Fact | Source | Confidence |
|---|---|---|
| Runs Academy administration: paperwork, vouchers and access stars, and the raising of a star when a cadet's work requires it. | dossier/sor-kur; spelljammer-nexus/spelljammer-academy.html | High |
| Keeps the station's access record: who was issued access to what, and when. | dossier/sor-kur (Abilities) | Hold: it points at the live Joffrey thread. |

### Veena
Gender: Female (already set).

| Fact | Source | Confidence |
|---|---|---|
| Leads the squad that races opposite the party; Miken and Derek are on it. | dossier/veena-derek | High |
| Unconscious in the infirmary since the simulation blast, and not yet woken. | dossier/veena-derek | High |

### Vaelorix
No common knowledge. A landless beholder of H'Catha, met dead.

### Vocath
| Fact | Source | Confidence |
|---|---|---|
| A mercane merchant of long standing in the trade around Realmspace, head of a trading house. | dossier/vocath | Hold: known in the trade, and the crew has only his name. |
| His personal seal is a coin: two slender, long-fingered hands, the upper letting three coins fall into the open palm of the lower. His house mark, a balance scale with coins on one pan and a crate on the other, is public, on the Fleet's stores contract and his honest trade. | dossier/vocath | Hold the seal: the record calls it a word on the rod; this is a reveal. |

### Winston Ryeback
Gender: Male (already set).

| Fact | Source | Confidence |
|---|---|---|
| Has run the Weeping Goddess kitchen for years. | dossier/winston-ryeback | High |
| Hears everything that passes through the galley; since Voyage 3 he sails with the crew aboard the tyrant ship. | fleet | High |
| Wears a breastplate over his apron when there is trouble, with a hand cannon and a longsword on his hip. | dossier/winston-ryeback | High |
| His custom musket was stolen from his quarters in the thefts, and he talks about it often; the hand cannon is his pistol. | dossier/winston-ryeback, fleet | High |
| Born under the Feast of the Moon, Sagittarius. | dossier/winston-ryeback | Hold: Casey asked and was not told; a Stellar Reading beat. |

### Zerathis
| Fact | Source | Confidence |
|---|---|---|
| A spellcaster of historical note; the Nexus library has his name. | dossier/zerathis | Medium |

## Promotes to

- `tools/data.js`: `Common Knowledge` (and `Species`, if chosen) added to
  the `npcs` fields, in its own commit named in the pull request, with the
  `check` rule that holds the page list to the record.
- `data/npcs.json`: each approved entity's facts, and `Gender` where filled.
- `dossiers/*.html`: a "Common knowledge" list in the Record tab, and the
  `Species` row; `dossiers/index.html` unchanged unless Species joins the row.
- `prime/docs/PAGE-GUIDE.md` § 8 (Record pages, dossier rows) and
  `prime/docs/SESSION-RUN.md` step 3 (a fact the crew learns on screen leaves the
  list and becomes a bullet).

## Open

- Option A, B or C, above.
- Each entity: approve, cut or correct its rows. Every *Hold* row stays out
  unless Korey keeps it.
- Whether the same field reaches `factions`, `locations` and `items` later
  (the Academy, the Weeping Goddess, the Sky Dock all have staff-profile
  facts of their own).
