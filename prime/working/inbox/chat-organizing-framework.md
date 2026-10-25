# Organizing a sprawling campaign framework
Source: https://claude.ai/chat/29eef2ad-72af-41fe-adc3-f5003d9d61f2 · updated 2026-10-25

> Covers turns 0–165 of 166. The chat is complete.
>
> The repo moved well past this chat. Korey pushed batches mid-chat ("The push is live"; later merges of PR #52 and PR #55). Repo checks below were run against the repo as it stands now (2026-10-25). The repo has since reframed parts of Vecna's working around heart-opening and Atria, and the tyrant ship has moved on to V006 and Ostekk-10. Where the repo is newer, the item says so.

## Settled

### Working rules and writing standard
- The repo `prime/` is the single source of truth. Chats are proposals until they land there. — **in repo** (CLAUDE.md: "The record")
- At DM level the world must never contradict itself. Player-level contradictions (lies, bad information) are allowed. Not everything has to connect. — **not in repo** as a stated rule (inference: lives in memory/design notes)
- Canon prose is direct, factual and unparaphrased. It is not watered down. — **in repo** (CLAUDE.md prose rule, partial)
- Canon never mentions concepts that do not exist (for example "there is no Existence Axiom"). It contains no change-log or deliberation leftovers. Contrasts that explain how something works are fine. A blanket "positive phrasing" rewrite was rejected and reverted. — **not in repo** as a rule; the Existence Axiom line is gone from `prime/` (0 hits)
- Deliberation leftovers removed in a sweep: "a revised phlogiston", "Originally planned for V002", "anti-patterns we've corrected". — **in repo** (0 hits for each)

### Cosmic structure
- The cosmic model is the 5e Astral Sea with charted currents (lanes). The crystal-shell model is dropped. — **in repo** (cosmology: "The Astral Sea is the space between worlds")
- The Astral Sea is the Astral Plane. "Sea" is the spacefaring name for it. — **not in repo** ("Astral Plane" 0 hits)
- Everything lies within the Astral Sea. A system is a sun and its worlds, named as space (Realmspace, Virenspace). Wildspace is the space between systems inside a sphere. The Flow fills the space between spheres. — **in repo** (realms/astral-sea.html: "Wildspace is the stretch between systems; the Flow fills the space between spheres")
- The term "Wildspace system" is retired. Realms headings and the DM nav say "Systems". — **in repo** (inference; not re-grepped line by line)
- The Astral Sea's intensity varies between systems and between spheres. A lane's tier records how well that variation is charted. — **in repo**
- Lanes have four travel tiers: charted lane (days), long haul (weeks), uncharted (needs a chart, guide or A.T.L.A.S.), and hidden. — **in repo** ("a lane's tier records how well that variation is charted")
- The Astral Sea holds places of its own: a traveling cantina on a lane circuit, a carved-meteor social hub, and a well-known waystation on the Realmspace–Virenspace lane. — **in repo** (cantina and waystation pages exist)
- Spheres return in revised form. A sphere is a region of the Astral Sea holding several systems. The number varies (5–7). — **in repo**
- The cosmos is a collective of five spheres, set equidistant on a ring around a black hole at the center. — **in repo**
- The Flow, also called the phlogiston, is combustible and silences gods. Crossing it is uncommon, restricted to senior crews, and belongs to late-game play. Cadet operations stay inside SPH-01. — **in repo** (cosmology: "the Flow fills the space between spheres"; Nexus "Spheres & the Flow" page)
- The Flow silences gods because divine realms are anchored to their own sphere, and a vessel in the Flow has left its sphere. — **in repo** (cosmology "Why the Flow silences gods")
- Sphere designations should not call spheres crystal shells. — **conflicts** (prime/campaign/index.html: "SPH for a crystal sphere"; realms: "Five crystal spheres are designated")
- Most of the campaign stays inside Caelestis's sphere until late game. — **in repo** (implied by the chart: other spheres are "held deliberately empty")
- The other spheres are reserved for future campaigns. One sphere (SPH-02) is godless: no gods and no Weave, but the Axioms and Continuity still operate there, which suits cosmic horror and Korey's Call of Cthulhu one-shots. — **in repo** (chart: "SPH-02 … godless")
- Caelestis sits in Realmspace at the outer edge of Toril's orbital band, overlooking the Astral Sea. — **in repo** (inference; vessels and realms pages place the tyrant ship and Caelestis in Toril orbit)
- Player Navigation Records: Realmspace and Viren are Type "System". The old "Deep Astral / Sphere Boundary" entry is now "Wildspace Edge", the outer boundary of Realmspace, 32 days out, with Wildspace beyond. — **in repo** (navigation-records/index.html: "Wildspace Edge")

### Designations (Caelestis/KLS charting)
- Designations reflect Caelestis's own charting. Numbers show order only. Format: SPH-01, SYS-01, W-01, with a known name after a colon (SYS-01: Realmspace). Without a name, the designation stands alone. — **in repo** (campaign index: "SPH for a crystal sphere, SYS for a system, W for a celestial body, CON for a constellation")
- Every sphere, system and world carries a designation, including uncharted and hidden ones. — **in repo** (realms: "SYS-05 — the Ascension World", "SYS-06 — the Wayfinders' homeworld")
- SPH-01 is Caelestis's sphere. SPH-02 is the godless sphere. SPH-03 to SPH-05 are uncharted. — **in repo** (prime/chart)
- SYS-01: Realmspace, SYS-02: Virenspace, SYS-03 is Aethris's system, SYS-04 is Krynn/Fonains, SYS-05 is the Ascension World's system, SYS-06 is Lunarfoot's system (hidden). — **in repo**
- SYS-07 and SYS-08 are draft systems on the side of SPH-01 facing the center, with no charted worlds. Both are candidates for Vetharra and Kaldris. — **in repo** (prime/chart only, 2 files)
- Worlds: W-01 Toril, W-02 H'Catha, W-03 Anadia, W-04 Coliar, W-05 Karpri, W-06 Chandos, W-07 Glyth, W-09 Garden, W-08 Aethris, W-10 Krynn, W-11 Lunarfoot, W-12 Ascension World, W-21 Fonains (draft match). The FIA registry shares this numbering (W-008 became W-08, and so on). — **in repo** (W-08 in 4 files, W-008 in 0)
- The player-facing rule: show only what the crew knows. A known name is shown; a designation only if they have seen it. A place they know exists still appears, even without a name. — **in repo** (inference: Navigation Records chart; not verified line by line)
- Constellations use the CON prefix. — **in repo**. The repo numbers them by bearing in degrees (001–360), not CON-01 to CON-04 as drafted in chat. Repo is newer; treat as superseding.
- Constellations in play: one seen in Mirt's wardrobe (visible from Virenspace), one in Bartholomew's chest (probably Realmspace). Meanings are decided at the table. Korey generates constellations sporadically and assigns meaning when met. — **in repo** (constellation in 17 files)

### The Reach, the Core and the center
- The Reach is the *event*: a civilization on one world reached for the Axioms themselves. The world is unnamed; its civilization's own name is preserved in the Core, and the Citadel's descendants may know it. — **in repo** (cosmology; realms "The Reach World")
- The Reach is the reconfiguration of reality and the birth of this cosmos. Debris and energy from it formed worlds. — **in repo** ("hearts are pieces of it")
- The Reach world's people met three fates: sequestered into the Core, destroyed, or reshaped by the Axioms into the first gods. — **in repo** (cosmology: "met one of three fates")
- The only descendants of the Reach world live in the Radiant Citadel. — **in repo** (what-if.html)
- The first Monolith, the Core, manifested above the Reach world during its Zenith. The Zenith ended with the world's destruction, and the Core remained. Everything beneath the Core is the world's remains, which form the black hole at the center. — **in repo** ("first Monolith" in 4 files)
- Every Monolith acts as a relay back to the Core. — **in repo** (inference)
- The Radiant Citadel accreted around the Core and is a civilization of its own. Getting there is a severe trek, and leaving is harder. — **in repo**
- The center is not a plane. Reaching the Core is travel, not planar transit. — **in repo** (cosmology Other Planes)
- "The Hollow" as a place name is retired everywhere. The Realms entry becomes "The Reach World". — **in repo**
- "Event horizon" becomes "the approach to the center". The approach is dangerous to anything, more so to gods, and worst for Reach-born gods. — **in repo** ("approach to the center" in 1 file; "event horizon" in 0)
- On the DM map the Core is drawn as a monolith, not a star. Worlds holding Monoliths carry the same silhouette. — **in repo** (prime/chart; inference)

### Gods and pantheons
- The first gods were born from the Reach. That is why gods know of the Axioms without understanding them. — **in repo**
- Vecna is a later god. His ascension to godhood was a Zenith through Transformation, and a Monolith appeared in response. — **in repo** (deities.html "Later gods (Vecna)")
- As a later god, Vecna is far less harmed by the approach to the center than a Reach-born god. He does not know what is at the center but suspects the record of the Reach is there. — **in repo** (inference; cosmology rewrite)
- Pantheons gravitated to different spheres after the Reach. Divine realms are anchored to the sphere their pantheon settled in. — **in repo** (cosmology Other Planes)

### Axioms and terms
- The four Axioms are Boundary, Dissolution, Transformation and Convergence. — **in repo**
- The Prime Continuum is all of existence. Continuity is what the four Axioms produce inside it. — **in repo**
- "Existence Axiom" is retired from every page. Gregory is a tuning fork for Continuity. — **in repo** (0 hits)

### Residue
- The "worked residue" idea is dropped. Prime-numbered fragmentation replaces it. — **in repo**
- There are four fragments, one per Axiom, in prime piece counts: Dissolution 2, Transformation 3, Boundary 5, Convergence 7, for 17 in total. — **in repo**
- Pieces of the same fragment yearn toward each other. Pieces of different fragments do not. — **in repo** ("yearn" in 8 files)
- Four fragments brought together bend reality (a recurrence of the contact-event). — **in repo** (cosmology: "All four fragments together bend reality")
- Convergence is the Rod of Seven Parts. The tyrant ship's Containment Engine, Fourth Series, was built by Ostekk to harness a Rod piece. The Lantern is also tied to the Rod. — **in repo**
- Boundary: one piece is housed in A.T.L.A.S. at Caelestis, held in the Brig. It points toward its four siblings and partially reads world-hearts. — **in repo**
- Dissolution is the Runekeeper's fragment. Its two pieces oscillate, and the cycle conceals Lunarfoot. — **in repo**
- Using residue artifacts is unsanctioned and carries moral weight (the Restorers' "grave-goods"). — **in repo**
- Several devices can house pieces of one fragment. — **in repo** (inference; Artifacts rewrite)
- Which pieces Vecna holds is Open. — **in repo** (Artifacts marked Open)

### A.T.L.A.S.
- The artifact is an acronym, written A.T.L.A.S. with no "the" and no "World Surveyor". — **in repo** (18 files), with leftovers: **conflicts** (6 files still say "World Surveyor", for example a notes file: "Click into Artifacts → World Surveyor")
- A.T.L.A.S.'s residue is "the piece" or "the Boundary piece", never "the heart". "Heart" means world-hearts only. — **in repo** ("heart is the prize" and "needs the heart" 0 hits)
- The network's real target is A.T.L.A.S., not the charts. The thefts become more prominent when the crew returns to Caelestis. — **in repo** (inference; vocath-operation page covers the thefts)
- A.T.L.A.S. in Vecna's hands gives him reach, so the crew holding it denies him capacity. — **in repo** (inference)

### Vecna and his working
- Vecna nudged the Zenith on Fonains because he wanted a Monolith there. He did not know Tharizdun had corrupted that Monolith. Tharizdun used the event to pursue planar rifting that could break his chains. — **in repo** (Tharizdun in 11 files)
- Lola's Boys destroyed the Fonains Monolith, the only Monolith on record to be destroyed. This sets up a late-game cross-campaign payoff in a Vecna monologue. — **in repo** (cosmology: "the only Monolith known to have been destroyed")
- After Fonains, Vecna works for surplus: as many Monoliths on the board as he can drive into existence, so a lost node costs a substitution, not a rebuild. — **in repo** (timeline.json: "He builds past the count as surplus")
- Fonains cost Vecna one world, not the system. The SYS-04 node is damaged and recoverable: he can prime another world there or move the node to another system. Operatives returning to SYS-04 is a pullable thread. — **in repo** ("recoverable" in 3 files; chart "Damaged, recoverable")
- Monoliths do two jobs for the spell: pressure (they mark Zeniths that already strained Convergence) and anchorage (permanent structural nodes stable enough to hold a stroke of the figure). — **not in repo** as stated; repo reframes the working around opening and linking hearts (inference)
- Monoliths persist after their Zenith because they are archives, the permanent record of that Zenith. The cosmos is millennia old, so most Monoliths predate Vecna and most of his work is claiming what stands. — **in repo** (inference; "archives" in 8 files)
- A Monolith must be primed before it carries his mark. The network primes the world-heart beneath it. — **conflicts** (repo reframed: cosmology says residue is "the only matter in existence that can act on" a heart, entered through its Atrium; timeline: "Fifteen opened, linked hearts")
- Spell ladder: three primed worlds in one system make a node; three nodes make a sphere ready; nine per sphere, forty-five worlds and fifteen nodes in all. — **in repo** (prime/chart: "A node is a system with three primed worlds; a sphere is ready at three nodes"), but cosmology prose now speaks of opened, linked hearts (repo newer)
- Figure geometry: each sphere's three nodes close a triangle. The two outer nodes each link to one node in each of the two non-adjacent spheres. The middle node links only to the Core. The links are world-heart routes. The Core links are the last strokes. — **in repo** (prime/chart: "the sphere's own triangle")
- Vecna's lieutenants hold the cross-sphere pairings, and each knows part of the geometry. Closing a node takes coordinated work in three places at once. — **in repo** (inference; "lieutenant" in 5 files)
- The DM map shows the figure in two modes: intended (the full design, unfinished strokes dashed) and achieved (only what exists). The achieved view is what players would see if they recovered a fragment and overlaid it. — **in repo** (chart: intended and achieved modes)
- Vecna's spell is a figure across the cosmos that gets one cast. Whatever the outcome, the Continuum carries on. — **in repo** (inference)
- Tharizdun's rifting feeds the weather of reality. The weather itself stays ownerless Convergence strain. — **not in repo** ("weather of reality" 0 hits)
- The weather of reality is an escalating, ownerless pressure from an Axiom under strain, to be tracked on the campaign view. — **not in repo**
- The "escalation to ships" line came from an old Voyage 002 theft plan and is removed. — **in repo** (0 hits)
- Vecna is trying to connect his figure to the Core. — **in repo** (inference; Hollow references removed)
- The network at Caelestis works through an embedded saboteur and uses Vocath's grudge operation as cover. Vocath, Qitru and the CRC are not network. — **in repo** ("embedded saboteur" 1 file)
- Node 1 was done pre-campaign. — **in repo** (inference; "Done at Academy close" 0 hits)

### Aethris and Sol
- The Prism Ascendant is the Monolith that answered Aethris's Zenith. It was not built for the ritual. — **in repo**
- Aethris's Zenith began and is not over. Its ritual of perfection is incomplete because the Fortuned need Sol to finish it. Aethris does not know what a Monolith is and believes the Prism Ascendant is Tymora's answer to the ritual. — **in repo** (realms/aethris.html: "Tymora's answer to the ritual")
- Sol escaped the ritual before it completed. "Failed", "completed", "succeeded" and "manufactured" are retired. — **in repo** (plot-hooks; aethris.html)
- Tymora would not want the ritual finished. Vecna is pushing Aethris's Zenith toward completion. Sol's player would enjoy a Vecna tie. — **in repo** ("Vecna is pushing" in 3 files)
- A Watcher saw what was happening on Aethris, intervened, and got Sol into Caelestis for protection and because he was wronged. — **in repo** (restricted/wm-006.html: field referral, "protective placement")

### Tumak (Wan and Tu)
- Wan and Tu are two separate hosts and always have been. The Dissolution fragment is leaving the current Runekeeper (who is dimming) and forming in them, which is why the twins were sent out. Their arriving home produces a Zenith, which has not happened yet. — **in repo** (crew/tumak, spine, plot-hooks)
- Lunarfoot is hidden by the Dissolution fragment's cycle. — **in repo**
- The inscription: twenty positions, one half per twin. A rune is matched and awake only when both halves exist. Each level, a d20 per bearer against a diminishing pool, with a pacing rule. — **in repo** (prime/rules/index.html; "Pacing Rule")
- The per-rune +1 boon is removed. Every matched rune instead carries marks: place a mark (10-minute ritual), reclaim it (free), and perceive through a mark (once per long rest, one minute). — **conflicts** (prime/rules/index.html still says "Matched runes carry the per-rune boons", alongside the Marks row)
- Wayfind is an action to a placed mark, open from the first matched rune. First per long rest is free; each further one adds exhaustion. Passengers: floor(awakened ÷ 2), max 8. Mishap by distance 0/20/40/60/75/90%, −10% cross-set mark, −25% same-set mark, 5% floor during the arc. A mishap separates the twins and sends the traveler to a previous Wayfinder's resting place; Wayfind locks until they reunite. — **in repo** (rules: "floor(awakened")
- Homebound: the Heart (rune 20) awakens when the other sixteen placeable runes are matched, then works as a mishap-free home anchor. Homebound is the arc's resolution. — **in repo** ("Homebound" in 6 files)
- Wayscribes: Soul (2nd), Maker (3rd), Walker (3rd), Vessel (5th). Each awakens when its group is matched, and the player picks one spell from its menu permanently. Recharge at dawn d2/d4/d4/d10. — **in repo** (prime/rules)
- Current state: V003 gave Wan the left sole (08) and Tu the right shoulder (16). The Heart (20) is matched and hidden; Tumak does not know he carries it. — **in repo** (prime/rules; repo may be newer)

### Saerthe and the missing miniature
- Saerthe Abizjn is male ("he"). — **in repo** (19 files use Abizjn), with a leftover: **conflicts** (1 file still has "Abyzine": prime/working/inbox/chat-automation.md, a notes file)
- Saerthe's missing item is his miniature spelljamming ship, and half of it is inside Boogie. Thefts never escalated to stealing vessels. — **in repo** ("miniature" in 7 files; 0 hits for vessel escalation)

### Places and the perimeter
- Krynn and Fonains share one system (SYS-04) inside SPH-01, placed between SYS-01 and SYS-05 and spaced so reaching it is a real crossing. — **in repo** (realms/sys04.html)
- In that system an aspect of Bahamut is trapped by Tiamat on Krynn. A silver pseudodragon on Fonains channels it. Fizban will summon Lola's Boys for a one-shot. Most dragons left Fonains for Krynn. — **in repo**
- Lunarfoot is in Caelestis's sphere and hidden, because the Wayfinders map the threats it must be protected against. — **in repo**
- SPH-01 sits on the cosmos ring so its perimeter faces the center and the neighbouring spheres. — **in repo** (inference from the chart layout)
- Fleet keeps a perimeter ring of three stations on SPH-01's edge: Hollis Post (west), Strake Station (out from SYS-01 on the Tetherbreak bearing) and Cairn Station (east, between the SYS-01 and SYS-04 bearings). Calder Post is cut. — **in repo** (realms: "the western perimeter post"; Calder 0 hits)
- The ring watches for anything crossing the Flow into SPH-01, and the astral dreadnought's territory lies at the eastern end, at Cairn. — **in repo** (realms/tetherbreak.html)
- The Tetherbreak approach lane runs from Realmspace to Strake. The edge run connects Strake to Cairn and bows inside the sphere, since outside the boundary is the Flow. — **in repo** ("edge run" in 6 files)
- Strake and Cairn are separate places. Strake is the last Fleet relay on the Cairn approach and holds the only staged copies of the Cairn approach packet (charts, survey, dreadnought patrol timing tables). Cairn has no Fleet complement and has filed nothing in years. — **in repo** ("Cairn approach" in 8 files)
- Station cartographer M. Tarroway maintained the packet, noted its third revision because "whatever is out there moves", and was not recovered. — **in repo** (Tarroway in 14 files)
- Draft FIA placements: Cogfast Enclave on Toril (Gregory's origin), W-21 Fonains in SYS-04, W-34 (natural convergence Zenith, still recording) in Virenspace. — **in repo** (Cogfast on toril.html marked "in draft")
- The crew does not yet know where Virenspace is, so the player chart has no sphere level yet. — **in repo** (inference; Navigation Records shows Realmspace only)

### Clint Dashforest and the Bellwether Crow
- Clint Dashforest was a Caelestis instructor and a PC from a Fonains one-shot (his player wanted a time traveler; the time travel was dropped). — **in repo** (dossiers/clint.html)
- On the edge run between Cairn and Strake, eye-in-a-wheel craft (Vecna's network) engaged the Bellwether Crow. Clint seized the boarders' craft and broke away with it, drawing their pursuit. A psychic wind carried him into SYS-04, where he reached Fonains and brought laser pistols. — **in repo** (restricted/wm-002.html: "seized the boarders' craft"; clint.html: "a psychic wind carried him")
- The Bellwether Crow continued toward Strake and was not heard from again. — **in repo**

### FIA records
- WM-003 is a recovered document from an unidentified party, bearing the eye-in-wheel mark catalogued in FR-016. It uses Above Bridge designations (Zenith, Threshold, Ortholith) without authorisation; the duplicate "unknown party" note is gone. — **in repo** (inference; wm-003 rewritten)
- FIA "Sphere" fields became "System". — **in repo** (wm-003: "World / System")
- Redaction rule: Fleet withholds dates and cycle counts, crew personal names, the contents of classified holdings, and conclusions above the filing's clearance. It never redacts something stated plainly elsewhere. Illegible text reads "[illegible]", unmatched entries "not cross-referenced". — **in repo** (restricted: "[illegible]" in wm-003; FR-005 names Osprey Vane, Copper Wren, Hollis Post)
- SA-005 keeps Tarroway's name "at Bridge direction pending resolution". — **not in repo** ("retained" 0 hits in sa-005)
- The FIA hints at why each PC is at Caelestis, with no dedicated recruitment file: WM-006 field referral and protective placement (Sol); SA-002 1486 meteor account by a minor referred to intake (Casey); 1489 two Cogfast constructs survived, one entered intake (Gregory); 1491 two arrivals from an uncatalogued system both entered intake (Wan and Tu); FR-016 disc from an unlogged crate in a salvage shipment, inspecting party reassigned to cadet intake (Boogie). — **in repo** (wm-006, sa-002, fr-016)
- WM-002 shows the Crow's last position on the edge run and asks whether the network engaged it to reach the approach packet. — **in repo**

### The Astral Sea in play
- Crossing features: psychic wind (throws a vessel off course, arrives late or far), currents and eddies, color pools (portals to other planes, never to another system), and dead gods with drifting matter (worked by salvagers, hermits and githyanki). — **in repo** (realms/astral-sea.html; "psychic wind" in 9 files)
- Running a crossing: give each leg one feature and let the crew decide whether to look. Charted lanes are quiet more often than not; long hauls and uncharted routes are not. Nothing needs to connect to the spine. — **in repo** (realms/astral-sea.html)
- Psychic wind and shifting intensity on the Cairn bearing explain why Tarroway's timing tables kept failing. — **in repo** (inference)

### Other planes
- The cosmos (spheres, systems, worlds, Wildspace) is the Material Plane. Other planes sit adjacent to it or overlaid on it and keep their standard 5e makeup. — **in repo** (cosmology: "The cosmos is the Material Plane")
- The Ethereal mirrors the Material; the Border Ethereal at Caelestis shows Caelestis. — **in repo**
- Elemental planes have their own geography tied to a sphere, which is why the Princes of Elemental Evil and Tharizdun's chains are SPH-01 problems. — **in repo** ("Princes of Elemental Evil" in 4 files)
- The Reach seeded the worlds across the planes at once, so every Reach-era world has a Feywild and Shadowfell echo. Everything built afterward exists only where it was built. Caelestis, Wildspace and the stations have no echo. Echo distances differ, so echo travel can cross between worlds. — **in repo** (cosmology "Echoes")
- Caelestis is planar-dead, which with the Forbiddance makes the Academy a sealed room. — **in repo** ("planar-dead" 1 file)
- Getting to another plane: thin places, color pools, spells (astral projection doubles as hull-less travel), and planar shortcuts that nobody at Caelestis teaches. Mid-to-late play. — **in repo** ("Nobody at Caelestis teaches" 1 file)
- Standing ruling: if the crew finds a door, there is something on the other side. Curiosity gets rewarded with a place, not a wall. — **in repo** (cosmology)
- Crossover with Fonains: the Fonains Zenith rose from elemental upheaval and shadow corruption from SPH-01's own planes, so entering them means entering the Princes' region. — **in repo** ("Crossover with Fonains")

### NPCs and PCs
- Wan and Tu entered Caelestis together, from an uncatalogued system. — **in repo** (sa-002)
- Vocath is spelled with a C. — **in repo**
- The neogi in Voyage Briefing 002 carry Astral scent. — **in repo**
- Astra lives in SPH-01 as a moving presence, with Starchild tethers to Virenspace and Casey. — **in repo** (inference; astra-virex dossier exists)
- Zerathis, who gave Mirt the wardrobe, is a consumed presence in Virenspace's paracausal layer. He is a person, not a map point. — **in repo** (Zerathis in 25 files)
- Astra's wound was given in chat as "a disturbance in Continuity". — **conflicts** (repo deities: "A conscious body had its own distinction opened and its nature altered. That is the wound." Repo is newer and likely supersedes)
- Boogie's Fonains Monolith shard came from a shipment he inspected without authorization. It ties to Vecna's network. — **in repo**
- Voyage 004 is Behold H'Catha. The galley fire and Ryeback's death are cut. — **in repo** ("Behold H'Catha" in 2 files; "Ryeback dies" 0)
- Miken's own crew was hurt in the simulation accident. He sat with them in the infirmary and is attached to the party's crew. He is leveraged and frightened; any confession stays unresolved. — **in repo** (inference; "infirmary" in voyage-briefing-002)
- Winston Ryeback is a giff whose gun works in the anti-magic field. Krik'Lit is a thri-kreen who does not sleep and translates the clockwork horrors. Pffred is a freelance salvager, not Academy, worth keeping alive for H'Catha. — **in repo** (krik-lit.html: "Ostekk's clockwork horrors speak thri-kreen"; ryeback dossier mentions giff)

### Tyrant ship and Voyage 004 prep
- Tyrant ship levels: Cargo (entry, base camp) and Hollow (the bowl, behir's rest, repair bay pod with an empty cradle above it) sit below the gravity plane. Command (entirely anti-magic, nine-flower lattice, helm install point) sits above, with the Meditation nodes Garden, Quarters and Research at the top. The gravity plane lies almost level with the Command floor. — **in repo** (voyages/index.html: "the gravity plane level with the Command Deck floor")
- Shafts are named for the node they end at and run full height. Chokes: Garden choked low, Quarters choked at the top, Research choked in the middle. The bloom keeps the behir penned; every choke cleared widens its reach. — **in repo** (inference; repo has moved on to V006)
- The empty cradle is the Engine's seat. The Engine, as a magic item, is the Lantern of Flourishing. — **in repo** (artifacts/containment-engine.html)
- The behir is never named at the table. It cannot cross the level where magic dies and uses the crew to get past it (the abduction lever strands two PCs at the Command threshold). — **in repo** (voyages/index.html: "takes two PCs down a Meditation shaft and strands them")
- Session philosophy for V004: push non-combat use of abilities. Say yes to the clever thing and charge a resource, not a roll. Name non-combat uses out loud. Ship chatter (burglaries, Saerthe's miniature, the meteor, home, warm floors) keeps the ship from feeling void. — **not in repo** (the briefing/addendum is not in `prime/campaign/voyages/`)
- Why Caelestis wants the adamantine meteor: adamantine survives disintegration, so the Fleet wants it for containment (a vault, cradle or plating), and a cadet salvage crew is the cover. Tarto says only that it is rare, theirs by claim, and wanted first. — **not in repo** ("survive being unmade" / "containment, not a ship" 0 hits; hcatha.html covers the meteor's seam only)

### Maps
- The cosmos is populated on the DM map with seeded survey entries: uneven sphere sizes (5, 7, 6, 5 systems), 3–7 worlds per system, scattered layouts, about one world in six with a Monolith. — **in repo** (prime/chart)
- Player Navigation Records: the linear orbit strip is the system view at every width (the circular chart belongs to the DM map), with a Holo/Survey chart switch for handed-out charts, names always visible (blank if unknown), images expanding on click, and a register filter (search plus type chips). — **in repo** (navigation-records/index.html, inference; not verified line by line)

## Superseded
- "Drop spheres, call them wildspaces/systems" (turn 8) → spheres return as clusters of systems, with the Flow between them (turn 18).
- Realmspace at the center of the map; a placeholder "central anchor" → the center is a black hole formed from the Reach world, with the Core and the Radiant Citadel.
- The Hollow as a hidden site inside or beyond the center → the Hollow concept is retired. The Reach world's remains are the black hole beneath the Core.
- The Reach-monolith as a separate monolith at the Hollow → the Reach-monolith is the Core, the first Monolith.
- The Core layered "beyond the event horizon" → "the approach to the center".
- The Core drawn as a star above the black hole → drawn as a monolith (turn 127).
- Fonains in an adjacent sphere, then a "Material sphere" → Krynn and Fonains share one system inside Caelestis's sphere.
- "Tharizdun and Vecna further corrupted" the Fonains Monolith → Vecna nudged the Zenith, and Tharizdun corrupted the Monolith without his knowledge.
- Fonains forced Vecna "from saturation to precision", with residue "for precision, to place the minimum necessary nodes" (turn 55) → surplus: as many Monoliths as possible, with residue "for reach" (turn 111). The repo now frames residue as the only matter that can act on a heart.
- SYS-04 "broken" by Fonains → damaged and recoverable; Fonains cost one world, not the node (turn 127).
- "Wildspace" as the space inside a system (turn 49) and "Astral space" between systems → Wildspace is between systems, inside a system is named space, and everything is in the Astral Sea (turn 50).
- "Wildspace System" as a Navigation Records type → "System".
- "Beyond the Wildspace Edge lies the Astral Sea" → "Beyond it lies Wildspace".
- "World Surveyor" as the common name, with A.T.L.A.S. as the formal one → "the Atlas" (turn 31) → **A.T.L.A.S.**, the acronym only.
- A.T.L.A.S.'s residue called "the heart" ("the heart is the prize") → "the Boundary piece".
- The Vocath → Vokath rename → reverted.
- "Existence is the Prime Continuum" versus "Continuity is Existence" → the Prime Continuum is the cosmos, and Continuity is what the Axioms produce in it.
- Astra "wounded by the Existence Axiom" → "a disturbance in Continuity" (chat) → the repo now describes the wound as her distinction opened and her nature altered.
- The neogi's "phlogiston scent" → Astral scent.
- Designations S1 with two-letter systems (RS, VS, AE, AW, LF, KF) and worlds like VS-1 → SPH01, SYS-01, W01 → SPH-01, SYS-01, W-01, with the FIA sharing the numbering.
- A separate FIA numbering (W-008) kept apart from Caelestis's → one shared scheme (W-08).
- Uncharted systems (Lunarfoot's, the Ascension World's) carry no designation → every sphere, system and world carries one (SYS-05, SYS-06).
- Map nodes with subtitles ("SYS-04 · Krynn and Fonains") and planet dots inside spheres → designation-only nodes; contents appear when opened.
- Zerathis as a point on the SYS-02 chart → listed in SYS-02's panel only.
- Strake Station as the Fleet's sanctioned Flow-crossing waystation → Strake is a perimeter post on the Tetherbreak bearing.
- Strake and Cairn as possibly the same place → two places, Strake the relay holding clues to Cairn (turn 72).
- A perimeter ring of four posts including Calder Post → three stations: Hollis, Strake, Cairn.
- Tetherbreak at the sphere's far edge, then near SYS-04 → Strake southwest of SYS-01 below Hollis, Cairn between the SYS-01 and SYS-04 bearings, edge run bowing inside the sphere.
- SPH-01 on the lower left of the cosmos → placed so its perimeter faces the center and neighbouring spheres (turn 79).
- Clint Dashforest "went overboard" → he seized the boarders' craft and broke away with it; a psychic wind carried him to SYS-04.
- WM-002 "resolved without casualties", then "one crew lost" → one crewmate and one captured craft unaccounted for.
- Spell figure of thirteen anchor-class nodes across five spheres (turn 105) → twelve linked Monoliths across four systems per sphere, sixty total (turn 113) → three primed worlds per node, three nodes per sphere, forty-five worlds (turns 121–123).
- Node links to "two nodes in other spheres" (turn 121) → links only to non-adjacent spheres (turn 123) → triangle within the sphere, two outer nodes crossing, middle node to the Core (turn 125).
- One reserved "last node" for the whole cosmos → one Core-bound node per sphere.
- "Reach civilization had descendants" as a diaspora → the descendants live only in the Radiant Citadel.
- Twins "sent as a hedge"; the homeworld "hides itself"; the world surfaces if the Runekeeper fails → the fragment is forming in Wan and Tu, and the Dissolution cycle hides Lunarfoot.
- The fragment "forming in Tumak" as one host → Wan and Tu, two separate hosts.
- Aethris "completed its Zenith", Sol "survived a failed ritual", a "manufactured Zenith that succeeded" → the Zenith is underway, the ritual is incomplete, and Sol escaped before it completed.
- The Prism Ascendant as architecture built for the ritual → the Monolith that answered the Zenith.
- Saerthe as they/them in DM pages (turn 47) → he (turn 54). "Saerthe Abyzine, Senior navigator" → Saerthe Abizjn, helm instructor.
- Saerthe's missing "commissioned ship" with thefts "escalated to vessels" → his miniature, half of which is inside Boogie.
- "Voyage 004: Fire in the Galley, Ryeback dies" → Voyage 004 is Behold H'Catha; the galley fire is cut.
- Node 1 "done at Academy close" versus "pre-campaign" → pre-campaign.
- The Network's agents as "mercane merchants, intermediaries, and constructed pursuers" → an embedded saboteur, with Vocath's operation as cover.
- What If hooks: the Runekeeper's artifact as "Boundary-biased" and "older than the Reach" → Dissolution, from the Reach (hook removed).
- A dedicated PF-004 "Cadet Intake Summaries" file (Claude proposal) → intake hints scattered through existing FIA files.
- A blanket "positive phrasing" rewrite of Cosmology → reverted.
- Tumak's per-rune +1 boons, "Reach for Home" (d100, 10+ runes) and "Capstone Gate" → marks, Wayfind and Homebound (turn 119).
- A player "Stellar Chart" as a separate page, then a circular holo chart replacing the strip → the linear strip restored as the system view, with the holo/survey switch (turns 138–145).
- A sphere level on the player chart → withheld; the crew does not know where Virenspace is.
- The nebula photo as the chart backdrop → a quiet backdrop.
- Gravity plane placed in the Quarters shaft at the command threshold → a plane through the ship's middle, nearly level with the Command floor; the flip happens in any shaft.
- Ryeback as a Veteran, Pffred as an Academy deckhand, Krik'Lit as generic foreshadowing → giff with a gun, freelance salvager, thri-kreen translator.
- A full Voyage 004 briefing with its own watch section → a short table addendum beside Korey's runsheet.

## Open
- The final name for the center. Korey dislikes "the center" (turns 68, 112). Claude offered The Cradle, The Wound, The Origin and The Nadir; none was chosen.
- What the Watchers are doing right now. Deferred to "another pass" and never done.
- The name of Vecna's network. "Network" is overused.
- A new name for the world-heart network.
- A possible new name for "residue".
- Names for the spheres (SPH-01 included) and for designated systems.
- How the Flow works, how it is crossed, and how it relates to the Astral Sea's intensity.
- Which residue pieces Vecna holds: a holdings ledger of each piece, who has it, and who knows.
- Why SPH-01 holds pieces of three fragments.
- How Vecna connects his working to the Core. The arc review named this the largest gap and the subject of Arcs 3 and 4.
- How the lieutenants coordinate cross-sphere work. Korey deferred the detail.
- The Restorers as rivals gathering the same set; whether they know reversing the Core's archived loss would undo the cosmos.
- How Clint Dashforest's crossing played out in detail ("the sea took me"). Whether the network's small fast craft is still on Fonains.
- Homeworlds for Casey (the 1486 "deliberate" meteor; system withheld pending survey), Bartholomew (a celestial druid tradition; no FIA hint yet) and Boogie.
- Recruitment pathways for cadets from worlds without spelljamming.
- Virenspace detail: whether Zerathis recruited other Starchildren.
- Placement of Vetharra (W-47) and Kaldris (W-52). SYS-07 and SYS-08 are candidates; Kaldris, the "control case", could sit near SYS-03.
- Whether the Ascension World's "small, personal ascension distinct from the Sigil event" is separate from Vecna's godhood.
- Why the approach to the center harms Reach-born gods, and how differently it affects later gods.
- Whether the four Axioms held their current configuration before the Reach.
- What is at Cairn Station, whether the network reached it first, and where Tarroway is. The payoff should open onto something larger.
- The dreadnought thread Korey likes: something is going on between SPH-01 and the next sphere. Whether the dreadnought was drawn to that bearing, came from the other sphere, has always lived there, or is disrupting transit between spheres. Not yet in the FIA.
- Whether Strake's mass signature was the dreadnought or something that crossed the Flow.
- What Strake's secure-storage item is.
- Whether every sphere has a full set of echo planes, and where the Reach-born gods' realms anchor.
- Whether a world's heart has a counterpart in its echoes.
- Whether the Caelestis crew meets the Princes' elemental pressure directly, meets its aftermath, or only hears of it.
- Whether the academy wanted that meteor or any adamantine, and what recently made it urgent (points at the Brig).
- Tumak: runes 17–19 (the Anchor redesign: Hearth, Threshold, Horizon tied to Gregory's calibration sites; whether one is preset; what an Anchored Reach grants); the distance bands behind Wayfind mishap percentages; the early-home door (natural 20 then a confirmation roll); what Tumak's two active runes are.
- Whether Sol's Misfortune's Favor is self-targetable.
- Granular locale-level locations (merchants, shipyards, taverns) with a parent world or station in the Locations tab, so the register can filter by them.
- Campaign Board (arc timeline plus parallel tracks) and Chronicle were never built.
- The weather of reality still needs a canonical page and a tracked status.
- Whether Ryeback's death is planned at all now that the galley fire is cut.

## Documents produced
- **Caelestis Cosmos Map** (artifact, https://claude.ai/artifact/68pMw9GquWJAMd7oBuF2rp; file `caelestis-cosmos-map.html`). Many versions: three levels, Astral Sea palette, solid spheres, hidden layer, constellations, perimeter ring, populated spheres, spell figure with intended and achieved modes. — **reached the repo** as `prime/chart/index.html`
- **caelestis-cosmos-data.json** (file): generated spheres, systems, worlds and the figure nodes. — not checked in repo as a separate file (inference: folded into prime/chart)
- **Cosmology v2** page and `caelestis-prime-cosmology-v2.zip`. — **reached the repo**
- **DM and FIA fix batches** (zips): `caelestis-realms-prism-fix.zip`, `caelestis-v21-consistency.zip` (Aethris, Tumak, network, A.T.L.A.S. piece, Saerthe, FIA, Nexus "Spheres & the Flow", Navigation Records terms), `caelestis-v22.zip` (Hollow removal, designations, Remaking, Wan and Tu), `caelestis-fia-cairn.zip`, `caelestis-fia-redactions.zip`, `caelestis-perimeter.zip`, `caelestis-planes-astral.zip` (Other Planes, Echoes, Astral Sea section), `caelestis-dm-updates.zip` (surplus, spell ladder and geometry, Rules page). — **reached the repo** (content verified present; the repo says PR #52 and PR #55 merged most of it)
- **Rules page** (`prime/rules/index.html`, with a Rules nav entry): Tumak's inscription, Wayfind, Homebound, Wayscribes. — **reached the repo** (still carries a stale "per-rune boons" line)
- **Wayfinder's Path — DM copy** (artifact; `prime/rules/wayfinder-path-dm.html`): every rune matched, Heart revealed. — **reached the repo**
- **Navigation Records mockup** (artifact, https://claude.ai/artifact/AftaLmWzkrCCu8mX8TE8fN) and the rebuilt `navigation-records/index.html`. A short-lived "Stellar Chart" artifact and `navigation-records/chart.html` were replaced by it. — **reached the repo** (inference; Wildspace Edge present)
- **caelestis-changes.zip** (zip, 15+ files): Navigation Records, `scripts/nav.js` lightbox, `scripts/portraits.js` quest-giver portraits, quest pages, plus later the V004 files. — partly in repo (not verified per file)
- **Voyage 004 briefing, later "Table Addendum"** (artifact, https://claude.ai/artifact/X5v4N95Equ8ojHmVUqgMaD; file `prime/campaign/voyages/voyage-briefing-004.html`). — **not in repo** (`prime/campaign/voyages/` has only index and briefing 002)
- **Tyrant ship dungeon v2 and V004 runsheet** (Korey's uploads, filed in the zip as `prime/dungeons/tyrant-ship.html` and `prime/campaign/voyages/voyage-004-runsheet.html`). — **not in repo** at those paths (`prime/dungeons/` does not exist; content partly in `prime/vessels/tyrant-ship.html`). The June v1 doc lives in Drive as `tyrant-ship-dungeon.html` (id 1lv4g_wi4IWD_6_hGyp9nVbAX_i9yIKbJ).
- **Locations tab values** (tracker paste-in): Viren Star System Type `System`, plus a new Realmspace row (Type `System`, "The system the crew calls home…"). — lives in the Google Sheet; not checked.
- **Draft Astral route map** (inline visualize widget, turn 9). — chat only, superseded by the artifact.
