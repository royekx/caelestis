# Organizing a sprawling campaign framework
Source: https://claude.ai/chat/29eef2ad-72af-41fe-adc3-f5003d9d61f2 · updated 2026-09-18

> **Coverage note.** The chat has 166 turns. Turns 0–40 were read in full. The hourly read limit stopped paging at turn 41, so turns 41–165 come only from targeted in-chat search snippets. Items from that range are marked "(late, from search)". Re-read turns 41–165 for anything missed, especially the Watchers pass, the center's new name, the player map, and the final turns.
>
> The repo moved well past this chat: Korey pushed at least one batch mid-chat ("The push is live"). Repo checks below were run against the repo as it stands now (2026-10-25).

## Settled

### Working rules and writing standard
- The repo `prime/` is the single source of truth. Chats are proposals until they land there. — **in repo** (CLAUDE.md: "The record")
- At DM level the world must never contradict itself. Player-level contradictions (lies, bad information) are allowed. Not everything has to connect. — **not in repo** as a stated rule (inference: lives in memory/design notes)
- Canon prose is direct, factual and unparaphrased. It is not watered down. — **in repo** (CLAUDE.md prose rule, partial)
- Canon never mentions concepts that do not exist (for example "there is no Existence Axiom"). It contains no change-log or deliberation leftovers. Contrasts that explain how something works are fine. A blanket "positive phrasing" rewrite was rejected and reverted. — **not in repo** as a rule; the Existence Axiom line is gone from `prime/` (0 hits)

### Cosmic structure
- The cosmic model is the 5e Astral Sea with charted currents (lanes). The crystal-shell model is dropped. — **in repo** (cosmology: "The Astral Sea is the space between worlds")
- Lanes have four travel tiers: charted lane (days), long haul (weeks), uncharted (needs a chart, guide or A.T.L.A.S.), and hidden. — **in repo** ("a lane's tier records how well that variation is charted")
- The Astral Sea holds places of its own: a traveling cantina on a lane circuit, a carved-meteor social hub, and a well-known waystation on the Realmspace–Virenspace lane. — **in repo** (cantina and waystation pages exist; "charted lane between Realmspace and Virenspace, where the lane splits")
- Spheres return in revised form. A sphere is a cluster of Wildspace systems. The number varies (6–7 is fine), and larger systems take up more of a sphere. — **in repo** (realms: "Five crystal spheres are designated")
- The cosmos is a collective of spheres, five or six of them, arranged around a black hole at the center. — **in repo**
- A revised phlogiston, "the Flow", fills the space between spheres. Crossing it is uncommon and belongs to late-game play. — **in repo** (cosmology: "the Flow fills the space between spheres")
- The Astral Sea means all space between worlds. Its intensity varies between systems and between spheres (late, from search). — **in repo** ("Intensity varies between systems and between spheres")
- Wildspace means the space *inside* a system (late, from search: "The space inside a system is called Wildspace"). — **conflicts** (prime/cosmology/index.html: "Wildspace is the stretch between systems")
- Sphere designations should not call spheres crystal shells. — **conflicts** (prime/campaign/index.html and realms: "SPH for a crystal sphere", "Five crystal spheres are designated")
- Most of the campaign stays inside Caelestis's sphere until late game. — **in repo** (implied by the chart: other spheres are "held deliberately empty")
- The other spheres stay empty for now and are reserved for future campaigns. One sphere is godless: it has no gods and no Weave, but the Axioms and Continuity still operate there, which suits cosmic horror and Korey's Call of Cthulhu one-shots. — **in repo** (chart: "SPH-02 … godless")

### Designations (Caelestis/KLS charting)
- Designations reflect Caelestis's own charting. Numbers show order only. Format: SPH-01, SYS-01, W-01, with a known name after a colon (SYS-01: Realmspace). Without a name, the designation stands alone (late, from search). — **in repo** (campaign index: "SPH for a crystal sphere, SYS for a system, W for a celestial body, CON for a constellation")
- SPH-01 is Caelestis's sphere. SPH-02 is the godless sphere. SPH-03 to SPH-05 are uncharted. — **in repo** (prime/chart)
- SYS-01: Realmspace, SYS-02: Virenspace, SYS-03 is Aethris's system, SYS-04 is Krynn/Fonains, SYS-05 is the Ascension World's system, SYS-06 is Lunarfoot's system (hidden). — **in repo** (realms: "SYS-05 — the Ascension World", "SYS-06 — the Wayfinders' homeworld")
- Worlds: W-01 Toril, W-02 H'Catha, W-03 Anadia, W-04 Coliar, W-05 Karpri, W-06 Chandos, W-07 Glyth, W-09 Garden, W-08 Aethris, W-10 Krynn, W-11 Lunarfoot, W-12 Ascension World. The FIA registry shares this numbering (W-008 became W-08, and so on). — **in repo** (W-08 in 4 files, W-008 in 0)
- The player-facing rule: show only what the crew knows. A known name is shown; a designation only if they have seen it. A place they know exists still appears, even without a name. — **in repo** (inference: Navigation Records holo chart; not verified line by line)
- Constellations use the CON prefix. — **in repo**. The repo numbers them by bearing in degrees (001–360), not CON-01 to CON-04 as drafted in chat. Repo is newer; treat as superseding.

### The Reach, the Core and the center
- The Reach is the *event*: a civilization on one world, or a cluster of worlds, reached for the Axioms themselves, meaning direct contact with the structure that maintains the Prime Continuum. The world is unnamed. — **in repo** (cosmology)
- The Reach is the reconfiguration of reality and the birth of this cosmos. Debris and energy from it formed worlds. — **in repo** ("hearts are pieces of it")
- The Reach world's people met three fates: sequestered into the Core, destroyed, or reshaped by the Axioms into the first gods. — **in repo** (cosmology: "met one of three fates")
- The only descendants of the Reach world live in the Radiant Citadel. — **in repo** (what-if.html)
- The first Monolith, the Core, manifested above the Reach world during its Zenith. The Zenith ended with the world's destruction, and the Core remained. Everything beneath the Core is the world's remains, which form the black hole at the center (late, from search). — **in repo** ("first Monolith" in 4 files)
- After the Reach, answering Zeniths with Monoliths became part of how Continuity works. Every Monolith acts as a relay back to the Core. — **in repo** (inference from cosmology rewrite; "first Monolith" present)
- The Radiant Citadel accreted around the Core and is a civilization of its own. Getting there is a severe trek, and leaving is harder. — **in repo**
- "The Hollow" as a place name is retired everywhere. The Realms entry becomes "The Reach World" (late, from search). — **in repo** ("Hollow" now appears only as the tyrant ship's Hollow Deck and similar)
- The "event horizon" wording becomes "the approach to the center". The approach is dangerous to anything, more so to gods, and worst for Reach-born gods (late, from search). — **in repo** ("approach to the center" in 1 file; "event horizon" in 0; deities table "Reach-born gods | Pushed away hard")
- Vecna is looking to connect his figure to the Core, not to find the Hollow (late, from search). — **in repo** (inference; Hollow references removed)
- The center needs a better name than "the center" (late, from search). — **not in repo**. Status of the final name unknown; see Open.

### Gods and pantheons
- The first gods were born from the Reach. That is why gods know of the Axioms without understanding them. — **in repo**
- Later gods, such as Vecna, ascended after the Reach through Transformation instead of being born from it. — **in repo** (deities.html "Later gods (Vecna)")
- Vecna's ascension to godhood was a Zenith, and a Monolith appeared in response (late, from search). — **in repo** (inference; campaign/ascension page exists)
- Pantheons gravitated to different spheres after the Reach. — **in repo** (inference)

### Axioms and terms
- The four Axioms are Boundary, Dissolution, Transformation and Convergence. — **in repo**
- The Prime Continuum is all of existence: the cosmos, everything that exists. Continuity is what the four Axioms produce inside it. The two terms are interchangeable in practice. — **in repo** (cosmology: "The Prime Continuum is all of existence")
- "Existence Axiom" is retired from every page. Gregory is a tuning fork for Continuity. — **in repo** (0 hits)

### Residue
- The "worked residue" idea is dropped. Prime-numbered fragmentation replaces it. — **in repo**
- There are four fragments, one per Axiom, in prime piece counts: Dissolution 2, Transformation 3, Boundary 5, Convergence 7, for 17 in total. — **in repo** ("Four fragments, seventeen pieces, split by Axiom bias in prime number")
- Pieces of the same fragment yearn toward each other. — **in repo** ("yearn" in 8 files)
- Four fragments brought together cause a recurrence of the contact-event. — **in repo** (inference; listed as a known item at turn 3; not re-grepped)
- Pieces are scattered across the spheres. — **in repo** (inference)
- Convergence is the Rod of Seven Parts. The tyrant ship's Containment Engine, Fourth Series, was built by Ostekk to harness a Rod piece. The Lantern is also tied to the Rod. These ties are old and mostly unknown. — **in repo** (Containment Engine in 12 files, Lantern in 11)
- Boundary: one piece is housed in A.T.L.A.S. at Caelestis, held in the Brig. It points toward its siblings and partially reads world-hearts. — **in repo**
- Dissolution is the Runekeeper's fragment. Its two pieces oscillate, and the cycle conceals Lunarfoot. — **in repo**
- Using residue artifacts is unsanctioned and carries moral weight (the Restorers' "grave-goods"). — **in repo** ("grave-goods" in 1 file)

### A.T.L.A.S.
- The artifact is an acronym, written A.T.L.A.S. with no "the" and no "World Surveyor" or "commonly called the Atlas". — **in repo** (18 files), with leftovers: **conflicts** (5 files still say "World Surveyor", for example a notes file: "Click into Artifacts → World Surveyor")
- The network's real target is A.T.L.A.S., not the charts. Charting may exist as worthwhile misdirection. The thefts become more prominent when the crew returns to Caelestis. — **in repo** (inference; vocath-operation page covers the thefts)

### Vecna and his network
- Vecna nudged the Zenith on Fonains because he wanted a Monolith there. He did not know Tharizdun had corrupted that Monolith. Tharizdun used the event to pursue planar rifting that could break his chains. — **in repo** (Tharizdun in 11 files; prime/working/tharizdun.md)
- Lola's Boys (Korey's Fonains campaign party) destroyed the Fonains Monolith. Its destruction forced Vecna to move from saturation to precision. This sets up a late-game cross-campaign payoff in a Vecna monologue. — **in repo** ("Lola's Boys breaking the Monolith hurt both of them"; fonains-shard.html)
- Vecna's spell is a figure across the cosmos that gets one cast. Whatever the outcome, the Continuum carries on. — **in repo** (inference)
- The working needs residue pieces for precision, multiple pieces to reach the world-heart network, and a connection to the Core (late, from search). — **in repo** (inference; Remaking section "What the working requires now")
- Spell ladder: three primed worlds in one system make a node, and three nodes make a sphere ready. Each node links to nodes in other spheres, and the links are world-heart routes. One node per sphere is reserved for the link to the Core. Five spheres give nine primed worlds per sphere and forty-five in all (late, from search). — **in repo** ("Nine primed"; chart: "A node is a system with three primed worlds; a sphere is ready at three nodes")
- Final symmetric figure: each sphere's three nodes form a triangle. The two outer nodes link across to non-neighbouring spheres, and the middle node links only to the Core (late, from search). — **in repo** (inference; chart has intended and achieved modes)
- Vecna's lieutenants hold the cross-sphere pairings, and each knows part of the geometry (late, from search). — **in repo** (inference; lieutenant text present; "The five lieutenants. Shortened to the enna")
- Tharizdun's rifting feeds the weather of reality. The weather itself stays ownerless Convergence strain. — **not in repo** ("weather of reality" 0 hits; Spine still has "COSMOLOGICAL PRESSURES")
- The weather of reality is an escalating, ownerless pressure from an Axiom under strain, to be tracked on the campaign view. — **not in repo**
- The "escalation to ships" line came from an old Voyage 002 theft plan and is removed (late, from search). — **in repo** (inference)

### Places
- Krynn and Fonains share one Wildspace system (SYS-04), inside Caelestis's sphere. — **in repo** (realms/sys04.html: "W-21 Fonains, W-10 Krynn")
- In that system an aspect of Bahamut is trapped by Tiamat on Krynn. A silver pseudodragon on Fonains channels it. Fizban will summon Lola's Boys for a one-shot. Most dragons left Fonains for Krynn to fight Tiamat. — **in repo** (krynn.html "An aspect of Bahamut"; "dragons left for Krynn")
- Lunarfoot is in Caelestis's sphere and hidden, because the Wayfinders map the threats it must be protected against. — **in repo** (SYS-06 page)
- Realmspace is a Wildspace system, not a crystal sphere with a Deep Astral shell. — **in repo** ("Deep Astral" survives only in prime/notes/FIXES-DEMO-MIGRATION.md)
- Fleet keeps a perimeter ring of three stations on SPH-01's edge: Hollis Post (west), Strake Station (straight out from SYS-01 on the Tetherbreak bearing) and Cairn Station (east, between the SYS-01 and SYS-04 bearings). Calder Post is cut (late, from search). — **in repo** (chart: "Eastern end, between the SYS-01 and SYS-04 bearings"; Calder 0 hits)
- The Tetherbreak approach lane runs from Realmspace to Strake, and the "edge run" connects Strake to Cairn (late, from search). — **in repo** ("edge run" in 5 files)
- Cairn Station sits in astral dreadnought territory. — **in repo**
- SPH-01's perimeter faces the center and the neighbouring spheres, watching for incoming traffic (late, from search). — **in repo** (inference from the chart layout)
- Draft FIA placements: Cogfast Enclave on Toril (Gregory's origin), W-21 Fonains in SYS-04, W-34 in Virenspace. — **in repo** (Cogfast on toril.html marked "in draft"; W-21 Fonains present; W-34 in 3 files)

### NPCs and PCs
- Clint Dashforest, a Caelestis instructor and a PC from a Fonains one-shot, was on the Bellwether Crow on the way to Cairn. He seized the boarders' craft and broke away, ended up on W-21 Fonains, and brought laser pistols there. — **in repo** (dossiers/clint.html: "seized the boarders' craft … a psychic wind carried him out of the system")
- The eye-in-a-wheel ambushers are Vecna's network. — **in repo** (inference)
- Wan and Tu are two separate hosts. The Dissolution fragment is forming in them, and their arriving home produces a Zenith. — **in repo** (crew/tumak, spine, plot-hooks)
- Saerthe Abizjn is male ("he"). — **in repo** (Voyage Briefing 002: "he mentions … my miniature ship has gone missing")
- Boogie's Fonains Monolith shard came from a shipment he inspected without authorization (see his backstory in Drive). It ties to Vecna's network. — **in repo** (fonains-shard.html; vocath-operation: "artifact-bound shipment")
- Saerthe's missing miniature ship is a thread, and half of it ended up inside Boogie (late, from search). — **in repo** ("miniature" in 7 files, "half ship" in a runsheet)
- Vocath is spelled with a C. — **in repo** (36 files; the single "Vokath" hit is a search-alias list)
- The neogi in Voyage Briefing 002 carry Astral scent, meaning they came from another system, not phlogiston scent. — **in repo**
- Astra lives in SPH-01 as a moving presence, with Starchild tethers to Virenspace and Casey (late, from search). — **in repo** (inference; astra-virex dossier exists)
- Constellations: one is seen inside Mirt's wardrobe (visible from Virenspace), and one is in Bartholomew's chest (probably Realmspace). Their meanings are decided at the table. — **in repo** (constellation in 17 files)
- Astra's wound was given in chat as "a disturbance in Continuity" (Claude's wording, flagged for Korey to check). — **conflicts** (repo dossier: "wounded by a Seam — Transformation and Boundary overlapping"; repo is newer and likely supersedes)

## Superseded
- "Drop spheres, call them wildspaces/systems" (turn 8) → spheres return as clusters of systems, with the Flow between them (turn 18).
- Realmspace at the center of the map; a placeholder "central anchor" (confluence, dead god or old structure) → the center is a black hole formed from the Reach world, with the Core and the Radiant Citadel.
- The Hollow as a hidden site inside or beyond the center, far from the cluster → the Hollow concept is retired. The Reach world's remains are the black hole beneath the Core.
- The Reach-monolith as a separate monolith at the Hollow → the Reach-monolith is the Core, the first Monolith, which is also where the Radiant Citadel sits.
- The Core layered "beyond the event horizon" → "the approach to the center".
- Fonains in an adjacent sphere, then a "Material sphere" holding Fonains and Krynn → Krynn and Fonains share one system inside Caelestis's sphere.
- "Tharizdun and Vecna further corrupted" the Fonains Monolith → Vecna nudged the Zenith, and Tharizdun corrupted the Monolith without his knowledge.
- "World Surveyor" as the common name, with A.T.L.A.S. as the formal one → "the Atlas" (turn 31) → **A.T.L.A.S.**, the acronym only.
- The Vocath → Vokath rename → reverted. Vocath is spelled with a C.
- "Existence is the Prime Continuum" versus the page's "Continuity is Existence" → both are existence. The Prime Continuum is the cosmos, and Continuity is what the Axioms produce in it.
- Astra "wounded by the Existence Axiom" → "a disturbance in Continuity" (chat) → repo now says "a Seam — Transformation and Boundary overlapping".
- The neogi's "phlogiston scent" as a cross-sphere clue → Astral scent, meaning from another system.
- Designations S1 with two-letter systems (RS, VS, AE, AW, LF, KF) and worlds like VS-1 → SPH01, SYS-01, W01 → SPH-01, SYS-01, W-01, with the FIA sharing the numbering.
- Uncharted systems (Lunarfoot's, the Ascension World's) carry no designation → every sphere, system and world carries one (SYS-05, SYS-06).
- Strake Station as the Fleet's sanctioned Flow-crossing waystation (Claude proposal) → Strake is a perimeter post on the Tetherbreak bearing.
- A perimeter ring of four posts including Calder Post, with Cairn beyond the sector limit → three stations: Hollis, Strake, Cairn.
- Clint Dashforest "went overboard" → he seized the boarders' craft and broke away with it.
- Spell scale of "twelve linked Monoliths across four systems per sphere, sixty total" → three primed worlds per node, three nodes per sphere, forty-five worlds.
- Node links "never inside own sphere"; each node has two cross-sphere partners → symmetric figure: an intra-sphere triangle, outer nodes crossing to non-neighbouring spheres, and the middle node linked to the Core.
- "Reach civilization had descendants" as a diaspora (What If) → the descendants live only in the Radiant Citadel.
- Twins "sent as a hedge"; "the world decides what reaches it" → the fragment is forming in Wan and Tu.
- A blanket "positive phrasing" rewrite of Cosmology → reverted. Only references to nonexistent concepts are removed.

## Open
- The final name for the center (Korey disliked "the center" late in the chat). The outcome is not captured.
- What the Watchers are doing right now. Deferred to "another pass" and never done in the turns read.
- The name of Vecna's network. "Network" is overused.
- A new name for the world-heart network.
- A possible new name for "residue".
- Names for the spheres (SPH-01 included) and for designated systems.
- How the Flow works and how it is crossed.
- Which residue pieces Vecna holds: a holdings ledger of each piece, who has it, and who knows.
- Why SPH-01 holds pieces of three fragments: carried there over time, or an abnormal concentration.
- How Boogie's shipment connects to Vecna's network.
- How Clint Dashforest actually crossed to Fonains.
- Homeworlds for Casey (possibly tied to the "deliberate" 1486 meteor in SA-002), Bartholomew (a celestial druid tradition) and Boogie.
- Recruitment pathways for cadets from worlds without spelljamming: Watcher recruit (Sol), native spacefaring world, and a third still to choose.
- Virenspace detail: whether Zerathis recruited other Starchildren.
- Placement of Vetharra (W-47) and Kaldris (W-52). The draft gives each a new system in SPH-01, with Kaldris near SYS-03.
- Whether the Realms "small, personal ascension distinct from the Sigil event" (Ascension World) is separate from Vecna's godhood.
- Why the approach to the center harms Reach-born gods, and how differently it affects later gods.
- Whether the Restorers know that reversing the Core's archived loss would undo the cosmos.
- Whether the four Axioms held their current configuration before the Reach.
- Whether the Aethris ritual failed or completed, and whose operation it was (audit #11). The repo now says "incomplete: the Fortuned need Sol to finish it".
- Node 1 timing (pre-campaign versus Academy close); WM-003 sourcing; the Strake/Cairn mass-signature link (audit items 13–15).
- Whether Ryeback's death in the galley fire is still planned.
- Campaign Board (arc timeline plus parallel tracks) and Chronicle (eras, plus "how they got to Caelestis") were never built.
- The weather of reality still needs a canonical page and a tracked status.
- Map aesthetics: soften the CAD look. A constellation generator would need persistence or seeding.

## Documents produced
- **Caelestis Cosmos Map** (artifact, https://claude.ai/artifact/68pMw9GquWJAMd7oBuF2rp; file `caelestis-cosmos-map.html`). It went through many versions: a 3D sketch, a top-down chart, two levels, then three levels with the spell figure (intended and achieved modes), constellations, the perimeter ring and a hidden layer. — **reached the repo** as `prime/chart/index.html` ("The pannable DM chart. Cosmos, sphere and system levels, with the spell figure in intended and achieved modes…")
- **Cosmology v2** page (file `prime/cosmology/index.html`, then zips `caelestis-prime-cosmology-v2.zip` with 11–12 files). It added the Structure of the Cosmos, the Reach, the Core, residue, What Vecna wants, world-hearts and Gods. — **reached the repo**
- **DM page fix batches** (zips): `caelestis-v22.zip` (Hollow removal, designations, Remaking, Wan and Tu, Saerthe), `caelestis-perimeter.zip` (WM-002, Realms ring), `caelestis-dm-updates.zip` (Remaking spell geometry, Cosmology scale, rules/wayfinder-path-dm, Navigation Records). — **reached the repo** (content verified present; individual commits not checked)
- **Navigation Records mockup** (artifact, https://claude.ai/artifact/AftaLmWzkrCCu8mX8TE8fN). It shows a player holo chart with a Holo/Survey chart switch. The real page went into `navigation-records/index.html` via the zip. — **reached the repo** (inference; not verified)
- **Locations tab values** (tracker paste-in): Viren Star System becomes Type `System`, plus a new Realmspace row. — lives in the Google Sheet; not checked.
- **Draft Astral route map** (inline visualize widget, turn 9). — chat only, superseded by the artifact.
