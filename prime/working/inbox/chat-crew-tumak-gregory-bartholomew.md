# Chat sweep: Tumak, Gregory, Bartholomew

Five chats. Repo checks are targeted greps of `prime/` against `prime/crew/*.html`, `prime/rules/index.html`, `prime/rules/wayfinder-path-dm.html`, `prime/dossiers/`, `prime/realms/wayfinders-homeworld.html`, `prime/factions/runekeepers.html`, `prime/campaign/spine.html` and `prime/campaign/voyages/voyage-briefing-002.html`.

**Coverage:** the Tumak Swan chat has 336 turns (0–335). All of them are now read in full: 0–114 in the first sweep, 115–150 in a follow-up, 151–335 in a third pass. No **(sampled)** items remain. Turns 151–325 are mostly tracker plumbing (layout, CSS, image wiring); the lore and design decisions from them are below. The chat ends at turn 335 on an unanswered proposal about Wayfind cost.

**Newer canon overrides the older chats.** The repo now frames Tumak's homeworld around the **Dissolution fragment** and "three poles" (`realms/wayfinders-homeworld.html`, `dossiers/the-runekeeper.html`). The early Tumak chat framed it as "the world bestows runes as gifts" with "two discharges". Treat the repo as current where the two conflict.

---

# Tumak Swan
Source: https://claude.ai/chat/fa2979bd-9459-4eed-829c-d44bf6a5d6b0 · updated 2026-10-12

## Settled

### Backstory (player-written, Korey built on it)
- Halfling civilization. Each generation a sorcerer is born who is destined to lead. The child is left on a distant planet and must journey home to claim the title. — **in repo** (factions/runekeepers.html: "An exiled practitioner sent into the wider cosmos is given no map and no name")
- The prophecy named the Lunarfoot clan, which then had twins. Both were sent away with a note reading "come home safe". — **partly in repo**. Lunarfoot clan and both twins sent are in repo. The phrase "come home safe" is **not in repo**.
- Wan and Tu stack on each other's shoulders to pass as one person, Tumak Swan. The size complex is the origin of the bit. — **in repo** (crew/tumak.html "Twin halflings passing as one person")
- Tumak enrolled at the Academy as the quickest way home. — **not in repo** (inference: no grep hit)
- The homeworld name is unknown to Tumak on purpose: "A Wayfinder is given no map." — **in repo** (realms/wayfinders-homeworld.html "The world has no name, and that is canon")
- The table believes Tumak is one human. At the table, Korey addresses the twins as "left side" and "right side" so only the player knows which twin he means. — **in repo** for the secret (crew/tumak.html "Nobody at the table knows Tumak is two halflings"). The left/right addressing trick is **not in repo**.
- Mechanically the sheet says Variant Human, reading 5'7" ("long body, shorter arms, smallish head"). CHA 18 with Deception expertise explains why the disguise works. — **not in repo** (the repo says "Species: Human")

### Leader / Runekeeper concept
- Three layers: Wayfinder is the journey, Runekeeper is the station, the Voice is the purpose (turn 4). — **not in repo** as a three-layer frame
- Korey's Destiny "Awoken" analogy: the Runekeeper keeps the homeworld hidden. The Wayfinder goes out, and the runes learn about the outside universe so the protection can be updated on return. If the Wayfinder never returns, the protection decays as the universe changes. — **conflicts** in mechanism. The repo says "The ritual points the working; the Dissolution fragment's oscillation powers it" (realms/wayfinders-homeworld.html). The concealment held by one living practitioner is **in repo**.
- The Runekeeper dims as a successor rises, and their death is celebrated rather than mourned. — **in repo** for dimming (dossiers/the-runekeeper.html "Dimming is what the office is"). The celebration framing is **not in repo**.
- The current Runekeeper is dimming, so both twins were sent as a hedge because the elders were unsure which twin the prophecy meant. — **conflicts**. The repo says the fragment "began forming in Wan and Tu, which is why the twins were sent out" (campaign/spine.html), not elder uncertainty.
- Dual-return Zenith: the hiding was built for one Wayfinder. Two returning at once triggers a Zenith that resolves as either a miracle or a catastrophe (the world briefly flares like a beacon). — **conflicts** in mechanism. The repo says "When both arrive home, the three poles stall the cycle and the result is a Zenith — the act of going home is the act of ending the concealment."
- On return, the homeworld splits into a blessing faction and an omen faction, and the Monolith appears. — **not in repo** for Tumak specifically (no grep hit for "blessing faction"). The Monolith exists in the repo generally.

### "The Becoming" player handout (grandmother's tale)
- An in-world story told to the twins by their grandmother at some point in childhood, not on the night they left. — **not in repo** (no hit for "grandmother")
- It opens "Long ago, my hearts — before my mother's mother's mother". The thing that came looking is given as "a star with too many mouths" or "a name written wrong". — **not in repo**
- The world is the active agent: it folded itself around its people, chose a carrier, and bestows runes as gifts with every new star or danger. — **conflicts** (the repo puts the concealment on the order's ritual plus the fragment, and the dossier says "the order's terms … are wrong about the mechanism"). It can stand as in-world belief. (inference)
- The term "the Forgetting" was rejected and replaced with **"the Unfolding"**, an inherited name. — **not in repo** as a name for this. "Unfolding" appears in the repo only as heart-opening language (glossary). "Forgetting" appears in the repo with an unrelated First World meaning. Watch for a naming collision.
- Closing lines: "The two of you have always been one to me." / "When the time comes — come home safe." — **not in repo**
- Lunarfoot seal: a crescent moon cradling a footprint, with two four-point stars for the twins. — **not in repo** (no hit for "crescent")

### Soulknife and the first rune
- Tumak took Rogue 3 Soulknife between sessions 2 and 3. Soulknife is the first step of the Runechild manifestation, and the twins' souls are bound. — **partly in repo** (crew/tumak.html "Class: Rogue (Soulknife)"). Soulknife as the first rune is **not in repo**.
- The resonance comes from the twins: they have become so in tune that their homeworld noticed, rather than home reaching out first. — **not in repo**
- Sorcerer (Runechild) multiclass is planned at level 4. — **in repo** (rules "Shared magic: Sorcerer multiclass"; spine "Wayfinder + Runechild")
- The player decides how and when the psychic blade manifests. The DM does not describe it for him. — **not in repo**
- The V3 emergence beat was simplified to Wan's foot itching and Tu's shoulder tingling. The player drives the discovery, and the other PCs do not witness it. — **in repo** in substance (rules "Half-runes surface through small physical prompts: itches, tingles, heat")
- Pre-session rolls: Wan 8 = left sole, Tu 16 = right shoulder. The halves are unmatched, so no rune is complete and no constellation hint was given. — **in repo** (rules "V003 emergence: Wan took the left sole (08), Tu took the right shoulder (16)")
- V3 as played: Tumak slipped away to a bathroom. The left-sole mark was "curved calligraphy that suggested flowers, with half a star sitting above it". From outside, the table sees both marks on one body. — **not in repo** for the description

### Rune system (as of turn 114)
- Three layers: the **Record** (passive storage of cosmic data for the homeworld), the **Gift** (Soulknife and Runechild magic) and the **Path** (the way home). — **not in repo** under these names
- A literal Wildspace chart was rejected because it would lock the sandbox. The runes on the body are the chart. — **in repo** in spirit (the inscription is on the body)
- The completed runes make Tumak a transportation circle he invokes: "inscribed with the magical means to go home". — **in repo** (rules "Homebound is a Wayfind to the Heart")
- Runes must not always be tied to places. Level-ups and character moments also trigger them, so the player cannot settle on "rune = place visited". The realization arc runs from "it's a map" to "it's an inscription". — **not in repo** (inference)
- Each half-rune counts as an essence rune for Runechild purposes. A rune is complete for Wayfinder purposes only when both twins hold the same position. — **in repo** (rules "A position with both halves is matched and awake")
- Each twin rolls a d20 per level against his own diminishing pool. Both always gain a half at the same time, possibly at different positions. — **in repo** (rules "Wan and Tu each roll a d20 against their own separate diminishing pool")
- Narrative safety valve: the world can place a rune directly. — **in repo** (rules "The safety valve")
- Gregory as Tumak's navigator, and waypoints that overlap other PCs' arcs (Casey's Viren pull). — **not in repo** for Tumak (inference)
- Body-point list as of turn 87 (Forehead, hand tops, palms, foot tops, soles, Chest, upper/lower back, shoulder blades, shoulders, collar bones, thighs). Each was mapped to one of 20 generated rune images. — **conflicts**. The repo uses a later list: 16 rollable positions including Tongue and Stomach, positions 17–19 bestowed, 20 = Heart. See Superseded.
- Rune boons are unique per body part. The activation cost is 1 Psionic Energy die **or** 1 sorcery point, specific to this character (turn 110). — **conflicts** (the repo lists "per-rune boons" without defining them. Korey later removed per-rune boons, turns 215–221.) Revised at turns 115–119, see Superseded.

### Wayscribe design (turns 115–150, read in full)
- Twenty unique active boons was judged too much (turn 115). Korey's fix: the matched runes themselves are the resource, spent on use and recharged (turns 116–118). — **in repo** in substance (rules "Matched runes … power the four Wayscribes")
- Design rule: each group ability is a symbolic extension of its body region. The hands reaching at a distance suggest Telekinesis (turns 120–121). — **in repo** in substance (rules flavor "The world grasps through you")
- Korey: Tumak is an extension of his world, and the world reaches out *through* him (turn 126). — **in repo** (rules "The world perceives through you")
- Group abilities must be existing published 5e spells (5e.tools, partner content allowed) so there is no homebrew to track (turns 124, 128). — **in repo** in substance (all menu entries are published spells)
- Tier caps: Heart 2nd, Hand and Foot 3rd, Core 5th (turn 132). — **in repo** (rules "Heart group · 2nd level", "Core group · 5th level")
- A lower-level spell qualifies for a menu only if upcasting it to the group's tier gives a real benefit (turn 132). — **not in repo**
- Korey: no entity summoning in the Core group. Movement and manipulation fit; Conjure Elemental was cut (turn 132). — **in repo** in substance (Vessel menu has no summons)
- When a group completes, the player picks one spell from a menu of at most five, permanently. The world's reach is filtered through Tumak's own experience, so the picks build what kind of Wayfinder he is (turns 130–132). — **in repo** (rules "The player then picks one spell from that Wayscribe's menu, permanently")
- Group logic: Hands and Feet are 4 each, Heart/Mind is small, and the Core is everything that connects and is the largest (turn 126). — **in repo** (Soul / Maker / Walker / Vessel; group sizes later changed, see Superseded)
- Recharge rolls per group (Model 2), and the player chooses which spent runes refresh (turns 125–126, 140–141). — **in repo** (rules "Wayscribe recharge"; see the late conflict on the dice)
- After a week or more of downtime, every rune refreshes without rolling (turns 140, 145). — **not in repo**
- Pacing Rule, light version: a roll on a Core position rerolls once while that twin has unresolved smaller groups (turns 134–135). — **in repo** (rules "The Pacing Rule")
- Exhaustion throttle: the first group use is free and each further use adds a level (turns 144–145). — **in repo** (rules "each further casting adds a level of exhaustion")
- Korey wants a stark, visible trade-off so other players do not feel Tumak has too much (turn 144). — **not in repo** (design intent)
- "Wayscribes" is Korey's name for the groups (turn 146). — **in repo**. Korey later dropped the term on the player page for "Rune Sets" (turn 173); the repo still uses it.

### Separation and attempts (turns 140–143)
- A mishap separates only one twin. The other stays with the crew so the player stays at the table (turn 142). — **in repo** (rules "the other stays at the origin")
- A separated twin runs at reduced capacity. Korey floated half HP, half spell slots and possibly half skills (turn 140). — **not in repo**
- The crew gets a way to home in on the missing twin: the Twin Bond Compass, direction without distance, sharper with proximity (turns 142–143). — **in repo** for the Compass. The proximity table is **not in repo**.
- Failed attempts keep the twins within the Wildspace setting, and mishaps are never time-related (turn 140). — **not in repo** as a stated rule
- Attempts cost runes and rest, so he cannot try every day (turn 140). — **in repo** in substance (rules Wayfind cost)

### Runekeeper lore and pressure (turns 140–150)
- The Runekeeper is the only permitted way in and out of the homeworld. Leaving is rare and only for specific reasons, the Becoming among them (turns 140, 142). — **not in repo** (no hit for "in or out")
- The current Runekeeper personally sent Tumak away (turn 142). — **not in repo** (the repo says only "Wayfinders are sent out")
- The Runekeeper's dimming is the accumulated cost of using the door over a long life. It worsens with age, which is why a new Runekeeper is needed (turns 142, 148). — **conflicts** (dossiers/the-runekeeper.html "The fragment is leaving him and forming in Wan and Tu")
- Korey: Tumak's arc lacks pressure. The Runekeeper's fading is the reason he must go home now, and it should push him to start attempting (turn 148). — **partly in repo** (the dossier shows the dimming; its use as Tumak's pressure is not stated)
- The pressure reaches the player through memories of his grandmother and of home, such as a smell or how the trees look (turn 150). — **not in repo**
- Homeworld sensory anchors (arc doc v3): a luminous haze like light beneath water; tall pale trunks with smooth, glasslike bark spiralling toward one unseen point; warm earth after rain and sap touched by lightning; people who move with certainty. Korey still has to work out what the planet looks like. — **not in repo** (no hits for "haze", "bark", "sap")
- Reference note: Tumak's arc sits between *The Giver* and *Avatar* as inspirations (turn 150). — **not in repo**
- Tracker brief: informative rather than interactive, styled to sit in the site like Casey's page. Columns per twin, numbers 1–20, which half appeared, the full-rune benefit, the Wayscribe and its benefit, and the capstone (turn 150). — **in repo** (wayfinder-path/index.html)

### Arc framing (turns 151, 211–214)
- Runechild → Wayfinder → Runekeeper is one continuous arc. Tumak was born or chosen a Runechild (his sorcery, his in-world answer to the backstory), he is now a Wayfinder (the journey), and he becomes the Runekeeper when he returns (turn 211). — **partly in repo** (crew/index.html "Wayfinder and Runechild"). The three-stage arc as one story is **not in repo**.
- Narratively the Runechild essence runes and the Wayfinder runes are one thing on his body. Mechanically they stay two separate layers that share fiction and never share resources (turns 211–220). — **not in repo** as a stated rule
- Three resource layers, three timescales: sorcery points, Runechild charged runes, Wayfinder progression. No separate Wayfinder spend pool (turns 214–216). — **not in repo**
- Rune rolls happen per character level, not per class level, so the multiclass (Rogue 3) cannot cap the inscription (turns 219–221). — **in repo** (rules "At each character level")
- The Giver and Avatar are the tonal reference for the grandmother-and-memory sequences. Noted in the arc doc v3 Pressure section (turn 151). — **not in repo** (confirms the earlier turn-150 item)

### Rune structure, final (turns 164–170, 229–258)
- Heart is the highest roll and the chest is renamed "Heart" (turn 164). — **in repo** (rules "20 Heart Soul")
- Pairs are grouped by number so sets read cleanly; the two canon anchors hold: #8 Left sole and #16 Right shoulder (turns 169–170, 233). — **in repo** (rules positions 08 and 16)
- Final 20: 16 rollable (01–04 hands Maker, 05–08 feet Walker, 09 Forehead and 10 Tongue Soul, 11–16 Left shoulder, Lower back, Stomach, Left thigh, Right thigh, Right shoulder Vessel), 17–19 bestowed by the DM, 20 Heart. Eyelids were tried and cut; thighs came back (turns 233, 257–258). — **in repo** (rules "The twenty positions")
- Wan always carries the left half and Tu always the right. Each twin only ever holds halves (turn 229). — **in repo** (rules "Wan always carries the left half")
- Because neither body holds a whole rune, separation locks every rune ability with no extra rule (turns 229–230). — **in repo** (rules "separation locks the Wayfinder abilities without any rule saying so")
- Heart is pre-matched from birth, hidden from table and figure, and Tumak does not know he carries it. Korey may not reveal it in game yet (turns 255, 269). — **in repo** (rules "Hidden")
- Heart may be the current Runekeeper's personal rune, and Tumak may make his own Heart-rune when he returns home (Korey, turn 257). — **not in repo** (only working/BACKLOG.md)
- d20 roll results: 1–16 resolve that position; 17, 18 and 19 reroll; 20 lets the player choose; a duplicate rerolls (turns 257–260, design doc). — **conflicts** (rules "17–20 The player chooses any position still unresolved"; "A position already resolved … Treated as a choose result")
- Up to four runes are at DM discretion: two to backfill levels 1–2 and the bestowed ones, given for player moments and engagement or as a pacing nudge if Tumak has no set by level 5–6 (turns 259–260). — **in repo** in substance (rules "The safety valve"). The two-rune backfill is **not in repo**.
- Korey's late call: 17, 18 and 19 should be **Anchors**, fixed places Tumak goes to, so the arc leans into navigation and working with Gregory. What they grant is undecided (turn 326). — **conflicts** (rules "Runes 17, 18 and 19 are unassigned and bestowed at story moments")
- Tumak has now matched his first rune: the left sole, #8 (Korey, turn 328). — **conflicts** (rules "Two unmatched halves; no rune complete"; `wayfinder-path/index.html` ACTIVE_HALVES has no Tu half on 08)

### Rune sets and per-rune boons (turns 165–186, 209–241, 330–331)
- Korey rejected "Wayscribe" and "Waypost" for the player page and named the groups **Soul Runes, Maker Runes, Walker Runes, Vessel Runes**, no leading "The" (turns 164–180). — **in repo** for the set names. The repo still uses "The four Wayscribes" as the group term.
- Soul is the metaphysical mind-and-heart set (Korey, turn 164). — **in repo** in substance (flavor "The world perceives through you")
- Per-rune +1 skill, attack and save boons are removed. Tumak already tracks sorcery points, Runechild charges and psionic dice (Korey, turns 215, 221). — **conflicts** (rules "Matched runes carry the per-rune boons")
- Augury and Longstrider overlap the Runechild's Runic Spells, so Soul got Mind Spike and Walker got Misty Step (turn 212). — **in repo** for the menus. The reason is **not in repo**.
- Wayscribe spell: when a set completes, Tumak picks one spell. First cast per long rest is free; each further cast costs 1 exhaustion. The d2/d4/d4/d10 recharge dice are dropped (Korey, turns 330–331). — **conflicts** (rules still list "Wayscribe recharge: At dawn: d2 (Soul), d4 (Maker), d4 (Walker), d10 (Vessel)")
- Korey reframed sets around what a Runekeeper needs, not what a Wayfinder needs (turn 231). — **not in repo**

### Marks (turns 223–236, 259–260)
- Each completed rune can be placed as a mark on a place. It persists. Korey's framing: each mark is a sensor the world puts out into the universe, its patch of information so it can protect itself (turn 223). — **not in repo** (no hit for "sensor" in the Tumak sense)
- The world needs "enough" marks to protect itself, and the number stays ambiguous (Korey, turn 223). — **not in repo**
- Marks give Tumak agency and a goal beyond going home (Korey, turn 223). — **not in repo**
- Placing takes a 10-minute ritual and physical presence; reclaiming is free but loses the position (Korey, turns 235, 330). — **in repo** (rules "place a mark (10-minute ritual, physical presence), reclaim a mark (free)")
- Perceive through a mark: 1 per long rest, 1 minute, and it should be concentration (Korey, turn 259). — **partly in repo**. Concentration is **not in repo**.
- Marking many places on one world is fine; Korey will not penalize it (turn 223). — **not in repo**

### Wayfind (turns 239–267)
- Wayfind always teleports to a mark, never to an unmarked place (Korey, turn 241). — **in repo**
- Within 100 ft of a mark the jump is free and safe; beyond 100 ft he rolls for mishap (Korey, turns 241–243). — **in repo** in substance (rules floor "except within 100 feet")
- Wayfind is an action (Korey, turn 247). — **in repo**
- Mishap scales with distance like Teleport, not with rune count (Korey, turn 247). — **in repo** (rules "Mishap by distance … rising with range")
- Jumping from one of his marks lowers the mishap: a little for another set, more for the same set. Applies only when Tumak stands at a mark when he casts (turns 241–247, 262). — **conflicts** in detail (rules "−10% if the mark was placed by a rune from another set" sets no standing-at-a-mark condition)
- Mishap floor: 1% in-network at most ranges, 5% for cross-system (turns 258, 268). — **conflicts** (rules "Floor 5% during the arc")
- Out-of-network jumps are allowed at full risk (turn 246). — **not in repo** as a stated rule
- Passengers = floor(awakened ÷ 2), max 8, Plane Shift parity at the end (Korey, turn 249). — **in repo** (rules "floor(awakened ÷ 2), maximum 8")
- Exhaustion scales with distance and not with network: within 100 ft 0, same planet 1, same system 2, cross-system 3. The network buys safety, not energy. Korey chose this ("Interpretation A") at turn 267. — **conflicts** (rules "First Wayfind per long rest is free. Each further one adds a level of exhaustion")
- Mishaps should be rare, with a banded chance of plain failure (Korey, turn 253). The d100 three-outcome bands (mishap / failure / success) went into the design doc (turns 254, 268). — **conflicts** (repo has one mishap percentage per band)
- Heart, once awake, is a home anchor with no range limit and no mishap. Post-campaign, all mishap drops to 0 (Korey, turn 245). — **in repo** (rules "Homebound"; "After the arc Mishap drops to 0%")

### Mishap and separation (turns 225–258)
- A mishap always separates the twins and drops them at a previous Wayfinder/Runekeeper's resting place, never home (Korey, turns 225, 235). — **in repo** (rules "Mishap result")
- These sanctuaries are where past Runekeepers went after passing on their runes: a piece of home found off-world, one last Wayfind, a rite so two never share the homeworld. They are always safe, so a split twin is never in danger (Korey, turn 227). — **not in repo** as backstory (rules say only "a previous Wayfinder's resting place")
- Both twins land safe at *different* sanctuaries; the party goes with the active twin. This replaced "the other twin stays at origin" (Korey's objection, turns 251–252). — **conflicts** (rules "the other stays at the origin")
- Mishap stays possible even in-network, but rare (Korey, turn 257). — **in repo** (floor)
- Separated twins split resources about in half (spell slots, sorcery points, charges, psionic dice); both keep the full spell list (Korey, turn 257). Exact rules deferred. — **not in repo**
- The twins reunite through the campaign, via the crew or other means. At the table only the twin with the crew is played; a lower-level one-shot with the separated twin is possible (Korey, turn 227). — **not in repo**

### Player tracker (turns 151–325)
- The player page reveals only what Tumak knows: unrolled positions and set spells are hidden, body part shows at half, Wayfind and Homebound labels are hidden until unlocked (Korey, turns 187–206). — **in repo** (wayfinder-path/index.html)
- Final header: "A Wayfinder's Path" / "To Becoming the Runekeeper"; locked rows read "the path is uncharted" (Korey, turns 316, 324). — **in repo** (wayfinder-path/index.html)
- Korey plans to send the tracker link only to that player, or put it on the character sheet marked player-only (turn 162). — **not in repo**
- Three views: Tumak, Wan, Tu, each with front and back; palms on the back view (Korey, turns 160–162). — **in repo** (tracker view tabs)
- Spell choices are offered out of game when a set completes (Korey, turn 207). — **not in repo**

## Superseded
- Runekeeper as path-holder, name-giver of children (each child receives a true name; Wan and Tu each got half a name) and route-renewer → replaced by the concealment-keeper model (turn 8), and later by the order's ritual plus the Dissolution fragment (repo).
- "The Forgetting" → "the Unfolding".
- Handout framed as the night before departure, told by an unspecified teller → told by the grandmother in childhood.
- "It is correct" as the response to a Runekeeper's death → "We do not mourn this. We sing."
- Runes written by the people → runes bestowed by the world (turn 26). This is itself superseded in mechanism by the repo's fragment model.
- First Reach drafts with blades and forehead runes → chest runes with chest-to-chest contact and a five-star glimpse ("three close, one apart, one at the far edge") → replaced by rolled positions, the itch/tingle prompt and no glimpse until the first match.
- "Trials" → waypoints the world charts itself against → the inscription / transport circle.
- Asymmetric pairing of body parts → halves must match at the same position.
- Six fixed runes paced to level 16 → one per Sorcerer level (up to 17), then the d20 pool, then the 16 + 3 + Heart structure.
- Invocation as a percentile chance (<3 runes none, 3=10%, 6=30%, 9=50%, 12=70%, 15+=90%) with teleport-style mishaps → Wayfind to placed marks plus Homebound to the Heart (turns 223–245).
- Body-point lists: several revisions (Heart and Chest, cheeks, throat, stomach, hand tops, collar bones, shoulder blades) → turn-87 list of 20 → the repo's list of 16 (Tongue and Stomach added; collar bones, upper back and shoulder blades dropped).
- Rune-image mapping (Forehead #4 crescent moon, Chest #11 sunburst, Left sole #12 twin crescents, Right shoulder #9 flowing spiral, and so on) → one full image per position number, `rune_N.png`, which the tracker splits into Wan's and Tu's halves (turns 273–291).
- Rune boons: Inspiration on match → one-time unique boons → PB-shared daily pool → 1 sorcery point → 1 PE die **or** 1 sorcery point (turn 110) → removed entirely (turns 216, 221).
- Set rewards: spell known plus a free daily cast (turn 222) → spell joins spells known only, "Option B" (turn 227) → per-set passives (Soul +5 passive Perception/Insight, Maker Mending, Walker +10 ft, Vessel +5 HP) and Runekeeper-themed passive-plus-ritual gifts (turns 228–232) → one ability per set, using that set's marks (Perceive / Wayfind / Reshape / Anchor; turns 237–238) → sets only lower Wayfind mishap between same-set marks (turns 239–244, design doc) → Wayscribe spell with first cast free, then exhaustion (turns 330–331).
- Wayfind gated behind completing Soul and Walker (turn 234) → rejected; Wayfind progresses with runes instead (Korey, turn 239).
- Wayfind range growing with rune count (100 ft / 1 mi / 100 mi / world / system / anywhere; turns 240–242) → flat 100 ft base, mishap beyond (Korey, turn 243) → reach gate by matched count proposed again (turn 333, see Open).
- Wayfind mishap scaled by rune count, stepped (turns 245–246) → scaled by distance (Korey, turn 247).
- Wayfind cost: 1/long rest plus 2 exhaustion automatic (turns 224–244) → first free, each further +1 (Korey, turn 247) → exhaustion by distance band with network −1 (turn 262) → exhaustion by distance band only, network buys safety (Korey, turn 267) → per-band cost beyond one daily free (proposal, turn 335; see Open). The repo still carries the turn-247 model.
- Mishap subtable (twin separation / wrong mark / sanctuary / astral drift; turn 234) → one fixed outcome: twins split to sanctuaries (Korey, turn 235).
- Homebound diamond cost (5,000 gp, after Gate; turns 218–222) → Homebound is Wayfind to the Heart, no extra cost.
- Heart auto-completes when the other runes match (turn 225) → "two free runes" problem (Korey, turn 227) → Heart pre-matched from birth and hidden (turns 228, 236).
- 20 rollable runes → 17 (16 visible plus hidden Heart, with eyelids; turn 233) → 20 total with 16 rollable, 3 bestowed and the Heart (Korey, turns 255–257).
- Nat 20 on a rune roll: reroll (turn 227) → choose which rune to resolve (Korey, turn 229).
- Spell menus visible to the player → removed from the player tracker; offered out of game (Korey, turns 187, 207).
- "Tumak's chest glows faintly from day one" → Heart fully hidden.
- Scale-back options for 20 boons (A: 6–8 iconic runes, B: zone boons, C: no active boons) and a flat d4 dawn die → Korey's pool-size die (pool of 20 rolls d20) → per-group recharge dice (turns 115–127).
- Per-rune +1 boons: 18 runes each +1 to one skill, one +1 attack, one +1 saves, with a body-part mapping (Forehead Insight, Chest Intimidation, left sole Stealth, right shoulder attack rolls, lower back saves, and so on; turns 118–135) → per-rune boons removed (Korey, turns 215–221). The repo still says "Matched runes carry the per-rune boons".
- Five groups of four (Hands, Feet, Heart, Spine, Reach) → Hands 4 / Feet 4 / Heart-Mind 2 / Core 10 (turn 127; "Reach" felt awkward) → the repo's Soul / Maker / Walker / Vessel over 16 rollable positions.
- Group abilities at full 5th-level power (Telekinesis, Dimension Door, Truesight) → 3rd-level homebrew versions with level escalation → published spells only, escalation dropped (turns 121–124).
- Option A (even 5×4, all 2nd–3rd level) vs Option B (small groups plus one large 5th-level capstone group) → Option B with Model 2 recharge (turn 126).
- Menus of 7–12 spells per group → five per group (turn 132). The turn-133 menus had Augury (Heart) and Longstrider (Foot) → the repo has Mind Spike and Misty Step in those places.
- Capstone Plane Shift (turn 137) → Gate, 9th level, all 20 charges, +4 exhaustion, targets home only while off the homeworld and any world once home (turns 138–143) → Homebound, a Wayfind to the Heart (repo).
- Reach for Home: a d20 table from 10 matched runes → a d100 table modeled on Teleport, spending all matched runes, with a d10 mishap subtable (Twins Sundered, Catastrophic Drift, Inscription Frays, the Continuum Notices, Echo Through) (turns 137–141) → Wayfind to placed marks with mishap by distance (repo).
- Gate fatigue as halved recharge dice for a week → +4 exhaustion (turns 143–145).
- Both twins sent to separate worlds on a mishap → only one twin is pulled away (turn 142) → one twin stays at origin (turn 248) → both twins land safe at *different* sanctuaries (Korey's concern, turns 251–252).
- Group names Bearings, Quarters, Mantles, Wayposts, Voices, Inscriptions → Wayscribes (turn 146) → Heart/Hand/Foot/Core Wayscribe → Waypost (turn 165) → Soul / Maker / Walker / Vessel Runes (Korey, turns 167–180).
- Tracker columns labelled "one" and "two" to keep the twins' names off the public site (turn 150) → "Bearer 1 / 2" → the twins' names with "left" / "right" under them (Korey, turns 162–167, 284).
- Tracker titles: "Tumak's Inscription" → "The Wayfinder's Body" / "Marks of the World" → "The Wayfinder's Path" / "The Long Returning" → "Wayfinder's Path" / "Becoming the Runekeeper" → "A Wayfinder's Path" / "To Becoming the Runekeeper" (Korey, turns 164–176, 316).
- Tally labels: Names spoken / Awakened Runes / Reach for Home / The Gate → Awakened Runes / Voices / Wayfind / Homecoming → Runes / Rune Sets / Wayfind / The Crossing → Homebound (Korey, turns 171–181). "this path sleeps" → "the path is uncharted" (turn 324).
- Anatomical silhouette tracker → stick figure plus table → figure with rune art on it and front/back toggle (Korey, turns 152–158).

## Open
- Tiered mishap consequences by band (Touch none; Local fizzle plus 1 exhaustion; Planetary overshoot 1d10 miles; System short separation on the destination world; Near wildspace sanctuary plus twin at origin; Deep wildspace two sanctuaries). Proposed at turn 331 after Korey said a mishap at level 4 "would be really bad"; he did not confirm it.
- Reach gate by matched count (1–3 Touch ≤100 ft; 4–6 Local ~10 mi; 7–9 Planetary; 10–12 System; 13–15 Near wildspace; 16 Deep). Beyond reach fails at no cost; marks can be placed at any distance. Proposed at turn 333 after Korey's H'catha example ("Something has to scale the wayfind distance"). Korey moved on to cost without objecting (inference: leaning yes).
- Wayfind cost (turn 335, unanswered): one free Wayfind per long rest in any band, Touch always free, otherwise exhaustion equal to the band (1–5). The chat ends with three questions: does the daily free apply to every band, is Homebound fully free, and do Anchors pay full cost, one band less, or nothing.
- Anchors (17/18/19): what they grant, whether one is pre-set, and whether Anchor Wayfind is guaranteed, cheaper or modestly safer. Claude's Hearth / Threshold / Horizon frame and "Gregory's calibration finds anchorable sites" loop were offered, not accepted (turns 327, 333).
- Wayscribe spellcasting ability: CHA, save DC 8 + proficiency + CHA, cast at the set's tier with no upcasting (proposed turns 329, 331; no reply).
- Mark lifecycle rulings (objects, willing creatures, anti-magic, Bag of Holding) and Perceive details (sight and hearing only, own senses blinded) were proposed at turn 329; no reply.
- Reunion options for a separated twin (travel, Compass pull, or one return Wayfind from the sanctuary) were proposed at turn 329; no reply.
- The distance-band thresholds behind the mishap percentages (Touch ≤100 ft / Local / Planetary / System / Near wildspace / Deep wildspace proposed at turn 329).
- Whether to keep the early-home door (a natural 20 on a d20 before declaring a target).
- A stock of sanctuaries: 5–10 previous Runekeepers' resting places.
- How resources split when the twins separate (HP, death, consumables).
- Whether Sending works between separated twins.
- How the Heart cycle resolves: does Tumak make his own Heart-rune, and does he meet the previous Runekeeper?
- The Runekeeper's name (also open in the repo).
- Half of each rune vs splitting the total runes between the twins (turn 88; the assistant's reply was empty). Effectively answered by the repo's rule that Wan takes the left half and Tu the right.
- What the inscription completing costs Tumak (open in the repo).
- The retroactive backfill: two more rune-halves per twin for levels 1–2, to be dropped in between V3 and V5 (turn 134). Korey restated "give him two runes as well" at turn 259. **Not in repo.**
- Bestowed-rune sets: Claude suggested at least one be Soul, since only Forehead and Tongue are rollable Soul (turns 258, 268). No decision.
- When and how Heart is revealed in game (Korey, turn 269: "I may not reveal this in game yet").
- Network bonus math: whether the source mark must be where Tumak stands (chat) or which set placed the target (repo wording).
- 2014 or 2024 exhaustion rules (turn 145).
- A hard clock or a soft clock for the Runekeeper's fade (arc doc v3).
- How to play out a lost twin: off-screen montage, a solo one-shot, or shared visions (turn 143).
- An optional spell-inscription track separate from the runes (turn 137).

## Documents produced
- `the-becoming.html`: player handout, HTML with print-to-PDF styles, Lunarfoot seal. At /mnt/user-data/outputs in the chat. **Not in repo.**
- `tumak-swan-arc.md` (turn 41) and `tumak-swan-arc-v2.md` (turn 97): replacement text for the Drive doc "Tumak Swan" (id 1JxGhqzpAf0nZ46z6cBYJzjQYw4bqorw_PAAzCfI88WI). Korey was to paste it in by hand. `tumak-swan-arc-v3.md` (turn 149, at /mnt/user-data/outputs in the chat) is confirmed: the full Wayscribe design, Reach for Home, the Gate capstone, the Twin Bond Compass, a new Pressure section and a five-phase roadmap, for paste into the same Drive doc. Turn 151 renumbered its body table and added the Giver/Avatar note. It still carries per-rune +1 boons and the Gate capstone, both since dropped. **Not in repo** as files. Parts reached crew/tumak.html and the rules.
- Rune image set: 20 full images `rune_1.png`–`rune_20.png`, plus pre-split `rune_8_1/_2.png` and `rune_16_1/_2.png`, in Korey's Drive folder 1KuFCCLYKM2LuW6Hd4NEDq9GIsHL2L3Y5 (turns 273–291). **In repo** as lh3 links in `wayfinder-path/index.html` and `prime/rules/wayfinder-path-dm.html`; the image files themselves are not in the repo.
- `tumak-inscription-tracker.html`, "A Wayfinder's Path" (turns 151–325, many revisions). **In repo** as `wayfinder-path/index.html` (player) and `prime/rules/wayfinder-path-dm.html` (DM).
- `tumak-inscription-tracker-simulation.html` (turn 289): a copy with seeded random rolls (seed 42) for levels 4–11, ending at 7 matched runes. Test file. **Not in repo.**
- `wayfinder-runekeeper-mechanics.md` (turn 268, revised turn 270): the full mechanics spec (structure, d20 table, marks, set network, Wayfind d100 bands, distance exhaustion, passengers, mishap to two sanctuaries, separation resource split, Homebound, DM tools, open items). **Not in repo** as a file. Part of its content is in `prime/rules/index.html#runekeeper`; several later decisions in it (distance exhaustion, two sanctuaries, 17–19 reroll, no per-rune boons) did not reach the repo.
- A 4-column Wan/Tu tracker table and the turn-87 body-point list. Superseded.

---

# Tumak's inscription tracker
Source: https://claude.ai/chat/63025f6e-05b3-45ec-8132-72afa003a3ab · updated 2026-10-12

## Settled
- The DM copy of the tracker was built in the chat "Organizing a sprawling campaign framework" (https://claude.ai/chat/29eef2ad-72af-41fe-adc3-f5003d9d61f2, active September 18). It shows every half-rune matched for both twins, all four Wayscribes complete and the Heart revealed. — **in repo** (prime/rules/wayfinder-path-dm.html "DM copy — every rune matched")
- It is linked from the Rules page. — **in repo** (rules/index.html "the unlocked DM version")
- The original player tracker came from the Tumak Swan chat. — **in repo** (wayfinder-path/index.html)

## Superseded
- None.

## Open
- None.

## Documents produced
- Artifact "Wayfinder's Path — DM copy" (made in the other chat). **In repo** at prime/rules/wayfinder-path-dm.html.

---

# Gregory
Source: https://claude.ai/chat/d8b6c41c-9238-4ab5-807e-fc8ee79d03fb · updated 2026-06-12

## Settled

### Calibration
- The DM offers Calibration when the tug is narratively right, and Gregory may decline. — **in repo** (crew/gregory.html "You initiate, always")
- The roll is Intelligence (Arcana) with no declared DC. Results run Static / Weak signal / Clear bearing / Sharp lock. — **in repo**
- Failure is static: the signal is real but unreadable. No misdirection. — **in repo**
- Clues stack, and three or four solid clues locate an anomaly. — **in repo**
- Latchling thresholds for a +2 modifier: 1–7 static, 8–12 weak, 13–17 clear, 18+ sharp. — **not in repo**
- Built for Success (d4 after seeing the roll, 2 per long rest) pairs with Calibration. — **in repo**
- Detect Magic (ritual) near the Latchling reads strangely, which is itself a clue. Navigator's and tinker's tools add flavor. — **not in repo**
- His flaw, "I follow orders and trust everyone at their word", makes Rindle's denials hit hard. — **in repo** in substance (dossiers/rindle-gearloft.html "he trusts people at their word")

### Latchling (Anomaly 01)
- Kept: Gregory's prologue Mending on a latch may have been the local condition that let the ripple resolve into the Latchling. The answer stays causal and ambiguous. — **in repo** (crew/gregory.html "his prologue repair of a latch may have been the local condition")
- The Latchling recognizes Gregory as familiar. Its visible reaction to him is what cracks Rindle's secrecy. — **partly in repo**. Recognition is in the repo ("It has already noticed him"). The "goes to him, cracks Rindle" beat is **not in repo**.
- Clue lists for the weak, clear and sharp tiers. — **in repo**. The Clear tier still says "sky dock, aligner berths", which **conflicts** with the Sea Dock move (see the Revising chat).
- Rindle sits outside Calibration and appears when someone physically looks. — **in repo**
- Calibration names the term "Existence Axiom" ripple. — **not in repo** (the repo says "the ripple" and "paracausality". Possibly superseded. inference)

### Abjurer level-up scene (level 3)
- Gregory chose Abjurer. The scene is Gregory rereading a journal kept by Gregory Prime (his maker). An entry lands differently after the last voyage. — **not in repo** (no hit for "Gregory Prime" or "journal")
- Final journal entry (accepted, turn 29): "Mended the brass aligner a fourth time tonight — but this time, before it could crack again, I braced the seam from the inside first. Gregory held the casing steady while I worked. Steady hands. He's good at that. / Funny thing. I've spent my whole life fixing what's already broken. Tonight I caught myself thinking — what if I'd gotten there sooner? Reached the thing before the break did. Then there'd be nothing to mend at all. / Going to try doing it that way from now on. Get underneath things first." Tag line: "Gregory has read this page before. After the last voyage, it reads differently." — **not in repo**
- Theme: fixing after the break vs preventing it (abjuration). — **not in repo**

## Superseded
- Ward-catches-a-falling-tool scene → judged too technical → replaced by a journal entry.
- Journal drafts went through several passes: too on the nose → too stripped → split the difference → not focused on fix vs prevent → condensed → added "what if things didn't break" → too philosophical → final version with Gregory helping, and the "Gregory watched" line removed.

## Open
- The Rindle scene and the first meeting with the Latchling were offered but not built in this chat.
- What Gregory learns once the anomaly resolves.

## Documents produced
- None (inline text only).

---

# Bartholomew Grayson
Source: https://claude.ai/chat/c9e895d2-3d75-4c6e-bea3-3bde05e26b94 · updated 2026-05-16

## Settled
- Bartholomew was planned from the start but missed the first session. "Wilder's training" was written to cover his absence and add texture. — **in repo** (voyage-briefing-002.html "You're a wilder")
- Every PC gets a tie to the main campaign. His arc crosses the Vecna / ecosystem-strain pressure, but not directly until that plot arrives. — **not in repo** as stated (inference)
- Korey wants alien creatures for him to wild shape into. Only Earth creatures is boring in space. — **in repo** (crew/bartholomew.html "The alien ladder")
- Inspiration is Teen Titans, "The Beast Within": the deeper form was inside him all along. — **in repo** in substance ("Recognition, not search … The Almost is already present in him"). The Teen Titans reference is **not in repo**.
- The working name is "the Almosts". It stays vague, and the creature is held until a few sessions show his baseline. — **in repo** (campaign/spine.html "The Almosts"; crew/bartholomew.html uses "the Almost")
- Alien wild shape tiers: 1 Strange Analogs (Academy), 2 Alien Biology (open Wildspace), 3 Threshold Creatures (late). — **in repo**
- Watch-list for early sessions: Beast Sense / Beast Bond use, how he treats the star map, and Starry Form vs Wild Shape under pressure. — **in repo**
- His four wild shapes (Ape, Boar, Giant Wolf Spider, Wolf) are the four Almost-Shift forms. — **in repo**
- Circle of the Stars, WIS 18, INT 13, Rashemi language. His star-map staff is a family heirloom. — **in repo**
- The missing shape has a stellar, between-worlds quality. A third register of slips (neither beast nor constellation, faintly luminous) is the breadcrumb. — **in repo** (crew/bartholomew.html "Third — Neither … Luminescent, between-worlds")
- At 3 Shift Strain the unfamiliar slip stays vague: wrongness and recognition, no anatomy. — **conflicts** in part (the repo says "The strain of a slip is the breadcrumb; there is no separate clue track" and does not mention a 3-strain threshold)

## Superseded
- Three candidate missing shapes (Veilwalker, the Rootless, the Deathless Grazer) → replaced by recognition of something already inside him (Beast Within), held as "the Almosts".
- Searching for a rare creature → recognition arc.

## Open
- What the Almost is: its emotional register (protective, feral, sorrowful, vast?), its look, and whether he becomes it or merges with it. — still open in the repo.
- Tier-1 alien creatures were offered (3–4 for the Academy) but not drafted here.

## Documents produced
- None.

---

# Revising voyage briefings and Gregory's anomaly arc
Source: https://claude.ai/chat/3ab2b3ef-7800-494c-85df-0d026af08f2e · updated 2026-05-01

## Settled
- The Latchling is at the **Sea Dock** (lower maritime level, green/visitor clearance) near cargo and lower dock storage, not the Sky Dock. — **in repo** (dossiers/rindle-gearloft.html "Sea Dock worker"; realms/caelestis.html "The lower cargo dock"). **Conflicts** inside crew/gregory.html, whose Clear clue reads "The signal is at the sky dock, in the aligner berths".
- Core theme of Gregory's anomalies (Korey): he knows roughly **where** to go and has to work out **how** to get there and through its obstacles. — **in repo** (crew/gregory.html "The arc is the journey, since he knows the destination")
- The signal track describes obstacle clarity rather than location: (1) bearing, the Sea Dock near cargo; (2) muddy signal, something interfering, concealed; (3) the interference has a human shape. — **partly in repo**. VB002 has "Bearing reveals 'lower docks, near cargo'". Tracks 2–3 are **not in repo**.
- Anomaly prep framework: Destination / Physical obstacle / Social obstacle / Interpretive obstacle / Payoff. — **not in repo**
- Latchling obstacles: dock interference (metal and noise), Rindle (convince him Gregory is no threat to the creature), and the Latchling itself (it hides, so trust must be earned). — **partly in repo** (Rindle approach table). Interference and earning trust are **not in repo**.
- Korey: one obstacle is physical access. Part of the Sea Dock needs Sailor clearance (Cadet inherits only Visitor), so Gregory needs, or thinks he needs, Sailor access. — **not in repo**
- VB002 fixes: complete the Strong Start (Tarto hands Bartholomew off to the crew at the Weeping Goddess); add Rindle to Important NPCs; sharpen Gregory's beat. — **in repo** (voyage-briefing-002.html Strong Start; Rindle in NPCs; "Do not let Gregory reach the Latchling this session")

## Superseded
- The signal track as location discovery ("Below. Near cargo." / "Small. Metal. Moving." / "Set aside in lower dock storage. It is alive.") → obstacle-clarity track.

## Open
- Which access option for the Sailor gate: (A) he truly needs it, with an escort via Kip or Pik or a sanctioned reason; (B) he only thinks he needs it, and a service route exists; or (C) hybrid, where Rindle has moved the Latchling, the old signal leads to the gate, and he must recalibrate. Unanswered when the chat ended.
- Whether Gregory can reach the Latchling in Session 2 free roam. The repo answers no (VB002 "Do not let Gregory reach the Latchling this session").

## Documents produced
- Revision notes for Voyage Briefing #002 (Drive doc id 1ZIVYMDRISkYPM8ZUWR6zkTrPsSCGO7dEa_RVqvqnEu8). The Gregory arc doc on Drive (id 1M12dhFrCnQ_IkNykNMloInY3EA2MdybHDxGoAY-5z7M) was read. The revisions **reached the repo** in prime/campaign/voyages/voyage-briefing-002.html.

---

## Tally
- **Not in repo** (including partial): 62 Settled bullets (Tumak Swan alone: 49, after the full read)
- **Conflicts with repo** (including partial conflicts): 20 Settled bullets (Tumak Swan alone: 17)
- Tumak Swan coverage: all 336 turns (0–335) read in full. Complete.
- Highest-value repo fixes: Tu's left-sole match (rules state is stale); "sky dock" in Gregory's Clear clue; the stale Wayscribe recharge dice and per-rune boons; the mishap result (two sanctuaries, not one twin at origin); distance-scaled Wayfind exhaustion; the 17–19 reroll rule; 17–19 as Anchors; and a decision on the late Wayfind reach and cost proposals.
