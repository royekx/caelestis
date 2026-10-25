# Automating D&D campaign documentation with n8n
Source: https://claude.ai/chat/f4c74307-3515-4d11-8f97-40e110f1ec1c · updated 2026-10-05

Coverage note: 676 turns. Read in full: turns 0–85 and 92–120. Turns 86–91, 103–104 and 121–676 were not paged (the read budget ran out). For those turns I ran about 15 targeted searches on lore terms (spellings, quests, Ostekk-6, regions, items, repo/PR). Most of the unread span is n8n, Sheets, CSS and site-build plumbing, but a few late lore decisions may be missing. Re-sweep turns 121–676 if completeness matters.

## Settled

### Naming and spelling
- PCs go by full name, with page slugs to match: Casey Geim (`casey-geim`), Tumak Swan (`tumak-swan`), Bartholomew Grayson, Sol Fortuna. — **in repo** (`crew-manifest/casey-geim.html`, `tumak-swan.html`)
- Sor'Kur is the correct spelling. The tracker's "Sorcur" is wrong. — **in repo** (`dossiers/sor-kur.html`)
- Krik'Lit replaces the tracker's "Crick Lit". — **in repo** (`dossiers/krik-lit.html`)
- The meteor's world is H'catha (the chat writes it this way). The tracker's "Hakatha" is wrong. — **in repo**, spelled **H'Catha** (`data/quests.json`: "Fly to H’Catha"). The capital C is the repo's form.
- Saerthe Abizjn is the instructor's canonical name. The recap doc's "Saerth Abyzine" is wrong. — **in repo** (`dossiers/saerthe-abizjn.html`). Note that `prime/notes/RESTRUCTURE-NOTES.md` has a search-repair line reading "Saerthe → Saerth". That line points the other way and may need checking.
- Veena is canonical, and "Vena" is a variant. — **in repo** (`dossiers/veena.html`). `data/vocabulary.js` still lists "Vena", presumably as a search variant.
- Vocath is canonical, and "Volkath" is a transcription variant. — **in repo** (`dossiers/vocath.html`; CHRONICLE.md lists "Volkath" as a garble)
- Kip and Pik share one page until the two characters diverge. — **in repo** (`dossiers/kip-and-pik.html`)
- Miken's full name is Miken Haverstance (Korey edited the tracker by hand). — **in repo**, DM side only (`prime/dossiers/miken.html`). The player record name is "Miken".

### Voyage titles (the recap doc is canonical, not the tracker)
- V001 is "The Shape of a Crew". The tracker's "Orientation" is wrong. — **in repo**
- V002 is "What the Crew Offers". The tracker's "The Shape of Looking Out" is wrong. — **in repo**
- V003 is "The Weight of What's Real". — **in repo**
- In V002, Casey took the guns. The tracker's "Sol took the guns" was a triage invention. — **in repo** (`voyages/voyage-002.html`: "Casey guns")

### Entities
- Vocath is a person (an NPC) and not a faction. — **in repo** (`dossiers/vocath.html`)
- Ostekk-6 was unnamed in V003. The Collection Manifest gave him his name in V004. — **in repo** (Collection Manifest record)
- Derelict Logbook: found in the V002 salvage sim and carried in Boogie's chest. Casey and Gregory bound duplicates, so three copies exist. — **in repo** (`data/items.json`, page)
- Collection Manifest: the tyrant ship's cargo record. It names Ostekk-6 and is linked to the tyrant ship quest. — **in repo**
- Gregory Prime is Gregory's dead creator. — **in repo** (`data/player-characters.json`: "Gregory Prime, now dead and buried")
- The Rune Keeper is a presence rather than a person in a place. — **in repo** (`dossiers/the-rune-keeper.html`)
- "Vecna's network" was retired from the player-facing faction data. — **in repo** (no Vecna in `data/factions.json`)

### Quests and objectives
- An objective is what the party knows it must do next, whether told, decided, or the only reasonable inference. What they fought through to get there is record. A quest may have only one line.
- Caelestis Burglaries objectives: recover the arcane device [x]; look into Joffrey and the man named Jeffrey (combined); trace the marked crate through Mr. Blip. The "check teaching rooms" objective was dropped. — **in repo** (`data/quests.json`)
- Vocath's Grudge Against Mirt is a thread under Burglaries. It is information the party holds rather than an objective. — **in repo**
- The Living Clue in the Crate (the centipede) stays a thread under Burglaries, and Korey wants to reward it. — **in repo**
- The Tyrant Ship and the H'catha Meteor holds the briefing only: commandeer the ship, install the helm on the command deck, fly to H'catha, recover the adamantine meteor. Clearing the horrors and the wisps is record, not objectives. — **in repo** (the repo also keeps "Board the tyrant ship" as a done first line)
- Ostekk-6 is a thread under the tyrant ship quest. — **in repo**
- The Path to Viren: "Past H'catha" only means outside the crew's current realmspace. Objectives: learn what the wardrobe shows [x]; find Zerathis, or charts and word of him; find a route to Viren. — **in repo**
- Tumak's Search for Family has one objective, "Find a way home". Korey will add more later. — **in repo**
- Tumak's Runes and the Tether Home is a thread under Search for Family. Subquests and threads can hang off a quest. — **in repo** (parent links in `data/quests.json`)
- Gregory's Pull, The Unfinished Ship Within Boogie, and The Laughter of Beshaba are top-level threads. — **in repo** (inference from the quest meta. Spot-check Boogie and Beshaba.)
- Quests carry related items. The Collection Manifest links to the tyrant ship quest. — **in repo**

### Places
- Region split: Caelestis, Realmspace and Viren. H'catha is folded into Realmspace. — **in repo** (no "Hakathan Space" remains)
- Rooms get no page of their own unless they become prominent. — **conflicts** (`navigation-records/` now has `mirts-quarters.html`, `simulation-deck.html`, `the-hollow-deck.html`, `the-command-deck.html`, and others). This was likely superseded later. See Superseded.

### Method and voice (lore-adjacent)
- The approved recap is canon for names, spellings, sequence and what is player-facing. The transcript adds detail only and never introduces an entity on its own. — **in repo** (SESSION-RUN.md / CHRONICLE.md)
- Fidelity rule: a thin dictation gives a shorter chapter, and prose discipline must not invent specifics. — **in repo** (inference: CHRONICLE.md carries the recovered chronicler rules)
- The tracker holds current state. The DM side holds future state: act structure, plan and trajectory. Each fact is authored in one place. — **in repo** (CLAUDE.md "A fact is entered in the record and nowhere else")

## Superseded
- Obsidian as canon → Korey no longer uses Obsidian. The Google Sheet plus the site became the plan.
- The Sheet as single source, with the site generated from it via n8n export, `data/raw/` and `transform.js` → the repo JSON record is the source (decided in the Voyage 5 chat, PR #61).
- A Prep Queue tab → retired. "Heat" became a view of open threads (Sessions Cold), and prep became a generated brief.
- A Times Touched counter → dropped by Korey.
- A Ledger model where tracker cells accumulate → snapshot overview plus session-tagged bullets.
- An Aliases column for name variants → Korey rejected it in favour of matching on id.
- A Crew Logs Google Doc as the recap archive → Korey said in this chat that he no longer uses it. The V005 run still appended to it, so it is not fully retired.
- Rooms only get pages when prominent → rooms now have pages (Caelestis rooms, Hollow Deck, Command Deck).
- First-pass tyrant ship objectives (8 visible, including "clear the wisps" and "descend by rope") → the four briefing objectives.
- First-pass Path to Viren ("Reach H'catha", "route past H'catha") → find Zerathis or charts, find a route to Viren.
- "Learn why Vocath holds a grudge" as an objective → it became a thread.

## Open
- Whether `RESTRUCTURE-NOTES.md`'s "Saerthe → Saerth" search-repair line is backwards.
- Whether the Crew Logs Google Doc stays (Korey called it unused, but runs still append to it).
- Whether the prep brief (from open threads plus act structure) was ever built. Not seen in the turns I read.
- The SotDQ tracker cleanup was deferred.
- The Character Arc Tracker and Wildspace Tracker sheets were not migrated.

## Documents produced
- `caelestis_tracker_repair.gs` / `.txt`, plus TSVs of fixed NPC and location rows. Files in chat outputs. Sheet repair only, not meant for the repo.
- `n8n_validate_ops.js`, `triage_system_prompt.md`, `tracker_write_path_build_guide.md`, `tracker_write_path_lowcode.md`, `workflow_b_triage_build.md`. Files in chat outputs. Plumbing. Retired with n8n.
- Revised Triage system prompt and Plan agent prompt (in chat). Retired. The repo's SESSION-RUN.md replaces them.
- Chronicler fidelity paragraph (in chat). Carried into CHRONICLE.md (inference).
- `caelestis_publish_plan.md` (Workflow C plus the GitHub Action). File in chat outputs. Retired.
- `scripts/transform.js` with overlays for renames, slugs, item metadata, quest objectives, NEW_QUESTS (Vocath's Grudge, Ostekk-6 thread) and NEW_ITEMS (Derelict Logbook, Collection Manifest). Reached the repo at the time and was removed in PR #61. Its overlay content lives in `data/*.json` now. **In repo** as data.
- `styles/entity.css` and `styles/bearing.css`. **In repo**.
- Page redesigns: tabbed voyage pages (Brief, Full, Recording), dossier, item, location, quest, PC page, quest board, NPC register with realm tabs, navigation records index. **In repo** (`account-tab` present on V001–V004).
- `deploy.yml` rewrite (transform, scaffold, Pagefind). Reached the repo at the time and was later reworked (the transform step is gone). Status now unverified.

---

# Voyage 5 automation runbook
Source: https://claude.ai/chat/49ea1939-9fef-40fd-af18-017303598a63 · updated 2026-10-10

Coverage note: all 13 turns read. Tool-call bodies (file writes, edits) were skimmed for file paths only.

## Settled

### Method
- Drop n8n. Runs happen in chat against the repo. — **in repo** (SESSION-RUN.md)
- The repo is the source of truth. Data moves into repo JSON, with player and DM layers presented separately. The Sheet is frozen. — **in repo** (CLAUDE.md; `data/`, `prime/data/`)
- A DM Tracker page replaces the Sheet, and the Voyages board reads the DM layer. — **in repo** (`prime/tracker/index.html`)
- Earlier voyages keep "autognome" as history, since it was what the crew believed then. The runbook default is to leave it. — **in repo** (inference: stated as the SESSION-RUN default in PR #61)

### Voyage 005 canon (from Korey's corrections)
- Title is "Retreat Is Always an Option". The draft "Running Can Be an Option" was rejected. — **in repo**
- Ryeback is a hippogriff. — **conflicts**. `voyages/voyage-005.html` says "Ryeback, the hippogriff", but `data/npcs.json` says "Petty Officer Winston Ryeback, a giff". "Hippogriff" may be a voice-to-text garble of "a giff". Korey should confirm.
- Ostekk-6 simply states he is an automaton ("I am a unit… An automaton."). The overheard-autognome framing was cut. — **in repo**
- Boogie cast sacred flame to open the flowers during his fall. — **in repo** (V005: "Boogie called on his faith, and holy fire flared down")
- Vaelorix: Ostekk-6's beholder master. He floated between decks, and his central eye still cancels magic on the Command Deck. — **in repo**
- Vaelorix's status is Deceased. This was Claude's default and Korey did not confirm it. — **in repo** (`data/npcs.json` Status Deceased)
- There were nine Ostekk units, and the clockwork horrors destroyed nearly all of them. Ostekk-8 and Ostekk-4 were found in pieces. — **in repo**
- Ostekk-2 was woken by Gregory's lightning. — **in repo** (`dossiers/ostekk-2.html`)
- The Behir is a machine built in imitation of a behir, sent by the original Ostekk. — **in repo** (`dossiers/the-behir.html`)
- Ostekk, the original, is a brilliant tinkerer and is named only. — **in repo** (`dossiers/ostekk.html`)
- The Hollow Deck (repairs and maintenance, with a repair bay) and the Command Deck (helm platform under the beholder's body) each have a page. — **in repo**
- Gravity flips at a plane in the shaft below the Hollow Deck. — **in repo** (V005 account)
- Ostekk-6 thread objective: repair him at the Hollow Deck repair bay. Claude's default, unconfirmed. — **in repo** (now marked done)
- DM beats: Gregory's pull is paracausal and points at the Lantern; the units keep running in the field; the behir is about 70 damage down and cannot enter; Casey's soft light is the repair bay pod; Miken saw the dead beholder. — **in repo** (inference: filed to `prime/data` per PR #62. Not grepped individually.)
- Ostekk-6 DM dossier said "last of nine". That needed fixing after Ostekk-2. — **in repo**, resolved (`prime/dossiers/ostekk-6.html`: "One of two survivors of nine"). The body text there still reads "The lone survivor of nine OSTEKK units". That is internally inconsistent.

### Record fixes the checker made (PR #61)
- Tyrant ship quest progress was 1/5 at the time. The command bar wrongly showed 2/6. — **in repo** (since advanced past V005)
- Ostekk-6 is he/him. — **in repo**

## Superseded
- Option A/B/C for the tracker (freeze, mirror, or restore as source) → Korey chose to move the data into the repo as JSON, with the chat automation updating it.
- The triage prompt → obsolete. The chronicler voice rules were kept in CHRONICLE.md.
- Tracker spellings (Sorcur, Crick Lit, Hakatha, Autognome) → site spellings (Sor'Kur, Krik'Lit, H'Catha, Automaton).

## Open
- Ryeback: hippogriff or giff (repo disagrees with itself).
- Vaelorix's fate: Deceased, or should it be left open (Unknown)?
- Should the V003 and V004 "autognome" mentions be swept? Default: leave them as history.
- Should the Character Arc Tracker and Wildspace Tracker sheets move into the repo too?
- Ostekk-6 DM dossier body still says "lone survivor".

## Documents produced
- PR #61: repo JSON record, `prime/data/` DM layer, `prime/tracker/` page, `prime/notes/SESSION-RUN.md`, `prime/notes/CHRONICLE.md`, `scripts/data.js` checker, 11 consistency fixes. Merged 2026-10-07. **In repo**.
- PR #60 (Voyages board, from another chat), with lane-link fixes in #61. Merged. **In repo**.
- PR #62 "Voyage 005: Retreat Is Always an Option": V005 page with Full and Brief Account, six new entity pages, record and DM layer updates, bearing and command bar. **In repo** (V005 pages and records present).
- The V005 Full Account was appended to the Crew Logs Google Doc. Lives in Google Docs. The same text is on `voyages/voyage-005.html`.
