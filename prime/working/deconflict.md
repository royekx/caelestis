# Deconfliction: four audits merged

Merged from four read-only audits of `main` (2026-11-07): cosmology and Vecna;
the Vth'orama, Vocath and the FIA story; the Academy, crew and voyages; the
working layer and process docs. One subject, one row; every path for it sits
in that row. Paths are under `prime/` unless they start with `data/`,
`restricted/` or `prime/working/` (written `working/`).

**Counts.** Part 1, Korey decides: 34 · Part 2, decided and waiting: 24 rows ·
Part 3, working layer cleanup: 80 rows · Part 4, cosmetic: 15.

**Summary.**
- Ten Part 1 questions touch Voyage 7; the beacon, the two marks, Mr. Blip and the instructor vote come first.
- The biggest Part 2 sweeps are STAGING's two-plans, Vecna's-place and quickening rulings (2026-11-01), still absent from the Vecna and campaign pages.
- STAGING (2026-11-02) and `working/fia-story.md` (2026-11-07) disagree on the beacon, and STAGING's "Act" wording breaks the retired-term rule.
- BACKLOG carries about 25 items already done or ruled and about 15 duplicates; two section-table rows miscount.
- Process docs give three answers to "where does a chat ruling go" and two to "who owns pronouns".

---

## Part 1: Korey decides

Each item: the question, the options with their sources, and the lean.
Every quote here was opened and confirmed in the file named.

### A. Voyage 7 at the table

| # | Question | Options and sources | Lean, and why |
|---|---|---|---|
| 1 **V007** | Has Miken planted Qitru's beacon? | (a) Not yet; he may plant it: `working/STAGING.md` § Voyage 007 (2026-11-02) "Miken has not placed Qitru's beacon on the tyrant ship." (b) Planted: `working/fia-story.md` l.335 (committed 2026-11-07) "He also planted the beacon Qitru follows"; `dossiers/miken.html`, `dossiers/qitru.html`, `campaign/index.html`, `campaign/voyages/index.html` (V006 Settled and Delta), `campaign/plot-hooks.html`, `data/overlay.json` NPC Miken V006 "the beacon and the report both reached Qitru", `dossiers/winston-ryeback.html`. BACKLOG § Memory cleanup decide "Miken's beacon" is open | (a). STAGING is a dated table-prep ruling for this voyage; fia-story's line reads as a back-story summary and its own header says the FIA can still change. Choosing (a) means nine places change and Qitru needs a way to find the crew until he plants it. Choosing (b) means STAGING's line goes |
| 2 **V007** | Why does Mr. Blip route a crate bearing a seal he knows on sight? | `working/fia-story.md` l.358: the personal seal is known on sight to "Saerthe, Tarto, Mr. Blip". Record: `data/sessions.json` V003, `data/items.json` (Marked Crate), `data/quests.json` (Caelestis Burglaries, objective "Trace the marked crate's route through Mr. Blip"); `data/overlay.json` next "the marked crate's route through Mr. Blip"; `opposition/vthorama.html` "Blip is uninvolved". Options: he never saw the crate; he saw it and is watching it for Mirt; drop him from the list | Drop Blip from the "knows on sight" list, or make him Mirt's watcher on it. The record points the crew at this route now, so the answer has to be playable at the table. Tarto is on the same list and passed the rod on (`dossiers/boatswain-tarto.html`); check her line with it |
| 3 **V007** | Which of Vocath's two marks is on the neogi, the rod, and the V007 crossing cargo? | fia-story l.354-358: the house mark is public and "never seen on anything wrong"; the personal seal is on "the rod, the Sky Dock crate, the crate of Fonains shards"; l.391 "the crew has seen the seal twice". Against it: `opposition/vthorama.html` V001 log "The brand beneath their chitin is Vocath's house mark"; `locations/caelestis.html` "the same hand as the brand on the astrally collared neogi"; `campaign/plot-hooks.html` "Vocath's private house mark, a balance scale … on the sabotage rod … and beneath the chitin of the neogi"; `campaign/voyages/index.html` V007 d8 entry 4 "ledger stamped with Vocath's house mark" and the mercane trader's manifest. Record: the rod "bears the marking 'Vocath'" and Boogie "glimpsed the word 'Vocath' inscribed on it" (`data/items.json`, `data/sessions.json`, `data/player-characters.json`, `data/quests.json`); `dossiers/mirt.html` FR-016 "returned no match". Sol holds a live neogi from Mirt's crate (`data/items.json` ITM-5nB7wK9x) | The neogi carry the personal seal: then the crew has seen it three times and holds one, so fix "twice". The rod carries the seal with the name written beside it, which squares the record with "no registry match". The V007 house-mark cargo stays as honest trade, a deliberate false lead. Then `working/terms.json`'s retired "Passage marks?" entry points at the seal |
| 4 **V007** | How is the instructor picked? | (a) Discord reaction vote before V007: BACKLOG § statblocks fix "How the crew picks the instructor" (src: chat-voyage-6-7-planning, memory); `campaign/index.html` "Before V007 the crew picks …". (b) At the rendezvous: `statblocks/index.html` "The players choose the teacher at the V007 rendezvous"; `data/overlay.json` QST-Xr4mW8vn next "Choose the instructor at the Flighty Foundling"; `campaign/voyages/index.html` V007 run "one instructor picked". Player V006.5: Saerthe says "Which one is up to you" (fits both) | (a), if the vote already ran or is planned: it lets the instructor scenes be prepped. Then statblocks, overlay and the V007 run line change |
| 5 **V007** | Tarto's stat block | (a) `dossiers/boatswain-tarto.html`: four superiority dice (d10) and a bonus action "Clear the Deck." with no text. (b) `working/inbox/chat-staff-npcs.md` (turn 79, the chat's final block): five d10 dice, Clear the Deck cut. BACKLOG decides "Tarto's stat block" and "What Clear the Deck does" | (b): newest, and the page's empty line is unplayable as it stands |
| 6 **V007** | Which of Ryeback's weapons was stolen? | (a) The custom pistol: `dossiers/winston-ryeback.html`, `factions/fleet.html` "His personal pistol was stolen", `campaign/voyages/index.html` V002 briefing, `working/common-knowledge.md`. (b) The custom musket; he keeps the pistol (hand cannon) and the Musket line drops: `working/inbox/chat-staff-npcs.md` (turn 102). BACKLOG decides "Ryeback's stolen weapon" and "His stat block lines" | (b): the chat's turn 102 is the latest ruling. He is aboard for V007, so his block matters now |
| 7 **V007** | What did Tumak tell Ryeback about the beholder? | (a) Outright that the crew killed it: `dossiers/winston-ryeback.html` (twice); BACKLOG fix "V006: Tumak told Ryeback outright"; Player record flag. (b) "Taken care of", which Ryeback took to mean killed: `data/npcs.json` Ryeback V006, `data/player-characters.json` Tumak V006, `crew/tumak.html`, `campaign/voyages/index.html` V006 Actual | (b), unless Korey remembers the table differently: the record states what the table saw. Ryeback's report reaches *Foundling* at the rendezvous, so it plays either way. BACKLOG's fix claims `crew/tumak.html` carries "outright"; it does not |
| 8 **V007** | Ezra's hook: none on the crossing, or a hook on arrival? | (a) `working/STAGING.md` (2026-11-02): "Ezra needs no hook of his own on the crossing; at most he mentions something in passing." (b) BACKLOG § dossiers/ezra.html (Korey 2026-11-06): "Ezra must arrive with a hook others can latch onto … The sealed letter … stays an option. Come back to it later." Both agree the eye-in-a-wheel sketch is not his hook (Part 2, row 2.6) | Both hold if (b) means a hook later in Act 1: he says something in passing on the crossing, and the sealed letter is held back. Rewrite STAGING's line to say so, and close the gap before V007 |
| 9 **V007** | Accept the tyrant-ship chat adds? | BACKLOG § Memory cleanup adds from `working/inbox/chat-tyrant-ship.md`: helm attunement passes with an action, so anyone who casts can hold the helm while the cadets are ashore; H'Catha guardrail (CR 3 or lower, hits about 10); Ostekk wants the meteor's adamantine; Gregory's surge when a suppressed source unmasks; Gregory's pull stays one-way; why Vaelorix took the Engine; the Faelight spore coats until the cloud ends and moved to the Garden. Targets: `vessels/tyrant-ship.html`, `campaign/index.html` § H'Catha, `dossiers/ostekk.html`, `dossiers/vaelorix.html`, `crew/gregory.html`, `artifacts/faelight-spore.html` | Accept. They are Korey's own chat turns, none conflicts with a page, and the helm and guardrail lines bear on V007. Accepting closes the decides on Vaelorix's motive and the spore |
| 10 **V007** | Does the Fleet roster say Tumak's runes surface at cosmic threats? | (a) `factions/fleet.html` Tumak row: "Runes surface on their skin in the presence of cosmological threat". (b) `crew/tumak.html`: runes come with level-ups, character moments and story beats; a rune near something cosmic "can be an occasional story trigger, never a rule"; `rules/index.html` | (b): the finished subject page. The Fleet row could stay as what the Fleet believes, if flagged as that |

### B. Campaign structure

| # | Question | Options and sources | Lean, and why |
|---|---|---|---|
| 11 | Act or Arc, and how arcs are numbered | (a) `working/STAGING.md` (2026-11-02): "Act 1 holds several arcs: Arc 1 is Orientation, Arc 2 is H'Catha, Arc 3 is Graduation"; Act 2 levels 6 to 10 or 11; numbering across Acts "still open". (b) BACKLOG fix "'Arc', never 'Act'" (answered, l.876, and l.87); `working/terms.json` retires `\bAct (1|2|3|4|I|II|III|IV)\b`; PAGE-GUIDE § 3 `#arc-1`–`#arc-4`; `campaign/index.html` § Levels (Arc 1 1–4 … Arc 4 15 on), "Arc 2: Driftwardens in the Field"; `opposition/vecna.html` and `opposition/vthorama.html` § By arc; `factions/vthorama.html` § Their arc; `factions/runekeepers.html` "about level 12, early in Arc 3"; `factions/fleet.html` and `dossiers/haymond-rolt.html` "Arc 2"; STAGING's own "toward the end of Arc 4"; `working/campaign-middle.md`. BACKLOG decide "Arc 2" (l.2310) | Korey's newest wording is (a), so the retired-term rule changes: retire the old "Arc 2–4 = campaign quarters" sense and keep Acts. Then update `terms.json`, PAGE-GUIDE § 3, the answered fix, and every page above in one change audit. Promoting STAGING as written fails `terms.js` today |
| 12 | Homebound: does the Heart take Tumak home? | (a) `rules/index.html` "Homebound is a Wayfind to the Heart", "Homebound is the Becoming"; `crew/tumak.html` "The arc resolves at Homebound … he Wayfinds home"; `dossiers/the-runekeeper.html`. (b) `working/inbox/chat-crew-tumak-gregory-bartholomew.md` turn 336: "The Heart taking Tumak home is a disservice to the player"; Tumak weaves the Anchors to protect home. BACKLOG decide "Homebound" (l.2342); Runes 17–19 adds and the early-home door decide depend on it | (b) is Korey's latest word; the shape of the Anchors is still open. Rule (b), then park the dependent rune adds until the Anchors are set |
| 13 | How much of the station is the Academy? | (a) `dossiers/mirt.html`: "roughly a fifth of it". (b) BACKLOG decide "The station's proportions": memory gives a fifth, the Corps three-quarters, a secret sliver; "Confirm before the page carries the numbers"; `locations/caelestis.html` Still to decide | Confirm the memory numbers, or cut "roughly a fifth" from Mirt |

### C. N'ghathrod, Vocath and the FIA story

| # | Question | Options and sources | Lean, and why |
|---|---|---|---|
| 14 | Who are the Academy thefts for? | (a) Vocath: `factions/vocath-operation.html` "The thefts at Caelestis, the sabotage plates, the leverage on Miken … are Vocath's work"; `opposition/vthorama.html`; STAGING § The Academy thefts (small things only). (b) A.T.L.A.S.: `artifacts/atlas.html` "is what the Academy thefts are really after"; `locations/caelestis.html` "noise over that one objective". (c) `working/fia-story.md` l.326-327: Joffrey finds A.T.L.A.S., "N'ghathrod wants residue, and the thefts begin" | Vocath's crew does the stealing for his grudge; Joffrey uses the noise to map the Brig. Say both, and drop "the thefts begin" from fia-story |
| 15 | Joffrey's timeline | `dossiers/sor-kur.html` "building a route … for a year"; `dossiers/joffrey.html`, `locations/caelestis.html` "finished converting only recently"; fia-story l.322-327: turns "over about a year", then searches; record: burglaries already spreading at V001 (`data/sessions.json`) | Let the directive's search run while he turns, and fix Sor'Kur to match. As written, a year of turning followed by a search leaves no time before the thefts |
| 16 | The Sky Dock exchange | fia-story l.34-36: "The cadets saw him make a suspicious exchange at the Sky Dock and told Mirt". Record: `data/quests.json` (Orientation) "saw a dock officer take a bribe" in V001; `data/npcs.json` Joffrey V003 (Tumak told Mirt). `dossiers/jeffrey.html`: Jeffrey is the "bribed Sky Dock hand" | Decide who took the bribe and who paid. If Jeffrey took it, fia-story's line becomes "the cadets told Mirt about the bribe, and Mirt pointed them at Joffrey" |
| 17 | N'ghathrod's long life: the experiment or the tithe? | `working/STAGING.md` § N'ghathrod l.53 (2026-10-27): the experiments, "using a residue piece", meant "All six gained a greatly extended lifespan"; l.61 (2026-10-26): "N'ghathrod's long life comes from his taken … it extends his life". `artifacts/rod-of-seven-parts.html`: "long life comes from the tithe of his taken, not from the piece" | The experiment extended all six; the tithe extends N'ghathrod further. Then the rod page's "not from the piece" becomes "not only from the piece" |
| 18 | Can a tadpole be removed? | (a) `factions/vthorama.html` § The taking: "Removing the tadpole frees only someone who knows what was done and objects to it". (b) `rules/index.html`: "There is no release but N'ghathrod's death" | Korey's call: (a) gives the crew a rescue path at the table; (b) keeps the taking absolute. Cross-cutting 13 covers his death only |
| 19 | How many directives has Vecna given N'ghathrod? | `opposition/vecna.html`: "Only one instruction has ever reached him" (the Monolith line) and "N'ghathrod goes where he is told"; STAGING § two plans: "he stops following the list"; `dossiers/nghathrod.html`, `dossiers/vecna.html`: "a whisper … told him a dreadnought was the best way"; fia-story l.293-295: "perhaps a whisper from Vecna" about A.T.L.A.S. | Whispers are suggestions; the list of worlds is the standing direction; the Monolith line is the one explicit instruction. Spell it out once on `opposition/vecna.html` and drop "perhaps" from fia-story |
| 20 | What does N'ghathrod believe the voice is? | `opposition/vthorama.html` "He believes he answers to an elder brain"; `dossiers/nghathrod.html` "he stopped asking whether the voice he follows is his elder brain"; fia-story l.68: he believes his brain "dead, or beyond reach", l.85: the colony believes it answers to an elder brain "through him"; `factions/seekers.html`, `glossary/index.html` | The dossier: he took the voice for his brain grown greater and stopped asking. The colony believes what he tells them. fia-story says which, since this is Vecna's hold on him |
| 21 | The first unthinned, and N'ghathrod's tadpoles | fia-story l.107-109: made "from bodies he supplied and N'ghathrod's own tadpoles"; l.115-118: the experiment made his tadpoles "copies of him" | State the order: the three were made before the experiment changed his spawn |
| 22 | Where N'ghathrod's elder brain lay | `working/STAGING.md` (2026-11-04): "close to the wreck that carried Tharizdun's temple". `locations/fonains.html` and `vessels/thessalars-craft.html`: the temple piece "came down somewhere other than the Barrier Peaks" | Fonains (Fonains canon wins on Fonains): near the main wreck, apart from the temple piece. Reword STAGING |
| 23 | How did Fonains shards reach Boogie in time? | fia-story l.311-317: the raiders send word, "Vocath sends ships the long way", trade starts, shards come home. `locations/fonains.html`: the Monolith rose and broke "a few months ago". BACKLOG decide "How the Monolith fragments reached Boogie in time"; `dossiers/clint.html`, `crew/boogie.html` Still to decide | Shorten "the long way" or give Vocath a faster route. fia-story should list this under Open |
| 24 | Clint on Fonains, and the second Distinction piece | fia-story l.311-314: the skiff lands with "Clint and a few of the raiders aboard"; the raiders take his gear "for an ordinary tool; it is the device". `dossiers/clint.html`: set down "away from the boarders"; `timeline.json` events[54]: they "never found him"; `artifacts/second-distinction-piece.html` "Whether Clint still has it … is not set" | Check Fonains one-shots 3 and 4 first. If they are silent, fia-story stands, and the raiders hold the piece (or say where it went) |

### D. Cosmology

| # | Question | Options and sources | Lean, and why |
|---|---|---|---|
| 25 | The Darkest Day: one ritual or two? | (a) One: `locations/fonains.html` "a cult of Vecna worked a ritual on Giorge at the eclipse … The ritual drove Fonains to its Zenith". (b) Two: `working/tharizdun.md` "Vecna's own cult ritual on Giorge … That ritual was bait"; `timeline/timeline.json` events[15] and [24] as separate events; `cosmology/index.html` § Corrupted Monoliths (five cultists, "Vecna nudged it") | (a), Fonains first. Then align the timeline and cosmology, and the draft goes (Part 3) |
| 26 | When did Vecna ascend? | (a) `timeline/timeline.json` events[6] "Vecna rules Oerth and ascends", t −900. (b) "At least a few centuries ago": `dossiers/vecna.html`, `locations/oerth.html`, `factions/deities.html` | Pick a figure. "A few centuries" reads very differently from 900 years at the table |
| 27 | Are the Runekeepers the Lunarfoot clan? | (a) `artifacts/dissolution-fragment.html`: "the Runekeepers of the Lunarfoot clan" (twice). (b) `factions/runekeepers.html`: "the Lunarfoot clan is one of them"; Still to decide whether they are one people or many. `locations/wayfinders-homeworld.html` uses "the Lunarfoot Runekeeper" only as an example of the clan name on its works | (b). The fragment page says "the Runekeepers of the Wayfinders' homeworld"; the homeworld example can stay |
| 28 | Can a world reach a Zenith naturally? | (a) Open: BACKLOG § Zeniths [later] "Ritual and natural Zeniths" (Korey 2026-11-01); the chart's 28-system fit depends on it. (b) Yes: `cosmology/index.html` "worlds simply reach their moments"; `timeline.json` events[3]; `restricted/wm-003.html` "Zenith type: Natural" | Korey rules. If open, cosmology and the FIA line say too much; if yes, close the item and keep the chart fit |
| 29 | Is Fonains the only crystal-carrying Monolith? | (a) `cosmology/index.html` "the only Monolith ever to carry Tharizdun's crystal"; `chart/index.html`; glossary. (b) `working/tharizdun.md` Open: "Whether any other Monolith carries Tharizdun's crystal"; BACKLOG fix "The only Monolith" (describe instead) | Rule it. The BACKLOG fix to describe rather than rank applies either way |
| 30 | What is the Prism Ascendant doing? | (a) `restricted/wm-003.html` (FIA, player-readable): "Still recording". (b) `cosmology/index.html`, `locations/aethris.html`: "It does nothing" | (b). Nobody has read the FIA yet, so fix the FIA line now, or add a DM note that the registry misreads it |
| 31 | Can anyone come back up an intake? | (a) `factions/restorers.html` "There is no return channel"; "Nothing has ever come back out of a Monolith". (b) `cosmology/index.html` "it runs both ways, though almost no one has ever gone up it"; `locations/rykoe.html` | (b). The Restorers page says what the Restorers believe |
| 32 | Does the Monolith follow the Zenith or arrive with it? | (a) `locations/wayfinders-homeworld.html`, `dossiers/the-runekeeper.html`: "the result is a Zenith … and a Monolith follows". (b) `cosmology/index.html` § Monoliths and glossary: it appears in the run-up | (b). Reword (a) |
| 33 | How the Cre'Tez got Tinderstrike | (a) `factions/deities.html` states Asmodeus gave it "about three and a half centuries ago". (b) `locations/fonains.html` Still to decide: "written two ways"; `timeline.json` events[5] and [14] carry both | Fonains: deities stops stating one version, unless Korey rules now |
| 34 | "Heart" for Erevos | `glossary/index.html` Cycle "Erevos, the heart at the galaxy's core"; `factions/discerners.html`, `factions/fleet.html`, `cosmology/index.html` "The heart turns". Against: glossary Heart "A world's paracausal interior" | Use "core" for Erevos; keep "heart" for worlds |

---

## Part 2: Already decided, waiting to be carried out

One row per ruling. Each row becomes one change audit.

| # | Ruling | Source and date | Pages that still say the old thing |
|---|---|---|---|
| 2.1 **V007** | A Wayfinding mark needs no heart | STAGING § Voyage 007, 2026-11-02 | `cosmology/index.html` § Links and Wayfinding ("attunement requires a heart"); `glossary/index.html` Wayfinding; `factions/runekeepers.html`; `rules/index.html` § Forbiddance, sigils & Wayfind (and the Forbiddance hole paragraph); `dossiers/the-runekeeper.html`; `crew/tumak.html` (his mark on the ship is V007's beat) |
| 2.2 **V007** | The Fear eye wakes in Make Ready; crossing entry 7 is free | STAGING § Voyage 007, 2026-11-02 | `campaign/voyages/index.html` V007 d8 "7 The Fear eye waking" and Still to decide ("all four eyes work from the start"); `working/README.md` ship-roles row. What replaces entry 7 is a new BACKLOG decide |
| 2.3 **V007** | The Lantern: Gregory feels it out of the bag; Ostekk needs a device; in the bag nothing feels it | STAGING § Voyage 007, 2026-11-02 | `artifacts/containment-engine.html` (and its Still to decide on the behir); `crew/gregory.html`; `crew/tumak.html`; `dossiers/ostekk.html`; BACKLOG decide "Why the behir could not sense the Lantern" |
| 2.4 **V007** | Bartholomew's Wilder certification with the Order of All | STAGING § Campaign, 2026-11-02 | `factions/order.html` (nothing on Wilders); `crew/bartholomew.html` (no Order of All). The name surfaces in V007; the record waits until then |
| 2.5 **V007** | Levels: H'Catha at 4, level 5 at its end and through Graduation, Act 2 at 6 to 10 or 11 | STAGING § Voyage 007, 2026-11-02 (waits on Part 1 #11 for naming) | `campaign/index.html` § Levels and § The close ("party at level 4"); `opposition/vecna.html`, `opposition/vthorama.html` § By arc; `factions/vthorama.html` § Their arc; `factions/runekeepers.html`; `working/campaign-middle.md` § 2d; BACKLOG decide "Arc 1's close and the length of H'Catha" (only session range left), cross-cutting 5 |
| 2.6 **V007** | The eye-in-a-wheel sketch is not Ezra's hook | BACKLOG § dossiers/ezra.html, Korey 2026-11-06 | `dossiers/ezra.html` Still to decide (names the sketch); `campaign/voyages/index.html` V007 Beats owed and Still to decide ("If Ezra's hook is the sketch") |
| 2.7 **V007** | The record holds what the crew saw (CLAUDE.md § The record) | CLAUDE.md, standing | `dossiers/zerathis.html` ("Mirt has said nothing about where it came from"; V001 he named Zerathis); `locations/caelestis.html` V002 "Casey worked cargo for Rindle at the Sea Dock" (wrong dock); `campaign/voyages/index.html` V001 Delta withdrawals (V004 and V005, not V003); `crew/bartholomew.html` "in Voyage 3" (say before Voyage 4); `dossiers/boatswain-tarto.html` and `dossiers/saerthe-abizjn.html` Met 1–3, missing V006; `dossiers/boatswain-tarto.html` V003 (Saerthe named the marking; Tarto was not aboard *Foundling*); `dossiers/krik-lit.html` status (relieved at the rendezvous); `dossiers/miken.html` missing V004; `factions/fleet.html` and `working/common-knowledge.md` "belongs to no operational crew" (Ryeback joined in V003); `data/overlay.json` QST-Ok5mB8tz next (objective is done) |
| 2.8 | The invasion and the eye are two plans; the eye runs on a hidden clock | STAGING, 2026-11-01 | `opposition/vecna.html` Arc 4 "how N'ghathrod's fall stops the casting", § The clock "the clock stands still"; `principles.html` § The clock; `opposition/vthorama.html` Arc 4 "Stopping him is how the casting of Vecna's eye is stopped"; `campaign/index.html` § Shape and § Arc 4; `timeline/timeline.json` events[35] (not on STAGING's list); `dossiers/nghathrod.html` |
| 2.9 | Vecna's eye is an undercurrent, not the failure state | STAGING, 2026-11-01 | `opposition/vecna.html` intro, § By arc, § Failure state; `dossiers/vecna.html` § His arc; `campaign/index.html` l.16 and § Shape; `chart/index.html` COSMOS.fifths; `timeline/timeline.json` events[11] and threads scene "Failure state"; `hub.html` Vecna card; `principles.html` |
| 2.10 | The quickening is retired | STAGING, 2026-11-01 | `opposition/vecna.html` § The clock; `factions/discerners.html` § What's hidden and § The Beacon ("arms lighting slightly early"); `factions/fleet.html` (drift paragraph); `data/connections.json`; `chart/gtc.js` toggle; `chart/holo.html` ghost beam; BACKLOG GTC item; add the term to `working/terms.json` |
| 2.11 | The voice came in the centuries after the exile | STAGING § N'ghathrod, 2026-10-26 | `factions/vthorama.html` § History (answered right after the crash); `timeline/timeline.json` events[56] and scenes[3] "Vecna answers his call" |
| 2.12 | The taken outlive N'ghathrod, each keeping part of him | STAGING § N'ghathrod, 2026-10-26; cross-cutting 13 | `rules/index.html` § Taken and Still to decide ("what that does to the taken is unwritten") |
| 2.13 | Seekers chapters do not know each other; the recruiting voice is dropped | BACKLOG cross-cutting 8, ruled | `timeline/timeline.json` events[7] ("chapters … recognise each other"; "across galaxies") |
| 2.14 | The colony's captives come through Vocath's line | `opposition/vthorama.html`, `dossiers/zhauveth.html`, `dossiers/vocath.html`; fia-story, 2026-11-07 | `factions/vthorama.html` § Operations ("through raiding and the neogi"). The two Vth'orama pages duplicate paragraphs; keep the operation on the opposition page and the people on the faction page |
| 2.15 | Residue scale and residue housings | STAGING § Cosmology and § Artifacts, 2026-11-04 | `cosmology/index.html` § Residue and the fragments; `artifacts/index.html` § Holdings and § Why they are scattered and hidden |
| 2.16 | Lantern: Mend takes an action; the seated Lantern is a one-person pod; dampened, not switched off, in anti-magic | STAGING § Lantern, 2026-11-04; BACKLOG § rules fix (answered); BACKLOG § tracker fix | `artifacts/containment-engine.html` stat line (no action); `rules/index.html` § Character subsystems (no entry) and § Paracausality ("Unsuppressed" for residue housings); `data/overlay.json` ITM-Z1eGrfAb V006 "turns the ship into a safehouse" |
| 2.17 | The Command Deck field froze constructs; it did not unmake them | Vaelorix ruling (`dossiers/vaelorix.html`, V005 table); BACKLOG § tyrant-ship and § tracker fixes | `vessels/tyrant-ship.html` § History "unmade constructs"; `data/overlay.json` QST-Xr4mW8vn V005 beat "unmakes constructs" |
| 2.18 | Tyrant ship: cut by disintegration; the Engine never drove it; the chair-helm works only in the dais | STAGING § Artifacts, 2026-11-04 | `vessels/tyrant-ship.html` (cause and helm rule missing); `dossiers/vaelorix.html` |
| 2.19 | V006: the great flower, the root flower and fire; Tumak's lie backed by Enhance Ability and Guidance | STAGING § Voyage 006, 2026-11-04 | `campaign/voyages/index.html` V006 Actual (gives a different account); `crew/bartholomew.html`; `crew/tumak.html` |
| 2.20 | STAGING play notes and small facts of 2026-11-04 | STAGING § Crew and dossiers, § Rules, § Opposition and Fonains | `crew/bartholomew.html` § Inspirations (Beast Boy, Tony Chopper); `dossiers/crc.html` touchstones; `dossiers/saerthe-abizjn.html` (Kekkaishi, fleet call as rumour); `rules/index.html` § Paracausality (the well); `locations/fonains.html` and `dossiers/nghathrod.html` (Tharizdun never reached the brain); `factions/vthorama.html` (the taken keep old ties); `vessels/vthoramu.html` (a civilization aboard); `factions/cretez.html` and `dossiers/vanifer.html` (Asmodeus has no hand); `locations/fonains.html` (Lola and Eldath, Zaishori out of play); `factions/vocath-operation.html` (thefts took small things); `rules/index.html` inscription (the fragment rebuilding in two halves, STAGING 2026-10-28) |
| 2.21 | The FIA story is settled | `working/fia-story.md`, 2026-11-07 | Its own touch list, plus pages its Promotes to misses: `dossiers/index.html` summary rows; `locations/caelestis.html`; `dossiers/sor-kur.html`; `opposition/vecna.html`, `dossiers/vecna.html`, `factions/seekers.html`, `glossary/index.html`; `locations/krynnspace.html` ("the watch at Realmspace's edge"); `locations/hcatha.html`; `restricted/disintegration.html` (clearance); `data/connections.json` and `timeline/timeline.json` (PR 2 and PR 3 content); `data/overlay.json` (Miken beacon); `campaign/voyages/index.html` (house mark on V007 cargo; Miken blast "not set"); `dossiers/zhauveth.html`, `dossiers/ithvarn.html`; `crew/bartholomew.html` (FIA hint); `dossiers/jeffrey.html`; `working/terms.json`; `working/glyth-watcher.md`. Waits on Part 1 #1–3, 14–16, 19–24 |
| 2.22 | Miken placed the rod and caused the blast | fia-story, 2026-11-07; BACKLOG ripple audit, 2026-11-06 | BACKLOG decide l.968; `campaign/voyages/index.html` "Whether Miken caused the simulation blast … is not set"; `dossiers/miken.html` "the beacon is the whole of the sabotage" |
| 2.23 | Rykoe is the centre; the strain is a byproduct, not a weight on one Axiom; two Zeniths on a world are possible | Naming ruling, Korey 2026-10-28; BACKLOG fix Retrofit the five Axioms, Korey 2026-10-26; BACKLOG § Zeniths, Korey 2026-10-28 | `chart/index.html` COSMOS.fifths "where the Axioms meet"; "the center" on `chart/index.html`, `opposition/vecna.html`, `timeline.json`, `connections.json`; `dossiers/astra-virex.html` "the strain on an Axiom"; `glossary/index.html` Zenith "It happens once" |
| 2.24 | Saerthe is he; Sor'Kur is she | Korey 2026-11-02 (`working/common-knowledge.md`) | `data/npcs.json` Gender null for both (record edit, Korey's call); `dossiers/sor-kur.html` avoids any pronoun while `factions/fleet.html` says "Her" |

---

## Part 3: Working layer cleanup

### 3a. STAGING.md

| Entry | Action |
|---|---|
| **V007** § Voyage 007: Miken's beacon line | Rewrite or delete after Part 1 #1 |
| **V007** § Voyage 007: Ezra line | Rewrite after Part 1 #8 |
| § Voyage 007: "Act 1 holds several arcs" | Rewrite after Part 1 #11 |
| § Two plans: "toward the end of Arc 4" | Renumber after Part 1 #11 |
| § N'ghathrod l.53 and l.61 (long life) | Rewrite after Part 1 #17 |
| § N'ghathrod's elder brain ("close to the wreck that carried Tharizdun's temple") | Reword after Part 1 #22 |
| § Naming: Rykoe and Erevos ("done everywhere") | Clear |
| § N'ghathrod lore lines | Clear; the only remainder, "rules/ still needs them", applies to the taken-outlive line (Part 2.12) |
| § Wan, Tu and the fragment | Narrow to the one rules/ line |
| § Tyrant ship; § Lantern; § N'ghathrod's elder brain; § Cre'Tez | Narrow to what is not yet on the page |
| Header rule vs "done:" notes | Rule BACKLOG later "'done:' lines in STAGING", then clear the done notes |

### 3b. BACKLOG.md: close

| Item | Why |
|---|---|
| **V007** decide "Miken's beacon" (l.2309) | Closes with Part 1 #1 |
| **V007** decide "Why the behir could not sense the Lantern" | STAGING 2026-11-02 (the bag) |
| **V007** decides "What Clear the Deck does"; "His stat block lines" (Ryeback) | Close with Part 1 #5 and #6 |
| decide Miken caused the blast (l.968) | Ruled (Part 2.22) |
| Cross-cutting 5 (level bands), 6 (which piece gave long life), 8 (colony as chapter) | Settled by STAGING, the rod page and the Seekers page |
| Cross-cutting 17 "Open" subsections; "Dossier tab names" (twice) | PAGE-GUIDE § 5 settles both; the tab item states a superseded rule |
| Retrofit the five Axioms; Residue counts by Axiom; Spheres become galaxies (after one check of survey-core.js and holo.html) | Done |
| Why Caelestis's sphere holds three fragments; Tymora's misread tenet; chart "Vecna knew"; Sol's oath; Wan and Tu two hosts; Autognome rule in SESSION-RUN; no triple short sentences | Done |
| Wayfind cost, Wayfind odds, Mishap two sanctuaries (l.1651, 1656, 1661) | Superseded by the redo; delete |
| decide "Why Vaelorix stole"; Faelight "Also open" | Close with Part 1 #9 |
| Player record flag 6.3 "autognome" | Answered: stays as history |
| One purebred stayed (l.482) | Pages and STAGING: all five went with him. Close as "cut the line" |
| Is the colony a Seekers chapter | Ruled; close |

### 3c. BACKLOG.md: narrow, rewrite or merge

| Item | Action |
|---|---|
| **V007** Player record flags | Add: Ezra needs a record in the V007 run (seen unnamed at the V006.5 rendezvous); the rod's "word Vocath" (Part 1 #3); "struck the spire" vs the Pupil; "watched by beholder patrols"; Saerthe and Sor'Kur Gender null; `data/sessions.json` V006 has no interlude line; Mirt "head of Caelestis" also in `data/locations.json` |
| **V007** tracker fix "seated Lantern is a one-person pod" | Keep open: "safehouse" is still in `data/overlay.json` |
| Tharizdun is she | Narrow to `working/tharizdun.md` and the outside Fonains doc; update the done list; drop `factions/academy-fleet.html` |
| Dharra, not Darra | Merge into "Refresh or retire the Fonains doc" |
| The center is Rykoe | Narrow to chart/index, opposition/vecna, timeline.json, connections.json (Part 2.23) |
| GTC item (l.192) | Keepers → Discerners; drop the quickening sentence |
| How the Flow works (l.233) | Rewrite as "does divine magic weaken across galaxies?"; merge the Memory fix |
| Chart fix "Center": "Why Reach-born gods suffer more stays a decide" | Dangling; drop the pointer or open a real decide |
| A second Zenith on Aethris (filed under meteor-hub) | Move to locations/aethris; keep only "can the ritual bring one" |
| "Arc", never "Act" (answered); decide "Arc 2"; Arc 2's second system | Fold into Part 1 #11 |
| Cross-cutting 18 Clint "deliberate dive" | Rewrite: fia-story says the pool opened by chance |
| Hall of the Watchers decide and add | Rewrite against the 2026-10-28 Order-house ruling; drop "SPH-01" |
| Runes 17–19 adds; early-home door; "Homebound is always free" | Mark dependent on Part 1 #12 |
| Moot after fia-story: WM-003 registry (l.1237, also misfiled under zerathis); Cairn Station; Strake secure storage; *Crow* after the ambush; Hollis Post; how Vocath knew the *Crow* carried the piece; did Mirt learn the piece was the target | Close or rewrite in the PR that lands each subject |
| Still coming in: "Every chat sweep is complete" | Wrong: two sweeps are partial |
| "Answered from the sources" list | Prune; drop duplicate Atrium and dossier-tab lines |
| Duplicates to merge | Meteor and why Caelestis wants it (3 places → campaign item); the Rival's name (2); Runes 17–19 as Anchors (4); crew homeworlds (2 → crew); N'ghathrod's stat block (2); Mirt "head of Caelestis" (keep the flag); Ryeback "taken care of" (cross-reference page fix and flag); logbook copies (2); the Glyth Watcher (5 places → its draft); Shothragot and Giorge (2); voyage-template.html (keep the fix); Spectators on H'Catha (keep BACKLOG); contract categories and the eye's clock (draft points to BACKLOG) |

### 3d. BACKLOG.md: section table, misfiles and dead paths

| Item | Action |
|---|---|
| Section table: Campaign row reads 19/4/3/0/2, items count 19/3/3/0/1; New pages row reads 3/19/3/2/24, items count 3/20/3/2/25 | Cause: campaign items filed under `# New pages` (opposition/vthorama "if Vocath falls", principles adds and contract categories, hub.html). Move them under `# Campaign`, then recount |
| Orphan "**Purpose.** The tone and source rules for the cosmos" (l.2013); empty `### vessels/vthoramu.html` (l.1480) | Delete |
| `notes/*` targets (PAGE-SHAPE, WIKI-PAGE-GUIDE, FIA-BREADCRUMBS, FIXES-DEMO-MIGRATION, SESSION-RUN) | `notes/` was deleted 2026-10-27. Delete those fixes or retarget to PAGE-GUIDE |
| `docs/SESSION-RUN.md`, `docs/PAGE-GUIDE.md` (l.71, 2124, 2136, 2338) | Rewrite to `prime/docs/` |
| spine.html, campaign/spine.html, colony/index.html, working/vecna.md, realms/* as targets | Rewrite targets (fine as `src:`) |
| factions/keepers.html, factions/academy-fleet.html | discerners.html, fleet.html |
| aspects/, wayfinder-path/index.html, root logs/ | Crew-page tabs; voyages/logs/ |

### 3e. Drafts

| Draft | Action |
|---|---|
| **V007** `ship-roles.md` | Promoted; Open "None". Delete; move the entry-7 question to BACKLOG § campaign/voyages; fix its README row |
| `fia-story.md` | Run its change audit (Part 2.21) after Part 1. Before promoting, fix: Strake's reach (l.271 "only Cairn's scope" vs l.255 and l.414); "Strake further off" (l.469, 532) vs "nearer home"; drop "perhaps" (l.294); "the network", "Caelestis Fleet" and "the *Crow*" are retired or mismatched in `terms.json`, so name the web of the taken first; Bartholomew's **Proposed** SA-002 1482 line ("the earliest entry" is false, 1481 exists; CON-312 is a constellation number, so give the transient a registry number); give Mirt's belief a basis now that WM-002 loses the hull marking; Zhauveth "end a crew with a word" vs "incapable of violence" (domination is not violence; say so); get "the true-formed" ruled before the rename; three PRs vs "One pull request" (3g) |
| `tharizdun.md` | Fully promoted; mixed pronouns. Move Open to BACKLOG, delete. Its Darkest Day "bait" line goes with Part 1 #25 |
| `divine-rules.md` | Stale: "sphere", "the Flow", Reach-born polarity, "Nothing breaks" vs cosmology's destruction; its two Open questions are answered on cosmology. Promote the worship section, rule "Reach debris and worlds", then delete |
| `glyth-watcher.md` | Fix "the purebred lieutenant who stayed", "brainless-raised" (retired), "pure-born", "Act 2 handler", "Hall of the Watchers". Make it the one home for the subject |
| `campaign-middle.md` | Rewrite "Arc 2" after Part 1 #11; point its Open at BACKLOG |
| `nexus-field-guide.md` | PAGE-GUIDE § 8 depends on it. Move "Left off on purpose" into PAGE-GUIDE or the nexus DM note; add Kindori calves to BACKLOG; delete |
| `repo-refactor.md` | Missing from README's Drafts table. List it as "Reference: link catalogue"; update phase status (3–8, 10 done; 9 open) and `docs/` paths |
| `nct-127.md`, `common-knowledge.md` | Keep |

### 3f. Inbox sweeps

| Sweep | Status | Action |
|---|---|---|
| **V007** chat-tyrant-ship (PARTIAL to t265) | About 6 of 15 sampled landed: room purpose, Ostekk-6 sub-goal, behir and camp, Hollow Deck life support, Astronomer's Boon, the coffer, helm weight, flower AC by size | Weakest; finish the sweep and land the adds (Part 1 #9) |
| chat-vecna-godhood (PARTIAL 0–233 of 964) | 731 turns unread | Log the unread range in BACKLOG, then delete |
| drive-virenspace | 0 of 3 landed; its route to Viren conflicts with `locations/virenspace.html` | Sweep |
| cretez-foundry-notes, module-sweep-fonains, chat-automation, chat-astral-sea-worldbuilding | Landed | Delete after a last pass |
| chat-cosmic-campaign-structure, chat-crew-boogie-casey-sol, chat-early-planning, chat-organizing-framework, chat-staff-npcs, chat-voyage-6-7-planning, chat-crew-tumak-gregory-bartholomew | 65–90% landed; named gaps in the working audit § D | Finish, then delete |
| inbox/README counts | Stale (astral 55→59, Tumak 20→22, tyrant 38→41); about 72% of sampled "not in repo" items have landed | Recount or drop the counts |

### 3g. Process-doc contradictions

| Conflict | Where | Action |
|---|---|---|
| Where a chat ruling goes | Project instructions say the inbox; `working/README.md`, `inbox/README`, BACKLOG fix "Empty the inbox" (2026-11-07), caelestis-prep and table-readiness say draft or STAGING | Give Korey replacement text for the project instructions |
| Pronoun authority | CLAUDE.md § Naming: the dossier; SESSION-RUN § Authority, caelestis-voice, table-readiness 25: the record | Pick one; point the rest at CLAUDE.md |
| Dossier tabs | PAGE-GUIDE § 5 About / DM notes / Stat block; SESSION-RUN step 5 "Who they are" | Fix SESSION-RUN |
| Where open questions may sit | CLAUDE.md includes DM notes tabs; `working/README.md` omits them | Point README at CLAUDE.md |
| "The" in names | README bans "the Hollow"; repo-refactor allows it | Drop it from one list |
| Promoted drafts are deleted | README § 2 vs PAGE-GUIDE § 8 (nexus), ship-roles, tharizdun kept | Resolve per 3e |
| One pull request per audit | CLAUDE.md § Working flow vs caelestis-change-audit § Scale and fia-story's three PRs | Add the split rule to CLAUDE.md |
| STAGING "done:" notes | README step 5 vs STAGING practice | Rule it (3a) |
| Short sentences for emphasis | SESSION-RUN § Style vs CLAUDE.md § Writing | Compatible; say so in SESSION-RUN |
| Writing rules stated three times | CLAUDE.md, README, PAGE-GUIDE § 1 | Keep CLAUDE.md; the others point to it |
| `terms.json` moved entry | `order.html#cycles` → `factions/keepers.html#beacon` | Retarget to `factions/discerners.html#beacon` |
| `voyages/voyage-template.html` | Obsolete; SESSION-RUN says do not use | Delete |

### 3h. Skill lines

| Skill | Line | Action |
|---|---|---|
| caelestis-voice | Pronouns "from the repo … and the record"; restated writing rules | Point at CLAUDE.md § Naming and § Writing; keep the off-repo habits and the before/after table |
| caelestis-table-readiness | 15 "A roll is called only when something is there"; 18 encounter tables | Promote the BACKLOG adds to `principles.html`, then cite |
| caelestis-table-readiness | 25 "check the record for spellings and pronouns" | Pointer, after 3g pronoun ruling |
| caelestis-table-readiness, caelestis-prep step 4, caelestis-mechanic-review 11 | Per-player hook line, three copies | Cite `principles.html#players` |
| caelestis-mechanic-review | 10 "Reskin first"; 12 "D&D Beyond 2024 phrasing" | Promote to `principles.html`, then cite |
| caelestis-change-audit | § Scale vs "One pull request"; "A process rule lives in one place" | Align with 3g; reword to "one place each" |
| caelestis-prep | step 5.3 rulings to draft or STAGING | Keep; fix the project instructions instead |

---

## Part 4: Cosmetic

- **V007** `data/voyages.json` V007 working title "the helm seats → H'Catha" (helm seated in V006.5).
- **V007** `dossiers/rindle-gearloft.html` decide (own dock or Sea Dock worker) vs `locations/caelestis.html`, `factions/fleet.html`, `crew/gregory.html` stating "works here"; the record says "a dock near the Sea Dock".
- **V007** H'Catha: "struck the spire" (record) vs the Pupil (`locations/hcatha.html`, `campaign/index.html`, `plot-hooks.html`); add a DM line that the crew was briefed "the spire".
- **V007** H'Catha: "watched by beholder patrols" (record) vs orbit left open (`locations/hcatha.html`); add a DM line on what the crew has not yet seen.
- `chart/galaxy.js` comment on Nowhere ("destroyed by its own Zenith") vs cosmology (a god forced its way on).
- `factions/deities.html` "Asmodeus likely knows" vs `dossiers/vecna.html` "knows": pick one.
- `factions/watchers.html` "The rise in Monoliths … is the Axiom strain" (the rise causes the strain).
- `factions/index.html` Watchers card "step in where they must" vs `factions/watchers.html` "for the most part they do not act".
- `artifacts/fonains-shard.html` accumulation milestone (BACKLOG fix to drop it).
- `factions/vthorama.html` Ith'varn "never leaves the ship" vs his dossier "has not left Vth'oramu in thirty years".
- `data/connections.json` Khaleth "the only one of the five who goes down" vs his dossier "the one who regularly goes down".
- `cosmology/index.html` "prime god": define or replace.
- "Closing" vs "sealing" a heart (`factions/runekeepers.html`): use "closing".
- Glossary rows to add: color pool (a pool can open onto another plane or pass through one to another Material place), unthinned, Cavitius, resonance, Prism Ascendant, Elder Elemental Eye, the Vanished, Misfortuned, Fracture Cult, the Archivists, the Ledger, the Becoming, darkest-timeline world.
- BACKLOG Hub items still open: "Wildspace Lore Bible" tile; Vessels and Timeline cards on `hub.html`.

---

## Dropped on check

Nothing was dropped outright. These were corrected when the cited file did not match:

- STAGING's long-life line reads "comes from his taken … tithed upward"; the words "not from the piece" are on `artifacts/rod-of-seven-parts.html`, not STAGING (#17).
- `locations/fonains.html` says the Monolith broke "a few months ago", not "2–3 months" (#23).
- `locations/wayfinders-homeworld.html` uses "the Lunarfoot Runekeeper" as an example of the clan name, not as a claim about the order (#27).
- BACKLOG fix l.974 says `crew/tumak.html` carries "outright"; the page follows the record (#7).
- The working audit lists the "seated Lantern is a pod" tracker fix as done; "safehouse" is still in `data/overlay.json` (3c, 2.16).
- The Ezra rows were read as compatible by one audit; STAGING (11-02) and BACKLOG (11-06) do pull apart, so Ezra moved to Part 1 (#8).
- fia-story carries no date in its text; the audits gave 11-06 and 11-07. Git dates its last commits 2026-11-07.
- fia-story's Bartholomew SA-002 line is marked **Proposed**, so it sits in 3e, not Part 1.

## Promotes to

Each Part 2 row is one change audit (caelestis-change-audit). Part 1 answers
become rulings in this draft, then change audits. Part 3 is done in place on
the working layer. Delete this draft when every item is closed.

## Open

Part 1 questions, by number: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (V007); 11, 12,
13; 14 to 24; 25 to 34.
