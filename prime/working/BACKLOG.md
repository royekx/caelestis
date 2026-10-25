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
| Cosmology | cosmology/, glossary/, chart/ | 14 | 20 | 0 | 25 |
| Realms | realms/ except Fonains; a new Oerth page | 35 | 33 | 3 | 47 |
| Fonains | realms/fonains.html, the Fonains Canon Reference doc, the timeline's Fonains lane | 13 | 13 | 1 | 29 |
| Timeline | the rest of timeline.json | 3 | 5 | 0 | 0 |
| Factions | factions/ | 20 | 20 | 2 | 40 |
| Campaign | campaign/: spine, ascension, colony, voyages, plot hooks | 19 | 45 | 5 | 40 |
| Dossiers | dossiers/ | 26 | 41 | 0 | 50 |
| Crew | crew/ | 32 | 16 | 0 | 73 |
| Artifacts and vessels | artifacts/, vessels/ | 12 | 26 | 0 | 43 |
| Rules | rules/, statblocks/, tracker/, wayfinder-path/ | 18 | 19 | 0 | 17 |
| New pages | 14 proposed pages, the hub, notes/ | 22 | 7 | 2 | 34 |
| Automation and tracker | the session pipeline and tracker alternatives | 10 | 2 | 0 | 0 |
| Player pages | restricted/ and other player pages | 0 | 2 | 1 | 0 |
| Repo and process | page conventions, the record's schema, process docs, deploy | 7 | 4 | 0 | 1 |
| **Total** | | **231** | **253** | **14** | **399** |

The repo refactor has its own draft: [repo-refactor.md](repo-refactor.md).

## Cross-cutting decisions

Each settles items on several pages at once. Rule these first.

1. ~~**Residue piece counts by Axiom.**~~ *Answered: Dissolution 2, Transformation 3, Boundary 5, Convergence 7.*
2. ~~**Aperture or Atrium.**~~ *Answered: Atrium.*
3. ~~**Does opening a heart need a Monolith?**~~ *Ruled: no; linking does (STAGING round 2).*
4. ~~**A name for Vecna's fifteen-heart circle.**~~ *Ruled: the Circle of Fifteenths, Vecna's private name for it.*
5. ~~**Act structure and the Citadel.**~~ *Ruled: Citadel and Core are late Arc 3 or Arc 4.* Level bands per arc are a new decide on the spine.
6. ~~**N'ghathrod's five centuries.**~~ *Ruled: exile from Glyth about four centuries ago; centuries of searching; the push for hearts only in recent decades.* Which residue piece gave him long life is a new decide.
7. **What the H'Catha meteor is and why Caelestis wants it.** *Narrowed: containment for Caelestis, and the Sovereign Eye can't see through it; open: the Ortholith-fragment layer and why now.*
8. ~~**How the Seekers divide.**~~ *Ruled: the Seekers are the faith; each chapter is named for what it seeks (the Seekers of Secrets are one); every chapter worships Vecna, often under another name, unaware of the others.* Whether N'ghathrod's colony is a chapter is a new decide.
9. ~~**Astra's name and wound.**~~ *Ruled: any of the three names; the Axiom strain's ripple woke and broke it.*
10. ~~**The real elder brain.**~~ *Ruled: the Session 27 brain is his; it teleported out.* Where it went is a new decide.
11. ~~**Which sphere holds Oerth.**~~ *Ruled: SPH-05, the farthest from Caelestis.*
12. **Runes 17–19 as Anchors.** Fixed places Tumak goes to is settled; what they grant is open. Crew (Tumak), rules.
13. ~~**Can a taken person be released?**~~ *Ruled: the taken outlive N'ghathrod, each keeping part of him.*
14. **Fonains–Caelestis offset.** The timeline puts Fonains Session 28 about five months before Caelestis now; older notes say Caelestis is "around" Session 28. Timeline, Fonains doc, campaign.
15. ~~**OSTEKK-6 as sole survivor.**~~ *Ruled: the only active survivor; OSTEKK-2 is inert and can be healed.*
16. **The tracker and session ingest.** Keep the repo JSON record and in-chat runbook, or move to an alternative. See the Automation and tracker section.
17. **Dossier tab names and "Open" subsections.** *Tab names answered: the four tabs stand. Open: whether "Open" subsections may stay in DM notes.*
18. ~~**How Clint left the Bellwether Crow.**~~ *Ruled: a deliberate dive through a color pool to draw the boarders off.* What the ambush was after is a new decide.
19. ~~**Keep or cut Tarroway.**~~ *Ruled: keep him as a thread, mainly in the archive; cut the timing tables.*

## Answered from the sources (review)

The resolve pass settled these decide items from later sweeps, saved decisions or the repo's history. Each is tagged *(answered)* in its section with the source that answered it. Confirm them as a batch, or overturn any.

- Residue counts by Axiom *(fix)*
- What astral projection reaches *(fix)*
- What "Lunarfoot" names *(fix)*
- Fonains's world designation *(fix)*
- When Thessalar made his eight copies *(fix)*
- The colony's word for its brainless-raised *(fix)*
- "kesh" is retired *(fix)*
- "Arc", never "Act" *(fix)*
- Arc 2's range *(add)*
- Ondessa holds her seat; her citadel is occupied *(fix)*
- Heart entrance term is Atrium *(fix)*
- N'ghathrod's one secondhand instruction *(fix)*
- How Vecna connects his working to the Core *(add)*
- Tyrant ship weapons: four eyes at stations *(add)*
- Sol's vignette ran in V006; the mimic is retired *(fix)*
- What the behir was wrapped around *(add)*
- The Krik'Lit swap is the V006 swap *(fix)*
- The elemental woman is Chloe Chespetes *(fix)*
- The Blooming Glass *(add)*
- The Hall transport is the crew's last stint with Ezra *(fix)*
- Ryeback lives *(add)*
- "Artifacts of Convergence" is retired *(fix)*
- A heart's hidden entrance is the Atrium *(fix)*
- What the letters stand for *(add)*
- The ship reads as native traffic at H'Catha *(fix)*
- Residue housings are dampened in anti-magic, not switched off *(fix)*
- Network modifiers apply only when Tumak stands at a mark *(fix)*
- The hub's Drive Root is right; memory's folder id is the rune images folder *(fix)*
- The Ascension card keeps "the second key" *(fix)*
- Dossier tab grammar: PAGE-SHAPE's four tabs stand *(fix)*
- "Autognome" in V003 and V004 stays as history *(fix)*
- Dossier tab names: keep the four tabs *(fix)*
- The out-of-sequence SJN-2417 entry *(drop)*

Four of these rest on Korey merging a pull request or making a pick rather than a direct ruling: the dossier tabs, "autognome" as history, the A.T.L.A.S. expansion, and the Drive root.

## Second looks

All five were ruled on 2026-10-25 (round 2): Tarroway is a keep-or-cut decide; constellation numbers follow the bearing scheme; Vth'oramu is "the passage to a new home"; Clint was seen going overboard (how is a decide); opening needs no Monolith, linking does.

## Player record flags

Nothing from prime goes into `data/`. These need a hand edit, if Korey agrees:

- `data/items.json` has Boogie holding the whole derelict logbook; the settled version is half.
- `data/npcs.json` calls Mirt "the head of Caelestis".
- `data/sessions.json`, `quests.json` and `items.json` call OSTEKK-6 an autognome; OSTEKK units are automatons.

## Still coming in

Every chat sweep is complete. Campaign Planning, the last partial sweep, was
read to its end (turn 416) and merged on 2026-10-25.

# Cosmology

Items for `cosmology/index.html`, `glossary/index.html` and `chart/index.html`.
Order under each page: decide, fix, drop, add.

### cosmology/index.html

- **[fix]** Residue counts by Axiom *(answered)*
  The split is Dissolution 2, Transformation 3, Boundary 5, Convergence 7. The pages use Boundary 2, Dissolution 3, Transformation 5. Correct each:
  - This page's residue table, and the line "A Boundary piece points toward its one sibling. A Convergence piece feels six." Change to: "A Boundary piece points toward its four siblings. A Convergence piece feels six."
  - Glossary "Residue" ("split 2 / 3 / 5 / 7 by Axiom bias"): name the order, "Dissolution 2, Transformation 3, Boundary 5, Convergence 7".
  - `artifacts/atlas.html` and the artifacts register: wherever A.T.L.A.S. points at "its one sibling" or "the only other Boundary piece in existence", it points toward four siblings.
  - `artifacts/runekeepers-fragment.html` ("all three pieces"): "both pieces".
  - The twins' Zenith text on `realms/wayfinders-homeworld.html`: the fragment's two pieces forming in both twins makes three poles for the first time.
  In-world line for the table intro: "The Dissolution fragment lies in two pieces, the Transformation fragment in three, the Boundary fragment in five, and the Convergence fragment, the Rod of Seven Parts, in seven."
  src: memory-canon (campaign-canon, prime-number counts; the Zenith "three poles"); chat-cosmic-campaign-structure § Cosmology redesign
  answered: memory-canon (campaign-canon, prime-number counts, locked); inbox/chat-organizing-framework.md § Residue (Settled). The Boundary-2 order in chat-cosmic-campaign-structure appears only in Claude's rewritten page text; a check of that chat found no Korey statement making the change, so memory stands.

- **[fix]** What astral projection reaches *(answered)*
  The Astral Plane overlays the Astral Sea, so astral projection is hull-less seafaring. Page § Other Planes says "Astral projection sends the traveler into the Astral Sea itself." Replace with: "Astral projection sends the traveler onto the Astral Plane, which lies over the Astral Sea. A projected traveler can cross the Sea without a hull." The Sea itself stays material space between worlds.
  src: memory-canon (campaign-canon, Planes); framework § Cosmic structure
  answered: memory-canon (campaign-canon, planar travel: "astral projection as hull-less seafaring"); inbox/chat-organizing-framework.md § Other planes (Settled: "astral projection doubles as hull-less travel"). That chat's line "The Astral Sea is the Astral Plane" loses to memory's ruling that the cosmos is the Material Plane.

- **[decide]** Name for the center
  Korey dislikes "the center". Offered: the Cradle, the Wound, the Origin, the Nadir. Touches this page, the glossary, chart and every page that says "the center".
  src: framework § Open; memory-canon (open-decisions, names for the center and SPH-01)

- **[decide]** Names for the spheres and designated systems
  SPH-01 included. Listed in the page's § Open.
  src: framework § Open

- **[decide]** Keep or rename "residue"
  Memory: "the name 'Reach residue' may change".
  src: framework § Open; memory-canon (campaign-canon)

- **[decide]** How the Flow works
  Settled: the Flow, also called the phlogiston, fills the space between spheres. It is combustible and silences gods, because a god's realm is anchored to its own sphere and a vessel in the Flow has left it. Crossing it is uncommon, restricted to senior crews, and belongs to late-game play; cadet operations stay inside SPH-01.
  Still open: how a vessel crosses it (method, hazards, duration), and how it relates to the Astral Sea's intensity, which changes between systems and between spheres. Listed in the page's § Open.
  src: framework § Open; memory-canon (campaign-canon, Astral Sea intensity)
  settled part: inbox/chat-organizing-framework.md § Cosmic structure (Settled)

- **[decide]** Why SPH-01 holds pieces of three fragments
  Settled for one of the three: pieces of a fragment yearn toward each other, and the Rod's pieces have been drawing together for millennia, so several now sit near Realmspace.
  Still open: why Boundary (A.T.L.A.S.) and Dissolution (the Runekeepers' fragment) pieces are also in SPH-01, since pieces of different fragments do not attract. Options: people carried them here over time; an abnormal concentration with a cause still to name; chance, left unexplained in-world.
  src: framework § Open
  settled part: inbox/chat-cosmic-campaign-structure.md § N'ghathrod origin ("Rod pieces yearn toward each other; after millennia they are now drawing close, so several sit near Realmspace")

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

- **[add]** Monoliths stand above the gods
  Add to § The Gods, beside "What the gods generally know":
  "The archive of the cosmos sits above every god, Vecna included. Gods know little to nothing about Monoliths. A Monolith records what is, never what anyone believes: it holds no faith and answers no prayer. Aethris's Prism Ascendant shows the gap. Its people take it for Tymora's answer, and it is not."
  src: BCS § Sol/Aethris and the gods (turns 864, 872)

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

- **[fix]** Trim Tarroway to a thread
  Keep M. Tarroway as Strake Station's cartographer whose readings first hinted at an unknown vessel disturbing the satellites at the system's edge (STAGING round 4). Cut the "timing tables" and their failure everywhere. Reduce his presence on the ten pages that mention him to passing references; his main home is the Fleet Intelligence Archive (restricted/). Nothing public.
  Touches: dossiers/tarroway.html, dossiers/index.html, dossiers/miken.html, dossiers/vthoramu.html, dossiers/joffrey.html, dossiers/verrow.html, factions/vocath-operation.html, realms/index.html, realms/strake-station.html, chart/index.html, restricted/.
  src: Korey, 2026-10-25 (round 4)

- **[decide]** The downward tithe
  "The downward tithe" names the lesser taken Vecna's vessels can pass through Atria. A new ruling adds an upward tithe: a portion of every taken person flows up to N'ghathrod and extends his life (STAGING round 3). Rename the vessel sense so the two are not confused, and drop "tithe" from anything that reads as worship.
  src: Korey, 2026-10-25 (round 3); glossary "The downward tithe"

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
  updated (round 4): superseded. Clint went through a color pool on purpose, drawing the boarders off; write it from STAGING § Clint Dashforest and the Bellwether Crow.

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
  Settled in chat-cosmic-campaign-structure, later than memory's still-open list: the illithid word Vth'ulhan translates as "the unthinned", and "unculled" is the Glyth insult they took as their own name (both already on `factions/vthorama.html`). "Brainless-raised" is memory's working description, not a name.
  Still open: which English name the pages lead with for the people. Options: (a) "the unthinned" as their own word, with "unculled" kept as the insult Glyth threw and they wear; (b) "unculled" everywhere, with Vth'ulhan glossed in the lexicon only. glyth-watcher.md's "pure-born" for illithids raised under an elder brain can stand either way. Touches the W-07 entry here ("The illithid world that refused the unthinned"), `realms/glyth.html`, `dossiers/nghathrod.html`, glyth-watcher.md.
  src: memory-canon (open-decisions, N'ghathrod settled; still-open list); chat-cosmic-campaign-structure § N'ghathrod
  settled part: inbox/chat-cosmic-campaign-structure.md § N'ghathrod origin ("unculled"), § N'ghathrod and the colony ("Vth'ulhan = the unthinned"), § Superseded; glyth-watcher

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
  Settled: Gregory is from Toril (see the add below). "Cogfast Enclave" began as a placeholder name for his origin, and Lantan is Claude's suggestion, never accepted.
  Options: (a) Lantan, home of "Gregory Prime"; (b) keep the Cogfast Enclave as a named place on Toril; (c) name no place below "Toril" until play needs one. Whichever is chosen also fixes `restricted/sa-002.html` ("Cogfast Enclave — SYS-01") and `crew/gregory.html` (origin "Open").
  src: chat-voyage-6-7-planning § Open
  settled part: inbox/chat-early-planning.md § Superseded ("Cogfast Enclave" as Gregory's origin → Toril; Cogfast a placeholder)

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
  Standing of the sources: (a) is in memory, the higher source. (b) comes from Claude's turn-57 rewrite, which Korey accepted only as "a very good foundation" without confirming each line, so it does not overrule memory on its own. Korey needs to pick. If (a), the Eye's whole-world sight is the reason no ruler acts openly; if (b), that reason must come from the Eye's enforcement alone.
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
  The cosmic-campaign sweep lists "a Monolith fragment, shed or aimed" under Settled and also lists this question under Open, so it does not settle it. Settled either way: adamantine matters on H'Catha because the Eye cannot see through it (see the meteor fix below).
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

- **[decide]** What the Prism Ascendant does above an unfinished Zenith
  The page's Open asks what it "has been doing above an unfinished Zenith for all this time". Set an answer, or keep it unknown in-world and drop the Open line.
  src: BCS § Sol/Open; realms/aethris.html

- **[add]** The Prism Ascendant is a Monolith
  "The Prism Ascendant is a Monolith, reality's own response to Aethris's Zenith. The Temple holds that it is Tymora's answer to the ritual of perfection; it is not. Neither Tymora nor Beshaba owns or controls it, and their rivalry plays out beneath it. It is the first Monolith Aethris has had, though the Misfortuned have been born there for generations."
  src: BCS § Sol/Aethris and the gods (turns 858, 864); memory-canon (Prism Ascendant is a Monolith)

- **[add]** Other faiths on Aethris
  "Aethris is a whole world, and not everyone on it follows Tymora. Other faiths hold ground there, among them a lesser following of Beshaba."
  src: BCS § Sol/Aethris and the gods (turn 860)

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
  chat-cosmic-campaign-structure § Tetherbreak drops this question from its Open list, and Claude's page edits there read the signature as the Vth'oramu passing Strake a year ago. No Korey statement was found, so it rides with the Tarroway decide in the Cosmology section § chart.
  src: framework § Open

### realms/cairn-station.html

- **[decide]** What is at Cairn Station
  Settled: Cairn went silent about a year ago after reporting readings of the dreadnought. Vocath's people took the station after it went dark and waited there for the relief run, which is how the Bellwether Crow ambush was set.
  Still open: what is at Cairn now (Claude's draft: something left behind that watches, and what it reports to), and where Tarroway is. The payoff should open onto something larger.
  src: framework § Open; memory-canon (campaign-canon, Cairn)
  settled part: inbox/chat-cosmic-campaign-structure.md § Tetherbreak (final canon, turns 238–241)

- **[decide]** The dreadnought on the Cairn bearing
  Settled: Cairn is tied to the dreadnought, and the Vth'oramu is a living astral dreadnought N'ghathrod wore down and took a little over fifty years ago, harboured outside Realmspace.
  Still open: whether the Fleet's Cairn dreadnought is the Vth'oramu (Claude's Tetherbreak edits say so: "The dreadnought whose territory this is was taken a little over fifty years ago"), and if so, why it held that bearing before he took it. Options for the second: drawn there; from the next sphere; always there; disrupting transit between spheres. Not yet in the FIA.
  src: framework § Open; memory-canon (open-decisions, Vth'oramu)
  settled part: inbox/chat-cosmic-campaign-structure.md § The dreadnought, § Tetherbreak

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

- **[fix]** What "Lunarfoot" names *(answered)*
  "Lunarfoot" names the clan only. The Wayfinders' homeworld stays unnamed by doctrine. This page is right. Correct anything that names the world or its system Lunarfoot: the register entry "W-11 Lunarfoot" (becomes "W-11", the Wayfinders' homeworld), "SYS-06 is Lunarfoot's system" (becomes "SYS-06, the Wayfinders' homeworld's system"), and memory's line "Lunarfoot is in a hidden system", which should read "the Wayfinders' homeworld is in a hidden system". Remove any homeworld name that reaches the player side; "Lunarfoot" as the clan is fine there.
  src: memory-canon (campaign-canon, Cosmology); realms/wayfinders-homeworld.html
  answered: inbox/chat-cosmic-campaign-structure.md § Rules and crew ("Lunarfoot is the clan; the Wayfinders' homeworld stays unnamed by doctrine", turn 399), § Superseded; PR #58 "Lunarfoot is the clan, not the world" (merged); inbox/chat-voyage-6-7-planning.md § Interlude and downtime (leaks)

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
  The infobox ("Dragons, and the First World") and the closing line name a thread with no source in memory, drafts or sweeps. "The First World" is the glossary's name for the Reach world, so as written the line makes a cosmology claim about Krynn's dragons that nothing supports.
  Options: (a) remove it and keep the settled dragon facts (they left to face Takhisis and have not reached Krynn; their own politics hold them); (b) move it to the planning layer as an open thread and take "First World" off the realm page.
  src: realms/krynn.html

# Fonains

Items for `realms/fonains.html`, the Fonains Canon Reference (a Claude doc, "Fonains doc"), and the Fonains lane of `timeline/timeline.json`.
Order under each heading: decide, fix, drop, add.

### realms/fonains.html

- **[fix]** Fonains's world designation *(answered)*
  Fonains is W-21, and Aethris is W-08. Caelestis and the FIA share one numbering. The early registry's "W-02 Fonains" and "W-01 Aethris" were renumbered (W-02 to W-021, then W-21; W-008 to W-08), and W-02 is H'Catha. The realm pages and the chart stand. Correct any FIA file or note that still shows W-02 or W-021 for Fonains, or W-01 or W-008 for Aethris; drop "Draft:" from the chart note "Draft: Fonains matches FIA W-21".
  src: chat-early-planning § New campaign idea development; realms/fonains.html; chart/index.html
  answered: inbox/chat-early-planning.md § Superseded (turn 75: "W-02 renumbered W-021"; the gappy registry W-008 Aethris, W-021 Fonains); inbox/chat-organizing-framework.md § Designations (Settled: W-02 H'Catha, W-08 Aethris, W-21 Fonains; one shared scheme with the FIA)

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
  The notes read "Rihiri (12M)" once, and call Rihiri "little sister" and "her" three times in the same entry and "she" throughout the Reveal. Options: sister (the M is a slip); brother. No other source speaks to it.
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
  Settled: the one-shot is "Search for the Blooming Grove", and Vanifer was its quest giver (memory, the higher source).
  Still open, one spelling each, to use everywhere (doc, dossier, timeline): (1) the place: "the Blooming Grove", matching the one-shot's title, or "the Blooming Glass" (dossier and timeline); (2) the ruby: "Pedra Ardente" (dossier) or "Pedra Ardante" (timeline); (3) the broker: "Fenerba" (dossier) or "Fernerva" (timeline). Note that Vanifer as quest giver and the broker handing the ruby on "for the eldest brother" may be one person under a cover name; rule that too if so.
  src: dossiers/clint.html; timeline.json; memory-canon (Fonains canon 2026-10-25)
  settled part: memory-canon (open-decisions, Fonains canon 2026-10-25)

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

- **[decide]** Four shards or 333,333
  Both facts stand: the four shards are table canon (transcripts are canon), and 333,333 is memory canon. Only the wording that holds them together is open.
  Timeline S14–S15: Kwalish's cannon splits the Monolith into four shards, each guarded by a Prince-aligned elemental. Memory: 333,333 shards across the cosmos (the number shows the scale already in motion; it is not a collectible goal). Options: (a) four great shards, one per Prince, plus 333,333 smaller fragments scattered beyond Fonains, Boogie's among them; (b) the 333,333 count includes the four great shards. Word both places to match.
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

- **[fix]** When Thessalar made his eight copies *(answered)*
  N'ghathrod was Thessalar's first subject, and no copy of Thessalar existed yet. Thessalar experimented on him first, then made eight simulacra of himself, I–VIII. The dossiers are right. "Thessalar's experiments" (t -530 to -500) lists the clone tubes inside a span that starts before N'ghathrod's capture (t -506). Split it: keep the Rod's seventh piece and the Thessalkraken in "Thessalar's experiments", and add the clone tubes as their own event after -506, inside the capture span (for example "Thessalar copies himself": "With N'ghathrod as his first subject, Thessalar turns the Rod's seventh piece on himself and makes eight simulacra, Thessalar I–VIII.").
  src: dossiers/thessalar.html; dossiers/nghathrod.html; timeline.json
  answered: inbox/chat-cosmic-campaign-structure.md § Thessalar and Fonains ("He experimented on N'ghathrod first, then made eight simulacra of himself"), § N'ghathrod and the colony ("N'ghathrod was Thessalar's first subject; no copy of Thessalar existed yet"); memory-canon (open-decisions, Rod's seventh piece: "N'ghathrod was a subject in that research")

- **[decide]** When the Glyth Watcher got out
  "The Glyth Watcher gets out" sits at t -3 (cert working). glyth-watcher.md leaves how she got out open. Options: keep about three years ago; or leave the event undated.
  src: glyth-watcher § Open; timeline.json

- **[decide]** What Vocath's crew was after on the Bellwether Crow
  Ruled: Clint left the ship through a color pool to draw the boarders off, letting them believe he carried what they came for (STAGING round 4). What were they ambushing the Crow for? It must be something Caelestis had aboard, worth an ambush with N'ghathrod's help, and it ties to the deal (captives for Vocath, an asset inside Caelestis for N'ghathrod). Also: does Caelestis know Vocath's crew was behind it?
  Touches: dossiers/clint.html, factions/vocath-operation.html, campaign/colony/, timeline.
  src: Korey, 2026-10-25 (round 4)

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

- **[fix]** The colony's word for its brainless-raised *(answered)*
  The brainless-raised are the Vth'ulhan, "the unthinned". They took Glyth's insult for themselves. factions/index.html already says "unthinned" and needs no change. factions/vthorama.html also says "unculled" in three places ("The unculled are an obscenity", "most of the colony is unculled", "The contradiction about the unculled"); change each to "unthinned". Timeline lines that say "brainless-raised" describe them and can stay.
  src: memory-canon open-decisions (operative-resolved open list); chat-cosmic-campaign-structure § N'ghathrod origin, § N'ghathrod and the colony
  answered: inbox/chat-cosmic-campaign-structure.md § N'ghathrod and the colony (Settled: "Vth'ulhan = the unthinned") and § Superseded ("Vth'ulhan kept as 'the unthinned'"). Korey used it himself in the taxonomy turn ("the Vithulan who are of the ship and unthinned"), which comes after the memory open-list line.

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
  Why it is still open: Claude declared the three Seam-products "locked" in the cosmic-structure chat and wrote them into the repo; Korey answered "What's next" without confirming. Memory canon, updated later, still holds both Gregory's origin wording and Astra's wound as open. The two readings can also stack (a Seam woke him; that makes him paracausal), so a third option is: keep the Seam as the cause and call him paracausal, dropping "Reach item".
  src: memory-canon campaign-canon § Gregory, § Antagonists (Lantern line); chat-cosmic-campaign-structure § Cosmology redesign

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
  Note: the Crossing Companion doc proposes "Hall of Sight and Sound = Hall of the Watchers" (one hall), but Korey never reviewed that list (chat-astral-sea-worldbuilding § Open, unreviewed proposals).
  Touches: factions/order.html, dossiers/ezra.html, campaign/spine.html (H'Catha report chain), working/glyth-watcher.md.
  src: memory-canon campaign-canon § Key NPCs (Ezra); chat-cosmic-campaign-structure § Open; chat-astral-sea-worldbuilding § Open

- **[decide]** What the Watchers are doing now
  The parallel Watchers track for the campaign view.
  src: chat-organizing-framework § Open; memory-canon open-decisions (DM views)

- **[decide]** Names for two Watchers
  H'Catha's Watcher is a woman with no name yet (placeholder Nereth Vaul, a triton; Ondessa's name is taken). Names already offered: Nereth Vaul, Maris Ilune, Sefa Corrath. The Glyth Watcher has no name, and how she got out is unset.
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

- **[add]** The colony and the Monoliths
  Add to Who they are: "Every heart N'ghathrod opens is worthless until it is linked, and a link needs a Monolith on both worlds. So the colony goes where Monoliths stand, and where they don't, it waits." Whether the colony counts as a Seekers chapter is a decide (see factions/seekers.html).
  src: Korey, 2026-10-25 (round 2)
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

- **[decide]** The name of Vecna's realm
  Published lore calls it Cavitius. Keep Cavitius or name it.
  src: working/vecna.md § Realm; memory-canon open-decisions (Vecna/Tharizdun 2026-10-25)

- **[decide]** Shothragot
  His shape and where he is now.
  src: working/tharizdun.md § Open

- **[decide]** What the Accordance knows of Vecna
  Their view of him, and whether any of them saw his hand in the Fonains ritual. Options: they know and stay silent; they suspect; they do not know.
  src: working/vecna.md § What the gods think of him, § Open

- **[decide]** How far to develop Tymora
  Korey wants to develop Tymora and the Beshaba/Tymora interplay.
  Settled (Korey, turns 860–862): the misread tenet and "fortune needs misfortune" (both adds below); the sisters' conflict stays indirect, because gods give direction that never shows the whole of what they want; Aethris is a whole planet where not everyone follows Tymora, with a lesser Beshaba following and other fortune gods, major and minor. Add that last point to the Tymora entry and realms/aethris.html: "Not all of Aethris follows Tymora. Beshaba keeps a smaller following there, and other gods of fortune, major and minor, are worshipped too."
  Still open: whether Tymora notices herself thinning on Aethris as the ritual removes the risk her luck needs, and whether she acts on it. Beshaba's want is its own decide under dossiers/beshaba.html.
  answered (part): inbox/chat-crew-boogie-casey-sol.md § Sol / Aethris and the gods (Settled)
  src: BCS § Sol/Aethris and the gods (turn 860), § Sol/Open

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

- **[add]** Tymora's misread tenet
  Add to the Tymora entry: "Tymora's tenet is 'fortune favors the bold.' Her followers on Aethris misread it. They pushed luck until it stopped being luck, and in perfecting fortune they removed the risk that luck needs." Also add to W-08 on realms/aethris.html.
  src: BCS § Sol/Aethris and the gods (turn 862)

- **[add]** Fortune needs misfortune
  Add to the Tymora and Beshaba entries: "Fortune cannot exist without misfortune. Tymora and Beshaba need each other." Also add to The twin reading on dossiers/beshaba.html.
  src: BCS § Sol/Aethris and the gods (turn 862)

---

### factions/vthorama.html

- **[decide]** The colony's coat of arms
  The broken-ring arms are dropped. The Passage stays the field mark. Arms are unset.
  src: chat-cosmic-campaign-structure § Open, § Superseded

- **[fix]** "kesh" is retired *(answered)*
  The page says "Many of the kesh were offered it and accepted — the outcast, the discarded, the ones with nothing… The colony's word for them is a kinship term." "Kesh n'ghathu" ("the many of him") was a Claude lexicon draft for the taken outside the five. Korey retired it: the rest of the taken need no term of their own and are simply Vth'ghathu. Change "Many of the kesh were offered it" to "Many of the taken were offered it", and remove "The colony's word for them is a kinship term."
  src: (inference) factions/vthorama.html
  answered: Korey in the cosmic-structure chat, taxonomy turn ("Kesh Vithkathu doesn't mean anything because that would just be Vithkathu"); Claude's revised lexicon in reply: "No term is needed for the rest; they are simply Vth'ghathu." (chat f2f5d29e, § N'ghathrod and the colony)

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
  check (resolve pass): the cosmic-structure sweep records "Vth'oramu means 'the whole of the going-home' (turn 413)" as Settled, and turn 413 is later than the memory line. Confirm with Korey which gloss stands before applying.

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
  check (resolve pass): two sweeps record the reverse. chat-organizing-framework § Superseded: "Clint Dashforest 'went overboard' → he seized the boarders' craft and broke away with it; a psychic wind carried him to SYS-04." chat-cosmic-campaign-structure § Tetherbreak (final canon, turns 238–241): "Clint seized the boarders' craft and broke away; a psychic wind carried him out of system." The page's "How he crossed is undecided" is stale either way (the psychic wind is agreed). Confirm overboard vs seized craft with Korey.
  updated (round 4): superseded. Clint went through a color pool on purpose, drawing the boarders off; write it from STAGING § Clint Dashforest and the Bellwether Crow.

- **[fix]** What Tarroway's tables track
  Page says "He has no idea the patrol his tables track was a ship under command rather than an animal keeping a rhythm, or that it stopped keeping the patrol because it left." Canon: the psychic wind is the explanation for Tarroway's failing timing tables. Rewrite: his tables fail because the psychic wind does not keep a rhythm.
  Touches: dossiers/tarroway.html, dossiers/vthoramu.html.
  src: memory-canon campaign-canon § Naming (Astral Sea travel); chat-cosmic-campaign-structure § Superseded
  check (resolve pass): the cited Superseded line runs the other way: "Tarroway's cause as the psychic wind → the dreadnought" (turns 238–241), and § Tetherbreak (final canon) says "The 'patrol' Tarroway's tables track is the Vth'oramu itself." The page matches that sweep. Confirm with Korey which is newer before applying.
  updated (round 4): superseded. The timing tables are cut; Tarroway stays as a thread (see "Trim Tarroway to a thread").

- **[fix]** The account lives on Colony Operations
  Page says "Full account in the Remaking" and links "The Remaking" in Connections. Link `campaign/colony/`.
  src: chat-cosmic-campaign-structure § Superseded

- **[add]** Joffrey's row
  Add: "Joffrey was taken slowly. He was himself for months, decorated and top of his class, and only recently finished converting. One clean, confused survivor of the Bellwether Crow noticed he had changed and never reported it." DM: the crew finds that survivor by pulling the Crow's roster.
  src: memory-canon open-decisions (operative resolved)

---

### factions/restorers.html

- **[decide]** Rivals for the set?
  Settled since: the Restorers (v2) have no part in Vecna's plan, and their true restoration needs a Monolith, a heart and all four fragments. So they want the same residue Vecna's side wants, for their own reasons.
  Still open: (1) whether they actively compete for pieces in play (rivals the crew meets at a piece) or stay a background pressure; (2) whether they know that reversing the Core's archived loss would undo the cosmos.
  src: chat-organizing-framework § Open
  answered (part): inbox/chat-cosmic-campaign-structure.md § Cosmology redesign (Settled: "The Restorers have no part in Vecna's plan"; "True restoration needs a Monolith, a heart and all four fragments")

- **[fix]** The All-Mother
  Page says "which their doctrine names the Mother of the Universe" and the Doctrine stat "The Core is the Mother of the Universe". Change both to the All-Mother.
  src: chat-cosmic-campaign-structure § Superseded

- **[drop]** "The oldest chapter"
  The section marked Canon ("The Restorers are a Seeker chapter. They are the first one…") and the reveal sequence ending "Then read the providence entries in order. Then find the first entry." carry the superseded v1 framing (oldest Seeker chapter, fed by Vecna as providence). Restorers v2 has no tie to Vecna. Remove the section and rewrite the reveal bullet without the providence entries.
  src: chat-cosmic-campaign-structure § Superseded (Restorers v1 → v2); campaign/ascension

---

### factions/aethris.html

- **[decide]** Sol as a person or a component
  Whether the Fortuned want Sol back as a person or as a component of the unfinished ritual. The answer decides whether his thematic question is answered by his enemies or by himself. Open on this page, crew/sol.html and realms/aethris.html; all three follow the ruling.
  src: BCS § Sol/Open; crew/sol.html

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

- **[fix]** "Arc", never "Act" *(answered)*
  The wiki says "Arc". The timeline events say "Act 2: ranked missions", "Act 3: N'ghathrod", "Act 4: the center" and "Act 3: Vth'oramu"; change each to "Arc". Sweep colony and ascension for any "Act 1–4" left. Memory canon's "Act" wording is Korey's spoken shorthand and does not need to match.
  src: chat-cosmic-campaign-structure § Superseded; timeline; memory-canon open-decisions
  answered: inbox/chat-early-planning.md § Wiki structure (Settled: "Acts became Arcs"); inbox/chat-cosmic-campaign-structure.md § V006 and the arc (Settled: "The wiki says 'Arc', never 'Act'"; Korey: "the spine governs")

- **[add]** Arc 2's range *(answered)*
  Both options were settled, and they fit together. Add to Arc 2 Shape (DM voice): "Arc 2 stays in Realmspace plus at most one other system. Crews start leashed to a system and range grows with rank: contracts are graded by scale, from Grade V (station, lane, ship) through IV (settlement), III (region, moon, nation) and II (world) to I (system, sphere)."
  Which second system, and why the Fleet works there, is still undecided; keep it off the page until chosen.
  src: chat-early-planning § Campaign Planning, § Institutions; memory-canon open-decisions (Act 2 plan line)
  answered: inbox/chat-early-planning.md § Cosmology and setting (Settled: "Arc II stays in Toril's Wildspace (Realmspace) plus at most one other system") and § Institutions (Settled: "Early crews are leashed to a system, and range grows with rank"); inbox/chat-cosmic-campaign-structure.md § Contract board (grade ladder); memory-canon Act 2 plan line ("town → region → world and beyond")

- **[decide]** The Act 2 handler
  The spine says "The handler is unnamed." Korey wants a Variks-style non-human. Candidates:
  (a) the Glyth Watcher (working/glyth-watcher.md § Where she fits);
  (b) a dohwar broker (Pip);
  (c) a defected scro (Vahl);
  (d) a xixchil contract-surgeon.
  Touches: campaign/spine.html (Arc 2 Open development), factions/order.html if the Glyth Watcher is chosen.
  src: working/glyth-watcher.md; chat-early-planning § Campaign Planning § Open; memory-canon open-decisions (Act 2 handler in the open list)

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
  Settled since, which is option (d): for Caelestis, containment. Adamantine survives disintegration, so the Fleet wants it for a vault, cradle or plating, and a cadet salvage crew is the cover; Tarto says only that it is rare, theirs by claim, and wanted first. For H'Catha, sight: the Sovereign Eye cannot see through adamantine, which replaced the dropped Spindle foothold war. The ore matters to both Caelestis and the Order.
  Still open: (1) whether the spine's deeper layers stay under that — an Ortholith fragment, shed or aimed, and the strike as bait (the glossary already calls the meteor a Monolith fragment, but the cosmic-structure sweep lists it as open); (2) whether the Academy wanted this meteor or any adamantine, and what made it urgent now.
  answered (part): inbox/chat-organizing-framework.md § Tyrant ship and Voyage 004 prep (Settled: containment, cadet cover); inbox/chat-astral-sea-worldbuilding.md § Superseded ("Adamantine now matters because the Eye cannot see through it"), § H'Catha: the meteorite and mission ("valuable to both Caelestis and the Order")
  Touches: campaign/spine.html (H'Catha arc), campaign/plot-hooks.html (meteorite hook), realms H'Catha page.
  src: memory-canon campaign-canon § Antagonists (H'Catha direction, H'Catha decisions); chat-organizing-framework § Settled, § Open; chat-astral-sea-worldbuilding § Superseded; chat-cosmic-campaign-structure § Open

- **[fix]** Ondessa holds her seat; her citadel is occupied *(answered)*
  The spine's approach table calls the northeast "Fallen domain — No ruler, no port, an unwatched coast". That domain is Ondessa's, and she still rules it. Rewrite the row and carry the same facts to the other touched pages (in-world voice):
  "Ondessa still holds her seat. At the last eclipse she was struck down through betrayal inside her own court. Her central eye was destroyed: she cannot see out of it or use it to cancel magic. Her citadel is occupied, and she hides in the light of her own Lashline. The other rulers want her dead; most of the populace does not know she lives. She is better than her neighbours without being good, and she keeps a beholder's paranoias. She and H'Catha's Watcher protect each other and trade information, and her domain's port feeds intelligence through the Watcher to the Order and to Caelestis."
  DM-only: the crew may protect her through the eclipse or help her retake her citadel; held in reserve, she may be immune to the eclipse sleep and does not know it. Who betrayed her and who backs the occupiers is still open (lean: a neighbour). The H'Catha Ground Level drafts (the Unwaking holding her citadel through a mercane steward) are unreviewed and are not canon.
  Touches: campaign/spine.html (Beat 2 approach table, Beat 4 avenues), dossiers/ezra.html, dossiers/qitru.html, factions/order.html (Watcher row), realms H'Catha page.
  src: memory-canon campaign-canon § Antagonists (H'Catha leaning, eclipse, sovereign lines); chat-astral-sea-worldbuilding § Superseded
  answered: inbox/chat-astral-sea-worldbuilding.md § H'Catha: Ondessa and the Watcher (Settled: "Ondessa still holds her seat", "Her citadel is occupied", the eye, the trade, reinstatement as an optional goal) and § Superseded ("Ondessa hides in the light, in her own Lashline"; "The fallen northeast domain is Ondessa's"). This chat (2026-10-21) settles memory's "leaning" and replaces its earlier "deposed ruler" line.

- **[decide]** The Rival's name
  The second claimant to the meteor is "the Rival" on the page. The sweep proposes Oszrax. Confirm Oszrax or name him.
  Note: "Oszrax" appears in the astral-sea sweep's Superseded line ("the seam between Kurrzot and Oszrax") and in the proposed Edict table ("no covered faces"), but that sweep also says every ruler name except Kurrzot, Ondessa and Ostekk is a proposal. Confirming Oszrax would also settle his Edict as a candidate.
  Touches: campaign/spine.html (timeline, approach table, forces table), dossiers/index.html.
  src: chat-astral-sea-worldbuilding § Superseded

- **[decide]** Who signs the order that keeps the crew together
  At graduation the crew becomes Driftwardens and stays one unit. Who signs that order sets Arc 2's tone. Options:
  (a) Mirt: patronage, warm and compromising.
  (b) A Watcher or the Order: fated, cosmic.
  (c) Saerthe: personal, a mentor's call.
  (d) The Fleet, as routine paperwork with the real reason hidden, so "who signed this order?" becomes a thread the crew can investigate.
  Touches: campaign/spine.html (Arc 1 close, Arc 2 shape), dossiers/mirt.html or dossiers/saerthe-abizjn.html if either signs.
  src: chat-early-planning § Campaign Planning, Open (turn 300)

- **[decide]** Mirt's standing after the graduation attack
  The attack aims at Mirt's public disgrace: a restricted vault breached on his watch, during his own crew's graduation. Options:
  (a) The crew saves his standing; they are why it is not a massacre.
  (b) His standing suffers: an inquiry that clouds Arc 2.
  (c) Ambiguous: limited damage, Mirt shaken, his future uncertain.
  The Fork state (A.T.L.A.S. gone or returned) may feed the answer.
  Touches: campaign/spine.html (Arc 1 close), campaign/colony/index.html (the Fork), dossiers/mirt.html, factions/vocath-operation.html (whether Vocath's grudge is served).
  src: chat-early-planning § Campaign Planning, Open (turn 300)

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

- **[fix]** Heart entrance term is Atrium *(answered)*
  A heart's one hidden entrance is the Atrium (plural Atria). Every page already says Atrium/Atria, so nothing changes there; the pointer items under colony, what-if and vthorama are satisfied as written. New text uses Atrium too, including the hidden-entrance line on factions/runekeepers.html. Memory canon's "Aperture" is the older working name.
  Touches: campaign/ascension/index.html, campaign/colony/index.html, campaign/what-if.html, factions/vthorama.html, factions/runekeepers.html, dossiers/ulhrek.html, dossiers/khaleth.html.
  src: memory-canon open-decisions (world-heart framework; "Locked this pass"); chat-cosmic-campaign-structure § Superseded
  answered: inbox/chat-cosmic-campaign-structure.md § Superseded ("'Aperture' as the heart's entrance → 'Atrium' (turn 278)"). The memory lines that say "Aperture" come from earlier in the same chat (the Seekers pass, turns 108–151), and Korey used the new word himself afterward ("using a reach residue as the key into an atrium makes sense").

- **[fix]** N'ghathrod's one secondhand instruction *(answered)*
  Keep this page's line: the single operational instruction Vecna has ever given reached N'ghathrod secondhand, "a world with a Monolith is a marked world." It fits memory canon's rule (no handshake deals, no direct orders), because it arrived as the voice he takes for his elder brain. Colony Operations says "he has never been given an order"; change it to "he has never been given an order he knew came from anyone but his elder brain."
  Touches: campaign/ascension/index.html, campaign/colony/index.html.
  src: chat-cosmic-campaign-structure § Open; memory-canon open-decisions (working direction line)
  answered: inbox/chat-cosmic-campaign-structure.md § Cosmology redesign (Settled: "Vecna's only instruction reached N'ghathrod secondhand: 'a world with a Monolith is a marked world'") and § Superseded ("'Marked' survives only as Vecna's word to N'ghathrod", turn 248)

- **[add]** How Vecna connects his working to the Core *(answered)*
  The organizing-framework chat named this the largest gap; the later cosmology redesign in the cosmic-structure chat filled it. Confirm The Cast and The Figure state it, and add whatever is missing (DM voice):
  - The First Heart lies closed beneath the Core, at the center. It is the one point from which the Axiom layer can be reached, and Vecna's target is the Convergence seat.
  - Fifteen hearts, three per sphere across five spheres, are opened and linked. Every heart yearns toward the First Heart; the massed Yearning of the fifteen forces it open, and the opening is his arrival.
  - He cannot make the crossing himself, because polarity pushes every god back from a heart. He arrives through vessels: the enna plus a downward tithe of taken, fifteen at minimum.
  - Each Monolith licenses its world's heart to hold a link; the near-complete Rod is a beacon, so he has never assembled a fragment, and the whole Rod is his fallback.
  src: chat-organizing-framework § Open; memory-canon open-decisions ("Locked this pass"; Vecna/gods 2026-10-25)
  answered: inbox/chat-cosmic-campaign-structure.md § Cosmology redesign (turns 244–305, Settled: First Heart, Yearning, fifteen hearts, forced open by massed Yearning, vessels and downward tithe, Convergence seat, Rod as fallback); session-rulings (polarity)

- **[decide]** Vecna's grievance, the Cast's floor, the diminished arrival, the pantheons
  Still open: Vecna's grievance (the page already carries it as open), the floor for the Cast, what a diminished arrival looks like, and how the pantheons respond.
  src: chat-cosmic-campaign-structure § Open

- **[decide]** Which congregation the crew meets first, and how sincere
  Settled: the first chapter the crew meets should be a good one, and their first Seeker contact is planted in Arc 1 through Hessa Dun, whose living uncle has strange stories. That rules out the fringe returning-god cult as the first meeting.
  Still open: which good congregation comes first — (a) the benevolent church that names Vecna openly (plays on players knowing the name while the characters do not), or (b) a Keeper congregation. And whether the benevolent church is sincere throughout or one of its high clergy knows more.
  answered (part): inbox/chat-cosmic-campaign-structure.md § The Seekers (Settled: "The first chapter met should be good"), § Act 1 retrofit (Hessa Dun); memory-canon open-decisions (Vecna direction 2026-10-24: one faction sees him as benevolent and uses the name)
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

- **[decide]** Which mark is on the Sky Dock crates
  This page lists "the Passage marks on the Sky Dock crates" as colony work. The Vocath's Operation page puts the eye-in-a-wheel on "the Sky Dock crate", and so does dossiers/vocath.html ("it turns up on the recovered rod, on the Sky Dock crate, and in the Bellwether Crow's last transmission"). The Passage is N'ghathrod's mark; the eye-in-a-wheel is Vocath's, and players already know it as his. Options: the Passage, the eye-in-a-wheel, or both on different crates (Vocath's goods carry his mark; a crate the colony handled carries the Passage).
  Touches: campaign/colony/index.html, factions/vocath-operation.html, dossiers/vocath.html.
  src: factions/vocath-operation.html; memory-canon open-decisions ("Locked this pass")

- **[decide]** N'ghathrod's orders
  Follows the ruling under campaign/ascension/index.html. This page says "he has never been given an order".

- **[decide]** What the surface attack at graduation is made of
  The page has "security diverted by the surface operation" while Joffrey runs the Brig, and names nothing in that operation. The early plan collapsed the module's two finale events into one: the attack hits during the ceremony, a battle across the school. It ported these module pieces: Mustaf Shultz and his giff mercenaries, a decapitation threat, Miken at 2 HP, Wizpop's return (now OSTEKK-6), and the transmutation sigil as Vocath's eye-in-a-wheel. Qitru and her githyanki have since moved to H'Catha. Vocath is a merchant, no fighter, and stays out of the siege himself (settled: chat-cosmic-campaign-structure § Act 1 retrofit), so whoever leads the surface operation is hired or his crew. Pick which pieces stay, and write the surface operation into the Brig run section.
  Touches: campaign/colony/index.html (the Brig run), campaign/spine.html (Arc 1 close), factions/vocath-operation.html, dossiers/miken.html.
  src: chat-early-planning § Campaign Planning, Arc 1 close and planning method (turn 300); dossiers/qitru.html

- **[fix]** World-status table: opening and linking
  The table makes an entrance-found world without a Monolith "enterable and unlinkable". That matches the ruling (any heart can be opened; linking needs a Monolith on both worlds). Keep it, and align the wording with STAGING § Hearts, Atria and Monoliths.
  src: Korey, 2026-10-25 (round 2)
- **[fix]** Clint went overboard
  Page says "Clint seized the boarders' craft and broke away with it to pull the pursuit off the Crow". Canon: Clint Dashforest went overboard in the Bellwether Crow ambush, and the psychic wind carried him to Fonains. Rewrite the line.
  src: memory-canon open-decisions (operative resolved); campaign-canon § Naming (Astral Sea travel); timeline "The Bellwether Crow ambushed"
  check (resolve pass): chat-organizing-framework § Superseded and chat-cosmic-campaign-structure § Tetherbreak (final canon) both record "went overboard → seized the boarders' craft". Confirm with Korey (same check as on factions/vocath-operation.html).
  updated (round 4): superseded. Clint went through a color pool on purpose, drawing the boarders off; write it from STAGING § Clint Dashforest and the Bellwether Crow.

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

- **[fix]** Constellation designations
  Constellation designations are catalogue numbers that read as long established, tied to their system and near random, never low or sequential. The bearing scheme (CON-312) fits and stays; drop memory's ordinal CON-01, CON-02 rule. State the rule on this page.
  src: Korey, 2026-10-25 (round 2)
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

- **[add]** Tyrant ship weapons: four eyes at stations *(answered)*
  Four stations, not three cannons. Add to vessels/tyrant-ship.html (in-world): "Vaelorix worked the great eyes with his own gaze. Pffred and Krik'Lit rigged a crew station for each eye around the helm on the Command Deck. Four of the ten answer; the rest need repairs." The voyages page already reads four and needs no change. Gunners in the Meditation Deck pods are retired. Which four eyes work, and what each does, is a separate open item (draft candidates: Fear, Telekinesis, Slowing).
  Touches: campaign/voyages/index.html, vessels/tyrant-ship.html.
  src: memory-canon campaign-canon § Naming (tyrant ship reconciliation); chat-voyage-6-7-planning § Superseded
  answered: inbox/chat-voyage-6-7-planning.md § Voyage 7 / The Lantern and the ship (Settled: "Four of the ten respond… Korey recalled nine eyes; ten stands") and § Superseded ("Three eyestalks wired as cannons with gunners in Meditation pods → four of ten eyes answer at stations around the helm"), chat updated 2026-10-25

- **[fix]** Sol's vignette ran in V006; the mimic is retired *(answered)*
  Nothing moves to V007. Sol's vignette ran in V006 as narration: three clockwork horrors attacked the Cargo Deck, Ryeback fired his hand cannon, Krik'Lit said "its mother is calling for them", and Miken went down the rope. The horrors replaced the mimic as the ambush, so the mimic is retired. Wherever the voyages page or V007 plan still lists Sol's vignette or the mimic as owed, remove it.
  src: chat-cosmic-campaign-structure § Open; memory-canon campaign-canon (Voyage 006 outcome)
  answered: inbox/chat-voyage-6-7-planning.md § Voyage six / What happened in Voyage 6 (Settled: the vignette as run) and § Superseded ("Mimic as the vignette ambush → horrors")

- **[decide]** Casey's V007 beat
  Options: a Vaelorix chart in Research showing the sky from inside Mirt's wardrobe beside a collecting site past the waystation; or something else. It must give Casey's cooling thread a small nudge back.
  src: chat-voyage-6-7-planning § Open; memory-canon open-decisions (Voyage 007 intent)

- **[decide]** Sol's misfortune piece
  Korey to set. The Sol chat asks for small daily misfortunes kept in play (chores landing on him, things falling), which the player wants; the piece can be one of those or ride on the wanted notice in Beats owed.
  src: chat-voyage-6-7-planning § Open; BCS § Sol/H'Catha transit

- **[decide]** The watcher at the notice board
  Someone at the lane marker saw Sol's wanted notice, then saw him walk in. How the watcher engages: mercenary, opportunist, informant or sympathiser.
  Settled since: the issuer. The Voyage 7 chat has the notice posted by the Fortuned of Aethris, reward paid on return to Aethris; "Threadbare Consortium" was a placeholder and is dropped. The Beats owed add below already reads that way.
  answered (part): inbox/chat-voyage-6-7-planning.md § Voyage 7 / V007 player beats (Settled: "a wanted notice… posted by the Fortuned")
  src: BCS § Sol/H'Catha transit, § Sol/Open

- **[decide]** A crew backstory table for the crossing
  A per-day roll table of backstory beats across the whole crew was floated for the two-week crossing; Korey liked it as an option. Build it, or keep beats hand-placed.
  src: BCS § Sol/H'Catha transit, § Sol/Open

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
  - **Sol.** On the day-7 lane-marker board, a wanted notice from Aethris seeks an astral elf marked by misfortune: "RETURN REQUESTED", reward on return to Aethris, no reward for remains. It describes him and names no one. Aethris can post this far out, and the C.R.C. already proves its reach. Whoever engages the board finds it (Tumak asking for a bounty board, for example). If nobody does, Sol or the highest passive Perception notices it, or notices someone watching. Recognising Sol needs no roll. Someone in the room saw the notice, then saw a person matching it walk in (how the watcher engages is a decide above). The C.R.C. itself stays near Caelestis (see dossiers/crc.html).
  - **Gregory.** In Toril orbit his pull points straight down at his home world, then falls behind as the ship leaves, and he chooses whether to speak. (Joins the existing "louder in the bay" note.)
  - **Boogie.** He alone feels out of step with the Lantern's pulse. If the Lantern heals him he regains the hit points, then is a loose puddle until the end of his next turn (Speed 10 ft., drops what he holds, can't cast), with only the stone keeping its shape. The shard escalates without revealing it is a Monolith piece.
  - **Casey.** His thread needs a small nudge back (beat in the decide above).
  - **Ezra.** He arrives with his own hook that others can latch onto, so he is more than another person aboard (the Pffred and Krik'Lit problem). Hook options are a decide under dossiers/ezra.html.
  src: memory-canon open-decisions (Voyage 007 intent); campaign-canon § Naming (Boogie near the Lantern); chat-voyage-6-7-planning § V007 player beats, § Settled; BCS § Sol/H'Catha transit

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

- **[add]** What the behir was wrapped around *(answered)*
  Manifest entry 048 is quietly dropped unless a player asks about it. Add no hook row. Add one DM-only line to the tyrant ship's Hollow Deck notes: "The soft light Casey saw under the behir came from a freestanding object in the open space of the Hollow Deck, apart from the repair bay. It is unexplained. If a player asks, it is manifest entry 048; define it then."
  src: memory-canon open-decisions (behir soft light line)
  answered: inbox/chat-voyage-6-7-planning.md § Voyage 7 / The Lantern and the ship (Settled: "Manifest 048 is quietly dropped unless someone asks"); § Voyage six / The soft light and 048

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

- **[fix]** The A.T.L.A.S. hook still carries the old name in its ids
  The hook row's anchor is `world-surveyor-thread` and its portrait key is `world-surveyor`. "World Surveyor" is retired. Rename the anchor to `atlas-thread` and the key to `atlas`, and update the spine's link (`plot-hooks.html#world-surveyor-thread`, under Arc 1 threads) and the key in `prime/scripts/portraits.js`.
  Touches: campaign/plot-hooks.html, campaign/spine.html, prime/scripts/portraits.js.
  src: memory-canon (A.T.L.A.S. naming); chat-early-planning § Campaign Planning, Artifacts, the Brig and the Reach

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

### campaign/ascension (early planning)

- **[add]** One working, two effects (DM voice)
  Drawing Vecna's figure and stressing Convergence are the same work: every node he plants does both.
  src: inbox/chat-early-planning.md § Campaign Planning (turn 80)

- **[add]** The figure must be revisable (DM voice)
  When a planted Zenith fails, as Fonains's did, Vecna redraws the figure around the loss rather than abandoning it.
  src: inbox/chat-early-planning.md § Campaign Planning

- **[decide]** A node log for player impact
  An early plan kept a Remaking Node Log tracking how the players have changed Vecna's plan. Bring it back as a planning table on the Ascension page, or let the timeline carry it.
  src: inbox/chat-early-planning.md § Campaign Planning (turn 124)

# Dossiers

DM dossiers under `prime/dossiers/`. Items are grouped by page and ordered decide, fix, drop, add. Dossiers are in-world pages: proposed text reads like a fan-wiki character entry and states only what is settled. Anything undecided stays in a `decide` item. Lines marked DM-only belong in the dossier's DM notes.

---

### dossiers/index.html

- **[fix]** The Krik'Lit swap is the V006 swap *(answered)*
  The Krik'Lit dossier says he leaves "At the V007 swap" (dossiers/ostekk.html has the same "at the V007 swap"). Change both to "at the V006 swap". The index's "The window shuts at the V006 swap" already matches. Write: "Krik'Lit and Pffred were relieved at the V006 rendezvous, in the Make Ready interlude, when the Flighty Foundling came alongside the Tyrant Ship. They returned with the Foundling." This matches data/npcs.json. The behir's parley window shut when the Foundling arrived.
  src: dossiers/krik-lit.html; data/npcs.json (Krik'Lit)
  answered: inbox/chat-voyage-6-7-planning.md § Voyage 7 (Settled: The swap and NPCs; Make Ready interlude; Superseded "you're relieved"); inbox/chat-cosmic-campaign-structure.md § Superseded (window closes when the Foundling arrives)

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
  The page says "She has never named a want." The Sol chat explored several without settling. Its last reading, that she wants Sol to keep existing as her local anchor, was never confirmed. Korey wants to develop the Beshaba/Tymora interplay (see the Tymora decide under factions/deities.html). Settled context any want must fit: Tymora and Beshaba need each other (fortune needs misfortune); gods give direction without showing the full picture; Tymora's followers on Aethris pushed luck until it stopped being luck.
  Options:
  (a) Keep "She has never named a want."
  (b) She wants Sol to keep existing, as her anchor on Aethris (the chat's last reading).
  (c) A want set by the Tymora interplay, decided with the Tymora item.
  src: BCS § Sol/Open, § Sol/Aethris and the gods

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
  The one-shot gives only Clint's own answer: he wants "money… for some information that you need to get." Nothing names the information. Set it, or leave it as Fonains business (Clint's present stays on Fonains).
  src: chat-cosmic-campaign-structure § Open; scratchpad fonains_notes/12.md § Oneshot 03 (NPCs)

- **[fix]** The elemental woman is Chloe Chespetes *(answered)*
  The page says "The elemental was a woman, Mary Chispitez, fused to an ancient crystal called the Pedra Ardente". Write: "The elemental was a woman, Chloe Chespetes, with the Pedra Ardante fused into her hand. Centuries earlier a sect of her own clan tried to use the ruby to open a portal and release Imix. Her clan and the Cre'Tez fought them, and Chloe flooded the laboratory with lava to stop them. She was infused with the Plane of Fire and trapped in the elemental until Clint's crew freed her." She is the same Chloe Chespetes the timeline traps in the lab during the fire genasi war over Imix.
  src: dossiers/clint.html; timeline "The fire genasi war over Imix"
  answered: scratchpad fonains_txt/Oneshot_03_Search_for_the_Blooming_Glass.txt ("My name is Chloe. Chloe Chespetes."); scratchpad fonains_notes/12.md § Oneshot 03; session-rulings (transcripts are canon)

- **[add]** The Blooming Glass *(answered)*
  The one-shot is "Search for the Blooming Glass", and the Blooming Glass is the place. "Blooming Grove" in memory canon is a slip. Add to the Blooming Glass row: "The Blooming Glass stands in the Wandering Sands at the end of the Shattered Path: a petal-layered construct of Rubicon, a gem close to diamond, throwing prismatic light. A research facility lies buried beneath it, built to study the Pedra Ardante." The page and the timeline already use "Blooming Glass"; keep it everywhere.
  src: timeline "Pedra Ardante reaches Vanifer"; memory-canon open-decisions (Fonains canon 2026-10-25); scratchpad fonains_notes
  answered: scratchpad fonains_txt/Oneshot_03_Search_for_the_Blooming_Glass.txt (opening line: "it's called Search for the Blooming Glass"); scratchpad fonains_notes/12.md § Oneshot 03 (Items and places); session-rulings (transcripts are canon)

- **[fix]** Clint went overboard
  The page says "When the first boarding came, he seized the boarders' own craft and broke away with it", the table says "Took the boarders' craft…", and the infobox says "Crossing open". Write: "Clint Dashforest went overboard in the Bellwether Crow ambush near Cairn Station. A psychic wind carried him across the Astral Sea to Fonains." Remove "Crossing open".
  src: memory-canon open-decisions (operative resolved), campaign-canon § Naming (Astral Sea travel); timeline "The Bellwether Crow ambushed"
  updated (round 4): superseded. Clint went through a color pool on purpose, drawing the boarders off; write it from STAGING § Clint Dashforest and the Bellwether Crow.

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

### dossiers/crc.html

- **[decide]** The stored spell
  Settled: the first encounter is at the Caelestis main entrance when the crew returns from H'Catha. The crew hears murmurs first, then "Sol Fortuna. You are required." It is an objective-based escape. Rewrite this page's Open, which leans toward the Sky Dock, to the main entrance (see the main-entrance add under crew/sol.html and the Timeline fix "Sol's first C.R.C. encounter").
  Left: the stored spell. Options: Locate Creature (the page) or Hold Person.
  Touches: this page, crew/sol.html, timeline.json.
  src: BCS § Sol/Open, § Sol/C.R.C. and the scry beats; dossiers/crc.html
  answered (location): BCS § Sol/C.R.C. and the scry beats (Settled); memory-canon campaign-canon § Antagonists (first CRC encounter on Caelestis); chat-early-planning § Arc 1 close (C.R.C. waits at Caelestis on return)

- **[decide]** Who on Aethris commissioned it
  The page says the Fortuned commissioned it. Which of them, and why they care, is open.
  src: BCS § Sol/Open

- **[decide]** Beshaba's warning before it arrives
  The early plan paid off Sol's acknowledgment vignette with a Beshaba line before the C.R.C. first appears: "your face cut in glass you did not make." It fits the construct's crystal body and her short register. Use it, reword it, or drop it. If used, it lands in the session before the first encounter.
  Provenance: the line appears in Claude's master source doc (§14.5, tone calibrations) beside "Stand." "Again." "Continue."; no Korey statement adopting it was found. Since then Korey's own acknowledgment text has Beshaba talk capriciously, past three words, so the line would need to fit that register too.
  Touches: dossiers/crc.html, dossiers/beshaba.html (register examples), crew/sol.html.
  src: chat-early-planning § Campaign Planning, Arc 1 close and planning method (turn 300); original chat 0852f52d (§14.5); BCS § Sol/Acknowledgment scene

- **[add]** Its look
  Add to Who they are: "A faceted crystalline humanoid. Constellation points glow across its chest, its mask is polished and featureless, and its eyes burn white. Over time the mask resolves toward Sol's face." The face line is already on the page; the rest is not.
  src: BCS § Sol/C.R.C. and the scry beats

- **[add]** How it tracks Sol (DM voice)
  Add to How to run them: it tracks Sol by resonance, strongest where he has been. It cannot keep pace with a spelljammer in transit, and it has no handler from Aethris (a handler would diminish it). During the crossing to H'Catha it stays near Caelestis, Sol's strongest recent trail; an appearance on the trail is low probability only.
  src: BCS § Sol/C.R.C. and the scry beats

- **[add]** Retrieval protocols
  Add as its voice lines: "Resistance has been accounted for." "Interference is inefficient." "Your absence has created imbalance." "Adjustment required." "Retrieval delayed. Not abandoned."
  src: BCS § Sol/C.R.C. and the scry beats (Claude drafts; Korey did not object)

---

### dossiers/ezra.html

- **[decide]** Ezra's own hook
  Ezra must arrive with a hook others can latch onto. Options:
  (a) The eye-in-a-wheel sketch (ties to crossing table entries 4 and 8).
  (b) The sealed letter: "Watch one thing until it changes."
  src: chat-voyage-6-7-planning § Open; memory-canon open-decisions (Voyage 007 intent)

- **[fix]** The Hall transport is the crew's last stint with Ezra *(answered)*
  The page's order of operations ends "assigned to Emporia → optional ferry". Drop the optional Emporia ferry. Write: "The Watcher Transport, from H'Catha to the Hall of the Watchers, is the last time a Caelestis crew travels with Ezra. His training is finished, and it is his last leg before his journey begins. The Hall is where he departs from." Emporia stays as his posting, which he reaches without the crew.
  src: memory-canon campaign-canon § Key NPCs; dossiers/ezra.html; chat-cosmic-campaign-structure § Graduation board contracts
  answered: memory-canon campaign-canon § Key NPCs ("the last troop he travels with before his journey begins"); original chat f2f5d29e, Korey: "Them being the last sort of troop that interacts with Ezra before he starts his journey"; the graduation board row ("This is his last leg before his journey starts")

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

- **[decide]** N'ghathrod's mouse
  He saved a mouse during the escape and it travels with him. Its quirk and what it means to him are open.
  src: Korey, 2026-10-25 (round 2)

- **[decide]** Where the elder brain went
  It teleported out of the collapse in Session 27. Where it went is open; back to Glyth is one option.
  src: Korey, 2026-10-25 (round 2)


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
  updated (round 4): superseded. The timing tables are cut; Tarroway stays as a thread (see "Trim Tarroway to a thread").

### dossiers/the-runekeeper.html

- **[decide]** The Runekeeper's name
  The page has "Name open". Name him.
  src: chat-cosmic-campaign-structure § Open; chat-crew-tumak-gregory-bartholomew § Tumak/Open

- **[decide]** How the Heart cycle resolves
  Does Tumak make his own Heart-rune? Does he meet the previous Runekeeper? Korey's lean (turn 257): the Heart may be the current Runekeeper's personal rune, and Tumak may make his own Heart-rune when he returns home. The Heart stays hidden from the table until Korey reveals it.
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
  The infobox says "Last placed: On Cairn's bearing, closing slowly". Tarroway and Verrow say it "left the sector a year ago". The Tarroway fix (psychic wind) removes one reason for "left the sector".
  Settled: Vth'oramu is harboured outside Realmspace while its crews work inside it. It sat on the Cairn bearing about a year ago, Cairn reported it and then went silent, and the colony page has it move on afterward.
  Left: where that harbour is now. Options:
  (a) Still on the Cairn bearing at the sphere's edge, closing slowly (the infobox).
  (b) Gone from the Tetherbreak sector since Cairn went silent, harboured somewhere else outside Realmspace (Tarroway and Verrow).
  Apply the pick across all three pages.
  Touches: dossiers/vthoramu.html, dossiers/tarroway.html, dossiers/verrow.html.
  src: dossiers/vthoramu.html; dossiers/tarroway.html; dossiers/verrow.html; chat-cosmic-campaign-structure § The dreadnought, § Tetherbreak; campaign/colony/index.html ("The dreadnought moved on afterward")

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

- **[add]** Ryeback lives *(answered)*
  DM notes: "Ryeback lives. His death belonged to Fire in the Galley, which is cut; Miken's sabotage became a beacon planted for Qitru, and Ryeback came through unhurt. No other death is planned for him." Take any open line about his death off the page.
  src: chat-organizing-framework § Open; memory-canon campaign-canon (Fire in the Galley not happening)
  answered: inbox/chat-cosmic-campaign-structure.md § Superseded ("Ryeback's death as open → he lives"; "Fire in the Galley sabotage → Miken plants a beacon; Ryeback unhurt"), § V006 and the arc (Settled)

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
  Placed already: Gregory, W-01 Toril in SYS-01 Realmspace (working decision, see crew/gregory.html). Sol, W-08 Aethris in SYS-03, mid-Zenith. Tumak, the Wayfinders' unnamed homeworld (W-11) in hidden SYS-06 inside SPH-01, concealed by the Dissolution cycle; Lunarfoot is the clan, never the world. Write these three onto crew/index.html.
  Left: Casey's is the world the 1486 "deliberate" meteor fell on; its system is withheld until surveyed. Bartholomew's comes from a celestial druid tradition and the FIA has no hint of it yet. Boogie's is unplaced.
  Options for each of the three: place it now, or leave it unplaced until play needs it. Touches crew/index.html, each crew page, realms/index.html.
  src: chat-cosmic § Open; framework § Open; memory-canon (open-decisions, unresolved gaps; Gregory)
  answered (Gregory, Sol, Tumak): inbox/chat-organizing-framework.md § Designations (SYS-03 Aethris's system, SYS-06 hidden, W-01 Toril, W-08 Aethris, W-11); memory-canon campaign-canon § Cosmology (Lunarfoot line), § Gregory; inbox/chat-cosmic-campaign-structure.md § Rules and crew (Lunarfoot is the clan)

- **[decide]** How cadets from worlds without spelljamming reach Caelestis
  The one route Korey has stated is Sol's: the Watcher order broke protocol to recommend he be taken to Caelestis. The FIA already hints at a route for each PC, with no dedicated intake file (Korey chose scattered hints over one file): WM-006 field referral and protective placement (Sol); SA-002 1486 meteor account by a minor referred to intake (Casey); FR-016 inspecting party reassigned to cadet intake (Boogie); SA-002 1491 two arrivals from an uncatalogued system (Wan and Tu). Gregory arrived on a cargo ship. Bartholomew has no hint.
  Left: whether there is a general rule. Options: Watcher referral as the general route; several routes (Watcher referral, Fleet recruiters, walk-ins at stations); or a per-cadet answer with no general rule, as the FIA hints already read. Touches crew/index.html, crew/sol.html, and a new Cadet intake page (see the New pages section).
  src: chat-cosmic § Open; framework § Open; memory-canon (open-decisions, unresolved gaps; Watcher recruitment for Sol); BCS § Sol/C.R.C. and the scry beats; framework § FIA records (intake hints), § Superseded (no PF-004 intake file); memory-canon campaign-canon § Gregory (cargo ship)

- **[add]** Each PC's tie to the sky
  Each crew member relates to the stars differently. Casey connects stars into his own constellation for Astra Virex. Bartholomew fills in a constellation the Circle of Stars already knows. Tumak builds a planetary network of marks to find his way home. Gregory senses paracausal signals. Sol has no star thread. Boogie carries a Tharizdun-tied shard. Add as a crew overview line.
  src: chat-voyage-6-7-planning § PCs and the stars

### crew/sol.html

- **[decide]** Beshaba's reward from the oath
  The acknowledgment scene is the level-3 oath and the level-up itself, run with Sol alone before V003's Convening; confirm it ran as planned. The reward Beshaba gives comes from the intervention tally. It should be support-flavoured and unique to Sol, and the chat left it to be found in play. Options: set it now, or let it surface in play.
  src: BCS § Sol/Acknowledgment scene, § Sol/Open

- **[decide]** Whether Sol ever learns how much of his escape Beshaba arranged
  Options: he learns it (and when), or he never does.
  src: BCS § Sol/Open

- **[decide]** Misfortuned rebalance (on hold)
  Korey paused this at turn 899 ("hold that and I'll come back to it"). His diagnosis: Sol can change several rolls a combat and Unburden without feeling the cost. The pending draft:
  - Burden charges equal his proficiency bonus and come back on a long rest only.
  - Burden adds his Charisma modifier to an ally's roll, after the roll and before the outcome. It no longer turns a failure into a success (Korey compared auto-success to Legendary Resistance).
  - Misfortune level equals Burden charges spent. Each level is a flat −1 to all of Sol's d20 Tests, replacing the d6 ability penalty.
  - Unburden, once per long rest at Misfortune 2 or more, adds proficiency bonus × Misfortune to Sol's own d20 Test or damage roll.
  Exhaustion as the cost was tried and dropped. Sol cannot Burden himself. Options: adopt the draft, adjust it, or keep the locked turn-757 text (the add below).
  src: BCS § Sol/Open, § Sol/Misfortuned

- **[fix]** The C.R.C. is CR 7
  Page says "CR 8, on an advanced detention drone chassis"; change to "CR 7, on an advanced detention drone chassis". Add Legendary Resistance (2/Day) and the Withdrawal Threshold to the trait list. This matches dossiers/crc.html, statblocks/index.html and the canon block (Medium, CR 7, AC 17, 136 HP, Withdrawal Threshold at 68 HP). The chat's stat block (Large, CR 8, AC 18, 152 HP) is the earlier draft; the dossier is the later version.
  src: memory-canon § Antagonists (CRC stat block); dossiers/crc.html; BCS § Sol/C.R.C. and the scry beats

- **[fix]** Tenet: Court Adversity
  Page says "Trial by Fire &mdash; a life without adversity is a life unlived". The tenet is now Court Adversity (Korey, turn 737). Rename it, and take its gloss from oath-of-misfortune.md in the chat outputs. The tenets read Never Yield, Court Adversity, Risk Is Not Ruin.
  src: BCS § Sol/Oath of Misfortune

- **[fix]** Jinx charges and duration
  Page says "Charges equal his Charisma modifier, minimum one". Change to "Charges equal 1 + his Charisma modifier, minimum two, all regained on a long rest" (Korey, turn 720). Also: each Jinx option is usable once per turn, and the self-Jinx's shifted thresholds last until the start of his next turn; the page gives neither.
  src: BCS § Sol/Oath of Misfortune

- **[fix]** Misfortune's Wake is a bonus action
  Page says "Misfortune's Wake &mdash; a magic action spreading Jinxed". Change to: "Misfortune's Wake &mdash; a bonus action, no Jinx charge. Choose a creature within 30 feet and an ability; it and any others of his choice within 15 feet of it have Disadvantage on d20 Tests with that ability until the start of his next turn. No damage, no save."
  src: BCS § Sol/Oath of Misfortune

- **[add]** Lucky feat and sheet
  Sol has the Lucky feat. At the oath his sheet runs CON +4 and CHA +4 (CHA 18).
  src: BCS § Sol/Identity

- **[add]** Table notes
  - Sol's player chose Beshaba and wants to lean into her.
  - He likes complex mechanics; keep them from bogging down the table.
  - The table struggles with ambiguity, so Augury-style vague answers are out.
  - The party has no cleric; the oath spells were weighed against that.
  - Keep small daily misfortunes in play around him (chores landing on him, things falling). The player wants this.
  - Present something and let him respond; never dictate what he feels or does.
  src: BCS § Sol/Identity, § Sol/H'Catha transit, § Sol/Acknowledgment scene

- **[add]** Black lightning in V002
  Add to his arc: "In V002 Sol took Boogie's misfortune onto himself. Black lightning broke from him, and he heard Beshaba laugh for the first time."
  src: BCS § Sol/Identity

- **[add]** Misfortuned (core rule)
  New section, listed under "Where the rules live". Misfortuned is Sol's own permanent character feature because he is Misfortuned; the points it tracks are called Misfortune. It is separate from the oath and persists even if he breaks the oath. The personal burden lives here so the oath stays pure upside, like the official oaths. The arc runs Misfortuned → Oath of Misfortune → Misfortune's Favored (the capstone).
  Locked text (turn 757):
  - Misfortune caps at his proficiency bonus.
  - Each point is −1 to one ability modifier, chosen by d6 (1 Str, 2 Dex, 3 Con, 4 Int, 5 Wis, 6 Cha). The penalty carries through to spell save DC and spell attack. Penalties stack. All Misfortune clears on Unburden or at level-up.
  - **Burden** (reaction): when a friendly creature within 60 ft. fails a roll, after the die is shown and before the outcome is declared, the roll becomes a success and Sol gains 1 Misfortune.
  - **Unburden** (reaction): at cap, Sol applies plus or minus his total Misfortune to any creature's roll within 60 ft., and all Misfortune clears. A natural 20 stays a critical hit.
  - Burden and Unburden share his reaction, so only one happens per round.
  At levels 1–2, before the oath, it ran without a cap or Unburden: penalties persisted until level-up, and the player did not know when they would clear. A rebalance is on hold (decide above).
  src: BCS § Sol/Misfortuned, § Sol/Pre-oath Fortune mechanic

- **[add]** How the player tracks Misfortune
  The player tracks each point as an item on D&D Beyond named "Misfortune (STR)", "Misfortune (DEX)" and so on, and clears them before processing a level-up. The D&D Beyond text uses plain words (no arrows, dashes or equals signs) and a two-column d6 table.
  src: BCS § Sol/Misfortuned, § Sol/Pre-oath Fortune mechanic

- **[add]** Beshaba's test (add to "Beshaba's voice")
  The pre-oath interventions were Beshaba testing Sol. First comes distant laughter only he hears. After two or three interventions she asks: "How long will you bear it?"
  At the oath scene a full commitment quietly clears his penalties. A hedged answer earns one word: "Finally."
  src: BCS § Sol/Beshaba's test

- **[add]** Misfortune's Pall (L7)
  The page names the feature only. Add: "He and allies in his Aura of Protection have Advantage on death saving throws and regain 1 hit point on a 19 or 20. They also have Advantage on saving throws against any effect from a cursed creature, wherever that creature is."
  src: BCS § Sol/Oath of Misfortune

- **[add]** Misfortune's Reckoning (L15) damage and line
  Add the Inevitable Strike figure: once per turn, a critical hit on a cursed creature adds psychic damage equal to twice his paladin level. Korey kept the once-per-turn cap rather than add a crit-fail cost. Flavor line: "You no longer endure misfortune. You direct it."
  src: BCS § Sol/Oath of Misfortune

- **[add]** Misfortune's Favored (L20)
  The page says "The capstone." only. Add: a bonus action, lasting 10 minutes, once per long rest or by spending a 5th-level slot. Two halves:
  - **Misfortune.** Any creature that enters the aura or starts its turn there takes necrotic damage equal to his Charisma modifier. Hostile creatures in the aura cannot score critical hits.
  - **Favor.** Sol is exempt from the damage. Allies in the aura score critical hits on 19–20 and have Advantage on attacks against cursed creatures. His Jinx may pick two abilities.
  The damage hits allies too: "misfortune does not care who the target is" (Korey; Cloak of Flies is the precedent). Allies trade the damage for the Favor. This settles the old question of whether the capstone can target Sol himself.
  src: BCS § Sol/Oath of Misfortune; framework § Open

- **[add]** Oath design notes (DM voice)
  - Subclass features deal necrotic and psychic; Divine Smite stays radiant, as the base class.
  - He is a bruiser with no defensive level-15 feature; defense comes from the base class and the oath spells. Korey: "Ill Omen isn't about changing what happened but instead about mitigating it entirely or rolling with it."
  - Oath spells may come from any class list (Ancients, Vengeance and Glory set the precedent).
  src: BCS § Sol/Oath of Misfortune

- **[add]** Scry 2 timing
  Scry 2 comes just before the crew leaves H'Catha to return to Caelestis.
  src: BCS § Sol/C.R.C. and the scry beats

- **[add]** The C.R.C. at the main entrance
  When the crew returns, the C.R.C. is waiting at the Caelestis main entrance. The crew hears murmurs first, then: "Sol Fortuna. You are required." The encounter is an objective-based escape, not a kill. Also stage this on dossiers/crc.html, where the location is a decide.
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

- **[fix]** "Hearer" becomes "Starchild"
  Astra's warlocks are Starchildren. Replace "hearer" with "Starchild" throughout this page and on `dossiers/astra-virex.html`. Casey's power works through sight; the only voice he hears is Polly's.
  src: inbox/chat-crew-boogie-casey-sol.md § Casey (turns 101–107)

- **[add]** Overlapping Starchildren
  Where several Starchildren gather at one celestial body, Astra holds more tethers there and the change around them speeds up.
  src: inbox/chat-crew-boogie-casey-sol.md § Casey

- **[decide]** How often Polly speaks
  The page says Polly's voice comes through cleaner after each tether. A later suggestion made his voice rare, a single event each time. Pick one.
  src: inbox/chat-crew-boogie-casey-sol.md § Casey

- **[add]** Viren threads on the crossing to H'Catha (DM voice)
  The two-week crossing to H'Catha is where Viren information gets scattered: rumours and small clues placed in the world for the crew to notice or ignore, not every one a mystical pull or Polly speaking. A list of about sixteen candidate rumours exists in the Casey chat; none is chosen yet.
  src: inbox/chat-crew-boogie-casey-sol.md § Casey

- **[decide]** What the first tether at Viren is
  Options: a dying stellar entity; a Zerathis-connected place or person; stellar-touched inhabitants; a rift onto a missing constellation.
  src: BCS § Casey/Open

- **[decide]** The "bad" event at Viren
  Design a non-catastrophic event at Viren that makes Casey question whether the change is worth what he gains.
  src: BCS § Casey/Tethering, Open

- **[decide]** The other Starchild
  A living Starchild like Casey will appear (see the add below). Set their shape: further along than Casey, earlier, diverged, or opposing. Set where they are headed.
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
  Page lists it as open. Options: yes (and whether the other Starchild is one), or Casey is the only one.
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
  Another living Starchild like Casey will appear as pressure: possibly a rival, possibly a partner, modelled on Avantika.
  src: BCS § Casey/Tethering

- **[add]** The players never learn the word "Axiom"
  Casey learns only that specific things are wrong or changed. No mortal knows the Axioms.
  src: BCS § Casey/Tethering; memory-canon (no mortal knows the Axioms)

- **[add]** The Lantern Node / Viren quest
  The Lantern Node at Viren is Casey's first named alignment. (Name pending the rename decide above; the add carries whichever name stands.)
  src: BCS § Casey/Astrology quirk

### crew/tumak.html

Rules for the runes, marks, Wayfind and the Rune Sets live on rules/index.html; see the Rules section.

- **[decide]** What completing the inscription costs Tumak
  The page carries two questions as "Open:" lines (the stat row and the closing paragraph): what the inscription completing costs him, and what happens to the homeworld's concealment while the fragment is between bearers. Rule both. Either way, take the "Open:" lines off the page; open questions live in this backlog. Touches crew/tumak.html and dossiers/the-runekeeper.html.
  src: TGB § Tumak/Open; crew/tumak.html

- **[decide]** Hard clock or soft clock for the Runekeeper's fade
  Hard clock: the fade runs to a deadline the DM counts down. Soft clock: the fade worsens as pressure, with no date. The arc doc v3 Pressure section leaves it open.
  src: TGB § Tumak/Open

- **[decide]** How a separated twin plays out at the table
  Settled so far (Korey, turn 227): at the table only the twin with the crew is played, a lower-level one-shot with the separated twin is possible, and the twins reunite through the campaign, through the crew or by other means. Still open for a long separation: off-screen montage, a solo one-shot, or shared visions (turn 143). The reunion mechanics are a separate decide on rules/index.html.
  src: TGB § Tumak/Mishap and separation, Open

- **[fix]** Wayfind opens on the first match
  The "Wayfinding" row says "The partial mark, and its growth with understanding rather than with level. The full mark is several levels out." Change to: Wayfind opens on the first matched rune and always targets one of his placed marks. The network grows as runes match, with one rune roll per character level. Whether the range itself grows with matched runes waits on the reach-gate decide on rules/index.html.
  src: TGB § Tumak/Wayfind, Rune structure, final; rules/index.html

- **[fix]** Runes are not a proximity detector
  Page says "The runes surface on skin near cosmic threat, which gives the crew a proximity detector". Change to: runes arrive with level-ups, character moments and DM-bestowed story beats, so the player cannot equate a rune with a place. A rune surfacing near something cosmic can stay as an occasional story trigger, not a rule.
  src: TGB § Tumak/Rune system

- **[fix]** The level-4 roll matched the left sole
  Page says "Level 4 fires with the seating in the V006.5 interlude, before V007, which brings his per-level rune roll." The roll has happened. Tu's half landed on 08, so the left sole is Tumak's first matched rune (Korey, turn 328). Write it as done and point to Rules → Current state.
  src: TGB § Tumak/Rune structure, final

- **[fix]** The inscription row: reroll and choose
  The "Runekeeper inscription" row lists "the choose band". The d20 now reads: 1–16 resolve that position, 17–19 reroll, 20 lets the player choose, a duplicate rerolls. Change "the choose band" to "the reroll and choose results". The full table is a fix on rules/index.html.
  src: TGB § Tumak/Rune structure, final

- **[add]** Soulknife is the first step of the manifestation
  Tumak took Rogue 3 (Soulknife) between sessions 2 and 3. Soulknife is the first step of the Runechild manifestation because the twins' souls are bound. The soul knife and the twins' telepathic link first manifested in V004; the player decides how the psychic blade looks.
  src: TGB § Tumak/Soulknife and the first rune; memory-canon § Tumak Swan

- **[add]** First Sorcerer level at level 4
  Tumak takes his first Sorcerer level at level 4. His player wants to discover in-world how the abilities work.
  src: chat-voyage-6-7-planning § PCs and the stars

- **[add]** What the table believes (add to that box)
  The player sheet reads Variant Human, 5'7" ("long body, shorter arms, smallish head"). CHA 18 with Deception expertise is why the disguise holds.
  src: TGB § Tumak/Backstory

- **[add]** "Left side" and "right side"
  At the table Korey addresses the twins as "left side" and "right side", so only the player knows which twin he means.
  src: TGB § Tumak/Backstory

- **[add]** Why he enrolled, and the note
  Tumak enrolled at the Academy as the quickest way home. Both twins were sent away with a note reading "come home safe".
  src: TGB § Tumak/Backstory

- **[add]** One arc in three stages
  Runechild, Wayfinder, Runekeeper is one continuous story. Tumak was born or chosen a Runechild; his sorcery is the in-world answer to his backstory. He is now a Wayfinder, on the journey. He becomes the Runekeeper when he returns home.
  src: TGB § Tumak/Arc framing (turn 211)

- **[add]** What the marks are for
  Each mark Tumak places is a sensor his world puts out into the universe: its patch of information, so it can protect itself. The world needs "enough" marks, and nobody can say how many. The marks give Tumak a goal beyond going home.
  src: TGB § Tumak/Marks (turn 223)

- **[add]** The fading as pressure
  The Runekeeper's fading is Tumak's pressure to go home now and to start attempting the journey. It reaches the player through memories of his grandmother and of home: a smell, how the trees look.
  src: TGB § Tumak/Runekeeper lore and pressure

- **[add]** Inspirations (DM note)
  Tumak's arc sits between The Giver and Avatar. The two are the tonal reference for the grandmother-and-memory sequences above all (arc doc v3, Pressure section).
  src: TGB § Tumak/Runekeeper lore and pressure, Arc framing (turns 150–151)

- **[add]** Design intent: a stark trade-off
  Tumak's powers carry a stark, visible trade-off so the other players do not feel he has too much. Every Rune Set spell past the first cast per long rest costs exhaustion, and so does every Wayfind beyond 100 feet.
  src: TGB § Tumak/Wayscribe design, Rune sets, Wayfind

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
  Settled (see the Full Almost form add): physical scores come from the seated creatures with no cap, mental scores stay his own, AC is 10 + Dex unless an armour aspect applies, and the form costs a Wild Shape use and unlocks when the constellation is complete. Dinosaurs are off the aspect menu and must be earned.
  Left: its HP; when each of CON-312's faint stars unlocks (two burn from his childhood fall); and whether dinosaurs join his Wild Shape list, which is separate from the aspect menu.
  src: chat-voyage-6-7-planning § Open, § Bartholomew: Aspects (Settled)

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
  Giorge is the Darkest Day vessel on Fonains (spelling per rulings; a different person from Jorgi Panamop).
  Settled: Giorge is searching for pieces of the broken Monolith and may cross Boogie's path later. Korey, in the Boogie chat: "Giorge Forsworn is a character I retrofitted to be similar on Fonains. He is searching for pieces. Not super important here but may overlap at some point." Add to crew/boogie.html (DM notes) and artifacts/fonains-shard.html: "On Fonains, Giorge is searching for pieces of the broken Monolith. His path may cross Boogie's."
  Left: (1) his surname. Korey typed "Giorge Forsworn"; memory canon records only that he was inspired by George Foreswarn. Options: Forsworn on the page, or no surname. (2) Whether his original Tharizdun tie is revisited (memory canon: "possibly to be revisited").
  Touches crew/boogie.html and artifacts/fonains-shard.html.
  src: BCS § Boogie/The shard and Tharizdun; memory-canon § Naming (Giorge); session-rulings
  answered (shard search): BCS § Boogie/The shard and Tharizdun (Settled); original Boogie chat fa8c4131 (Korey's line quoted above)

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

- **[fix]** "Artifacts of Convergence" is retired *(answered)*
  The set is the Reach residue: four fragments, one per Axiom, seventeen pieces. The three-artifact set (Eye, Key, Voice, with A.T.L.A.S. leading to the other two) was replaced by the four fragments, and "Artifacts of Convergence" is not a name for anything. No live page uses the term (0 hits outside prime/working/), so there is nothing to change on this page; keep it off. The Uk'otoa-orb constraint survives as the "Each fragment is its own adventure" add below. Memory's constraint line still says "the three pieces"; update memory.
  src: memory-canon (open-decisions § Planned: constraints on the Vecna/N'ghathrod layer); chat-cosmic § Superseded
  answered: inbox/chat-cosmic-campaign-structure.md § Superseded ("Artifacts of Convergence as Eye, Key, Voice → four Reach fragments as residue"), § Artifacts of Convergence (Settled)

- **[decide]** A holdings ledger: who holds each residue piece, and who knows
  Known: the Boundary piece is housed in A.T.L.A.S. in the Brig; the crew holds the Lantern of Flourishing (the Rod's fourth piece, "regenerate") since V006; Xanathar keeps the fifth piece ("find the path"), which the Lantern can pull the crew toward; the seventh piece (simulacrum) was left aboard Thessalar's craft; the two Dissolution pieces are forming in Wan and Tu. Vecna has collected residue for centuries but has never assembled a fragment, because a near-complete fragment is a beacon. Who knows what: N'ghathrod wants A.T.L.A.S.; Ostekk sent Ostekk-10 after the Lantern. Still open: which pieces Vecna's side actually holds (none is named), and where the ledger lives: a section of this page, or a new DM page.
  src: framework § Open; memory-canon (campaign-canon, Rod holders; open-decisions, seventh piece); chat-cosmic § V006 and the arc ("Rod pieces located"), § Cosmology redesign ("near-complete Rod is a beacon")

- **[decide]** Why SPH-01 holds pieces of three fragments
  Partly settled for Convergence: Rod pieces yearn toward each other, and after long ages they are drawing close, so several sit near Realmspace. Still open: why the Boundary piece (A.T.L.A.S., shelved in the Brig as a curio) and the Dissolution fragment (Lunarfoot, hidden in SPH-01) are in the same sphere. Options: coincidence the page states plainly (the pieces are scattered across the spheres and SPH-01 happens to hold three); or a cause, such as the yearning of Rod pieces drawing other residue along, which canon rules out (different fragments do not yearn toward each other).
  src: framework § Open; chat-cosmic § N'ghathrod origin ("drawing close"); memory-canon § Cosmology

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

- **[fix]** A heart's hidden entrance is the Atrium *(answered)*
  Keep Atrium on every page; no page change. Korey renamed it himself in the cosmic chat ("I would also change aperture to be atrium to fit in the heart connotations"), after memory's working world-heart line was written. Memory's world-heart, Runekeepers and "Locked this pass" lines still say Aperture; update memory.
  src: memory-canon (open-decisions § Planned, world-heart framework; Runekeepers line); chat-cosmic § Superseded
  answered: inbox/chat-cosmic-campaign-structure.md § Superseded ("'Aperture' → 'Atrium' (turn 278)"); confirmed in the chat at turn 278, Korey's own words

- **[add]** What the letters stand for *(answered)*
  A.T.L.A.S. stands for Astral Topographic Lithic Augury System, the Fleet's catalogue name. Each word names only what the Fleet can observe: it maps worlds from astral space, its core is stone, and it reveals hidden things. Nobody who named it knew what the core is. Add the expansion to the identity card; the artifact is still called by the acronym alone, never "the World Surveyor".
  src: memory-canon § Cosmology; chat-early-planning § Campaign Planning, Artifacts, the Brig and the Reach
  answered: inbox/chat-early-planning.md § Artifacts, the Brig and the Reach (turn 322; Korey: "Astral Topographic Lithic Augury System."). Memory's rule that the acronym must not contain "Axiom" is met, and memory's "the name is the acronym" retires "World Surveyor", not the expansion.

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
  Canon says Rod pieces other than Xanathar's must be decoupled from beholders, but the fourth piece's maker (Ostekk) and its last holder (Vaelorix) are both beholders, and Ostekk now rules a domain on H'Catha and wants it back. Its current holder is the crew, so the rule's letter (holders) is met today. The question is the rule's purpose (keep the campaign from getting too beholder-heavy). Options: (a) the rule is about current holders, so the Lantern passes and stays a beholder-history object; (b) the Lantern is the one named exception, and the remaining loose pieces (first, second, third, sixth) get non-beholder holders; (c) soften the Lantern's beholder ties (for example, Ostekk stops pursuing it after H'Catha).
  src: memory-canon § Cosmology ("Rod holders…"); chat-voyage-6-7-planning § Naming ("Ostekk is a beholder")

- **[decide]** Using the Rod against Vecna
  Canon keeps forward that the Rod may be usable against Vecna; the mechanism is undecided. Settled around it: a whole fragment is the second key to the First Heart, so completing the Rod manufactures the one object that opens the door without Vecna's lattice, and the whole Rod is his fallback (campaign/ascension/ § The second key). Any use against him has to live with that trap. Options to sharpen: the crew completes the Rod and uses or destroys it before he can reach it; a partial Rod does something to him or his vessels; or the Rod's seventh piece (simulacrum) works against N'ghathrod's copies rather than Vecna. Then add beside "completing it opens the First Heart".
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
  Options: the bag of holding blocked it, since its interior is an extradimensional space (lock this before players ask); or the anti-magic field around the Command Deck had already been muting the Lantern's pull, as it muted Gregory's tug, and the behir lost the trail inside it.
  src: chat-voyage-6-7-planning § Open; memory-canon § Antagonists (field suppressing the Lantern)

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
  Settled for the other ships: every ship the crew encounters gets a record, and ships known only in simulation sit under the Simulation Deck with Status Simulated, so the salvage race's hammerhead and githyanki ship each get a simulated record and a register row, as the Moonraider and the Derelict did. Still open: the Derelict's name. Options: "Salvage Race Derelict", or keep "Derelict". Touches this page and vessels/the-derelict.html.
  src: chat-voyage-6-7-planning § Open; § The swap and NPCs (Moonraider and Derelict as simulated records); § Table and story principles ("Every ship the crew encounters gets a record"); memory-canon § Naming ("Ships the crew encounters get cataloged")

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
  Settled: Vaelorix worked the great eyes with his own gaze; Pffred and Krik'Lit rigged a crew station for each eye around the helm on the Command Deck; four of the ten respond, and the rest need repairs. This replaces memory's "three stalks wired as cannons, gunners in the Meditation pods" (update memory). Also settled: the stalk matching the hour's eye goes dead on H'Catha under the Pact. Still open: which four respond and what each does. Draft candidates: Fear (wakes on crossing entry 7), Telekinesis (an easy first unlock), Slowing (later); the fourth is unnamed. Then the player ship sheet the players were promised. The V007 runsheet still has three cannons with two active.
  src: chat-voyage-6-7-planning § Open, § The Lantern and the ship, § Superseded (three cannons → four of ten eyes); astral § The meteorite and mission

- **[decide]** Which shaft letter Research gets
  The table set A as the Garden and C as the Quarters. Options: B or D.
  src: chat-voyage-6-7-planning § Open

- **[fix]** The ship reads as native traffic at H'Catha *(answered)*
  Page says "he was H'Cathan and landless, so the ship arriving reads as a claimant returning rather than as a trader." Change to: every beholder ship is carved stone, so the Tyrant Ship reads as native traffic, and a few such ships in orbit is normal. A tyrant ship draws less concern at the domain borders than an ordinary spelljammer. Nobody on H'Catha knows Vaelorix is dead. Keep "Vaelorix was originally from H'Catha" as a fact; drop the claimant reading.
  src: memory-canon § Naming ("Approach to H'Catha"), § Antagonists ("H'Catha layout")
  answered: memory-canon § Naming ("reads as native because every beholder ship is carved stone (a few ships in orbit is normal traffic)"); § Antagonists ("a tyrant ship draws less concern than a normal spelljammer"). Memory outranks the page; no source backs the claimant line.

- **[decide]** The lingering Lantern wisps
  Settled: the choice is the crew's, keep the wisps or eradicate them. Nothing for Korey to rule; this waits on play. Record the crew's choice when it is made, and until then the page states that the wisps linger in the ship.
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
under each page run decide, fix, drop, add. The Tumak items are checked
against the complete Tumak sweep (all 336 turns).

### rules/index.html

#### Cosmology rules

- **[fix]** Residue housings are dampened in anti-magic, not switched off *(answered)*
  Page says paracausal objects are "Unsuppressed … an instrument built around a piece works inside an anti-magic field". Change to: inside an anti-magic field an instrument built around a residue piece is suppressed in part. Its pull is muted and its working stutters, but it is not switched off. On the tyrant ship the Command Deck field suppressed the Lantern of Flourishing and muted Gregory's tug toward it; the OSTEKK units, built with the Lantern's fragment, stuttered and slowed and kept running, while the clockwork horrors froze and the behir could not enter. Gregory's own sluggishness there was narrative only. When the field lifts, the pull returns in full. The same wording goes on artifacts/containment-engine.html (§ Where it is, the anti-magic add) and the OSTEKK dossiers.
  src: memory-canon § Antagonists ("The anti-magic field has been suppressing the Lantern"), § Key NPCs (OSTEKK-6), § Cosmology (Weave ruling)
  answered: memory-canon § Antagonists ("The anti-magic field has been suppressing the Lantern, muting Gregory's tug … When the field lifts, Gregory can commune with it"), § Key NPCs ("in the anti-magic field they stutter but keep running"); inbox/chat-voyage-6-7-planning.md § The field and constructs (Settled). Memory outranks the page.

#### Tumak: runes, Rune Sets, Wayfind

- **[decide]** Runes 17–19 as Anchors: what they grant
  Settled idea (Korey, turn 326): runes 17, 18 and 19 become Anchors, fixed places Tumak goes to, so the arc leans into navigation and working with Gregory. Only the idea is settled. Undecided:
  1. What an Anchor grants, and what a Wayfind to an Anchor gets: guaranteed arrival, a lower cost, or modestly better odds.
  2. Whether one Anchor is pre-set at campaign start.
  3. How a place becomes an Anchor, and how Gregory takes part.
  4. Which Rune Set each Anchor counts toward. Claude suggested at least one be Soul, since only 09 (Forehead) and 10 (Tongue) are rollable Soul positions (turns 258, 268).
  Offered and never accepted, so not the default: the names Hearth, Threshold and Horizon; a loop where Gregory's Calibration finds anchorable sites; Anchors bypassing the reach gate (turns 327, 333). The page still reads "Unassigned (bestowed)" and "bestowed at story moments", and § The safety valve leans on the three bestowed positions. Touches rules/index.html (position table, § The safety valve, § Open), rules/wayfinder-path-dm.html, crew/gregory.html.
  src: TGB § Tumak/Rune structure, final (turn 326), Open; memory-canon (open-decisions § Pending; campaign-canon § Tumak Swan); framework § Open

- **[decide]** Which two runes are active now
  Still undefined. Set them. The left sole (08) is now matched; see the Tu's-half fix below.
  src: chat-voyage-6-7-planning § Open; framework § Open

- **[decide]** Rune Set spellcasting ability
  Proposed at turns 329 and 331, no reply: Rune Set spells use Charisma, with save DC 8 + proficiency bonus + CHA modifier, cast at the set's tier with no upcasting. Accept or reject, then add to § The four Wayscribes.
  src: TGB § Tumak/Open

- **[decide]** Wayfind reach gated by matched runes
  Proposed at turn 333 after Korey's H'catha example ("Something has to scale the wayfind distance"): reach by matched count, 1–3 Touch (≤100 ft.); 4–6 Local (~10 miles); 7–9 Planetary; 10–12 System; 13–15 Near wildspace; 16 Deep. An attempt beyond reach fails at no cost. Marks can still be placed at any distance. Korey moved on to cost without objecting; he did not accept it. The page has no reach table, but says "grows with the inscription" (§ Wayfind) and "the range grows with the inscription" (§ Running it); both lines follow this ruling.
  src: TGB § Tumak/Open, Superseded (Wayfind range)

- **[decide]** Distance-band thresholds
  The page gives six mishap bands ("0% · 20% · 40% · 60% · 75% · 90%, rising with range") with no distances behind them. Proposed at turn 329: Touch ≤100 ft. / Local / Planetary / System / Near wildspace / Deep wildspace. The locked exhaustion rule uses four distances (within 100 ft. / same planet / same system / cross-system; see the Wayfind cost fix), so set the bands to agree with it, or adopt the reach-gate bands if that passes.
  src: TGB § Tumak/Open; framework § Open

- **[decide]** Tiered mishap consequences
  Proposed at turn 331, after Korey said a mishap at level 4 "would be really bad"; he did not confirm it. By band: Touch, none; Local, a fizzle plus 1 exhaustion; Planetary, a 1d10-mile overshoot; System, a short separation on the destination world; Near wildspace, sanctuary plus twin at origin; Deep wildspace, two sanctuaries. Options: keep the one fixed mishap result (the twins split to two sanctuaries; see the mishap-result fix), or adopt the tiers. The Near-wildspace tier brings back "twin at origin", which Korey rejected at turns 251–252.
  src: TGB § Tumak/Open

- **[decide]** Wayfind cost: the turn-335 proposal
  The locked rule is exhaustion by distance band (see the Wayfind cost fix). Proposed at turn 335 and unanswered: one free Wayfind per long rest in any band, Touch always free, otherwise exhaustion equal to the band (1–5). The chat ends on three questions: does the daily free Wayfind apply in every band; is Homebound fully free; do Anchors pay full cost, one band less, or nothing. Keep the turn-267 rule, or adopt this and answer the three.
  src: TGB § Tumak/Open, Superseded (Wayfind cost)

- **[fix]** Network modifiers apply only when Tumak stands at a mark *(answered)*
  Page: "−10% if the mark was placed by a rune from another set; −25% if from the same set", with no standing condition. Change § Wayfind → Network modifiers to: the network helps only when Tumak is standing at one of his own placed marks as he casts. If the destination mark is from the same set, add 25 to the d100 roll; if from a different set, add 10. Cast from anywhere else, the Wayfind is allowed at full risk with no bonus. The network buys safety, never energy: exhaustion is the same either way. (The d100 bands themselves are the Wayfind-odds fix below.)
  src: TGB § Tumak/Wayfind, Open
  answered: inbox/chat-crew-tumak-gregory-bartholomew.md § Tumak/Wayfind (Settled, turns 241–247, 262). Confirmed in the chat: Korey, "he can use a marked rune to [hop] to another marked rune from the same set and mitigate the mishap chance"; the +25/+10 numbers are from the mechanics spec wayfinder-runekeeper-mechanics.md (turn 268), § Set network mechanic.

- **[decide]** The early-home door
  Keep or drop: a natural 20 on a d20, rolled before declaring a target, then a confirmation roll to reach home ahead of the arc.
  src: TGB § Tumak/Open; framework § Open

- **[decide]** Does Sending work between separated twins?
  An open proposal, never confirmed. Accept and add beside the Twin Bond Compass, or reject.
  src: TGB § Tumak/Open

- **[decide]** How resources split when the twins separate
  Korey's working position (turn 257): the separated twins split resources about in half (spell slots, sorcery points, Runechild charges, psionic dice), and both keep the full spell list. Earlier he floated half HP, half spell slots and maybe half skills (turn 140). Still to rule: HP, death, consumables, and the exact split. Then add to § Wayfind → While separated.
  src: TGB § Tumak/Separation and attempts, Mishap and separation, Open

- **[decide]** How separated twins reunite
  Settled (Korey, turn 227): they reunite through the campaign, through the crew or by other means. Proposed at turn 329, no reply: by travel, by following the Compass pull, or by one return Wayfind from the sanctuary. A return Wayfind conflicts with the page line "Wayfind locks until the twins reunite", so adopting it rewrites that row.
  src: TGB § Tumak/Mishap and separation, Open

- **[decide]** Mark lifecycle and Perceive details
  Proposed at turn 329, no reply. Marks: whether a mark can sit on an object or a willing creature, what anti-magic does to one, and what happens to a mark inside a Bag of Holding. Perceive: sight and hearing only, with Tumak's own senses blinded while he perceives. Rule each, then add to the Marks row.
  src: TGB § Tumak/Open

- **[decide]** 2014 or 2024 exhaustion rules
  Pick one; Rune Set spells and Wayfind both cost exhaustion.
  src: TGB § Tumak/Open (turn 145)

- **[decide]** The retroactive backfill: when the two runes land
  Settled: two more rune-halves per twin backfill levels 1–2 (turn 134; restated "give him two runes as well" at turn 259), and they are DM-placed, not rolled: the backfill pair counts among the up-to-four runes at DM discretion (turns 259–260; see the safety-valve add). Still open: when they land, since the planned window (between V3 and V5) has passed (options: at V007's quiet stretch, or at the next level-up), and which positions they take (place them to steer toward a first complete set, or to match existing halves). Then update the position table and "Current state".
  src: TGB § Tumak/Open, Rune structure, final ("Up to four runes are at DM discretion: two to backfill levels 1–2")

- **[decide]** An optional spell-inscription track
  A spell-inscription track separate from the runes. Keep or drop.
  src: TGB § Tumak/Open (turn 137)

- **[fix]** Matched runes carry marks; the per-rune boons are gone
  Page says "Matched runes carry the per-rune boons, power the four Wayscribes, and at the top end carry Wayfind and Homebound." Change to: "Matched runes carry marks. A completed set grants its spell. At the top end the runes carry Wayfind and Homebound." The per-rune +1 boons are removed (Korey, turns 215, 221), and runes are no longer spent and recharged.
  src: TGB § Tumak/Rune sets and per-rune boons, Superseded; framework § Tumak, § Superseded

- **[fix]** One spell per Rune Set; the recharge dice are gone
  The Standing mechanics rows say "Wayscribe cost: First casting per Wayscribe is free; each further casting adds a level of exhaustion" and "Wayscribe recharge: At dawn: d2 (Soul), d4 (Maker), d4 (Walker), d10 (Vessel)." Settled (Korey, turns 330–331): when a set completes, Tumak picks one spell from its menu. The first cast of it per long rest is free; each further cast costs 1 level of exhaustion. Rewrite the cost row with "per long rest" and delete the recharge row.
  src: TGB § Tumak/Rune sets and per-rune boons, Superseded (set rewards)

- **[fix]** "Rune Sets", not "Wayscribes"
  Korey dropped both "Waypost" and "Wayscribe" for the player page (turns 164–180). The groups are Soul Runes, Maker Runes, Walker Runes and Vessel Runes, with no leading "The", and the player tally counts them as "Rune Sets". Page heads its section "The four Wayscribes", labels table columns "Wayscribe", and says "Wayscribe" in the Pacing Rule and § Current state. Change to "Rune Sets" / "Set" so the DM page uses the player's terms. The player tracker's code still names its constant WAYSCRIBES; that is internal and can stay.
  src: TGB § Tumak/Rune sets and per-rune boons, Superseded (group names, tally labels)

- **[fix]** The d20 table: 17–19 reroll, 20 chooses
  Page says "17–20 The player chooses any position still unresolved for that twin" and "A position already resolved for that twin: Treated as a choose result." Change to: 1–16 resolve that position; 17, 18 and 19 reroll; 20 lets the player choose any unresolved position; a position already resolved rerolls. Also reword the line above the table so 17–19 stay off the roll ("bestowed by the DM", or Anchors once that decide lands).
  src: TGB § Tumak/Rune structure, final (turns 257–260)

- **[fix]** Tu's half landed on 08: the left sole is matched
  At the level-4 roll Tu's half landed on 08, so the left sole is Tumak's first matched rune (Korey, turn 328). Page "Current state" says "Wan took the left sole (08), Tu took the right shoulder (16). Two unmatched halves; no rune complete", and position 08 shows only Wan's half. Update the position table and "Current state". Wayfind is now open. The player tracker needs the same change (see wayfinder-path/index.html below); the DM copy already shows every rune matched.
  src: TGB § Tumak/Rune structure, final; memory-canon (open-decisions § Voyage 007, first rune match)

- **[fix]** Wayfind cost: exhaustion by distance
  Page says "First Wayfind per long rest is free. Each further one adds a level of exhaustion." Locked at turn 267 (Korey's "Interpretation A"): each Wayfind costs exhaustion by distance: within 100 ft. 0, same planet 1, same system 2, cross-system 3. The network buys safety, not energy, so marks lower the mishap and never the exhaustion. A later proposal is a decide above.
  src: TGB § Tumak/Wayfind, Superseded (Wayfind cost)

- **[fix]** Wayfind odds: three outcomes, rare mishaps
  Page gives one mishap percentage per band and "Floor 5% during the arc, except within 100 feet and for the Heart once it awakens." Settled: mishaps are rare, and each band carries a chance of plain failure (Korey, turn 253). The roll is a d100 with three outcomes: mishap, failure, success (turns 254, 268). The floor is 1% in-network at most ranges and 5% cross-system (turns 258, 268), and a mishap stays possible in-network (turn 257). Replace the single percentages with the three-outcome bands from the mechanics spec `wayfinder-runekeeper-mechanics.md`. That file is not in the repo, so copy the numbers from the chat output.
  src: TGB § Tumak/Wayfind, Mishap and separation; TGB § Tumak/Documents produced

- **[fix]** Mishap result: two sanctuaries
  Page says "The twins separate, and the traveler arrives at a previous Wayfinder's resting place. On a group jump the party lands at that sanctuary with one twin; the other stays at the origin." Change to: the twins separate, and each lands safe at a different previous Runekeeper's resting place. Never home. On a group jump the party goes with the active twin. Korey replaced "the other stays at the origin" at turns 251–252. Use "Runekeeper", not "Wayfinder", for the resting places.
  src: TGB § Tumak/Mishap and separation, Superseded

- **[fix]** Perceive through a mark needs concentration
  The Marks row says "perceive through any of your marks (1 per long rest, one minute at one mark)". Add concentration (Korey, turn 259).
  src: TGB § Tumak/Marks

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

- **[add]** Two layers, one inscription
  In the fiction the Runechild essence runes and the Wayfinder runes are one inscription on Tumak's body. Mechanically they are two layers that share the fiction and never share resources. Tumak tracks three resources on three timescales: sorcery points, Runechild charged runes, and Wayfinder progression. There is no separate Wayfinder spend pool.
  src: TGB § Tumak/Arc framing (turns 211–220)

- **[add]** Rune Set menus: what qualifies
  Add to the menus section: a lower-level spell qualifies for a menu only if upcasting it to that set's tier gives a real benefit.
  src: TGB § Tumak/Wayscribe design (turn 132)

- **[add]** Why Mind Spike and Misty Step
  Augury and Longstrider overlap the Runechild's Runic Spells, so the Soul menu takes Mind Spike and the Walker menu takes Misty Step in their places.
  src: TGB § Tumak/Rune sets and per-rune boons (turn 212)

- **[add]** How the Rune Sets are offered
  When a set completes, offer its spell menu out of game; the menus are not on the player tracker (Korey, turns 187, 207). Design note: the sets are built around what a Runekeeper needs, not what a Wayfinder needs (Korey, turn 231).
  src: TGB § Tumak/Player tracker, Rune sets and per-rune boons

- **[add]** The safety valve: when the DM places a rune
  Add to § The safety valve: the DM places runes for player moments and engagement, for the two backfill runes for levels 1–2, and as a pacing nudge if Tumak has no complete set by level 5–6 (turns 259–260).
  src: TGB § Tumak/Rune structure, final

- **[add]** Many marks on one world
  Add to the Marks row: marking many places on one world is allowed and carries no penalty (Korey, turn 223).
  src: TGB § Tumak/Marks

- **[add]** Failed attempts and mishaps
  Add to Wayfind: a failed attempt keeps the twins inside Wildspace. Mishaps are never time-related.
  src: TGB § Tumak/Separation and attempts (turn 140)

- **[add]** The Twin Bond Compass
  The compass gives direction without distance, and it sharpens with proximity.
  src: TGB § Tumak/Separation and attempts (turns 142–143)

- **[add]** The sanctuaries, and a stock of them
  Lore for § Wayfind → Mishap result: the sanctuaries are where past Runekeepers went after passing on their runes. Each found a piece of home off-world and made one last Wayfind to it, a rite so that two Runekeepers never share the homeworld. A sanctuary is always safe, so a split twin is never in danger (Korey, turn 227). Prep: keep a stock of 5–10 previous Runekeepers' resting places.
  src: TGB § Tumak/Mishap and separation, Open

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

### wayfinder-path/index.html (player site, outside prime)

- **[fix]** ACTIVE_HALVES: Tu's half at 08
  The player tracker's ACTIVE_HALVES lists Wan's 08 and Tu's 16 only. Add `{ num: 8, bearer: 2 }`, Tu's half of the left sole, so 08 shows as matched. Tumak knows this match, so it belongs on the player page. (The DM copy, rules/wayfinder-path-dm.html, already shows every rune matched and needs no change.)
  src: TGB § Tumak/Rune structure, final (turn 328); wayfinder-path/index.html

- **[add]** Who gets the tracker link (DM note, kept in prime)
  Korey sends the tracker link only to Tumak's player, or puts it on the character sheet marked player-only (turn 162). Record this with the rules page's tracker links.
  src: TGB § Tumak/Player tracker

### aspects/index.html (player site, outside prime)

- **[decide]** Crocodile "Hold Breath"
  The aspect reads "You don't need to breathe", which goes past a crocodile's real trait (it holds its breath for 1 hour). Options: rename it Breathless and keep the wording; or keep the name and limit it to holding breath for 1 hour, matching the beast.
  src: chat-voyage-6-7-planning § Open

# New pages

### NEW: Languages (reference)

- **[add]** A home for invented languages
  Purpose: one DM reference for every made-up language in the cosmos, so names stay consistent. Voice: DM. First entry: the Vth'orama tongue, with its roots (vth- the whole of; ghath to hold and keep hold; n'- one who, one that is; -rod unbroken, that does not release; ulh the cull; -an negation; mer- to bear; enna near, inner; or- toward; amu home; -a a people), and the glossed words (Vth'orama, Vth'oramu, Vth'ghathu, Vth'ulhan, Vth'merru, n'ghathu, Enna Vth'ghathu, N'ghathrod). Add a section per language as others appear (Githyanki, chapter names for the Seekers).
  src: Korey, 2026-10-25 (round 4); factions/vthorama.html § Roots

### NEW: Fringe watcher of the cosmos (dossier, later)

- **[decide]** The sage who sees it coming
  A fringe figure who senses that something is wrong in the cosmos and has his own name for it, but no one believes him, in the vein of Ascher Mir. Who, where, and what he calls it can wait.
  src: Korey, 2026-10-25 (round 4)


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
  DM: the chamber is a failed survey for the heart's Atrium, and Tumak's runes surface there. Link to Colony Ops "How they search" (colony/index.html, Anadia well). Dunmarrow appears on no realms page yet.
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
  Its world, station or sphere is not set. Known around it: the H'Catha report ran Watcher → Hall → Fleet Corps → Academy, so the Hall is in reach of Caelestis's channels; Ezra trained about a century in the Hall of Sight and Sound (dossiers/ezra.html). Unreviewed: the Crossing Companion proposes that the Hall of Sight and Sound is the Hall of the Watchers. Rule that identity first, then place it: inside SPH-01 (the Watcher Transport contract is a graduation-grade job, so it should be reachable from Realmspace), or farther out.
  src: memory-canon § Key NPCs (Ezra); working/glyth-watcher.md § Where she fits; astral § Caelestis structure, § Open (Crossing Companion proposals); chat-cosmic § Rules and crew (Hall of Sight and Sound)

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
  src: TGB § Tumak/"The Becoming" handout; glossary/

- **[add]** The tale
  It opens: "Long ago, my hearts — before my mother's mother's mother". In it the thing that came looking is "a star with too many mouths" or "a name written wrong", and the world folds itself around its people and bestows runes on them as gifts. It closes: "The two of you have always been one to me." / "When the time comes — come home safe."
  DM note (prime only): this is Lunarfoot belief. The runes come from the Dissolution fragment, not from a gift.
  src: TGB § Tumak/"The Becoming" handout; memory-canon (Dissolution fragment model)

- **[add]** The Lunarfoot seal
  A crescent moon cradling a footprint, with two four-point stars for the twins. Also usable on the-runekeeper.html.
  src: TGB § Tumak/"The Becoming" handout

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
  Known: something kept under wraps at the edge of the system or the sphere, in the vein of Destiny's Reef, with two figures attached: a Mara Sov-style sovereign there, and an Osiris-style figure who warned and was pushed out. It is one of the pressures thinning Caelestis, and Tarto and Saerthe may hold part of the picture. Still to design: whether it sits at Realmspace's edge or SPH-01's edge (the perimeter ring of Hollis, Strake and Cairn is already at the sphere's edge), who the two figures are, and whether it ties to the dreadnought thread "between SPH-01 and the next sphere". Korey wants broad brushstrokes, not everything figured out.
  src: chat-cosmic § Open; memory-canon (open-decisions § Voyage 007 intent, "Destiny's Reef (Mara Sov–style and Osiris-style figures)"); astral § Open (Korey's open threads); framework § Open (dreadnought thread)

- **[add]** The patterns
  - Worlds state true facts they never explain (the Destiny's Reef effect).
  - Illithids are the campaign's Hive: the crew keeps finding signs that "they're here too" across worlds.
  - A modron march is the cosmos's Vex: a cross-world process whose sign is perfect geometry.
  - Names circulate before they are met (the Osiris pattern), told by sources that disagree. Zerathis is the first.
  - A delving culture of ruin exploration exists, like post-Aeor in Critical Role.
  src: chat-cosmic § Cosmos texture; memory-canon

### NEW: DM principles

- **[decide]** Contract categories
  Ruled: three or four categories by how a contract ties to the world (loose, Seekers-tied, personal, more as needed), and contracts surface from a world already in motion (STAGING round 4). Name the categories and set how many of each the board offers at a time.
  src: Korey, 2026-10-25 (round 4)


- **[add]** Situations, not scripts
  Put situations into the world and let the characters respond, or do nothing. Threads are not scripted toward an outcome.
  src: inbox/chat-crew-boogie-casey-sol.md § Casey (turns 101–107)

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
  The hub's "Wildspace Lore Bible" tile opens "Caelestis Wildspaces Lore Bible" (doc `1XjOAGPAWvDivwI2ThihwCG84ACk2eF_HKtzbxgbVTMQ`, about 3 KB). The project's synced Lore Bible is "Caelestis Campaign Lore Bible" (doc `1SLoMt7h9DboUQQlXZA61HukmnQBkjHKUNtLH2Qt4IMQ`, about 13 KB). Drive shows both created and last edited on 2026-04-12, untouched since. The Campaign Planning chat folded the Lore Bible into the DM wiki (turn 56), so neither is the live source now. Options: point the tile at the Campaign Lore Bible and relabel it; or retire the tile, since prime/ replaced both.
  src: hub.html; project synced sources; Drive metadata (checked 2026-10-25); chat-early-planning § DM wiki and naming (turn 56)

- **[fix]** The hub's Drive Root is right; memory's folder id is the rune images folder *(answered)*
  No page change. The hub's Drive Root tile opens `1suJFIN_LYDmRrkzjk3PkVv2pOmbJxE8r`, which Drive names "Caelestis". Memory's `1KuFCCLYKM2LuW6Hd4NEDq9GIsHL2L3Y5` is a folder named "runes" (created 2026-06-18), where Tumak's rune images live. Update memory's site-and-automation line: the Caelestis folder is `1suJFIN_LYDmRrkzjk3PkVv2pOmbJxE8r`, and `1KuFCC…` is the runes folder.
  src: hub.html; memory-canon § Tools and gotchas
  answered: Drive metadata for both ids (checked 2026-10-25); inbox/chat-crew-tumak-gregory-bartholomew.md § Tumak/Documents produced (rune images in folder 1KuFCC…)

- **[decide]** The Trackers band
  It says "The Tracker reads the record; the sheets beside it are edited in place." The Google Sheet tracker is frozen, and tracker alternatives are under review. Options: keep the Character Arc Tracker and Wildspace Tracker cards, or retire them. Follows the sheet decide in the Automation and tracker section.
  src: memory-canon § Automation pipeline; memory-canon (open-decisions, Plan 2026-10-25)

- **[fix]** The Ascension card keeps "the second key" *(answered)*
  No change. The card lists the sections of campaign/ascension/, and "The second key" there is the Rod route: a single fragment made whole (all seven Rod pieces, brought before the Atrium) forces the First Heart, which is why Vecna has never assembled a fragment and holds the whole Rod as his fallback. That stands whatever is ruled about the twins. The card's Atrium wording also stands (Atrium is answered in the Artifacts and vessels section).
  src: the Artifacts and vessels section (runekeepers-fragment decide)
  answered: campaign/ascension/index.html § The second key (Canon); inbox/chat-cosmic-campaign-structure.md § Cosmology redesign ("The near-complete Rod is a beacon, so Vecna has never assembled a fragment; the whole Rod is his fallback"), § Superseded (Aperture → Atrium)

- **[add]** A Vessels card under Setting
  The DM nav has Setting → Vessels, but the hub has no Vessels card. PR #71 added Factions and Vessels cards on the player side.
  src: prime/scripts/dm-nav.js; chat-voyage-6-7-planning § Documents produced

- **[add]** A Timeline card under Campaign
  The DM nav has Run → Timeline, but the hub has no Timeline card.
  src: prime/scripts/dm-nav.js

### Other pages outside the assigned folders

#### notes/PAGE-SHAPE.md

- **[fix]** Dossier tab grammar: PAGE-SHAPE's four tabs stand *(answered)*
  No change to PAGE-SHAPE.md. The four tabs Who they are / What they want / DM notes / Stat block are the current rule, with "What's hidden" folded into DM notes. The five-tab set from turn 460 (What it is / What it wants / What's hidden / Running it / Stat block) was replaced: PR #77, "the four-tab dossier shape", moved every dossier to four tabs and rewrote PAGE-SHAPE.md, and Korey merged it on 2026-10-18, after the cosmic chat's turn 460 (that chat's page-shape work merged as PR #60 on 2026-10-07 and PR #63 on 2026-10-11). The same item in the Repo and process section closes with this one.
  src: chat-cosmic § Wiki structure rules (turn 460)
  answered: repo history (PR #77, merged 2026-10-18: "Formatting pass across the DM wiki, and the four-tab dossier shape"; last change to prime/notes/PAGE-SHAPE.md)

- **[decide]** A motivation rubric for "What they want"
  The early master source doc gave every NPC four lines: **Wants** (specific, never "a happy life"), **Will do to get it** (the tools they will actually use), **Won't cross** (the line they keep), and **Current pressure** (what makes it urgent now, or nothing). Options: adopt it as the shape of the "What they want" tab (or its successor), keep it as a writing check only, or leave it out.
  Touches: PAGE-SHAPE.md, every prime dossier if adopted.
  src: chat-early-planning § Campaign Planning, Arc 1 close and planning method (turn 300)

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

- **[fix]** Retired names in the title examples
  "The Hollow" is retired: the Reach world is unnamed, and its remains are the black hole under the Core. The guide still names it at line 116 ("The Restorers' awareness of the Hollow is not known"), line 319 (a world-object title example) and line 566 ("*The Reach*, *The Hollow*"). Drop "The Hollow" from all three. Lines 310 and 564 also offer *Network* as a functional title; "the network" is retired, so swap in a live title. The anchor examples at lines 337 and 346 use `world-surveyor`; change them to `atlas`.
  src: memory-canon (campaign-canon: "The Hollow" name dropped; A.T.L.A.S. naming); chat-early-planning § Campaign Planning, Superseded

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
  The Campaign Board is an arc timeline with a "where are we" marker and parallel tracks; a Chronicle view was also planned. `prime/timeline/` exists (timeline.json with lanes and clocks); neither view is built under those names, and the Board exists only as claude.ai artifacts. Korey's latest steer: the timeline view should be a linear event timeline, not a list of bearings (bearings/timeline.html stays an unlinked draft), and for the cosmic timeline he is open to formats beyond the chapter-flow layout. Options: treat `prime/timeline/` as the Campaign Board and extend it with planned-against-actual per voyage; or build the Board and Chronicle as separate pages. See the New pages section, NEW: Campaign board.
  src: framework § Open; memory-canon (open-decisions, DM views; Locked 2026-10-25, timeline formats); chat-voyage-6-7-planning § Open ("Korey wants a linear event timeline"), § Superseded (timeline page unlinked)

- **[decide]** Where the weather of reality is tracked
  Settled: it is tracked on the campaign view (canon: "rarely seen early but must be tracked on the campaign view"), so a tracker row is out; the tracker shows the player record plus the DM overlay. timeline.json has no clock or lane for it yet. Still open: a timeline clock (one escalating meter, fits "escalating, ownerless pressure") or a timeline lane (dated events, fits strain that shows up as incidents). The weather also still needs its canonical section on a cosmology page.
  src: framework § Open; memory-canon (campaign-canon, "weather of reality")

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

- **[fix]** "Autognome" in V003 and V004 stays as history *(answered)*
  No sweep. V003 and V004 bullets and accounts keep "the broken autognome", because that is what the crew believed then; OSTEKK-6 states he is an automaton in V005, and every dossier and current page says automaton. State the rule in SESSION-RUN.md so it is not re-asked: earlier voyages keep the crew's belief at the time; correct the record and current pages only.
  src: automation § Open; memory-canon § Key NPCs (OSTEKK-6)
  answered: inbox/chat-automation.md § Voyage 5 runbook, Method (Settled: "Earlier voyages keep 'autognome' as history"). PR #61 asked "Say if you want them swept" and PR #62 repeated the default; Korey merged both without asking for a sweep.

- **[fix]** The search-repair table runs backwards
  `prime/notes/RESTRUCTURE-NOTES.md` maps wrong spellings to right ones. Line 348 reads "Saerthe → Saerth"; change to "Saerth → Saerthe". The roster line (line 225) lists "Saerth"; change to "Saerthe". "Sor'kur" should read "Sor'Kur" on lines 226, 341 and 347 (line 347: "Sorker → Sor'Kur").
  src: automation § Open; memory-canon (campaign-canon, spellings)

# Repo and process

## Page conventions

- **[decide]** Where the chart lives
  The chart is its own page off to the side. Embed it where it is used (the realms register, or a cosmos map on the cosmology page) as part of the refactor. Also retire its "claimed" and "primed" node states (staged).
  src: Korey, 2026-10-25 (round 2)


- **[fix]** Dossier tab names: keep the four tabs *(answered)*
  No change. The 36 live prime dossiers and PAGE-SHAPE.md use *Who they are / What they want / DM notes / Stat block*, and that is the current rule. Turn 460's five-tab set (*What it is / What it wants / What's hidden / Running it / Stat block*) is not the later ruling: it predates PR #77 ("the four-tab dossier shape"), which Korey merged on 2026-10-18. The PAGE-SHAPE principles hold: one set everywhere, labels never inflect, a page carries only the tabs it has content for. Same answer as the PAGE-SHAPE item in the New pages section.
  Touches: nothing.
  src: notes/PAGE-SHAPE.md; inbox/chat-cosmic-campaign-structure.md
  answered: repo history (PR #77, merged 2026-10-18, after the cosmic chat's page-shape PRs #60 on 2026-10-07 and #63 on 2026-10-11)

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

- **[add]** Writing rule: no triple short sentences
  Add to the prose rules in CLAUDE.md ("Prose: no stacked negations…") and to working/README.md § Writing staged entries and pages: "No three short sentences in a row for emphasis." Korey asks for AI-isms to be avoided in general; this is the pattern he named alongside stacked negations.
  src: BCS § Sol/Style (turns 866, 870)

## Record and schema

- **[decide]** Ships in the record
  SESSION-RUN.md files a ship as a place with Type `Vessel`, parented to where it was last seen, and parks simulated ships under the Simulation Deck with Status `Simulated`. That rule is the latest one Korey accepted for the record (Voyage 7 chat, 2026-10-25, Settled: "Every ship the crew encounters gets a record"). "Vessels are vessels" was ruled earlier, in the cosmic chat, for the DM wiki: vessels are their own register with entry pages, not realms and not artifacts. So the two do not yet conflict; the question is whether the refactor should carry the register split down into the record. Options: (a) keep ships as Vessel-type places in `data/locations.json` and split only the pages (`navigation-records/` ships move to `vessels/`); (b) give the record a vessel set or a `kind` field, a status vocabulary without "Simulated" on places, and a choice of whether a ship's whereabouts is a field or a parent link.
  Touches: scripts/data.js schema, data/locations.json, SESSION-RUN.md, navigation-records/, vessels/.
  src: notes/SESSION-RUN.md; working/repo-refactor.md; chat-voyage-6-7-planning § Table and story principles; chat-cosmic § Wiki structure rules ("Vessels are a register of their own")

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

- **[decide]** Crew Notes, now that search has shipped
  A shared space where players write their own notes (an Etherpad or a Google Doc linked from the site) was deferred until S.E.A.R.C.H. shipped, then to be weighed on its own. S.E.A.R.C.H. is live. The old `crew-notes/` page now only redirects to Crew Logs. Options: build it (and pick the tool), or drop it.
  Touches: the player nav (scripts/nav.js), a new player page or external link.
  src: chat-early-planning § Campaign Planning, Open; memory-canon (Crew Notes deferred)

# Player pages

Fixes to player-facing pages, including the Fleet Intelligence Archive (`restricted/`). These pages hold only what the crew could know; corrections must keep that boundary.

### restricted/wm-002.html

- **[fix]** The Bellwether Crow did not come home
  The archive has the Crow limping home by way of Strake. Canon: most of the crew did not return; Joffrey and a few survivors were let go. Rewrite the entry so the Crow is lost with most hands, in the archive's clipped voice, with nothing the crew couldn't know.
  src: inbox/chat-early-planning.md § Campaign Planning; memory canon (Bellwether Crow)

### restricted/sa-002.html

- **[fix]** Gregory's origin is not Cogfast Enclave
  The archive names "Cogfast Enclave" as Gregory's origin. Gregory is from Toril; he reached Caelestis on a cargo ship. Replace the Cogfast line, or redact it, so the archive does not assert a false origin.
  src: inbox/chat-early-planning.md § Campaign Planning; memory canon (Gregory)

### restricted/sa-005.html

- **[drop]** The out-of-sequence SJN-2417 entry *(answered)*
  Nothing to change. sa-005 carries no SJN-2417 entry: its memorial lists SJN-2401 to SJN-2408 in sequence, each name redacted, with the cartographer at SJN-2405 (line 419). The out-of-sequence entry was removed when Strake and Cairn swapped roles and Tarroway became alive on Strake. The remaining sa-005 item (why Tarroway's name is withheld) lives in the New pages section under restricted/sa-005.html.
  Touches: nothing.
  src: inbox/chat-early-planning.md § Campaign Planning
  answered: restricted/sa-005.html lines 415–422 (checked 2026-10-25); inbox/chat-early-planning.md § New campaign idea development, Superseded ("sa-005 lists SJN-2401 to 2408 with no 2417")
