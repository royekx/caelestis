# Backlog

Everything still to rule on or fix before the material is written into pages.
This is the planning layer: open questions live here and nowhere on a page. See
[README.md](README.md) for the flow and the writing rules.

Built 2026-10-25 from the chat sweeps, the module sweep, the working drafts,
and an audit of every published prime page. Truth ran in this order: Korey's
rulings of the day, his saved decisions, timeline canon, drafts, chat sweeps
(later beats earlier), published pages.

## Item types

- **decide**: Korey rules. The item names the options and every page it
  touches. When one question touches several pages, the full item sits on one
  page and the others point to it.
- **fix**: a page line is wrong or stale. Checked against the current page.
- **drop**: retired material to remove.
- **add**: a settled fact missing from its page, written the way it will read.

Work order: rule the cross-cutting decisions first, then go file by file. A
ruled item becomes a STAGING.md entry; `add`, `fix` and `drop` items move to
staging once Korey has read and accepted them.

## Sections

| Section | Covers | decide | fix | drop | add |
|---|---|---|---|---|---|
| Cosmology | cosmology/, glossary/, chart/ | 23 | 17 | 0 | 24 |
| Realms | realms/ except Fonains; a new Oerth page | 39 | 32 | 3 | 46 |
| Fonains | realms/fonains.html, the Fonains Canon Reference doc, the timeline's Fonains lane | 16 | 12 | 1 | 29 |
| Timeline | the rest of timeline.json | 4 | 4 | 0 | 0 |
| Factions | factions/ | 24 | 18 | 2 | 38 |
| Campaign | campaign/: spine, ascension, colony, voyages, plot hooks | 29 | 39 | 5 | 34 |
| Dossiers | dossiers/ | 34 | 38 | 0 | 45 |
| Crew | crew/ | 30 | 10 | 0 | 64 |
| Artifacts and vessels | artifacts/, vessels/ | 17 | 23 | 0 | 42 |
| Rules | rules/, statblocks/, tracker/ | 19 | 10 | 0 | 12 |
| New pages | 14 proposed pages, the hub, notes/ | 22 | 3 | 2 | 32 |
| Automation and tracker | the session pipeline and tracker alternatives | 11 | 1 | 0 | 0 |
| Repo and process | page conventions, the record's schema, process docs, deploy | 6 | 3 | 0 | 0 |
| **Total** | | **274** | **210** | **13** | **366** |

The repo refactor has its own draft: [repo-refactor.md](repo-refactor.md).

## Cross-cutting decisions

Each settles items on several pages at once. Rule these first.

1. **Residue piece counts by Axiom.** Saved decisions: Dissolution 2, Transformation 3, Boundary 5, Convergence 7. Artifact pages and a later chat: Boundary 2, Dissolution 3, Transformation 5, Convergence 7. Touches cosmology, glossary, A.T.L.A.S., the Runekeepers' and Transformation fragments, rules, the hub, and whether Wan and Tu carry a whole fragment as a first key. (The crew/artifacts merge applied the saved decisions; items marked *(counts)* flip if the other split wins.)
2. **Aperture or Atrium.** The name of a world heart's entrance. Saved decisions say Aperture; the latest chat renamed it Atrium. Seven pages.
3. **Does opening a heart need a Monolith?** Settles priming versus opening and why N'ghathrod needs Zeniths. Saved decisions say both ways in different places. Cosmology, glossary, chart, rules, N'ghathrod, the Seekers, timeline.
4. **The Figure and its nodes.** Fifteen single hearts or three-world systems; whether any node stands today. Glossary, chart, realms index, ascension, timeline.
5. **Act structure and where the Citadel sits.** The spine's four arcs against the timeline's acts; N'ghathrod in Arc 2 or 3; the Citadel in Arc 3 or 4. Spine, colony, ascension, timeline, N'ghathrod.
6. **N'ghathrod's five centuries.** Nothing covers the time between the crash (about 500 years ago) and the exile from Glyth (about 60 years ago). Also sets when the five lieutenants got their Holds. Nine pages say "a century".
7. **What the H'Catha meteor is and why Caelestis wants it.** The reason the H'Catha arc happens. Spine, H'Catha, Academy and Fleet.
8. **How the Seekers divide.** Every chapter worships Vecna under some name, or a faith wing and a method wing. Also reconciles vecna.md's "two bodies" with today's ruling that the Seekers are Vecna's followers. Seekers, deities, ascension, vecna.md.
9. **Astra, Astra Virex or Virex, and what wounded Astra.** Crew (Casey), dossiers, realms.
10. **The real elder brain.** Buried under the Barrier Peaks, or escaped. Timeline, realms/fonains, N'ghathrod.
11. **Which sphere holds Oerth.** One of the five charted spheres or a sixth. Realms, chart, cosmology, the new Oerth page.
12. **Runes 17–19 as Anchors (Hearth, Threshold, Horizon)** and the Wayfind rules that hang on them. Crew (Tumak), rules.
13. **Can a taken person be released?** Tadpole removal, the real N'ghathrod's death, or both. Rules, N'ghathrod, colony.
14. **Fonains–Caelestis offset.** The timeline puts Fonains Session 28 about five months before Caelestis now; older notes say Caelestis is "around" Session 28. Timeline, Fonains doc, campaign.
15. **OSTEKK-6 as sole survivor.** Saved decisions say so; the V005 record has Gregory waking OSTEKK-2. Dossiers, vessels.
16. **The tracker and session ingest.** Keep the repo JSON record and in-chat runbook, or move to an alternative. See the Automation and tracker section.
17. **Dossier tab names and "Open" subsections.** Which tab set every dossier uses, and whether open questions may sit in a DM page's notes at all. Every prime dossier. See the Repo and process section.

## Second looks

The merges applied the truth order mechanically. In these cases a saved
decision beat a later chat that had marked it superseded. Overturn any where
the later chat was the real ruling:

- Why Tarroway's tables fail (the psychic wind).
- Constellation designations (CON-01, CON-02).
- Vth'oramu's meaning ("the passage to a new home").
- Clint going overboard and the psychic wind carrying him.
- A heart opens only where a Monolith stands (the Campaign section applied this; the Cosmology section and the Rules section keep it as decision 3).

## Player record flags

Nothing from prime goes into `data/`. These need a hand edit, if Korey agrees:

- `data/items.json` has Boogie holding the whole derelict logbook; the settled version is half.
- `data/npcs.json` calls Mirt "the head of Caelestis".
- `data/sessions.json`, `quests.json` and `items.json` call OSTEKK-6 an autognome; OSTEKK units are automatons.

## Still coming in

Five chat sweeps are partial and resume after the read limit: Casey (from turn
101), Sol (203), Tumak (151), Campaign Planning (37) and New campaign idea (70).
Items from their unread stretches carry *(sampled)* or *(snippet)* tags.

# Cosmology

Items for `cosmology/index.html`, `glossary/index.html` and `chart/index.html`.
Order under each page: decide, fix, drop, add.

### cosmology/index.html

- **[decide]** Residue counts by Axiom
  Two splits are in circulation for the seventeen pieces.
  (a) Dissolution 2, Transformation 3, Boundary 5, Convergence 7. Memory holds this, and it fits two other facts: the Dissolution fragment's two pieces sit in the twins and make "three poles for the first time", and A.T.L.A.S.'s Boundary piece points toward four siblings.
  (b) Boundary 2, Dissolution 3, Transformation 5, Convergence 7. The page table, the glossary ("split 2 / 3 / 5 / 7") and `artifacts/runekeepers-fragment.html` ("all three pieces") use this, and a later chat sweep restates it.
  Memory ranks higher, so (a) is the default unless Korey says otherwise. Touches: the residue table and the line "A Boundary piece points toward its one sibling" on this page; glossary "Residue"; `artifacts/atlas.html`; `artifacts/runekeepers-fragment.html`; the twins' Zenith text on `realms/wayfinders-homeworld.html`.
  src: memory-canon (campaign-canon, prime-number counts; the Zenith "three poles"); chat-cosmic-campaign-structure § Cosmology redesign

- **[decide]** Whether opening a heart needs a Monolith
  (a) A heart can be opened only where a Monolith stands, so N'ghathrod seeds Zeniths and waits ("Zeniths are the cheap half, Atriums the rare half"). Memory marks this locked.
  (b) Opening works on any world, and a Monolith only licenses a link between two opened hearts ("a Monolith licenses a link and opens nothing"). The page says this (§ The Atrium: "Possible on any world, with or without a Monolith"), and a later chat sweep lists (a) as superseded by it.
  Rides on the same ruling: the open split of "priming" from "opening", so that only cross-Weave worlds need a heart dungeon. Touches: § The Atrium and the Found / opened / linked table here; glossary "Found / opened / linked"; chart NODES ("three primed worlds"); `rules/`; timeline "Saturating worlds" ("seeding Zeniths so Monoliths stand where hearts can be opened").
  src: memory-canon (open-decisions, "Locked this pass"; audit line on priming vs opening); chat-cosmic-campaign-structure § Superseded

- **[decide]** What astral projection reaches
  Memory settles that the cosmos is the Material Plane and the Astral Sea is material space inside it (the page already says "material space between worlds" in § Other Planes). The page also says "Astral projection sends the traveler into the Astral Sea itself", which reads as if the Sea were the Astral Plane.
  Options: the Astral Plane overlays the Sea, so a projected traveler crosses it without a hull; or reword the projection line so it reaches the Astral Plane and leaves the Sea out.
  src: memory-canon (campaign-canon, Planes); framework § Cosmic structure

- **[decide]** Name for the center
  Korey dislikes "the center". Offered: the Cradle, the Wound, the Origin, the Nadir. Touches this page, the glossary, chart and every page that says "the center".
  src: framework § Open; memory-canon (open-decisions, names for the center and SPH-01)

- **[decide]** Names for the spheres and designated systems
  SPH-01 included. Listed in the page's § Open.
  src: framework § Open

- **[decide]** New name for the world-heart network
  The page uses "lattice"; memory says "heart network" and "the network" are overused. Tied to the Figure/lattice decide under glossary below.
  src: framework § Open; memory-canon (campaign-canon)

- **[decide]** Keep or rename "residue"
  Memory: "the name 'Reach residue' may change".
  src: framework § Open; memory-canon (campaign-canon)

- **[decide]** How the Flow works
  How it is crossed, and how it relates to the Astral Sea's intensity, which memory says changes between systems and between spheres. Listed in the page's § Open.
  src: framework § Open; memory-canon (campaign-canon, Astral Sea intensity)

- **[decide]** Why SPH-01 holds pieces of three fragments
  Options on the page: the pieces were carried here over time, or it is an abnormal concentration.
  src: framework § Open

- **[decide]** Whether the four Axioms held their current configuration before the Reach
  src: framework § Open

- **[decide]** Echo planes per sphere
  Whether every sphere has a full set of echo planes or only some. (The second half of this open line, where the Reach-born gods' realms anchor, is answered by divine-rules; see the fix below.)
  src: framework § Open

- **[decide]** Whether a world's heart has a counterpart in its echoes
  src: framework § Open

- **[decide]** Why the center is worse for Reach-born gods
  Polarity explains why the center harms gods. The page says the approach is "most dangerous to gods born from the Reach", and divine-rules gives Reach-born gods a harsher row than later gods. What makes the difference is still unstated.
  src: divine-rules § Polarity; framework § Open

- **[decide]** Whether any god has ever forced its way onto a world
  Options: never; once, at a ruinous cost, with a dead god adrift in the Astral Sea as the proof; leave unanswered.
  src: divine-rules § Open

- **[decide]** Whether worship crosses the Flow
  Options: it crosses freely; or it does not, so Vecna's faithful in other spheres feed him only through a foothold in each sphere, and those footholds become targets.
  src: divine-rules § Open

- **[decide]** Whether any other Monolith carries Tharizdun's crystal
  Options: Fonains is unique; others exist and are unfound; a Seeker chapter is seeding them (inference).
  src: tharizdun § Open

- **[decide]** The four named weathers
  Fraying, Turning, Walling and Gathering are an unreviewed Crossing Companion proposal. Lock or cut before they go under the weather section.
  src: astral § Open

- **[decide]** Astra Virex's wound as a Seam
  The page states as canon that Astra Virex was wounded in a Transformation–Boundary Seam ("Caught in one rather than made by one"). Memory keeps "what wounded Astra Virex" open. Options: confirm the Seam; or move it to a draft and leave the page silent on the cause.
  src: memory-canon (campaign-canon, Astra; open-decisions still-open list)

- **[fix]** Where the Fonains Vanished went
  Page (§ Corrupted Monoliths) says: "It was corrupted, so it held locally; when it was destroyed, what it held was released onto the world. Those people exist." Replace with:
  "A corrupted Monolith is a tunnel to Tharizdun's prison. It redirects what it relays, sending existence to him instead of to the Core. The Vanished of Fonains went there. Scholars long guessed the Shadowfell, the most logical destination they had for displaced souls. The truth is worse: Tharizdun's prison has no map and no address in any known cosmology."
  src: memory-canon (campaign-canon, the Vanished; Tharizdun's goal); tharizdun § Corrupted Monoliths

- **[fix]** How the Fonains Monolith formed
  Page says "Shadow-influence shaped its Zenith, Tharizdun had a hand in both" (§ Corrupted Monoliths) and "The Fonains Zenith rose out of elemental upheaval and shadow corruption, with Tharizdun behind both" (§ Crossover with Fonains). Replace both with:
  "The Fonains Monolith formed corrupted. Five cultists held a ritual: four channelled the Princes of Elemental Evil, and the fifth held pieces of a black crystal, a Tharizdun artifact. The ritual was the Zenith, and Vecna nudged it, knowing it would be ridden. The Monolith manifested in answer, and the crystal replicated into it as it formed."
  src: memory-canon (open-decisions, Locked 2026-10-25); tharizdun § How the Fonains Monolith formed; session-rulings

- **[fix]** Tharizdun's prison is not an SPH-01 place
  § Other Planes says "The Princes of Elemental Evil and Tharizdun's chains are both SPH-01 problems for this reason." Keep the Princes; remove Tharizdun's chains. His prison has no address in any known cosmology.
  src: memory-canon (campaign-canon, the Vanished)

- **[fix]** Why pantheons cluster in spheres
  Page says "Pantheons gravitated to different spheres" twice (§ Pantheons and spheres, and § The Gods: "Pantheons gravitated to different spheres after the Reach"). Replace with the loop:
  "Pantheons cluster through a feedback loop. A god answers where it is believed in; answered prayer draws more belief; attention follows worship and worship follows attention. Over centuries the loop pulls a pantheon onto one world, then one system, then one sphere."
  src: divine-rules § Why pantheons cluster in spheres

- **[fix]** The approach to the center harms gods without destroying them
  Page says "The approach is lethal to anything." Change to: "The approach is dangerous to mortals, who can still cross it. It harms gods, worst of all the gods born from the Reach, and destroys neither."
  src: memory-canon (open-decisions, Vecna/gods 2026-10-25); divine-rules § Polarity table

- **[fix]** Reach-born gods' realms anchor by worship
  The page's § Open asks "Where the Reach-born gods' realms are anchored, given the sphere they settled in came after them." Close it: a god's realm anchors to the sphere where its worship is densest now, whatever came first. Remove that half of the open line.
  src: divine-rules § Realms

- **[fix]** Vecna's godhood is known; his plan is hidden
  § What the pantheons feel says he "is distributed across intermediaries who have never heard his name" and ends "The shape is legible. The author is not." Rewrite:
  "Vecna is an open god, worshipped under many names. The gods know he ascended on Oerth, know what he is god of, and have opinions about him. His worship is wide and thin, which makes him hard to locate. What they do not know is his plan: it runs through people who do not know whose plan it is, and most of it looks like other people's ordinary ambition."
  src: session-rulings; vecna § The two bodies, § What the gods think of him

- **[fix]** Every place carries a designation
  Page says "Systems Caelestis has not charted, such as the Wayfinders' homeworld and the Ascension world's, carry no designation." Replace: every sphere, system and world carries a designation, including uncharted and hidden ones. The Ascension World's system is SYS-05 and the Wayfinders' homeworld's is SYS-06, both in SPH-01. Player-facing material shows only what the crew knows.
  src: memory-canon (campaign-canon, placeholder designations); chat-organizing-framework § Superseded

- **[add]** Polarity: why gods stay off worlds
  Add to § The Gods as the rule for divine absence, and to § The center:
  "No god walks on a world in person. A god carries the same charge as a world's heart, and the two push apart like same-pole magnets. A god can push toward a heart, but the resistance grows with every step until going further is unbearable. Reach residue pushes back on gods the same way a heart does. An apparition or avatar carries too little of the god to be pushed, which is why gods act through avatars, visions, agents and champions.
  The center is polarity at its strongest. The First Heart is the deepest heart, so the push there is greatest. The center harms gods without destroying them."
  This replaces the retired "divine gate" wording.
  src: session-rulings; divine-rules § Polarity; memory-canon (open-decisions, Vecna/gods 2026-10-25)

- **[add]** Ascension flips a being's charge
  Add to § The Gods, under later gods:
  "A mortal who becomes a god takes on the divine charge and is pushed off the world they rose on. Vecna stood on Oerth as a lich; the moment he ascended, Oerth's heart pushed him away, and he has not stood there since. It is why he needs vessels to work his way toward the First Heart."
  src: divine-rules § Ascension flips a being's charge; vecna § History; memory-canon (Vecna/gods 2026-10-25)

- **[add]** Worship is power
  Add to § The Gods:
  "Worship is the source of every god's power, influence and reach. A god with no worshippers still exists but can do almost nothing. A god learns through its faithful: it knows what they see, report and pray about, and little beyond that."
  src: session-rulings; divine-rules § Worship is power; memory-canon (Worship ruling)

- **[add]** Concentration and reach
  Add to § The Gods as a two-column table:
  | | Concentration | Reach |
  |---|---|---|
  | What it buys | Force on one world | A foothold almost anywhere |
  | What it costs | Near-blind elsewhere | Thin everywhere |
  | Example | Tymora and Beshaba on Aethris | Vecna, across spheres |
  src: divine-rules § Concentration and reach

- **[add]** One god, many names
  Add to § The Gods: "A god worshipped on several worlds is one god under several names. Takhisis is Tiamat; Paladine is Bahamut. Krynn knows them by Krynn's names."
  src: session-rulings; divine-rules § One god, many names

- **[add]** How divine realms anchor
  Add to § Other Planes → Divine realms (the page has the partial form "anchored to the sphere their pantheon settled in"):
  "A god's realm is anchored to the sphere where its worship is densest. It moves only when that centre of worship moves, which takes generations."
  src: divine-rules § Realms

- **[add]** Vecna ascended on Oerth
  § A god is not taken omits the place. Add: "Vecna's ascension Zenith happened on Oerth, his homeworld. Its Monolith archived his mortality, and his followers keep it as their holiest site."
  src: session-rulings; vecna § History

- **[add]** Corrupted Monoliths are tunnels
  Add to § Corrupted Monoliths: "A corrupted Monolith holds what it takes locally, and what it holds is drawn on toward Tharizdun's prison."
  src: tharizdun § Corrupted Monoliths; memory-canon (Tharizdun's goal)

- **[add]** Vecna uses Tharizdun
  Add under § Corrupted Monoliths: "Vecna uses Tharizdun as a contingency, a battering ram he can point. It is use, not alliance, and each believes he is the one using the other."
  src: session-rulings; tharizdun § Vecna and Tharizdun

- **[add]** The Day of Chaos
  Add to § Crossover with Fonains: "The Day of Chaos is the day the four Princes of Elemental Evil enter Fonains together. The barriers between the planes break, and Tharizdun gets his chance to leave his prison. Shothragot, Tharizdun's avatar, named it in the Monolith's last hours: 'Wait for the day of chaos.'"
  src: session-rulings; tharizdun § The Day of Chaos; timeline "The Monolith breaks"

- **[add]** The weather of reality
  Add as a named section under Zeniths (the page covers Convergence strain without the name):
  "The weather of reality is an escalating pressure with no owner. It comes from an Axiom under strain, Convergence, loaded by Zenith after Zenith. Tharizdun's rifting feeds it, but the weather itself is Convergence strain and belongs to no one."
  DM note: rarely seen early; track it on the campaign view.
  src: framework § Vecna and his working; memory-canon (campaign-canon, weather of reality)

- **[add]** Convergence row: Rod piece and Lantern
  Add to the Convergence row of the residue table: Xanathar keeps one piece of the Rod of Seven Parts. The Lantern of Flourishing is Vaelorix's name for the Containment Engine, Fourth Series; the crew holds it now.
  src: memory-canon (campaign-canon, Rod holders; Lantern); chat-voyage-6-7-planning (Vaelorix renamed it)

- **[add]** Faelight spore specification
  The counter-spore plant spec lacks the name and the radius steps. Add (DM voice):
  "Faelight spore. A knuckled, colorless fungus with pustules. As a bonus action, a caster feeds it a spell slot and it releases a persistent Faerie Fire cloud: radius 10 ft (1st-level slot), 20 ft (2nd), 30 ft (3rd); lasts 1 minute; no concentration; no save; reusable. Anything that enters is coated, allies included: attacks against it have advantage, and it cannot benefit from invisibility or being obscured."
  src: memory-canon (campaign-canon, Faelight spore)

### glossary/index.html

- **[decide]** The Figure or the lattice, and what a node is
  One name and one model across glossary, chart, realms index and timeline.
  Name: "the Figure" (glossary, `realms/index.html`, `campaign/ascension/#figure`) or "the lattice" (memory, the timeline's "The lattice fills", the cosmology page). The network also needs a new name (see cosmology).
  Model: (a) fifteen hearts, three per sphere across five spheres, one heart per node (glossary, timeline); or (b) three nodes per sphere, each node a system of three primed worlds (chart NODES, e.g. SYS-09 holds w13, w14, w15; `realms/index.html`: "three linked systems in every one of the five").
  Also: the chart marks SPH-01's SYS-07 "claimed", SYS-02 "primed" and SYS-04 "damaged", and other spheres' nodes "claimed" or "primed", while the timeline has hearts opened and linked only from t 1.5. Rule whether any node stands today and what "claimed" and "primed" mean (this rides on priming vs opening).
  Touches: glossary "The Figure"; chart NODES; `realms/index.html` spheres section; timeline "The lattice fills" and "Hearts opened and linked"; `campaign/ascension/`.
  src: timeline.json; glossary "The Figure"; chart/index.html NODES; memory-canon (open-decisions, "the lattice of linked worlds")

- **[decide]** Found / opened / linked
  Whether opening needs a Monolith. Same ruling as the cosmology decide above; rewrite this entry to match.
  src: see cosmology/index.html

- **[decide]** The downward tithe
  "The downward tithe" (worship that pools in the taken instead of rising) sits awkwardly with the ruling that worship is what gives a god power (inference). Options: keep it as a named exception and say why; or reword it so it does not read as worship.
  src: session-rulings; glossary "The downward tithe"

- **[fix]** The Seekers
  Glossary says the Seekers "have never heard his name." The session ruling settles it: Vecna is an open god with a following under many names, and his followers are the Seekers. Rewrite:
  "The Seekers are Vecna's followers. Their chapters differ world to world and know him under many names; some of them name him and some do not. There is no shared glyph. Chapters recognise each other through the same account of a voice that taught them, the information-for-information trade rule, and the founding story 'we were taught how to ask.' Each chapter's symbol depicts its own secret, drawn so the subject is a void and only its surroundings show."
  This overrides the "two bodies" split in vecna.md (open faithful versus name-blind chapters); vecna.md and `factions/seekers.html` follow.
  src: session-rulings; memory-canon (campaign-canon, Seekers; open-decisions, Locked this pass)

- **[add]** Lich Vecna has changed his mind
  Entry says only "He has had an age to reconsider, and has." State the conclusion: Lich Vecna, his mortality archived in the Citadel, is changed, almost good-natured, and has concluded he was wrong.
  src: chat § Cosmology redesign

- **[add]** N'ghathrod is a Seeker chapter
  "The hands" lists the Seekers and the Vth'orama as separate bodies. Add: N'ghathrod is himself the largest Seeker chapter and the only travelling one, and he coordinates with the planet-bound chapters. He believes the voice is an elder brain.
  src: memory-canon (open-decisions, Locked this pass)

- **[add]** The First Seeker
  Add: Vecna is called the First Seeker. As a boy he was himself recruited by a voice.
  src: memory-canon (open-decisions, Locked this pass)

- **[add]** Polarity (new term)
  "Polarity. A god and a world's heart carry the same charge and push apart. The push grows as a god comes closer, until going on is unbearable. It keeps gods off worlds and away from the center. Avatars carry too little of a god to be pushed."
  src: session-rulings; divine-rules § Polarity

- **[add]** Worship (new term)
  "Worship. The source of a god's power, influence and reach. A god spends it as concentration (force on one world) or as reach (a thin foothold almost everywhere)."
  src: session-rulings; divine-rules § Worship is power

- **[add]** Corrupted Monolith (new term)
  "Corrupted Monolith. A Monolith that is a tunnel to Tharizdun's prison: it holds what it takes and sends it to him instead of to the Core. The only one known formed on Fonains." Also note the exception in "Archiving", which says "A Monolith holds nothing locally" without one.
  src: memory-canon (campaign-canon, Tharizdun's goal); tharizdun § Corrupted Monoliths

- **[add]** The Day of Chaos (new term)
  "The Day of Chaos. The day the four Princes of Elemental Evil enter Fonains together and break the barriers between the planes, so Tharizdun can leave his prison."
  src: session-rulings

- **[add]** The Passage (new term)
  "The Passage. N'ghathrod's mark: a circle with a tail ending in another circle. It gains a circle for every linked world, so it doubles as a count." Keep it distinct from the existing "passage" entries (the Monolith–Core channel, and the link between two opened hearts).
  src: memory-canon (open-decisions, Locked this pass)

- **[add]** The Ascension, placed
  The Ascension entry gives the sequence lich, god, Axiom without placing it. Add: the first steps are done. Vecna became a god on Oerth; "the Ascension" now names only his climb to an Axiom's seat, Convergence.
  src: session-rulings; vecna § Oerth

### chart/index.html

- **[decide]** Why Tarroway's timing tables fail
  (a) The psychic wind. Memory gives it as the canon cause, alongside Clint's crossing.
  (b) The Vth'oramu: the "patrol" his tables track is the dreadnought under command, which keeps no patrol pattern. `dossiers/vthoramu.html` and a later chat sweep say this and list (a) as superseded.
  Touches: Tetherbreak DM note here; `realms/strake-station.html`; `realms/index.html`; `dossiers/tarroway.html`.
  src: memory-canon (campaign-canon, Astral Sea travel features); chat-cosmic-campaign-structure § Superseded

- **[decide]** Lattice progress and node model
  Covered by the Figure/lattice decide under glossary.
  src: chart NODES; timeline.json

- **[fix]** Fonains note: Vecna knew
  Note says "Tharizdun corrupted the Monolith without Vecna's knowledge." Replace: "Vecna nudged its Zenith knowing it would be ridden. Tharizdun's crystal fused into the Monolith as it formed. Lola's Boys destroyed it." Keep the dragons line, which is already right.
  src: session-rulings; tharizdun § How the Fonains Monolith formed

- **[fix]** Krynn note: Eldree's egg
  Note says the aspect of Bahamut "reaches out through Eldree, a silver pseudodragon on Fonains." Change to "speaks through Eldree's egg on Fonains."
  src: session-rulings; realms/krynn.html

- **[fix]** H'Catha note
  Note says "Beholder toroid ruled by rival hives. The Spire took an adamantine meteor strike." Change to: "Beholder toroid ruled by ten solitary beholder rulers under the Sovereign Eye. An adamantine meteor struck the Spindle. Fourteen days out." Beholders follow 5e (solitary, paranoid); the 2e hive lore is rejected.
  src: memory-canon (campaign-canon, H'Catha; beholders follow 5e)

- **[fix]** Tyrant ship entry
  Kind says "Derelict, Toril orbit"; note says it "Holds the Containment Engine". Update: the crew holds the tyrant ship. The Containment Engine, Fourth Series (Vaelorix's Lantern of Flourishing), is out of Vaelorix's body and seated in the repair bay, and the ship is making the fourteen-day crossing to H'Catha.
  src: memory-canon (campaign-canon, Voyage 006 outcome; Lantern seated)

- **[fix]** Caelestis kind
  Kind says "Academy station, Toril orbit." Change to "Fleet station, Toril orbit." The Academy is about a fifth of Caelestis.
  src: memory-canon (campaign-canon, Mirt)

- **[fix]** How Clint reached Fonains
  The Crow site says "How he crossed is undecided" and lists "How Clint Dashforest reached Fonains" as open. State it: after the Bellwether Crow ambush, a psychic wind carried Clint Dashforest to SYS-04, and he reached W-21 Fonains before its Monolith appeared. Close the open line. (Whether he went overboard or took a craft is a separate decide in the Timeline section.)
  src: memory-canon (campaign-canon, Astral Sea travel features); timeline "Clint lands on Fonains"

- **[fix]** Realmspace travel line
  Says "Closed lane to the Tetherbreak sector." Change to "Charted lane to Strake Station; closed beyond it." Only Strake–Cairn is closed (the Tetherbreak entry already says so).
  src: chart lanes; realms/index.html lane table

- **[fix]** Center: why the approach harms gods
  The center's open list has "Why the approach harms Reach-born gods." Answer it in the note: polarity; a god and a heart carry the same charge, and the First Heart pushes hardest. Remove that open line. (Why Reach-born gods suffer more stays a decide; see cosmology.)
  src: session-rulings; divine-rules § Polarity

- **[add]** Glyth is hard to reach
  Note says only "Ringed and remote. Ten days out." Add: an outer world on a long orbit with a rare approach window; the Fleet bans approach.
  src: memory-canon (open-decisions, Taken King line)

- **[add]** Oerth
  No chart entry exists. Add Oerth, Vecna's homeworld, in a sphere of its own, once the sphere is ruled (see the Realms section § NEW: Oerth).
  src: session-rulings; vecna § Oerth

# Realms

Items for `realms/` pages except `realms/fonains.html` (see the Fonains section).
Order under each page: decide, fix, drop, add.

### realms/index.html

- **[decide]** Where Vetharra (W-47) and Kaldris (W-52) sit
  Options: SYS-07 or SYS-08 (both draft candidates); or Kaldris near SYS-03 as the "control case".
  src: framework § Open

- **[decide]** Names for CON-055, CON-312, the Astral waystation and the cantina
  All four carry designations or placeholders only. Touches this page, `realms/waystation.html`, `realms/cantina.html`, chart.
  src: chat § Open

- **[decide]** The English name of N'ghathrod's people
  Options: "the unthinned" (the page; Vth'ulhan); "the brainless-raised" (memory: a Glyth slur they took as their own name, and memory lists the slur as still open); "unculled" (a later sweep's form of the same insult). glyth-watcher.md also uses "pure-born" for the other side (illithids raised under an elder brain). Touches the W-07 entry here ("The illithid world that refused the unthinned"), `realms/glyth.html`, `dossiers/nghathrod.html`, glyth-watcher.md.
  src: memory-canon (open-decisions, N'ghathrod settled; still-open list); chat-cosmic-campaign-structure § N'ghathrod; glyth-watcher

- **[decide]** The Figure, three systems per sphere
  The spheres section says "The Figure needs three linked systems in every one of the five". Follows the Figure/lattice decide in the Cosmology section § glossary.
  src: the Cosmology section

- **[decide]** Why Tarroway's tables fail
  The Strake entry carries the same claim. Follows the Tarroway decide in the Cosmology section § chart.
  src: the Cosmology section

- **[fix]** Spheres are regions, not shells
  Page says "Five crystal spheres are designated." Change to "Five spheres are designated." Spheres are regions of the Astral Sea.
  src: framework § Cosmic structure; memory-canon (campaign-canon, cosmic model)

- **[fix]** Toril names the system
  W-01 says "The sphere's namesake world, two days out." Change to "The system's namesake world, two days out." Toril gives Realmspace its name; SPH-01 has no name yet.
  src: memory-canon (campaign-canon, cosmic model; SPH-01 name open)

- **[fix]** Joffrey's mapping is recent
  The Caelestis card says "Joffrey has spent a year mapping routes to it from inside operations." Joffrey was taken in the Bellwether Crow ambush about a year ago, stayed himself for months while the taking worked, and only recently finished converting. Change to: "Since his conversion finished, Joffrey has been mapping routes to it from inside operations."
  src: memory-canon (open-decisions, "Operative resolved")

- **[fix]** H'Catha card
  Card says "Beholder toroid; eight rival domains and an adamantine meteor", "Six of the eight domains hold a port at the Spindle's base", and "landed on a seam, which is why it is still there". Rewrite to match the hcatha.html fixes below: ten domains, one ruler each, bound under the Sovereign Eye they dreamt together; ports spread across the world; the meteor mined in an occupied, skirmished area.
  src: memory-canon (campaign-canon, H'Catha supersedes eight domains; refinement; decisions)

- **[fix]** Glyth card
  Card ends "by colony reckoning it is not an enemy — only a door that closed", framing a visit as open. Glyth cast N'ghathrod's people out and is kept unreachable. Align with the glyth.html fixes below.
  src: timeline.json ("Exile from Glyth"); memory-canon (open-decisions, Taken King line)

- **[fix]** Fonains card: Vecna knew
  Card says "Vecna encouraged the Zenith, Tharizdun corrupted the Monolith that answered it". Change to: "Vecna nudged the Zenith knowing it would be ridden; Tharizdun's crystal fused into the Monolith as it formed."
  src: session-rulings; tharizdun § How the Fonains Monolith formed

- **[fix]** SYS-05 and SYS-06 belong to SPH-01
  The Ascension World (SYS-05) and the Wayfinders' homeworld (SYS-06) both sit under the "Untethered" filter. Move both under SPH-01. The Wayfinders' entry stays marked hidden.
  src: vecna § Oerth; memory-canon (campaign-canon, Lunarfoot in Caelestis's sphere)

- **[fix]** Fonains and Krynn are ongoing
  Spheres table says "The Fonains and Krynn campaigns both took place here." Change to "take place here." Krynn's present is level with Caelestis now, and Lola's Boys continues.
  src: session-rulings

- **[drop]** Odds
  Page says "Odds is the plasmoid bartender a crew is likely to meet on it." "Odds" is retired: Ryeback absorbed every interaction planned for Odds, and the name is on the spelling list as a mishearing. Remove the line; the bartender question is a decide under cantina.html.
  src: memory-canon (campaign-canon, Key NPCs; spelling list)

- **[add]** World awareness
  Add to the worlds register: "Every world is Aware, Read-in or Unaware of space travel. Low-grade contracts sit on Aware worlds. Work on Unaware worlds is covert: ship-shaped hulls land at sea and come in through ports, and fugitive retrievals run in the Men in Black style. Watchers issue contracts and tips to head off trouble before it reaches a Zenith."
  src: chat § World awareness; memory-canon (World awareness)

- **[add]** World-record template
  DM voice. Each world's base record holds: name; one-line physical description; peoples; how it works; awareness (Aware, Read-in, Unaware); who speaks for it; an open fact; a rumour; a rabbit hole; hooks.
  src: chat § Cosmos texture; spine.html Open development

- **[add]** Hostile but navigable
  "Hostile worlds can be navigated; unified ones cannot. H'Catha is enterable because its beholders are divided. Glyth is closed because it is one civilisation." Fits here and on glyth.html.
  src: chat § Cosmos texture; memory-canon (Taken King line)

- **[add]** Exandria
  Add a registry line: "Exandria. A world with none of the Vecna history Critical Role gave it, before Vox Machina and the Mighty Nein." Sphere and system unassigned.
  src: memory-canon (open-decisions, Vecna/Tharizdun 2026-10-25); vecna § Oerth

- **[add]** Oerth card
  See § NEW: Oerth below.

### NEW: Oerth

No page or card exists. It lands on a new `realms/oerth.html`, a card on `realms/index.html`, and an entry on the chart.

- **[decide]** Which sphere holds Oerth
  Options: one of SPH-02 to SPH-05; or a sixth sphere (the cosmos is about five to six spheres). If a sixth, `cosmology/index.html` § Structure ("Five spheres are known and charted") and the realms index ("Five spheres are designated") change. Also open in vecna.md: how the crew could reach Oerth's sphere, and how late.
  src: session-rulings; memory-canon (campaign-canon, cosmic model); vecna § Open

- **[add]** Oerth
  "Oerth is Vecna's homeworld, in a sphere of its own. It is a darkest-timeline world: the heroes failed, Vecna ruled as a lich and was never stopped, and his hold there is the strongest anywhere. He ascended on Oerth through a Zenith, and its Monolith archived his mortality; his followers keep that Monolith as their holiest site. Vecna's divine realm is anchored to Oerth's sphere. Becoming a god gave him the same charge as Oerth's heart, and the world pushed him off; he has not stood on it since."
  DM note: Oerth is reachable, and a visit should be horrible.
  src: session-rulings; vecna § Oerth; memory-canon (Vecna/gods 2026-10-25)

### realms/realmspace.html

- **[fix]** Toril names the system
  W-01 row says "The sphere's namesake world." Change to "The system's namesake world."
  src: memory-canon (campaign-canon)

- **[fix]** H'Catha row
  Row says "Beholder toroid ruled by rival hives." Change to "Beholder toroid; ten rival beholder rulers under the Sovereign Eye." Beholders are solitary and paranoid; the 2e hive lore is rejected.
  src: memory-canon (campaign-canon, beholders follow 5e)

- **[add]** Garden (W-09)
  Row says only "A cluster of linked bodies turning as a set." Expand: "An asteroid chain bound together by one vast plant. Vine-bridges run between the rocks; claim-families hold them and trade by barter; there is no government. The Fleet keeps nine beacons there."
  src: chat § Graduation board contracts

### realms/toril.html

- **[decide]** Gregory's anchor on Toril
  Options: Lantan, home of "Gregory Prime"; or the Cogfast Enclave the page drafts.
  src: chat-voyage-6-7-planning § Open

- **[fix]** Toril names the system
  Page says "The sphere's namesake world" (subtitle) and "the sphere's namesake" (body). Change both to "the system's namesake".
  src: memory-canon (campaign-canon)

- **[add]** Gregory is from Toril
  The page offers only the Cogfast lead. Add: "Gregory is from Toril. He reached Caelestis on a cargo ship, and no Zenith is tied to his origin." (Working decision in memory.)
  src: memory-canon (campaign-canon, Gregory); chat-voyage-6-7-planning

- **[add]** The Lantern's pull
  "The Lantern of Flourishing pulls Gregory toward Toril. In Toril orbit the pull points straight down at the world."
  src: memory-canon (open-decisions, Voyage 007 intent); chat-voyage-6-7-planning

### realms/caelestis.html

- **[decide]** What the secret sliver of Caelestis is
  Seeds: the office that decides what goes into the Brig; an Order liaison; what the station was before it was a school.
  src: astral § Open; memory-canon (campaign-canon, Mirt)

- **[decide]** Who renews the Forbiddance while Saerthe is away
  Saerthe renews the Forbiddance nightly on a 30-day cycle, and he also holds the tyrant ship's helm at H'Catha and casts for the Flighty Foundling (inference: he cannot do both). Options: a deputy renews the ward while he is away; or another caster holds the Forbiddance.
  src: memory-canon (campaign-canon, approach to H'Catha; Flighty Foundling); realms/caelestis.html

- **[fix]** Mirt runs the Academy only
  Page says "Staffed and run by the Caelestis Academy & Fleet. Mirt is its headmaster." Change to: "Mirt is headmaster of the Academy. The Fleet Corps and the Bridge operate outside him." Mirt is a well-known adventurer who knows the Astral Sea and has drawn ire over the years; Caelestis protects him and keeps him quiet, so he is also stuck there.
  src: memory-canon (campaign-canon, Mirt); astral § Caelestis structure

- **[fix]** The station's proportions
  Page describes "two functional wings". Add the proportions: the Academy is about a fifth of Caelestis, the Fleet Corps about three-quarters (a part the crew has not seen yet), and the remaining sliver is secret.
  src: memory-canon (campaign-canon, Mirt); astral § Caelestis structure

- **[fix]** Joffrey's window
  Page says Joffrey "has been mapping routes to it from inside the operations wing for a year." Change to a recent window: he was himself for months after the Bellwether Crow and only recently finished converting.
  src: memory-canon (open-decisions, "Operative resolved")

- **[fix]** The wardrobe and the voice
  Page says "why Polly could reach him there" and "Mirt has been keeping a piece of Astra's network in his bedroom". Change to "why Astra Virex, in Polly's voice, could reach him there" and "a piece of Astra Virex's reach". The wardrobe is one of Zerathis's tethers. ("Network" is a retired word.)
  src: memory-canon (campaign-canon, Casey Geim)

- **[add]** Caelestis stretched thin
  Add as the station's current pressure: "Caelestis is stretched thin. There are more Zeniths, more Watcher requests for Fleet help, a whiff of an illithid sect, and movements at the sphere's edge. Vocath sees the thinning and uses it to stress the Academy."
  src: timeline "The Fleet stretched thin"; memory-canon (open-decisions, Voyage 007 intent)

### realms/hcatha.html

- **[decide]** What the rulers can see
  (a) The Sovereign Eye lets every ruler see all, so none can act openly against another (memory, "H'Catha sovereign", which supersedes earlier options).
  (b) Each ruler sees only its own domain, day and night (astral § The Pact, a later turn).
  src: memory-canon (campaign-canon, H'Catha sovereign); astral § The Pact

- **[decide]** Whether the per-ray terrain effects survive
  The current page ties a terrain effect to each ruler's eye ray across eight domains. With ten domains and death and disintegration back in play (see fix below), rule whether every domain keeps a ray-based terrain effect.
  src: astral § The Pact; page § Terrain effects

- **[decide]** Whether the Eye actually enforces daylight contracts
  People believe it does ("light-sworn"). Rule whether it is true.
  src: astral § Open

- **[decide]** The Watcher's name
  Placeholder Nereth Vaul (a triton); alternatives Maris Ilune, Sefa Corrath. Must differ from Ondessa. She lives near the rim, in the fog.
  src: astral § Open; chat-voyage-6-7-planning § Open; memory-canon

- **[decide]** The Rival's name
  The page lists "The Rival · Name open" (Fear, dread carried in the fog). The spine also uses "the Rival".
  src: chat § Open; spine.html

- **[decide]** What the meteor's Ortholith matter is
  Options: valuable rock; a Monolith fragment (the glossary: "a Monolith fragment, shed or aimed"); bait.
  src: chat § Open; glossary

- **[decide]** A name for the Sovereign Eye
  Options: the Unlidded (locals), the Overgaze (courts), Ahm-Vauth (rulers). The lean is all three, by speaker.
  src: astral § Open

- **[decide]** Who betrayed Ondessa, and who backs the occupiers
  Lean: a neighbour, Ulmorrow or Gorrathax.
  src: astral § Open

- **[decide]** How deep Vecna goes on H'Catha
  Lean: the founding only (a quiet voice taught the rulers the dreaming method), with "The Eye looks one way more than they know" held in reserve. Memory's options: all the rulers, one, or only the original.
  src: astral § Open; memory-canon (H'Catha leaning)

- **[decide]** The Underground
  Options: rare pockets only (caves, the Old Courses); or a larger hidden underworld (Korey finds that too Underdark-like).
  src: astral § Open

- **[decide]** The Edicts
  Proposed table: Gorrathax, nothing written destroyed; Ondessa, no wheel may turn; Ulmorrow, no mourning aloud; Kurrzot, no running; Oszrax, no covered faces; Saelvex, no gift refused; Ostekk, no clock but his; Vhezzar, no likenesses; Hethrul, nothing planted; Oumnu, no sleeping alone. Memory also wants a friendlier word than "ruler rules".
  src: astral § Open, § Superseded; memory-canon (H'Catha later pass)

- **[decide]** Ruler names and ray order
  Kurrzot, Ondessa and Ostekk are settled. Gorrathax, Ulmorrow, Oszrax, Saelvex, Vhezzar, Hethrul and Oumnu are proposals, and the ray order around the ring is a placeholder.
  src: astral § Open

- **[decide]** Measures
  Sweep proposal: 30-hour turn; disk about 1,100 mi radius; Spindle base about 200 mi; shadow reach about 600 mi. Against it: the module's 1,000-mile Spindle and a day "no brighter than a starry night on Toril", and the page's 630-mile Spindle base. Settled whatever the numbers: domains are continent-scale (see fix below).
  src: astral § Open; memory-canon (H'Catha working)

- **[decide]** Drafted rulings to lock or cut
  Edicts are strict (intent does not matter); a first strike is punished; sleepborn resistance is halved, non-radiant; a moving blind spot (adamantine in daylight) counts as theft; no sight on H'Catha reaches inside rock; the Carriers will not move stolen ore; the Unwaking is outside the Pact.
  src: astral § Open

- **[decide]** Ondessa's fading ray and the Spindle's summit
  What Ondessa's fading ray does to her land, and what is at the Spindle's summit now that the knowledge station is dropped.
  src: astral § Open

- **[decide]** The turn-59 drafts
  Unreviewed, kept in the H'Catha · Ground Level doc. The Unwaking: a centuries-old sleepborn under the Spindle that took Ondessa's citadel through Steward Halvane Teche, a mercane. Places: Fallmouth, the Weighhouse, the Fog Hold, Bell Harbor, Tally, the Held House, Low Weir. Factions: the Counted (Imsa Durr), the Stewardship, the Carriers (Oddo Hasp, a giff), the Unwheeled (Wick), the undertow (Elder Sennu), the Silent Court. Old things: Ninefathom (a dragon turtle), the Old Courses, the Sunken's bell (Annet Vry), the Spindle-scar carvings, Sarelk. Five routes inward.
  src: astral § Open

- **[decide]** The player record's "beholder patrols"
  `data/locations.json` says H'Catha is "watched by beholder patrols"; canon puts the tension at domain borders. Flag only: decide whether the player record needs a correction through the record workflow.
  src: data/locations.json; memory-canon (H'Catha layout)

- **[fix]** Ten domains
  Page says "Ruled by Eight rival beholder domains" and has an eight-row domain table. Rebuild for ten: "H'Catha has ten domains, one for each eyestalk, and ten rulers, all of them enlightened. Over them stands the Sovereign Eye, which the rulers dreamt together."
  src: memory-canon (campaign-canon, H'Catha supersedes eight domains; sovereign); astral § The Pact

- **[fix]** The Pact replaces "The endless cycle"
  Replace § The endless cycle with the Pact (full text in the adds below): as H'Catha turns and a domain falls into full dark, that domain's eye shuts on every beholder, giving partial sleep; the shadow is the Eye's blind spot.
  src: memory-canon (campaign-canon, H'Catha refinement; decisions)

- **[fix]** Nobody is cast out for enlightenment
  Page says beholders who survive the summit "come back lawful neutral — and are cast out by their own kind for it". Remove. All rulers are enlightened.
  src: memory-canon (campaign-canon); astral § The Pact

- **[fix]** No Spindle foothold war
  Page says "whenever one nation gains a foothold on the Spindle, the others bring it down." Remove. Floating rulers have no use for footholds.
  src: memory-canon (campaign-canon, H'Catha supersedes); astral § Superseded

- **[fix]** Ports
  Page says "Six of the eight domains hold a port at the Spindle's base". Change to: ports are spread across the world.
  src: memory-canon (campaign-canon, H'Catha refinement)

- **[fix]** Arrival tension
  Page says "Patrols range broadly through the surrounding space, screening incoming vessels". Replace: "Arrival tension comes from crossing watched domain borders, not orbital checkpoints. Every beholder ship is carved stone, so the tyrant ship reads as native traffic, and a Caelestis scuttle ship docks in its Cargo Deck intake and carries the landing party in unnoticed. Landing is hard for everyone."
  src: memory-canon (campaign-canon, H'Catha layout; approach to H'Catha)

- **[fix]** Continent-scale domains
  Scale section gives "about 80 miles of frontage" per domain on a "630 miles around" Spindle base. Rescale: domains are continent-scale, and crossing to another domain is like going to another continent, with natural and unnatural obstacles between. Exact numbers follow the Measures decide.
  src: memory-canon (campaign-canon, H'Catha working)

- **[fix]** The meteor
  Page says it "landed on a seam, which is why it is still there". Replace: "The meteor is large. It is mined as a vein in an occupied area that rival forces fight over in skirmishes. Adamantine matters on H'Catha because the Eye cannot see through it."
  src: memory-canon (campaign-canon, H'Catha decisions); astral § Meteorite and mission

- **[fix]** Death and disintegration are in play
  Page says "Disintegration and death rays stay off the board at this tier. They have no domain and no terrain effect." Replace: each eye ray belongs to a domain, death and disintegration included. The Eye punishes a lawbreaker with whichever eye is shut that hour, so a crime in the Death hour is punished with death.
  src: astral § The Pact

- **[fix]** Lumbe
  Page says Lumbe "is unattached to anything, which makes it available". Replace: Lumbe is Sarelk's laboratory and has no part in the Pact.
  src: astral § The eclipse

- **[fix]** Ostekk rules here
  Page's Open asks "whether Ostekk lives on this world". Close it: Ostekk is a ruling beholder of H'Catha. DM note: the crew hearing his name soon after landing is the payoff (OSTEKK-6 and the Containment Engine carry his pattern).
  src: memory-canon (campaign-canon, H'Catha decisions); astral § Meteorite and mission

- **[fix]** Turnbetl
  The moons entry lists Turnbetl only as "a flammable atmosphere". Add that its close passes cause the eclipse (see add below).
  src: astral § The eclipse

- **[drop]** The summit knowledge station and the enlightened exile
  Remove the station that turns beholders lawful neutral, and the section "The enlightened exile · Name open". Ondessa takes the role (see adds).
  src: memory-canon (campaign-canon, "supersedes eight domains and summit-exile"); chat-astral-sea-worldbuilding § Superseded

- **[add]** Register
  DM voice: "H'Catha plays as a Cold War spy thriller on a drowned world. Subterfuge, stealth, information and a silver tongue win. Violence is always an option, and it always has consequences. Player-facing rules stay minimal: darkness moves, places have rules, consequences follow."
  src: memory-canon (campaign-canon, H'Catha play register; later pass); astral § Register

- **[add]** The Sovereign Eye
  "The rulers dreamt a Sovereign Eye together. It sees everything in daylight and enforces the Pact. Its gaze covers the world and the space around it wherever H'Catha's day falls. Shadow is its blind spot, kept as the founders' agreed privacy." (Sauron's eye is the model.)
  src: memory-canon (H'Catha sovereign; decisions); astral § The Pact

- **[add]** The Pact and partial sleep
  "When the shadow reaches a domain, that domain's eye shuts on every beholder, and it stays shut until the shadow reaches the next domain. A shut eye gives a beholder partial sleep, enough rest without the full sleep in which a beholder dreams a rival. The Eye punishes a lawbreaker with whichever eye is shut that hour."
  src: memory-canon (H'Catha refinement); astral § The Pact

- **[add]** Common Law and Edicts
  "Common Law holds everywhere in daylight. It forbids killing, wounding, stealing, and taking anyone against their will. Each domain also has one Edict, a strange law born of its ruler's paranoia, and the Eye enforces it." The Edicts themselves are a decide.
  src: astral § The Pact; memory-canon (H'Catha later pass)

- **[add]** The dark decides, the light keeps
  "Nothing can be taken by force in daylight. People believe the Eye holds deals made in daylight, called light-sworn, so true deals are struck in the light. Deals the Eye should not see are made in the dark."
  src: astral § The Pact; memory-canon (H'Catha later pass)

- **[add]** New rulers
  "A new ruler can be dreamt only when a seat is open, and it is an ally of whoever dreamt it."
  src: memory-canon (H'Catha sovereign); astral § The Pact

- **[add]** Sleepborn
  "Partial sleep leaks. What leaks becomes sleepborn: ill-formed beholders that live in the shadow, where light unmakes them. Some rulers hunt them; some ignore them and let their domains be ravaged; some fear what they could become."
  src: memory-canon (H'Catha sovereign); astral § The Pact

- **[add]** The Spindle as sundial
  "The Spindle is a sundial and the world's clock. Its tapering shadow sweeps the disk; night lasts longest near the Spindle and never comes near the rim. Each ruler chooses where in its domain to keep its citadel."
  src: memory-canon (H'Catha later pass); astral § The Pact

- **[add]** The bands
  "The bands are named for the parts of an eye. From the rim inward: Lashline, Sclera, Iris, Pupil. The Pupil is the smallest, most contested and most lawless band, because its dark lasts longest; overlapping occupying forces struggle there constantly. The misty rim holds the most 'civilised' people, under the Eye's constant threat. Danger changes band by band, like a neighbourhood changing."
  src: memory-canon (H'Catha decisions; later pass); astral § Names

- **[add]** Brighteyes and Shades
  "Brighteyes live in the always-lit band; Shades live near the Spindle. They are told apart by behaviour and by their eyes, not by skin tone." (A lean in memory.)
  src: memory-canon (H'Catha later pass); astral § Names

- **[add]** The eclipse
  "Turnbetl darkens H'Catha at a close pass, roughly once a year and unevenly, for three to four hours of full dark. The Sovereign Eye shuts and every ruler sleeps at once. It is the only time open action is possible, and the rulers spend the gap between eclipses plotting toward it. Asleep, they act through forces, tentative alliances and betrayals: agents cross enemy lines to find a sleeping ruler, kill it and take its seat. An eclipse is coming soon."
  DM note: the crew arrives as it nears, which puts the Watcher on a clock.
  src: memory-canon (H'Catha eclipse; sovereign); astral § The eclipse

- **[add]** Ondessa
  "Ondessa is a ruling beholder who still holds her seat and her link to the Sovereign Eye. At the last eclipse she was struck down through a betrayal inside her court, and her citadel is occupied. The attack ruined her central eye: she cannot see out of it or use it to cancel magic. The other rulers want her dead; the populace may not know she lives. She is better than her neighbours without being good, and she has a beholder's paranoias and obsessions."
  src: memory-canon (H'Catha leaning; eclipse; decisions; later pass); astral § Ondessa

- **[add]** Ondessa's reserve
  DM note, held in reserve: Ondessa may be immune to the eclipse sleep, which she does not yet know. Reveal it at the eclipse.
  src: memory-canon (H'Catha decisions); astral § Ondessa

- **[add]** Ondessa and the Watcher
  "Ondessa and the Watcher protect each other and trade information. H'Catha sits at Realmspace's edge, where traffic and merchants pass, so her port is an intelligence hub. The Watcher relays what she learns to the Order and to Caelestis, where her reports are known as unusually useful."
  src: memory-canon (H'Catha eclipse); astral § Ondessa

- **[add]** Reinstating Ondessa
  DM voice: an optional larger goal. The crew can stay through the eclipse to protect Ondessa or help her retake her citadel (a huge ally and higher stakes), or call the mission done.
  src: memory-canon (H'Catha eclipse); astral § Ondessa

- **[add]** The Watcher
  "H'Catha's Watcher lives near the rim, a trek from any landing. She saw factions moving on the meteorite and reported it to Caelestis as a precaution against escalation. She fears what the fighting might bring on, and the ore is valuable to both Caelestis and the Order. She expected a seasoned crew, is suspicious of cadets, and probes whether they are real sailors." That suspicion carries the thread that Caelestis is spread thin.
  src: memory-canon (Watcher ruling; decisions; refinement); astral § Ondessa, § Meteorite and mission

- **[add]** Arrival timing
  The crew arrives about three weeks after the impact, behind rivals who have been there two weeks or more. The crossing takes 14 days.
  src: memory-canon (campaign-canon, refinement; Watcher ruling)

- **[add]** The module's shape
  DM voice: kept from the module: a 500-lb chunk in the ogre's cave; the spectators Greelob and Orlob; Tarto's 500-lb bag of holding and a sending stone.
  src: astral § Meteorite and mission

- **[add]** The tyrant ship obeys the Pact
  "The tyrant ship holds some beholder essence, so it obeys the Pact: the eyestalk matching the hour's shut eye goes dead, and the whole ship goes dark in the eclipse."
  src: memory-canon (H'Catha decisions); chat-astral-sea-worldbuilding § meteorite

- **[add]** Ezra
  Ezra the Watcher joins the crew for the H'Catha voyage, where his final training is. A later graduation-board contract collects him at H'Catha and takes him to the Hall of the Watchers.
  src: memory-canon (campaign-canon, Key NPCs)

- **[add]** Vaelorix came from H'Catha
  "Vaelorix the Cultivant, the dead beholder collector whose tyrant ship the crew now holds, came from H'Catha."
  src: memory-canon (campaign-canon, antagonists)

### realms/glyth.html

- **[decide]** Name for illithids raised without an elder brain
  Same question as the realms/index.html decide on the people's English name (unthinned, brainless-raised, unculled). The page uses "the unthinned, raised without an elder brain".
  src: memory-canon; glyth-watcher; realms/glyth.html

- **[fix]** Glyth is kept unreachable
  Page says "A crew that reaches Glyth can learn the colony's history from the only party with a reason to tell it". Replace: Glyth is kept unreachable, so the source is someone who has come out of Glyth: the Watcher (see add below). Also soften "only a door that closed" to match: Glyth cast N'ghathrod's people out.
  src: memory-canon (open-decisions, Taken King line); chat-cosmic-campaign-structure (Glyth hard to reach)

- **[add]** Hard to reach
  "Glyth is an outer world on a long orbit with three moons. Its approach window is rare. Its own defenses guard it, and the Fleet bans approach."
  src: chat § Cosmos texture; memory-canon (Taken King line); glyth-watcher § What she knows

- **[add]** Hostile but closed
  "H'Catha is enterable because its beholders are divided. Glyth is closed because it is one civilisation."
  src: chat § Cosmos texture; memory-canon

- **[add]** One purebred stayed
  "When N'ghathrod left with the people Glyth refused, one properly raised illithid among his lieutenants chose to stay on Glyth."
  src: memory-canon (open-decisions, N'ghathrod settled); glyth-watcher

- **[add]** The Watchers of Glyth
  "The Order posted Watchers to Glyth, one per region. One lived in the elder brain's range for years and came out alone; she still hears it. The others posted there did not come back." Link the new dossier from glyth-watcher.md once it has a page; her name is still to come.
  src: glyth-watcher § Sketch

- **[add]** The Fleet's loss at Glyth
  "The Fleet lost a vessel at Glyth during the last approach window." Vessel name and commander to come.
  src: chat-cosmic-campaign-structure (Fleet priors)

### realms/aethris.html

- **[add]** The Prism Ascendant belongs to neither goddess
  "Neither Tymora nor Beshaba owns or controls the Prism Ascendant. Their rivalry plays out beneath it."
  src: chat-crew-boogie-casey-sol § Sol/Aethris and the gods; memory-canon (Prism Ascendant is a Monolith)

- **[add]** Concentrated worship
  "Tymora and Beshaba are strongest on Aethris. Worship concentrated on one world buys them force there that they have nowhere else."
  src: memory-canon (open-decisions, Vecna/Tharizdun 2026-10-25); divine-rules § Concentration and reach

- **[add]** Sol on W-08
  Add one line to W-08: "Sol was born Misfortuned on Aethris, escaped the Zenith ritual before it completed, marked by Beshaba, and was recruited by a Watcher. The Fortuned built the C.R.C. to bring him back."
  src: memory-canon (campaign-canon, Sol Fortuna); timeline "Sol escapes Aethris"

### realms/virenspace.html

- **[decide]** Virenspace's location and route
  Memory names Virenspace's location and its route from Realmspace as an unresolved gap. The page fixes it beyond H'Catha, on a charted lane that splits at the Astral waystation. Options: confirm the page's placement as canon; or mark it a draft. Also open: Ortholith standing in Casey's home system.
  src: memory-canon (open-decisions, unresolved gaps); chat § Open

- **[add]** Astra Virex
  The page mentions "Astra's reach" only. Add: "Astra Virex is Casey's true patron and calls him in his brother Polly's voice. It wants to be whole and strong and never to be wounded again, and its method is calling people to it. It is oriented toward constellations and does not know world-hearts exist."
  src: memory-canon (campaign-canon, Casey Geim)

- **[add]** Zerathis and the wardrobe
  "Zerathis followed Astra Virex, not Vecna. He gave Mirt the wardrobe."
  src: memory-canon (campaign-canon, Casey); chat-organizing-framework

### realms/strake-station.html

- **[decide]** What is in Strake's secure storage
  src: chat § Open; framework § Open

- **[decide]** Strake's mass signature
  Options: the dreadnought (Vth'oramu); or something that crossed the Flow.
  src: framework § Open

- **[decide]** Why Tarroway's timing tables fail
  Follows the Tarroway decide in the Cosmology section § chart (psychic wind, or the Vth'oramu keeping no patrol).
  src: the Cosmology section

### realms/cairn-station.html

- **[decide]** What is at Cairn Station
  What is there, whether anyone reached it first, and where Tarroway is. The payoff should open onto something larger. Memory ties Cairn to an astral dreadnought.
  src: framework § Open; memory-canon (campaign-canon, Cairn)

- **[decide]** The dreadnought on the Cairn bearing
  Options: drawn there; from the next sphere; always there; disrupting transit between spheres. Not yet in the FIA. The Vth'oramu is a carved astral dreadnought (inference: a candidate link).
  src: framework § Open; memory-canon (open-decisions, Vth'oramu)

- **[fix]** Most of the complement died
  Page says "The rest of the complement was let go on purpose." Change to: "The second boarding killed the senior deck officers and most of the complement. The few survivors were let go on purpose, so that Joffrey would come home a hero."
  src: memory-canon (open-decisions, "most didn't"); chart Crow site

- **[add]** The deal
  The page says only that Vocath's people "took what they had agreed to take". Name it: "Vocath and N'ghathrod struck a deal. N'ghathrod would put an asset inside sealed Caelestis, and in exchange Vocath's line would supply captives. Vocath read it as ordinary illithid thrall work and asked no more. Joffrey was taken during the second boarding." (That N'ghathrod's own people made the second boarding is an inference; confirm before the page says it.)
  src: memory-canon (open-decisions, "Operative resolved")

- **[add]** What the line carried
  "Vocath's people chased Clint Dashforest to SYS-04 and never found him. They came back from Fonains with fragments of the broken Monolith and sold them on through the Cairn line. Boogie's shard is one."
  src: timeline "Boogie takes the shard"; session-rulings (timing)

### realms/cantina.html

- **[decide]** Who tends bar on the cantina
  The page names Odds the plasmoid, but "Odds" is retired (see drop). Options: Glim the plasmoid, of a cantina called the Long Pour (unreviewed Crossing Companion proposal); or leave the bartender unnamed.
  src: astral § Open; memory-canon (campaign-canon, Ryeback absorbs Odds); chat-crew-boogie-casey-sol

- **[drop]** Odds
  Page says "Odds is the plasmoid bartender a crew is likely to meet on it, and has drifted through wildspace for decades." Remove the name. Ryeback absorbed every interaction planned for Odds.
  src: memory-canon (campaign-canon, Key NPCs; spelling list)

### realms/meteor-hub.html

- **[decide]** The hub's identity and name
  Korey liked the carved meteor as a dead god's severed head. Name options: the Crown, Godsrest, the Wanderhead, the Rock.
  src: chat-voyage-6-7-planning § Open

### realms/wayfinders-homeworld.html

- **[decide]** What "Lunarfoot" names
  The page uses it for the clan only. Memory says "Lunarfoot is in a hidden system inside Caelestis's sphere", which reads as the homeworld. Options: clan only, and reword memory; or the homeworld too.
  src: memory-canon (campaign-canon, Cosmology); realms/wayfinders-homeworld.html

- **[fix]** SPH-01, hidden
  Page says "Sphere uncatalogued". Change to: "SPH-01, in a hidden system (SYS-06)." The Wayfinders go out to map what their world must be protected against, so it shares the sphere with those threats.
  src: memory-canon (campaign-canon, Lunarfoot); cosmology/index.html § Caelestis's sphere

- **[add]** The Runekeepers
  "The Runekeepers are an order of this world alone. They hid their own world's Atrium." (Memory says "Aperture"; the later chat renamed it Atrium.)
  src: memory-canon (open-decisions, Runekeepers stay specific)

- **[add]** Sensory anchors
  "A luminous haze, like light beneath water. Tall pale trunks with smooth, glasslike bark, spiralling toward one unseen point. The smell of warm earth after rain, and of sap touched by lightning. People who move with certainty." The planet's full look is still to be worked out.
  src: chat-crew-tumak-gregory-bartholomew § Tumak/Runekeeper lore and pressure

- **[add]** The twins' return
  Add to the Zenith section: "When the twins come home, the homeworld splits into a blessing faction and an omen faction." Their arrival is itself a Zenith, and a Monolith follows any Zenith.
  src: chat-crew-tumak-gregory-bartholomew § Tumak/Leader concept; memory-canon (the Zenith, twins)

### realms/ascension-world.html

- **[decide]** Whether the Ascension World keeps its name
  "The Ascension" now means Vecna's climb to Axiom, and his godhood happened on Oerth. Options: keep the world as a separate SPH-01 world under a new name; or retire it. Touches this page, the realms index, chart SYS-05, and timeline "The Ascension World".
  src: session-rulings #14; timeline "The Ascension World"; vecna § Oerth

- **[decide]** What Vecna forced here, when, and what it cost him
  The timeline event is cert "open" at t -250.
  src: framework § Open; timeline.json

- **[fix]** A local threshold, distinct from Oerth
  Page says "a small, personal ascension distinct from the canonical Sigil event". Change to: "a small, local threshold he forced through agents, distinct from his ascension on Oerth." His godhood came first, on Oerth; this was later and smaller.
  src: session-rulings; vecna § Oerth

- **[fix]** SPH-01
  Page says "Sphere uncatalogued" (twice). Change to SPH-01, system SYS-05.
  src: vecna § Oerth ("a world in SPH-01"); chart (SYS-05 inside SPH-01); timeline "The Ascension World"

### realms/krynn.html

- **[decide]** The "First World and dragons" thread
  The infobox ("Dragons, and the First World") and the closing line name a thread with no source in memory, drafts or sweeps. Options: keep it as an open thread on the planning layer; or remove it. The settled dragon facts (they left to face Takhisis and have not reached Krynn) may be enough.
  src: realms/krynn.html

# Fonains

Items for `realms/fonains.html`, the Fonains Canon Reference (a Claude doc, "Fonains doc"), and the Fonains lane of `timeline/timeline.json`.
Order under each heading: decide, fix, drop, add.

### realms/fonains.html

- **[decide]** Fonains's world designation
  The realm page and the chart use W-21 (the chart note says "Draft: Fonains matches FIA W-21"). The early FIA registry lists "W-02 Fonains", and W-02 is H'Catha on the realm pages. Options: W-21, and correct the FIA file; or W-02, and renumber the realm pages. Check Aethris the same way (FIA W-01, cosmology W-08).
  src: chat-early-planning § New campaign idea development; realms/fonains.html; chart/index.html

- **[decide]** The elder brain after Lola's Boys
  Rule before it goes on this page. See the Timeline section below for the options.
  src: timeline.json; memory-canon

- **[fix]** The dragons
  Page says "Most of Fonains's dragons left for Krynn to fight Tiamat." Change to: "Most of Fonains's dragons left to face Takhisis (Tiamat), and few remain. They have not yet reached Krynn; their own politics hold them. Fonains remembers their leaving as a great hunt."
  src: session-rulings; timeline "The dragons leave"

- **[fix]** Vecna knew
  Page says "Vecna encouraged the world's Zenith; Tharizdun corrupted the Monolith that answered it, without Vecna's knowledge". Replace: "Vecna nudged the world's Zenith knowing it would be ridden. He uses Tharizdun as a contingency, a battering ram; it is use, not alliance. Lola's Boys destroyed the corrupted Monolith, which forced Vecna to change his plan."
  src: session-rulings; tharizdun § Vecna and Tharizdun

- **[fix]** The Vanished
  Page's Open asks "whether the released population went anywhere the crew can reach." Replace with the fact: the Vanished were sent through the corrupted Monolith to Tharizdun's prison, which has no address in any known cosmology. Remove the open line.
  src: memory-canon (campaign-canon, the Vanished); tharizdun § Corrupted Monoliths

- **[fix]** Present condition
  Page says "The world's current population and condition are unestablished" and the Standing row says "Current condition unestablished." Replace: "Fonains's present is Lola's Boys Session 28, two to three months after the Monolith broke. Yan-C-Bin, the air Prince, is manifest, the air shard has opened onto the Feathergale Spire, and the Day of Chaos approaches."
  src: session-rulings (timing); timeline "The Day of Chaos", "The storm at the Monolith ruins"

- **[drop]** Boogie's half-logbook
  Page says "the half-logbook Boogie carries was pulled from a simulation of a real wreck — meaning the original is somewhere in Caelestis". True, and unrelated to Fonains. Move it to Boogie's page and remove it here.
  src: memory-canon (campaign-canon, Boogie)

- **[add]** Three tables of canon
  Add to the intro: "Fonains is one of three campaign worlds, with Caelestis and Krynn. Its canon comes first from Lola's Boys, the first campaign, which everything builds from, and also from one-shots where players played both heroes and villains. Every one-shot ties in."
  src: session-rulings; memory-canon (Fonains canon 2026-10-25)

- **[add]** Sources (DM note)
  DM voice: Lola's Boys began as a run of the Lost Laboratory of Kwalish with Temple of Moloch and grew into a campaign built on Princes of the Apocalypse, Lost Laboratory of Kwalish and Temple of Moloch. Transcripts are canon; the modules fix spelling and context only.
  src: session-rulings; module-sweep-fonains § intro; memory-canon (three campaign worlds)

- **[add]** Timing against Caelestis
  "Caelestis's present is a few months after the Fonains Monolith broke, about level with Lola's Boys Session 28. Clint Dashforest reached Fonains before the Monolith appeared and was there when it did. Boogie's shard came from the broken Monolith through Vocath's line, before Voyage 001."
  src: session-rulings (timing)

- **[add]** How the Monolith formed
  "The Fonains Monolith formed corrupted. Five cultists held the ritual: four channelled the Princes of Elemental Evil, and the fifth held pieces of a Tharizdun black crystal. The ritual was the Zenith, the Monolith answered it, and the crystal replicated into the Monolith as it formed."
  src: memory-canon (open-decisions, Locked 2026-10-25); tharizdun § How the Fonains Monolith formed

- **[add]** The Day of Chaos
  "The Day of Chaos is the day the four Princes of Elemental Evil enter Fonains together and break the barriers between the planes, so Tharizdun can leave his prison. It is still ahead of Fonains's present."
  src: session-rulings; tharizdun § The Day of Chaos

- **[add]** Thessalar's planar craft
  One line here, detail in the Fonains doc and `dossiers/thessalar.html`: "Thessalar's planar craft fell on Fonains about 500 years ago. Lola's Boys, sent back by the Accordance, took its control and defense gems, and without them it came down. The crash freed N'ghathrod, a prisoner aboard. The craft's main body raised the Barrier Peaks and holds the Mad Mage megadungeon; Daoine Gloine is a piece that broke off; the Thessalkraken landed separately in the sea."
  src: session-rulings; timeline "The craft falls; N'ghathrod escapes"

- **[add]** The voice that reached Vanifer
  "A Seeker chapter was the voice that reached Vanifer. It traded her the lost meaning of the Alpha and the secret in the Cre'Tez blood."
  src: memory-canon (open-decisions, Locked 2026-10-25); vecna § On Fonains; timeline "A Seeker chapter reaches Vanifer"

### Fonains doc

The doc is current on names, the four keys, the cults, the party table, Krynn and the dragons, and Takhisis being Tiamat. Items below cover what is stale or missing.

- **[decide]** The Cre'Tez father's name
  Options: Cenvinzo (foundry notes § Parents); Vinbenzo (§ Reveal).
  src: cretez-foundry-notes

- **[decide]** Rihiri's gender
  The notes read "Rihiri (12M)" and also "youngest kind little sister". Options: sister (fix the M); brother.
  src: cretez-foundry-notes § Siblings

- **[decide]** Dharra or Dara
  The notes spell "Dharra"; the timeline spells "Dara" ("Dara and Rahiri freed"). Rihiri is settled by the session rulings. Options: Dharra; Dara. Touches the doc and the timeline S18 event.
  src: cretez-foundry-notes § Siblings; timeline.json; session-rulings

- **[decide]** Whether Vanifer killed her father
  Options: she killed him; or she keeps him seeming alive with programmed illusion and fire cultists.
  src: cretez-foundry-notes § Reveal

- **[decide]** Whether Kevulan willed his birthright to Asmodus when overpowered
  The notes leave it "subject to change".
  src: cretez-foundry-notes § Reveal

- **[decide]** Seldra's gem-thief boss
  Options: keep Makedon; or Mack Francache, a wererat sent by Moghadam (the module).
  src: module-sweep-fonains § For Korey to confirm

- **[decide]** Marlos or Marlos Urnrayle
  Options: keep the table's "Marlos"; or adopt the module's full name.
  src: module-sweep-fonains § For Korey to confirm

- **[decide]** The mind flayer arcanist in Kwalish's lab
  It sits in stasis. Options: one of N'ghathrod's captured illithids; unrelated; leave it as a hook.
  src: module-sweep-fonains § Hooks, § Open

- **[decide]** The demilich skull with gem eyes
  Whether the skull in Kwalish's lab is the one Seldra was forced to craft for Thessalar. Options: yes, it travelled with the craft; no.
  src: module-sweep-fonains § Hooks, § Open

- **[decide]** Kwalish's price
  Whether it is a piece of the characters' souls, as in the module. Options: adopt; leave unused.
  src: module-sweep-fonains § Hooks

- **[decide]** Gar Shatterkeel's claw
  Whether his crab-claw prosthetic echoes Hayden's prosthetic and one-armed father (inference). Options: tie them; leave it coincidental.
  src: module-sweep-fonains § Usable mechanics

- **[decide]** The Pedra Ardente quest, its place and its broker
  Spellings in circulation: "Pedra Ardente", "The Blooming Glass", "Fenerba" (`dossiers/clint.html`); "Pedra Ardante", "the Blooming Glass", "Fernerva" (timeline "Pedra Ardante reaches Vanifer"); memory names the quest "Search for the Blooming Grove", with Vanifer as its quest giver. Pick one spelling for each name and use it everywhere (doc, dossier, timeline).
  src: dossiers/clint.html; timeline.json; memory-canon (Fonains canon 2026-10-25)

- **[fix]** "Where the campaign stands"
  Says "roughly two months after the Monolith broke". Change to "two to three months after the Monolith broke".
  src: session-rulings (timing)

- **[fix]** Monolith table, last row
  The row "About two months later" changes to "Two to three months later".
  src: session-rulings (timing)

- **[fix]** "Links into Caelestis": the divine gate
  Remove the "Divine gate" bullet. Replace it with polarity: "Gods cannot walk on worlds or reach the center because a god and a world's heart carry the same charge and push apart. The push grows as a god comes closer until it is unbearable. It is why the Accordance acts through champions and Vecna appeared in The Darkest Day as a projection." Full rule in `prime/working/divine-rules.md`.
  src: session-rulings; divine-rules § Polarity

- **[fix]** The Day of Chaos hook
  Says "Caelestis runs about a year before Fonains's current point." Replace: "Caelestis's present is level with Fonains Session 28, two to three months after the Monolith broke."
  src: session-rulings (timing)

- **[fix]** Vecna as a god
  Says "Nobody in Fonains treats him as a god." True of Lola's Boys play so far. Add that elsewhere Vecna is an open god, worshipped across spheres under many names, and his followers are the Seekers; a Seeker chapter was the voice that reached Vanifer.
  src: session-rulings; memory-canon (Vecna direction 2026-10-24)

- **[add]** Keys and cults: check for these details
  The keys and cults sections are current; add these if they are not already there.
  Keys: the four weapons are Tinderstrike (dagger), Ironfang (war pick), Windvane (spear; a windvane staff at the table) and Drown (trident), each summoned with "With this key, I call forth…". A Prince's portal closes when its weapon is thrown or struck into it, and the weapon is destroyed (a ready answer for spending the keys). At the table the keys carry a family history (the Accordance; Imix sealed by the Cre'Tez line), and Vizeran DeVir's role is unused.
  Cults: the air cult's sign is an inverted triangle with three lines; the earth cult's sign is a triangle.
  src: module-sweep-fonains § Princes of the Apocalypse, § Homebrew divergences; memory-canon (Fonains canon 2026-10-25)

- **[add]** The four Haunted Keeps
  Feathergale Spire, Rivergard Keep, Sacred Stone Monastery and Scarlet Moon Hall.
  src: module-sweep-fonains § Princes of the Apocalypse

- **[add]** Bastian Thermandar
  At the table he is a blond human (a fire genasi in the module).
  src: module-sweep-fonains § Homebrew divergences

- **[add]** Neothelid hook
  Tadpoles left in the pool under the Barrier Peaks may grow into neothelids.
  src: chat § Fonains background

- **[add]** Benedetta
  "Benedetta was Cenvinzo's wife and the mother of the younger Cre'Tez siblings. She fell ill at Rihiri's birth, about twelve years ago, and died two years later, about ten years ago." (The father's name follows the decide above.)
  src: cretez-foundry-notes § Parents; session-rulings; timeline decisions

- **[add]** The Cre'Tez siblings
  Eldest first: Vanifer (35, a half-sister by the same father), Asmodus (31), Kevulan (22), Xero (18), Lusion (16), Dharra (14), Rihiri (12). Vanifer raised most of the younger ones after Benedetta died. Kevulan follows Asmodus like a lackey and carries a regal air.
  src: cretez-foundry-notes § Siblings

- **[add]** The crest
  The Cre'Tez crest combines the symbols of Asmodeus and the eternal flame.
  src: cretez-foundry-notes § Clues

- **[add]** Bloodstones
  "Each Cre'Tez heir receives a Bloodstone at birth. It is bound to the heir's soul, imprinted with the souls of mother and father, and proves the birthright."
  src: cretez-foundry-notes § Inheritance, § Reveal

- **[add]** The Alpha Inheritance
  "The Alpha is a battle royale between the heirs. The winner inherits the birthright of each heir defeated. The Bloodstones judge when a soul truly concedes, which usually happens only at death."
  src: cretez-foundry-notes § Inheritance

- **[add]** The Beta Inheritance
  "For five generations the family has used the Beta instead: heirs concede their birthrights to one designee. It can be contested if the heirs are not unanimous or the head objects, and then any heir may invoke the Alpha, which runs until every birthright has conceded."
  src: cretez-foundry-notes § Inheritance

- **[add]** Who invokes
  "Only the head of the family can invoke an inheritance, except through the head's own objection. If the head dies first, both rituals invoke at once."
  src: cretez-foundry-notes § Inheritance

- **[add]** Vanifer's secret (hidden)
  "Vanifer has no birthright, because her mother was not Benedetta. She made an illegitimate Bloodstone by slowly siphoning Benedetta's soul, and the siphoning killed Benedetta."
  src: cretez-foundry-notes § Reveal; session-rulings

- **[add]** Asmodus's memory (hidden)
  "Asmodus learned that Vanifer killed their mother. She modified his memory so he believes the younger siblings' births wore Benedetta out, which turned him against them. Kevulan witnessed part of their fight."
  src: cretez-foundry-notes § Reveal

- **[add]** The Alpha is invoked (hidden)
  "Vanifer tried to make her father concede to her. He invoked the Alpha instead, locking them both out of the inheritance."
  src: cretez-foundry-notes § Reveal; timeline "The Alpha is invoked"

- **[add]** The phoenix dreams (hidden)
  "Vanifer sends Asmodus dreams in Benedetta's likeness, promising that the inheritance will release a phoenix and raise his mother. She leads the fire cult, which plays along and treats him as a prophet. The voice told Vanifer that Imix, a phoenix, would cleanse the world of transgressors like her father. Imix's true goal is to burn everything."
  src: cretez-foundry-notes § Reveal

- **[add]** Rihiri and Kevulan
  "Asmodus stabbed Rihiri. She survived, and Dharra got her out. Kevulan fled, then tracked Lola's Boys after hearing of the heroes of the Monolith."
  src: cretez-foundry-notes § Reveal; timeline "The Alpha is invoked"

- **[add]** Vanifer's plan (DM)
  DM voice: Vanifer waits to see who becomes heir so she can make them concede to her. With a unanimous vote she enters the Eternal Flame temple at night, rested. If she has to force a contested Beta, she flees into the temple at once.
  src: cretez-foundry-notes § Timey Wimey Fudging

- **[add]** Kwalish's lab
  "The Grand Master is Kwalish's war-machine exoskeleton, piloted by the quasit Whazzit. The real bone devil is a brain in a jar in the treasury. Kwalish's brains in jars form a hive mind; he calls them his 'brain friends'. West Wind, the Grand Master's bodyguard, carries a blade of the medusa, the likely source of Hayden's Medusa sword (inference). Ctenmiir is a dwarf vampire sealed as penance in an iron coffin on golem legs. Anaxi Zephries, the Cartophile, is Kwalish's nephew."
  src: module-sweep-fonains § Lost Laboratory of Kwalish, § Homebrew divergences

- **[add]** Daoine Gloine
  "Daoine Gloine is a glass city sealed under one huge ooze, a piece that broke off Thessalar's craft. Its baubles are crystal pocket dimensions inside the glass statuary; one bauble holds the arena of shadow duplicates from Session 10."
  src: module-sweep-fonains § Lost Laboratory of Kwalish; session-rulings

- **[add]** Kwalish's teleportation fields
  "Kwalish's teleportation-field devices work only in the monastery and in Daoine Gloine. The six recall bracelets are this technology."
  src: module-sweep-fonains § Lost Laboratory of Kwalish

- **[add]** The time device and the year 425
  "The table's time device is a mini Texel with four bauble slots, attuned with blood. The Temple of Moloch visit is set in the year 425, about 500 years before the present."
  src: module-sweep-fonains § Temple of Moloch; timeline "Lola's Boys in the year 425"

- **[add]** Table spellings kept (style note)
  Lola's Boys keeps three table forms over the modules: Seldra (module: Seodra), "speckled amber" (module: speckled gold), "the plane of gems" (module: Quasi-elemental Plane of Mineral).
  src: module-sweep-fonains § Spellings kept from the table; session-rulings

### Timeline (Fonains lane)

- **[decide]** The real elder brain
  Timeline S27 "The elder brain" says "the elder brain is buried" (lair under the Barrier Peaks). Memory says N'ghathrod's elder brain was carried on to Fonains in the crash and escaped, and lists "the real elder brain's location" as open. Options: (a) the brain under the Barrier Peaks is N'ghathrod's, and it is buried; (b) the S27 brain was another, and N'ghathrod's real elder brain escaped and lives somewhere unnamed. Touches timeline S27 and "The craft falls", `realms/fonains.html`, `dossiers/nghathrod.html`.
  src: timeline.json; memory-canon (open-decisions, Fonains lore tie-in; still-open list); chat § N'ghathrod origin

- **[decide]** Four shards or 333,333
  Timeline S14–S15: Kwalish's cannon splits the Monolith into four shards, each guarded by a Prince-aligned elemental. Memory: 333,333 shards across the cosmos (the number shows the scale already in motion; it is not a collectible goal). Options, for example: four great shards plus countless fragments scattered beyond Fonains. Word both places to match.
  src: timeline.json; memory-canon (campaign-canon, Scale)

- **[fix]** Fonains's present is level with Caelestis
  The clock "Fonains now (S28)" sits at t -0.43 against "Caelestis now" at 0, and the Lola's Boys band ends at -0.43. Shift the Fonains lane so Session 28 sits at about 0. Keep the Monolith break two to three months before it (today the break is at -0.64, which is about 0.21 before S28, so the spacing already holds).
  Knock-on: "Boogie takes the shard" sits at t -0.5. After the shift the break lands near -0.21, so the shard event must move to between the break and Voyage 001. "Clint lands on Fonains" (-1.05) still precedes the Monolith's appearance and can stay.
  Also reword the first `decisions` line, "shortly after Fonains's Session 28", to "about level with Fonains's Session 28".
  src: session-rulings (timing); memory-canon (Timing, supersedes "a year before")

- **[fix]** The five-person ritual is canon
  Event "The five-person ritual" is cert "working". Set it to "canon".
  src: memory-canon (open-decisions, Locked 2026-10-25)

- **[fix]** Rihiri's spelling
  The S18 event "Dara and Rahiri freed" spells "Rahiri". Change to "Rihiri". (Dara versus Dharra is a decide above.)
  src: session-rulings

# Timeline

Items for `prime/timeline/timeline.json` outside the Fonains lane (see the Fonains section for that lane).
Order: decide, fix, drop, add.

### Timeline

- **[decide]** The Ascension World event
  "The Ascension" now means Vecna's climb to Axiom, and his godhood happened on Oerth. The event "The Ascension World" (cert open, t -250: "He forces a small local threshold on a world in SPH-01. When, and what it cost him, are open.") follows the naming ruling in the Realms section § realms/ascension-world.html. Options: keep it as a separate SPH-01 world under a new name; or retire the world and the event.
  src: session-rulings #14; vecna § Oerth

- **[decide]** When Thessalar made his eight copies
  "Thessalar's experiments" (t -530 to -500) lists clone tubes Thessalar I–VIII before N'ghathrod's capture (t -506). `dossiers/thessalar.html` and `dossiers/nghathrod.html` say N'ghathrod was the prototype for that research. Options: move the clone tubes after -506; or the dossiers are wrong and the tubes predate him.
  src: dossiers/thessalar.html; dossiers/nghathrod.html; timeline.json

- **[decide]** When the Glyth Watcher got out
  "The Glyth Watcher gets out" sits at t -3 (cert working). glyth-watcher.md leaves how she got out open. Options: keep about three years ago; or leave the event undated.
  src: glyth-watcher § Open; timeline.json

- **[decide]** Clint overboard, or in a seized craft
  "The Bellwether Crow ambushed" says Clint Dashforest "goes overboard and the psychic wind carries him to Fonains", which matches memory. The factions and colony pages, and the chart ("in the craft he took"), say he seized the boarders' craft. Follows the ruling under `prime/factions/vocath-operation.html`. Options: overboard, carried by the psychic wind; he seized the boarders' craft and the psychic wind carried it; overboard first, then a craft.
  src: timeline.json; memory-canon (open-decisions, "Operative resolved"; campaign-canon, Astral Sea travel features); chart Crow site

- **[fix]** Arcs, not acts
  Rename the planned crew events to the spine's arc names (the wiki says "Arc", never "Act"):
  "Act 2: ranked missions" becomes "Arc 2: Driftwardens in the Field".
  "Act 3: N'ghathrod" becomes "Arc 3: Recognition".
  "Act 4: the center" becomes "Arc 4: Cast".
  Keep the descriptions unless the act-structure ruling under `prime/campaign/spine.html` changes their content.
  src: chat § V006 and the arc; campaign/spine.html

- **[fix]** Sol's first C.R.C. encounter
  "Behold H'Catha" says "Sol's first CRC encounter." Move it: Sol's first C.R.C. encounter happens on Caelestis, at the main entrance, when the crew returns from H'Catha. Give it its own event just after the H'Catha voyage. Also: "a contested seam" in the same event becomes "an occupied, skirmished mining area" (see the Realms section § hcatha.html).
  src: memory-canon (campaign-canon, Antagonists); chat-crew-boogie-casey-sol § Sol/C.R.C. and the scry beats

- **[fix]** Vecna's ascension is canon
  "Vecna rules Oerth and ascends" is cert "working". Set it to "canon".
  src: session-rulings; memory-canon (Vecna/gods 2026-10-25)

- **[fix]** Centuries of worship is canon, and the Seekers are his followers
  "Centuries of worship" is cert "working"; set it to "canon". Its description says "Separately, a voice teaches chapters a method: the Seekers." The session ruling makes his followers the Seekers. Change to: "He builds faithful across spheres under many names, wide and thin. His followers are the Seekers, in chapters that differ world to world and recognise each other through the account of the voice that taught them how to ask." Matches the glossary fix in the Cosmology section.
  src: session-rulings #14; memory-canon (Vecna direction 2026-10-24)

# Factions

Faction pages under `prime/factions/`. Items are grouped by page and ordered decide, fix, drop, add. Proposed page text reads in-world, like a fan wiki; DM-only lines are marked.

The Remaking is now only the Ascension's fail state. Links that say "the Remaking" for Vecna's plan point to `campaign/ascension/`; links for the colony's or Vocath's operations point to `campaign/colony/`.

---

### factions/index.html

- **[decide]** The colony's word for its brainless-raised
  Canon calls them the brainless-raised; the final slur is still to name. The index uses "unthinned"; the Vth'orama page uses "unthinned" (Vth'ulhan) and "unculled" side by side. Options: unthinned (Vth'ulhan), unculled, or another word. Apply on factions/index.html, factions/vthorama.html and the timeline.
  src: memory-canon open-decisions (operative-resolved open list); chat-cosmic-campaign-structure § N'ghathrod origin, § N'ghathrod and the colony

- **[decide]** Fracture Cult and Archivists against the Seekers
  Both drive or work Zeniths and Monoliths, which overlaps the Seekers. Options:
  (a) Keep them independent, with some cells serving as chapters (current Spectrum text).
  (b) Fold them into the Seekers as chapter types.
  (c) Retire them.
  Touches: factions/index.html (Spectrum card), factions/spectrum.html, factions/seekers.html.
  src: memory-canon open-decisions (audit line)

- **[decide]** Thumbnails for people with pages
  Do people with their own dossiers get thumbnails on the Factions page?
  src: chat-cosmic-campaign-structure § Open

- **[fix]** The Restorers' All-Mother
  Page says "which their doctrine names the Mother of the Universe". Change to "which their doctrine names the All-Mother".
  src: chat-cosmic-campaign-structure § Superseded

---

### factions/academy-fleet.html

- **[decide]** The Glyth loss
  The Fleet lost a force at Glyth during the last approach window (see add). Its name and its commander are unnamed.
  src: chat-cosmic-campaign-structure § Cosmos texture, § Open

- **[decide]** Sor'Kur or Sor'Kor
  The repo spells it Sor'Kur everywhere (this page, dossiers/sor-kur.html, data/dossiers.json); the sweep raises Sor'Kor. Confirm Sor'Kur.
  src: chat-cosmic-campaign-structure § Open

- **[decide]** Gregory's origin wording
  The page calls Gregory a Seam-product ("Transformation and Boundary overlapped where he stood"). Memory canon calls his arc "a Continuity (existence) ripple event" and him a paracausal Reach item like the Lantern. Decide together with Astra Virex's wound (under factions/deities.html). Options: keep the Seam wording, or revert to "Continuity ripple".
  src: memory-canon campaign-canon § Gregory, § Antagonists (Lantern line); chat-cosmic-campaign-structure § Cosmology redesign

- **[decide]** OSTEKK-6's survivor line
  The crew table says "One of two survivors of nine… OSTEKK-2 also survives, on the Hollow Deck." Follows the OSTEKK-2 ruling under dossiers/ostekk-6.html.

- **[fix]** Flighty Foundling, and the swap has happened
  Page says "Travel together on Academy assignments aboard the Foundling", a Vessels row "The Foundling", and that its errand "includes collecting Ezra". Ship names carry no article: write "Flighty Foundling". The crew now flies the tyrant ship. Flighty Foundling delivered them and came back alongside for the swap at the tyrant ship, where Krik'Lit and Pffred left and Ezra and the chosen instructor came aboard. Update the crew row and the Vessels row to that.
  src: memory-canon campaign-canon § Naming (no article), § Antagonists (V006 outcome); timeline "Now: the helm seated"

- **[fix]** Which worlds know about space
  Page says "Most worlds do not know that Wildspace exists". Replace with: "Some worlds know about spelljamming and some do not. Low-grade contracts sit on space-aware worlds; later work includes covert jobs on unaware worlds, blending in — retrieving an interplanetary fugitive, for one. Ship-shaped spelljammers exist so a crew can land covertly in water and come in through a port."
  src: memory-canon campaign-canon § Key NPCs (world awareness); chat-cosmic-campaign-structure § World awareness and travel

- **[fix]** Lunarfoot is the clan
  Page says "partial Wayfinders of the Lunarfoot order". Change to "partial Wayfinders of the Runekeepers, Lunarfoot clan".
  src: chat-cosmic-campaign-structure § Rules and crew

- **[add]** The shape of Caelestis
  Add to the faction lead: "The Academy is the small part of Caelestis, roughly a fifth of it. The Fleet Corps is most of the rest, a part of the station cadets rarely see. A remaining sliver is kept secret." (DM-only: what the sliver is has not been set.)
  src: memory-canon campaign-canon § Naming (Mirt line); chat-astral-sea-worldbuilding § Caelestis structure

- **[add]** Mirt's reach
  Add to Mirt's row: "Mirt runs the Academy only. The Fleet Corps and the Bridge operate outside him. Caelestis protects him and keeps him quiet, so he is also stuck there."
  src: memory-canon campaign-canon § Naming (Mirt line)

- **[add]** The Glyth loss
  Add under the Bridge as Fleet history: "The Fleet lost a force at Glyth during the last approach window. Glyth is closed to Fleet traffic." (Glyth is kept unreachable: outer orbit and approach window, Fleet ban, its own defences.)
  src: chat-cosmic-campaign-structure § Cosmos texture; memory-canon open-decisions (Taken King line)

- **[add]** Gregory came from Toril
  Add to Gregory's row: "From Toril. He arrived at Caelestis on a cargo ship." (DM-only: no Zenith is tied to his origin; working decision.)
  src: memory-canon campaign-canon § Gregory

- **[add]** The tyrant ship in the Vessels table
  Add a Vessels row: "Tyrant Ship. Vaelorix's carved-stone tyrant ship, taken by the crew in V006. Its dais is a beholder-only helm; the Academy's chair-helm is installed into it." DM-only: after the H'Catha mission it goes into Caelestis's inventory; the players do not know.
  src: memory-canon campaign-canon § Antagonists (tyrant ship systems; Vaelorix helm)

---

### factions/order.html

- **[decide]** The Hall: one name or two, and where
  Ezra's dossier and this page say "the Hall of Sight and Sound". Memory canon says the crew takes Ezra to "the Hall of the Watchers". Options: one hall under two names (pick which the wiki uses), or two places (a training hall and the Order's seat). Also unset: where the Hall sits.
  Touches: factions/order.html, dossiers/ezra.html, campaign/spine.html (H'Catha report chain), working/glyth-watcher.md.
  src: memory-canon campaign-canon § Key NPCs (Ezra); chat-cosmic-campaign-structure § Open; chat-astral-sea-worldbuilding § Open

- **[decide]** What the Watchers are doing now
  The parallel Watchers track for the campaign view.
  src: chat-organizing-framework § Open; memory-canon open-decisions (DM views)

- **[decide]** Names for two Watchers
  H'Catha's Watcher is a woman with no name yet (placeholder Nereth Vaul; Ondessa's name is taken). The Glyth Watcher has no name, and how she got out is unset.
  src: memory-canon campaign-canon § Antagonists (H'Catha refinement); chat-astral-sea-worldbuilding § H'Catha: Ondessa and the Watcher; working/glyth-watcher.md

- **[fix]** Watchers are posted to regions of worlds
  Page says Watchers "take a posting — to a plane rather than a world". Change to: "then take a posting to a region of a world. A world may hold several Watchers, depending on its size and peoples."
  src: memory-canon campaign-canon § Key NPCs (Watcher ruling corrected); timeline "The Order of the All-Father"; working/glyth-watcher.md § Sketch

- **[add]** The Order guards the Ortholiths
  Add to the lead: "The Order guards the Ortholiths, believing the taken are inside them. 'Ortholith' is the Order's word for what most people call a Monolith."
  src: timeline "The Order of the All-Father"; memory-canon campaign-canon § Cosmology (Continuity and Ortholiths)

- **[add]** Contracts and tips
  Add to Function: "Watchers pass contracts and tips to the Fleet to head off trouble long before a world reaches a Zenith."
  src: memory-canon campaign-canon § Key NPCs (world awareness)

- **[add]** The Sol extraction
  Add under Watchers: "A Watcher extracted Sol Fortuna from Aethris, against the Order's remit to preserve worlds, not individuals." (Add a matching line on crew/sol.html.)
  src: chat-early-planning § FIA lore content

- **[add]** H'Catha's Watcher
  Add a row: "H'Catha's Watcher. Posted near the misty rim. She trades intelligence and protection with Ondessa and relays what she learns to the Order and to Caelestis; her reports are known as unusually useful, because H'Catha sits at Realmspace's edge where traffic and merchants pass. She saw factions moving on the meteorite and reported it as a precaution. She expected seasoned sailors, not cadets." Ezra's instructor.
  src: memory-canon campaign-canon § Antagonists (eclipse line), § Key NPCs, § Naming (H'Catha decisions); chat-astral-sea-worldbuilding § H'Catha

- **[add]** The Watcher who came back from Glyth
  Add a named-but-unseen row: "A Watcher posted to a region of Glyth got out after years inside the elder brain's range. She still hears it." (Eris Morn pattern.)
  src: working/glyth-watcher.md; memory-canon open-decisions (Vecna direction 2026-10-24)

- **[add]** Ezra's next stop
  Add to Ezra's row: "Collected at H'Catha by a Caelestis crew and carried to the Hall, where his journey as a Watcher begins."
  src: memory-canon campaign-canon § Key NPCs (Ezra)

---

### factions/seekers.html

- **[decide]** How the Seekers divide
  Settled: Vecna is an open god with a following under many names, and his followers are the Seekers. Still open is the inner shape, because the draft keeps a second body (open faithful vs method-taught chapters), and N'ghathrod's colony is a chapter that believes it serves an elder brain. Options:
  (a) Every chapter worships him under some name; the colony is the lone exception.
  (b) The Seekers are the umbrella: a public faith wing that worships him (some under his own name) and a method wing that works his method without knowing whose it is. Some people belong to both without knowing they serve the same hand.
  Touches: factions/seekers.html, factions/deities.html (Vecna entry), campaign/ascension/index.html, working/vecna.md (§ The two bodies).
  src: session-rulings (Vecna); memory-canon open-decisions (Seekers line, "Locked this pass"); working/vecna.md § The two bodies

- **[fix]** Chapters know him under many names
  The intro says "No chapter knows the name Vecna." Rewrite: "Chapters know him by many names. Some use his own." Shape the rest per the decide above.
  src: session-rulings (Vecna)

- **[fix]** Structural detail lives on the Ascension
  Page says "Structural detail in the Remaking". Link `campaign/ascension/`.
  src: chat-cosmic-campaign-structure § Superseded

- **[drop]** The Restorers as eldest chapter
  The section "The eldest chapter" says "The Restorers are the first of these, and the only one that outgrew its own world". That is Restorers v1, superseded by v2, which has no tie to Seekers or Vecna. Remove the section. (Same drop on factions/restorers.html.)
  src: chat-cosmic-campaign-structure § Superseded (Restorers v1 → v2); campaign/ascension ("The Restorers appear in no part of this")

- **[add]** The founding story
  Add to The founding story: chapters share no glyph. They connect through the same account of the voice, the information-for-information trade rule, and the founding phrase "We were taught how to ask." Each chapter's symbol depicts its own secret, drawn so the subject is the void and only its surroundings show.
  src: memory-canon open-decisions ("Locked this pass")

- **[add]** The largest chapter
  Add under "What a chapter usually is" (or the Vth'orama dial): "N'ghathrod's colony is the largest Seeker chapter and the only one that travels. It coordinates with planet-bound chapters."
  src: memory-canon open-decisions ("Locked this pass")

- **[add]** Steered toward those who got close
  Add to the Vth'orama dial notes: N'ghathrod is steered toward chapter members who got close to heart information. His taking them is their ascension.
  src: chat-cosmic-campaign-structure § Vecna's following

- **[add]** How chapters spread
  Add: chapters spread by direct seeding, by travellers, across the planes, and by being found in ruins.
  src: chat-cosmic-campaign-structure § Vecna's following

- **[add]** The chapter that reached Vanifer
  Add as a known chapter: "A Seeker chapter was the voice that reached Vanifer on Fonains. It traded her the lost meaning of the Alpha and the secret in the Cre'Tez blood. She believes the bargain was fair."
  src: memory-canon open-decisions (Locked 2026-10-25); working/vecna.md § On Fonains; timeline "A Seeker chapter reaches Vanifer"

- **[add]** The Book of Vile Darkness
  Add a short section: "The Book of Vile Darkness is the one whole account of the voice. Every chapter wants it."
  src: memory-canon open-decisions ("Locked this pass")

- **[add]** A reserved late beat
  DM-only, under Marks or as a reserved beat: a chapter that filled its hole.
  src: chat-cosmic-campaign-structure § The Seekers

---

### factions/deities.html

- **[decide]** What wounded Astra Virex
  The page (and the Astra Virex dossier) says "wounded by a Seam — Transformation and Boundary overlapping across something that was already…". Memory canon says the wound still needs precise wording. The chat's "a disturbance in Continuity" is the alternative; the "Existence pulse" is dead because there is no Existence Axiom. Options:
  (a) Lock the Seam.
  (b) "A disturbance in Continuity".
  (c) Reopen and strip the Seam wording.
  Decide together with Gregory's origin (factions/academy-fleet.html) and with whether Astra's long game is to connect to the Axioms (dossiers/astra-virex.html).
  Touches: factions/deities.html, dossiers/astra-virex.html, factions/academy-fleet.html (Gregory), dossiers/zerathis.html.
  src: memory-canon campaign-canon § Cosmology (Astra line), open-decisions (open list); chat-cosmic-campaign-structure § Cosmology redesign; chat-organizing-framework § NPCs and PCs

- **[decide]** The name of Vecna's realm
  Published lore calls it Cavitius. Keep Cavitius or name it.
  src: working/vecna.md § Realm; memory-canon open-decisions (Vecna/Tharizdun 2026-10-25)

- **[decide]** Shothragot
  His shape and where he is now.
  src: working/tharizdun.md § Open

- **[decide]** What the Accordance knows of Vecna
  Their view of him, and whether any of them saw his hand in the Fonains ritual. Options: they know and stay silent; they suspect; they do not know.
  src: working/vecna.md § What the gods think of him, § Open

- **[fix]** Zerathis is he
  The Zerathis entry says "where she now exists" and "Her allegiance was to Astra Virex". Change to he/his.
  src: memory-canon campaign-canon § Casey ("he is not a member"); chat-cosmic-campaign-structure § Superseded

- **[fix]** Who knows his name
  The Vecna entry says "His chapters have never heard the name, the colony has never heard the name". Rewrite: "His followers know him under many names, and some use his own. The colony has never heard the name." Follow the Seekers decide for anything further.
  src: session-rulings (Vecna); factions/seekers.html

- **[fix]** Open worship
  Keep "worshipped in the usual places, catalogued in the usual registries" and add: "His faithful are spread wide and thin across the spheres, and some use his own name. What nobody attributes to him is his work."
  src: working/vecna.md § intro; session-rulings (Vecna)

- **[add]** Why he can cross nothing
  The entry says "he can still cross nothing at all" without a reason. Add: "Gods cannot walk on worlds or reach the center. The cause is polarity, a same-charge push: a god can press toward a world's heart or toward residue, but the resistance grows until it is unbearable. Ascending gave Vecna the same polarity as Oerth's heart, and the world pushed him off. He works through vessels." Link Cosmology.
  src: session-rulings (polarity); working/divine-rules.md § Polarity; working/vecna.md § History

- **[add]** Vecna's history
  Add to the Vecna entry: "Vecna was a mage of Oerth, recruited as a boy by a voice whose source is unknown. He became a lich, built a following, and was never stopped. He became a god through a Zenith; the Monolith that answered it archived his mortality. On ascending he was pushed off Oerth, and he has spent centuries since building worship across the cosmos." His godhood is a known fact of the world; his plan is what is hidden.
  src: working/vecna.md § History; memory-canon open-decisions ("Locked this pass": the layer above him is parked; Vecna direction 2026-10-24)

- **[add]** Oerth
  Add: "Oerth, Vecna's homeworld, lies in its own sphere. It is a darkest-timeline world where the heroes failed, and his hold there is strongest. The Monolith of his ascension still stands, and his faithful treat it as their holiest site." DM: visiting should be horrible.
  src: session-rulings (Vecna); memory-canon open-decisions (Vecna/gods 2026-10-25); working/vecna.md § Oerth

- **[add]** What the faithful believe
  Add: "His faithful read him as the god of secrets: knowledge kept and knowledge lost. Most worship the safe face of it — memory, discretion, preservation. Some read him as benevolent."
  src: working/vecna.md § What the faithful believe; memory-canon open-decisions (Vecna direction 2026-10-24)

- **[add]** Names and readings
  Add the table: the Keeper, or the One Who Remembers (archivists, mourners); the Whispered One (spies, the persecuted); Vecna the returning god (fringe cults, such as the Darkest Day cult); Vecna the scholar's god (a respectable church that names him openly).
  src: working/vecna.md § Names and readings

- **[add]** Iconography
  Add: "The hand and the eye. Green eye-slit gems used as tokens, compasses and keys; eye tattoos on the neck; black candles burning green."
  src: working/vecna.md § Iconography

- **[add]** His realm
  Add: "Vecna's divine realm is anchored to Oerth's sphere, and he can reach it." (Name per the decide above.)
  src: working/vecna.md § Realm; memory-canon open-decisions (Vecna/Tharizdun 2026-10-25)

- **[add]** What the gods think of him
  Add: "The gods know Vecna ascended and know what he is god of. They regard him as new, small and strange. They do not know his plan."
  src: working/vecna.md § What the gods think of him

- **[add]** The voice above him
  Add one line to the Vecna entry: "The voice that recruited him as a boy has never been identified." (DM: the layer above him is parked.)
  src: memory-canon open-decisions ("Locked this pass"); chat-cosmic-campaign-structure § The Seekers

- **[add]** Tharizdun (new entry)
  Add a Tharizdun entry; the page has none:
  - "Tharizdun is an imprisoned god of entropy. His prison has no address in any known cosmology: a shadow realm of jagged rocks, rubble and laughter. His creed is 'If I can't get out, I'll bring everything here.'"
  - "Corrupted Monoliths are tunnels to his prison. Instead of archiving toward the Core, a corrupted Monolith sends existence to him. The Vanished of Fonains went there."
  - "His marks are spirals, a fanged eye in a split black crystal, and the words 'feed, consume, devour'. The purple slit-pupiled eye seen over Fonains is the Elder Elemental Eye."
  - "His avatar is Shothragot, who speaks of the Day of Chaos: the day the four Princes of Elemental Evil enter Fonains and break the barriers so Tharizdun can leave his prison."
  - "Vecna uses Tharizdun, and Tharizdun uses Vecna. There is no alliance. Tharizdun sees a door-opener who nudges Zeniths; Vecna sees a battering ram against the barriers, and plans his own exit before Tharizdun gets out."
  - "Vecna knew the Fonains Zenith would be ridden. The affront was that Tharizdun took the Vanished and a Monolith that should have been usable. When Lola's Boys broke that Monolith, both gods were hurt."
  Cross-link from the Vecna entry.
  src: session-rulings (Tharizdun; Elder Elemental Eye); memory-canon campaign-canon § Cosmology (Tharizdun lines), open-decisions (Vecna/Tharizdun 2026-10-25); working/tharizdun.md

- **[add]** The Accordance (new entry)
  Add an entry (a full page is deferred): "The Accordance is the six gods who sealed the Princes of Elemental Evil long ago. They appeared in The Darkest Day, speak through visions, and chose Lola's Boys as their champions, because every one of the party is tied to the Elemental Evil. They sent the party back in time to the year 425."
  src: memory-canon open-decisions (Fonains canon 2026-10-25); campaign-canon § Naming (Fonains Elemental Evil ties); timeline "The Accordance seals the Princes", "Lola's Boys in the year 425"; working/divine-rules.md § Polarity

- **[add]** The bounds of the gods
  Add under the lead: "Worship gives every god its power, influence and reach, which is why pantheons gather in particular spheres. One god carries many names across worlds: Takhisis is Tiamat, and Paladine is Bahamut."
  src: session-rulings (worship; one god many names); working/divine-rules.md

---

### factions/vthorama.html

- **[decide]** What happens to the taken when N'ghathrod's true body dies
  The page says his death "ends every n'ghathu at once"; rules/index.html says "what that does to the taken is unwritten"; memory canon holds open whether the copies die with him or one inherits. Options: hosts die with their copies; hosts are freed; the copies persist on their own; one copy inherits.
  Touches: factions/vthorama.html, dossiers/nghathrod.html, rules/index.html.
  src: memory-canon open-decisions (simulacrum line); chat-cosmic-campaign-structure § Open

- **[decide]** The colony's coat of arms
  The broken-ring arms are dropped. The Passage stays the field mark. Arms are unset.
  src: chat-cosmic-campaign-structure § Open, § Superseded

- **[decide]** "kesh"
  The page says "Many of the kesh were offered it". No source defines "kesh" (the only Kesh in the sweeps is Kesh Hollow on Anadia). Define the term or replace it.
  src: (inference) factions/vthorama.html

- **[decide]** When the five enna received their Holds
  Follows the five-centuries decide under dossiers/nghathrod.html. This page says "Five illithids, taken a century ago" and "a century of grievance".

- **[decide]** Brainless-raised term
  Follows the decide under factions/index.html; this page uses both "unculled" and "unthinned".

- **[fix]** N'ghathrod's age
  Page says "A mind flayer roughly a century into his second life". Write: "A mind flayer more than five centuries into his second life. He was captured aboard Thessalar's planar craft about 506 years ago and escaped with his lieutenants when it fell, about 500 years ago. The ceremorphosis the Rod altered also stopped his aging."
  src: session-rulings (Thessalar); memory-canon open-decisions (Locked 2026-10-25); timeline "Captured aboard Thessalar's craft", "The craft falls"

- **[fix]** The ship's name
  The lexicon gives "Vth'oramu — The whole of the going-home." The dreadnought's name is locked: Vth'oramu, shortened to Oramu, means "the passage to a new home". Change the lexicon line. Vth'orama ("the whole of the passage", the people named for the ship) can stay.
  src: memory-canon open-decisions (dreadnought name locked); chat-cosmic-campaign-structure § N'ghathrod and the colony

- **[fix]** The plan lives on the Ascension
  Page says "Full plan in the Remaking". Link `campaign/ascension/`.
  src: chat-cosmic-campaign-structure § Superseded

- **[fix]** Heart entrance term
  Page says "the Atria research" and "the hunt for Atria". Apply the ruling under campaign/ascension/index.html.

- **[add]** The Passage
  Add a Mark entry to the header or Terms: "N'ghathrod's mark is the Passage: a circle with a tail ending in another circle. It gains a circle for every linked world, so it doubles as a count."
  src: memory-canon open-decisions ("Locked this pass")

- **[add]** The taking
  Add under The taking:
  - "Each copy drifts from the original over time."
  - "N'ghathrod can assert himself over ordinary taken. Through the enna he can only speak."
  - "Tadpoles are aware before implantation. They learn, can be primed with a directive, and know Vth'oramu as home."
  - "The taken say 'Oramu', or a phrase built on it, when they die."
  src: chat-cosmic-campaign-structure § N'ghathrod and the colony; memory-canon open-decisions (Seekers line; operative resolved)

- **[add]** Objectives
  Add a short Objectives section: "N'ghathrod takes key individuals who can rise into positions of control, never crowds, and installs them as figures on worlds to prepare for when he holds the artifacts."
  src: memory-canon open-decisions (constraints line; Taken King line); chat-cosmic-campaign-structure § Succession and taking as missions

- **[add]** His death
  Add to N'ghathrod's section (DM-only): killing him has later repercussions, possibly in another campaign.
  src: memory-canon open-decisions (Taken King line)

---

### factions/vocath-operation.html

- **[decide]** The Sky Dock crate's mark
  Follows the decide under campaign/colony/index.html. This page puts the eye-in-a-wheel "on the Sky Dock crate".

- **[fix]** Clint went overboard, and the wind carried him
  Page says "When the first boarding came, he seized the boarders' own craft and broke away with it" and "How he crossed is undecided." Canon: Clint Dashforest went overboard in the Bellwether Crow ambush, and a psychic wind carried him to Fonains. Rewrite both lines.
  src: memory-canon campaign-canon § Cosmology (Clint line), § Naming (Astral Sea travel); open-decisions (operative resolved); timeline "The Bellwether Crow ambushed"

- **[fix]** What Tarroway's tables track
  Page says "He has no idea the patrol his tables track was a ship under command rather than an animal keeping a rhythm, or that it stopped keeping the patrol because it left." Canon: the psychic wind is the explanation for Tarroway's failing timing tables. Rewrite: his tables fail because the psychic wind does not keep a rhythm.
  Touches: dossiers/tarroway.html, dossiers/vthoramu.html.
  src: memory-canon campaign-canon § Naming (Astral Sea travel); chat-cosmic-campaign-structure § Superseded

- **[fix]** The account lives on Colony Operations
  Page says "Full account in the Remaking" and links "The Remaking" in Connections. Link `campaign/colony/`.
  src: chat-cosmic-campaign-structure § Superseded

- **[add]** Joffrey's row
  Add: "Joffrey was taken slowly. He was himself for months, decorated and top of his class, and only recently finished converting. One clean, confused survivor of the Bellwether Crow noticed he had changed and never reported it." DM: the crew finds that survivor by pulling the Crow's roster.
  src: memory-canon open-decisions (operative resolved)

---

### factions/restorers.html

- **[decide]** Rivals for the set?
  Are the Restorers gathering the same set as Vecna's side, and do they know that reversing the Core's archived loss would undo the cosmos?
  src: chat-organizing-framework § Open

- **[fix]** The All-Mother
  Page says "which their doctrine names the Mother of the Universe" and the Doctrine stat "The Core is the Mother of the Universe". Change both to the All-Mother.
  src: chat-cosmic-campaign-structure § Superseded

- **[drop]** "The oldest chapter"
  The section marked Canon ("The Restorers are a Seeker chapter. They are the first one…") and the reveal sequence ending "Then read the providence entries in order. Then find the first entry." carry the superseded v1 framing (oldest Seeker chapter, fed by Vecna as providence). Restorers v2 has no tie to Vecna. Remove the section and rewrite the reveal bullet without the providence entries.
  src: chat-cosmic-campaign-structure § Superseded (Restorers v1 → v2); campaign/ascension

---

### factions/aethris.html

- **[add]** The Prism Ascendant
  Add to the lead: "The Prism Ascendant is the Monolith that answered Aethris's Zenith. Aethris believes it came from Tymora, as an answer to their ritual of perfection. Its appearance did not end the Zenith: the ritual is unfinished, and Aethris still wants Sol to complete it."
  src: memory-canon campaign-canon § Player characters (Aethris lines)

- **[add]** Vecna's hand
  DM-only: Vecna is pushing Aethris's Zenith toward completion. Tymora likely would not want it finished.
  src: memory-canon campaign-canon § Player characters (Aethris lines)

---

### factions/runekeepers.html

- **[decide]** Parked Runekeeper questions
  Parked, not locked: sealing as the inverse of opening; whether sealed worlds are invisible to A.T.L.A.S.; other worlds' own hiding methods; runes as the "finding" half of the art.
  src: memory-canon open-decisions (Runekeepers line)

- **[add]** The hidden entrance
  Add to the lead: "The Runekeepers hid their own world's heart entrance." DM: specific to Tumak's world, a sprinkle rather than a rule. Use the entrance term from the Aperture/Atrium ruling.
  src: memory-canon open-decisions (Runekeepers line)

---

### factions/spectrum.html

- **[decide]** Fracture Cult and Archivists
  Follows the decide under factions/index.html; the page body carries the same overlap text.
  src: memory-canon open-decisions (audit line)

# Campaign

Campaign planning pages under `prime/campaign/`. Items are grouped by page and ordered decide, fix, drop, add. Planning pages speak in DM voice. World facts quoted for a page read in-world.

The Remaking is now only the Ascension's fail state. Every page link that says "the Remaking" for the plan or the machinery points to `campaign/ascension/` (the plan) or `campaign/colony/` (the colony's operations and the Fork) instead.

---

### campaign/spine.html

- **[decide]** Central question beside the theme
  The theme is canon (see the add below). The question is whether "Who decides what's real?" stays the Central Question. Options:
  (a) Keep both: the question plus the theme beneath it.
  (b) Make the belonging question the Central Question: "Can a home be made, or only returned to — and what does making one out of what was taken cost?"
  (c) Retire "Who decides what's real?".
  (d) State the early-planning version as a pair with the theme: "Who gets to be real — and Vecna wants to be the answer."
  Touches: campaign/spine.html (Central Question), campaign/index.html if it quotes the question.
  src: memory-canon open-decisions (theme line); chat-cosmic-campaign-structure § Open; chat-early-planning § Campaign identity

- **[decide]** Act structure and where the Citadel sits
  The spine runs Arc 1 Academy, Arc 2 Driftwardens, Arc 3 Recognition, Arc 4 Cast. The timeline runs Act 2 ranked missions, Act 3 N'ghathrod (Vth'oramu and the real N'ghathrod; the victory moves Vecna onto his failsafe), Act 4 the center. Memory canon calls N'ghathrod "the Act 2 villain the party works up to". Korey said the Radiant Citadel lands in Arc 4; the spine lists "The Radiant Citadel and the Core become a real destination" under Arc 3 possibilities. Options:
  (a) Adopt the timeline's acts.
  (b) Keep the spine's arcs as written.
  (c) Merge: Arc 3 = N'ghathrod, Arc 4 = the center and the Citadel.
  Touches: campaign/spine.html, campaign/colony/index.html, campaign/ascension/index.html, timeline.json act events, dossiers/nghathrod.html status line ("Arc 2 antagonist").
  src: timeline events "Act 2/3/4"; memory-canon open-decisions (working direction line); chat-cosmic-campaign-structure § V006 and the arc, § Open

- **[decide]** "Arc" or "Act"
  The sweep records "Arc" names replacing "Act" names. Memory canon and the timeline say "Act". Pick one word and apply it across spine, colony, ascension and timeline.
  src: chat-cosmic-campaign-structure § Superseded; timeline; memory-canon open-decisions

- **[decide]** Arc 2's range
  Options:
  (a) Realmspace plus at most one other system.
  (b) A geographic leash that widens with rank: crews start leashed to a system and range grows as they rise ("town → region → world and beyond").
  Once ruled, add the leash (or the fixed range) to Arc 2 Shape.
  src: chat-early-planning § Campaign Planning, § Institutions; memory-canon open-decisions (Act 2 plan line)

- **[decide]** The Act 2 handler
  The spine says "The handler is unnamed." Korey wants a Variks-style non-human. Candidates:
  (a) the Glyth Watcher (working/glyth-watcher.md § Where she fits);
  (b) a dohwar broker (Pip);
  (c) a defected scro (Vahl);
  (d) a xixchil contract-surgeon.
  Touches: campaign/spine.html (Arc 2 Open development), factions/order.html if the Glyth Watcher is chosen.
  src: working/glyth-watcher.md; chat-early-planning § Campaign Planning § Open; memory-canon open-decisions (Act 2 handler in the open list)

- **[decide]** Which repercussion follows N'ghathrod's death
  Killing N'ghathrod has later repercussions, possibly in another campaign (canon; see add below). The sweep says two or three candidates exist without listing them. Korey to name the candidates and pick.
  src: memory-canon open-decisions (Taken King line); chat-cosmic-campaign-structure § Campaign shape, § Open

- **[decide]** The cosmos threads behind the Fleet's strain
  Korey's threads to shape: a Mara Sov–style "Reef" sovereign at the sphere's edge; an Osiris-style figure who warned and was pushed out; N'ghathrod's sect and its affiliates (unnamed to the Fleet Corps). He wants broad brushstrokes, not everything figured out. Note: the repo's "Osiris" is an unrelated town on Fonains (the Blooming Glass bounty came out of it).
  src: chat-astral-sea-worldbuilding § Open; memory-canon open-decisions (Voyage 007 intent, Taken King)

- **[decide]** The Princes' elemental pressure and the crew
  Does the Caelestis crew meet the Princes of Elemental Evil's pressure directly, meet its aftermath, or only hear of it?
  src: chat-organizing-framework § Open

- **[decide]** What the meteor is and why Caelestis wants it
  Fixed points: the meteor is adamantine, large, mined in an occupied area, and matters locally, to Caelestis and to the Order; working to obtain it is a form of treason on H'Catha; memory canon says "adamantine's value still needs something more". Options:
  (a) Containment. Adamantine survives disintegration, so the Fleet wants it for a vault, cradle or plating, and the cadet crew is cover.
  (b) Sight. The Sovereign Eye cannot see through adamantine, which gives it its local value.
  (c) The spine's three depths as written: adamantine, an Ortholith fragment, the strike as bait.
  (d) A combination, e.g. (a) for Caelestis and (b) for H'Catha.
  Also open: whether the Academy wanted this meteor or any adamantine, and what made it urgent (one lead points at the Brig).
  Touches: campaign/spine.html (H'Catha arc), campaign/plot-hooks.html (meteorite hook), realms H'Catha page.
  src: memory-canon campaign-canon § Antagonists (H'Catha direction, H'Catha decisions); chat-organizing-framework § Settled, § Open; chat-astral-sea-worldbuilding § Superseded; chat-cosmic-campaign-structure § Open

- **[decide]** Ondessa's standing
  Canon so far: Ondessa is a beholder ruler; she was usurped or nearly killed at the last eclipse through betrayal or someone working into her good graces; her central (anti-magic) eye was destroyed in that assassination; she still lives, so the other rulers want her dead; the crew can choose to protect or reinstate her. Memory canon leans that she still holds her seat. The spine's approach table calls the northeast "Fallen domain — No ruler, no port, an unwatched coast", and the sweep says that domain is Ondessa's. Options:
  (a) Seated but weakened.
  (b) Deposed and hiding.
  (c) Her domain occupied, with her alive.
  Touches: campaign/spine.html (Beat 2 approach table, Beat 4 avenues), dossiers/ezra.html, dossiers/qitru.html, factions/order.html (Watcher row), realms H'Catha page.
  src: memory-canon campaign-canon § Antagonists (H'Catha leaning, eclipse, sovereign lines); chat-astral-sea-worldbuilding § Superseded

- **[decide]** The Rival's name
  The second claimant to the meteor is "the Rival" on the page. The sweep proposes Oszrax. Confirm Oszrax or name him.
  Touches: campaign/spine.html (timeline, approach table, forces table), dossiers/index.html.
  src: chat-astral-sea-worldbuilding § Superseded

- **[fix]** Lowest Driftwarden rank is Grade IV
  The grade table puts Grade V (station, lane, ship; levels 4–5) at the bottom and says the crew graduates at the lowest rank. The graduation board is all Grade IV (Lane Marker 14 and Repossession moved to Grade IV), and memory canon says every graduation contract is at rank. So the lowest Driftwarden rank matches Grade IV. Change the table note: Grade V work is never posted to Driftwardens.
  src: memory-canon open-decisions (Mission board line); chat-cosmic-campaign-structure § Contract board, § Superseded

- **[fix]** Repoint every Remaking link
  Page says "Spine, Remaking, Voyages", "The Remaking is the machinery of the opposition", "work the Remaking when deciding what moves against it", Arc 1 "See the Remaking", "the most visible symptom of the Remaking", and "see Remaking → Failure state". Change to:
  - The machinery of the opposition lives on the Ascension (the plan) and Colony Operations (the colony's work). The header line reads "Spine, Ascension, Colony Operations, Voyages".
  - "Zeniths arriving too often are the most visible symptom of the Ascension."
  - The failure state lives on the Ascension page: link `campaign/ascension/`.
  src: chat-cosmic-campaign-structure § Superseded

- **[fix]** Arc 4 is the Cast
  Page says "The inscription completes or fails" and "The Convergence rule says he gets one cast". The inscription mechanism is superseded. Write: "Arc 4 — Cast. Vecna's working reaches its single cast," and keep the rest of the paragraph. Cite the Ascension page § The Cast for the one-cast rule.
  src: campaign/ascension § The Cast; chat-early-planning (inscription superseded)

- **[fix]** Tracker links point to the record
  The page links "Tracker", "Character Arc Tracker" and "Wildspace Tracker" and says current-state tracking "lives in the Character Arc Tracker". The Google Sheet trackers are retired. Point to the hand-kept record in `data/*.json` and the Voyages board.
  src: memory-canon site-and-automation § Automation pipeline; chat-cosmic-campaign-structure § Superseded

- **[fix]** H'Catha has ten domains
  Page says "the Spindle, the eight domains" and "that reputation is read eight different ways". H'Catha has ten domains, one per eyestalk, each with one ruler, plus the Sovereign Eye at the Spindle. Change both to ten.
  src: memory-canon campaign-canon § Antagonists (H'Catha direction supersedes eight domains; H'Catha sovereign)

- **[fix]** The crossing is a rolled trek, and mercane is lowercase
  Beat 1 says "One encounter earns its place: an Mercane merchant ship. It introduces the Mercane…". A ship at spelljamming speed cannot be hailed, so there is no fixed encounter at speed. Replace with: each day of the 14-day crossing, roll a d6; on a 1, roll on the crossing d8 table (see Voyages). The mercane trader is entry 8, moored at a lane marker. Lowercase "mercane" everywhere on the page (Beats 1–3).
  src: memory-canon campaign-canon § Naming (mercane line, crossing encounters line); chat-voyage-6-7-planning § Crossing and H'Catha

- **[fix]** Where the meteor struck and how it sits
  Page says the meteorite "struck the Spindle", "Impact, on the seam between Kurrzot and the Rival", and "Week 1 Kurrzot's ogre drags the meteorite into a seam cave". Rewrite:
  - The meteor struck at the Pupil, the innermost band nearest the Spindle, on the seam between Kurrzot's domain and the Rival's.
  - It is large (an ogre cannot drag 60 tons) and is a vein being mined in an occupied, skirmished area. The crew retrieves a worthwhile load, not the whole stone. The module's 500-lb chunk sits in the ogre's cave as one prize among the diggings.
  - Common Law holds everywhere in daylight (no killing, wounding, stealing or taking anyone against their will), so any seizure or press-gang beat in the timeline happens at night.
  src: chat-astral-sea-worldbuilding § Meteorite and mission, § Superseded, § Open; memory-canon campaign-canon § Antagonists, § Naming (H'Catha decisions)

- **[fix]** Ostekk rules a domain on H'Catha
  Page says "Ostekk is unplaced", "Your call Ostekk on H'Catha, or elsewhere", lists "whether Ostekk is here" under Open, and Weeks 2–3 says "Ostekk's automatons come ashore at the rim and tunnel inland". Write: Ostekk is a current ruling beholder of H'Catha. The crew hearing his name soon after landing is the payoff. His automatons are his searchers, working Ondessa's sea-caves on legs. Remove the Open entry.
  src: memory-canon campaign-canon § Naming (H'Catha decisions); chat-astral-sea-worldbuilding § Meteorite and mission, § Superseded

- **[fix]** Ondessa replaces the exile
  Beat 4 offers "Local help — a seam guide, the Watcher, or the exile. The exile wants passage off the world", and Open lists "the exile's name". The enlightened exile is retired. Ondessa, a beholder ruler, fills that role, and the Watcher is a separate person. Replace the avenue with "Local help — a seam guide, the Watcher, or Ondessa through the Watcher", and drop "the exile's name" from Open.
  src: memory-canon campaign-canon § Antagonists (Ondessa lines); chat-astral-sea-worldbuilding § Ondessa, § Superseded

- **[fix]** The tyrant ship reads as native traffic
  Beat 2 says the ship "reads as a claimant returning, and the domain it enters decides whether that is a homecoming, a grudge, or an opportunity". Canon: every beholder ship is carved stone, so the tyrant ship reads as native and a few ships in orbit is normal traffic. A Caelestis scuttle ship docks in the Cargo Deck intake and carries the landing party down unnoticed. Rewrite Beat 2 around that.
  src: memory-canon campaign-canon § Naming (approach to H'Catha)

- **[fix]** No orbital patrols at H'Catha
  Beat 5 lists "Tyrant-ship patrols — To identify the ship hovering at their mountain… someone hails it". Arrival tension comes from crossing watched domain borders on the ground. Drop the patrol row.
  src: memory-canon campaign-canon § Antagonists (H'Catha layout), § Naming (approach to H'Catha)

- **[fix]** Heart-links are permanent
  Arc 3 says the crew may "decide whether to sever one". Heart-links are permanent and run both ways. Reword to living with a link: the crew decides what to do about a linked pair whose worlds are bleeding into each other.
  src: memory-canon open-decisions (world-heart framework line)

- **[drop]** Abandoned Beholders
  "Threads planted for Arc 2" lists "Abandoned Beholders". The tyrant ship had one beholder, Vaelorix, alone and dead aboard; his crew were the nine OSTEKK units. Remove the thread.
  src: chat-voyage-6-7-planning § Open; memory-canon campaign-canon § Antagonists (beholders solitary; no thralls aboard)

- **[add]** The theme: belonging
  Add beside the Central Question: "Everything in this setting is separated from what it belongs to and trying to get back — every PC, N'ghathrod and his people, Astra Virex, Vecna, the Seekers, the world-hearts and the residue pieces. New material should want to belong somewhere. The campaign asks whether a home can be made or only returned to, and what making one out of what was taken costs."
  src: memory-canon open-decisions (stated campaign theme line); chat-cosmic-campaign-structure § Act 1 retrofit

- **[add]** Tone and structure references
  Add to the spine intro and frame (DM-only):
  - Destiny's The Taken King is the tone and structure blueprint. N'ghathrod is its Oryx; Vecna is its Witness.
  - Story architecture follows Legend of Vox Machina: each job plants small hints that tug up toward bigger threads, so exploration always reaches a larger story.
  - The world runs Mighty Nein–style, as a living world. The vibe is Destiny, Star Wars and Guardians of the Galaxy.
  - Found family is an explicit emotional pillar.
  src: memory-canon open-decisions (Taken King line; Direction 2026-10-21); chat-early-planning § Campaign identity; chat-astral-sea-worldbuilding § Settled

- **[add]** Genre by world
  Add under Cosmological Pressures: cosmic horror runs in the background of the whole campaign, and each world anchors its own genre. Realmspace is traditional D&D fantasy; spelljamming bends a little sci-fi; H'Catha is a spy thriller where subterfuge, stealth, information and a silver tongue are worth most, and violence is always an option with consequences.
  src: memory-canon open-decisions (Direction 2026-10-21)

- **[add]** The Fleet is stretched thin
  Add to Cosmological Pressures (and the H'Catha arc's "why cadets"): several pressures are building at once. More Zeniths. More Watcher requests for Fleet Corps help. A whiff of an illithid sect (N'ghathrod and his affiliates, unnamed to the Corps). Worlds where something is happening that Watchers respond to. Astral-level events. Something kept under wraps at the sphere's edge. Strain from Vecna and the Axioms. Vocath sees the thinning and uses it to stress the Academy. This is why cadets get the H'Catha mission.
  src: memory-canon open-decisions (Voyage 007 intent); timeline "The Fleet stretched thin"; chat-astral-sea-worldbuilding § Caelestis structure

- **[add]** How the H'Catha report reached the cadets
  Add to the H'Catha arc timeline: H'Catha's Watcher saw factions moving on the meteorite and reported it as a precaution against escalation (no Zenith on H'Catha). The report went Watcher → the Hall → Fleet Corps → Academy, and Mirt made it a cadet mission. The report is also why backup (Ezra) is sent.
  src: chat-astral-sea-worldbuilding § Caelestis structure; memory-canon campaign-canon § Key NPCs (Watcher ruling)

- **[add]** The eclipse is the H'Catha clock
  Add to the H'Catha insert: the coming eclipse is the arc's clock. When it comes, the Sovereign Eye shuts and every beholder sleeps at once. Eclipses are short (well under a day) and rare (months apart, maybe yearly), so plotting spans the whole gap, and the next one is close. The crew chooses whether to stay through it to protect or reinstate Ondessa (a huge ally, higher stakes) or call the mission done.
  src: memory-canon campaign-canon § Antagonists (eclipse, sovereign lines)

- **[add]** Landing is hard
  Add to Beat 3: landing is hard for everyone. Other parties have been there two weeks or more. The crew arrives about three weeks after impact. The Watcher is near the rim, a trek away, and expected seasoned sailors, not cadets, which strains things with the instructor and shows that Caelestis is spread thin.
  src: memory-canon campaign-canon § Antagonists (H'Catha refinement), § Key NPCs, § Naming (H'Catha decisions)

- **[add]** Who goes down and who holds the helm
  Add to the H'Catha insert: before the session the crew picks Saerthe or Tarto as the instructor for H'Catha; each handles talk of the missing things differently. Someone able to cast stays aboard to hold the helm (Saerthe at the helm, Ryeback commanding the deck). Leaving Miken aboard alone is the high-tension option.
  src: memory-canon open-decisions (Voyage 007 intent); campaign-canon § Naming (approach to H'Catha)

- **[add]** Contract board cadence
  Add under Arc 2 "The board": after the graduation board, each board carries two or three contracts at the crew's rank plus one reach. Contracts below rank open only after promotion. Surfaces feel nearly mundane; the story is found on arrival.
  src: chat-cosmic-campaign-structure § Contract board; memory-canon open-decisions (Act 2 plan, Mission board lines)

- **[add]** How Arc 2 meets the opposition
  Add to Arc 2 Shape: Seeker chapters are met one at a time, each on its own world. The crew scuffles with N'ghathrod's satellite crews, not with him. Zeniths visibly become more frequent across the crew's contracts.
  src: timeline "Act 2: ranked missions"; memory-canon open-decisions (antagonist structure line)

- **[add]** Linked worlds bleed
  Add to Arc 2 or Arc 3 possibilities: linked worlds bleed into each other over time, one gaining what the other loses. This is a planned mission: strange things on two worlds, go investigate. Astra Virex can show up mid-merge.
  src: memory-canon open-decisions (N'ghathrod's plan accepted direction)

- **[add]** Arc 1's close
  Add to Arc 1's goal and critical beats: Arc 1 closes around sessions 8–10 with the attack on Caelestis and graduation, with the party at level 4. The Brig thief thread comes forward before graduation so the crew can engage with it and possibly learn who the thief is (Joffrey).
  src: memory-canon open-decisions (Planned line); timeline "Attack on Caelestis and graduation"

- **[add]** N'ghathrod's death has consequences
  Add to the frame: killing N'ghathrod has later repercussions, possibly in another campaign. (Which one is a decide above.)
  src: memory-canon open-decisions (Taken King line)

---

### campaign/ascension/index.html

- **[decide]** Heart entrance term: Aperture or Atrium
  Memory canon uses "Aperture" (world-heart framework; "Zeniths are the cheap half and Apertures the rare half"). The sweep records a rename "Aperture" → "Atrium" (turn 278), and this page, Colony Operations, What If, the Vth'orama page and the Ulh'rek dossier say "Atrium"/"Atria". Options: Aperture, or Atrium.
  Touches: campaign/ascension/index.html, campaign/colony/index.html, campaign/what-if.html, factions/vthorama.html, factions/runekeepers.html, dossiers/ulhrek.html, dossiers/khaleth.html.
  src: memory-canon open-decisions (world-heart framework; "Locked this pass"); chat-cosmic-campaign-structure § Superseded

- **[decide]** Has N'ghathrod ever been given an order?
  This page says "the single operational instruction he has ever given reached N'ghathrod secondhand: a world with a Monolith…". Colony Operations says "he has never been given an order". Memory canon says Vecna makes no handshake deals or direct orders. Options:
  (a) Keep the secondhand instruction here and reword Colony Operations to "he has never been given an order he knew came from anyone but his elder brain".
  (b) Drop the instruction here.
  Touches: campaign/ascension/index.html, campaign/colony/index.html.
  src: chat-cosmic-campaign-structure § Open; memory-canon open-decisions (working direction line)

- **[decide]** How Vecna connects his working to the Core
  The arc review's largest gap (Arcs 3 and 4). Fixed points: he is the First Seeker; he wants to know how it all began, and the Core holds the record of the Reach; he needs vessels because polarity pushed him off Oerth.
  src: chat-organizing-framework § Open; memory-canon open-decisions ("Locked this pass"; Vecna/gods 2026-10-25)

- **[decide]** Who coordinates the cross-sphere work
  The chat gave Vecna lieutenants holding the pairings. Current canon gives N'ghathrod five lieutenants and leaves a hidden third party closer to Vecna. Options: lieutenants under Vecna; the hidden third party; nobody (the method runs itself).
  src: chat-organizing-framework § Open; memory-canon open-decisions (antagonist structure line)

- **[decide]** Vecna's grievance, the Cast's floor, the diminished arrival, the pantheons
  Still open: Vecna's grievance (the page already carries it as open), the floor for the Cast, what a diminished arrival looks like, and how the pantheons respond.
  src: chat-cosmic-campaign-structure § Open

- **[decide]** The failure state
  Which cosmic change the Remaking leaves: Axiom rewritten, Continuity severed, or paracausal channel captured. How it reaches the table: backstory pressure, a vision or flash-forward, or a playable alternate timeline (Eve of Ruin and Rise of Vecna as reskinnable references).
  src: memory-canon open-decisions (Failure state line); chat-early-planning § D&D module where evil won § Open

- **[decide]** Which congregation the crew meets first, and how sincere
  Options for first meeting: the benevolent church that names Vecna openly; a Keeper congregation; a fringe returning-god cult. Also: is the benevolent church sincere throughout, or does one of its high clergy know more?
  src: working/vecna.md § Open

- **[fix]** Worship powers Vecna; the method does his work
  "Why he needs hands" says "which is why he taught a method instead of founding a church, why his agents have never heard his name". Vecna is an open god with a following under many names. Rewrite: "Worship gives him power; the method does his work. Most of those who do that work know him by another name, and some, like N'ghathrod, do not know him at all."
  src: session-rulings (Vecna); working/vecna.md § Promotes to

- **[fix]** The approach to the center
  Page says "The approach is lethal to anything, worse for gods, and worst for the gods born from the Reach." Mortals can cross it. Polarity pushes gods back, harder the closer they come, until the resistance is unbearable; the center harms gods without destroying them. Rewrite to that, keeping that the Reach-born suffer worst and newer gods like Vecna differently.
  src: session-rulings (polarity); memory-canon open-decisions (Vecna/gods 2026-10-25); working/divine-rules.md § Polarity

- **[fix]** The colony is a Seeker chapter
  Page says the two bodies have "never met" and "neither knows the other matters". N'ghathrod's colony is itself a Seeker chapter, the largest and the only travelling one, and it coordinates with planet-bound chapters. Restate: the colony is a chapter that works with other chapters without understanding the whole it serves.
  src: memory-canon open-decisions ("Locked this pass"); factions/vthorama.html

- **[fix]** The dragons have not reached Krynn
  "A thread worth pulling" says "the Fonains material, where dragons left for Krynn". Change to: "where the dragons left Fonains and most worlds to face Takhisis, and have not yet reached Krynn."
  src: session-rulings (dragons)

- **[add]** Polarity is why he needs hands
  Add to "Why he needs hands": Vecna ascended to godhood on Oerth. Ascending gave him the same polarity as Oerth's heart, and the world pushed him off. Polarity pushes every god back from a heart, hardest at the deepest one, so the same push bars him from the First Heart. Oerth was the first proof of the rule. This is why he works through vessels.
  src: session-rulings (Vecna; polarity); memory-canon open-decisions (Vecna/gods 2026-10-25); working/vecna.md § Why the repulsion matters

- **[add]** The Ascension still to come
  Add to the lead if missing: Vecna's godhood is already achieved. The Ascension still to come is his climb to Axiom.
  src: session-rulings (Vecna)

- **[add]** The lattice is a body
  Add to The Figure: N'ghathrod's lattice of linked worlds is a body. Linked worlds are its organs, links its nerves, colonies its cells. It is deliberately the same shape as Vecna's own aim: a mind with the cosmos for a body.
  src: memory-canon open-decisions (N'ghathrod's plan accepted direction); chat-cosmic-campaign-structure § World-hearts

- **[add]** Tharizdun as contingency
  Add a short section under The hands: Vecna uses Tharizdun as a contingency and a battering ram against the barriers. Use, not alliance. The Day of Chaos — when the Princes of Elemental Evil break the barriers so Tharizdun can leave his prison — is part of that use, and Vecna plans his own exit before Tharizdun gets out.
  src: session-rulings (Tharizdun); working/tharizdun.md § Vecna and Tharizdun

---

### campaign/colony/index.html

- **[decide]** Priming versus opening
  Still open: whether only cross-weave worlds need a heart dungeon, what priming involves (what, where, how), and what it gains N'ghathrod. Options: split priming from opening as memory canon proposes, or confirm the sweep's retirement of priming.
  src: memory-canon open-decisions (Fonains lore tie-in; audit line; operative-resolved open list)

- **[decide]** Which mark is on the Sky Dock crates
  This page lists "the Passage marks on the Sky Dock crates" as colony work. The Vocath's Operation page puts the eye-in-a-wheel on "the Sky Dock crate". The Passage is N'ghathrod's mark; the eye-in-a-wheel is Vocath's. Options: the Passage, the eye-in-a-wheel, or both on different crates.
  Touches: campaign/colony/index.html, factions/vocath-operation.html.
  src: factions/vocath-operation.html; memory-canon open-decisions ("Locked this pass")

- **[decide]** N'ghathrod's orders
  Follows the ruling under campaign/ascension/index.html. This page says "he has never been given an order".

- **[fix]** A heart opens only where a Monolith stands
  The world-status table makes an entrance-found world without a Monolith "enterable and unlinkable". Locked canon: a heart can only be opened where a Monolith stands, which is why N'ghathrod needs Zeniths and saturates worlds with Monoliths. Rewrite the table so a world without a Monolith cannot be opened at all, even with its entrance found.
  src: memory-canon open-decisions ("Locked this pass")

- **[fix]** Clint went overboard
  Page says "Clint seized the boarders' craft and broke away with it to pull the pursuit off the Crow". Canon: Clint Dashforest went overboard in the Bellwether Crow ambush, and the psychic wind carried him to Fonains. Rewrite the line.
  src: memory-canon open-decisions (operative resolved); campaign-canon § Naming (Astral Sea travel); timeline "The Bellwether Crow ambushed"

- **[fix]** Heart entrance term
  Page says "Atrium"/"Atria" throughout How they work, World status, State A and The race. Apply the Aperture/Atrium ruling under campaign/ascension/index.html.

- **[add]** Succession: taking the doorkeepers
  Add to How they work: N'ghathrod's parallel objective is taking key individuals who control access to a heart, so the doors are already open when the residue arrives. He takes people who can rise into positions of control, never crowds, and installs them as figures on worlds to prepare for when he holds the artifacts. Denying him the artifacts is a setback, not a shutdown.
  src: memory-canon open-decisions (constraints line; Taken King line); chat-cosmic-campaign-structure § Succession and taking as missions

- **[add]** Takings surface as mundane missions
  Add as mission seeds: a missing person who comes back fine but wrong; someone who never takes off their gloves; three officials who all arrived the same year.
  src: chat-cosmic-campaign-structure § Succession and taking as missions

- **[add]** Who the colony is
  Add: he takes people of position; the outcast and the downtrodden form the colony's body.
  src: chat-cosmic-campaign-structure § The taking

- **[add]** Steered toward Seekers
  Add: N'ghathrod is steered toward Seeker chapter members who got close to heart information. His taking them is their ascension.
  src: chat-cosmic-campaign-structure § Vecna's following; factions/seekers.html (fourth dial)

- **[add]** The Crow survivor who noticed
  Add to The Tetherbreak engagement, qualifying "The survivors believe every word of it": one clean, confused survivor noticed Joffrey change and never reported it. The crew finds that survivor by pulling the Crow's roster.
  src: memory-canon open-decisions (operative resolved)

---

### campaign/index.html

- **[fix]** Spheres are not crystal shells
  Designations say "SPH for a crystal sphere". A sphere is a region of the Astral Sea holding several systems. Change to "SPH for a sphere".
  src: chat-organizing-framework § Cosmic structure; memory-canon campaign-canon § Cosmology (cosmic model)

- **[fix]** Constellation designations are ordinal
  The page and the sweep use bearings in degrees for CON designations (e.g. CON-312). Memory canon sets constellations as CON-01, CON-02 and so on, order-only like the other designations. Change the CON rule to ordinal numbers.
  src: memory-canon campaign-canon § Cosmology (constellations line); chat-cosmic-campaign-structure § Superseded (bearings)

- **[fix]** Repoint every Remaking reference
  Page says strain rises "because of the Remaking", iconic items "are not part of The Remaking", custody "can reference Remaking", and "Remaking is one level deeper than it". Change each to the Ascension or Colony Operations as fits.
  src: chat-cosmic-campaign-structure § Superseded

- **[fix]** The Book of Vile Darkness is a goal
  The page lists the Book of Vile Darkness among period pieces that "would not help anyone advance or stop it". Carve it out: the Book of Vile Darkness is the one whole account of the voice that recruited Vecna, and a possible goal for the Seekers and the crew.
  src: memory-canon open-decisions ("Locked this pass")

- **[fix]** Vecna works through vessels because of polarity
  Page says "Vecna himself can't teleport to monoliths — he must reach them patiently, through agents". Restate: gods cannot reach worlds or the center because of polarity, so Vecna works through vessels. The teleport-seal stays as a Fleet installation rule, separate from Vecna.
  src: session-rulings (polarity)

- **[fix]** A.T.L.A.S. anchor
  The example path uses "../../artifacts/#world-surveyor". "World Surveyor" is retired; the artifact is A.T.L.A.S. Change the example anchor.
  src: memory-canon campaign-canon § Cosmology (A.T.L.A.S. line)

- **[fix]** Guide path
  Page says the guide "lives in WIKI-PAGE-GUIDE.md at the repo root". It lives at `prime/notes/WIKI-PAGE-GUIDE.md`.
  src: CLAUDE.md § Read before editing

---

### campaign/voyages/index.html

- **[decide]** OSTEKK-6's survivors
  See the OSTEKK-2 decide under dossiers/ostekk-6.html; the V005 record here says Gregory jolted OSTEKK-2 awake and that its state after the fight is unresolved.

- **[decide]** Tyrant ship weapons
  Memory canon wires three of the ten eyestalks as cannons, with gunners in the Meditation Deck pods and seven dead conduits. The V006 record of play (Shake Ready interlude) reads "four of ten eyes answering at stations around the helm". Options: three cannons, or four stations. The record of play reads four.
  Touches: campaign/voyages/index.html, vessels/tyrant-ship.html.
  src: memory-canon campaign-canon § Naming (tyrant ship reconciliation); chat-voyage-6-7-planning § Superseded

- **[decide]** Sol's vignette and the mimic after V006
  V006 is played and the behir parley has happened. Options: move Sol's vignette and the mimic to V007, or retire them.
  src: chat-cosmic-campaign-structure § Open; memory-canon campaign-canon (Voyage 006 outcome)

- **[decide]** Casey's V007 beat
  Options: a Vaelorix chart in Research showing the sky from inside Mirt's wardrobe beside a collecting site past the waystation; or something else. It must give Casey's cooling thread a small nudge back.
  src: chat-voyage-6-7-planning § Open; memory-canon open-decisions (Voyage 007 intent)

- **[decide]** Sol's misfortune piece
  Korey to set.
  src: chat-voyage-6-7-planning § Open

- **[decide]** Treasury contents in Vaelorix's Quarters
  The Quarters hold a treasury of coin (see add). Contents and amounts are open.
  src: chat-voyage-6-7-planning § Open

- **[decide]** Did Miken cause the simulation blast?
  Options: yes; or no, and the suspicion stays as misdirection from Joffrey.
  Touches: campaign/voyages/index.html, dossiers/miken.html.
  src: chat-voyage-6-7-planning § Open

- **[fix]** The Command Deck field did not unmake constructs
  The V005 entry says "the Command Deck is an anti-magic field that unmakes constructs". In the field the clockwork horrors froze, the OSTEKK units stuttered and slowed but kept running, and the behir could not enter. Gregory went sluggish, as narration only, with no mechanical effect; the construct table's "Gregory … Unaffected" changes to that.
  src: chat-voyage-6-7-planning § The field and constructs; memory-canon campaign-canon § Key NPCs (OSTEKK-6)

- **[fix]** OSTEKK-6 is an automaton
  V004 Actual and Delta say "gave the autognome its name", "the autognome warned", "Keep the autognome unrepaired", and the V004 plan says "a broken autognome". OSTEKK-6 is an automaton; Gregory is the autognome. Change each. Flag only (do not fix): data/sessions.json, data/quests.json and data/items.json also call him an autognome.
  src: memory-canon campaign-canon § Key NPCs (OSTEKK-6)

- **[fix]** No patrol at H'Catha
  The V007 plan lists "the H'Catha approach, the patrol, the landing". Change "the patrol" to "the border crossing".
  src: memory-canon campaign-canon § Antagonists (H'Catha layout)

- **[drop]** "The network"
  V001 Delta says "Everything the network does afterward". The network is retired. Change to "Everything Vocath's operation and the colony do afterward".
  src: memory-canon open-decisions (Act 1 retrofit)

- **[add]** Voyage 007 shape
  Add to the V007 briefing: V007 is a cool-down, RP-heavy session so the party meshes as a crew. Every player gets one beat after leveling, spread across the days rather than back to back. "Shakedown" is reserved as the title, explained at the table. Downtime aboard is one thing per day for three days, each with a real benefit set once the players pick. Bartholomew gets the Aspects mechanic before the session; his beat is the chance to use it.
  src: memory-canon open-decisions (Voyage 007 intent); chat-voyage-6-7-planning § Interlude and downtime

- **[add]** Beats owed in V007
  Add to Beats owed:
  - **Tumak.** Resting in his quarters he feels something settle that he can't name; he has inadvertently marked the spot. Later, needing to escape within 100 ft of his quarters, his Wayfind fires and lands him back there. His first rune match.
  - **Sol.** On the day-7 lane-marker board, a wanted notice from the Fortuned seeks an astral elf marked by misfortune, reward on return to Aethris. It describes him and names no one.
  - **Gregory.** In Toril orbit his pull points straight down at his home world, then falls behind as the ship leaves, and he chooses whether to speak. (Joins the existing "louder in the bay" note.)
  - **Boogie.** He alone feels out of step with the Lantern's pulse. If the Lantern heals him he regains the hit points, then is a loose puddle until the end of his next turn (Speed 10 ft., drops what he holds, can't cast), with only the stone keeping its shape. The shard escalates without revealing it is a Monolith piece.
  - **Casey.** His thread needs a small nudge back (beat in the decide above).
  - **Ezra.** He arrives with his own hook that others can latch onto, so he is more than another person aboard (the Pffred and Krik'Lit problem). Hook options are a decide under dossiers/ezra.html.
  src: memory-canon open-decisions (Voyage 007 intent); campaign-canon § Naming (Boogie near the Lantern); chat-voyage-6-7-planning § V007 player beats, § Settled

- **[add]** Crew nights on the crossing
  Add to the V007 briefing: Ryeback cooks from the Garden and dares someone to eat first. Ezra spars and shares a line of the Watcher creed. Miken sits alone by the intake. OSTEKK-6 asks Gregory what a plan is.
  src: chat-voyage-6-7-planning § Crossing and H'Catha

- **[add]** The lane marker
  Add: the lane marker is a crystal beacon on a tethered rock, ringed with mooring posts, with a board for notices, trades and warnings. Ships stop here, which is why encounters can happen here and not at speed.
  src: chat-voyage-6-7-planning § Crossing and H'Catha; memory-canon campaign-canon § Naming (crossing encounters)

- **[add]** Crossing table
  Add: each day roll a d6; on a 1, roll the d8.
  1 psychic wind · 2 dohwar salvager · 3 colour pool · 4 lost cargo pod (its ledger stamped with the eye in a wheel) · 5 shadow ship (run it by day 12 if unrolled) · 6 kindori calf · 7 the Fear eye waking · 8 mercane trader, moored at a lane marker.
  (Numbering partly inferred from the sweep.)
  src: chat-voyage-6-7-planning § Crossing and H'Catha

- **[add]** The mercane trader
  Add: the mercane trader sold specimens to Vaelorix for the foreign coin found in the Quarters and knows the hull. He changes that coin at 90%. One line of his manifest is stamped with the eye in a wheel. He carries word of the crew to H'Catha ahead of them.
  src: chat-voyage-6-7-planning § Crossing and H'Catha

- **[add]** Crossing distance
  Add beside the 14 days: Toril sits 3,000 million miles from the system's edge and H'Catha 1,600 million (Spelljammer Academy Appendix A). At 100 million miles a day the crossing is 14 days, longer when the worlds are on opposite sides of the sun.
  src: chat-voyage-6-7-planning § Crossing and H'Catha

- **[add]** V006 standing rulings
  Add to the V006 record (or statblocks/index.html): clockwork horror HP 30; two cones give +3 cover; hollowed wisps AC 11, DC 12 Con save, 1d4 necrotic, latch on a failure.
  src: chat-voyage-6-7-planning § The field and constructs

- **[add]** Vaelorix's Quarters
  Add to the ship sweep note: Vaelorix's Quarters, still unvisited, hold a treasury of coin alongside what is already there.
  src: memory-canon campaign-canon § Naming (Vaelorix's Quarters)

- **[add]** Table practice for crawl sessions
  Add as standing guidance: push non-combat use of abilities; say yes to the clever thing and charge a resource rather than a roll; name non-combat uses out loud; keep ship chatter going so the ship never feels empty. (From a V004/V005 addendum that never reached the repo.)
  src: chat-organizing-framework § Tyrant ship and V004 prep

---

### campaign/voyages/voyage-briefing-002.html

- **[fix]** Sagittarius points
  Page says "Three points light over Ryeback: {5, 7, 8} — uniquely Sagittarius" and "Stars {5, 7, 8}". On the published chart, at 3 stars Sagittarius lights {1, 8, 10}, revealed in the order 10, 1, 8. Change both.
  src: chat-crew-boogie-casey-sol § Casey/Stellar chart; stellar-chart/index.html

- **[fix]** Sol feels the scry either way
  Page says "The pressure passes on a success and remembers him on a failure". Sol feels the first scry either way. The Wisdom save (with the scry's −5 rolled behind the screen) sets only how clearly: on a success it stays vague.
  src: chat-crew-boogie-casey-sol § Sol/C.R.C. and the scry beats

- **[fix]** Ryeback's stolen weapon is a pistol
  Beat 1 says "his stolen custom musket". Change to "his stolen custom pistol".
  src: memory-canon campaign-canon § Key NPCs (Ryeback)

---

### campaign/plot-hooks.html

- **[decide]** What the behir is wrapped around
  The behir is wrapped around a freestanding object in the open space of the Hollow Deck, separate from the repair bay, giving off the soft light Casey saw. It is not a casket for the Lantern. It may be manifest entry 048, which is undefined. Options: define 048 now, or leave it as a planted hook with no answer yet. Add a hook row either way.
  src: memory-canon open-decisions (behir soft light line)

- **[fix]** The meteor's strike point
  Page says "Adamantine that struck the Spire on H'Catha" (twice). The meteor struck at the Pupil, the innermost band beside the Spindle, on a seam between two domains. (The player record's lowercase "spire" can stay generic.)
  src: chat-astral-sea-worldbuilding § Superseded; memory-canon campaign-canon § Antagonists (H'Catha layout)

- **[fix]** Why the tyrant ship approach
  Page says "Foundling can't survive H'Catha's beholder patrols". There are no orbital patrols; arrival risk is crossing watched domain borders. Restate: the tyrant ship reads as native traffic because every beholder ship is carved stone, and a scuttle ship carries the landing party down unnoticed.
  src: memory-canon campaign-canon § Antagonists (H'Catha layout), § Naming (approach to H'Catha)

- **[fix]** The Fork lives on Colony Operations
  Page says "see Remaking → Fork" and "See the Remaking: two thieves in the same chaos". Repoint both to `campaign/colony/`.
  src: chat-cosmic-campaign-structure § Superseded

- **[fix]** Thread status lives in the record
  Page says "Where each thread stands with the crew is on the Tracker". Point to the `data/*.json` record and the Voyages board.
  src: memory-canon site-and-automation § Automation pipeline

- **[drop]** Abandoned Beholders
  The hook says "The tyrant ship had beholder crew. They left." Vaelorix was alone; his crew were the nine OSTEKK units; crewed tyrant ships are rejected 2e lore. Drop the hook. (Also listed under Arc 2 threads on the spine and in the V003 briefing.)
  src: memory-canon campaign-canon § Antagonists (beholders follow 5e; no thralls aboard); chat-voyage-6-7-planning § Open

- **[add]** Hook rows still missing
  Add rows for:
  - **Ostekk.** A ruling beholder of H'Catha whose stolen Lantern and OSTEKK units the crew now carries.
  - **The Lantern of Flourishing.** It can pull the crew toward the Fifth Rod piece, and its pull toward Toril can start Gregory's journey.
  - **Miken.** Leveraged and complicit; his beacon feeds Qitru.
  - **Hessa Dun's uncle.** The crew's first Seeker contact, planted in Arc 1 (a living uncle, formerly a grandmother).
  - **The Crow survivor.** The Bellwether Crow survivor who noticed Joffrey change and never reported it, found by pulling the roster.
  - **Bartholomew's bloom.** A catalyst, not the cause; the parent plant is his to find, and Vaelorix's notes say how to get more.
  src: chat-voyage-6-7-planning § Open; memory-canon open-decisions ("Locked this pass", operative resolved, Voyage 007 intent); campaign-canon § Antagonists (Lantern item), § Bartholomew (bloom lines); factions/seekers.html

- **[add]** Boogie's following
  Add to the Boogie hook's "If pulled": the Fonains shard draws people to Boogie as something holy — arrival, a promise of more. A genuine following built on a corrupted signal (the Angel of Irons pattern). Followers may read Tharizdun's "bring everything here" as ascending to something better. Available to pull, never pushed.
  src: memory-canon campaign-canon § Cosmology (Boogie prophet arc)

---

### campaign/what-if.html

- **[fix]** Heart-links are permanent
  The page asks "What if a link has to be severed?" and says "Nothing in canon yet says a link can be severed at all." Heart-links are permanent and run both ways. Reframe the item as living with a permanent link (a merged pair whose people have families on the far side), or drop it.
  src: memory-canon open-decisions (world-heart framework)

- **[fix]** Settled matter lives in the Ascension
  The lead says settled matter "lives in Cosmology, the Remaking or Factions". Change "the Remaking" to the Ascension.
  src: chat-cosmic-campaign-structure § Superseded

- **[fix]** Heart entrance term
  The page uses "Atria"/"Atrium" in several items. Apply the ruling under campaign/ascension/index.html.

- **[drop]** "What if Vecna is from the Reach civilization?"
  Vecna is a mortal mage of Oerth who became a god later. Drop the item.
  src: session-rulings (Vecna); working/vecna.md § History

- **[drop]** "What if the lattice reaches the Core?"
  Its premise ("he has no solution for the approach") contradicts the Ascension page: the massed Yearning forces the First Heart open, and the opening is his arrival. Drop the item.
  src: campaign/ascension § The Cast; timeline "The Cast"

# Dossiers

DM dossiers under `prime/dossiers/`. Items are grouped by page and ordered decide, fix, drop, add. Dossiers are in-world pages: proposed text reads like a fan-wiki character entry and states only what is settled. Anything undecided stays in a `decide` item. Lines marked DM-only belong in the dossier's DM notes.

---

### dossiers/index.html

- **[decide]** Which voyage carries the Krik'Lit swap
  The index says "The window shuts at the V006 swap"; the Krik'Lit dossier says he leaves "At the V007 swap"; data/npcs.json has him relieved at the V006 rendezvous. Flighty Foundling relieves Krik'Lit and Pffred together. Pick one label and apply it on both pages.
  src: dossiers/krik-lit.html; data/npcs.json (Krik'Lit)

- **[decide]** OSTEKK-6's survivor card
  Follows the OSTEKK-2 decide under dossiers/ostekk-6.html. The card says "One of two survivors of nine."

- **[fix]** The H'Catha cast
  The page names "Kurrzot, the Rival, the exile, and the Watcher at the rim fog", and "Still to build" lists "the exile". The enlightened exile is retired. The H'Catha cast is Kurrzot, Ostekk, Ondessa, the Rival and the Watcher at the rim fog. Replace "the exile" with Ondessa in both places and list Ostekk.
  src: chat-astral-sea-worldbuilding § Ondessa, § Superseded; memory-canon campaign-canon § Antagonists (H'Catha)

- **[fix]** Ostekk's card
  The card says "Unplaced · the builder" and the table says "the placement decision that reshapes H'Catha". Change to "H'Catha · ruler and builder" and drop the placement line.
  src: memory-canon campaign-canon § Naming (H'Catha decisions); chat-astral-sea-worldbuilding § H'Catha

- **[fix]** Captain Sardax is a woman
  The page says "The campaign opened inside his last fight" and "Who recorded his death". Change to her. (data/npcs.json already records Gender Female.)
  src: memory-canon; chat-cosmic-campaign-structure § Superseded (Sardax he → she); data/npcs.json

- **[fix]** Clint's row
  The table says "what his rescue dragged home". Change to "what Vocath's pursuit dragged home".
  src: memory-canon open-decisions (Act 1 retrofit); timeline "Boogie takes the shard"

- **[fix]** Ilsabet Crann is a Restorer
  The card and side filter file her under "The Order · Third Reading". Move her to the Restorers.
  src: chat-cosmic-campaign-structure § Cosmology redesign; factions/restorers.html

---

### dossiers/astra-virex.html

- **[decide]** The entity's final name
  Options:
  (a) "Astra Virex" (repo and memory canon).
  (b) "Astra" alone (the Casey chat, "for now", because "Virex" sits too close to "Viren").
  (c) "Virex" as the true name, with "Astra" as the Order's outside name (the dossier's current framing).
  Then sweep crew/casey.html, dossiers/polly.html, dossiers/zerathis.html, factions/deities.html.
  src: chat-crew-boogie-casey-sol § Casey/Astra; memory-canon open-decisions (audit line), campaign-canon § Casey Geim

- **[decide]** What wounded it
  Follows the decide under factions/deities.html. The dossier states "Wounded by a Seam — Transformation and Boundary overlapping" in the infobox and the body.

- **[decide]** Its long game
  Is Astra Virex's long game to connect to the Axioms so the wound can never recur? Whatever the ruling, it must stay consistent with Astra Virex knowing nothing of world-hearts.
  src: chat-crew-boogie-casey-sol § Casey/Astra ("not nailed down")

- **[add]** Where it is
  Add to the infobox: "Location: SPH-01, Caelestis's sphere."
  src: memory-canon campaign-canon § Cosmology

- **[add]** Look and feel
  DM notes: Astra Virex's look and feel is a twisted Howl's Moving Castle, with falling stars.
  src: chat-cosmic-campaign-structure § Virex, Casey, Polly; memory-canon campaign-canon § Casey (Polly correction)

- **[add]** How to run it
  Add to How to run: Astra Virex missions read as grief — disappearances, not infrastructure.
  src: chat-cosmic-campaign-structure § Virex, Casey, Polly

---

### dossiers/beshaba.html

- **[decide]** Beshaba's want
  The page says "She has never named a want." The Sol chat explored several without settling, and Korey wants to develop the Beshaba/Tymora interplay. Keep "no named want", or set one.
  src: chat-crew-boogie-casey-sol § Sol/Open

- **[add]** Where she is strongest
  Add to The twin reading: "Tymora and Beshaba are strongest on Aethris, where their worship is most concentrated."
  src: working/divine-rules.md § Concentration and reach; memory-canon open-decisions (Vecna/Tharizdun 2026-10-25)

---

### dossiers/boatswain-tarto.html

- **[fix]** Tarto's stat block
  The page says "Tarto has five superiority dice (d10), regained on a short or long rest", and the run-it notes build on five. Change to: "Tarto has four superiority dice (d10), regained on a short rest." Add **Clear the Deck** as a bonus action. Re-check the run-it notes against four dice. statblocks/index.html carries the same five-dice line.
  src: chat-cosmic-campaign-structure § Rules and crew, § Superseded

- **[add]** What Tarto knows
  DM notes: Tarto holds part of the picture of what is stretching Caelestis, and may be withholding some of it.
  src: chat-astral-sea-worldbuilding § Caelestis structure; memory-canon open-decisions (Voyage 007 intent)

---

### dossiers/clint.html

- **[decide]** What information Clint is buying
  src: chat-cosmic-campaign-structure § Open

- **[decide]** Mary Chispitez and Chloe Chespetes
  Is Mary Chispitez, the fire-elemental woman fused to the Pedra Ardante, the same person as Chloe Chespetes, trapped in the lava-flooded lab in the genasi war over Imix? Options: the same person under one spelling, or two people. (inference)
  src: dossiers/clint.html; timeline "The fire genasi war over Imix"

- **[decide]** The Blooming Glass and the Blooming Grove
  The page and the timeline call the job "the Blooming Glass" (the timeline treats it as the place the archaeologists were rescued from). Memory canon names the one-shot "Search for the Blooming Grove". Options: the one-shot is Search for the Blooming Grove and the Blooming Glass is a place within it; or one name is a transcription slip and the other is used everywhere.
  src: timeline "Pedra Ardante reaches Vanifer"; memory-canon open-decisions (Fonains canon 2026-10-25); scratchpad fonains_notes

- **[fix]** Clint went overboard
  The page says "When the first boarding came, he seized the boarders' own craft and broke away with it", the table says "Took the boarders' craft…", and the infobox says "Crossing open". Write: "Clint Dashforest went overboard in the Bellwether Crow ambush near Cairn Station. A psychic wind carried him across the Astral Sea to Fonains." Remove "Crossing open".
  src: memory-canon open-decisions (operative resolved), campaign-canon § Naming (Astral Sea travel); timeline "The Bellwether Crow ambushed"

- **[fix]** Vocath's people chased him
  The page says "A crew went looking for him", "a rescue crew went out", and "What his rescue attempt dragged home". Write: "Vocath's people chased Clint because he had something they wanted. They never found him. They came back from Fonains with fragments of the broken Monolith, moved through Vocath's Cairn Station line, and one of those fragments ended up inside Boogie."
  src: memory-canon open-decisions (Act 1 retrofit); timeline "Boogie takes the shard"

- **[fix]** Who placed the bounty
  The page says "placed by a broker named Fenerba for the Cortez family". Write: "posted by Fernerva — Vanifer under another name — for the Cre'Tez, 'for the eldest brother'."
  src: timeline "Pedra Ardante reaches Vanifer"; session-rulings (Cre'Tez spelling); scratchpad fonains_notes/12.md

- **[fix]** Pedra Ardante
  The page spells it "Pedra Ardente". Change to Pedra Ardante.
  src: timeline "Pedra Ardante reaches Vanifer"

- **[add]** Where the ruby went
  Add to the Blooming Glass row: "Clint's crew rescued the archaeologists and handed the Pedra Ardante, the fire-plane ruby, to Fernerva. The job fed the Cre'Tez line's fire-key plot without anyone aboard knowing it."
  src: timeline "Pedra Ardante reaches Vanifer", "Tinderstrike under guard"

- **[add]** When he landed
  Add to the Then/What happened table: "Clint landed on Fonains about a year before the present, before the Monolith appeared, and was on Fonains when it did."
  src: session-rulings (Timing); timeline decisions, "Clint lands on Fonains"

---

### dossiers/ezra.html

- **[decide]** Ezra's own hook
  Ezra must arrive with a hook others can latch onto. Options:
  (a) The eye-in-a-wheel sketch (ties to crossing table entries 4 and 8).
  (b) The sealed letter: "Watch one thing until it changes."
  src: chat-voyage-6-7-planning § Open; memory-canon open-decisions (Voyage 007 intent)

- **[decide]** The crew's last stint with Ezra
  Memory canon makes the H'Catha → Hall transport "the last troop he travels with before his journey begins". The page and chat-cosmic-campaign-structure turn 378 also have an optional later Emporia ferry. Options: keep both in order, or cut the Emporia ferry.
  src: memory-canon campaign-canon § Key NPCs; dossiers/ezra.html; chat-cosmic-campaign-structure § Graduation board contracts

- **[decide]** Emporia and Tharizdun
  Does Emporia read as a Zenith with Tharizdun behind it? Options: yes (a Tharizdun-touched Zenith); no (local trouble only); leave it to the other table.
  src: chat-cosmic-campaign-structure § Open

- **[decide]** The Hall's name
  Follows the decide under factions/order.html. The page says "the Hall of Sight and Sound".

- **[fix]** Watchers are posted to regions of worlds
  The page says "Postings are to planes rather than to worlds — the elemental planes, overlapping…". Write: "Watchers are posted to a region of a world. A large world may hold several."
  src: memory-canon campaign-canon § Key NPCs (Watcher ruling corrected); timeline "The Order of the All-Father"

- **[fix]** His instructor and Ondessa
  The page says "His instructor is at the rim fog with an enlightened beholder exile" and asks about "the beholder his instructor is living with". Write: "His instructor is H'Catha's Watcher, posted at the rim fog. She trades intelligence and protection with Ondessa, a beholder ruler whom the other rulers want dead."
  src: chat-astral-sea-worldbuilding § Ondessa, § Superseded; memory-canon campaign-canon § Antagonists (H'Catha)

- **[add]** The Watcher Transport
  Add to the order of operations, between "They leave him there" and his knighting: "A Caelestis crew collects Ezra at H'Catha and carries him to the Hall (the Watcher Transport contract, Grade IV, on their graduation board). They are the last troop he travels with before his journey begins."
  src: memory-canon campaign-canon § Key NPCs; chat-cosmic-campaign-structure § Graduation board contracts

- **[add]** What a trainee does not know
  Add: "As a trainee, Ezra knows nothing of the Order's break with protocol over Sol Fortuna."
  src: chat-crew-boogie-casey-sol § Sol/C.R.C. and the scry beats

- **[add]** Whose character he is
  DM notes: Ezra Ahl-Sier is Korey's own PC in a friend's campaign, run by one of the Caelestis players. Caelestis shows him earlier, before that campaign begins, and treats him as transit: the crew never visits his homeworld. The Hall transport mirrors the other table.
  src: memory-canon campaign-canon § Key NPCs; chat-crew-boogie-casey-sol § Sol/C.R.C.; chat-cosmic-campaign-structure § Graduation board contracts

---

### dossiers/ilsabet-crann.html

- **[decide]** What her Ledger shows
  The Restorers have walked into Zeniths deliberately for four centuries, which sits awkwardly with the page's claim that her Ledger holds the Zenith pattern unrecognised. Options: the Restorers know Zeniths as crossings but miss the rising frequency; or the pattern stays fully unread.
  src: timeline "The Restorers walk into Zeniths"; dossiers/ilsabet-crann.html § What's hidden

- **[fix]** She is a Restorer
  The header and Connections say "The Order", and the Ledger note says "the Order reads it as history". Third Reading, the Ledger and cells are Restorer vocabulary. Change to: "Ilsabet Crann, Restorer · Third Reading, in a cell of six", and "the Restorers read it as history". Connections link factions/restorers.html.
  src: chat-cosmic-campaign-structure § Cosmology redesign; factions/restorers.html

---

### dossiers/joffrey.html

- **[fix]** Clint went overboard
  The page says "Clint Dashforest gone over the side with the boarders' craft". Drop "with the boarders' craft".
  src: timeline "The Bellwether Crow ambushed"; memory-canon open-decisions (operative resolved)

- **[fix]** One survivor noticed
  The table row "Asking the Crow's survivors — Unanimous praise, sincerely meant. Nothing." Change the row to "Pulling the Crow's roster — one clean, confused survivor who noticed he changed and never said so." Add to What's hidden: "One survivor of the Bellwether Crow noticed that Joffrey had changed, and never reported it."
  src: memory-canon open-decisions (operative resolved)

- **[add]** Who he is
  Add to Who they are: "Joffrey was top of his class and is named the present-day great spelljammer of Caelestis. He was taken slowly: for months after the Crow he was himself, decorated, and he only recently finished converting. He reports to Vocath as agreed. His allegiance is N'ghathrod's."
  src: data/npcs.json (Joffrey); memory-canon open-decisions (operative resolved)

- **[add]** The price
  Add to Threads beside the Vocath arrangement: "N'ghathrod offered Vocath an asset inside sealed Caelestis. His price was captives, taken in the Crow ambush."
  src: memory-canon open-decisions (operative resolved)

---

### dossiers/khaleth.html, ithvarn.html, osskhal.html, ulhrek.html, zhauveth.html

- **[decide]** The enna's century
  Follows the five-centuries decide under dossiers/nghathrod.html. The enna pages say "a century": Osskhal argues for a century; Khaleth and Ulh'rek have been a century wrong about the Atria; Ulh'rek "Keeps … a century of Atria research" and the colony's hunt "has been wrong for a hundred years". Rewrite each once the ruling lands.
  src: timeline "Exile from Glyth" (about 60 years ago), "Vecna answers" (about 500 years ago)

- **[fix]** Heart entrance term
  Ulh'rek and Khaleth say "Atria". Apply the ruling under campaign/ascension/index.html.

---

### dossiers/miken.html

- **[fix]** Miken does not flip
  The page offers "If he redeems himself — tells them more, helps them assemble the mystery, comes around". Miken stays leveraged and complicit and does not flip. Drop the redemption path. Keep the capture or near-death payoff on a complicit Miken.
  src: memory-canon open-decisions (Seekers line); chat-cosmic-campaign-structure § Act 1 retrofit

- **[add]** The moneylender
  Add to What's hidden: "The moneylender behind the Tallow Wren repossession contract also holds the debts of Miken's fiancé."
  src: chat-cosmic-campaign-structure § Graduation board contracts

---

### dossiers/mirt.html

- **[decide]** The player record overstates Mirt
  data/npcs.json calls Mirt "the head of Caelestis" and "Leading Caelestis", which contradicts the Academy-only ruling. Flag for the player record; prime gives nothing to data/. Korey to correct the record by hand or leave it as the crew's belief.
  src: memory-canon campaign-canon § Naming (Mirt line); data/npcs.json (Mirt)

- **[fix]** Astra Virex in Polly's voice
  The page says "why Polly could reach him there". Change to "why Astra Virex, speaking in Polly's voice, could reach him there".
  src: memory-canon campaign-canon § Casey; dossiers/polly.html

- **[fix]** The wardrobe
  The page says "Mirt has kept a piece of Astra's network in his bedroom for years". "Network" is retired. Change to "a piece of Astra Virex's reach".
  src: memory-canon open-decisions (Act 1 retrofit)

- **[add]** The Academy, and only the Academy
  Add to Who they are (and the role line, which now reads only "Headmaster, Caelestis Academy"): "Mirt runs the Academy, and only the Academy. The Fleet Corps and the Bridge operate outside him. The Academy is the small part of Caelestis, roughly a fifth of the station."
  src: memory-canon campaign-canon § Naming (Mirt line); chat-astral-sea-worldbuilding § Caelestis structure

- **[add]** Protected and stuck
  Add to Who they are: "Mirt is a well-known adventurer who knows the Astral Sea, and he has drawn ire over the years. Caelestis protects him and keeps him quiet, so he is also stuck there." (The page has the protection half.)
  src: memory-canon campaign-canon § Naming (Mirt line)

- **[add]** The H'Catha report
  Add to Threads: "The H'Catha report came down from Watcher to Hall to Fleet Corps to Academy. Mirt made it a cadet mission."
  src: chat-astral-sea-worldbuilding § Settled

---

### dossiers/nghathrod.html

- **[decide]** His five centuries: the gap and the enna
  N'ghathrod was captured about 506 years ago and escaped when the craft fell about 500 years ago. The exile from Glyth is about 60 years ago, and the Vth'oramu page has the dreadnought taken "a little over fifty years ago". Nothing accounts for the centuries between. The five enna pages, the Vth'orama page and Ulh'rek's hunt all say "a century". Options for the gap:
  (a) He stayed on Glyth for centuries before the exile.
  (b) The exile moves earlier.
  Options for when the enna received their Holds:
  (a) At the escape, about 500 years ago (the chat: they offered themselves in thanks for being saved).
  (b) At the exile, about 60 years ago.
  (c) When he fused with the ship.
  Also set from this: how long the colony has hunted heart entrances (about 60 years since the exile, or about 500 since the voice).
  Touches: dossiers/nghathrod.html, factions/vthorama.html, dossiers/vthoramu.html, dossiers/khaleth.html, ithvarn.html, osskhal.html, ulhrek.html, zhauveth.html, timeline.json.
  src: timeline "The craft falls", "Exile from Glyth"; chat-cosmic-campaign-structure § N'ghathrod and the colony

- **[decide]** What his death does to the taken
  Follows the decide under factions/vthorama.html.

- **[fix]** His age
  The infobox says "Age ~1 century into his second life" and the body says "A mind flayer roughly a century into his second life". Write: "A mind flayer more than five centuries into his second life, and a spacefaring elf before that." Infobox: "Age: more than five centuries since the experiment."
  src: session-rulings (Thessalar); timeline "Captured aboard Thessalar's craft", "The craft falls"

- **[add]** The craft and the escape
  Add to the history list ("Escaped as the craft went down"): "N'ghathrod's ship clashed with Thessalar's planar craft about 506 years ago and lost. Thessalar and the Thessalkraken captured him and some of his illithids, and he was held and experimented on aboard. About 500 years ago Lola's Boys, sent back in time by the Accordance, took the craft's control and defence gems. Without them the craft fell, and in the crash N'ghathrod escaped with his lieutenants and the tadpoles he could carry."
  src: session-rulings (Thessalar); timeline "Captured aboard Thessalar's craft", "Lola's Boys in the year 425", "The craft falls"

- **[add]** What the experiment did
  Add to What the experiment actually did: "The Rod's seventh piece made his ceremorphosis paracausal. It also stopped his aging."
  src: memory-canon open-decisions (Locked 2026-10-25); timeline "Captured aboard Thessalar's craft"

- **[add]** Bound to the ship
  Add to "He is the ship": "His join with Vth'oramu is permanent. Only a wish or an artifact could break it."
  src: chat-cosmic-campaign-structure § N'ghathrod and the colony

- **[add]** The largest chapter
  Add to Who they are: "N'ghathrod's colony is the largest Seeker chapter and the only one that travels. It coordinates with planet-bound chapters. A heart can only be opened where a Monolith stands, so he saturates worlds with Monoliths and waits."
  src: memory-canon open-decisions ("Locked this pass")

- **[add]** His mark
  Add: "His field mark is the Passage: a circle with a tail ending in another circle, gaining a circle for every linked world."
  src: memory-canon open-decisions ("Locked this pass")

- **[add]** What he knows of the Watchers
  Add: "N'ghathrod knows the Watchers exist, likely through the Watcher who was posted to Glyth." DM-only, under threads: a taken Watcher is a possible future goal for him; none exists now.
  src: chat-astral-sea-worldbuilding § Cosmos and campaign shape; working/glyth-watcher.md; memory-canon open-decisions (Direction 2026-10-21)

---

### dossiers/ostekk.html

- **[decide]** Why Vaelorix stole from Ostekk
  The theft of the Lantern and the nine OSTEKK units is canon. Was it to escape a debt to Ostekk? The debt is an unreviewed draft, along with a Fallmouth porter mentioning "Ostekk's machines" and OSTEKK-6 freezing at the words.
  src: chat-astral-sea-worldbuilding § Open; memory-canon campaign-canon § Naming (OSTEKK units)

- **[fix]** Ostekk rules a domain of H'Catha
  The page says "Location Unplaced Your call", "the only one in this arc who builds rather than rules", "He does not collect, rule, or scheme for territory", and proposes the Spindle under "Open — Where to put him". Rewrite:
  - Infobox: "Location: H'Catha, ruler of one of the ten domains."
  - Lead: "Ostekk is a ruling beholder of H'Catha, and a builder. He made the Containment Engine, Fourth Series, and the nine OSTEKK units, and both were stolen from him."
  - Replace "He does not collect, rule, or scheme for territory" with "He rules his domain like a workshop. What he wants is his property back."
  - Drop the Spindle option and the Open section.
  DM-only: the crew hearing his name soon after landing is the payoff.
  src: memory-canon campaign-canon § Naming (H'Catha decisions); chat-astral-sea-worldbuilding § Meteorite and mission, § H'Catha

- **[fix]** The behir and the field
  The page says the behir was "stranded by a field that unmakes constructs". Write: "stranded by a field it could not enter". (In that field the OSTEKK units stuttered and slowed, and the clockwork horrors froze.)
  src: chat-voyage-6-7-planning § The field and constructs, § Settled; dossiers/ostekk-6.html

---

### dossiers/ostekk-6.html

- **[decide]** Sole survivor, or one of two
  Memory canon: OSTEKK-6 is the sole survivor of Vaelorix's crew. The play record: in V005 Gregory jolted OSTEKK-2 awake for eighteen seconds, long enough for it to name itself; OSTEKK-2 still lies on the Hollow Deck and its state after the fight is unresolved. This page's infobox says "One of two survivors of nine" while the body says "The lone survivor of nine OSTEKK units". Options:
  (a) OSTEKK-2 is inert or dead now, so OSTEKK-6 is the sole survivor.
  (b) Two survivors.
  Touches: dossiers/ostekk-6.html, dossiers/index.html (card), factions/academy-fleet.html (crew table), campaign/voyages/index.html, vessels/tyrant-ship.html.
  src: memory-canon campaign-canon § Key NPCs (OSTEKK-6); chat-automation § Voyage 005 canon, § Open; chat-voyage-6-7-planning; campaign/voyages/index.html (V005)

---

### dossiers/polly.html

- **[decide]** What became of Polly
  The page leaves "alive, consumed, or something between" open. Korey to set when a scene needs it.
  src: chat-cosmic-campaign-structure § Open; memory-canon open-decisions (open list)

---

### dossiers/qitru.html

- **[decide]** When Qitru learns Vocath is not at the top
  What she does next.
  src: chat-cosmic-campaign-structure § Open

- **[fix]** What she wants
  The infobox says "Wants Miken" and What they want says "She wants Miken because he is leverage…". Write: "Qitru pursues Vocath's aim: to embarrass Mirt by making the cadet mission fail. Miken is her channel." Infobox: "Wants: the cadet mission to fail."
  src: memory-canon campaign-canon § Key NPCs (Vocath's aim)

- **[fix]** Ten domains
  The page says "On that world the reputation reads eight different ways". H'Catha has ten domains, each with one ruler, under the Sovereign Eye. Change to ten.
  src: memory-canon campaign-canon § Antagonists (H'Catha direction supersedes eight domains)

- **[fix]** Ondessa, not the exile
  The page says "The exile, hunted by every beholder there, wants them very much indeed" and links "The exile" under Places. Write: "Ondessa, the beholder ruler the others want dead, wants them very much indeed." Replace the link.
  src: chat-astral-sea-worldbuilding § Ondessa, § Superseded; memory-canon campaign-canon § Antagonists (sovereign line)

---

### dossiers/rindle-gearloft.html

- **[decide]** Dock master or dock worker
  The player record calls Rindle a dock master who runs a dock near the Sea Dock; the dossier's role line says "Sea Dock worker". Align the dossier to the record, or confirm the difference is deliberate (what the crew believes vs what he is).
  src: data/npcs.json (Rindle Gearloft); dossiers/rindle-gearloft.html

---

### dossiers/saerthe-abizjn.html

- **[fix]** Sapphires at the cuffs
  The page says "The fitted coat with silver at the cuffs". Write: "He dresses like a noble, in a fitted coat with sapphires set at the cuffs."
  src: chat-voyage-6-7-planning § The swap and NPCs, § Settled, § Superseded

- **[add]** The squares are visible
  Add to his air-walking trait: "The translucent squares that form under his steps are visible to others."
  src: chat-voyage-6-7-planning § The swap and NPCs

- **[add]** The Bellwether Crow
  Add to The bands: "Saerthe was not aboard the Bellwether Crow when Clint Dashforest went overboard. He carries the guilt of it: 'If I'd been there I could've saved him.'"
  src: memory-canon campaign-canon § Key NPCs (Saerthe)

- **[add]** What Saerthe knows
  DM notes: Saerthe holds part of the picture of what is stretching Caelestis, and may be withholding some of it.
  src: chat-astral-sea-worldbuilding § Caelestis structure; memory-canon open-decisions (Voyage 007 intent)

---

### dossiers/sor-kur.html

- **[decide]** Spelling
  Follows the Sor'Kur / Sor'Kor decide under factions/academy-fleet.html.

---

### dossiers/tarroway.html

- **[fix]** What his tables track
  The page says "The patrol his tables track is the Vth'oramu — a hunting animal under command" and that he keeps "a schedule for an object that left the sector a year ago". Canon: the psychic wind is why Tarroway's patrol timing tables fail. Rewrite: "Tarroway's timing tables fail because the psychic wind keeps no rhythm. He has not worked that out, and will explain his tables to anyone who asks."
  Touches: factions/vocath-operation.html, dossiers/vthoramu.html.
  src: memory-canon campaign-canon § Naming (Astral Sea travel); chat-cosmic-campaign-structure § Tetherbreak, § Superseded

---

### dossiers/the-runekeeper.html

- **[decide]** The Runekeeper's name
  The page has "Name open". Name him.
  src: chat-cosmic-campaign-structure § Open; chat-crew-tumak-gregory-bartholomew § Tumak/Open

- **[decide]** How the Heart cycle resolves
  Does Tumak make his own Heart-rune? Does he meet the previous Runekeeper?
  src: chat-crew-tumak-gregory-bartholomew § Tumak/Open

- **[fix]** The fragment is dividing
  The infobox says "Carries: The whole Dissolution fragment, for now". The fragment is now forming in both twins as well, so its fixed mass divides three ways between the Runekeeper, Wan and Tu; nobody reaches peak, and the cycle stalls mid-motion. Write: "Carries: the share of the Dissolution fragment still leaving him."
  src: memory-canon campaign-canon § Cosmology (Zenith of the three poles)

- **[add]** The door of the world
  Add: "The Runekeeper is the only permitted way into and out of the homeworld. Leaving is rare, and only for set reasons; the Becoming is one of them."
  src: chat-crew-tumak-gregory-bartholomew § Tumak/Runekeeper lore and pressure

- **[add]** He sent Tumak away
  Add to Who they are: "The current Runekeeper personally sent Tumak out, because the fragment had begun forming in him." (Dimming stays the fragment leaving the Runekeeper, not age.)
  src: chat-crew-tumak-gregory-bartholomew § Tumak/Runekeeper lore and pressure; memory-canon campaign-canon § Cosmology

- **[add]** When a Runekeeper dies
  Add: "A Runekeeper's death is celebrated. 'We do not mourn this. We sing.'"
  src: chat-crew-tumak-gregory-bartholomew § Tumak/Leader concept

- **[add]** Where the homeworld lies
  Add to What holds the concealment up: "The Wayfinders' homeworld lies in a hidden system inside Caelestis's sphere. It must share the sphere with what it hides from, so its Wayfinders can map those threats and renew its protection."
  src: memory-canon campaign-canon § Cosmology (Lunarfoot line)

---

### dossiers/thessalar.html

- **[decide]** His copies and his records
  Which Thessalar copies are loose, and where his records of the N'ghathrod work are.
  src: chat-cosmic-campaign-structure § Open

- **[decide]** What Tharizdun wanted from him
  Thessalar is tied to Tharizdun through the Elder Elemental Eye (see add). Did Tharizdun take an interest in the experiment, the Rod piece, or the man? Note that the Eye watched the year-425 visit. The page's own Open asks the same.
  src: dossiers/thessalar.html § Open; working/tharizdun.md § Vecna and Tharizdun; memory-canon open-decisions (Fonains lore tie-in)

- **[fix]** The Elder Elemental Eye
  The page says "the Elder Eye" twice. Change to "the Elder Elemental Eye".
  src: session-rulings (Elder Elemental Eye)

- **[fix]** The hazy yellow gem
  The page says "He powers his work off an object out of another cosmology." Write: "He powers his work off the hazy yellow gem, one of the craft's control and defence gems, formed where Olhydra and Ogrémoch collided." The gems are the craft's components, not Reach residue.
  src: session-rulings (gems not residue); working/STAGING.md § Fonains; module-sweep-fonains § Temple of Moloch

- **[add]** Who he was
  Add to Who they are: "Thessalar was a high priest of Moloch and an artificer. He killed the other priests and turned the temple into his laboratory. He made the thessalhydra, an owlbear and beasts like them, and he pursues lichdom."
  src: module-sweep-fonains § Temple of Moloch

- **[add]** The temple and the rift
  Add to the temple description: "The temple stands over caverns where Olhydra and Ogrémoch fought and tore a rift between the Planes of Water and Earth. The stream there carries huge gems, rubies most of all."
  src: module-sweep-fonains § Temple of Moloch

- **[add]** Rooms of the temple
  Add to the room table:
  - "Moloch's statue has for eyes the two largest rubies ever taken from the lake, wired with silver to every control panel in the laboratory. Moloch is an exiled archdevil whose worship has faded."
  - "The craft's control and defence system is built of gems: speckled amber, cloudy orange, three emerald green, light purple and hazy yellow." (The page names only the hazy yellow gem.)
  - "The mechanical heart the party called 'the chicken' is the thessalheart construct. It powers the thessalhydra and reports to Thessalar."
  - "In a private chapel the Thessalkraken is worshipped as the temple's living demigod, before a statue of Moloch reworked with tentacles and needle teeth."
  - "An incomplete apparatus of Kwalish stands in the temple. The apparatus already existed in Thessalar's time."
  src: module-sweep-fonains § Temple of Moloch

- **[add]** What Lola's Boys took
  Add to the paragraph that says they "took what they came for": "What Lola's Boys took were the craft's control and defence gems: the red gem from the cavern lake and the hazy yellow gem from Thessalar's workshop. The Accordance had sent them back to the year 425. Without the gems the craft fell, about 500 years ago, and the crash let N'ghathrod escape."
  src: session-rulings (Thessalar); timeline "Lola's Boys in the year 425", "The craft falls"

- **[add]** When the craft came down
  Add to When the craft came down: "The craft was a megadungeon, and it broke up as it fell. The main body raised the Barrier Peaks; its unexplored levels are the Mad Mage's dungeon. A broken-off section became Daoine Gloine, and the floating monastery island is what remains of the main body. The Thessalkraken landed separately in the sea and became the Drowned God's kraken, guarding the trident's reef." (The page has the Thessalkraken only in the flooded temple.)
  src: session-rulings (Thessalar); timeline "The craft falls"; module-sweep-fonains § Lost Laboratory of Kwalish

- **[add]** Andras and Stolos
  Add: "Andras and Stolos were once one man, Andrastolos." Fill out from the Fonains doc.
  src: module-sweep-fonains § Spellings applied, § Promotes to; session-rulings (names)

- **[add]** Tied to Tharizdun
  Add to "Something was watching the work": "Thessalar is tied to Tharizdun through the Elder Elemental Eye."
  src: memory-canon open-decisions (Fonains lore tie-in)

---

### dossiers/vaelorix.html

- **[fix]** The field
  The page says "the field that unmakes constructs came off it until the crew cut the flowers down in V006". Write: "the field came off it — the field that froze the clockwork horrors, slowed the OSTEKK units and kept the behir out — until the crew cut the flowers down in V006."
  src: chat-voyage-6-7-planning § The field and constructs, § Settled

---

### dossiers/veena-derek.html

- **[decide]** Their reading
  What Veena and Derek's reading is.
  src: chat-cosmic-campaign-structure § Open

---

### dossiers/vocath.html

- **[add]** Cairn Station
  Add to Who they are: "Vocath was at Cairn Station transiting goods. The corrupted Monolith fragments that reached Boogie came through that line." DM-only: this is the crew's first thread to him, and he can point them toward N'ghathrod.
  src: memory-canon open-decisions (Act 1 retrofit); timeline "Boogie takes the shard"

- **[add]** His price
  Add to the three-things table: "Vocath's price to N'ghathrod's side was captives from a Caelestis crew. He read the arrangement as ordinary illithid thrall work and asked nothing more."
  src: memory-canon open-decisions (operative resolved)

- **[add]** The thinning
  Add under what he wants: "Vocath sees the Fleet stretched thin and uses it to put pressure on the Academy."
  src: chat-astral-sea-worldbuilding § Caelestis structure; memory-canon open-decisions (Voyage 007 intent)

---

### dossiers/vthoramu.html

- **[decide]** Where Vth'oramu is
  The infobox says "Last placed: On Cairn's bearing, closing slowly". Tarroway and Verrow say it "left the sector a year ago". The chat has it harboured outside Realmspace while its crews work inside it. The Tarroway fix (psychic wind) removes one reason for "left the sector". Pick one placement across all three pages.
  Touches: dossiers/vthoramu.html, dossiers/tarroway.html, dossiers/verrow.html.
  src: dossiers/vthoramu.html; dossiers/tarroway.html; dossiers/verrow.html; chat-cosmic-campaign-structure § The dreadnought

- **[decide]** Its wound and its tether
  What wounded the dreadnought before the siege, what lies at the end of its tether, and whether it can be freed. The astral cord is held in reserve.
  src: chat-cosmic-campaign-structure § Open

- **[decide]** Its main weapon
  An antimagic cone is rejected. An eversion (the interior pushed out) was proposed and never confirmed. Options: eversion, or something else.
  src: chat-cosmic-campaign-structure § Open, § Superseded

- **[fix]** The name
  The infobox says "Name: The whole of the going-home", and the body says the name "restates the promise". The name is locked: Vth'oramu, shortened to Oramu, means "the passage to a new home". Change the infobox. The body's line "The passage to a home they were promised and have yet to be given" already fits.
  src: memory-canon open-decisions (dreadnought name locked); chat-cosmic-campaign-structure turn 413

- **[fix]** When it was taken
  The infobox says "Taken: A little over fifty years ago, after a long siege". The timeline puts the exile from Glyth, when the dreadnought became Vth'oramu, about 60 years ago. Align to about sixty years (or follow the five-centuries decide under dossiers/nghathrod.html if the exile moves).
  src: timeline "Exile from Glyth"

- **[add]** The hull
  Add to the description: "The body lies elongated and contorted, its plating carved for docking, berths and observation, and braced with scaffolding. The eye serves as observation; the mouth and the physical tail remain, the tail ending in the astral cord."
  src: chat-cosmic-campaign-structure § The dreadnought; memory-canon open-decisions (N'ghathrod settled)

- **[add]** The transit keepers
  Add: "Illithid arcanists from N'ghathrod's own crew keep the plane-shift transit points."
  src: chat-cosmic-campaign-structure § The dreadnought, § Superseded (outside wizards rejected)

- **[add]** What's hidden
  Add to What's hidden: "The earliest copies of N'ghathrod are in the dreadnought's walls. N'ghathrod and the ship are joined: if his true body dies, the ship dies, and the colony loses its home."
  src: chat-cosmic-campaign-structure § N'ghathrod and the colony

---

### dossiers/winston-ryeback.html

- **[decide]** Is his death planned at all?
  The Fire in the Galley beat is cut. Is Ryeback's death planned elsewhere, or not at all?
  src: chat-organizing-framework § Open; memory-canon campaign-canon (Fire in the Galley not happening)

- **[decide]** His stat block lines
  The note says he has no Musket line "because the musket was stolen"; with the pistol stolen instead, the giff block's lines need re-deriving. Options: keep Musket and rename Pistol to hand cannon; or drop the block note.
  src: memory-canon campaign-canon § Key NPCs (Ryeback); dossiers/winston-ryeback.html

- **[fix]** The stolen weapon is his pistol
  The page says "The academy thefts took his custom musket out of his quarters" and "the musket was stolen". Write: "The academy thefts took his custom pistol out of his quarters. The hand cannon is his own gun, the sidearm he still has."
  src: memory-canon campaign-canon § Key NPCs; chat-voyage-6-7-planning § Settled

- **[fix]** Tumak told him
  The page says "He was told the beholder had been taken care of and took it to mean the crew killed it." Write: "Tumak told him outright that the crew killed the beholder."
  src: chat-voyage-6-7-planning § Settled

- **[add]** Odds
  DM notes: Ryeback absorbs every interaction planned for the NPC "Odds", including Casey's Stellar Reading beat. His sign is Feast of the Moon / Sagittarius.
  src: memory-canon campaign-canon § Key NPCs

---

### dossiers/zerathis.html

- **[fix]** The wardrobe is a piece of Astra Virex's reach
  The heading says "Mirt has been keeping a piece of the network in his bedroom". "The network" is retired. Change to "Mirt has been keeping a piece of Astra Virex's reach in his bedroom".
  src: memory-canon open-decisions (Act 1 retrofit)

- **[fix]** Astra Virex is "it"
  The page says "went further toward whatever was calling her than Casey has". Astra Virex is "it", and Zerathis is he. Change to "went further toward what was calling him than Casey has".
  src: dossiers/astra-virex.html; memory-canon campaign-canon § Casey

- **[fix]** Polly's voice
  The page says "why Polly could reach him there". Change to "why Astra Virex, in Polly's voice, could reach him there".
  src: memory-canon campaign-canon § Casey

- **[add]** Whom he follows
  Add to Who they are: "Zerathis follows Astra Virex. He is no part of Vecna's following."
  src: memory-canon campaign-canon § Casey; chat-cosmic-campaign-structure § Superseded

- **[add]** A name in circulation
  Add to How to run them: Zerathis is a name the crew hears long before they meet what remains of him, and the sources disagree about him (the Osiris pattern from Destiny).
  src: chat-cosmic-campaign-structure § Cosmos texture; memory-canon open-decisions (Taken King line)

# Crew

Pages under `prime/crew/`. Items under each page run decide, fix, drop, add.
Items whose source sweep is still partial keep their `(sampled)` or
`(snippet)` tag in `src:` so they can be confirmed later.

### crew/index.html

- **[decide]** Where each PC's homeworld sits
  Known so far: Gregory is from Toril (working decision, see crew/gregory.html). Tumak's world is the Wayfinders' homeworld (Lunarfoot), hidden by the Dissolution cycle. Sol's homeworld is mid-Zenith. Casey's is the world the 1486 "deliberate" meteor fell on; its system is withheld until surveyed. Bartholomew's comes from a celestial druid tradition and the FIA has no hint of it yet. Boogie's is unplaced.
  Options per PC: place it now, or leave it unplaced until play needs it. Touches crew/index.html, each crew page, realms/index.html.
  src: chat-cosmic § Open; framework § Open; memory-canon (open-decisions, unresolved gaps; Gregory)

- **[decide]** How cadets from worlds without spelljamming reach Caelestis
  The one known path is Sol's: the Watcher order broke protocol to recommend he be taken to Caelestis. Options: Watcher referral as the general route; several routes (Watcher referral, Fleet recruiters, walk-ins at stations); or a per-cadet answer with no general rule. Touches crew/index.html, crew/sol.html, and a new Cadet intake page (see the New pages section).
  src: chat-cosmic § Open; framework § Open; memory-canon (open-decisions, unresolved gaps; Watcher recruitment for Sol); BCS § Sol/C.R.C. and the scry beats

- **[add]** Each PC's tie to the sky
  Each crew member relates to the stars differently. Casey connects stars into his own constellation for Astra Virex. Bartholomew fills in a constellation the Circle of Stars already knows. Tumak builds a planetary network of marks to find his way home. Gregory senses paracausal signals. Sol has no star thread. Boogie carries a Tharizdun-tied shard. Add as a crew overview line.
  src: chat-voyage-6-7-planning § PCs and the stars

### crew/sol.html

- **[decide]** The oath scene with Beshaba: has it played, and what is the reward
  Record whether the oath scene has already run at the table. Then set the reward Beshaba gives from the intervention tally; it should be support-flavoured and unique to Sol.
  src: BCS § Sol/Open

- **[decide]** Whether Sol ever learns how much of his escape Beshaba arranged
  Options: he learns it (and when), or he never does.
  src: BCS § Sol/Open

- **[decide]** Whether Misfortune's Favor can target Sol himself
  Options: yes, or allies and enemies only.
  src: framework § Open

- **[fix]** The C.R.C. is CR 7
  Page says "CR 8, on an advanced detention drone chassis"; change to "CR 7, on an advanced detention drone chassis". Matches dossiers/crc.html, statblocks/index.html and the canon block (CR 7, AC 17, 136 HP, Withdrawal Threshold at 68 HP).
  src: memory-canon § Antagonists (CRC stat block); dossiers/crc.html

- **[add]** Lucky feat
  Sol has the Lucky feat.
  src: BCS § Sol/Identity

- **[add]** Table note: the player chose Beshaba
  Sol's player chose Beshaba and wants to lean into her.
  src: BCS § Sol/Identity

- **[add]** Misfortune section (core rule)
  New section, listed under "Where the rules live". Misfortune is Sol's own permanent feature because he is Misfortuned. It is separate from the oath and persists even if he breaks the oath.
  - Misfortune caps at his proficiency bonus.
  - Each point is −1 to one ability modifier, chosen by d6 (1 Str, 2 Dex, 3 Con, 4 Int, 5 Wis, 6 Cha). The penalty carries through to spell save DC and spell attack. Penalties stack.
  - **Absorb** (reaction): when a friendly creature within 60 ft. fails a roll, after the die is shown and before the outcome is declared, the roll becomes a success and Sol gains 1 Misfortune.
  - **Discharge** (reaction): at cap, Sol applies plus or minus his total Misfortune to any creature's roll within 60 ft., and all Misfortune clears. A natural 20 stays a critical hit.
  - Absorb and Discharge share his reaction, so only one happens per round.
  src: BCS § Sol/Misfortune feature, Pre-oath Fortune mechanic

- **[add]** How the player tracks Misfortune
  The player tracks Misfortune with six "Misfortune" items on D&D Beyond and clears them before processing a level-up. He does not know when penalties clear.
  src: BCS § Sol/Pre-oath Fortune mechanic, Misfortune feature

- **[add]** Beshaba's test (add to "Beshaba's voice")
  The pre-oath interventions were Beshaba testing Sol. First comes distant laughter only he hears. After two or three interventions she asks: "How long will you bear it?"
  At the oath scene a full commitment quietly clears his penalties. A hedged answer earns one word: "Finally."
  src: BCS § Sol/Beshaba's test

- **[add]** Scry 2 timing
  Scry 2 comes just before the crew leaves H'Catha to return to Caelestis.
  src: BCS § Sol/C.R.C. and the scry beats

- **[add]** The C.R.C. at the main entrance
  When the crew returns, the C.R.C. is waiting at the Caelestis main entrance. The crew hears murmurs first, then: "Sol Fortuna. You are required." The encounter is an objective-based escape, not a kill. Also stage this on dossiers/crc.html.
  src: BCS § Sol/C.R.C. and the scry beats; memory-canon § Antagonists (first CRC encounter on Caelestis)

- **[add]** Tarto stands up for Sol
  When the C.R.C. arrives, Boatswain Tarto stands up for Sol: he is under the academy's protection. Also add to dossiers/boatswain-tarto.html.
  src: BCS § Sol/C.R.C. and the scry beats

- **[add]** How Sol reached Caelestis
  The Watcher order broke protocol to recommend that Sol be taken to Caelestis.
  src: BCS § Sol/C.R.C. and the scry beats; memory-canon (open-decisions, how cadets reached Caelestis)

- **[add]** Who knows Sol's background
  Mirt, Tarto and Saerthe know Sol's background and keep it to themselves.
  src: BCS § Sol/C.R.C. and the scry beats

### crew/casey.html

- **[decide]** What the first tether at Viren is
  Options: a dying stellar entity; a Zerathis-connected place or person; stellar-touched inhabitants; a rift onto a missing constellation.
  src: BCS § Casey/Open

- **[decide]** The "bad" event at Viren
  Design a non-catastrophic event at Viren that makes Casey question whether the change is worth what he gains.
  src: BCS § Casey/Tethering, Open

- **[decide]** The other hearer
  A living hearer like Casey will appear (see the add below). Set their shape: further along than Casey, earlier, diverged, or opposing. Set where they are headed.
  src: BCS § Casey/Open

- **[decide]** The level 3 narrative scene
  Options: first tether, first area change, or Polly speaking to him directly. If it already ran, record which.
  src: BCS § Casey/Open

- **[decide]** Casey's want beyond Polly
  Offered candidate: "to be chosen the way Polly was chosen". Confirm or replace.
  src: BCS § Casey/Open

- **[decide]** How the Toll shows in play, and when a changed region is first noticed
  Two rulings: how the Toll works as a hidden meter, and when someone first notices a changed region. The suggested window (V005–V006) is now past, so pick a new one.
  src: BCS § Casey/Open

- **[decide]** The Lantern Node alignment: its bonus, and its name
  Set the bonus. Decide whether to rename it, since "Lantern" collides with the Lantern of Flourishing.
  src: BCS § Casey/Open

- **[decide]** Whether Gregory's Calibration picks up Casey's tethers as paracausal static
  Proposed, acceptance unconfirmed. Accept or drop. If accepted, cross-link from crew/gregory.html.
  src: BCS § Casey/Tethering

- **[decide]** Whether Zerathis recruited other Starchildren
  Page lists it as open. Options: yes (and whether the other hearer is one), or Casey is the only one.
  src: framework § Open

- **[fix]** First tether point: Virenspace
  The stat row says "Open: What his first tether point is", while the body already says "Virenspace is point one". Replace the row with "First tether: Virenspace, already partly modified by Zerathis." The open question of what happens at Viren stays in the backlog, not on the page.
  src: memory-canon § Casey Geim; framework § NPCs and PCs

- **[fix]** The voice at the wardrobe was in Polly's register
  Astra Virex reached Casey at the wardrobe in Polly's voice; Polly himself is a missing person. Page says "why Polly could reach him there"; change to "why the voice in Polly's register could reach him there". The same line on dossiers/zerathis.html needs the same change.
  src: memory-canon § Casey Geim (Polly correction)

- **[fix]** "Where the rules live" points at the wrong place
  The header says "Where the rules live: This page", but the page holds none of the rule text. Stellar Reading's player text lives on `crew-manifest/casey-geim.html` and the chart on `stellar-chart/`. Point the row there, and add the DM summary below.
  src: BCS § Casey/Stellar Reading, Stellar chart

- **[add]** Stellar Reading (DM summary)
  Bonus action, costs 1 star. Target: a creature Casey can see and has not yet spoken with. His stars appear over the target, visible only to him. A correct sign gives advantage on Charisma checks against that creature for 1 minute; a wrong sign gives disadvantage. The window closes once the encounter begins. No retries.
  src: BCS § Casey/Stellar Reading; memory-canon § Casey Geim

- **[add]** Keeper's guidance for Stellar Reading
  Reveal NPC signs sparingly. Vary sign distribution so archetypes do not give signs away. Leave wrong guesses unconfirmed outside the fiction. No retries.
  src: BCS § Casey/Stellar Reading

- **[add]** Stellar Reading odds
  With full chart knowledge, Stellar Reading hits about 50% at 3 stars, 83% at 4, 92% at 5 and 100% at 7. Full chart access is intended; the number of stars over the target is the throttle.
  src: BCS § Casey/Stellar Reading

- **[add]** The chart's structure
  The chart is a 10-node grid; each sign is an 8-node constellation. The star cap equals Casey's current star count (3 now, maximum 7). One node is always hidden.
  src: BCS § Casey/Stellar chart

- **[add]** Keeper's chart notes: ambiguity at 3 stars
  At 3 stars: {1,2,7} fits Aries, Leo and Taurus; {3,6,8} fits Capricorn, Virgo and Gemini; {4,6,9} fits Cancer and Scorpio; {3,5,10} fits Aquarius and Pisces. Libra {1,7,9} and Sagittarius {1,8,10} are unique. Aries and Leo resolve only at 7 stars.
  src: BCS § Casey/Stellar chart

- **[add]** Casey's sheet
  Warlock. CHA 18 (+4) is his main stat. WIS 4 (−3), passive Perception 7: he reads cosmic patterns and misses the obvious. Lucky feat. Background: Wayfarer. Listed faith: Astrology. Flaw: he relies too heavily on others (place beside the Polly bond).
  src: BCS § Casey/Character sheet

- **[add]** The Gemini brand
  Casey has a Gemini brand on his left shoulder, the sign he shares with Polly.
  src: memory-canon § Casey Geim; BCS § Casey/Character sheet

- **[add]** Zodiac spell names
  His spells carry zodiac names: Ward of the Capricorn; Duplicate (Gemini); Armor of Taurus; Arms of Aquarius; Life of Cancer (False Life via Fiendish Vigor); Disguise of Aries (Mask of Many Faces).
  src: memory-canon § Casey Geim; BCS § Casey/Character sheet

- **[add]** The Harptos calendar as Casey's zodiac
  Each Harptos month maps to a sign, and the holidays are rare signs: Midwinter = Aquarius ("bends fate"); Greengrass = Taurus; Midsummer = Leo; Highharvestide = Libra; Feast of the Moon = Sagittarius ("walks unseen; between worlds"). Add here or link the table on `stellar-chart/`.
  src: BCS § Casey/Astrology quirk

- **[add]** Casey and Tumak: the mechanical contrast
  Casey is point-driven: he must find constellation points and attune to them. Tumak is time-driven: marks arrive per level and he chooses where they go. Casey's stars are a lens he reads with, continuous and unbounded; Tumak's runes are an apparatus on his body that fires once. Casey never teleports to his constellations.
  src: BCS § Casey/Mechanical distinction from Tumak

- **[add]** Each constellation point is an adventure
  Each point is a real adventure for the whole party and a different experience for Casey, modelled on Fjord placing the stones on Uk'otoa's seal.
  src: BCS § Casey/Mechanical distinction from Tumak

- **[add]** Point design (working)
  Each point has a **Sign** (the hook), **Subject**, **Work** (the adventure), **Gift** (what he learns) and **Toll** (what Astra takes, never named at the table). Each new point shifts at least three of five axes from the last: scale, subject, tone, engagement, guidance.
  src: BCS § Casey/Point design guardrails

- **[add]** What an anchored region looks like (add to "The loop")
  Anchored regions change at the level of nature, not as magic effects. A river reflects another sky. The wind holds one direction. Children born there recognise each other.
  src: BCS § Casey/Tethering

- **[add]** A living hearer
  Another living hearer like Casey will appear as pressure: possibly a rival, possibly a partner, modelled on Avantika.
  src: BCS § Casey/Tethering

- **[add]** The players never learn the word "Axiom"
  Casey learns only that specific things are wrong or changed. No mortal knows the Axioms.
  src: BCS § Casey/Tethering; memory-canon (no mortal knows the Axioms)

- **[add]** The Lantern Node / Viren quest
  The Lantern Node at Viren is Casey's first named alignment. (Name pending the rename decide above; the add carries whichever name stands.)
  src: BCS § Casey/Astrology quirk

### crew/tumak.html

Rules for the runes, Wayfind and the Wayscribes live on rules/index.html; see the Rules section.

- **[decide]** Hard clock or soft clock for the Runekeeper's fade
  src: TGB § Tumak/Open (sampled)

- **[decide]** How a lost twin plays out
  When a twin is lost or separated for a long stretch: off-screen montage, a solo one-shot, or shared visions.
  src: TGB § Tumak/Open (sampled)

- **[fix]** Wayfind grows with level
  Page says "its growth with understanding rather than with level". Change to: Wayfind opens on the first matched rune and grows with the inscription, which advances by a rune roll every level. Matches rules/index.html.
  src: TGB § Tumak/Rune system (sampled); rules/index.html

- **[fix]** Runes are not a proximity detector
  Page says "The runes surface on skin near cosmic threat, which gives the crew a proximity detector". Change to: runes arrive with level-ups, character moments and DM-bestowed story beats, so the player cannot equate a rune with a place. A rune surfacing near something cosmic can stay as an occasional story trigger, not a rule.
  src: TGB § Tumak/Rune system (sampled)

- **[add]** Soulknife is the first step of the manifestation
  Tumak took Rogue 3 (Soulknife) between sessions 2 and 3. Soulknife is the first step of the Runechild manifestation because the twins' souls are bound. The soul knife and the twins' telepathic link first manifested in V004; the player decides how the psychic blade looks.
  src: TGB § Tumak/Soulknife and the first rune (sampled); memory-canon § Tumak Swan

- **[add]** First Sorcerer level at level 4
  Tumak takes his first Sorcerer level at level 4. His player wants to discover in-world how the abilities work.
  src: chat-voyage-6-7-planning § PCs and the stars

- **[add]** What the table believes (add to that box)
  The player sheet reads Variant Human, 5'7" ("long body, shorter arms, smallish head"). CHA 18 with Deception expertise is why the disguise holds.
  src: TGB § Tumak/Backstory (sampled)

- **[add]** "Left side" and "right side"
  At the table Korey addresses the twins as "left side" and "right side", so only the player knows which twin he means.
  src: TGB § Tumak/Backstory (sampled)

- **[add]** Why he enrolled, and the note
  Tumak enrolled at the Academy as the quickest way home. Both twins were sent away with a note reading "come home safe".
  src: TGB § Tumak/Backstory (sampled)

- **[add]** The fading as pressure
  The Runekeeper's fading is Tumak's pressure to go home now and to start attempting the journey. It reaches the player through memories of his grandmother and of home: a smell, how the trees look.
  src: TGB § Tumak/Runekeeper lore and pressure (sampled)

- **[add]** Inspirations (DM note)
  Tumak's arc sits between The Giver and Avatar.
  src: TGB § Tumak/Runekeeper lore and pressure (sampled)

- **[add]** Design intent: a stark trade-off
  Tumak's powers carry a stark, visible trade-off so the other players do not feel he has too much.
  src: TGB § Tumak/Wayscribe design (sampled)

- **[add]** V007 beat
  While resting, Tumak marks a spot without meaning to, then Wayfinds back to it aboard the ship.
  src: memory-canon (open-decisions § Voyage 007 intent)

### crew/gregory.html

- **[decide]** The Sailor gate at the Sea Dock
  (A) He truly needs Sailor clearance, and gets in with an escort via Kip or Pik or a sanctioned reason. (B) He only thinks he does, and a service route exists. (C) Hybrid: Rindle has moved the Latchling and Gregory must recalibrate.
  src: TGB § Revising voyage briefings/Open

- **[decide]** What Gregory learns once the Latchling anomaly resolves
  src: TGB § Gregory/Open

- **[decide]** Gregory's Bearing feature
  Draft: once per long rest, 10 minutes of listening gives direction and rough distance to a paracausal source he has felt before. Through the seated Lantern, once a day, it reaches farther. Options: lock or hold. If locked, it goes here and in the character subsystems on rules/index.html.
  src: chat-voyage-6-7-planning § Open

- **[decide]** Whether the Lantern becomes Gregory's Anomaly 02
  Options: yes; or keep the Lantern separate from the anomaly queue. Touches crew/gregory.html and artifacts/containment-engine.html.
  src: chat-voyage-6-7-planning § Open

- **[fix]** Origin: Toril
  Header says "Open: His origin, and what changed him". Record: Gregory is from Toril. He reached Caelestis on a cargo ship, and his origin has no Zenith tied to it. The Lantern's pull toward Toril starts his journey. What changed him stays an open question in the backlog, off the page.
  src: memory-canon § Gregory (working decision); memory-canon (open-decisions § Voyage 007); chat-voyage-6-7-planning § PCs and the stars

- **[fix]** The Latchling is at the Sea Dock
  The Clear clue says "The signal is at the sky dock, in the aligner berths along the mooring struts". Change to: the signal is at the Sea Dock, near cargo and lower dock storage.
  src: TGB § Revising voyage briefings; memory-canon § Gregory

- **[add]** Calibration thresholds (DM only, under "The roll")
  At his +2: 1–7 static, 8–12 weak, 13–17 clear, 18+ sharp. Calibration is DM-initiated at fitting moments and stacks narrative clues; a failed roll gives static, never misdirection.
  src: TGB § Gregory/Calibration; memory-canon § Gregory

- **[add]** Detect Magic and tools near the Latchling
  Detect Magic (ritual) near the Latchling reads strangely, which is itself a clue. Navigator's tools and tinker's tools add flavour.
  src: TGB § Gregory/Calibration

- **[add]** Gregory's theme and the anomaly prep framework
  He knows roughly where to go and has to work out how to get there and through what stands in the way. Anomaly prep runs: Destination / Physical obstacle / Social obstacle / Interpretive obstacle / Payoff.
  src: TGB § Revising voyage briefings

- **[add]** The Latchling signal track
  The track describes how clear the obstacles are: (1) bearing: the Sea Dock, near cargo; (2) a muddy signal: something is interfering, something is concealed; (3) the interference has a human shape.
  src: TGB § Revising voyage briefings

- **[add]** Latchling obstacles
  Dock interference (metal and noise). Rindle: Gregory has to convince him he is no threat to the Latchling. The Latchling itself, which hides until it trusts him.
  src: TGB § Revising voyage briefings

- **[add]** Sailor clearance
  Part of the Sea Dock needs Sailor clearance, and a cadet inherits only Visitor, so Gregory needs, or thinks he needs, Sailor access.
  src: TGB § Revising voyage briefings

- **[add]** The Latchling's reaction
  The Latchling goes to Gregory as something familiar, and that visible reaction is what cracks Rindle's secrecy. Also add to dossiers/rindle-gearloft.html.
  src: TGB § Gregory/Latchling

- **[add]** His flaw
  "I follow orders and trust everyone at their word." That is why Rindle's denials hit hard.
  src: TGB § Gregory/Calibration

- **[add]** Level 3 Abjurer scene
  Gregory rereads a journal kept by Gregory Prime, his maker, and an entry reads differently after the last voyage. The entry:
  > Mended the brass aligner a fourth time tonight — but this time, before it could crack again, I braced the seam from the inside first. Gregory held the casing steady while I worked. Steady hands. He's good at that.
  >
  > Funny thing. I've spent my whole life fixing what's already broken. Tonight I caught myself thinking — what if I'd gotten there sooner? Reached the thing before the break did. Then there'd be nothing to mend at all.
  >
  > Going to try doing it that way from now on. Get underneath things first.

  Tag: "Gregory has read this page before. After the last voyage, it reads differently." The theme of his abjuration is preventing the break rather than fixing it after.
  src: TGB § Gregory/Abjurer level-up scene

### crew/bartholomew.html

- **[decide]** Whether Almost-Shift slips still run
  The page's "How a slip runs" has three registers and one weighted slip per scene, with a 3-strain threshold (wrongness and recognition, no anatomy). Options: keep slips running alongside Aspects, or fold slips into Aspects. Rule the 3-strain threshold either way.
  src: TGB § Bartholomew; crew/bartholomew.html "How a slip runs"

- **[decide]** Tier 1 alien creatures for the Academy
  Owed: 3–4 designs that echo his beast forms and his star-mapping. Schedule or draft.
  src: TGB § Bartholomew/Open; memory-canon (open-decisions)

- **[decide]** The bloom's name
  Options: Kinbloom, Mantlewort, Otherlily.
  src: chat-voyage-6-7-planning § Open

- **[decide]** How a Lantern charge renews the bloom
  Settled: renewing the bloom with a Lantern charge is the crew's active choice. Open: the details (cost, how often, what it restores). Touches crew/bartholomew.html and artifacts/containment-engine.html.
  src: chat-voyage-6-7-planning § Bartholomew: Aspects; memory-canon § Bartholomew

- **[decide]** CON-312 and the word "Almosts"
  Set the cosmic meaning of CON-312. Decide whether "Almosts" is an old druid term or the name changes.
  src: chat-voyage-6-7-planning § Open

- **[decide]** Full Almost template details
  Open: its HP, when the stars unlock, and whether dinosaurs are on his Wild Shape list.
  src: chat-voyage-6-7-planning § Open

- **[fix]** The Almost: mechanic set, look open
  Page says "The creature design is deliberately unwritten until play surfaces what it should be." Reframe: the Almost is the creature Bartholomew builds. His constellation is its blueprint: six stars for six ability scores, and each catalogued aspect seats into the matching star. Its look and register are not yet set.
  src: memory-canon § Bartholomew (Almost mechanic)

- **[add]** Aspects: what can be learned and how
  - Aspects are prepared equal to his proficiency bonus. Manifest Aspect is a bonus action and lasts 1 minute. Aspects are seated once per long rest.
  - Aspects from any beast within his Wild Shape CR cap need no study. Non-beast aspects come only from study, which is where the feature's value lives.
  - Learning an aspect is a save against a CR-based DC, one success per day. A failure locks that creature out for 24 hours.
  - Only creatures with a heart, blood and a heartbeat that are not humanoid-shaped can be studied. Humanoids, plants, constructs and elementals are excluded. Gray areas are ruled as they arise.
  src: memory-canon § Bartholomew; chat-voyage-6-7-planning § Bartholomew: Aspects

- **[add]** Full Almost form (DM only)
  In full Almost form his physical scores are exactly the seated creatures' scores, with no cap. His mental scores stay his own. AC is 10 + Dex unless a seated aspect grants hide or armour. It costs a Wild Shape use and unlocks when the constellation is complete.
  src: memory-canon § Bartholomew; chat-voyage-6-7-planning § Bartholomew: Aspects

- **[add]** Wild Shape stays separate
  Wild Shape stays by the book, on its own track, separate from Aspects. Swapping into a known form never feeds the catalogue.
  src: memory-canon § Bartholomew (Almost refinement); chat-voyage-6-7-planning § Bartholomew: Aspects

- **[add]** The Garden bloom
  The bloom is consumable: inhaling it restores a Wild Shape use. The Lantern of Flourishing can renew it, and Vaelorix's notes teach more about it. Its parent plant is a carrot. No parent plant is aboard; finding where the flower grows is his adventure. He will think the bloom causes his change, while the ability is innate, and searching for it gives him reason to travel and identify creatures.
  src: memory-canon § Bartholomew; chat-voyage-6-7-planning § Bartholomew: Aspects

- **[add]** The childhood fall
  His ad-libbed childhood fall, when he saw a constellation that now shows in his Starry Form, is a direction to weave in. Backstory stays light.
  src: memory-canon § Bartholomew

- **[add]** Table note: first session
  Bartholomew missed the first session; "Wilder's training" covered his absence.
  src: TGB § Bartholomew

- **[add]** His arc and the Vecna pressure
  His arc crosses the Vecna / ecosystem-strain pressure, indirectly until that plot arrives.
  src: TGB § Bartholomew

- **[add]** Inspiration
  The recognition arc draws on Teen Titans, "The Beast Within".
  src: TGB § Bartholomew

### crew/boogie.html

- **[decide]** Which deckhand item goes missing on the tyrant ship voyage
  Korey names the item (see the "Next beat" add).
  src: BCS § Boogie/Open

- **[decide]** What Tharizdun wants with Boogie
  Options: an avatar; a moving tunnel; neither.
  src: BCS § Boogie/Open

- **[decide]** Whether anything comes back out through the current, and whether the shard corrupts Boogie over time
  Rule both.
  src: BCS § Boogie/Open

- **[decide]** Giorge and the shards
  Giorge is the Darkest Day vessel on Fonains (spelling per rulings; a different person from Jorgi Panamop). Open: whether he is searching for shards and may cross Boogie's path later (he was originally meant to tie to Tharizdun, possibly to be revisited). Also open: his surname. The sweep gives "Giorge Forsworn"; canon records only that he was inspired by George Foreswarn. Options: no surname on the page, or settle one. Touches crew/boogie.html and artifacts/fonains-shard.html.
  src: BCS § Boogie/The shard and Tharizdun; memory-canon § Naming (Giorge); session-rulings

- **[fix]** Two archived objects, not three
  Page says "Three archived objects have accumulated inside one living body". Change to: two archived objects, the half-ship from Voyage 001 and the half-logbook, are held inside him by the shard. The shard is what keeps them there, not a third archived object.
  src: memory-canon § Boogie; BCS § Boogie/Archived objects

- **[add]** How the shard reached him
  The shard came through Vocath's Cairn Station line. Vocath's people chased Clint to Fonains and came back with fragments of the broken Monolith, and before V001 Boogie looked into a shipment he should have left alone. The "What he is carrying" table now says only "Before the campaign"; add the route.
  src: session-rulings (Timing); timeline.json "Boogie takes the shard"

- **[add]** His Divine Soul power (add to the intro)
  Boogie's Divine Soul power comes from Tharizdun's influence through the shard. Boogie does not know it.
  src: BCS § Boogie/The shard and Tharizdun

- **[add]** The scale of the shards
  The Fonains Monolith broke into about 333,333 shards spread across the cosmos. The number conveys scope; collecting them is never a goal.
  src: memory-canon (Scale); BCS § Boogie/The shard and Tharizdun

- **[add]** The Blob Drop
  Boogie has a signature dance move called the Blob Drop.
  src: BCS § Boogie/Character and the Pulse

- **[add]** The level 3 dream
  The level 3 Divine Soul unlock was a dream. Boogie looks into the nucleus and sees a fractal, pyramidal network of other Boogies, each with a differently shaped shard. A crack runs from him through the network; his line connects upward wrongly; at the apex sits an unnamed source that gives and consumes. Its meaning: this specific shard made this version of Boogie, and other shards exist out there. The dream ends: "You wake. Your chest is heavier than it was when you closed your eyes." The player chooses whether to check.
  src: BCS § Boogie/The fractal dream; memory-canon § Boogie

- **[add]** Arc method: no fixed reveal
  Boogie's arc has no fixed reveal. Gates are planted where relevant and follow the player, and he may never learn the source. Escalation gates, loosely ordered: passive archiving now; environmental oddities around him; an acolyte encounter; something coming back through the current; understanding what "full" means. The shard escalates rather than repeats, and is not revealed as a Monolith piece too soon.
  src: BCS § Boogie/Arc method; memory-canon (open-decisions § Voyage 007)

- **[add]** The prophet thread
  The shard draws people to Boogie as something holy. A following may grow around him as a prophet-like figure built on a corrupted signal. This stays player-driven: available to pull on, never pushed. See the New pages section, "Boogie's faith".
  src: memory-canon (Boogie prophet arc); BCS § Boogie/Arc method

- **[add]** Reaching for the archive
  Boogie will learn to reach for the archive deliberately. He can offer something during a Pulse; it goes in incomplete and comes back incomplete. The ceiling stays bounded because he is a damaged relay. The gate is his realising that what goes in is going somewhere.
  src: memory-canon (archive mechanic); BCS § Boogie/Arc method

- **[add]** Boogie and the Lantern
  When the Lantern of Flourishing is used on Boogie he briefly loses his form, and near it he feels out of step with his rhythm. Rules for the healing are on artifacts/containment-engine.html.
  src: memory-canon § Naming and canon corrections

- **[add]** Next beat (tyrant ship voyage)
  A named deckhand item is mentioned several times, then goes missing. Saerthe or Tarto raises it, Boogie learns something is in his chest, and the player decides what to do.
  src: BCS § Boogie/Next beat

- **[add]** DM note: the end-of-voyage healing
  The healing Boogie received at the end of the last voyage came from a potion Korey used while piloting the absent player. It is not a Pulse seed.
  src: BCS § Boogie/Next beat

# Artifacts and vessels

Pages under `prime/artifacts/` and `prime/vessels/`. Items under each page run
decide, fix, drop, add.

**Residue counts.** Memory canon (Cosmology, locked) sets the pieces per
fragment by Axiom, prime numbers: Dissolution 2, Transformation 3, Boundary 5,
Convergence 7 (17 in all). Every artifact page uses Boundary 2, Dissolution 3,
Transformation 5, Convergence 7, from the cosmic sweep. Memory ranks higher, so
the count items below are `fix`, not `decide`. If Korey prefers the pages'
numbers, every item tagged *(counts)* flips.

### artifacts/index.html

- **[decide]** Whether "Artifacts of Convergence" survives as a term
  Canon describes three Convergence artifacts that work like Critical Role's Uk'otoa orbs: finding, using and the consequences of using each is its own adventure; the three do something different apiece and something more together; A.T.L.A.S. leads to the other two. The cosmic sweep later replaced Eye/Key/Voice with the four Reach fragments. Options: retire the term and keep the four-fragment set; or keep "three pieces, each its own adventure" as how N'ghathrod's hunt plays out (A.T.L.A.S. plus two siblings) and say so on this page.
  src: memory-canon (open-decisions § Planned: constraints on the Vecna/N'ghathrod layer); chat-cosmic § Superseded

- **[decide]** A holdings ledger: who holds each residue piece, and who knows
  Known: the Boundary piece is housed in A.T.L.A.S. in the Brig; the crew holds the Lantern of Flourishing (the Rod's fourth piece) since V006; Xanathar keeps a Rod piece; the Rod's seventh piece was left aboard Thessalar's craft. Open: which pieces Vecna's side holds. Options for where the ledger lives: a section of this page, or a new DM page.
  src: framework § Open; memory-canon (campaign-canon, Rod holders; open-decisions, seventh piece)

- **[decide]** Why SPH-01 holds pieces of three fragments
  Add the answer as a line here, or drop the question if the counts change which fragments are local.
  src: framework § Open

- **[fix]** Residue counts per fragment *(counts)*
  Restate the set as Dissolution 2, Transformation 3, Boundary 5, Convergence 7. The line "A Boundary piece points toward its one sibling" becomes "toward its four siblings"; "so A.T.L.A.S. points at the only other Boundary piece in existence" becomes "so A.T.L.A.S. points toward the four other Boundary pieces". "A Convergence piece feels six" stays.
  src: memory-canon § Cosmology ("Every Reach residue fragment…"; "a Boundary piece points toward its four siblings")

- **[fix]** The set intro contradicts its table
  Page says "Four fragments. Seventeen pieces. Two of them are located"; the table counts more located pieces than two. Restate the intro from the table once the counts are applied. Under the canon counts the located pieces are 1 Boundary (A.T.L.A.S.), 2 Dissolution (forming in Wan and Tu) and 3 Convergence (Rod pieces), six in all (inference: assumes the twins' pieces count as located).
  src: artifacts/index.html § How the set works; memory-canon § Cosmology

- **[fix]** A.T.L.A.S. row: no subtitle name
  The row sub reads "The World Surveyor — renders worlds as holographic models". Change to "Renders worlds as holographic models". The name is the acronym alone; "World Surveyor" is retired.
  src: memory-canon § Cosmology; framework § A.T.L.A.S.

- **[fix]** Mirt's wardrobe
  Page says "opens onto a place beyond H'Catha". Change to: Mirt's wardrobe shows a sky seen from Virenspace, a constellation visible from there, gifted by Zerathis. ("Past H'Catha" only ever meant outside the crew's home system.)
  src: chat-automation § quests ("The Path to Viren"); framework § Settled (constellations in play)

- **[fix]** Saerthe's miniature ship
  Page says "stolen, and the same model as the one inside Boogie". Change to: Saerthe's miniature ship is missing, and half of it is inside Boogie.
  src: memory-canon § Key NPCs

- **[add]** Each fragment is its own adventure
  Each residue fragment is its own adventure, in the way of Critical Role's Luxon beacons. Losing one is a setback for N'ghathrod, not a defeat, so he keeps other objectives running in parallel.
  src: chat-cosmic § Artifacts of Convergence (reframed to the four fragments); memory-canon (Uk'otoa-orb constraint)

- **[add]** Scattered across the spheres (add to "Why they are scattered and hidden")
  The seventeen residue pieces are scattered across the cosmos's spheres.
  src: memory-canon § Cosmology

### artifacts/atlas.html

- **[decide]** "Atrium" or "Aperture" for a heart's hidden entrance
  Every page says Atrium. Memory canon (world-heart framework, marked "working") says Aperture; the later cosmic chat renamed Aperture to Atrium (turn 278) without memory being updated. Memory outranks the sweep, but its line is a working draft and the rename is newer. Options: keep Atrium and update memory; or revert pages to Aperture. Touches this page, artifacts/containment-engine.html, artifacts/runekeepers-fragment.html, rules/index.html (§ Finding an Atrium and the subsystems intro), hub.html and glossary/.
  src: memory-canon (open-decisions § Planned, world-heart framework; Runekeepers line); chat-cosmic § Superseded

- **[decide]** What the letters A.T.L.A.S. stand for
  Options: leave it unexpanded, or settle an expansion. Any expansion must not contain "Axiom".
  src: memory-canon § Cosmology

- **[fix]** Eyebrow: no "World Surveyor"
  Eyebrow reads "Artifact · The World Surveyor". Change to "Artifact · Boundary piece".
  src: memory-canon § Cosmology; framework § A.T.L.A.S.

- **[fix]** A.T.L.A.S. points toward four siblings *(counts)*
  As a Boundary piece among five, A.T.L.A.S. points toward its four siblings. Antagonists want it partly for that reason. State this in the body (the index row carries the same fix).
  src: memory-canon § Cosmology ("a Boundary piece points toward its four siblings")

- **[add]** Status & provenance: the target of the thefts
  A.T.L.A.S. is what the Academy thefts are really after, and the thefts come forward when the crew returns to Caelestis. In the antagonists' hands it gives them reach, so the crew keeping it out of their hands denies them capacity. (Write without the retired word "network".)
  src: memory-canon § Cosmology; framework § A.T.L.A.S.

- **[add]** Status & provenance: the planned next custody
  Joffrey takes A.T.L.A.S. from the Brig under cover of the attack on Caelestis at graduation. N'ghathrod wants A.T.L.A.S.; Vocath wants the Brig's other goods and to disgrace Mirt.
  src: timeline.json "The Brig breach", "Attack on Caelestis and graduation" (canon); chat-cosmic § Campaign shape

### artifacts/rod-of-seven-parts.html

- **[decide]** Beholder ties on the fourth piece
  Canon says Rod pieces other than Xanathar's must be decoupled from beholders, but the fourth piece's maker (Ostekk) and its last holder (Vaelorix) are both beholders. Options: the Lantern stands as the one exception (it has now left beholder hands); or the rule covers only the four loose pieces.
  src: memory-canon § Cosmology ("Rod holders…"); chat-voyage-6-7-planning § Naming ("Ostekk is a beholder")

- **[decide]** Using the Rod against Vecna
  Canon keeps forward that the Rod may be usable against Vecna; the mechanism is undecided. Settle it, then add beside "completing it opens the First Heart".
  src: memory-canon § Cosmology ("Kept forward")

- **[fix]** The fourth piece is with the crew
  Table says "aboard the tyrant ship. Still there: the crew withdrew to Cargo without reaching it". Change to: the fourth piece is inside the Lantern of Flourishing (the Containment Engine, Fourth Series), with the crew in Tumak's bag of holding since V006.
  src: memory-canon § Antagonists (Voyage 006 outcome); data/items.json "Lantern of Flourishing"

- **[fix]** Standing chip
  "Three located, four loose" stands; add "one with the crew".
  src: memory-canon § Antagonists (Voyage 006 outcome)

- **[add]** The pieces are drawing close (add to "Why it matters more")
  Rod pieces yearn toward each other. After long ages they are drawing close, and several now sit near Realmspace.
  src: chat-cosmic § N'ghathrod origin; memory-canon (pieces yearning)

- **[add]** The seventh piece stopped N'ghathrod's aging (add to "The seventh piece and the taking")
  The paracausal ceremorphosis the seventh piece caused also stopped N'ghathrod's aging.
  src: memory-canon (open-decisions, Locked 2026-10-25); timeline.json "Captured aboard Thessalar's craft" (canon)

- **[add]** Connections: the tyrant ship
  The tyrant ship ties indirectly to the Rod through the Lantern, the kind of little-known link to the larger world the campaign wants.
  src: memory-canon § Cosmology

### artifacts/containment-engine.html

- **[decide]** What Ostekk calls the Rod piece
  Options: the Constant, the Inclusion, the Mender, the Kernel.
  src: chat-voyage-6-7-planning § Open

- **[decide]** Why the behir could not sense the Lantern
  Options: the bag of holding blocked it (lock this before players ask); another reason.
  src: chat-voyage-6-7-planning § Open

- **[decide]** Whether a pod charge plus an INT DC 15 parts check wakes OSTEKK-2 for good
  The page and prime/data/overlay.json offer this ("The seated Lantern and the pod can wake it for good in Voyage 007"); no settled source backs it. Options: keep it as the V007 offer, or drop it.
  src: artifacts/containment-engine.html; prime/data/overlay.json

- *(The bloom-renewal and Anomaly 02 decides touch this page; they live in the Crew section under Bartholomew and Gregory.)*

- **[fix]** Eyebrow: where the Engine is
  Eyebrow says "Housing, aboard the tyrant ship". Change to "Housing, in Tumak's bag of holding", matching the page's own Standing chip.
  src: data/items.json "Lantern of Flourishing" (Held By: Tumak Swan)

- **[fix]** The seated Lantern is a one-person rejuvenation pod
  Page adds "a long rest aboard restores all Hit Dice, constructs aboard are fully repaired, and the Garden thrives"; cut that clause (superseded twice: all Hit Dice, then a Flourishing Rest for everyone, then the pod). Replace with: seated in the bay pod, the Lantern is a one-person rejuvenation pod. One creature spends an hour in the pod; all three charges are spent; the creature gains a long rest even if it already had one that day. The Lantern can be unseated at any time. Spent charges stay spent until dawn.
  src: memory-canon § Bartholomew ("Lantern seated in the repair bay"); chat-voyage-6-7-planning § The Lantern and the ship, § Superseded

- **[add]** Restoring a limb (add to the item description)
  Restoring a limb takes a compatible cradle and every charge, daily, for seven days.
  src: chat-voyage-6-7-planning § Lantern of Flourishing

- **[add]** Where it is: Ostekk
  Ostekk, the Engine's maker, is a ruling beholder on H'Catha today. The crew hearing his name on landing is the payoff. (The cosmic sweep still lists "where Ostekk is" as open; memory settles it.)
  src: memory-canon § Antagonists (H'Catha decisions)

- **[add]** Where it is: the sealed core
  The Lantern's sealed core, where the Rod piece sits, cannot be read by identify.
  src: chat-voyage-6-7-planning § Lantern of Flourishing; prime/data/overlay.json

- **[add]** Where it is: the anti-magic field
  The Command Deck's anti-magic field suppressed the Lantern and muted Gregory's tug toward it. (Wording follows the rules/index.html decide on paracausal objects in anti-magic; see the Rules section.)
  src: memory-canon § Antagonists

- **[add]** At the table: Boogie and the Lantern
  The Lantern holds the fourth Rod piece and pulls toward wholeness. Boogie feels out of step with its pulse, and only he feels it. If the Lantern heals Boogie, he regains the hit points and then becomes a loose puddle until the end of his next turn: Speed 10 ft., he drops what he holds, and he cannot cast. Only the stone keeps its shape.
  src: chat-voyage-6-7-planning § The Lantern and the ship, § V007 player beats; memory-canon § Naming

- **[add]** At the table: the fifth piece
  The Lantern can pull the crew toward the fifth Rod piece.
  src: memory-canon § Antagonists ("Lantern of Flourishing as an item")

- **[add]** Cross-link: the Lantern and the shard
  The Lantern pulls toward wholeness; Tharizdun's corruption turns the Fonains shard's archiving into pulling apart. Neither object is aware of the other. Link to artifacts/fonains-shard.html.
  src: chat-voyage-6-7-planning § The Lantern and the ship

### artifacts/fonains-shard.html

- **[decide]** The bound duplicates of the logbook
  Settled (canon outranks the record): Boogie's chest holds half a logbook, pulled from a simulation of a real wreck. Open: whether the two duplicates Casey and Gregory bound during the githyanki attack also exist, as the player record says (data/items.json "Derelict Logbook": the whole logbook plus duplicates). Options: the duplicates exist alongside the half in Boogie; or they go. Either way, flag data/items.json for Korey; prime does not write to it. Touches this page and vessels/the-derelict.html.
  src: memory-canon § Boogie; BCS § Boogie/Archived objects; data/items.json

- *(The Giorge decide touches this page; it lives in the Crew section under Boogie.)*

- **[fix]** Subtitle: the Fonains Monolith
  Subtitle says "A piece of the original Monolith". Change to "A piece of the Fonains Monolith". The original, first Monolith is the Core, the Continuum's response to the Reach.
  src: memory-canon § Cosmology

- **[fix]** One of a vast number
  Page says the shard is "the only one of its kind anybody has". Change to: one of about 333,333 shards of the Fonains Monolith, now scattered across the cosmos. The number shows what is already in motion; collecting them is not a goal.
  src: memory-canon § Cosmology ("Scale"); BCS § Boogie/The shard and Tharizdun

- **[add]** Lead: how the Monolith broke
  Kwalish's cannon split the Fonains Monolith into four great shards, each guarded by a Prince-aligned elemental, turning around a black cyst in the Trintara Forest. The many small fragments, Boogie's among them, sit beside those four great shards.
  src: timeline.json "The Monolith breaks", "Kwalish's cannon splits the Monolith" (canon)

- **[add]** How it got there
  The shard came from the broken Monolith through Vocath's line, before V001 and after the Monolith broke.
  src: session-rulings (Timing)

- **[add]** Where the archive goes
  A corrupted Monolith is a tunnel to Tharizdun's prison: what it takes goes toward him instead of to the Core. The line "still attempting to archive" should say so.
  src: memory-canon § Cosmology ("Tharizdun's goal (locked)"); working/tharizdun.md § Corrupted Monoliths

- **[add]** What it does to Boogie
  Boogie's Divine Soul power comes from Tharizdun's influence through the shard, and he does not know it. In his level 3 dream he saw a fractal network of other Boogies, each with a differently shaped shard: this shard made this Boogie, and others exist.
  src: BCS § Boogie/The shard and Tharizdun, The fractal dream

- **[add]** The prophet thread
  The shard draws people toward Boogie as something holy. A small faith that predates the corruption may treat him as a prophet. Available to pull on, never pushed.
  src: memory-canon § Cosmology ("Boogie prophet arc"); BCS § Boogie/The faith

- **[add]** Reaching for the archive
  Boogie can eventually reach for the archive on purpose: something offered during a Pulse goes in incomplete and comes out incomplete. His ceiling stays bounded because he is a damaged relay.
  src: memory-canon § Cosmology ("Boogie archive mechanic direction")

- **[add]** Running note: escalate, don't repeat
  The shard escalates rather than repeats, and is not revealed as a Monolith piece too soon.
  src: memory-canon (open-decisions § Voyage 007 intent)

- **[add]** The Lantern and the shard
  The Lantern pulls toward wholeness, and Tharizdun's corruption turns the shard's archiving into pulling apart. Neither object is aware of the other. Cross-link artifacts/containment-engine.html and crew/boogie.html.
  src: chat-voyage-6-7-planning § The Lantern and the ship

- **[add]** FR-022 (threads)
  The FR-022 fragment is a different piece of the Fonains Monolith, recovered by the Order and routed to the Fleet. Boogie may find it and consume it.
  src: chat-early-planning § FIA lore content

### artifacts/runekeepers-fragment.html

- **[decide]** Whether the twins carry a whole fragment that is a first key to the First Heart
  The page and rules/index.html say the twins carry the whole Dissolution fragment, a first key. Under canon the fragment never assembles whole in them: its two pieces oscillate, and the twins make three poles that stall the cycle. Options: drop the first-key claim; or keep a first-key role on a different footing. The hub's Ascension card ("the second key") follows this ruling.
  src: memory-canon § Cosmology ("The Zenith…"); artifacts/runekeepers-fragment.html; rules/index.html

- **[fix]** Wan and Tu are two hosts
  Page says "Wan and Tu, who are one person in two bodies". Change to "Wan and Tu, two hosts". They have always been two separate entities.
  src: memory-canon § Cosmology ("always two entities"); framework § Superseded

- **[fix]** Subtitle: two Dissolution pieces *(counts)*
  Subtitle says "All three Dissolution pieces, assembled — and assembled in a person." Dissolution has two pieces. Rewrite once the first-key decide lands, for example: "Both Dissolution pieces, forming in two people."
  src: memory-canon § Cosmology

- **[add]** It is changing hands: three poles
  The fragment forming in both twins makes three poles for the first time ever. The fixed mass divides three ways, nobody reaches peak, and the cycle stalls mid-motion while the ritual hiding Lunarfoot rides on it. When both twins reach home, the result is a Zenith. That has not happened yet.
  src: memory-canon § Cosmology ("The Zenith…"); realms/wayfinders-homeworld.html

- **[add]** The dimming and the lineage
  A Runekeeper's dimming is the fragment leaving them. The lineage passes because the fragment chooses a new host. Tumak was sent out because it began forming in him.
  src: memory-canon § Cosmology ("Consequences of the Dissolution cycle")

- **[add]** The first Runekeeper caught an existing process
  The fragment was already oscillating before the first Runekeeper etched one pole into themselves.
  src: memory-canon § Cosmology

- **[add]** The counter to N'ghathrod (Connections, or "What nobody has said out loud")
  Dissolution unmakes joins, and N'ghathrod is made of joins. The fragment inscribing itself onto the twins is the counter to him.
  src: chat-cosmic § N'ghathrod and the colony; dossiers/nghathrod.html

### artifacts/transformation-fragment.html

- **[fix]** Three pieces, not five *(counts)*
  Eyebrow says "Five pieces, none located"; sub says "Five pieces. Nowhere anyone has written down."; body says "Five pieces, and the only fragment the record is entirely silent on". Change each "Five" to "Three".
  src: memory-canon § Cosmology

### vessels/index.html

- **[decide]** The Derelict's name, and records for the other salvage-race ships
  Options: give it the fuller name "Salvage Race Derelict", or keep "Derelict". The salvage race's hammerhead and githyanki ship have no records; decide whether to add them. Touches this page and vessels/the-derelict.html.
  src: chat-voyage-6-7-planning § Open

- **[fix]** Ship names carry no article
  Register rows say "The Tyrant", "The Flighty Foundling", "The Moonraider", "The Derelict". Change to Tyrant Ship, Flighty Foundling, Moonraider, Derelict. PR #70 already renamed the player side.
  src: memory-canon § Naming; chat-voyage-6-7-planning § The swap and NPCs; data/locations.json

- **[fix]** The Vth'orama and the Vth'oramu
  Row says "The colony lives aboard and took the ship's name for its own". Change to "The Vth'orama live aboard." The colony is the Vth'orama; the ship is the Vth'oramu, shortened to Oramu. They are distinct words.
  src: memory-canon § Deferred (dreadnought name locked); chat-cosmic § N'ghathrod and the colony

- **[fix]** What Vth'oramu means
  Vth'oramu is illithid for "the passage to a new home". The founding colonists treat it as a means to an end; those born aboard take it as home itself; N'ghathrod keeps the promise unfulfilled to hold them. dossiers/vthoramu.html gives the name as "The whole of the going-home"; change it there too. (The cosmic sweep's later wording loses to memory's locked line; if Korey prefers "the whole of the going-home", flip this.)
  src: memory-canon § Deferred ("The dreadnought's name is locked"); chat-cosmic § Superseded

- **[add]** Bellwether Crow (new register row; needs an entry page, see the New pages section)
  The *Bellwether Crow* was a Caelestis ship ambushed by Vocath's crew, working with N'ghathrod, on the Strake–Cairn leg near Cairn Station about a year ago, in the same engagement where Clint Dashforest went overboard. Joffrey was taken and let go with a few survivors; most of the crew did not return.
  src: timeline.json "The Bellwether Crow ambushed" (canon); memory-canon § Deferred ("Operative resolved")

- **[add]** Thessalar's planar craft (new register row; needs an entry page, see the New pages section)
  Thessalar's planar craft fell about 500 years ago, with N'ghathrod already a prisoner aboard. It is now a megadungeon (the Mad Mage's), and Daoine Gloine is a broken-off piece of it. The Thessalkraken landed separately in the sea.
  src: session-rulings

- **[add]** Flighty Foundling row: the scuttle ship
  The *Flighty Foundling* supplies a scuttle ship that docks in the Tyrant Ship's Cargo intake for small shore parties.
  src: chat-voyage-6-7-planning § Crossing and H'Catha; memory-canon § Naming ("Approach to H'Catha")

### vessels/tyrant-ship.html

- **[decide]** Which four eyes work, and the player ship sheet
  Set which four eye stalks work and what each does. Draft candidates: Fear (wakes on crossing entry 7), Telekinesis (an easy first unlock), Slowing (later). Players were promised a ship sheet.
  src: chat-voyage-6-7-planning § Open

- **[decide]** Which shaft letter Research gets
  The table set A as the Garden and C as the Quarters. Options: B or D.
  src: chat-voyage-6-7-planning § Open

- **[decide]** How the ship reads at H'Catha
  Canon says it reads as native traffic, because every beholder ship is carved stone. The page says Vaelorix was H'Cathan and landless, so it reads as a claimant returning. Options: native traffic; or a claimant, which invites domain attention.
  src: memory-canon § Naming ("Approach to H'Catha"), § Antagonists ("H'Catha layout")

- **[decide]** The lingering Lantern wisps
  The crew may keep the wisps or eradicate them. Record the crew's choice when it is made.
  src: chat-voyage-6-7-planning § The Lantern and the ship

- **[fix]** The ship's name is Tyrant Ship
  Title, heading and chips say "The Tyrant" (title: "The Tyrant · Caelestis · DM"). Change to "Tyrant Ship".
  src: memory-canon § Naming; data/locations.json

- **[add]** The gravity plane (deck notes)
  The gravity plane runs through the ship's middle, almost level with the Command Deck floor. Cargo (entry, base camp) and the Hollow (the bowl, the behir's rest, the repair bay pod with its empty cradle) sit below it; the Command Deck sits above, with the Meditation nodes (Garden, Quarters, Research) at the top. A later mention placing it below the Command Deck was a misspeak.
  src: chat-voyage-6-7-planning § Naming and corrections; framework (deck layout); campaign/voyages/index.html

- **[add]** Why it obeys the Pact
  The Tyrant Ship holds some beholder essence, so it obeys the Pact: the stalk matching the hour's eye goes dead, and the whole ship goes dark in the eclipse.
  src: memory-canon § Antagonists (H'Catha decisions); astral § Meteorite and mission

- **[add]** The helm
  Vaelorix never installed a spelljamming helm. The dais he died on is the ship's helm, a beholder-only interface, and the Academy's chair-helm is installed into it.
  src: memory-canon § Antagonists ("Beholders in Caelestis follow 5e…")

- **[add]** Vaelorix's Quarters and study (deck notes)
  The Quarters, still unvisited, are personal and hold a treasury of coin from his deals. His study is informational: notes, and star charts of the worlds he collected plants from.
  src: memory-canon § Key NPCs; chat-voyage-6-7-planning § The Lantern and the ship

- **[add]** The Faelight spore grows in the Garden
  Add to the Garden line.
  src: chat-voyage-6-7-planning § Superseded (moved from the Cargo Deck to the Garden)

- **[add]** Approach to H'Catha
  A scuttle ship supplied by the *Flighty Foundling* docks in the Cargo intake and carries the landing party. Someone able to cast must stay aboard to hold the helm: Saerthe at the helm, Ryeback commanding the deck. Leaving Miken aboard alone is the high-tension option.
  src: memory-canon § Naming ("Approach to H'Catha"); chat-voyage-6-7-planning § Crossing and H'Catha

- **[add]** Not the crew's to keep
  The Tyrant Ship goes into the Caelestis inventory after the mission. The players don't need to know.
  src: memory-canon § Antagonists ("Tyrant ship systems"); chat-voyage-6-7-planning § The Lantern and the ship

- **[add]** The crew's name for it
  The crew is still choosing a name for the ship; none has settled.
  src: chat-voyage-6-7-planning § Make Ready interlude

- **[add]** DM note: manifest entry 048
  Manifest entry 048 is dropped unless a player asks. The soft light Casey saw under the behir is left undefined.
  src: chat-voyage-6-7-planning § The Lantern and the ship

### vessels/flighty-foundling.html

- **[fix]** The ship's name is Flighty Foundling
  Title and heading say "The Flighty Foundling". Drop the article.
  src: memory-canon § Naming; data/locations.json

- **[add]** Ezra's arrival
  Ezra arrives on the *Flighty Foundling* with Tarto and Saerthe, as a Watcher cadet on his first field mission. The only people known aboard are Tarto and Saerthe. (Page now says only that it "carries Ezra out".)
  src: chat-voyage-6-7-planning § The swap and NPCs; memory-canon § Key NPCs

- **[add]** The scuttle ship
  It supplies the scuttle ship used for shore parties.
  src: chat-voyage-6-7-planning § Crossing and H'Catha

### vessels/moonraider.html

- **[fix]** The ship's name is Moonraider
  Title and heading say "The Moonraider". Drop the article.
  src: memory-canon § Naming; data/locations.json

### vessels/the-derelict.html

- *(The Derelict-name decide lives under vessels/index.html; the logbook-duplicates decide under artifacts/fonains-shard.html. Both touch this page.)*

- **[fix]** The record name is Derelict
  Title and heading say "The Derelict". Drop the article.
  src: chat-voyage-6-7-planning § The swap and NPCs; data/locations.json

- **[add]** The wreck is real
  Saerthe's simulation draws on real records, so the wreck is real, and the original logbook sits somewhere in Caelestis with pages missing. Small mundane objects can cross the simulation threshold at exit, which is how Boogie carries a real logbook out of a simulated wreck; magic items cannot cross.
  src: memory-canon § Boogie, § Key NPCs (Saerthe canon); BCS § Boogie/Archived objects

# Rules

Pages under `prime/rules/`, `prime/statblocks/` and `prime/tracker/` (whose DM
layer is `prime/data/overlay.json`), plus one player-site rules page. Items
under each page run decide, fix, drop, add. Items from the partial Tumak sweep
keep their `(sampled)` tag in `src:`.

### rules/index.html

#### Cosmology rules

- **[decide]** Can a taken person be released?
  Page says "The tadpole is the person now. There is no release but N'ghathrod's death". The later cosmic chat (turn 190) rules that removing the tadpole frees a taken person only when they know what happened and object to it; factions/vthorama.html already follows turn 190. Canon adds that being taken is felt as a gift, so a captured taken person does not turn or fight their new self, and that a taken person is host plus a lesser copy of N'ghathrod held together. Korey leans toward the N'ghathrod the party meets being a simulacrum, with the real body aboard the Vth'oramu; whether the copies die with him or one inherits is open. Options: (a) the turn-190 rule (removal frees only those who know and object, which canon makes rare); (b) no release but the real N'ghathrod's death; (c) both, as two routes. Touches rules/index.html, factions/vthorama.html, dossiers/nghathrod.html.
  src: chat-cosmic § N'ghathrod and the colony (turn 190); memory-canon § Deferred ("Being taken is experienced as a gift"; seventh piece and simulacrum)

- **[decide]** Do residue housings work inside anti-magic?
  Page says paracausal objects (residue and its housings) are "Unsuppressed … an instrument built around a piece works inside an anti-magic field". Canon says the field suppressed the Lantern and muted Gregory's tug toward it, and the OSTEKK units, built with the Lantern's fragment, stutter but keep running. Canon also says innate non-Weave processes are not suppressed. Options: partial suppression (housings stutter and their pull is muted, but they are not switched off); or full immunity, retiring the Lantern-suppression line. Touches rules/index.html, artifacts/containment-engine.html, dossiers on the OSTEKK units.
  src: memory-canon § Antagonists ("The anti-magic field has been suppressing the Lantern"), § Key NPCs (OSTEKK-6), § Cosmology (Weave ruling)

- **[decide]** Does opening a heart need a Monolith?
  Canon disagrees with itself. One line (marked "Locked this pass") says a heart can only be opened where a Monolith stands, which is why N'ghathrod needs Zeniths. An earlier line says a world's heart is intrinsic to the world and not tied to its Monolith. The cosmic sweep and this page say a Monolith only licenses a link and opens nothing. Options: (a) a Monolith is required to open a heart; (b) a Monolith is required only to link two opened hearts. § Opening on this page, glossary/, and the N'ghathrod and Seekers pages follow the ruling.
  src: memory-canon (open-decisions § Deferred "Locked this pass"; § Planned "Constraints on the Vecna/N'ghathrod layer"); chat-cosmic § Cosmology redesign

#### Tumak: runes, Wayscribes, Wayfind

- **[decide]** Runes 17–19: Anchors or bestowed story runes
  Page: "Unassigned (bestowed)", given at story moments. Proposed redesign (not locked): runes 17, 18 and 19 become external Anchors, Hearth, Threshold and Horizon, attuned through Gregory's Calibration and tied to his calibration sites, possibly bypassing reach. Anchors are personal and portable, distinct from heart-links (fixed public infrastructure); their overlap with Calibration sites is intended. If Anchors stand, two more rulings: whether one Anchor is pre-set at campaign start, and what an Anchored Wayfind grants (mishap-free transit, a tiered mishap reduction, or one free trip per rest). Touches rules/index.html (position table and § Open) and rules/wayfinder-path-dm.html.
  src: memory-canon (open-decisions § Pending; campaign-canon § Tumak Swan); TGB § Tumak/Late-chat design (sampled); framework § Open

- **[decide]** Which two runes are active now
  Still undefined. Set them (see the Tu's-half fix below, which may make the left sole the first matched rune).
  src: chat-voyage-6-7-planning § Open; framework § Open

- **[decide]** Wayscribe recharge
  Page: "At dawn: d2 (Soul), d4 (Maker), d4 (Walker), d10 (Vessel)." The late chat drops the dawn dice and keeps "the first cast per long rest is free, then 1 exhaustion per cast". Options: confirm the drop, or keep the dice. If any recharge survives, add the downtime-refresh item below.
  src: TGB § Tumak/Late-chat design (sampled)

- **[decide]** Wayscribe spellcasting ability
  Proposed: Wayscribe spells use Charisma, save DC 8 + proficiency bonus + CHA modifier. Confirm and add.
  src: TGB § Tumak/Late-chat design (sampled)

- **[decide]** Wayfind reach gated by matched runes
  Proposed reach by matched count: 1–3 Touch (≤100 ft.); 4–6 Local (~10 miles); 7–9 Planetary; 10–12 System; 13–15 Near wildspace; 16 Deep. An attempt beyond reach fails at no cost. The page has no reach table. Accept or reject.
  src: TGB § Tumak/Late-chat design (sampled)

- **[decide]** Distance bands: thresholds and consequences
  Page: "Mishap by distance 0% · 20% · 40% · 60% · 75% · 90%, rising with range", with one mishap result for every band, and the band thresholds undecided. Two rulings:
  1. Set the distance thresholds behind the six percentages (or adopt the reach bands above as the bands).
  2. Keep one mishap result, or adopt tiered consequences: Touch 0%; Local, a fizzle; Planetary, a 1d10-mile overshoot; System, a short separation; Near wildspace, the standard mishap; Deep, a full mishap. The tiered version comes with a three-outcome roll: success, failure, mishap.
  src: TGB § Tumak/Late-chat design, Open (sampled); framework § Open

- **[decide]** Wayfind cost
  Page: "First Wayfind per long rest is free. Each further one adds a level of exhaustion." Proposed: one free Wayfind per long rest, unlimited free Touch jumps, otherwise exhaustion equal to the band (1–5). Rule.
  src: TGB § Tumak/Late-chat design (sampled)

- **[decide]** The early-home door
  Keep or drop: a natural 20 on a d20, rolled before declaring a target, then a confirmation roll to reach home ahead of the arc.
  src: TGB § Tumak/Open (sampled); framework § Open

- **[decide]** Does Sending always work between separated twins?
  Confirm, then add beside the Twin Bond Compass.
  src: TGB § Tumak/Late-chat design, Open (sampled)

- **[decide]** How resources split when the twins separate
  HP, death, consumables. Korey floated half HP, half spell slots, maybe half skills. Rule.
  src: TGB § Tumak/Separation and attempts, Open (sampled)

- **[decide]** 2014 or 2024 exhaustion rules
  Pick one; Wayscribe and Wayfind costs both use exhaustion.
  src: TGB § Tumak/Open (sampled)

- **[decide]** The retroactive backfill
  Two more rune-halves per twin for levels 1–2 were proposed, then dropped somewhere between V3 and V5. Confirm whether it happened, then update the position table.
  src: TGB § Tumak/Open (sampled)

- **[decide]** An optional spell-inscription track
  A spell-inscription track separate from the runes. Keep or drop.
  src: TGB § Tumak/Open (sampled)

- **[fix]** Matched runes carry marks; the per-rune boons are gone
  Page says "Matched runes carry the per-rune boons, power the four Wayscribes". Change to "Matched runes carry marks, power the four Wayscribes". The per-rune +1 boons are removed.
  src: framework § Tumak, § Superseded; chat-crew-tumak-gregory-bartholomew § Superseded; TGB § Tumak/Superseded (sampled)

- **[fix]** Tu's half landed on 08: the left sole is matched
  At the level 4 roll Tu's half landed on 08, so the left sole is Tumak's first matched rune. Page "Current state" says "Wan took the left sole (08), Tu took the right shoulder (16). Two unmatched halves; no rune complete", and position 08 shows only "Wan's half". Confirm against the sampled sweep, then update the position table, "Current state", and ACTIVE_HALVES on rules/wayfinder-path-dm.html.
  src: TGB § Tumak/Late-chat design (sampled); memory-canon (open-decisions § Voyage 007, first rune match)

- **[fix]** Wan and Tu are two hosts
  § One in two says "Tumak is one person occupying two bodies" and calls the twins "a whole Dissolution fragment walking around in two pieces, which is a paradox the cosmology does not otherwise permit". The same section already says "two separate hosts sharing one persona". Restate as two hosts throughout. The fragment wording follows the canon counts (Dissolution has two pieces) and the first-key decide on artifacts/runekeepers-fragment.html.
  src: memory-canon § Cosmology ("always two entities")

- **[fix]** Sol's oath is written
  § Open says Sol's oath carries "implied mechanics that live nowhere". The Oath of Misfortune is finalized (Unified Jinx with Jinx charges; Misfortune's Wake and Misfortune's Edge) and lives on crew/sol.html. Point there and remove Sol from that line.
  src: memory-canon § Sol Fortuna

- **[add]** Why gods cannot make the crossing (§ The approach to the Core)
  Page says only "Gods cannot make the crossing at all". Add the reason: polarity. A god and a heart carry the same charge, so as a god pushes toward a world or the centre the resistance grows until it is unbearable. The centre has ill effects on a god without destroying it. There is no "divine gate".
  src: session-rulings (polarity); working/divine-rules.md § Polarity

- **[add]** The counter-spore plant is the Faelight spore (inference; confirm)
  Name the plant and give its numbers. The Faelight spore is a knuckled, colourless fungus with pustules. Fuelled by a caster's spell slot, it makes a persistent Faerie Fire cloud: bonus action, no concentration, no save, reusable. Radius 10/20/30 ft. by slot; lasts 1 minute. Anything entering is coated: attacks against it have advantage and it cannot benefit from invisibility or obscurement. Allies are coated too. It grows in the tyrant ship's Garden.
  src: memory-canon § Cosmology ("Faelight spore"); chat-voyage-6-7-planning § Superseded (Garden)

- **[add]** Wayscribe menus: what qualifies
  Add to "The four Wayscribes": a lower-level spell qualifies for a Wayscribe menu only if upcasting it to that group's tier gives a real benefit.
  src: TGB § Tumak/Wayscribe design (sampled)

- **[add]** Downtime refresh (only if a recharge rule survives)
  After a week or more of downtime every rune refreshes without rolling.
  src: TGB § Tumak/Wayscribe design (sampled)

- **[add]** Failed attempts and mishaps
  Add to Wayfind: a failed attempt keeps the twins inside Wildspace. Mishaps are never time-related.
  src: TGB § Tumak/Separation and attempts (sampled)

- **[add]** The Twin Bond Compass
  The compass gives direction without distance, and it sharpens with proximity.
  src: TGB § Tumak/Separation and attempts (sampled)

- **[add]** Prep item: Runekeepers' resting places
  Keep a stock of 5–10 previous Runekeepers' resting places to serve as mishap sanctuaries. The page's mishap result says "a previous Wayfinder's resting place"; align the term (Runekeeper).
  src: TGB § Tumak/Open (sampled)

#### Character subsystems

- **[add]** Gregory's Calibration (pointer)
  Calibration is DM-initiated at fitting moments and stacks narrative clues; a failed roll gives static, never misdirection. Thresholds and prep live on crew/gregory.html (see the Crew section). The draft Bearing feature is a decide in the Crew section.
  src: memory-canon § Gregory

- **[add]** Bartholomew's Aspects (pointer)
  The Almost mechanic is a character subsystem: aspects prepared equal to proficiency bonus; Manifest Aspect as a bonus action for 1 minute. Point to the player page `aspects/` and to crew/bartholomew.html.
  src: memory-canon § Bartholomew; chat-voyage-6-7-planning § Bartholomew: Aspects

- *(The tyrant ship's standing combat rulings are listed under statblocks/index.html.)*

### rules/wayfinder-path-dm.html

- **[decide]** The floating runes 17–19
  The page lists runes 17, 18 and 19 as "Floating (DM-bestowed)" placeholders. Update when the Anchor decide on rules/index.html lands.
  src: memory-canon (open-decisions § Pending)

- **[fix]** ACTIVE_HALVES
  Add Tu's half at 08 once the Tu's-half fix on rules/index.html is confirmed.
  src: TGB § Tumak/Late-chat design (sampled)

### statblocks/index.html

- **[decide]** Ostekk-10's stat block and Lightning Breath
  Build the stat block. For Lightning Breath, options: the 12d10 line; or the 20-ft. cone the table saw (suggested 4d10, DC 16 Dex).
  src: chat-voyage-6-7-planning § Open

- **[fix]** Tarto's revised block
  Page says "Five superiority dice (d10), maneuver save DC 16. Seven maneuvers." and "five dice, seven maneuvers". Change to: four superiority dice (d10), regained on a short rest; Clear the Deck is a bonus action. Applies only if the crew picks Tarto as instructor.
  src: chat-cosmic § Rules and crew, § Superseded; chat-voyage-6-7-planning § Open

- **[fix]** How the crew picks the instructor
  Page says "The players choose the teacher at the V007 rendezvous". Change to: the crew picks Saerthe or Tarto by a Discord reaction vote before V007, so the instructor scenes can be prepped.
  src: chat-voyage-6-7-planning § Interlude and downtime; memory-canon (open-decisions § Voyage 007 intent)

- **[add]** What the choice decides
  Add to § What the choice actually decides: Saerthe leans toward exploring ("go look"). Tarto leans toward the mission ("keep going, your mission, your failure"). Each handles talk of the missing things differently.
  src: chat-voyage-6-7-planning § The swap and NPCs; memory-canon (open-decisions § Voyage 007 intent)

- **[add]** Tyrant ship retunes (new rows; the page names these as next candidates)
  - Clockwork horror: HP 30.
  - Hollowed wisps: AC 11; DC 12 Con save; 1d4 necrotic; they latch on on a failed save.
  - Standing ruling: two cones give +3 cover.
  src: chat-voyage-6-7-planning § The field and constructs

- **[add]** Design note: N'ghathrod's block
  N'ghathrod runs as one flat, high-powered block: run on sight, never scaled down (Otohan Thull style). His block and the five lieutenants' blocks are deferred.
  src: memory-canon § Deferred; chat-cosmic § Open

### tracker/index.html (DM layer: prime/data/overlay.json)

- **[fix]** The seated Lantern is a one-person pod
  overlay.json says "Seated, it turns the ship into a safehouse." Change to: seated in the bay, the Lantern is a one-person rejuvenation pod (one creature, one hour, all three charges, a long rest even if it already had one that day).
  src: chat-voyage-6-7-planning § Superseded

- **[fix]** OSTEKK-6's repair objective is closed
  overlay.json "next" says "Seat the Lantern in the repair bay so Ostekk-6 finishes rebuilding." A Lantern charge repaired him instead of the bay. Close the objective, or replace it with his current next step.
  src: chat-voyage-6-7-planning § The Lantern and the ship

- **[fix]** What the Command Deck field does to constructs
  overlay.json says "The Command Deck's field unmakes constructs". Change to: the field froze the clockwork horrors, slowed the OSTEKK units and kept the behir out.
  src: chat-voyage-6-7-planning § The field and constructs

- *(The OSTEKK-2 "wake it for good" line in overlay.json is a decide under artifacts/containment-engine.html in the Artifacts and vessels section.)*

### aspects/index.html (player site, outside prime)

- **[decide]** Crocodile "Hold Breath"
  Options: rename it Breathless; or limit it to 1 hour.
  src: chat-voyage-6-7-planning § Open

# New pages

Each proposed new page has a purpose, a voice, and its content items. Paths are
suggestions for the overhaul. Items run decide, fix, drop, add.

Voice key: **in-world** reads like a fan wiki about things that exist;
**DM** speaks to the DM about how it is run.

---

### NEW: Contract board (graduation board)

**Purpose.** The graduation board's contracts, one entry each: the Grade, where it is, who is involved, what is really going on, and how it ties to the larger campaign. These are the jobs the crew can take at graduation, and each one plants a thread (the resonance-crystal supply line, the heart surveys, the Fork, the Watchers). Suggested path: `prime/campaign/contracts.html`.

**Voice.** In-world for each contract's facts (people, places, what happened); DM for the "what's really going on" and tie-in notes.

- **[add]** Lane Marker 14 (Grade IV, Toril–Garden lane)
  The lane beacon at Marker 14 is dark. Crystal thieves took it to pay for care for a sick child: the Ardenne family, with Mella Ardenne speaking for them. Their buyer is Sefn Tolur, a human who flies with a hadozee pilot and pays through a broker on Toril's orbital market. Tolur feeds the resonance-crystal supply line, which needs crystal that is beacon-cut and bought from at least four systems. Gregory hums when near it.
  src: chat-cosmic § Graduation board contracts

- **[add]** Dry Well, Anadia (Grade IV)
  The settlements of Dunmarrow and Kesh Hollow share a water compact four generations old. Elder Tobb Ashlow of Dunmarrow took payment from surveyors to deepen the well; Neth Kesh speaks for Kesh Hollow. Below the well is a chamber holding the eye-in-a-wheel and the bodies of four missing labourers. The surveyors were a tall, quiet woman and a talkative man; a child's drawing of them has their eyes wrong; they went inland toward the ranges.
  DM: the chamber is a failed survey for the heart's Atrium (term per the Atrium/Aperture decide), and Tumak's runes surface there. Link to Colony Ops "How they search" (colony/index.html, Anadia well). Dunmarrow appears on no realms page yet.
  src: chat-cosmic § Graduation board contracts; colony/index.html (Anadia well)

- **[add]** Repossession (Grade IV)
  Recover the skiff *Tallow Wren* at Toril's orbital market. The moneylender who wants it back also holds the debts of Miken's fiancé. The skiff's log ties to the Fork.
  src: chat-cosmic § Graduation board contracts, § Superseded

- **[add]** Watcher Transport
  Collect Ezra at H'Catha and take him to the Hall of the Watchers. The crew is the last troop he travels with before his own journey begins. (Ezra is Korey's PC in another campaign; Caelestis does not visit his homeworld, and his role here is transitory.) dossiers/ezra.html instead has the crew leave him on H'Catha, with an optional ferry to Emporia after his knighting; bring that page in line with this contract (Emporia can stay as his later assignment).
  src: memory-canon § Key NPCs (Ezra plan); chat-cosmic § Graduation board contracts

### NEW: Encounter Log

**Purpose.** The companion to every random encounter table (Astral first). Each table row points to a Log entry, so a roll at the table always lands on something prepared. spine.html records both the Astral encounter table and this log as unwritten. Suggested path: `prime/campaign/encounters.html`.

**Voice.** DM.

- **[add]** Entry format
  Every random-table row points to an Encounter Log entry with: code, read-aloud, truth, wants, three outcomes, stats, payoff and plant. A one-line entry with nothing behind it is not allowed.
  src: chat-cosmic § Encounter tables; campaign/spine.html

### NEW: Crossing table (Crossing Companion calls)

**Purpose.** The ruled content of the Crossing Companion doc (its Calls table): the d20 crossing entries and the ships, people and history they introduce. Today it lives only in a Google Doc with unreviewed proposals. Suggested path: `prime/campaign/crossing.html`.

**Voice.** DM for the table; in-world for each ship, person and history entry.

- **[decide]** Lock or change each Crossing Companion proposal
  Unreviewed: d20 crossing entries 9–20; the *Hollow Bell* and Corrow (a world mid-Zenith); the *Fennick* plate; Oswin Pell and the Listeners of the Low Bell (the first account of the voice); Kith'rak Aznuil and the two-circle Passage mark; the *Steady Hand*, Warden Oru Basz and the *Marrow Gull* buoy; Thistlewhit's letter to Mirt; the frozen autognome ("Hold until called"); the creed lines; Watcher history (the Quiet of Seln, Aubrin's Hand, the Ferry Arrangement, the Neogi Winter, the Ashfall contract, where Tarto lost her wing flap); Driftwarden grades IV–I shown by collar knots.
  src: astral § Open

- **[drop]** Dead names in the Crossing Companion doc
  The doc still names the Watcher "Ondessa Vael" and carries Ilvathe. Both names are dead; remove them before anything is lifted from the doc.
  src: astral § Open

### NEW: Oerth (realm stub)

**Purpose.** Vecna's homeworld, where his godhood was won and his hold is strongest. A late-game destination and the anchor of his realm. STAGING lists it, and working/vecna.md names it under "Promotes to". Suggested path: `prime/realms/oerth.html`.

**Voice.** In-world.

- **[decide]** How the crew could reach Oerth's sphere, and how late
  src: working/vecna.md § Open

- **[add]** Oerth
  Oerth is Vecna's homeworld, in a far sphere of its own. He achieved godhood there. It is the centre of his worship, the anchor of his realm (published name Cavitius), and the place where his hold is strongest. The Monolith from his ascension still stands on Oerth, and his faithful treat it as the holiest site in the cosmos. Oerth is the darkest timeline in miniature: a world where heroes rose against him and failed. It can be reached, and visiting it is horrible.
  src: session-rulings; working/vecna.md § Oerth, § Realm; memory-canon (open-decisions, Vecna/gods 2026-10-25)

### NEW: Exandria (realm stub or registry line)

**Purpose.** Records Exandria as a world in the cosmos, borrowed from a published setting, so it can be used without importing its history. Suggested: a line on `prime/realms/index.html` beside Oerth, or a stub.

**Voice.** In-world for the stub; DM for the borrowing note.

- **[decide]** Exandria's sphere
  Place it, or leave it unplaced.
  src: memory-canon (open-decisions)

- **[add]** Exandria
  Exandria is a world in the cosmos. None of Vecna's history there happened in this cosmos; it plays as a pre-Vox Machina world.
  DM: it is a borrowed setting, like the Azeroth one-shot Korey's players have floated.
  src: working/vecna.md § Oerth; memory-canon (open-decisions, Vecna/Tharizdun 2026-10-25; Direction 2026-10-21)

### NEW: Hall of the Watchers (location)

**Purpose.** The Watcher order's seat. The crew delivers Ezra there on a graduation contract, and it is a candidate home for the Watcher who came back from Glyth. No realms page exists. Suggested path: `prime/realms/hall-of-the-watchers.html` (or under factions if it is not a world).

**Voice.** In-world.

- **[decide]** Where the Hall is
  Its world, station or sphere is not set.
  src: memory-canon § Key NPCs (Ezra); working/glyth-watcher.md § Where she fits

- **[add]** The Hall of the Watchers
  The Hall of the Watchers is the seat of the Watcher order. Watchers serve one per region, so a world may have several, depending on its size and who lives there.
  src: memory-canon § Key NPCs (Ezra; Watcher ruling corrected)

### NEW: Glyth Watcher (dossier)

**Purpose.** The Watcher who lived years on Glyth and came back. She is the only outside source on the elder brain and N'ghathrod's origins, and one of the named-but-unseen figures the crew hears of before meeting. Promotes from working/glyth-watcher.md. Suggested path: `prime/dossiers/<name>.html`.

**Voice.** In-world.

- **[decide]** Her name
  src: glyth-watcher § Open

- **[decide]** Her tell
  Options: her ears; her mouth; skin that ripples under the surface.
  src: glyth-watcher § Sketch

- **[decide]** How she got out, and what it cost
  src: glyth-watcher § Open

- **[decide]** What she wants now
  Options: revenge; a cure; to go back.
  src: glyth-watcher § Open

- **[decide]** Whether the Order trusts her
  src: glyth-watcher § Open

- **[decide]** Where she lives
  Options: the Hall of the Watchers; Caelestis's undecided secret sliver.
  src: glyth-watcher § Where she fits

- **[add]** Who she is
  She is a Watcher who lived for years on Glyth, inside the elder brain's psychic range, without taking a tadpole. She got out alone and still hears the brain. She is the only person outside Glyth who knows what the brain is thinking, and the hearing is slowly costing her.
  src: glyth-watcher § Sketch; memory-canon (open-decisions, Vecna direction 2026-10-24)

- **[add]** What she knows
  Glyth's colonies; the elder brain and the pure-born; N'ghathrod's exile with the brainless-raised; the purebred lieutenant who stayed; why the Fleet bans approach to Glyth.
  src: glyth-watcher § What she knows

- **[add]** How the crew meets her (DM)
  She is one of the named-but-unseen figures: the crew hears of her in contradictory accounts before they meet her.
  src: glyth-watcher § Where she fits

### NEW: The Accordance (faction)

**Purpose.** The gathering of gods behind the Fonains campaign's backstory. Only thessalar.html and clint.html mention it now. A page lets both campaigns point at one definition. Suggested path: `prime/factions/accordance.html`.

**Voice.** In-world.

- **[add]** The Accordance
  The Accordance is the gathering of gods who sealed the Princes of Elemental Evil. Its members include Asmodeus, Eldath and Primus, among others. The Accordance chose Lola's Boys as its champions and sent them back to Thessalar's planar craft, where they took the craft's control and defence gems.
  src: chat-cosmic § Fonains background, § Open; memory-canon (Fonains canon); session-rulings

### NEW: Boogie's faith (name to be chosen)

**Purpose.** The small faith that may come to see Boogie as a prophet. It sets up a pilgrimage and gives the shard's "holy" pull a human face. It must stay distinct from the Seekers. Suggested path: `prime/factions/<name>.html`, or a section on factions/index.html.

**Voice.** In-world; DM for the seed.

- **[decide]** The faith's name
  Options: The Willing and Taken; The Hollow Faithful; The Willing Departed; The Welcomed Home. "The Following" is retired and unavailable.
  src: BCS § Boogie/Open

- **[decide]** Which planets hold the faith
  src: BCS § Boogie/Open

- **[add]** The faith
  A small faith with a few followers across many worlds, and one or two older sites where it has a bigger presence. It predates the corruption of the Fonains Monolith: it formed around a felt call and holds no prophecy about any specific person. Its doctrine: something vast and full is calling, and being gathered there is completion. Its followers read "bring everything here" as ascent. Its practices are voluntary release, listening, and treating disappearances as signs. Its oldest term for the awaited one is "the one who has already partially arrived."
  src: BCS § Boogie/The faith; memory-canon (Boogie prophet arc)

- **[add]** Seed (DM): the holiest site
  The faith's holiest site may be a misread Temple of Elemental Evil, a containment site, and a few insiders know the lie.
  src: BCS § Boogie/The faith

### NEW: The Becoming (player handout)

**Purpose.** The tale the twins' grandmother told them as children, given to Tumak's player as an in-world handout. It carries the Lunarfoot belief about the runes, which is wrong about the mechanism. Player side: `handouts/the-becoming.html` (from the chat output the-becoming.html), with the DM note kept in prime.

**Voice.** In-world (the tale itself); one DM note in prime.

- **[decide]** "The Unfolding"
  The tale's inherited name for the hiding is "the Unfolding", which collides with the glossary's heart-opening sense of "unfolding". Options: keep both; rename the tale's term; or rename the glossary sense.
  src: TGB § Tumak/"The Becoming" handout (sampled); glossary/

- **[add]** The tale
  It opens: "Long ago, my hearts — before my mother's mother's mother". In it the thing that came looking is "a star with too many mouths" or "a name written wrong", and the world folds itself around its people and bestows runes on them as gifts. It closes: "The two of you have always been one to me." / "When the time comes — come home safe."
  DM note (prime only): this is Lunarfoot belief. The runes come from the Dissolution fragment, not from a gift.
  src: TGB § Tumak/"The Becoming" handout (sampled); memory-canon (Dissolution fragment model)

- **[add]** The Lunarfoot seal
  A crescent moon cradling a footprint, with two four-point stars for the twins. Also usable on the-runekeeper.html.
  src: TGB § Tumak/"The Becoming" handout (sampled)

### NEW: Bellwether Crow (vessel)

**Purpose.** The Caelestis ship whose ambush planted N'ghathrod's operative inside the Academy. It needs an entry page for the vessels register row (see the Artifacts and vessels section). Suggested path: `prime/vessels/bellwether-crow.html`.

**Voice.** In-world.

- **[add]** The *Bellwether Crow*
  A Caelestis ship. About a year ago Vocath's crew ambushed it on the Strake–Cairn leg near Cairn Station, under a deal with N'ghathrod: captives for Vocath, an asset inside sealed Caelestis for N'ghathrod. Clint Dashforest went overboard in the same engagement. Joffrey was taken and let go with a few survivors; most of the crew did not return. One clean, confused survivor noticed Joffrey had changed and never reported it; the crew can find them by pulling the roster.
  src: timeline.json "The Bellwether Crow ambushed" (canon); memory-canon § Deferred ("Operative resolved")

### NEW: Thessalar's planar craft (vessel / megadungeon)

**Purpose.** The fallen craft that links Fonains, N'ghathrod and the Rod's seventh piece. It needs an entry page for the vessels register row. Suggested path: `prime/vessels/thessalars-craft.html`.

**Voice.** In-world.

- **[add]** Thessalar's planar craft
  Thessalar's planar craft fell about 500 years ago ("millennia" in Lola's Boys is rumour). N'ghathrod was already a prisoner aboard. Lola's Boys, sent back by the Accordance, took the craft's control and defence gems (the red gem from the cavern lake and the hazy yellow gem). Without them the craft fell, and the crash let N'ghathrod escape. The craft is now a megadungeon (the Mad Mage's), Daoine Gloine is a broken-off piece of it, and the Thessalkraken landed separately in the sea (the Drowned God's kraken). The Rod's seventh piece was left aboard. The gems are not Reach residue.
  src: session-rulings; memory-canon (open-decisions, seventh piece; Timing rulings)

### NEW: Cadet intake

**Purpose.** How cadets reach Caelestis, especially from worlds without spelljamming. No page covers recruitment.

**Voice.** In-world.

- *(The decide lives in the Crew section under crew/index.html. Known so far: the Watcher order broke protocol to recommend Sol.)*

### NEW: Campaign board

**Purpose.** The DM's at-a-glance view of the run: planned against actual per voyage, each crew member's contribution, the arcs, the off-screen powers, and the ripples into Arc 2. It exists today only as claude.ai artifacts. Whether it becomes `prime/timeline/` or a separate page is an automation decide (see the Automation and tracker section).

**Voice.** DM.

- **[decide]** Whether the board's forward columns are editable
  src: chat-cosmic § Open

- **[add]** What the board shows
  Planned against actual per voyage; each crew member's contribution; the arcs; the off-screen powers; ripples into Arc 2.
  src: chat-cosmic § Wiki structure rules (turn 439); memory-canon (DM views at a glance)

### NEW: Campaign shape

**Purpose.** The tone and source rules for the cosmos as a whole. Suggested: a section of `prime/campaign/index.html`, or its own page.

**Voice.** DM.

- **[add]** Tone by place
  The background tone is cosmic horror. Each world keeps its own genre: Realmspace is traditional fantasy, the spelljamming lanes bend toward sci-fi, and horror lives in the deep Astral and at the edges.
  src: astral § Cosmos and campaign shape; memory-canon (open-decisions, Direction 2026-10-21)

- **[add]** New worlds come from published settings
  Where possible, new worlds come from published settings: Azeroth as a possible one-shot, Exandria without its Critical Role events, Drakkenheim.
  src: astral § Cosmos and campaign shape; memory-canon (open-decisions)

### NEW: Cosmos texture

**Purpose.** The recurring patterns that make the cosmos feel lived-in and larger than the crew: things they keep running into across worlds. Suggested path: `prime/cosmology/texture.html`.

**Voice.** DM.

- **[decide]** The ensemble of legendary figures
  Who the named-but-unseen figures are. spine.html lists it under Open development.
  src: chat-cosmic § Open; campaign/spine.html

- **[decide]** The edge-of-system Awoken equivalent
  Something kept under wraps at the system's edge, with Mara Sov- and Osiris-style figures. Design it.
  src: chat-cosmic § Open; memory-canon

- **[add]** The patterns
  - Worlds state true facts they never explain (the Destiny's Reef effect).
  - Illithids are the campaign's Hive: the crew keeps finding signs that "they're here too" across worlds.
  - A modron march is the cosmos's Vex: a cross-world process whose sign is perfect geometry.
  - Names circulate before they are met (the Osiris pattern), told by sources that disagree. Zerathis is the first.
  - A delving culture of ruin exploration exists, like post-Aeor in Critical Role.
  src: chat-cosmic § Cosmos texture; memory-canon

### NEW: DM principles

**Purpose.** How Korey runs this table: the story, pacing and reveal rules learned so far, in one place. Merges the "Running principles" and "DM principles" proposals. Suggested: its own page, or a section of `prime/campaign/spine.html`.

**Voice.** DM.

- **[add]** Canon and scope
  - Caelestis cosmology conforms to Fonains: Lola's Boys came first and everything builds off it.
  - Some factions are Vecna's and many are not. Some trouble is a Zenith and much is local politics.
  src: chat-cosmic § Thessalar and Fonains, § Act 1 retrofit; memory-canon (Fonains canon 2026-10-25)

- **[add]** Story shape
  - A mission is a nudge: the crew arrives mid-chapter into a situation already running, which continues if they leave.
  - Story is portable: a few key worlds carry fixed story, and floating situations move to wherever the crew goes.
  - Villain planning runs at three resolutions: a fixed end, fixed major steps, and one detailed next step. "A is the plan, B happened, C is the response, they still have to reach D."
  - Railroading is acceptable only inside a situation the crew chose, until it ends: scenes have walls.
  - The party goes in thinking it is one thing, and it turns out to be another, without leaving the path.
  - The party always knows its goal. How they reach it is theirs; the DM supplies tools.
  src: chat-early-planning § Method; chat-voyage-6-7-planning § Table and story principles

- **[add]** The players
  - Sol's and Bartholomew's players want direct hooks and a push. Casey's and Tumak's pull on mystery unprompted. Gregory's sits between.
  - Reveal a mechanic by player: set up a situation where it fires for discovery players (Tumak); give it up front to Bartholomew; keep Casey vague; give Sol, Gregory and Boogie concrete material.
  - Give a player a mechanic in full and hold back its meaning.
  - Each PC keeps a distinct bespoke thread. Beats are things players interact with, never long narration or "you have a dream".
  src: chat-voyage-6-7-planning § Table and story principles, § Bartholomew: Aspects

- **[add]** NPCs and connections
  - Every new NPC arrives with a hook of their own. Pffred and Krik'Lit were "just another person".
  - Subtlety only goes so far: put a connection in front of the players twice, or have an NPC remark on it.
  src: chat-voyage-6-7-planning § Table and story principles; chat-cosmic § Vecna's following; memory-canon (Ezra hook)

- **[add]** Set pieces
  - Keep set-piece mechanics simple, and keep NPCs from solving puzzles for the players. The V006 Command Deck fight was a slog for an online table.
  - Ship exploration runs theatre of mind, with detailed per-level notes and no map.
  src: chat-voyage-6-7-planning § Retro lessons, § Table and story principles

---

### hub.html

- **[decide]** The hub's central question
  The hub asks "Who decides what's real?" The stated campaign theme is that everything is separated from what it belongs to and trying to get back, and the campaign's question is whether a home can be made or only returned to, and what making one from what was taken costs. Options: replace the tagline with the belonging question, or keep both.
  src: memory-canon § Deferred ("Stated campaign theme"); chat-cosmic § Open

- **[decide]** Which Lore Bible is current
  The hub's "Wildspace Lore Bible" tile opens doc `1XjOAGPA…`. The project's synced Lore Bible is "Caelestis Campaign Lore Bible" (doc `1SLoMt7h9DboUQQlXZA61HukmnQBkjHKUNtLH2Qt4IMQ`). Confirm which is current, then fix the link and label.
  src: hub.html; project synced sources

- **[decide]** Which Drive folder is the root
  The hub's Drive Root tile opens folder `1suJFIN_LYDmRrkzjk3PkVv2pOmbJxE8r`. Memory gives the Caelestis folder as `1KuFCCLYKM2LuW6Hd4NEDq9GIsHL2L3Y5`. Confirm and fix.
  src: hub.html; memory-canon § Tools and gotchas

- **[decide]** The Trackers band
  It says "The Tracker reads the record; the sheets beside it are edited in place." The Google Sheet tracker is frozen, and tracker alternatives are under review. Options: keep the Character Arc Tracker and Wildspace Tracker cards, or retire them. Follows the sheet decide in the Automation and tracker section.
  src: memory-canon § Automation pipeline; memory-canon (open-decisions, Plan 2026-10-25)

- **[decide]** The Ascension card's "second key"
  The card lists "the second key", which depends on the first-key decide on artifacts/runekeepers-fragment.html. Keep or drop after that ruling. (The card's Atrium wording follows the Atrium/Aperture decide.)
  src: the Artifacts and vessels section (runekeepers-fragment decide)

- **[add]** A Vessels card under Setting
  The DM nav has Setting → Vessels, but the hub has no Vessels card. PR #71 added Factions and Vessels cards on the player side.
  src: prime/scripts/dm-nav.js; chat-voyage-6-7-planning § Documents produced

- **[add]** A Timeline card under Campaign
  The DM nav has Run → Timeline, but the hub has no Timeline card.
  src: prime/scripts/dm-nav.js

### Other pages outside the assigned folders

#### notes/PAGE-SHAPE.md

- **[decide]** Dossier tab grammar
  PAGE-SHAPE.md uses four tabs: Who they are / What they want / DM notes / Stat block, and explains folding "What's hidden" into DM notes. The earlier rule (turn 460) had five: What it is / What it wants / What's hidden / Running it / Stat block. Options: keep PAGE-SHAPE's four, or return to five.
  src: chat-cosmic § Wiki structure rules (turn 460)

- **[add]** Concept backlinks
  Concept backlinks deep-link to the section, not the page.
  src: chat-cosmic § Wiki structure rules

- **[add]** Canon rules for § Prose
  - At DM level the world never contradicts itself. At player level contradictions are allowed (lies, bad information), and not everything has to connect.
  - Canon never mentions a concept that does not exist (for example, "there is no Existence Axiom"). Contrasts that explain how something works are fine. Place beside "Canon voice, not changelog voice".
  src: framework § Working rules; memory-canon (campaign-canon, Axioms line)

#### notes/WIKI-PAGE-GUIDE.md

- **[fix]** A.T.L.A.S., not "the World Surveyor"
  Lines 45, 63–64, 490 and 525 say "the World Surveyor". Change each to A.T.L.A.S.
  src: framework § A.T.L.A.S.; memory-canon (campaign-canon)

- **[drop]** "The network" as a faction term
  Line 48 says "who Vecna's current network is". "The network" is retired; reword to N'ghathrod's colony and the Seekers.
  src: framework § Open; memory-canon (open-decisions, Act 1 retrofit; Seekers line)

#### notes/FIA-BREADCRUMBS.md

- **[fix]** A.T.L.A.S., not "the World Surveyor"
  Line 59 says "the World Surveyor". Change to A.T.L.A.S.
  src: framework § A.T.L.A.S.

#### restricted/sa-005.html (FIA, player-readable)

- **[add]** Why Tarroway's name is withheld
  The memorial withholds the cartographer's name (SJN-2405) with no stated reason. Add: SA-005 keeps Tarroway's name "at Bridge direction pending resolution." Fleet never redacts a name stated plainly elsewhere, so the note explains the exception. (The quoted phrase is in-world FIA record language.)
  src: framework § FIA records

#### voyages/voyage-005.html (player site, outside prime)

- **[fix]** Ryeback is a giff
  Page says "Ryeback, the hippogriff", a voice-to-text garble of "a giff". Change to "Ryeback, the giff" (he carries a hand cannon). data/vocabulary.js carries the same garble; flag it for the player side. data/npcs.json is already correct.
  src: automation § Voyage 005 canon; chat-voyage-6-7-planning § Naming and corrections; memory-canon (Key NPCs)

# Automation and tracker

Korey is revisiting the pipeline and tracker alternatives during the prime
overhaul. This file sets out the current state, then the open choices. Items
run decide, fix, drop, add.

### Current state (checked against the repo, 2026-10-25)

- **Session ingest.** n8n is dropped. A session runs in chat against the repo, following `prime/notes/SESSION-RUN.md`: Open → Read → Chronicle (**approval 1**) → Extract (**approval 2**) → Record → Render → Check → Publish. Nothing is written to the repo before approval 1, and nothing to the record before approval 2. A run goes up as one pull request; a run that stops halfway is picked up from its branch. The source is the Drive file `Caelestis _ The Spelljamming Academy _ Voyage NNN.txt` (transcript or dictation).
- **The record.** `data/*.json` is the player-facing campaign record, kept by hand: sessions, npcs, locations, items, factions, quests, player-characters (plus derived `index.json`, `voyage.js`). `prime/data/*.json` is the DM layer over it, keyed by the same ids (`overlay.json`, `voyages.json`, derived `dossiers.json`). The schema is closed and listed at the top of `scripts/data.js`; a DM fact has no key to sit under, which keeps `data/` player-safe. Records already carry `parentId` (16 locations use it).
- **Verbs.** `node scripts/data.js derive` fills derived fields; `check` verifies record, DM layer and pages (must report 0 errors before a PR); `guard` is the deploy test.
- **CI.** `check.yml` runs `data.js check`. `deploy.yml` builds three Pagefind indexes (player, DM, FIA), runs `data.js guard`, prunes, and deploys to GitHub Pages. There is no build step.
- **Benched.** `scripts/_benched/build-pages.js` (the template-entity scaffolder) is out of service and must not be run. `build-data.js` and `transform.js` were retired with the Google Sheet.
- **The Google Sheet tracker** ("Caelestis Campaign Tracker") is frozen. `prime/tracker/` shows the repo record plus the DM overlay.
- **Unmigrated sheets.** "Caelestis Character Arc Tracker" and "Caelestis Wildspace Tracker" still exist as synced Google Sheets; the hub still links them.
- **Timeline.** `prime/timeline/timeline.json` is hand-edited JSON with four lanes and a clocks list; `prime/timeline/index.html` fetches it in the browser.
- **Crew Logs.** Step 7 of the runbook still appends the Full Account to the Crew Logs Google Doc ("Voyages"), embedded on the player site at `logs/`.

### Pipeline and tracker

- **[decide]** Session ingest
  Current: the in-chat runbook above, with two approvals and a PR. Options: (a) keep the in-chat runbook as is; (b) keep it and trim steps (for example, drop the Crew Logs append, see below); (c) adopt an alternative pipeline. Whatever is chosen, SESSION-RUN.md and CLAUDE.md change together.
  src: automation § Voyage 5 Method; memory-canon (open-decisions, Plan 2026-10-25; site-and-automation)

- **[decide]** The tracker
  Current: the repo JSON record (`data/` plus `prime/data/`), checked in CI and shown on `prime/tracker/`; the Sheet is frozen. Options: (a) keep the repo record as the tracker; (b) move to a tracker alternative, which would need its own player/DM boundary to replace what the closed schema gives now. Touches hub.html (Trackers band), prime/tracker/, SESSION-RUN.md, DATA-BOUNDARY.md.
  src: automation § Voyage 5 Method; memory-canon (site-and-automation; open-decisions, Plan 2026-10-25)

- **[decide]** The Character Arc Tracker and Wildspace Tracker sheets
  Both are unmigrated. Options: fold them into the record (arcs into the DM layer, wildspace into locations); keep them as sheets; or retire them. The hub's Trackers band follows (see the New pages section, hub.html).
  src: automation § Open (both chats)

- **[decide]** The Crew Logs Google Doc
  Korey calls it unused, yet the V005 run appended to it, the runbook's step 7 still does, and the voyage pages carry the same text. Options: retire it (drop step 7's append and the `logs/` embed); or keep appending.
  src: automation § Open; prime/notes/SESSION-RUN.md step 7

- **[decide]** Deploy and search
  Current: deploy.yml builds the three Pagefind indexes and guards the record; the transform and scaffold steps are gone, and `scripts/_benched/` is out of service. Options: keep as is, or revise during the overhaul (for example, retire or delete the benched scaffolder).
  src: automation § Documents produced; memory-canon (site-and-automation); scripts/_benched/README.md

### DM views

- **[decide]** The Campaign Board and a Chronicle view
  The Campaign Board is an arc timeline with a "where are we" marker and parallel tracks; a Chronicle view was also planned. `prime/timeline/` exists (timeline.json with lanes and clocks); neither view is built under those names, and the Board exists only as claude.ai artifacts. Options: treat `prime/timeline/` as the Campaign Board and extend it; or build the Board and Chronicle as separate pages. See the New pages section, NEW: Campaign board.
  src: framework § Open; memory-canon (open-decisions, DM views)

- **[decide]** Where the weather of reality is tracked
  timeline.json has no clock or lane for it. Options: a timeline clock; a timeline lane; or a tracker row.
  src: framework § Open; memory-canon (campaign-canon)

- **[decide]** The prep brief
  A brief generated from open threads plus act structure was planned; there is no sign it was built. Options: build it from the record and timeline; or drop it.
  src: automation § Open

- **[decide]** Locale-level places
  Merchants, shipyards and taverns with a parent world or station, so the register can filter by them. This was proposed for the Sheet's Locations tab, which is frozen. The record's locations already carry `parentId` (16 do). Options: use `parentId` for locales and add filtering to the register; or drop the idea.
  src: framework § Open; scripts/data.js schema

### Housekeeping

- **[decide]** The SotDQ tracker cleanup
  Deferred. Schedule it or drop it.
  src: automation § Open

- **[decide]** "Autognome" in V003 and V004
  Those voyages call the OSTEKK units "autognomes"; canon makes them automatons (Gregory is the autognome). Runbook default: leave them as history, since that is what the crew believed then. Confirm the default, or sweep them to "automaton".
  src: automation § Open; memory-canon § Key NPCs (OSTEKK-6)

- **[fix]** The search-repair table runs backwards
  `prime/notes/RESTRUCTURE-NOTES.md` maps wrong spellings to right ones. Line 348 reads "Saerthe → Saerth"; change to "Saerth → Saerthe". The roster line (line 225) lists "Saerth"; change to "Saerthe". "Sor'kur" should read "Sor'Kur" on lines 226, 341 and 347 (line 347: "Sorker → Sor'Kur").
  src: automation § Open; memory-canon (campaign-canon, spellings)

# Repo and process

## Page conventions

- **[decide]** Dossier tab names
  The 36 live prime dossiers and PAGE-SHAPE.md use *Who they are / What they want / DM notes / Stat block*. A later ruling in the cosmic campaign chat (turn 460) set *What it is / What it wants / What's hidden / Running it / Stat block*. Pick one set. Either way the PAGE-SHAPE principles hold: one set everywhere, labels never inflect, a page carries only the tabs it has content for.
  Touches: every dossier under prime/dossiers/, PAGE-SHAPE.md (or its successor guide).
  src: notes/PAGE-SHAPE.md; inbox/chat-cosmic-campaign-structure.md

- **[decide]** "Open" subsections on DM pages
  PAGE-SHAPE.md puts an *Open* subsection with `is-open` tags inside a dossier's DM notes; 35 prime pages carry one. The new writing rule keeps open questions on the planning layer only. Options: (a) DM notes count as planning, so *Open* stays on DM pages but never on player pages; (b) *Open* moves off every entry page into BACKLOG.md, and `is-open` survives only on planning pages (Spine, Plot Hooks, Voyages, What If).
  Touches: 35 prime pages, the page guide.
  src: notes/PAGE-SHAPE.md; working/README.md

- **[decide]** How a page states an unknown
  WIKI-PAGE-GUIDE.md: "The Reach's name is not known… phrase gaps as such." The new rule: an entry says what is known and stops. Suggested split: an in-world gap ("the Fleet does not know the Reach's name") is a world fact and may stay; a DM gap ("name not yet decided") is a backlog item.
  src: notes/WIKI-PAGE-GUIDE.md; working/README.md

- **[decide]** One vocabulary for the record's sets
  DATA-BOUNDARY.md and SESSION-RUN.md call the sets voyages, crew, cast, factions, places, things, threads. The files in `data/` are sessions, player-characters, npcs, factions, locations, items, quests. Suggested: the file names in all process docs; in-world labels only on pages.
  src: notes/DATA-BOUNDARY.md, notes/SESSION-RUN.md, scripts/data.js

## Record and schema

- **[decide]** Ships in the record
  SESSION-RUN.md files a ship as a place with Type `Vessel`, parented to where it was last seen, and parks simulated ships under the Simulation Deck with Status `Simulated`. The ruling "vessels are vessels" needs either a vessel set in `data/` or a `kind` field, a status vocabulary without "Simulated" on places, and a choice of whether a ship's whereabouts is a field or a parent link. Lands with the refactor (`navigation-records/` ships move to `vessels/`).
  Touches: scripts/data.js schema, data/locations.json, SESSION-RUN.md, navigation-records/, vessels/.
  src: notes/SESSION-RUN.md; working/repo-refactor.md

## Fixes

- **[fix]** SESSION-RUN step 2 write target
  Step 2 says to write the Full Account to `CHRONICLE.md`, which would overwrite the chronicle rules. The Full Account goes to the chat for review and onto the voyage page at step 5.
  src: notes/SESSION-RUN.md

- **[fix]** Process docs ship with the site
  `deploy.yml` prunes CLAUDE.md, scripts/data.js, prime/working and templates, but not `prime/notes/`. Move the surviving docs to an undeployed `docs/` folder, or add `prime/notes` to the prune step.
  src: .github/workflows/deploy.yml

- **[fix]** `vessels/` missing from the player search index
  The player Pagefind glob lists every player folder except `vessels/`. Add `vessels/**/*.html` (and update the glob again when the refactor renames folders).
  src: .github/workflows/deploy.yml

- **[decide]** Leftover UI calls from the migration notes
  Still open in FIXES-DEMO-MIGRATION.md: the FIA bearing strip, merging the survey chart, the navigation-records clip at 1024px, the clickable blurb overlay, and missing links on voyage briefings 001, 003 and 004. Keep any of these, or drop them with the notes.
  src: notes/FIXES-DEMO-MIGRATION.md, notes/RESTRUCTURE-NOTES.md
