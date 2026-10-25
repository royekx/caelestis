# Chat sweep: early planning chats

Four older chats. Later canon often supersedes them. Repo checks are targeted greps of `prime/` (and `restricted/` for the FIA archive). Status tags compare each chat decision to the repo as it stands now.

**Coverage warning.** The read_conversation hourly call budget ran out partway through.
- "Campaign Planning": read turns 0–36 of 417 (about 9%). Turns 37–416 are **unread**.
- "New campaign idea development": read in full (turns 0–101; 70–101 merged in a follow-up sweep, 2026-10-25).
- "Campaign organization system feedback": read in full (4 turns).
- "D&D module where evil won": read in full (10 turns).

A follow-up sweep needs to resume at page token `t37` (Campaign Planning) and `t70` (New campaign idea development).

---

# Campaign Planning
Source: https://claude.ai/chat/0852f52d-cb7d-4fd8-a1f0-3cafec340ce5 · updated 2026-08-12 · **turns 0–36 of 417 read**

## Settled

### Cosmology and setting
- The Radiant Citadel is hidden away and is not near Caelestis. — **in repo** (cosmology: "The black hole, the Core, and the Radiant Citadel sit inside the cosmos, at its center")
- Arc II stays in Toril's Wildspace (Realmspace) plus at most one other system. — **not in repo** (no second-system decision found)
- Vecna did ascend in canon (Oerth, via Iuz; failed Sigil attempt). Korey can place his own ascension site without contradicting canon. — **in repo** (working/vecna.md covers Oerth and the ascension)
- There should be a reachable world where Vecna ascended. It nods to Critical Role campaign one without copying it. — **in repo**, reshaped. The repo splits it in two: Oerth, where his ascension Monolith still stands ("the darkest timeline in miniature"), and the Ascension World (SYS-05), "a small, local threshold through agents."
- Monoliths are "Vecna's spell ink in a cosmic inscription." Activating a node means creating a Zenith. Vecna either claims existing monoliths or inscribes new ones by forcing Zeniths. — **conflicts** (repo: "Zeniths happen on their own schedule; Monoliths follow when the strain is great enough; the Atrium has to be..."; working/vecna.md frames the plan as opening and linking hearts toward "the Convergence seat"). The word "inscription" survives in repo: "The inscription completes or fails. Vecna's spell gets its one cast."
- The failure state, if the players fail, is Eve of Ruin, or an alternate reality shaped like it. — **not in repo** (neither "Eve of Ruin" nor "Ritual of Remaking" appears)
- Act 4 material to draw on: Eve of Ruin ("Vecna about to win") and Doomed Forgotten Realms ("Vecna won"). Both would be heavily reskinned to the cosmology. — **not in repo**
- Doomed Forgotten Realms' shroudstones can be reskinned as the key monoliths the spell is bound to. Korey sees them as literal world-sized gems that Vecna would protect. — **not in repo**
- The Fonains monolith, corrupted by Tharizdun and destroyed in Korey's other campaign, is the only record of a destroyed monolith. It is the cross-campaign answer to destroying shroudstones, and the two campaigns' players could cross over and work together (a distant idea). — **in repo** in part (Boogie: "the only monolith ever destroyed, Tharizdun-corrupted"). The shroudstone and crossover angle is **not in repo**.

### Institutions
- The Watchers are a known, working organization. They are structured, morally forward (more so than the Fleet), and not mysterious or ominous. The Fleet knows them, works with them, and often transports them. — **in repo** in part (factions treat Watchers as an order the Fleet partners with). No line states the "not mysterious" tone correction.
- The Watchers act as "space police": order-keepers who decide when to intervene. Their authority is one they believe the All-Father bestowed. — **not in repo** (neither "space police" nor "All-Father" found)
- The Fleet is self-made and non-governmental. It can be hired for contracts. Its authority is self-bestowed, not granted by any council of worlds. — **in repo** ("Authority is self-bestowed by reputation rather than granted by any council of worlds")
- The Fleet operates covertly because most worlds do not know Wildspace exists. — **in repo** ("Operations are for-hire and frequently covert. Most worlds do not know that Wildspace exists")
- The Bridge is high command and issues assignments. — **in repo** (Above Bridge clearance is in use)
- The Academy and the Fleet are distinct. Mirt runs the Academy, and someone else runs Fleet operations. — **in repo** ("The Academy is the recruitment and training arm; the Fleet is the operational body that grew from it")
- The name Caelestis is kept, and both functions sit in one station (Korey likes the art). Graduation means crossing from the Academy side to the operations side. — **in repo** ("Fleet station in Toril orbit; the Academy and the operations wing")
- Tone: a respected pirate-fleet command, not a military one. Rank buys freedom. Early crews are leashed to a system, and range grows with rank. — **in repo** in part (Driftwarden rank raised by renown). The geographic leash is unconfirmed.
- Missions: a time-boxed contract, with the crew free in between. Nobody checks in unless the outcome is at risk. — **in repo** in part (contract board, "Contracts they decline resolve without them")
- Use both a handler NPC and a job board. — **in repo** ("The Fleet's handler posts contracts graded by scale"; "The handler is unnamed")
- Ezra is a Watcher-in-training who rides along to learn the job. — **in repo** ("Watcher in training, collected by the Foundling")

### Factions
- Mid-tier factions: Syndicate, Concordance, Fracture Cult, Archivists, Rogue Watcher. — **in repo** ("Independent powers with their own histories — Concordance, Fracture Cult, Archivists, Syndicate"; rogue Watchers listed as open)
- Each faction is a different answer to "who decides what's real" (charter faction table). — **not in repo**

### Campaign identity
- Architecture is Mighty Nein (a living world where story waits wherever the players go). Vibe is Destiny, Star Wars and Guardians of the Galaxy (space opera, space pirates). — **not in repo** (no "Mighty Nein", "Critical Role" or "Destiny" reference)
- True north: "Everyone, on some level, is trying to answer the question of who gets to be real, and Vecna wants to be the answer." — **not in repo** under `prime/` (it lives in the project doc `caelestis-campaign-charter.md`)
- Found family is an explicit emotional pillar and the mechanism of the theme. — **not in repo**
- Proposed one-word PC verdicts: Gregory "inventory", Sol "error", Boogie "container", Tumak "constructed self", Casey "instrument", Bartholomew "the thing he won't look at". Claude asked Korey to confirm Casey and Bartholomew. Whether he did falls in the unread portion. — **not in repo**
- Korey wants a Variks-style, characterful non-human NPC; Variks from Destiny is a favourite. — **not in repo** (handler is unnamed; no Variks-type found)

### Method
- A mission is a nudge, not the content. It gives the DM a way to point the crew at a destination. Timeframes are loose, and consequences for being slow are mild. — **in repo** in part ("the story is what the crew finds on arrival, whether or not it has anything to do with the contract")
- The crew arrives mid-chapter. A situation is already running before they get there and continues if they leave. — **in repo** in part (same contract-board line). No explicit "mid-chapter" rule found.
- Story is portable: a few key worlds have fixed story, and floating situations can move to wherever the crew goes. — **not in repo** as a stated rule
- Railroading is acceptable only inside a situation the crew has chosen, until it ends ("scenes have walls"). — **in repo** in part ("No-railroad — players bend tempo, not direction")
- Villain planning has three resolutions: a fixed end (D), fixed major steps, and one detailed next step. In between: "A is the plan, B happened, C is the response, they still have to reach D." — **in repo** in part (the no-railroad principle). The three-resolution method is **not in repo** by name.
- The Academy finale changes the network's tempo, not its objective. It is a perturbation, not a setback. — **in repo** ("Resolves at the Fork. The outcome sets Arc 2's tempo")

### Network and charts
- The network needs information (charts of the cosmos). The Caelestis theft is a narrow grab of what this one operation could reach. — **in repo** (the chart theft is a live thread)
- The stolen charts lead to Cairn Station, not to a monolith. — **in repo** (Cairn is the silent post on the theft trail)
- Cairn Station is the territory of an astral dreadnought. — **in repo**, reshaped: "Vth'oramu sat on the Cairn bearing for days... it was not a vessel. Cairn reported it and stopped reporting anything. The dreadnought moved on afterward." A separate colony lives in a hollowed astral dreadnought.
- Cairn is somewhere the party can go once they unlock the FIA and work out where it is. — **in repo** in part ("The standing order closes everything past Strake")

## Superseded
- Destiny-style "residue engine", where jobs are designed to shed clues at a tuned ratio → Mighty Nein living-world architecture, with Destiny kept as the vibe only.
- Mission ladder by danger tier (Runs, Recoveries, Interventions, Standoffs) → categories by dramatic function (Runs, Recoveries, Interventions, Quiet jobs, Contracts-gone-wrong). The jobs become entry vectors into situations already running.
- A separate Fleet station in its own location → a single Caelestis station with an Academy side and an operations side.
- A beat-3 "institution betrays the crew" turn → the Fleet stays a good home that is simply out of its depth.
- Charts as an atlas of every monolith and Zenith site → charts pointing to one or two monoliths, including a key anchor glyph → (Korey's correction) charts leading to Cairn Station, a lead rather than a glyph.
- Fork State B, where the network must "re-acquire what's missing" → tempo only: State A is a chase, State B a contest.
- Watchers framed as mysterious or ominous → a known, principled partner organization.
- The Lore Bible's "hidden magical navy that protects Toril" framing → a self-made, for-hire, covert, non-governmental Fleet.
- The network's name was still pending in this chat → the repo now calls it the **Vth'orama**.

## Open
These are open as of turn 36. The unread turns may resolve them.
- Handler: Claude pitched a dohwar broker ("Pip"), a defected scro ("Vahl"), a xixchil contract-surgeon, and a washed-up human captain (set aside because it overlaps with Saerthe). No pick yet. (Repo: handler still unnamed.)
- The second system: what it is and why the Fleet operates there.
- What is at Cairn Station: (a) a derelict site, or (b) an inhabited hidden outpost of fences and scholars. Also whether the crew reaches it in Arc II.
- If the party foils the network, shouldn't the party end up holding the charts? (Raised at turn 36. The answer is in the unread portion.)
- Whether the true ending is "prevent Eve of Ruin" or "survive Eve of Ruin."
- The live glyph or site, the Ascension World's specifics, and which Zeniths are natural versus manufactured.
- Confirmation of the PC verdict words, especially Casey and Bartholomew.

## Documents produced
- `caelestis-campaign-charter.md`, a Markdown file written to chat outputs. It is now a project doc. **Not in repo** under `prime/` (the theme lines are absent).
- `caelestis-state-of-the-world-arc-ii.md`, a Markdown file written twice; the second version adds the inscription mechanism, the five-node ladder, the three-resolution method, Eve of Ruin as D, and Fork State A/B. **Partly in repo**: the Fork, the Ascension World and the PC next-beats appear in repo pages. The node ladder and the Eve of Ruin framing do not.

---

# Campaign organization system feedback
Source: https://claude.ai/chat/742a24f2-c2dd-46b2-a49e-826a4c0ea260 · updated 2026-04-30 · read in full

A review of Korey's Drive prep system. It carries almost no lore. Korey limited the scope to Caelestis only.

## Settled
- Prep architecture at the time: Voyage Briefing (prep), Voyage DM Summary and Crew Logs (post-session), Campaign Tracker sheet, PC arc docs, Wildspace Tracker and Wildspaces Lore Bible. — n/a (tooling, not lore)
- Sol has a Misfortune check loop mechanic, and Gregory has a Calibration mechanic. — not checked (mechanics live in the PC docs)
- Gregory's DM principle: "do not rush Gregory into normal emotional fluency; let personhood emerge in awkward, partial, sincere ways." — **not in repo** (not grepped verbatim; inference)
- Bartholomew has a "Call of the Wilds" player onboarding doc and a "missing shape" arc. — **in repo** in part ("the Almosts", a missing shape, appears in repo)
- Session-one beats named: Casey's Viren lead, Tumak's stolen bag and family search, Boogie's half-formed ship. — **in repo** (Zerathis, Viren, Boogie's half-ship all present)
- Ezra Ahl-Sier existed as an orphaned backstory file; his status was unclear at the time. — **in repo** (Ezra is now a Watcher in training)

## Superseded
- "No Caelestis lore bible or faction doc exists" → the Lore Bible and faction work were built later.

## Open
- None of lore significance.

## Documents produced
- None. Claude offered arc stubs, a Lore Bible stub and a Character Arc Tracker structure.

---

# D&D module where evil won
Source: https://claude.ai/chat/90c3ddbb-cdc8-45b1-b7e7-b6d3e5ee2420 · updated 2026-06-20 · read in full

Korey asked for the fan module where Vecna won. Answer: Doomed Forgotten Realms, *Rise of Vecna*, by Scott McClintock on DMs Guild.

## Settled
- *Rise of Vecna* is "undo, not stop": Vecna already won, and a new party born into the aftermath restores the world. *Eve of Ruin* is the plan still in motion. — n/a (reference)
- Korey wants this only as a failure-state reference: the cosmos has changed and a party (this one or another) wants to fix it. — **not in repo** (no failure-state or Eve of Ruin framing)
- A Caelestis failure state would have to be a homebrewed, cosmic-level change, not a conquered map. — **not in repo**
- Useful lifts: the "retroactive architecture" model (separate disasters were one plan feeding one hidden engine, the Soulmonger), and necrotic beacons as an environmental-pressure device. — **not in repo**

## Superseded
- None within the chat.

## Open
- Which cosmic change: (a) the Axiom rewritten ("what is hidden is what is real"), (b) Continuity severed, or (c) the paracausal channel captured, with Vecna on the other end of Astra's tethers.
- Whether the failure state is backstory pressure, a vision or flash-forward, or a playable alternate timeline.

## Documents produced
- None.

---

# New campaign idea development
Source: https://claude.ai/chat/8e0354c1-ab60-4189-bacd-27066fd1627e · updated 2026-05-13 · **read in full (turns 0–101)**

This chat **is** Caelestis. It covers the Fleet Intelligence Archive (FIA) ARG behind the restricted gate of the site.

## Settled

### Nexus and FIA framing
- The in-world Spelljammer Nexus is the website; consulting it is a character action. — **in repo** (site structure)
- Nexus pages drop meta framing ("what the crew knows") and read as in-world records only. — not checked (site copy, outside `prime/`)
- The Nexus holds settled reference only. Active events, such as the thefts, get no Nexus entry until they are past. — not checked
- FIA voice is observational. Fleet does not know a coherent network exists, and the files never name it as a known threat. — **in repo** in part ("Fleet Intelligence can't match... a private house mark")
- The gate passcode is flotsam&jetsam, which reads as Mirt's personal credential. Gold is Bridge clearance; Above Bridge sits higher. — **in repo** (one "flotsam" hit; Above Bridge clearance in use)

### Terminology
- "Monolith" is the colloquial field term. The formal Order and Above Bridge term is **Ortholith**, which marks the thing as "not a normal monolith structure." FIA documents use Ortholith. (Settled at turn 98, replacing Resonator and then Stele.) — **in repo** ("Ortholith is the Order's word for a Monolith"; Ortholith in fr-022, wm-003, wm-006)
- Cadets learn of the Watchers in SJA adventure 3 or 4 but do not learn their full scope. — not checked

### Archive structure
- File prefixes are by category, with gaps in the numbering: FR (Field Reports), LG (Logistics), WM (World Monitoring), SA (Strategic Assessment), zero-padded. — **in repo** (`restricted/` has fr-, lg-, wm-, sa- files)
- Final archive (turn 75): fr-005, fr-016, fr-022, lg-003, wm-002, wm-003, wm-006, sa-002, sa-005. fr-014 (chart-theft pattern) and lg-019 (recurring-mark registry) were deleted. — **in repo** (`restricted/` has these 9 case files)
- Chart thefts stay out of the archive because they are live in play. — **in repo** (no theft file in `restricted/`)
- Direct network mentions survive in two files only: the Strake relief file (wm-002) and one unrelated symbol incident (fr-016). — **in repo**
- No hover-reveals anywhere. Text is either plain or redacted, with partial redaction where needed. — **in repo** (no `title=` reveals in `restricted/`)
- Gate and archive are named "Fleet Intelligence Archive" (renamed from "Classified Archive"). — **in repo**
- A wrong passcode leads to a disintegration page: a 3-2-1 countdown with a zap sound, then a reprieve under Academy Regulation 17.2(b), because Form 44-C (Authorisation for Disintegration of Enrolled Personnel) was never filed. — **in repo** (`restricted/disintegration.html`)
- Nothing may appear in the archive before it happens in play. Examples: the H'Catha meteorite (SJA-03), Vocath supply-chain analysis, the graduation strike force (SJA-04). — **in repo** in part (no H'Catha file in `restricted/`)
- files.html is data-driven from an ARCHIVE array. — not checked (site plumbing)

### FIA lore content
- Registry worlds use gappy numbers (turn 75): W-008 Aethris, W-021 destroyed (Fonains, name illegible, fragment in fr-022), W-034 an unnamed natural Zenith, W-047 Vetharra, W-052 Kaldris (collapse variant, "control case"). Further entries are Above Bridge restricted. — **in repo** (wm-003 lists W-08, W-21, W-34, W-47, W-52)
- Toril shows no Zenith activity and is off the registry. — **in repo** (no Toril row in wm-003)
- The Aethris manufactured Zenith happened in Cycle 1490. The Prism Ascendant is "still recording," and one survivor escaped. — **conflicts** (repo: "The ritual is incomplete: the Fortuned need Sol to finish it." "Cycle 1490" is not in repo)
- wm-006 calls the Prism Ascendant the only documented Ortholith produced by a deliberately engineered Zenith, "a proof of concept." The Misfortuned were the ritual's focal points. — **in repo** in part (Prism Ascendant and Misfortuned present in `prime/`)
- A Watcher extracted Sol from Aethris against the Order's "preserve worlds, not individuals" remit; Korey stated this as context. In the archive it is an oblique allusion in wm-006, with the operative's code left as a plain block redaction. — **not in repo** under `prime/` (the phrase is only in BACKLOG.md and this inbox)
- fr-022 (turn 74 to 75): Fleet knows the fragment is Ortholith material because a Watcher was at the recovery. It flags two unprecedented features: it is black, and it is shattered (Ortholith material is not destructible by any known process). It is held in containment at a redacted site that is not Caelestis. Players may guess Strake; that guess is wrong. The file stays short. — **in repo** (fr-022: "deep black", "shattered", "retained in containment at")
- The fragment is one of many from Fonains' destroyed Monolith and is **not** Boogie's piece. Boogie may find it and consume it. — **in repo** in part ("Boogie's shard when retrieved"). Note: later canon has Boogie's own shard come from the broken Monolith through Vocath's line, before V001 (session-rulings).
- fr-016 is one isolated incident: a pressed wax disc bearing the mark, recovered years ago from a redacted source, with no match in the Bridge registry and no related incidents. — **in repo**
- The mark is an **eye inside a ship's wheel**, a subtle nod to Vecna's hand-and-eye symbol (Korey supplied the image, turn 86). It looks almost like the Fleet Intelligence seal, which leaves its origin ambiguous. — **in repo** ("Eye In Wheel" in fr-016; eye-in-a-wheel across `prime/`)
- The mark belongs to the network, and Vocath is not network; the network used his grudge. — **conflicts** (repo: "The eye-in-a-wheel is his own merchant mark"; locked in memory canon as Vocath's merchant symbol)
- Vocath is a mercane operating off-script. — **in repo** (mercane hits alongside Vocath)
- sa-002 is a Celestial Phenomena Registry (turn 83 to 85): six selected entries, Cycles 1481, 1485, 1486, 1488, 1489, 1491. Fleet logged the events but not their cause, which is unknown or of no concern to Fleet. — **in repo** (repo adds SYS- labels and Academy-intake notes)
- Entry 1486 is Casey's tie: the starfall meteor he and Polly witnessed, with trajectories surface witnesses called "deliberate." — **in repo** (sa-002 1486). Later canon: the meteor fell on Casey's home world (memory).
- Entry 1489 is Gregory's tie: a brief aurora over the "Cogfast Enclave" with synchronised activity among mechanical installations. Cogfast was a placeholder name for Gregory's origin. — **conflicts** (repo `restricted/sa-002.html` still reads "Cogfast Enclave — SYS-01"; memory canon and BACKLOG.md: "Gregory is from Toril... no Zenith is tied to his origin")

### Cosmology Korey stated (turn 84)
- Axioms are the pillars of reality. Vecna is trying to usurp one by applying cosmological pressure. — **in repo** (spine and vecna.md frame Vecna's climb toward the Convergence seat; session-rulings: the Ascension still to come is his climb to Axiom)
- The pressure degrades reality and ripples from the top down; mortals downstream feel small effects. — **not in repo** as a stated mechanism (memory canon calls it the "weather of reality"; only BACKLOG.md and an inbox mention it)
- One effect is anomalies in non-living things, such as Gregory. It is not a known field of study in player context. — **not in repo** (no "non-living" or "inanimate"). Later canon reframes Gregory as a paracausal Reach item (memory).
- Another effect is damage to celestial bodies. Astra (then "Virex Astra", name pending) is a sentient celestial body partly destroyed by the ripple. — **in repo** in part (Astra Virex in spine, polly.html). Memory canon: what wounded Astra "still needs precise wording."
- Astra's fragments found mortals it could speak to. It entices them as a patron to restore it, without saying so directly. — **in repo** (Astra as Casey's true patron)
- Casey and his brother Polly (the voice Casey hears) are bound to Astra. Casey is compelled to seek out the stars and commune with them. — **in repo** (polly.html, zerathis.html)
- Astra's goal: use those bound to it to form "constellations" with other celestial bodies, so it recovers, grows, and is never wounded this way again. — **in repo** (Starchild tethers, constellations in spine)
- Viren is Polly's destination, not the site of Casey's event. — **in repo** (Viren in spine and plot-hooks)

### Side quest
- The Cache at Cairn Station (asset code DCO-1490-B-7) was dropped as too tied to the network. It was replaced by a slow-burn, pirate-flavoured side quest: a lost waystation consumed by an astral dreadnought, with a redacted stored device. — **in repo**, reshaped (see the next items)
- Side-quest station named **Strake Station**. Its anomalies come first (fr-005). Its final transmission (lg-003, turn 71) reports an "unidentifiable signature, mass reading inconsistent with vessel profile... closing slow," and no hostile contact. The DM knows it is the dreadnought. A standing order and memorial follow (sa-005). — **conflicts** (repo: **Cairn** is the silent post and the mass signature is Cairn's report; Strake "remains open, crewed")
- The relief vessel *Bellwether Crow* met the network en route (turn 70 correction): a small, fast craft bearing the mark attacked, the engagement resolved, and the Crow continued to Strake. Then silence; the Crow did not return. The network thread is a real lead that does not explain the loss. — **conflicts** (repo wm-002: the Crow "returned under own power by way of Strake, well behind schedule"; memory canon still says "that crew didn't return")
- **Clint Dashforest**, a Bellwether Crow crewmate, was lost overboard in the network engagement, drawing the boarders' fire to clear the deck. He is an easter egg tying Caelestis to Korey's other campaign. — **conflicts** (repo clint.html: "he seized the boarders' own craft and broke away with it." Memory canon still says "lost overboard," with psychic wind carrying him to Fonains)
- NPC lead: Quartermaster Halix Verrow. Puzzle lead: cartographer Maren Tarroway (SJN-2417, out of sequence, "not confirmed lost"). The lost vessels are the *Mendren* and the *Quivering Lark*. — **in repo** in part (Verrow is "Strake Station · quartermaster"; *Mendren* and *Quivering Lark* are in `restricted/fr-005.html`). Tarroway is reshaped: see Superseded.

## Superseded
- 21 files in five blocks → 13 → 11 in four blocks → category prefixes → 9 files (fr-014 and lg-019 cut at turn 75), as in the repo.
- "Block I — Cairn Station Operation" grouping → files scattered across sections so no block reveals the thread.
- Cairn named outright in SA-4474 → replaced by asset code DCO-1490-B-7 and an unlabelled map → the cache concept dropped entirely.
- A dedicated Watcher file → two allusions only.
- Watchers as "unattributed witnesses" → a known Order partner.
- The fragment came from LORN's case → the Order recovered it at the W-02 site → (turn 75) a Watcher was at the recovery; W-02 renumbered W-021.
- Operative LORN carrying a manifest, recognition protocol and wax discs (fr-016) → one isolated wax disc, no operative.
- The fragment was "the rest of Boogie" → one of many fragments, not Boogie's.
- The SA prefix meaning "Spelljammer Academy" → SA meaning Strategic Assessment.
- Registry W-01 to W-06, with Toril as W-06 "pre-Zenith, HIGH" → gappy W-008 to W-052, Toril removed.
- sa-002 as the Directive ("WHEN THE CONVERGENCE IS COMPLETE", "PROCEED") → a fragmented "observe and report, do not engage" directive → the Celestial Phenomena Registry.
- Casey's registry entry as a Viren/H'Catha luminous phenomenon → the 1486 starfall meteor.
- "Resonator" as the formal term → "Stele" (dropped: homophone of steel and steal at the table) → **Ortholith**. Claude's other offers were Menhir, Betyl and Omphalos.
- Eye above a broken wheel → eye inside a ship's wheel.
- Strake's last contact reporting an eye-and-wheel hostile → an unidentified mass signature; the network encounter moved to the Bellwether Crow en route.
- Strake as the lost station and the Crow lost → (repo) Cairn is the lost post, Strake is the open last stop, and the Crow came home.
- Clint Dashforest lost overboard → (repo) seized the boarders' craft and broke away; psychic wind carried him to Fonains (memory canon, clint.html).
- Maren Tarroway as a missing survivor, shown first by hover-reveal and then as the one unredacted memorial name → Claude offered uniform redaction (SJN-2417 out of sequence) or a footnote, leaning to redaction → (repo) "M. Tarroway" is alive on Strake, he/him, keeper of the Cairn approach packet; sa-005 lists SJN-2401 to 2408 with no 2417.
- "Cogfast Enclave" as Gregory's origin → Toril (working decision in memory canon; BACKLOG.md flags the sa-002 entry for a fix).
- "Virex Astra" → Astra (Astra Virex, one entity).

## Open
These are open as of the chat's end (turn 101).
- The map Drive file ID placeholder.
- What the stored device at the waystation is (redacted on purpose). Repo: Tarroway's secure-storage item, "Contents open."
- sa-005: uniform redaction or footnote. Korey had not picked when the chat ended. (Repo resolved it differently: see Superseded.)
- The Cogfast Enclave name and its redacted sphere were left for Korey to swap. (Still live: repo sa-002 has Cogfast.)
- What exactly wounded Astra. The chat says Vecna's ripple; memory canon says the wording is still unsettled.

## Documents produced
- Restricted archive HTML files: several revisions, delivered as chat outputs, including files.html, index.html (gate), disintegration.html and the nine case files. **Reached the repo** in later form (`restricted/` has 9 case files, files.html, index.html and disintegration.html).

---

## Tally
- **not in repo:** 18 fully. About 4 more are partly in repo, with one part missing (shroudstone crossover, three-resolution method, Watcher tone, geographic leash).
- **conflicts:** 6 (monolith-as-ink mechanism; Resonator vs Ortholith; archive file set; Aethris Zenith complete vs incomplete; eye-wheel as network mark vs Vocath's house mark; Strake/Cairn/Bellwether Crow roles)
