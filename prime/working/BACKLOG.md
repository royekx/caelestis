# Backlog

Everything still to rule on or fix before the material is written into pages.
This is the planning layer: open questions live here and nowhere on a page. See
[README.md](README.md) for the flow and the writing rules.

Built 2026-10-25 from the chat sweeps, the module sweep, the working drafts,
and an audit of every published prime page. Truth ran in this order: Korey's
rulings of the day, his saved decisions, timeline canon, drafts, chat sweeps
(later beats earlier), published pages.

## Item types

- **decide**: Korey rules. Tagged *(shape)* when it changes the overall picture, *(prep)* when the next sessions need it.
  The item names the options and every page it
  touches. When one question touches several pages, the full item sits on one
  page and the others point to it.
- **later**: a detail that waits until the crew gets there or the thing becomes active. Kept intact; not served for ruling now.
- **fix**: a page line is wrong or stale. Checked against the current page.
- **drop**: retired material to remove.
- **add**: a settled fact missing from its page, written the way it will read.

Decide items ask for the shape of a thing, not every detail. Specifics wait until play needs them; a decide that only matters once the crew gets somewhere can stay open until then.

Work order: rule the cross-cutting decisions first, then go file by file. A
ruled item becomes a STAGING.md entry; `add`, `fix` and `drop` items move to
staging once Korey has read and accepted them.

## Sections

| Section | Covers | decide | later | fix | drop | add |
|---|---|---|---|---|---|---|
| Cosmology | cosmology/, glossary/, chart/ | 10 | 12 | 14 | 0 | 3 |
| Locations | locations/ (Fonains stays in its own section) | 21 | 24 | 0 | 0 | 1 |
| Fonains | locations/fonains.html, factions/cretez.html, dossiers/vanifer.html, the Fonains Canon Reference doc, the timeline's Fonains lane | 4 | 12 | 0 | 0 | 0 |
| Timeline | the rest of timeline.json | 0 | 1 | 1 | 0 | 0 |
| Factions | factions/ | 3 | 10 | 1 | 0 | 2 |
| Campaign | campaign/: index, voyages, plot hooks; opposition/; principles.html | 16 | 1 | 2 | 0 | 1 |
| Dossiers | dossiers/ | 18 | 15 | 0 | 0 | 1 |
| Crew | crew/ | 10 | 19 | 0 | 0 | 0 |
| Artifacts and vessels | artifacts/, vessels/ | 10 | 7 | 3 | 0 | 1 |
| Rules | rules/, statblocks/, tracker/, wayfinder-path/ | 9 | 3 | 20 | 0 | 20 |
| New pages | 12 proposed pages, the hub, notes/ | 3 | 19 | 4 | 2 | 23 |
| Automation and tracker | the session pipeline and tracker alternatives | 0 | 10 | 1 | 0 | 0 |
| Player pages | restricted/ and other player pages | 0 | 0 | 0 | 0 | 0 |
| Repo and process | page conventions, the record's schema, process docs, deploy | 0 | 10 | 4 | 0 | 1 |
| **Total** |  | **104** | **143** | **50** | **2** | **53** |

The repo refactor has its own draft: [repo-refactor.md](repo-refactor.md).

## Cross-cutting decisions

Each settles items on several pages at once. Rule these first.

1. ~~**Residue piece counts by Axiom.**~~ *Ruled: Dissolution 2, Distinction 3, Expansion 5, Consolidation 7, Determination 11 (STAGING, Cosmology).*
2. ~~**Aperture or Atrium.**~~ *Answered: Atrium.*
3. ~~**Does opening a heart need a Monolith?**~~ *Ruled: no; linking does (STAGING round 2).*
4. ~~**A name for Vecna's working.**~~ *Ruled: the Circle of Fifths, his name for it; GAL-01's part is the eye inscription (STAGING, Campaign).*
5. ~~**Act structure and the Citadel.**~~ *Ruled: Citadel and Core are late Arc 3 or Arc 4.* Level bands per arc are a new decide on the spine.
6. ~~**N'ghathrod's five centuries.**~~ *Ruled: exile from Glyth about four centuries ago; centuries of searching; the push for hearts only in recent decades.* Which residue piece gave him long life is a new decide.
7. **What the H'Catha meteor is and why Caelestis wants it.** *Narrowed: containment for Caelestis, and the Sovereign Eye can't see through it; open: the Ortholith-fragment layer and why now.*
8. ~~**How the Seekers divide.**~~ *Ruled: the Seekers are the faith; each chapter is named for what it seeks (the Seekers of Secrets are one); every chapter worships Vecna, often under another name, unaware of the others.* Whether N'ghathrod's colony is a chapter is a new decide.
9. ~~**Astra's name and wound.**~~ *Ruled: any of the three names; the Axiom strain's ripple woke and broke it.*
10. ~~**The real elder brain.**~~ *Ruled: the Session 27 brain is his; it teleported out.* Where it went is no longer a question.
11. ~~**Where Oerth lies.**~~ *Ruled: GAL-01, in Greyspace; Oerth is the eye's retina (STAGING).*
12. **Runes 17–19 as Anchors.** Fixed places Tumak goes to is settled; what they grant is open. Crew (Tumak), rules.
13. ~~**Can a taken person be released?**~~ *Ruled: the taken outlive N'ghathrod, each keeping part of him.*
14. ~~**Fonains–Caelestis offset.**~~ *Ruled: Caelestis's present is level with Fonains Session 28, two to three months after the Monolith broke (STAGING § Timing; locations/fonains.html DM notes).*
15. ~~**Ostekk-6 as sole survivor.**~~ *Ruled: the only active survivor; Ostekk-2 is inert and can be healed.*
16. **The tracker and session ingest.** Keep the repo JSON record and in-chat runbook, or move to an alternative. See the Automation and tracker section.
17. **Dossier tab names and "Open" subsections.** *Tab names answered: the four tabs stand. Open: whether "Open" subsections may stay in DM notes.*
18. ~~**How Clint left the Bellwether Crow.**~~ *Ruled: a deliberate dive through a color pool with a sister artifact of A.T.L.A.S.* *Answered (section 4): the artifact is A.T.L.A.S.'s sister, a Distinction housing (STAGING); its name is a later item under artifacts/atlas-sister.html.*
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
- Dossier tab grammar: PAGE-SHAPE's four tabs stand *(fix)*
- "Autognome" in V003 and V004 stays as history *(fix)*
- Dossier tab names: keep the four tabs *(fix)*
- The out-of-sequence SJN-2417 entry *(drop)*
- How the Toll shows in play *(add)*
- What completing the inscription costs Tumak *(add)*
- CON-312 and the Almosts *(add)*
- Wayfind reach gated by matched runes *(add)*
- Distance bands *(fix)*
- Tiered mishap consequences *(add)*
- Wayfind cost by band *(add)*
- How separated twins reunite *(add)*

Four of these rest on Korey merging a pull request or making a pick rather than a direct ruling: the dossier tabs, "autognome" as history, the A.T.L.A.S. expansion, and the Drive root.

## Second looks

All five were ruled on 2026-10-25 (round 2): Tarroway is a keep-or-cut decide; constellation numbers follow the bearing scheme; Vth'oramu is "the passage to a new home"; Clint was seen going overboard (how is a decide); opening needs no Monolith, linking does.

## Player record flags

Nothing from prime goes into `data/`. These need a hand edit, if Korey agrees:

- `data/items.json` has Boogie holding the whole derelict logbook; the settled version is half.
- `data/npcs.json` calls Mirt "the head of Caelestis".
- `data/sessions.json`, `quests.json` and `items.json` call Ostekk-6 an autognome; OSTEKK units are automatons.
- DM dossiers with no record, though the crew may have met or been told of them: Polly Geim (Casey's brother), Clint Dashforest, Qitru, Quartermaster Halix Verrow, the Crystalline Retrieval Construct, Ezra Ahl-Sier. Each gets a record at first contact; check whether any contact has already happened (section 5).
- `data/npcs.json` names Miken "Miken"; the DM dossier and the Fleet row use his full name, Miken Haverstance. Add the surname to the record if Korey agrees.
- `data/player-characters.json` (Sol Fortuna, Voyage 4) says he "used Misfortune's Favor to draw ill luck onto his own shoulders". Misfortune's Favored is the oath's level-20 capstone and was earlier the working name of his Misfortuned feature; the Voyage 4 use reads as a self-Jinx or a Misfortuned use. crew/sol.html leaves the feature unnamed. Confirm the name and correct the line if Korey agrees.
- `data/player-characters.json` (Casey Geim) lists the star-etched constellation shirt under Notable Items, but `data/items.json` and Tumak's record have Tumak holding it (Casey passed it to Tumak's bunk in Voyage 1). crew/casey.html and crew/tumak.html follow items.json. Drop it from Casey's Notable Items if Korey agrees.
- `data/player-characters.json` gives all six cadets "Clearance: Sailor", and Tumak's Voyage 3 bullet has Mirt granting the crew sailor-level clearance; the BACKLOG decide "The Sailor gate at the Sea Dock" (crew/gregory.html) holds that a cadet inherits only Visitor and that part of the Sea Dock needs Sailor. Gregory's Voyage 3 bullet (locked out of a fleet-clearance category by his cadet star) sits between them. Reconcile once the decide is ruled.
- `data/player-characters.json` (Boogie) lists "shield"; the DM page names it the Shield of Expression, a gift from Boom-chik, and it has no item record in `data/items.json`. Add the name or an item record if Korey agrees.
- `data/npcs.json` (Winston Ryeback, Voyage 6) says he "was told the beholder had been taken care of, and took it to mean the crew had killed it"; the ruling is that Tumak told him outright that the crew killed it (dossiers/winston-ryeback.html).

## Still coming in

Every chat sweep is complete. Campaign Planning, the last partial sweep, was
read to its end (turn 416) and merged on 2026-10-25.

# Cosmology

Items for `cosmology/index.html`, `glossary/index.html` and `chart/index.html`.
Order under each page: decide, fix, drop, add.

### cosmology/index.html

- **[fix]** Tharizdun is she
  Tharizdun is female. Pages and drafts that call her he/his/him: cosmology/index.html, locations/fonains.html, locations/index.html, dossiers/thessalar.html, crew/boogie.html, artifacts/fonains-shard.html, factions/academy-fleet.html, chart/index.html, working/tharizdun.md, and the Fonains Canon Reference doc. STAGING and the Connections layer are done.
  src: Korey, 2026-10-27
  done: cosmology and glossary (distribution section 1, 2026-10-27); factions (section 2); dossiers/thessalar.html (section 5); crew/boogie.html (section 7).

- **[fix]** Dharra, not Darra
  The Cre'Tez sister is Dharra. Fix the Fonains Canon Reference doc and any page that spells it Darra. STAGING and the Connections layer are done.
  src: Korey, 2026-10-27

- **[later]** What Gregory and Sol want, in the theme
  The theme's line names what each crew member is missing except Gregory and Sol. Set theirs when the character arcs are worked.
  src: Korey, 2026-10-27

- **[fix]** Retrofit the five Axioms across the wiki
  Ruled (STAGING, Cosmology § The Axioms): the Axioms are Consolidation, Expansion, Dissolution, Distinction and Determination, acting on energy that was always there. The old four map: Convergence → Consolidation (the Rod of Seven Parts is the Consolidation fragment, 7 pieces); Dissolution stays Dissolution, now the mixing of everything into sameness (the twins' fragment, 2); Boundary → Distinction (A.T.L.A.S., its sister and the third piece, 3); Transformation → Expansion (the 5-piece fragment). Determination's fragment is new: 11 pieces, none found. A Zenith is a world at its peak of Distinction, not "Convergence driving a system to maximum expression"; Monoliths are Continuity's response, and the strain from their rise is a byproduct of Vecna's work, not a weight on one Axiom. The Transformation–Boundary seam is cut. Every backlog item that quotes an old Axiom name reads under this mapping.
  Pages: prime/cosmology (the Four Axioms, Continuity, the strain, the seam section to cut), prime/glossary, prime/chart, prime/artifacts/* (index, rod-of-seven-parts, runekeepers-fragment, transformation-fragment → expansion-fragment, containment-engine, fonains-shard), prime/campaign/* (index, ascension, spine, plot-hooks, what-if), prime/crew/index.html and tumak.html, prime/dossiers/nghathrod.html and the-runekeeper.html, prime/factions/* (academy-fleet, deities, runekeepers, vthorama), prime/locations/index.html and wayfinders-homeworld.html (concealment rides on the Dissolution fragment's cycle), prime/rules/index.html, timeline.json, working/vecna.md. Done with the distribution pass. STAGING, the survey and the Connections layer already use the five.
  src: Korey, 2026-10-26
  done: prime/cosmology and prime/glossary (distribution section 1, 2026-10-27); opposition/vecna.html (pilot); prime/factions (section 2); prime/locations (section 3); prime/crew/tumak.html (section 7).

- **[later]** Place GAL-01's inscription on the chart
  Ruled: GAL-01's inscription is the eye he lost, fifteen heart worlds (ten lids, five iris; Korey 2026-10-27, from sixteen, so the count is a multiple of five); the iris worlds are key (STAGING, Campaign; diagram 2026-10-26). Left for when play needs it: which systems hold which strokes, and whether any known system (Realmspace, Krynnspace, Virenspace) lies on the figure. Greyspace is not on it: Oerth is the retina every eye world links back to (STAGING, Campaign).
  src: Korey, 2026-10-26

- **[decide]** Who works the other galaxies' cores *(later)*
  Ruled: in each galaxy another being works its own core, as Vecna works GAL-01's (STAGING, Campaign). Left: who they are (lesser gods like Vecna, or other things), and whether they know of each other, cooperate or race for the center. Only matters when play crosses a galaxy.
  src: Korey, 2026-10-26

- **[decide]** If GAL-01 falls *(shape)*
  Ruled: GAL-01's core waking for Vecna takes GAL-03, GAL-04 and GAL-05 with it (STAGING, Campaign). Left: what the campaign becomes in that state: crossing galaxies to close cores, a last stand at Rykoe, or the end.
  src: Korey, 2026-10-26

- **[decide]** The inner ring of gods *(shape)*
  Ruled: greater gods in the drift between galaxies, lesser gods inside a galaxy stopped at systems (STAGING, Cosmology). Proposed: a third ring (demigods, saints, the newly ascended) that can enter a system and stops at a world's heart; and where Vecna, a lesser god, sits among them.
  src: Korey, 2026-10-26

- **[fix]** Spheres become galaxies, everywhere
  Ruled (STAGING, Cosmology): the cosmos is five galaxies around Rykoe; "sphere" as a region of space is retired, and SPH-0n becomes GAL-0n; Oerth moves to GAL-01. Pages: prime/cosmology, prime/chart (labels, the sphere layer, "the godless sphere"), prime/glossary, prime/locations/*, prime/factions/*, prime/campaign/*, timeline.json, working/divine-rules.md, the README naming rule, and the Fonains Canon Reference doc. Every backlog item below that quotes "sphere" reads as "galaxy". Done with the distribution pass. The survey, the Connections DM layer and STAGING already use galaxies.
  src: Korey, 2026-10-26
  done: prime/cosmology and prime/glossary (distribution section 1, 2026-10-27); prime/factions (section 2); prime/locations (section 3).

- **[decide]** The calendar the Cycle counts *(later)*
  Pages date orders by Cycle (1486, 1489, 1490); the survey uses Cycle 1490 as the present for provisional designations. Set what the Cycle counts from, and how Toril's reckoning, Fonains's "year 425" and Krynn's calendar line up against it.
  src: Korey, 2026-10-26; restricted/ orders

- **[later]** Spelljammer's own terms
  Korey wants to wear down the Spelljammer barriers ("spelljamming" means nothing for a ship); spheres have become galaxies. Review the remaining genre terms (spelljammer, spelljamming helm, wildspace, Astral Sea, phlogiston) for plainer replacements during the overhaul.
  src: Korey, 2026-10-26

- **[fix]** Replace the W-, SYS- registers with the CSC scheme
  Ruled (STAGING round 12): designations follow real astronomy; nothing has reached the players. Retire every W-0n and SYS-0n designation and replace it with a CSC number, a star-and-letter designation, or the body's proper name. Pages: prime/chart, prime/cosmology, prime/locations/* (realmspace, toril, hcatha, aethris, glyth, fonains, krynn, virenspace, sys04, tetherbreak, wayfinders-homeworld, ascension-world, caelestis, strake-station, cairn-station, meteor-hub, astral-sea), prime/campaign/index.html, prime/timeline/timeline.json, and restricted/ (fr-005, sa-002, wm-003, wm-006). Fonains's W-021 and Aethris's W-008 go with them. Do this with the distribution pass, and save the known systems (Realmspace, Virenspace, Aethris's system, Krynnspace, Glyth's) into the survey first so the new designations have one source.
  src: Korey, 2026-10-25 (round 12)
  done: prime/cosmology (distribution section 1, 2026-10-27); prime/locations and the chart's page links (section 3).

- **[later]** Game systems for GAL-03, GAL-04 and GAL-05
  Ruled: assigned ahead of time (STAGING round 12). Set when a campaign heads there.
  src: Korey, 2026-10-25 (round 12)

- **[later]** The survey becomes part of the record
  prime/data/survey.json is checked by scripts/survey.js, not scripts/data.js. Fold it into the record's checks, and decide how the chart reads it, during the repo refactor.
  src: Korey, 2026-10-25 (round 12)

- **[decide]** A different game system in each galaxy *(shape)*
  Korey's idea (2026-10-25): sub-genres already differ world to world; game systems go one step further and differ sphere to sphere. The cosmology carries it: what a sphere holds (prime gods, good gods, the Weave) shapes how magic and reality work there, so the rules change when the crew crosses. SPH-02 runs as Call of Cthulhu. It is not godless: its gods are eldritch, not good, and they gathered there, each drifting toward its greatest worship. No prime or good gods hold it, and there is no Weave; the Axioms and Continuity still hold. (Fix: "the godless sphere" in STAGING round 2, the chart and the organizing-framework sweep; SPH-02 needs a proper name.) Caelestis's sphere runs as D&D 5e.
  To shape: what physically or metaphysically changes at a sphere's edge, and what the crew feels crossing it; which presences set a sphere's system (prime gods, good gods, the Weave, an Axiom's lean); what happens to a character's abilities across the line (divine magic fades, arcane magic falters, a sanity track appears); which systems SPH-03 to SPH-05 lean toward, decided only when a campaign goes there; whether worlds inside a sphere keep their own genre on top of it.
  src: Korey, 2026-10-25 (chat); inbox/chat-organizing-framework.md (SPH-02, cosmic horror); memory-canon (a different vibe on each world)

- **[fix]** Residue counts by Axiom *(answered)*
  The split is Dissolution 2, Distinction 3, Expansion 5, Consolidation 7, Determination 11 (STAGING, Cosmology). The pages use Boundary 2, Dissolution 3, Transformation 5. Correct each:
  - This page's residue table, and the line "A Boundary piece points toward its one sibling. A Convergence piece feels six." Change to: "A Boundary piece points toward its two siblings. A Convergence piece feels six."
  - Glossary "Residue" ("split 2 / 3 / 5 / 7 by Axiom bias"): name the order, "Dissolution 2, Distinction 3, Expansion 5, Consolidation 7, Determination 11".
  - `artifacts/atlas.html` and the artifacts register: wherever A.T.L.A.S. points at "its one sibling" or "the only other Boundary piece in existence", it points toward its two siblings.
  - `artifacts/runekeepers-fragment.html` ("all three pieces"): "both pieces".
  - The twins' Zenith text on `locations/wayfinders-homeworld.html`: the fragment's two pieces forming in both twins makes three poles for the first time.
  In-world line for the table intro: "The Dissolution fragment lies in two pieces, the Transformation fragment in three, the Boundary fragment in five, and the Convergence fragment, the Rod of Seven Parts, in seven."
  src: memory-canon (campaign-canon, prime-number counts; the Zenith "three poles"); chat-cosmic-campaign-structure § Cosmology redesign
  answered: memory-canon (campaign-canon, prime-number counts, locked); inbox/chat-organizing-framework.md § Residue (Settled). The Boundary-2 order in chat-cosmic-campaign-structure appears only in Claude's rewritten page text; a check of that chat found no Korey statement making the change, so memory stands.
  done: the cosmology residue table and the glossary (distribution section 1, 2026-10-27); locations/wayfinders-homeworld.html (section 3).

- **[fix]** The center is Rykoe
  Replace "the center" (as a name) with Rykoe across this page, the glossary, the chart and every page that names it. The Core Monolith keeps its name; those who dwell in it call it Aurath. Plain phrases like "toward the center" may stay where they are directions, not names.
  src: Korey, 2026-10-25 (round 9)
  done: prime/cosmology and prime/glossary (distribution section 1, 2026-10-27); prime/locations, the centre now named Rykoe (section 3).

- **[later]** Names for the spheres and designated systems
  SPH-01 included. Listed in the page's § Open.
  src: framework § Open

- **[later]** How the Flow works
  Settled: the Flow, also called the phlogiston, fills the space between spheres. It is combustible and silences gods, because a god's realm is anchored to its own sphere and a vessel in the Flow has left it. Crossing it is uncommon, restricted to senior crews, and belongs to late-game play; cadet operations stay inside SPH-01.
  Still open: how a vessel crosses it (method, hazards, duration), and how it relates to the Astral Sea's intensity, which changes between systems and between spheres. Listed in the page's § Open.
  src: framework § Open; memory-canon (campaign-canon, Astral Sea intensity)
  settled part: inbox/chat-organizing-framework.md § Cosmic structure (Settled)

- **[add]** Why Caelestis's sphere holds pieces of three fragments
  Ruled (STAGING round 8). Write into the residue section, and take the question off this page and `artifacts/index.html`:
  "Caelestis's sphere holds pieces of three fragments, partly by chance and partly by pull. Pieces of one fragment draw toward each other. Once a few came to rest near Realmspace, more of their fragment followed."
  Touches: this page, artifacts/index.html.
  src: Korey, 2026-10-25 (round 8); framework § Open
  done: prime/cosmology (§ Residue); artifacts/index.html is left (distribution section 1, 2026-10-27).

- **[later]** Whether the four Axioms held their current configuration before the Reach
  src: framework § Open

- **[later]** Echo planes per sphere
  Whether every sphere has a full set of echo planes or only some. (The second half of this open line, where the Reach-born gods' realms anchor, is answered by divine-rules; see the fix below.)
  src: framework § Open

- **[later]** Whether a world's heart has a counterpart in its echoes
  src: framework § Open

- **[decide]** The four named weathers *(prep)*
  Fraying, Turning, Walling and Gathering are an unreviewed Crossing Companion proposal. Lock or cut before they go under the weather section.
  src: astral § Open

- **[decide]** Which places Caelestis has charted
  Every place carries a designation in the survey, charted or not (Korey 2026-10-27: "Every place needs a designation for my purposes but it may not be charted"). Go through the survey and mark each system and body charted or uncharted. Known uncharted: the Wayfinders' homeworld's system.
  src: chat 2026-10-27

- **[add]** A charted flag in the survey, with a tag and a view toggle
  Add `charted` (true/false) to systems and bodies in prime/data/survey.json and to scripts/survey.js's check. The Chart shows an "uncharted" tag on uncharted places and a toggle between the full survey and Caelestis's charts only. In-world pages give a designation only to charted places.
  src: chat 2026-10-27

- **[fix]** The chart shows systems only with the inscription layer on
  In the Erevos Galaxy view, the uncharted systems appear only when the inscription layer is switched on (Korey 2026-10-27). Every system in the survey shows in the base view, charted or not (with the charted tag once it exists); the inscription layer adds only the eye.
  src: chat 2026-10-27

- **[fix]** The flat chart's eye view matches the holochart
  `prime/chart/holo.html` places the fifteen heart worlds in three dimensions so they line up into the eye only from Oerth, and its "Line it up from Oerth" view shows it (Korey 2026-10-27). The flat chart's inscription layer still draws a separate eye over the top-down map, with hearts at positions that don't match the holochart's. Bring them into agreement: plot the holochart's heart positions top-down on the flat chart, and have its "View from Oerth" hand off to the holochart, or drop the flat eye in favour of a link.

- **[add]** Sectors on the chart
  A layer that shades the Fleet's sectors in the Erevos Galaxy view, the Caelestis Sector first, once its systems are decided (see Factions: The Caelestis Sector's systems).
  src: chat 2026-10-27

- **[decide]** Shothragot *(shape)*
  Ruled: its temple was aboard the planar craft, and its true vestige may still be there; Giorge may be heading for it (STAGING round 6). Check the Session 14–15 notes for what Lola's Boys did to it in the Monolith, and whether part of it rides in Ziko's black blade.
  src: Korey, 2026-10-25 (rounds 5–6)

- **[decide]** N'ghathrod's target worlds near Vth'oramu *(shape)*
  Ruled: Vth'oramu is a mothership hunkered on the periphery between systems, sending skiffs to nearby worlds; his landed operations ripple at contract scale after graduation (STAGING rounds 10–11). Left: broadly which worlds in that vicinity he is plotting on (Monolith worlds, worlds with taken in place). Specifics wait until the crew nears each one.
  src: Korey, 2026-10-25 (round 10)

- **[later]** The colony's arms
  Ruled: they echo a hand and an eye without showing them outright (STAGING round 5). The design is open.
  src: Korey, 2026-10-25 (round 5)

- **[later]** The Order's seat
  The Hall of Sight and Sound is its great hall (STAGING rounds 5–6). Name and place the seat itself when the crew is headed there.
  src: Korey, 2026-10-25 (round 6)

- **[fix]** "The only Monolith" on Fonains
  cosmology/#corrupted-monoliths says Fonains's is "the only Monolith ever to carry Tharizdun's crystal and the only one recorded as destroyed", and the chart's Fonains note says "the only one ever to carry Tharizdun's crystal". PAGE-GUIDE bars comparative absolutes on setting pages. Describe the Monolith instead: it formed corrupted, with her crystal replicated into it, and Lola's Boys broke it. locations/fonains.html already does.
  src: section 8, 2026-10-28

- **[decide]** A stabilization for a failing Axiom
  The timeline carried "Convergence stabilizes" (cert canon, t +5): "The Continuum answers a failing Axiom with a stabilization. When it comes, the seat closes permanently. Vecna gets one attempt before it." Its opening event called Convergence "the most stressed Axiom". No finished page has a stabilization, a seat that closes, or a most-stressed Axiom, and section 8 dropped the event and rewrote the other as the Axiom strain. Options: add a stabilization to cosmology/ (#axiom-strain) and restore the event; or leave it retired. Touches cosmology/index.html, opposition/vecna.html, timeline.json.
  src: timeline.json (before section 8); section 8 (C9)

### chart/index.html

- **[fix]** Fonains note: Vecna knew
  Note says "Tharizdun corrupted the Monolith without Vecna's knowledge." Replace: "Vecna nudged its Zenith knowing it would be ridden. Tharizdun's crystal fused into the Monolith as it formed. Lola's Boys destroyed it." Keep the dragons line, which is already right.
  src: session-rulings; tharizdun § How the Fonains Monolith formed

- **[fix]** H'Catha note
  Note says "Beholder toroid ruled by rival hives. The Spire took an adamantine meteor strike." Change to: "Beholder toroid ruled by ten solitary beholder rulers under the Sovereign Eye. An adamantine meteor struck the Spindle. Fourteen days out." Beholders follow 5e (solitary, paranoid); the 2e hive lore is rejected.
  src: memory-canon (campaign-canon, H'Catha; beholders follow 5e)

- **[fix]** Tyrant ship entry
  Kind says "Derelict, Toril orbit"; note says it "Holds the Containment Engine". Update: the crew holds the tyrant ship. The Containment Engine, Fourth Series (Vaelorix's Lantern of Flourishing), is out of Vaelorix's body and seated in the repair bay, and the ship is making the fourteen-day crossing to H'Catha.
  src: memory-canon (campaign-canon, Voyage 006 outcome; Lantern seated)

- **[fix]** Center: why the approach harms gods
  The center's open list has "Why the approach harms Reach-born gods." Answer it in the note: polarity; a god and a heart carry the same charge, and the First Heart pushes hardest. Remove that open line. (Why Reach-born gods suffer more stays a decide; see cosmology.)
  src: session-rulings; divine-rules § Polarity

# Locations

Items for `locations/` pages. Fonains's items are in the Fonains section.
Order under each page: decide, fix, drop, add.
done (section 3, 2026-10-28): the pages were rewritten under `locations/`; what was written is gone from this section, and each page's Still to decide carries the open items below.

### locations/index.html

- **[decide]** Names for CON-055, CON-312, the Astral waystation and the cantina *(prep)*
  All four carry designations or placeholders only. The cantina is in the current prep ring. Touches this page, `locations/waystation.html`, `locations/cantina.html`, chart.
  src: chat § Open

- **[later]** Where the constellations are visible from
  The register's catalogue gives "visible from" for CON-025 (Realmspace and CSC 56973) and CON-055 (Virenspace) only. CON-091 was visible from SYS-05, SYS-07 and SYS-08, which no longer exist; CON-312's Realmspace was a draft. Set both, and what any of the four mean, and whether the wardrobe's sky is CON-055 seen from the tether point or from elsewhere.
  src: realms/index.html § Constellations (old page)

- **[later]** The unplaced registry worlds: W-34, Vetharra and Kaldris
  The old register carried three FIA registry entries without a position: W-34 (an Ortholith established and recording over a natural Zenith, high priority, drafted into Virenspace), W-47 Vetharra (sole standing structure, surface population zero) and W-52 Kaldris (sole standing structure, a Zenith collapse variant labelled "control case"). Re-designate them in the survey and place them, or drop them. The chart still lists all three.
  src: framework § Open; realms/index.html, realms/virenspace.html (old pages)

- **[later]** The crew's unplaced homeworlds
  Casey's homeworld (a star fell on it and Polly left afterward; possibly the Cycle 1486 "deliberate" meteor event in SA-002) and Bartholomew's (Rashemi, a druidic tradition pointed outward) have no place. Place them when their arcs need it. See also the crew section.
  src: realms/index.html § unplaced (old page)

- **[later]** The register's Standing filter
  The register sorts places by Been there, Next and Not yet. That is the crew's progress, campaign state on a setting page. Decide whether the register keeps the filter, or moves it to a campaign view.
  src: Locations review, 2026-10-28

- **[later]** Register order: grouped by system or strict A–Z
  The register lists places grouped by system (PAGE-GUIDE § Registers: "places, grouped by system"), and the same section asks every register for strict A–Z order, with prev/next bars following it. The Locations chain follows the grouped order: Krynnspace → Krynn → Fonains → Aethris. Settle which rule the register follows; if A–Z, reorder the rows and rewire every prev/next bar in locations/.
  src: section 8 (C14), 2026-10-28

- **[later]** Fonains sub-places as pages
  Orerius, the Barrier Peaks and the Trentara Forest are subsections of `locations/fonains.html`, the way H'Catha holds the Spindle. Give one its own page when its section outgrows the Fonains page.
  src: section 8 plan § 2

### locations/realmspace.html

- **[later]** Hollis Post
  Its complement and commander, and whether its readings on the Cairn bearing a year ago caught the mass, are not set. Strake's commander has no name either.
  src: realms/tetherbreak.html (old page)

- **[later]** Two Gardens
  Realmspace's Garden (the asteroid chain bound by one plant) and the tyrant ship's Garden (the greenhouse deck) share a name. Rename one, or let the context carry it.
  src: locations pass, 2026-10-28

### locations/caelestis.html

- **[decide]** What the secret part of Caelestis is *(prep)*
  Seeds: the office that decides what goes into the Brig; an Order liaison; what the station was before it was a school. Also on factions/fleet.html Still to decide.
  src: astral § Open; memory-canon (campaign-canon, Mirt)

- **[decide]** Who renews the Forbiddance while Saerthe is away *(prep)*
  Saerthe renews the Forbiddance nightly on a 30-day cycle, and he also holds the tyrant ship's helm at H'Catha and casts for the Flighty Foundling (inference: he cannot do both). Options: a deputy renews the ward while he is away; or another caster holds the Forbiddance.
  src: memory-canon (campaign-canon, approach to H'Catha; Flighty Foundling); realms/caelestis.html

- **[decide]** The station's proportions
  Memory gives them: the Academy about a fifth of Caelestis, the Fleet Corps about three-quarters (a part the crew has not seen yet), the remaining sliver secret. Neither STAGING nor an answered item states them, so the page says only that a part is kept secret. Confirm before the page carries the numbers.
  src: memory-canon (campaign-canon, Mirt); astral § Caelestis structure

### locations/toril.html

- **[later]** Where the Lantern points
  In Toril orbit the Lantern of Flourishing's pull points straight down at the world. What lies there is not set.
  src: memory-canon (open-decisions, Voyage 007 intent)

### locations/hcatha.html

- **[decide]** What the rulers can see *(prep)*
  (a) The Sovereign Eye lets every ruler see all, so none can act openly against another (memory, "H'Catha sovereign", which supersedes earlier options).
  (b) Each ruler sees only its own domain, day and night (astral § The Pact, a later turn).
  Standing of the sources: (a) is in memory, the higher source. (b) comes from Claude's turn-57 rewrite, which Korey accepted only as "a very good foundation" without confirming each line, so it does not overrule memory on its own. Korey needs to pick. If (a), the Eye's whole-world sight is the reason no ruler acts openly; if (b), that reason must come from the Eye's enforcement alone.
  src: memory-canon (campaign-canon, H'Catha sovereign); astral § The Pact

- **[decide]** Whether the per-ray terrain effects survive *(prep)*
  The current page ties a terrain effect to each ruler's eye ray across eight domains. With ten domains and death and disintegration back in play (see fix below), rule whether every domain keeps a ray-based terrain effect.
  src: astral § The Pact; page § Terrain effects

- **[decide]** Whether the Eye actually enforces daylight contracts *(prep)*
  People believe it does ("light-sworn"). Rule whether it is true.
  src: astral § Open

- **[decide]** The Rival's name *(prep)*
  The page lists "The Rival · Name open" (Fear, dread carried in the fog). The spine also uses "the Rival".
  src: chat § Open; spine.html

- **[decide]** What the meteor's Ortholith matter is *(prep)*
  Options: valuable rock; a Monolith fragment (the glossary: "a Monolith fragment, shed or aimed"); bait.
  The cosmic-campaign sweep lists "a Monolith fragment, shed or aimed" under Settled and also lists this question under Open, so it does not settle it. Settled either way: adamantine matters on H'Catha because the Eye cannot see through it (see the meteor fix below).
  src: chat § Open; glossary

- **[decide]** A name for the Sovereign Eye *(prep)*
  Options: the Unlidded (locals), the Overgaze (courts), Ahm-Vauth (rulers). The lean is all three, by speaker.
  src: astral § Open

- **[decide]** Who betrayed Ondessa, and who backs the occupiers *(prep)*
  Lean: a neighbour, Ulmorrow or Gorrathax.
  src: astral § Open

- **[decide]** The Underground *(prep)*
  Options: rare pockets only (caves, the Old Courses); or a larger hidden underworld (Korey finds that too Underdark-like).
  src: astral § Open

- **[decide]** The Edicts *(prep)*
  Proposed table: Gorrathax, nothing written destroyed; Ondessa, no wheel may turn; Ulmorrow, no mourning aloud; Kurrzot, no running; Oszrax, no covered faces; Saelvex, no gift refused; Ostekk, no clock but his; Vhezzar, no likenesses; Hethrul, nothing planted; Oumnu, no sleeping alone. Memory also wants a friendlier word than "ruler rules".
  src: astral § Open, § Superseded; memory-canon (H'Catha later pass)

- **[decide]** Ruler names and ray order *(prep)*
  Kurrzot, Ondessa and Ostekk are settled. Gorrathax, Ulmorrow, Oszrax, Saelvex, Vhezzar, Hethrul and Oumnu are proposals, and the ray order around the ring is a placeholder.
  src: astral § Open

- **[decide]** Measures *(prep)*
  Sweep proposal: 30-hour turn; disk about 1,100 mi radius; Spindle base about 200 mi; shadow reach about 600 mi. Against it: the module's 1,000-mile Spindle and a day "no brighter than a starry night on Toril", and the page's 630-mile Spindle base. Settled whatever the numbers: domains are continent-scale (see fix below).
  src: astral § Open; memory-canon (H'Catha working)

- **[decide]** Drafted rulings to lock or cut *(prep)*
  Edicts are strict (intent does not matter); a first strike is punished; sleepborn resistance is halved, non-radiant; a moving blind spot (adamantine in daylight) counts as theft; no sight on H'Catha reaches inside rock; the Carriers will not move stolen ore; the Unwaking is outside the Pact.
  src: astral § Open

- **[decide]** Ondessa's fading ray and the Spindle's summit *(prep)*
  What Ondessa's fading ray does to her land, and what is at the Spindle's summit now that the knowledge station is dropped.
  src: astral § Open

- **[decide]** The turn-59 drafts *(prep)*
  Unreviewed, kept in the H'Catha · Ground Level doc. The Unwaking: a centuries-old sleepborn under the Spindle that took Ondessa's citadel through Steward Halvane Teche, a mercane. Places: Fallmouth, the Weighhouse, the Fog Hold, Bell Harbor, Tally, the Held House, Low Weir. Factions: the Counted (Imsa Durr), the Stewardship, the Carriers (Oddo Hasp, a giff), the Unwheeled (Wick), the undertow (Elder Sennu), the Silent Court. Old things: Ninefathom (a dragon turtle), the Old Courses, the Sunken's bell (Annet Vry), the Spindle-scar carvings, Sarelk. Five routes inward.
  src: astral § Open

- **[decide]** The player record's "beholder patrols" *(prep)*
  `data/locations.json` says H'Catha is "watched by beholder patrols"; canon puts the tension at domain borders. Flag only: decide whether the player record needs a correction through the record workflow.
  src: data/locations.json; memory-canon (H'Catha layout)

- **[add]** Brighteyes and Shades
  "Brighteyes live in the always-lit band; Shades live near the Spindle. They are told apart by behaviour and by their eyes, not by skin tone." (A lean in memory.)
  src: memory-canon (H'Catha later pass); astral § Names

### locations/glyth.html

- **[decide]** One purebred stayed
  The add "When N'ghathrod left with the people Glyth refused, one properly raised illithid among his lieutenants chose to stay on Glyth" conflicts with STAGING: N'ghathrod has five lieutenants, two of them properly raised, and all five are with him. Not written. Rule whether a sixth, properly raised illithid stayed (not a lieutenant), or cut the line.
  src: memory-canon (open-decisions, N'ghathrod settled); glyth-watcher; STAGING § The Vth'orama

- **[later]** Glyth and the colony
  Whether Glyth knows the colony still exists, and what it would do if told what it is building, are not set. The Watcher who came out of Glyth has no name yet, and where she is now is not set; she is sketched in working/glyth-watcher.md.
  src: realms/glyth.html (old page); glyth-watcher § Sketch

### locations/strake-station.html

- **[later]** What is in Strake's secure storage, and whether Verrow can be moved
  Whether Verrow can be moved by authorization, persuasion or something worse rides with it.
  src: chat § Open; framework § Open; realms/strake-station.html (old page)

### locations/cairn-station.html

- **[later]** What is at Cairn Station
  Settled: Cairn went silent about a year ago after reporting readings of Vth'oramu. Vocath's people took the station after it went dark and waited there for the relief run, which is how the Bellwether Crow ambush was set, and they left something behind when they withdrew.
  Still open: what was left (a taken creature, a construct, a brine cache with something growing in it, or a person); what remains of the station, what became of its complement, who built onto it, and whether any of Cairn's own instrument record survives. The payoff should open onto something larger. The page holds this in its Still to decide, and factions/vocath-operation.html points there.
  src: framework § Open; memory-canon (campaign-canon, Cairn)
  settled part: inbox/chat-cosmic-campaign-structure.md § Tetherbreak (final canon, turns 238–241)

### locations/ondrel-anchorage.html

- **[later]** Ostrel and the port
  Ostrel lies in a neighbouring system within the Caelestis Sector (Korey 2026-10-28). Which system, what Ostrel orbits, Ostrel's designation, what "neutral" means at Ondrel, and who runs the port are not set.
  src: Korey, 2026-10-28; STAGING § Fleet (round 11)

- **[later]** Who works from Ondrel
  The page says captains of the Caelestis Corps work from Ondrel, overseeing Driftwarden crews and handing out contracts. STAGING names only Rolt doing so. Confirm that Ondrel holds more than one such handler, or narrow the line to Rolt.
  src: Locations review, 2026-10-28

### locations/oerth.html

- **[later]** How the crew could reach Oerth, and how late
  Known: Oerth lies in Greyspace, far across the Erevos Galaxy on the opposite arm from Realmspace, and no lane on Caelestis's charts reaches it. The Radiant Citadel and the Core Monolith are late Arc 3 or Arc 4 destinations, reached by a long voyage or through a linked heart. What Oerth looks like and how a visit plays (it should be horrible) are not set either.
  src: working/vecna.md § Open; Korey (Oerth is reachable, and a visit should be horrible)

- **[later]** Greyspace's CSC number and Oerth's designation
  The survey says Greyspace's designation waits for the charting pass.
  src: prime/data/survey.json

### locations/krynnspace.html

- **[later]** Krynnspace's position and route
  Its position in the galaxy and the uncharted route from Realmspace are not set. Whether it lies on Vecna's eye is under Cosmology § Place GAL-01's inscription.
  src: realms/sys04.html (old page)

### locations/krynn.html

- **[later]** The dragons' politics
  The dragons that left Fonains and most worlds have not reached Krynn, because their own politics hold them (STAGING). What those politics are is not set.
  src: STAGING § Krynn and the dragons

### locations/virenspace.html

- **[later]** Casey's tether point, and the depth of the overlap
  What Casey's first tether point is, and how many tethers Viren already holds, are not set. The lane is written as a charted lane to the Astral waystation and a long haul onward, matching the survey and the chart. Also open: whether an Ortholith stands in Casey's home system (the old W-34 entry is under the register's unplaced worlds).
  src: memory-canon (open-decisions, unresolved gaps); chat § Open; realms/virenspace.html (old page)

### locations/wayfinders-homeworld.html

- **[later]** The homeworld's full look
  The sensory anchors are on the page. The planet's full look is still to be worked out.
  src: chat-crew-tumak-gregory-bartholomew § Tumak/Runekeeper lore and pressure

### locations/nowhere.html

- **[later]** Nowhere's system, designation and remains
  Its system and its designation (the charts mark a world there, so it is charted), what physically remains at the wreck, and which god died there are not set.
  src: cosmology § Nowhere; locations pass, 2026-10-28

### locations/rykoe.html

- **[later]** The Reach world's name
  Its people's own name for their world went into the Core Monolith with them, and their descendants in the Citadel carry it. What it was is not set.
  src: realms/first-world.html (old page)

### locations/cantina.html

- **[decide]** Who tends bar on the cantina *(prep)*
  "Odds" is retired. Options: Glim the plasmoid, of a cantina called the Long Pour (unreviewed Crossing Companion proposal); or leave the bartender unnamed.
  src: astral § Open; memory-canon (campaign-canon, Ryeback absorbs Odds); chat-crew-boogie-casey-sol

- **[later]** The cantina: a place or a ship
  It is a Locations entry for now (Korey 2026-10-28). If it is a ship, it moves to Vessels. Its name, owner and circuit are under the names decide on the register.
  src: Korey, 2026-10-28

### locations/meteor-hub.html

- **[later]** The hub's identity and name
  Korey liked the carved meteor as a dead god's severed head. Name options: the Crown, Godsrest, the Wanderhead, the Rock. Where it sits on the lane, and who lives there, are not set.
  src: chat-voyage-6-7-planning § Open

# Fonains

Items for `locations/fonains.html`, `factions/cretez.html`, `dossiers/vanifer.html`, the Fonains Canon Reference (a Claude doc outside the repo, "Fonains doc"), and the Fonains lane of `timeline/timeline.json`. Since section 8 the wiki is the canon home for Fonains; the doc follows it.
Order under each heading: decide, fix, drop, add.

### locations/fonains.html

- **[decide]** Tinderstrike: kept since the sealing, or given 350 years ago
  STAGING § The Princes says the fire genasi have guarded the fire key since the sealing, about twelve thousand years ago, and also that Asmodeus gave Tinderstrike to the few who resisted Imix about three and a half centuries ago (so do the foundry notes and factions/deities.html). The page writes both. Options: the genasi lost the key and Asmodeus returned it; the genasi kept a different charge until Asmodeus gave them the weapon; one of the two is wrong. Touches locations/fonains.html, factions/cretez.html, factions/deities.html#asmodeus, the timeline.
  src: section 8 (C16), 2026-10-28

- **[decide]** Zonlilimer or Zonlilemer; Baratol or Baratal
  Korey's map spells the dojo town Zonlilemer and the isthmus town Baratal; the timeline and the page spell them Zonlilimer and Baratol. Pick one spelling each and apply it to the page, the timeline and connections.json.
  src: assets/maps/fonains-full.webp; timeline.json; section 8

- **[decide]** Randy the Red and Mandu the Red
  The timeline has Randy the Red hire Lola's Boys (S1) and pay them (S16), and Mandu the Red send them into the storm (S28). One patron or two, and which spelling.
  src: timeline.json; section 8

- **[later]** Place the unmapped places
  Korey's map does not show Gransby, the Misty Vale, the Jaded Forest, Drainsville, Lola's Place, the Eternal Flame temple, the Feathergale Spire or the valley of the Monastery of the Distressed Body. Place each when it matters, from the map or a ruling; the page gives what the sources say and no position. ("Jurek" in the section 8 brief has no source in the repo.)
  src: section 8, 2026-10-28

- **[later]** Where the Monolith rose
  The Darkest Day has the Monolith erupt "over the cemetery"; STAGING puts its remains in the Trentara Forest. Where the cemetery lies, and whether it is in the forest, is not set. The page states both.
  src: timeline.json "The Darkest Day"; STAGING § Fonains geography; section 8 (C12)

- **[later]** The Trintar refugees
  The timeline's S16 has Granny take in "the Trintar refugees". Whether Trintar is Trentara (refugees from the Monolith's ruins) or another place is not set; the page keeps the table's word.
  src: timeline.json S16; section 8 (C11)

### Fonains doc

The doc is current on names, the four keys, the cults, the party table, Krynn and the dragons, and Takhisis being Tiamat. Items below cover what is stale or missing. done (section 8): the world-level items (timing, the divine gate as polarity, Vecna as a god, the keys and cults, the Haunted Keeps, Bastian, the neothelid hook, the time device, the table spellings) are on locations/fonains.html; the doc itself still needs a refresh (the later under # New pages). Kwalish's laboratory, Daoine Gloine and the teleportation fields are on vessels/thessalars-craft.html, and the Cre'Tez fixes and adds (Cenvinzo, Rihiri and Dharra as sisters, Kevulan's birthright, Benedetta, the siblings, the crest, the Bloodstones and inheritances, Vanifer's secrets and plan, the voice) are on factions/cretez.html and dossiers/vanifer.html (section 8). The spelling is Dharra, as in the foundry notes, STAGING and terms.json; round 8's "Darra" was a slip.

- **[later]** Seldra's gem-thief boss
  Options: keep Makedon; or Mack Francache, a wererat sent by Moghadam (the module).
  src: module-sweep-fonains § For Korey to confirm

- **[later]** Marlos or Marlos Urnrayle
  Options: keep the table's "Marlos"; or adopt the module's full name.
  src: module-sweep-fonains § For Korey to confirm

- **[later]** The mind flayer arcanist in Kwalish's lab
  It sits in stasis. Options: one of N'ghathrod's captured illithids; unrelated; leave it as a hook.
  src: module-sweep-fonains § Hooks, § Open

- **[later]** The demilich skull with gem eyes
  Whether the skull in Kwalish's lab is the one Seldra was forced to craft for Thessalar. Options: yes, it travelled with the craft; no.
  src: module-sweep-fonains § Hooks, § Open

- **[later]** Kwalish's price
  Whether it is a piece of the characters' souls, as in the module. Options: adopt; leave unused.
  src: module-sweep-fonains § Hooks

- **[later]** Gar Shatterkeel's claw
  Whether his crab-claw prosthetic echoes Hayden's prosthetic and one-armed father (inference). Options: tie them; leave it coincidental.
  src: module-sweep-fonains § Usable mechanics

### factions/cretez.html, dossiers/vanifer.html

- **[later]** Where Cenvinzo is held
  He is barely alive, held captive somewhere and bound to Vanifer. Where is not set; both pages carry it as a Still to decide sentence.
  src: STAGING § The Cre'Tez (round 8)

- **[later]** Vanifer's mother, and the Pedra Ardente in her plan
  Vanifer's mother is not named, and what the Pedra Ardente does for her (the bounty was "for the eldest brother") is not set.
  src: cretez-foundry-notes; dossiers/clint.html; section 8

- **[later]** Where the Eternal Flame temple stands
  The temple that keeps Tinderstrike has no place on Fonains yet.
  src: cretez-foundry-notes; timeline "Tinderstrike under guard"

### Timeline (Fonains lane)

done (section 8): the shift (Session 28 at 0, the break at -0.21, the shard at -0.19, V001-V006 between -0.18 and -0.02), the shards, the five-person ritual, the Pedra Ardente and Finerva, Dharra and Rihiri, and Clint's color pool.

- **[decide]** Nelson or Nalsa
  The timeline has "Nelson" show the Accordance's champions their gods and name them (S10, "The Accordance chooses Lola's Boys"); factions/deities.html names the Accordance's emissary Nalsa, an androsphinx. Same figure under a table spelling, or two? If the same, the timeline takes Nalsa.
  src: timeline.json; factions/deities.html#nalsa; section 8


# Timeline

Items for `prime/timeline/timeline.json` outside the Fonains lane (see the Fonains section for that lane).
Order: decide, fix, drop, add.

### Timeline

done (section 8): the fixes are in timeline.json. The three "dangling" connections.json edges were not dangling: NPC-Gp8mT4kw, LOC-Rp7kW4vn, NPC-Qp8jL2vR, LOC-Bf3xN6qT and QST-9dK3wR7n are record ids, and the Connections view loads the record before the DM layer, so the edges resolve.

- **[fix]** The Timeline page is wider than a phone
  At 390px the page renders 445px wide (it did before section 8 too): the Overview plot or the tab strip sets a minimum width. Give the plot its own horizontal scroll inside a min-width:0 container, so the page itself has no horizontal scroll.
  src: section 8 visual check, 2026-10-28

- **[later]** When the Glyth Watcher got out
  "The Glyth Watcher gets out" sits at t -3 (cert working). glyth-watcher.md leaves how she got out open. Options: keep about three years ago; or leave the event undated.
  src: glyth-watcher § Open; timeline.json

# Factions

Faction pages under `prime/factions/`. Items are grouped by page and ordered decide, fix, drop, add. Proposed page text reads in-world, like a fan wiki; DM-only lines are marked.

The Remaking is now only the Ascension's fail state. Links that say "the Remaking" for Vecna's plan point to `opposition/vecna.html`; links for the colony's or Vocath's operations point to `opposition/vthorama.html`.

---

### Every faction page

- **[decide]** Tymora and the Fortuned's ritual
  factions/aethris.html (What's hidden) says Tymora likely would not want the Fortuned's Zenith ritual finished. The line comes from older notes, not from the 2026-10-27 rulings. Keep or cut.
  src: Factions review, 2026-10-28

- **[fix]** "Academy" links that should land on the Caelestis section
  The Moonraider, Tarto and Clint links that say "Academy" point at factions/fleet.html, not fleet.html#caelestis. Repoint when those pages are rewritten.
  src: Factions review, 2026-10-28

- **[decide]** The Caelestis Sector's systems, and the other sectors
  The Fleet is four or five sector branches; Caelestis is one sector of several systems, including Toril's (Korey 2026-10-27). Which systems the Caelestis Sector covers, how many sectors there are, and their names and characters are not set. Feeds the chart's sector layer and factions/fleet.html.
  src: chat 2026-10-27

- **[decide]** Realmspace's name
  Korey may rename Realmspace (and possibly Virenspace) now that systems sit inside named sectors: "Realmspace seems weird for where Toril and everything is". Rename everywhere at once if it changes, as a moved term in terms.json.
  src: chat 2026-10-27

- **[later]** The Fleet's admirals
  A council of a few admirals sits above the sectors (touchstone: One Piece's Marine admirals). Names, number and seat are not set.
  src: chat 2026-10-27

- **[later]** What Vecna gives his faithful, by class
  Clerics and wizards draw on him, perhaps paladins (Korey 2026-10-27). Check published sources for Vecna's clerics (Knowledge, Death, Trickery), wizards and any warlock or paladin patrons, and settle which this cosmos uses.
  src: chat 2026-10-27

### factions/index.html

- **[later]** Thumbnails for people with pages
  Do people with their own dossiers get thumbnails on the Factions page?
  src: chat-cosmic-campaign-structure § Open

---

- **[later]** Register order
  The Factions register is not in A–Z order (Fleet, Order, Runekeepers, Seekers, Vth'orama, Restorers, Vocath's crew, the Fortuned, then Deities), and PAGE-GUIDE § Registers asks for strict A–Z with the prev/next bars following. The Cre'Tez went in after the Fortuned, before Deities, to follow the page as it stands. Reorder the rows and rewire the chain, or write the page's order into PAGE-GUIDE.
  src: section 8, 2026-10-28

### factions/fleet.html (was academy-fleet.html)

- **[later]** Driftwarden ranks
  Ruled: one service, many ranks, the way every police officer is a cop. Set the ladder from the newest graduate up to the organization's head, and where the crew starts.
  src: Korey, 2026-10-26
  Moved from the campaign section: STAGING § Caelestis, the Driftwardens and the Fleet already says ranks run from the newest graduate up through officers and commanders, shown in gems or pins; factions/fleet.html carries it. The full ladder waits until play needs it. Campaign § Still to decide names it.

- **[later]** Names of the sister institutions
  Ruled: sister institutions in other system clusters, under other names and governance (STAGING, Factions). Name the one or two the crew is likely to hear of first; the rest wait.
  src: Korey, 2026-10-25 (rounds 10–11)
  Moved from the campaign section: the Fleet is four or five sector branches, each keeping its own names (factions/fleet.html), which answers the shape. Naming the one or two the crew hears of first waits until play needs it.

- **[later]** The Glyth loss
  The Fleet lost a force at Glyth during the last approach window (see add). Its name and its commander are unnamed.
  src: chat-cosmic-campaign-structure § Cosmos texture, § Open

---

### factions/order.html

- **[add]** The Watcher who came back from Glyth
  Add a named-but-unseen row: "A Watcher posted to a region of Glyth got out after years inside the elder brain's range. She still hears it." (Eris Morn pattern.)
  src: working/glyth-watcher.md; memory-canon open-decisions (Vecna direction 2026-10-24)

---

### factions/deities.html

- **[later]** The All-Father and the All-Mother on Deities
  The Order counts the All-Father a god like any other, and the Restorers posit the All-Mother as the source of the Monoliths; both are the Core Monolith's pressure, and that the Core Monolith exists is among the scarcest knowledge in the cosmos (Korey 2026-10-27; on order, restorers, cosmology § Core Monolith's pressure, glossary). Whether Deities lists the All-Father among the gods as the Order worships it, and who else in the cosmos knows of the Core Monolith (Vecna, the Citadel, the Accordance), are not set.

- **[later]** How far to develop Tymora
  Korey wants to develop Tymora and the Beshaba/Tymora interplay.
  Settled (Korey, turns 860–862): the misread tenet and "fortune needs misfortune" (both adds below); the sisters' conflict stays indirect, because gods give direction that never shows the whole of what they want; Aethris is a whole planet where not everyone follows Tymora, with a lesser Beshaba following and other fortune gods, major and minor. Add that last point to the Tymora entry and locations/aethris.html: "Not all of Aethris follows Tymora. Beshaba keeps a smaller following there, and other gods of fortune, major and minor, are worshipped too."
  Still open: whether Tymora notices herself thinning on Aethris as the ritual removes the risk her luck needs, and whether she acts on it. Beshaba's want is its own decide under dossiers/beshaba.html (added in section 5).
  answered (part): inbox/chat-crew-boogie-casey-sol.md § Sol / Aethris and the gods (Settled)
  src: BCS § Sol/Aethris and the gods (turn 860), § Sol/Open
  done (settled part): factions/deities.html (section 2) carries the misread tenet, fortune needs misfortune, and Aethris's other faiths; the open question is in its Still to decide. locations/aethris.html carries the Aethris line (section 3).

- **[add]** Tymora's misread tenet
  Add to the Tymora entry: "Tymora's tenet is 'fortune favors the bold.' Her followers on Aethris misread it. They pushed luck until it stopped being luck, and in perfecting fortune they removed the risk that luck needs." Also add to W-08 on locations/aethris.html.
  src: BCS § Sol/Aethris and the gods (turn 862)
  done: factions/deities.html and factions/aethris.html (section 2); locations/aethris.html carries it (section 3).

---

### factions/runekeepers.html

- **[later]** Parked Runekeeper questions
  Parked, not locked: sealing as the inverse of opening; whether sealed worlds are invisible to A.T.L.A.S.; other worlds' own hiding methods; runes as the "finding" half of the art.
  src: memory-canon open-decisions (Runekeepers line)

---

# Campaign

Campaign planning pages under `prime/campaign/`. Items are grouped by page and ordered decide, fix, drop, add. Planning pages speak in DM voice. World facts quoted for a page read in-world.

- **[add]** A map of Vecna's plan, taken from N'ghathrod
  A possible find: something pulled from N'ghathrod or the colony that shows where the heart worlds lie (Korey 2026-10-28). In play it hands the crew the inscription; on the site it adds the hearts to the record, so the player holochart can show them and the crew can solve the eye by lining it up from Oerth. When and how it is found is not set.

The Remaking is now only the Ascension's fail state. Every page link that says "the Remaking" for the plan or the machinery points to `opposition/vecna.html` (the plan) or `opposition/vthorama.html` (the colony's operations and the Fork) instead.

---

### campaign/index.html

- **[decide]** Arc 1's close and the length of H'Catha *(prep)*
  Campaign § Arc 1 says Arc 1 closes around sessions 8 to 10 with the attack on Caelestis and graduation, at level 4. The H'Catha mission begins at V007 and may run several voyages, and the crew is already level 4. Options: (a) H'Catha runs V007–V008 and graduation lands at V009–V010 as written; (b) Arc 1 runs longer and the session range moves; (c) the attack and graduation compress into one voyage. Touches: campaign/index.html (Arc 1, the close), campaign/voyages/index.html.
  src: memory-canon open-decisions (Planned line); campaign section, conflict C17

- **[decide]** Who goes ashore at H'Catha and who holds the helm *(prep)*
  Two sources disagree. The spine's add had Saerthe at the helm with Ryeback commanding the deck; V006's "How a table of ten gets run" puts Ryeback and Miken with the ship and the chosen teacher ashore with Ezra. Campaign § the H'Catha mission states both as conditional on the instructor pick (Saerthe can take the helm; otherwise the teacher goes ashore). Rule which holds, or keep it conditional. Touches: campaign/index.html (#hcatha-arc), campaign/voyages/index.html (V006 swap, V007).
  src: memory-canon open-decisions (Voyage 007 intent); voyages V006; campaign section, conflict C13

- **[decide]** Arc 2's second system
  Arc 2 stays in Realmspace plus at most one other system (Campaign § Arc 2). Which second system, and why the Fleet works there, is not chosen. Touches: campaign/index.html (#arc-2), locations/.
  src: carried from the spine's "Arc 2's range" item (chat-early-planning § Cosmology and setting)

- **[decide]** What Gregory and Sol are missing
  STAGING § The theme named what Vecna, N'ghathrod, Astra Virex, Casey, Tumak, Bartholomew and Boogie each want, and said only that "Gregory and Sol carry it too". Campaign § Theme and § Crew say so and stop. Name each one's want in the theme's terms. Touches: campaign/index.html (#theme, #crew), crew/gregory.html, crew/sol.html.
  src: STAGING § The theme (round 2)

- **[fix]** "Arc", never "Act" *(answered)*
  The wiki says "Arc". The timeline events say "Act 2: ranked missions", "Act 3: N'ghathrod", "Act 4: the center" and "Act 3: Vth'oramu"; change each to "Arc". Sweep colony and ascension for any "Act 1–4" left. Memory canon's "Act" wording is Korey's spoken shorthand and does not need to match.
  src: chat-cosmic-campaign-structure § Superseded; timeline; memory-canon open-decisions
  answered: inbox/chat-early-planning.md § Wiki structure (Settled: "Acts became Arcs"); inbox/chat-cosmic-campaign-structure.md § V006 and the arc (Settled: "The wiki says 'Arc', never 'Act'"; Korey: "the spine governs")
  done: the campaign and opposition pages (campaign section); timeline.json still needs it (section 8).

- **[decide]** What the meteor is and why Caelestis wants it *(prep)*
  Fixed points: the meteor is adamantine, large, mined in an occupied area, and matters locally, to Caelestis and to the Order; working to obtain it is a form of treason on H'Catha; memory canon says "adamantine's value still needs something more". Options:
  (a) Containment. Adamantine survives disintegration, so the Fleet wants it for a vault, cradle or plating, and the cadet crew is cover.
  (b) Sight. The Sovereign Eye cannot see through adamantine, which gives it its local value.
  (c) The spine's three depths as written: adamantine, an Ortholith fragment, the strike as bait.
  (d) A combination, e.g. (a) for Caelestis and (b) for H'Catha.
  Also open: whether the Academy wanted this meteor or any adamantine, and what made it urgent (one lead points at the Brig).
  Settled since, which is option (d): for Caelestis, containment. Adamantine survives disintegration, so the Fleet wants it for a vault, cradle or plating, and a cadet salvage crew is the cover; Tarto says only that it is rare, theirs by claim, and wanted first. For H'Catha, sight: the Sovereign Eye cannot see through adamantine, which replaced the dropped Spindle foothold war. The ore matters to both Caelestis and the Order.
  Still open: (1) whether the spine's deeper layers stay under that — an Ortholith fragment, shed or aimed, and the strike as bait (the glossary already calls the meteor a Monolith fragment, but the cosmic-structure sweep lists it as open); (2) whether the Academy wanted this meteor or any adamantine, and what made it urgent now.
  answered (part): inbox/chat-organizing-framework.md § Tyrant ship and Voyage 004 prep (Settled: containment, cadet cover); inbox/chat-astral-sea-worldbuilding.md § Superseded ("Adamantine now matters because the Eye cannot see through it"), § H'Catha: the meteorite and mission ("valuable to both Caelestis and the Order")
  Touches: campaign/index.html (H'Catha arc), campaign/plot-hooks.html (meteorite hook), locations/hcatha.html.
  src: memory-canon campaign-canon § Antagonists (H'Catha direction, H'Catha decisions); chat-organizing-framework § Settled, § Open; chat-astral-sea-worldbuilding § Superseded; chat-cosmic-campaign-structure § Open

- **[decide]** The Rival's name *(prep)*
  The second claimant to the meteor is "the Rival" on the page. The sweep proposes Oszrax. Confirm Oszrax or name him.
  Note: "Oszrax" appears in the astral-sea sweep's Superseded line ("the seam between Kurrzot and Oszrax") and in the proposed Edict table ("no covered faces"), but that sweep also says every ruler name except Kurrzot, Ondessa and Ostekk is a proposal. Confirming Oszrax would also settle his Edict as a candidate.
  Touches: campaign/index.html (timeline, approach table, forces table), dossiers/index.html.
  src: chat-astral-sea-worldbuilding § Superseded

- **[decide]** Who signs the order that keeps the crew together *(prep)*
  At graduation the crew becomes Driftwardens and stays one unit. Who signs that order sets Arc 2's tone. Options:
  (a) Mirt: patronage, warm and compromising.
  (b) A Watcher or the Order: fated, cosmic.
  (c) Saerthe: personal, a mentor's call.
  (d) The Fleet, as routine paperwork with the real reason hidden, so "who signed this order?" becomes a thread the crew can investigate.
  Touches: campaign/index.html (Arc 1 close, Arc 2 shape), dossiers/mirt.html or dossiers/saerthe-abizjn.html if either signs.
  src: chat-early-planning § Campaign Planning, Open (turn 300)

- **[decide]** Mirt's standing after the graduation attack *(prep)*
  The attack aims at Mirt's public disgrace: a restricted vault breached on his watch, during his own crew's graduation. Options:
  (a) The crew saves his standing; they are why it is not a massacre.
  (b) His standing suffers: an inquiry that clouds Arc 2.
  (c) Ambiguous: limited damage, Mirt shaken, his future uncertain.
  The Fork state (A.T.L.A.S. gone or returned) may feed the answer.
  Narrowed (campaign section): the Fork states on opposition/vthorama.html keep their per-state lines as direction (State A: his standing takes a real hit; B1: it rises). What stays open is what the attack itself does to him, apart from the heist.
  Touches: campaign/index.html (Arc 1 close), opposition/vthorama.html (the Fork), dossiers/mirt.html, factions/vocath-operation.html (whether Vocath's grudge is served).
  src: chat-early-planning § Campaign Planning, Open (turn 300)

---

- **[decide]** Which arc reaches the cosmology first
  Every crew arc was built to touch the cosmology without being about it. Whichever arrives first (Tumak's homecoming and its Zenith, Casey's tethers, Gregory's anomalies, Boogie's shard, Bartholomew's constellation, Sol's Aethris) will reframe the other five for the players in a single session. Choose the first, or let play choose. Moved from the retired Open table on crew/index.html. Touches campaign/index.html (#crew, the arcs) and the crew pages' Arc tabs.
  src: crew/index.html (retired § Open); section 7 (2026-10-28)

### opposition/vthorama.html

- **[decide]** What the surface attack at graduation is made of *(prep)*
  The page has "security diverted by the surface operation" while Joffrey runs the Brig, and names nothing in that operation. The early plan collapsed the module's two finale events into one: the attack hits during the ceremony, a battle across the school. It ported these module pieces: Mustaf Shultz and his giff mercenaries, a decapitation threat, Miken at 2 HP, Wizpop's return (now Ostekk-6), and the transmutation sigil as Vocath's eye-in-a-wheel. Qitru and her githyanki have since moved to H'Catha. Vocath is a merchant, no fighter, and stays out of the siege himself (settled: chat-cosmic-campaign-structure § Act 1 retrofit), so whoever leads the surface operation is hired or his crew. Pick which pieces stay, and write the surface operation into the Brig run section.
  Touches: opposition/vthorama.html (the run, the Fork; the page names "the surface attack" and nothing more), campaign/index.html (Arc 1 close), factions/vocath-operation.html, dossiers/miken.html.
  src: chat-early-planning § Campaign Planning, Arc 1 close and planning method (turn 300); dossiers/qitru.html

---

### campaign/voyages/index.html

- **[decide]** Casey's V007 beat *(prep)*
  Options: a Vaelorix chart in Research showing the sky from inside Mirt's wardrobe beside a collecting site past the waystation; or something else. It must give Casey's cooling thread a small nudge back.
  Merged with the crew decide "Casey's beat for the crossing": the beat is a small nudge from the voice toward something, not a vision (the missed level 3 scene is dropped, STAGING round 10).
  src: chat-voyage-6-7-planning § Open; memory-canon open-decisions (Voyage 007 intent)

- **[decide]** Sol's misfortune piece *(prep)*
  Korey to set. The Sol chat asks for small daily misfortunes kept in play (chores landing on him, things falling), which the player wants; the piece can be one of those or ride on the wanted notice in Beats owed.
  src: chat-voyage-6-7-planning § Open; BCS § Sol/H'Catha transit

- **[decide]** The watcher at the notice board *(prep)*
  Someone at the lane marker saw Sol's wanted notice, then saw him walk in. How the watcher engages: mercenary, opportunist, informant or sympathiser.
  Settled since: the issuer. The Voyage 7 chat has the notice posted by the Fortuned of Aethris, reward paid on return to Aethris; "Threadbare Consortium" was a placeholder and is dropped. The Beats owed add below already reads that way.
  answered (part): inbox/chat-voyage-6-7-planning.md § Voyage 7 / V007 player beats (Settled: "a wanted notice… posted by the Fortuned")
  src: BCS § Sol/H'Catha transit, § Sol/Open

- **[decide]** A crew backstory table for the crossing *(prep)*
  A per-day roll table of backstory beats across the whole crew was floated for the two-week crossing; Korey liked it as an option. Build it, or keep beats hand-placed.
  src: BCS § Sol/H'Catha transit, § Sol/Open

- **[decide]** Treasury contents in Vaelorix's Quarters *(prep)*
  The Quarters hold a treasury of coin (see add). Contents and amounts are open.
  src: chat-voyage-6-7-planning § Open

- **[decide]** Did Miken cause the simulation blast? *(prep)*
  Options: yes; or no, and the suspicion stays as misdirection from Joffrey.
  Touches: campaign/voyages/index.html, dossiers/miken.html.
  src: chat-voyage-6-7-planning § Open

- **[fix]** V006: Tumak told Ryeback outright
  V006 Actual says Ryeback "took 'the beholder was taken care of' to mean they killed it". The ruling on dossiers/winston-ryeback.html, now carried on crew/tumak.html, is that Tumak told him outright that the crew had killed it. Reword the V006 line to match. (The record's matching line is already a Player record flag.)
  src: section 7 (2026-10-28); dossiers/winston-ryeback.html

---

### opposition/vecna.html (early planning)

- **[later]** A node log for player impact
  An early plan kept a Remaking Node Log tracking how the players have changed Vecna's plan. Bring it back as a planning table on Opposition: Vecna, or let the timeline carry it.
  src: inbox/chat-early-planning.md § Campaign Planning (turn 124)

# Dossiers

DM dossiers under `prime/dossiers/`. Items are grouped by page and ordered decide, fix, drop, add. Dossiers are in-world pages: proposed text reads like a fan-wiki character entry and states only what is settled. Anything undecided stays in a `decide` item. Lines marked DM-only belong in the dossier's DM notes.

---

### Every dossier

- **[add]** Portraits for every dossier
  Dossiers without a portrait show a monogram. Each one needs an image for its infobox and its row on dossiers/index.html (prime/scripts/portraits.js).
  src: chat 2026-10-27

- **[later]** Appearances to set, and sketches to confirm
  Appearances to set. These dossiers carry only sourced details, or no Appearance section, and a Still to decide sentence: N'ghathrod, Osskhal, Khaleth, Zhauveth (her height is set), Ostekk, Thessalar, Joffrey, Astra Virex; and, with species unknown, Polly Geim, Captain Haymond Rolt, Hessa Dun, Ilsevaine Corr, Aurel Venn.
  Sketches to confirm. These were written from species and record and wait for confirmation: Vecna (Deity), Vecna (Lich), Ulh'rek, Ith'varn, Mirt, Jeffrey, Tarroway, Verrow, Vocath, Qitru, Ryeback, Sor'Kur, Ilsabet Crann.
  src: section 5 (2026-10-28); cold review

- **[later]** Dossiers still to build
  The old register's "Still to build" list: Ostekk-10, the behir; H'Catha's cast, Kurrzot, his Rival and Ondessa (rows on locations/hcatha.html for now); Captain-Commander Dejexic (factions/order.html for now). Kip & Pik, Pffred and Mr. Blip have public pages and earn a DM dossier on contact, when a scene needs a person where they stand.
  src: dossiers/index.html (retired section, 2026-10-28)

---

### dossiers/index.html

- **[later]** Grouping on every DM register
  dossiers/index.html groups its rows by side through dm-register.js (a data-group-axis on .register and an A–Z / By side toggle). Opt the other DM registers in where a grouping helps: locations/ by system, factions/ by reach, vessels/ by where, artifacts/ by fragment.
  src: section 5 (2026-10-28); Korey 2026-10-27 ("the same register shape to every DM index")

---

### dossiers/astra-virex.html

- **[decide]** Why Astra Virex wears Polly's shape
  The voice Casey hears as Polly is Astra Virex wearing Polly's shape (STAGING). Why is not set: a deliberate deception, a convenience, or its only channel to Casey. The three answers lead to different endgames. Touches: dossiers/astra-virex.html, dossiers/polly.html, crew/casey.html.
  src: dossiers/astra-virex.html (old What's hidden); section 5 (2026-10-28)

- **[decide]** The fallen star and Astra Virex's broken part
  A star fell on the Geims' homeworld, changed Polly, and sent him looking for where it came from: Astra Virex. The Axiom strain's ripple broke part of Astra Virex away in a collision. Whether the fallen star is that broken part is not set. Touches: dossiers/astra-virex.html, dossiers/polly.html, crew/casey.html.
  src: dossiers/polly.html; factions/deities.html § Astra Virex; section 5 (2026-10-28)

---

### dossiers/beshaba.html

- **[decide]** Beshaba's want *(prep)*
  Beshaba's reward for the oath is power, and to give it shape she lays a want of her own on Sol as a quest (STAGING § Sol). What she wants, and so the quest, is not set. Touches: dossiers/beshaba.html, crew/sol.html.
  src: STAGING § Sol; factions/deities.html later "How far to develop Tymora"

---

### dossiers/boatswain-tarto.html

- **[decide]** What Clear the Deck does *(prep)*
  Tarto's revised block (four superiority dice on a short rest) adds Clear the Deck as a bonus action, but no source gives its effect. The dossier and statblocks/index.html list it by name only. Write the effect. Touches: dossiers/boatswain-tarto.html, statblocks/index.html.
  src: chat-cosmic-campaign-structure § Rules and crew (turn 314); section 5 (2026-10-28)

---

### dossiers/clint.html

- **[later]** What information Clint is buying
  The one-shot gives only Clint's own answer: he wants "money… for some information that you need to get." Nothing names the information. Set it, or leave it as Fonains business (Clint's present stays on Fonains).
  src: chat-cosmic-campaign-structure § Open; scratchpad fonains_notes/12.md § Oneshot 03 (NPCs)

- **[decide]** How the Monolith fragments reached Boogie in time
  Vocath's people chased Clint to Fonains, never found him, and came back with fragments of the broken Monolith through Vocath's line; one ended up in Boogie before his first voyage with the crew (artifacts/fonains-shard.html). Clint landed about a year before the present, before the Monolith appeared; the Monolith broke two to three months before the present (STAGING § Timing). Rule how long Vocath's people stayed on Fonains and how they came back, or move a date. Touches: dossiers/clint.html, artifacts/fonains-shard.html, factions/vocath-operation.html, crew/boogie.html, the timeline.
  src: section 5 (2026-10-28); STAGING § Timing; artifacts/fonains-shard.html

- **[later]** Clint's species, his finger, and whether he is trying to get back
  His species is not set; neither is how he lost his ring finger or whether he is trying to return to Caelestis. These wait until a meeting is wanted; his present stays Fonains business.
  src: dossiers/clint.html; section 5 (2026-10-28)

---

### dossiers/crc.html

- **[decide]** The stored spell *(prep)*
  The stored spell. Options: Locate Creature or Hold Person. (The first encounter at the Caelestis main entrance is on dossiers/crc.html, section 5.)
  Touches: this page, crew/sol.html, timeline.json.
  src: BCS § Sol/Open, § Sol/C.R.C. and the scry beats; dossiers/crc.html
  answered (location): BCS § Sol/C.R.C. and the scry beats (Settled); memory-canon campaign-canon § Antagonists (first CRC encounter on Caelestis); chat-early-planning § Arc 1 close (C.R.C. waits at Caelestis on return)

- **[later]** Who on Aethris commissioned it
  The page says the Fortuned commissioned it. Which of them, and why they care, is open.
  Settled since (why they care): "The Fortuned want Sol back alive because he is a component of their unfinished ritual. They do not care about him as a person." Still open: which of the Fortuned commissioned it.
  answered (part): STAGING § Aethris
  src: BCS § Sol/Open

- **[decide]** Beshaba's warning before it arrives *(prep)*
  The early plan paid off Sol's acknowledgment vignette with a Beshaba line before the C.R.C. first appears: "your face cut in glass you did not make." It fits the construct's crystal body and her short register. Use it, reword it, or drop it. If used, it lands in the session before the first encounter.
  Provenance: the line appears in Claude's master source doc (§14.5, tone calibrations) beside "Stand." "Again." "Continue."; no Korey statement adopting it was found. Since then Korey's own acknowledgment text has Beshaba talk capriciously, past three words, so the line would need to fit that register too.
  Touches: dossiers/crc.html, dossiers/beshaba.html (register examples), crew/sol.html.
  src: chat-early-planning § Campaign Planning, Arc 1 close and planning method (turn 300); original chat 0852f52d (§14.5); BCS § Sol/Acknowledgment scene

---

### dossiers/ezra.html

- **[decide]** Ezra's own hook *(prep)*
  Ezra must arrive with a hook others can latch onto. Options:
  (a) The eye-in-a-wheel sketch (ties to crossing table entries 4 and 8).
  (b) The sealed letter: "Watch one thing until it changes."
  src: chat-voyage-6-7-planning § Open; memory-canon open-decisions (Voyage 007 intent)

- **[later]** Emporia and Tharizdun
  Does Emporia read as a Zenith with Tharizdun behind it? Options: yes (a Tharizdun-touched Zenith); no (local trouble only); leave it to the other table.
  src: chat-cosmic-campaign-structure § Open

---

### dossiers/ilsabet-crann.html

- **[later]** What her Ledger shows
  The Restorers have walked into Zeniths deliberately for four centuries, which sits awkwardly with the page's claim that her Ledger holds the Zenith pattern unrecognised. Options: the Restorers know Zeniths as crossings but miss the rising frequency; or the pattern stays fully unread.
  src: timeline "The Restorers walk into Zeniths"; dossiers/ilsabet-crann.html § What's hidden

---

### dossiers/vecna.html

- **[decide]** The failsafe and the voice
  The timeline carried two Vecna events that no finished page supports, and section 8 dropped them: "The failsafe, running" (encoded messages archived into the Citadel through Monolith relays, waiting for someone to come out the wrong way) and "a mage recruited by a voice" in his rise on Oerth. opposition/vecna.html § Contingencies and dossiers/vecna.html carry neither. Options: write either into the dossier and Opposition: Vecna and restore the timeline event; or leave both retired. Touches dossiers/vecna.html, opposition/vecna.html, timeline.json.
  src: timeline.json (before section 8); section 8 (C9)

- **[decide]** The Book of Vile Darkness
  The retired wiki manual (campaign/index.html) carved the Book out as "the one whole account of the voice that recruited Vecna, and a possible goal for the Seekers and the crew". No finished page has a voice that recruited Vecna: dossiers/vecna.html makes him an archmage of Oerth who rose by his own ritual, and lists the Book only as "an artifact tied to him, in this cosmos", with its whereabouts a Still to decide sentence. Principles keeps only the generic rule for iconic items. Options: (a) the Book is an account of Vecna's own rise, written by him or about him, and a goal for the Seekers and the crew; (b) it is a period piece with no bearing on the working; (c) something else. Touches: dossiers/vecna.html, principles.html (if it becomes an example), plot-hooks.html.
  src: BACKLOG campaign/index.html item (memory-canon open-decisions, "Locked this pass"); campaign section, conflict C8

---

### dossiers/vecna-lich.html

- **[later]** What Vecna (Lich) knows, and where he stands
  Vecna (Lich) has his own dossier (Korey, 2026-10-28). What he knows of Vecna's working, whether he would help the crew against it, where he sits in the Citadel and how the forgetting has touched him are not set. They wait until the crew heads for Rykoe.
  src: section 5 (2026-10-28)

---

### dossiers/mirt.html

- **[decide]** The player record overstates Mirt *(prep)*
  data/npcs.json calls Mirt "the head of Caelestis" and "Leading Caelestis", which contradicts the Academy-only ruling. Flag for the player record; prime gives nothing to data/. Korey to correct the record by hand or leave it as the crew's belief.
  src: memory-canon campaign-canon § Naming (Mirt line); data/npcs.json (Mirt)

---

### dossiers/nghathrod.html

- **[later]** N'ghathrod's mouse
  He saved a mouse during the escape and it travels with him. Its quirk and what it means to him are open.
  src: Korey, 2026-10-25 (round 2)

- **[decide]** How long N'ghathrod has been fused into Vth'oramu
  The dossiers said forty or fifty years; STAGING has the dreadnought taken over decades, perhaps a century, after an exile four to four and a half centuries ago, and the active push for hearts only in the past few decades. dossiers/nghathrod.html and dossiers/vthoramu.html now say only that he has been joined to the ship since its taking. Set a figure, or leave it unnumbered. Touches: dossiers/nghathrod.html, dossiers/vthoramu.html, vessels/vthoramu.html, factions/vthorama.html, the timeline.
  src: Factions review, 2026-10-28; section 4 plan; section 5 (2026-10-28)

- **[later]** N'ghathrod's stat block
  One block, at the ceiling, never scaled: an exit condition tied to his objective, non-lethal takedowns, and enough action economy for six PCs. The CRC's Withdrawal Threshold and Legendary Resistance are the precedents. The enna's blocks (CR 12 to 16, lopsided) are unbuilt too.
  src: dossiers/nghathrod.html; section 5 (2026-10-28)

---

### dossiers/ostekk.html

- **[decide]** Why Vaelorix stole from Ostekk *(prep)*
  The theft of the Lantern and the nine OSTEKK units is canon. Was it to escape a debt to Ostekk? The debt is an unreviewed draft, along with a Fallmouth porter mentioning "Ostekk's machines" and Ostekk-6 freezing at the words.
  src: chat-astral-sea-worldbuilding § Open; memory-canon campaign-canon § Naming (OSTEKK units)

---

### dossiers/rindle-gearloft.html

- **[decide]** Dock master or dock worker *(prep)*
  The player record calls Rindle a dock master who runs a dock near the Sea Dock; the dossier's role line says "Sea Dock worker". Align the dossier to the record, or confirm the difference is deliberate (what the crew believes vs what he is).
  src: data/npcs.json (Rindle Gearloft); dossiers/rindle-gearloft.html

---

### dossiers/the-runekeeper.html

- **[later]** The Runekeeper's name
  The page has "Name open". Name him.
  src: chat-cosmic-campaign-structure § Open; chat-crew-tumak-gregory-bartholomew § Tumak/Open

- **[later]** A Runekeeper's leaving and the Becoming
  The Runekeeper is the only permitted way into and out of the homeworld, and leaving is allowed only for set reasons, the Becoming among them (dossiers/the-runekeeper.html). The other set reasons are not named.
  src: chat-crew-tumak-gregory-bartholomew § Tumak/Runekeeper lore and pressure; section 5 (2026-10-28)

---

### dossiers/thessalar.html

- **[decide]** The craft's control gems: two, or a system of seven
  vessels/thessalars-craft.html (finished) says two gems controlled and defended the craft, the red gem in the cavern lake and the hazy yellow gem in the workshop. The module sweep lists a control and defence system built of gems: speckled amber, cloudy orange, three emerald green, light purple and hazy yellow. Rule whether the system holds more gems than the two Lola's Boys took. Touches: vessels/thessalars-craft.html, dossiers/thessalar.html, the Fonains doc.
  src: module-sweep-fonains § Temple of Moloch; section 5 (2026-10-28)

- **[later]** Thessalar's copies and the dungeon's tiers
  Which of the eight copies, if any, are loose outside the wreck, and how many tiers of the dungeon are worth mapping, wait until the crew heads for the wreck. His appearance is not set.
  src: dossiers/thessalar.html; section 5 (2026-10-28)

---

### dossiers/veena-derek.html

- **[decide]** Their reading *(prep)*
  What Veena and Derek's reading is.
  src: chat-cosmic-campaign-structure § Open

---

### dossiers/vthoramu.html

- **[decide]** Does the ship die with N'ghathrod?
  A draft line: "N'ghathrod and the ship are joined: if his true body dies, the ship dies, and the colony loses its home." It is held back from the page. STAGING rules that the taken outlive him, each keeping part of him; it says nothing of the ship. Rule whether the dreadnought dies with his true body. Touches: dossiers/vthoramu.html, dossiers/nghathrod.html, vessels/vthoramu.html, opposition/vthorama.html.
  src: chat-cosmic-campaign-structure § N'ghathrod and the colony; section 5 (2026-10-28)

---

### dossiers/winston-ryeback.html

- **[decide]** His stat block lines *(prep)*
  The Hand Cannon line uses the giff's Pistol numbers (dossiers/winston-ryeback.html). With his custom pistol the stolen weapon, the open part is whether his block also keeps the giff's Musket line.
  src: memory-canon campaign-canon § Key NPCs (Ryeback); dossiers/winston-ryeback.html

---

### dossiers/zerathis.html

- **[later]** The accounts of Zerathis
  Zerathis is a name the crew hears long before they meet what remains of him, and the accounts disagree (the Osiris pattern). The accounts themselves are not written; each is set when it is used. His species and look in life are not set either.
  src: section 5 (2026-10-28)

# Crew

Pages under `prime/crew/`. Items under each page run decide, fix, drop, add.
Items whose source sweep is still partial keep their `(sampled)` or
`(snippet)` tag in `src:` so they can be confirmed later.

### crew/index.html

- **[later]** Where each PC's homeworld sits
  Placed and written on crew/index.html § The crew together (section 7): Gregory, Toril in Realmspace; Sol, Aethris (CSC 56973 b), mid-Zenith; Tumak, the Wayfinders' unnamed homeworld in a hidden system of the Erevos Galaxy, concealed by the Dissolution cycle (Lunarfoot is the clan, never the world).
  Left: Casey's is the world the 1486 "deliberate" meteor fell on; its system is withheld until surveyed. Bartholomew's comes from a celestial druid tradition and the FIA has no hint of it yet. Boogie's is unplaced. For each: place it now, or leave it unplaced until play needs it. Touches crew/index.html, each crew page, locations/index.html.
  src: chat-cosmic § Open; framework § Open; memory-canon (open-decisions, unresolved gaps; Gregory)

- **[later]** How cadets from worlds without spelljamming reach Caelestis
  The one route Korey has stated is Sol's: the Watcher order broke protocol to recommend he be taken to Caelestis. The FIA already hints at a route for each PC, with no dedicated intake file (Korey chose scattered hints over one file): WM-006 field referral and protective placement (Sol); SA-002 1486 meteor account by a minor referred to intake (Casey); FR-016 inspecting party reassigned to cadet intake (Boogie); SA-002 1491 two arrivals from an uncatalogued system (Wan and Tu). Gregory arrived on a cargo ship. Bartholomew has no hint.
  Left: whether there is a general rule. Options: Watcher referral as the general route; several routes (Watcher referral, Fleet recruiters, walk-ins at stations); or a per-cadet answer with no general rule, as the FIA hints already read. Touches crew/index.html, crew/sol.html, and a new Cadet intake page (see the New pages section).
  src: chat-cosmic § Open; framework § Open; memory-canon (open-decisions, unresolved gaps; Watcher recruitment for Sol); BCS § Sol/C.R.C. and the scry beats; framework § FIA records (intake hints), § Superseded (no PF-004 intake file); memory-canon campaign-canon § Gregory (cargo ship)

### crew/sol.html

- *(The question "Am I a person or a function?" from the retired spine waits on the decide "What Gregory and Sol are missing" under campaign/index.html; crew/sol.html carries it as a Still to decide sentence.)*

- **[later]** Misfortuned rebalance (on hold)
  Korey does not recall this thread; it waits until he returns to it. Until then the locked turn-757 text on crew/sol.html § Misfortuned stands. For reference, he paused it at turn 899 ("hold that and I'll come back to it"). His diagnosis then: Sol can change several rolls a combat and Unburden without feeling the cost. The pending draft:
  - Burden charges equal his proficiency bonus and come back on a long rest only.
  - Burden adds his Charisma modifier to an ally's roll, after the roll and before the outcome. It no longer turns a failure into a success (Korey compared auto-success to Legendary Resistance).
  - Misfortune level equals Burden charges spent. Each level is a flat −1 to all of Sol's d20 Tests, replacing the d6 ability penalty.
  - Unburden, once per long rest at Misfortune 2 or more, adds proficiency bonus × Misfortune to Sol's own d20 Test or damage roll.
  Exhaustion as the cost was tried and dropped. Sol cannot Burden himself.
  src: BCS § Sol/Open, § Sol/Misfortuned; Korey, 2026-10-25 (backlog pass)

- **[later]** The gloss for the tenet Court Adversity
  crew/sol.html names the tenets Never Yield, Court Adversity and Risk Is Not Ruin, with glosses for the first and third only. Court Adversity's gloss is in oath-of-misfortune.md in the Sol chat outputs, which is not in the repo. Bring it in and add it to the oath on crew/sol.html.
  src: section 7 (2026-10-28); inbox/chat-crew-boogie-casey-sol.md § Sol/Oath of Misfortune

- **[later]** Sol's sheet
  His current level and D&D Beyond URL, and whether the sheet's oath spells and Charisma 18 match crew/sol.html Mechanics › Build.
  src: section 7 (2026-10-28)

### crew/casey.html

- **[later]** What the first tether at Viren is
  Options: a dying stellar entity; a Zerathis-connected place or person; stellar-touched inhabitants; a rift onto a missing constellation.
  src: BCS § Casey/Open

- **[later]** The "bad" event at Viren
  Design a non-catastrophic event at Viren that makes Casey question whether the change is worth what he gains.
  src: BCS § Casey/Tethering, Open

- **[later]** The other Starchild
  A living Starchild like Casey will appear as pressure, rival or partner, modelled on Avantika (crew/casey.html, Arc; merged from the add "A living hearer"). Set their shape: further along than Casey, earlier, diverged, or opposing. Set where they are headed.
  src: BCS § Casey/Open

- *(Casey's beat for the crossing is one item with Casey's V007 beat, under campaign/voyages/index.html. Ruled already: the missed level 3 scene is dropped and visions are used sparingly; crew/casey.html carries both.)*

- **[later]** The Lantern Node alignment: its bonus, and its name
  Set the bonus. Decide whether to rename it, since "Lantern" collides with the Lantern of Flourishing.
  src: BCS § Casey/Open

- **[later]** Whether Gregory's Calibration picks up Casey's tethers as paracausal static
  Proposed, acceptance unconfirmed. Accept or drop. If accepted, cross-link from crew/gregory.html.
  src: BCS § Casey/Tethering

- **[later]** Whether Zerathis recruited other Starchildren
  Page lists it as open. Options: yes (and whether the other Starchild is one), or Casey is the only one.
  src: framework § Open

- **[later]** Casey's sheet check
  His current level and D&D Beyond URL, and whether the zodiac spell names, the Wayfarer background and Wisdom 4 on crew/casey.html Mechanics › Build match the sheet.
  src: section 7 (2026-10-28)

### crew/tumak.html

Rules for the runes, marks, Wayfind and the Rune Sets live on rules/index.html; see the Rules section.

- **[later]** How a separated twin plays out at the table
  Settled so far (Korey, turn 227): at the table only the twin with the crew is played, a lower-level one-shot with the separated twin is possible, and the twins reunite through the campaign, through the crew or by other means. Still open for a long separation: off-screen montage, a solo one-shot, or shared visions (turn 143). The reunion mechanics are a separate decide on rules/index.html.
  src: TGB § Tumak/Mishap and separation, Open

- **[later]** Tumak's sheet
  His current level, his class split (Rogue 3 and Sorcerer 1 at level 4?) and his D&D Beyond URL. When they arrive they go in Mechanics › Build on crew/tumak.html.
  src: section 7 (2026-10-28)

### crew/gregory.html

- **[decide]** The Sailor gate at the Sea Dock *(prep)*
  (A) He truly needs Sailor clearance, and gets in with an escort via Kip or Pik or a sanctioned reason. (B) He only thinks he does, and a service route exists. (C) Hybrid: Rindle has moved the Latchling and Gregory must recalibrate.
  Folded in from the add "Sailor clearance": part of the Sea Dock needs Sailor clearance, and a cadet inherits only Visitor, so Gregory needs, or thinks he needs, Sailor access. When ruled, write it into crew/gregory.html § The Latchling (Obstacles) and drop the Still to decide sentence. Conflict: the record gives all six cadets "Clearance: Sailor" and Tumak's Voyage 3 bullet has Mirt granting the crew sailor-level clearance, while Gregory's Voyage 3 bullet has him locked out of a fleet-clearance category by his cadet star (see Player record flags).
  src: TGB § Revising voyage briefings/Open

- **[decide]** What Gregory learns once the Latchling anomaly resolves *(prep)*
  src: TGB § Gregory/Open

- **[decide]** Gregory's Bearing feature *(prep)*
  Draft: once per long rest, 10 minutes of listening gives direction and rough distance to a paracausal source he has felt before. Through the seated Lantern, once a day, it reaches farther. Options: lock or hold. If locked, it goes here and in the character subsystems on rules/index.html.
  src: chat-voyage-6-7-planning § Open

- **[later]** Gregory's sheet check
  His current level and D&D Beyond URL; whether Arcana is still +2 and Built for Success is still on the sheet (crew/gregory.html Mechanics › Build and the Calibration bands depend on both).
  src: section 7 (2026-10-28)

### crew/bartholomew.html

- **[decide]** Whether Almost-Shift slips still run *(prep)*
  The page's "How a slip runs" has three registers and one weighted slip per scene, with a 3-strain threshold (wrongness and recognition, no anatomy). Options: keep slips running alongside Aspects, or fold slips into Aspects. Rule the 3-strain threshold either way.
  src: TGB § Bartholomew; crew/bartholomew.html "How a slip runs"

- **[decide]** Tier 1 alien creatures for the Academy *(prep)*
  Owed: 3–4 designs that echo his beast forms and his star-mapping. Schedule or draft.
  src: TGB § Bartholomew/Open; memory-canon (open-decisions)

- **[decide]** The bloom's name *(prep)*
  Options: Kinbloom, Mantlewort, Otherlily.
  src: chat-voyage-6-7-planning § Open

- **[decide]** How a Lantern charge renews the bloom *(prep)*
  Settled: renewing the bloom with a Lantern charge is the crew's active choice. Open: the details (cost, how often, what it restores). Touches crew/bartholomew.html and artifacts/containment-engine.html.
  src: chat-voyage-6-7-planning § Bartholomew: Aspects; memory-canon § Bartholomew

- **[later]** Full Almost template details
  Settled (see the Full Almost form add): physical scores come from the seated creatures with no cap, mental scores stay his own, AC is 10 + Dex unless an armour aspect applies, and the form costs a Wild Shape use and unlocks when the constellation is complete. Dinosaurs are off the aspect menu and must be earned.
  Left: its HP; when each of CON-312's faint stars unlocks (two burn from his childhood fall); and whether dinosaurs join his Wild Shape list, which is separate from the aspect menu.
  src: chat-voyage-6-7-planning § Open, § Bartholomew: Aspects (Settled)

- **[decide]** Aspects without study *(prep)*
  The earlier ruling (memory canon) says aspects from any beast within his Wild Shape CR cap need no study and only non-beast aspects need study. The player handout on `aspects/` gives him a starting catalogue of ten aspects instead (the four Known plus six of his choice) and learns every new aspect by Track or Glimpse. crew/bartholomew.html follows the handout and carries this as a Still to decide sentence. Rule which holds; if the CR-cap rule stands, the handout needs the change. Also confirm the learning DC: the earlier ruling has a save against a CR-based DC, the handout has Track or Glimpse checks against a DC the DM sets.
  src: section 7 (2026-10-28); memory-canon § Bartholomew; aspects/index.html

- **[decide]** The burning stars and the seated aspects
  The CON-312 answer says two stars burn from his childhood fall and the rest fill as he studies. The old crew page said his two bright stars are the seated aspects (ape and spider), and the handout has the two stars burn brighter as the ape and spider answer. Rule whether the two burning stars are the ape's and the spider's seats, or two of his own from the fall with the aspects seated elsewhere. crew/bartholomew.html carries it as a Still to decide sentence.
  src: section 7 (2026-10-28), conflict C7; aspects/index.html

- **[later]** Bartholomew's sheet check
  His current level and D&D Beyond URL; whether the sheet carries Wilder and Rashemi (the record has Human, Druid, Specialisation Wilder), and his Wild Shape forms list.
  src: section 7 (2026-10-28)

### crew/boogie.html

- **[decide]** Which deckhand item goes missing on the tyrant ship voyage *(prep)*
  Korey names the item (see the "Next beat" add).
  src: BCS § Boogie/Open

- **[later]** Giorge and the shards
  Giorge is the Darkest Day vessel on Fonains (spelling per rulings; a different person from Jorgi Panamop).
  Settled: Giorge is searching for pieces of the broken Monolith and may cross Boogie's path later. Korey, in the Boogie chat: "Giorge Forsworn is a character I retrofitted to be similar on Fonains. He is searching for pieces. Not super important here but may overlap at some point." Add to crew/boogie.html (DM notes) and artifacts/fonains-shard.html: "On Fonains, Giorge is searching for pieces of the broken Monolith. His path may cross Boogie's."
  Left: (1) his surname. Korey typed "Giorge Forsworn"; memory canon records only that he was inspired by George Foreswarn. Options: Forsworn on the page, or no surname. (2) Whether his original Tharizdun tie is revisited (memory canon: "possibly to be revisited").
  Touches crew/boogie.html and artifacts/fonains-shard.html.
  src: BCS § Boogie/The shard and Tharizdun; memory-canon § Naming (Giorge); session-rulings
  answered (shard search): BCS § Boogie/The shard and Tharizdun (Settled); original Boogie chat fa8c4131 (Korey's line quoted above)
  done: crew/boogie.html carries the settled line (section 7); artifacts/fonains-shard.html carries it too.
  Settled since (Tharizdun tie, part): "Shothragot, Tharizdun's avatar, was bound to the temple aboard the planar craft. Its true vestige may still be there, and Giorge may be trying to reach it." Still open: his surname.
  answered (part): STAGING § Tharizdun and the planar craft

- **[later]** Boogie's sheet check
  His current level and D&D Beyond URL, and whether the Shield of Expression is on the sheet (the record lists "shield").
  src: section 7 (2026-10-28)

# Artifacts and vessels

Pages under `prime/artifacts/` and `prime/vessels/`. Items under each page run
decide, later, fix, add. Section 4 rewrote every page on 2026-10-28; what is
left here is open.

### Every fragment

- **[decide]** What a fragment made whole does
  A whole fragment does not open the First Heart (Korey 2026-10-27: "Assembling the pieces should do something but probably not open the first heart. Our structure has changed since then."). What assembling one does is not set. The old "second key" (Vecna holding the whole Rod as his fallback) is retired with it. Every fragment page and the Artifacts register carry this as a Still to decide sentence, and nothing else. Two knock-ons wait on it: the twins carry both Dissolution pieces, so the Dissolution fragment is the first that could be whole in play; and the old gate on the twins ("not a key to the First Heart before about level 12, early in Arc 3") has lost its object, so what that level-12 gate now gates is part of this decide. Pages that carried the First Heart key (artifacts/, factions/runekeepers.html, locations/wayfinders-homeworld.html, rules/index.html, crew/tumak.html, connections.json) no longer say it.
  src: chat 2026-10-27; section 4 (2026-10-28)

### artifacts/index.html

- **[decide]** Which fragment the colony's residue piece belongs to *(prep)*
  The register carries the colony's piece as a row with no fragment. The Erevos Galaxy holds only Consolidation, Dissolution and Distinction pieces (Cosmology § Three fragments), and both Dissolution pieces are in the twins, so it is a Distinction piece (the third, whose housing is unknown) or one of the four loose Rod pieces (first, second, third or sixth). The answer changes the Rod's loose count and its pull, or makes the colony's piece the third finder. Touches artifacts/index.html, distinction-fragment.html or rod-of-seven-parts.html, opposition/vecna.html § The colony's residue piece, factions/vthorama.html, connections.json (colony-residue-piece).
  src: section 4 plan, gap 3

- **[later]** Pages for the Hand of Vecna, the Eye of Vecna and the Book of Vile Darkness
  They are one line each under Other named objects on the register. Each gets an entry once where it is, and whether it has reached Caelestis, is set (the decide lives on dossiers/vecna.html). The other lines there (the wardrobe, the marked crate, Saerthe's miniature ship, the derelict logbook, the Vocath Arcane Rod) get entries when there is DM truth beyond a sentence.
  src: section 4 plan, gap 2

### artifacts/distinction-fragment.html

- **[later]** The third Distinction piece
  Ruled: the Distinction fragment is three pieces, each a finder; A.T.L.A.S. and its sister are two (STAGING rounds 10–11). What the third finds, and where it is, waits until play needs it. (Moved from the Timeline section.)
  src: Korey, 2026-10-25 (round 10)

### artifacts/atlas-sister.html

- **[later]** The sister's name
  On the page it is "A.T.L.A.S.'s sister". Name it, and say whether the Fleet catalogued it under a name of its own as it did A.T.L.A.S. (Astral Topographic Lithic Augury System). Its look, its maker, how it shows what it finds, why the Bellwether Crow was carrying it, and whether Clint still has it are on the page as Still to decide.
  src: section 4 plan

### artifacts/expansion-fragment.html, artifacts/determination-fragment.html

- **[later]** What an Expansion housing does, and what a Determination piece does
  Neither fragment has a located piece, and the Erevos Galaxy holds none of either. Set what each does in a housing when a piece enters play.
  src: section 4 plan

### artifacts/rod-of-seven-parts.html

- **[decide]** Beholder ties on the fourth piece *(prep)*
  Canon says Rod pieces other than Xanathar's must be decoupled from beholders, but the fourth piece's maker (Ostekk) and its last holder (Vaelorix) are both beholders, and Ostekk now rules a domain on H'Catha and wants it back. Its current holder is the crew, so the rule's letter (holders) is met today. The question is the rule's purpose (keep the campaign from getting too beholder-heavy). Options: (a) the rule is about current holders, so the Lantern passes and stays a beholder-history object; (b) the Lantern is the one named exception, and the remaining loose pieces (first, second, third, sixth) get non-beholder holders; (c) soften the Lantern's beholder ties (for example, Ostekk stops pursuing it after H'Catha).
  src: memory-canon § Cosmology ("Rod holders…"); chat-voyage-6-7-planning § Naming ("Ostekk is a beholder")

### artifacts/containment-engine.html

- **[decide]** What Ostekk calls the Rod piece *(prep)*
  Options: the Constant, the Inclusion, the Mender, the Kernel.
  src: chat-voyage-6-7-planning § Open

- **[decide]** Why the behir could not sense the Lantern *(prep)*
  Options: the bag of holding blocked it, since its interior is an extradimensional space (lock this before players ask); or the anti-magic field around the Command Deck had already been muting the Lantern's pull, as it muted Gregory's tug, and the behir lost the trail inside it.
  src: chat-voyage-6-7-planning § Open; memory-canon § Antagonists (field suppressing the Lantern)

- **[decide]** Whether a pod charge plus an INT DC 15 parts check wakes Ostekk-2 for good *(prep)*
  The page and prime/data/overlay.json offer this ("The seated Lantern and the pod can wake it for good in Voyage 007"); no settled source backs it. Options: keep it as the V007 offer, or drop it.
  Partly settled by STAGING § Ostekk-2: Ostekk-6 is the only active survivor of Vaelorix's nine units; Ostekk-2 lies inert on the Hollow Deck, and the crew could heal it back to function if they return for it, for example with the Lantern of Flourishing. Still open: whether the specific mechanic (a pod charge plus an INT DC 15 parts check) is how that healing works.
  src: artifacts/containment-engine.html; prime/data/overlay.json
  updated (section 4): the Lantern page carries this as a Still to decide sentence, and the overlay beat now follows STAGING (the crew could heal it if they return for it).

- *(The bloom-renewal and Anomaly 02 decides touch this page; they live in the Crew section under Bartholomew and Gregory.)*

- **[add]** Restoring a limb (add to the item description)
  Restoring a limb takes a compatible cradle and every charge, daily, for seven days.
  src: chat-voyage-6-7-planning § Lantern of Flourishing
  held (section 4): the source chat marks this an inference, not in the repo. The page leaves it out and says in Still to decide that limb restoration is not set; confirm before it goes on the item card.

### artifacts/fonains-shard.html

- **[fix]** Drop the accumulation milestone
  Still to decide carries "the milestone where the accumulation starts costing Boogie". Boogie's arc method has no fixed reveal and no milestone (crew/boogie.html, Arc); the milestone question is retired. Keep the first half of the sentence (what a corrupted archive fragment does over years at this scale) if it is still wanted.
  src: section 7 (2026-10-28), conflict C6

### artifacts/faelight-spore.html

- **[decide]** The Faelight spore's slot rules *(prep)*
  The page reconciles the old rules/index.html#counter-spore section (removed in section 4) with the BACKLOG radius steps: the slot sets the radius only (10/20/30 ft for a 1st/2nd/3rd-level slot), the cloud lasts 1 minute whatever the slot, and there is no level cap. The Rules page had capped a 3rd-level caster at a 2nd-level slot and said slot level scaled area and duration; both were dropped as Rules-page additions with no ruling behind them. Confirm, or restore the cap or the duration scaling. Also open: where the spore is now. The player Collection Manifest (entry 051) lists it as "Intake · unprocessed"; the voyage 6–7 planning chat moved it from the Cargo Deck to the Garden (§ Superseded). The page follows the manifest and names the Garden as unconfirmed. Also open on the page: whether a slot above 3rd widens the cloud, whether a coated creature stays coated after leaving the cloud, and whether the spore can be carried off the ship.
  src: section 4 (2026-10-28); rules/index.html#counter-spore as it stood

### vessels/vthoramu.html

### vessels/tyrant-ship.html

- **[decide]** Which four eyes work, and the player ship sheet *(prep)*
  Settled: Vaelorix worked the great eyes with his own gaze; Pffred and Krik'Lit rigged a crew station for each eye around the helm on the Command Deck; four of the ten respond, and the rest need repairs. This replaces memory's "three stalks wired as cannons, gunners in the Meditation pods" (update memory). Also settled: the stalk matching the hour's eye goes dead on H'Catha under the Pact. Still open: which four respond and what each does. Draft candidates: Fear (wakes on crossing entry 7), Telekinesis (an easy first unlock), Slowing (later); the fourth is unnamed. Then the player ship sheet the players were promised. The V007 runsheet still has three cannons with two active.
  src: chat-voyage-6-7-planning § Open, § The Lantern and the ship, § Superseded (three cannons → four of ten eyes); astral § The meteorite and mission

- **[decide]** Which shaft letter Research gets *(prep)*
  The table set A as the Garden and C as the Quarters. Options: B or D.
  src: chat-voyage-6-7-planning § Open

- **[later]** The lingering Lantern wisps
  Settled: the choice is the crew's, keep the wisps or eradicate them. Nothing for Korey to rule; this waits on play. Record the crew's choice when it is made, and until then the page states that the wisps linger in the ship.
  src: chat-voyage-6-7-planning § The Lantern and the ship

- **[fix]** "Unmade constructs"
  vessels/tyrant-ship.html (§ History) and artifacts/containment-engine.html (§ History) say the bloom's field "killed magic and unmade constructs". The ruling is that the field froze the clockwork horrors, slowed the OSTEKK units and kept the behir out, a field it could not enter (dossiers/vaelorix.html, dossiers/ostekk.html). Change both lines.
  src: chat-voyage-6-7-planning § The field and constructs; section 5 (2026-10-28)

### vessels/bellwether-crow.html

- **[later]** The Crow after the ambush
  The Crow made Strake under damage (locations/cairn-station.html). Its class is set: a light corvette (restricted/wm-002.html, vessels/bellwether-crow.html). Whether it went back into service, its captain, and the clean survivor's name wait until the crew pulls the roster.
  src: section 4

### vessels/moonraider.html

- **[decide]** What the Moonraider simulation is drawn from
  Saerthe's simulation of the Derelict draws on real records (vessels/the-derelict.html). The same rule would answer the Moonraider's source, and captain-sardax.html poses the question ("either someone survived to describe it, or…"). Confirm that it applies, or set another source.
  src: section 4 plan (inference)

### vessels/the-derelict.html

- **[fix]** The record's logbook copies
  data/items.json still says Casey and Gregory bound duplicates, "so three identical copies exist"; the settled account is two halves, one held by Boogie (STAGING § Boogie; Player record flags above). Correct the record in a session run or a record edit, run derive, and match the player inventory entry.
  src: section 4 cold review (2026-10-28)

- **[later]** The Derelict's name, and records for the other salvage-race ships
  Settled for the other ships: every ship the crew encounters gets a record, and ships known only in simulation sit under the Simulation Deck with Status Simulated, so the salvage race's hammerhead and githyanki ship each get a simulated record and a register row, as the Moonraider and the Derelict did. Still open: the Derelict's name. Options: "Salvage Race Derelict", or keep "Derelict". Touches this page and vessels/the-derelict.html.
  src: chat-voyage-6-7-planning § Open; § The swap and NPCs (Moonraider and Derelict as simulated records); § Table and story principles ("Every ship the crew encounters gets a record"); memory-canon § Naming ("Ships the crew encounters get cataloged")

# Rules

Pages under `prime/rules/`, `prime/statblocks/` and `prime/tracker/` (whose DM
layer is `prime/data/overlay.json`), plus one player-site rules page. Items
under each page run decide, fix, drop, add. The Tumak items are checked
against the complete Tumak sweep (all 336 turns).

### rules/index.html

- **[fix]** "Open" sections on the page
  The page carries an "Open" h3 (line 384) and an "Open" h2 with an is-open "Unresolved" tag (line 427). Rewrite them as Still to decide sentences when the Rules section is done.
  src: section 4 cold review (2026-10-28)

#### Cosmology rules

- **[fix]** Residue housings are dampened in anti-magic, not switched off *(answered)*
  Page says paracausal objects are "Unsuppressed … an instrument built around a piece works inside an anti-magic field". Change to: inside an anti-magic field an instrument built around a residue piece is suppressed in part. Its pull is muted and its working stutters, but it is not switched off. On the tyrant ship the Command Deck field suppressed the Lantern of Flourishing and muted Gregory's tug toward it; the OSTEKK units, built with the Lantern's fragment, stuttered and slowed and kept running, while the clockwork horrors froze and the behir could not enter. Gregory's own sluggishness there was narrative only. When the field lifts, the pull returns in full. The same wording goes on artifacts/containment-engine.html (§ Where it is, the anti-magic add) and the OSTEKK dossiers.
  src: memory-canon § Antagonists ("The anti-magic field has been suppressing the Lantern"), § Key NPCs (Ostekk-6), § Cosmology (Weave ruling)
  answered: memory-canon § Antagonists ("The anti-magic field has been suppressing the Lantern, muting Gregory's tug … When the field lifts, Gregory can commune with it"), § Key NPCs ("in the anti-magic field they stutter but keep running"); inbox/chat-voyage-6-7-planning.md § The field and constructs (Settled). Memory outranks the page.

#### Tumak: runes, Rune Sets, Wayfind

- **[decide]** Runes 17–19 as Anchors: what they grant *(shape)*
  Settled idea (Korey, turn 326): runes 17, 18 and 19 become Anchors, fixed places Tumak goes to, so the arc leans into navigation and working with Gregory. The redo (turns 330–335) settled reach, bands, mishaps and cost around them (see the adds below) and left the Anchors open. Real gaps:
  1. What an Anchor grants: whether a Wayfind to an Anchor bypasses the reach gate, and whether it pays full cost, one band less, or nothing (the last of turn 335's three questions).
  2. Whether one Anchor is pre-set at campaign start.
  3. How a place becomes an Anchor, and how Gregory takes part.
  4. Which Rune Set each Anchor counts toward. Claude suggested at least one be Soul, since only 09 (Forehead) and 10 (Tongue) are rollable Soul positions (turns 258, 268).
  Offered and never accepted, so not the default: the names Hearth, Threshold and Horizon; a loop where Gregory's Calibration finds anchorable sites; Anchors bypassing the reach gate (turns 327, 333). The page still reads "Unassigned (bestowed)" and "bestowed at story moments", and § The safety valve leans on the three bestowed positions. Touches rules/index.html (position table, § The safety valve, § Open), rules/wayfinder-path-dm.html, crew/gregory.html.
  src: TGB § Tumak/Rune structure, final (turn 326), Open; memory-canon (open-decisions § Pending; campaign-canon § Tumak Swan); framework § Open

- **[decide]** Which two runes are active now *(shape)*
  Still undefined, and the redo does not touch it. Set them. The left sole (08) is now matched; see the Tu's-half fix below.
  src: chat-voyage-6-7-planning § Open; framework § Open

- **[later]** Rune Set spellcasting ability
  Proposed at turns 329 and 331, no reply: Rune Set spells use Charisma, with save DC 8 + proficiency bonus + CHA modifier, cast at the set's tier with no upcasting. Accept or reject, then add to § The four Wayscribes.
  src: TGB § Tumak/Open

- **[add]** Wayfind reach gated by matched runes *(answered)*
  Add to § Wayfind as a reach table, and rewrite "grows with the inscription" (§ Wayfind) and "the range grows with the inscription" (§ Running it) to point at it:
  | Matched runes | Reach |
  |---|---|
  | 1–3 | Touch: within 100 feet |
  | 4–6 | Local: within 10 miles |
  | 7–9 | Planetary: anywhere on the same world |
  | 10–12 | System: any world in the same wildspace system |
  | 13–15 | Near wildspace: an adjacent system |
  | 16 | Deep wildspace: any of his marks |
  "A Wayfind to a mark beyond his reach fails without cost: no roll, no exhaustion. The mark stays where it is, waiting. He can place marks at any distance; only the journey is gated."
  answered: the Wayfind redo, turns 330–335 of the Tumak chat (fa2979bd), which Korey says is his latest system; turn 333 (Korey's H'Catha example: "Something has to scale the way find distance"); he moved straight to cost (turn 334) and did not revisit it.
  src: TGB § Tumak/Open, Superseded (Wayfind range)

- **[fix]** Distance bands *(answered)*
  The page's six mishap percentages ("0% · 20% · 40% · 60% · 75% · 90%, rising with range") get the reach-gate bands behind them: Touch 0%, Local 20%, Planetary 40%, System 60%, Near wildspace 75%, Deep wildspace 90%. The four-distance exhaustion rule (within 100 ft. / same planet / same system / cross-system) is retired with the turn-267 cost (see the cost add).
  answered: the Wayfind redo, turns 330–335 of the Tumak chat (fa2979bd), which Korey says is his latest system; turns 331 and 333
  src: TGB § Tumak/Open; framework § Open

- **[add]** Tiered mishap consequences *(answered)*
  Replace the single mishap result with a consequence for each band:
  | Band | Mishap | What a mishap does |
  |---|---|---|
  | Touch | 0% | Nothing; no roll. |
  | Local | 20% | Fizzle. The Wayfind does not happen; 1 exhaustion; he stays put. |
  | Planetary | 40% | Overshoot. Both twins arrive safely, 1d10 miles off target in a random direction. |
  | System | 60% | Short separation. The twins land at different points on the destination world; the Compass points them together; reunion in hours. |
  | Near wildspace | 75% | Standard mishap. The active twin and the party land at a Runekeeper sanctuary; the other twin stays at the origin; reunion in days. |
  | Deep wildspace | 90% | Full mishap. The twins land safe at different sanctuaries; reunion is a multi-session arc. |
  Network bonuses and the floor still apply to the roll. This is the latest form; the Near-wildspace row brings back "twin at origin", which Korey had replaced at turns 251–252, and the redo supersedes that.
  answered: the Wayfind redo, turns 330–335 of the Tumak chat (fa2979bd), which Korey says is his latest system; turn 331 (Korey, turn 330: a mishap at level 4 "would be really bad"); "Mishap tiers" locked in the turn-331 pre-launch list, unchallenged after
  src: TGB § Tumak/Open

- **[add]** Wayfind cost by band *(answered)*
  Replace the cost row: "The first Wayfind per long rest is free, in any band. Touch jumps (within 100 feet) are always free. Each further Wayfind costs exhaustion equal to its band: 1 for Local, 2 for Planetary, 3 for System, 4 for Near wildspace, 5 for Deep wildspace. Homebound is always free: no exhaustion, no mishap, no reach gate."
  Turn 335's first two questions are answered by its own rule text (the daily free applies in every band; Homebound is fully free). The third, what Anchors pay, stays with the Anchor decide above.
  answered: the Wayfind redo, turns 330–335 of the Tumak chat (fa2979bd), which Korey says is his latest system; turn 335 clean rule text
  src: TGB § Tumak/Open, Superseded (Wayfind cost)

- **[fix]** Network modifiers apply only when Tumak stands at a mark *(answered)*
  Page: "−10% if the mark was placed by a rune from another set; −25% if from the same set", with no standing condition. Change § Wayfind → Network modifiers to: the network helps only when Tumak is standing at one of his own placed marks as he casts. If the destination mark is from the same set, add 25 to the d100 roll; if from a different set, add 10. Cast from anywhere else, the Wayfind is allowed at full risk with no bonus. The network buys safety, never energy: exhaustion is the same either way. (The d100 bands themselves are the Wayfind-odds fix below.)
  src: TGB § Tumak/Wayfind, Open
  answered: inbox/chat-crew-tumak-gregory-bartholomew.md § Tumak/Wayfind (Settled, turns 241–247, 262). Confirmed in the chat: Korey, "he can use a marked rune to [hop] to another marked rune from the same set and mitigate the mishap chance"; the +25/+10 numbers are from the mechanics spec wayfinder-runekeeper-mechanics.md (turn 268), § Set network mechanic.

- **[decide]** The early-home door *(shape)*
  Keep or drop: a natural 20 on a d20, rolled before declaring a target, then a confirmation roll to reach home ahead of the arc.
  Missing from the sources: the redo never mentions it. Under the reach gate home is out of reach until the Heart awakens at 16, so keeping the door makes it an explicit exception to the gate.
  src: TGB § Tumak/Open; framework § Open

- **[later]** Does Sending work between separated twins?
  An open proposal, never confirmed. Accept and add beside the Twin Bond Compass, or reject.
  src: TGB § Tumak/Open

- **[decide]** How resources split when the twins separate *(shape)*
  Korey's working position (turn 257): the separated twins split resources about in half (spell slots, sorcery points, Runechild charges, psionic dice), and both keep the full spell list. Earlier he floated half HP, half spell slots and maybe half skills (turn 140). Missing from the sources: the redo does not address it. Still to rule: HP, death, consumables, and the exact split. Then add to § Wayfind → While separated.
  src: TGB § Tumak/Separation and attempts, Mishap and separation, Open

- **[add]** How separated twins reunite *(answered)*
  Add to § Wayfind → While separated: "The twins reunite by travel, through the crew, or by following the Twin Bond Compass. Wayfind stays locked until they do. A System mishap reunites them within hours, a Near-wildspace mishap within days, and a Deep-wildspace mishap over several sessions." The return-Wayfind proposal (turn 329) is not adopted, so the "Wayfind locks until the twins reunite" row stands.
  answered: the Wayfind redo, turns 330–335 of the Tumak chat (fa2979bd), which Korey says is his latest system (turn 331 tier table: reunion in hours, days, a multi-session arc; "Twin Bond Compass points them together"); Korey, turn 227 (reunion through the campaign, the crew or other means)
  src: TGB § Tumak/Mishap and separation, Open

- **[decide]** Mark lifecycle and Perceive details *(shape)*
  Proposed at turn 329, no reply, and the redo left it open (turn 331: "still needs the one-page ruleset on duration, concurrency, creatures, anti-magic"). Marks: whether a mark can sit on an object or a willing creature, what anti-magic does to one, and what happens to a mark inside a Bag of Holding. Perceive: sight and hearing only, with Tumak's own senses blinded while he perceives. Rule each, then add to the Marks row.
  src: TGB § Tumak/Open

- **[decide]** 2014 or 2024 exhaustion rules *(shape)*
  Pick one; Rune Set spells and Wayfind both cost exhaustion. Missing from the sources: Korey never picked. The redo's worked examples read the 2014 table (level 1 disadvantage on ability checks, level 2 speed halved), but that is Claude's framing, not a ruling.
  src: TGB § Tumak/Open (turn 145)

- **[decide]** The retroactive backfill: when the two runes land *(prep)*
  Settled: two more rune-halves per twin backfill levels 1–2 (turn 134; restated "give him two runes as well" at turn 259), and they are DM-placed, not rolled: the backfill pair counts among the up-to-four runes at DM discretion (turns 259–260; see the safety-valve add). Still open: when they land, since the planned window (between V3 and V5) has passed (options: at V007's quiet stretch, or at the next level-up), and which positions they take (place them to steer toward a first complete set, or to match existing halves). Then update the position table and "Current state".
  src: TGB § Tumak/Open, Rune structure, final ("Up to four runes are at DM discretion: two to backfill levels 1–2")

- **[later]** An optional spell-inscription track
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
  Page says "First Wayfind per long rest is free. Each further one adds a level of exhaustion." Locked at turn 267 (Korey's "Interpretation A"): each Wayfind costs exhaustion by distance: within 100 ft. 0, same planet 1, same system 2, cross-system 3. The network buys safety, not energy, so marks lower the mishap and never the exhaustion.
  updated (backlog pass): superseded by the redo. Write the cost from "Wayfind cost by band" above; the network still buys safety, never energy.
  src: TGB § Tumak/Wayfind, Superseded (Wayfind cost)

- **[fix]** Wayfind odds: three outcomes, rare mishaps
  updated (backlog pass): the redo keeps one mishap percentage per band and tiers the consequence (see "Tiered mishap consequences") instead of a separate failure band. The floor (1% in-network, 5% cross-system) and the network bonus stand; write the bands from the reach-gate and distance-band items.
  Page gives one mishap percentage per band and "Floor 5% during the arc, except within 100 feet and for the Heart once it awakens." Settled: mishaps are rare, and each band carries a chance of plain failure (Korey, turn 253). The roll is a d100 with three outcomes: mishap, failure, success (turns 254, 268). The floor is 1% in-network at most ranges and 5% cross-system (turns 258, 268), and a mishap stays possible in-network (turn 257). Replace the single percentages with the three-outcome bands from the mechanics spec `wayfinder-runekeeper-mechanics.md`. That file is not in the repo, so copy the numbers from the chat output.
  src: TGB § Tumak/Wayfind, Mishap and separation; TGB § Tumak/Documents produced

- **[fix]** Mishap result: two sanctuaries
  Page says "The twins separate, and the traveler arrives at a previous Wayfinder's resting place. On a group jump the party lands at that sanctuary with one twin; the other stays at the origin." Change to: the twins separate, and each lands safe at a different previous Runekeeper's resting place. Never home. On a group jump the party goes with the active twin. Korey replaced "the other stays at the origin" at turns 251–252. Use "Runekeeper", not "Wayfinder", for the resting places.
  updated (backlog pass): this is now the Deep-wildspace row of "Tiered mishap consequences"; write the mishap result as that table.
  src: TGB § Tumak/Mishap and separation, Superseded

- **[fix]** Perceive through a mark needs concentration
  The Marks row says "perceive through any of your marks (1 per long rest, one minute at one mark)". Add concentration (Korey, turn 259).
  src: TGB § Tumak/Marks

- **[fix]** Wan and Tu are two hosts
  § One in two says "Tumak is one person occupying two bodies" and calls the twins "a whole Dissolution fragment walking around in two pieces, which is a paradox the cosmology does not otherwise permit". The same section already says "two separate hosts sharing one persona". Restate as two hosts throughout. The fragment wording follows the canon counts (Dissolution has two pieces) and the decide "What a fragment made whole does" (Artifacts, Every fragment). The § "The consequence of one-in-two" paragraph ("a second key to the First Heart") was cut in section 4.
  src: memory-canon § Cosmology ("always two entities")

- **[fix]** Sol's oath is written
  § Open says Sol's oath carries "implied mechanics that live nowhere". The Oath of Misfortune is finalized (Unified Jinx with Jinx charges; Misfortune's Wake and Misfortune's Edge) and lives on crew/sol.html. Point there (Jinx is at `crew/sol.html#jinx`, Misfortuned at `#misfortuned`) and remove Sol from that line.
  src: memory-canon § Sol Fortuna

- **[add]** Why gods cannot make the crossing (§ The approach to the Core)
  Page says only "Gods cannot make the crossing at all". Add the reason: polarity. A god and a heart carry the same charge, so as a god pushes toward a world or the centre the resistance grows until it is unbearable. The centre has ill effects on a god without destroying it. There is no "divine gate".
  src: session-rulings (polarity); working/divine-rules.md § Polarity

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

- **[decide]** The floating runes 17–19 *(shape)*
  The page lists runes 17, 18 and 19 as "Floating (DM-bestowed)" placeholders. Update when the Anchor decide on rules/index.html lands.
  src: memory-canon (open-decisions § Pending)

### statblocks/index.html

- **[decide]** Ostekk-10's stat block and Lightning Breath *(prep)*
  Build the stat block. For Lightning Breath, options: the 12d10 line; or the 20-ft. cone the table saw (suggested 4d10, DC 16 Dex).
  src: chat-voyage-6-7-planning § Open

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

- **[fix]** Ostekk-6's repair objective is closed
  overlay.json "next" says "Seat the Lantern in the repair bay so Ostekk-6 finishes rebuilding." A Lantern charge repaired him instead of the bay. Close the objective, or replace it with his current next step.
  src: chat-voyage-6-7-planning § The Lantern and the ship

- **[fix]** What the Command Deck field does to constructs
  overlay.json says "The Command Deck's field unmakes constructs". Change to: the field froze the clockwork horrors, slowed the OSTEKK units and kept the behir out.
  src: chat-voyage-6-7-planning § The field and constructs

- *(The Ostekk-2 "wake it for good" line in overlay.json is a decide (prep) under artifacts/containment-engine.html in the Artifacts and vessels section.)*

### wayfinder-path/index.html (player site, outside prime)

- **[fix]** ACTIVE_HALVES: Tu's half at 08
  The player tracker's ACTIVE_HALVES lists Wan's 08 and Tu's 16 only. Add `{ num: 8, bearer: 2 }`, Tu's half of the left sole, so 08 shows as matched. Tumak knows this match, so it belongs on the player page. (The DM copy, rules/wayfinder-path-dm.html, already shows every rune matched and needs no change.)
  src: TGB § Tumak/Rune structure, final (turn 328); wayfinder-path/index.html

- **[add]** Who gets the tracker link (DM note, kept in prime)
  Korey sends the tracker link only to Tumak's player, or puts it on the character sheet marked player-only (turn 162). Record this with the rules page's tracker links.
  src: TGB § Tumak/Player tracker

# New pages

### Fonains Canon Reference (Claude doc, outside the repo)

- **[later]** Refresh or retire the Fonains doc
  Since section 8 the wiki carries Fonains: locations/fonains.html, factions/cretez.html, dossiers/vanifer.html and vessels/thessalars-craft.html. The doc's open fix and add items (# Fonains § Fonains doc) were written against it. In a chat session, either refresh the doc from the wiki pages or retire it and point to them.
  src: section 8 (Q1), 2026-10-28

### NEW: Asmodus (dossier, later)

- **[later]** A dossier for Asmodus Cre'Tez
  He is a row on factions/cretez.html. He has a motive, a withheld truth (his modified memory) and a way he reacts to being pushed, so he earns a dossier when Fonains comes into play for the crew.
  src: section 8 plan § 4

### NEW: Lola's Boys (faction, later)

- **[later]** A faction page for Lola's Boys
  The party is a set of rows on locations/fonains.html. Give it a faction page when it acts in Caelestis, or when the rows outgrow the Fonains page.
  src: section 8 plan § 4

### NEW: Player holochart

- **[add]** A player version of the 3D holochart
  The DM holochart (`prime/chart/holo.html`) is built; the players get their own (Korey 2026-10-28). It shows only what the crew knows: charted systems and places with a record, and the crew's route voyage by voyage, read from `data/`. Heart worlds appear only once the record holds them (the repo is public, so unfound positions must never ship in a player file). With the hearts in hand, the crew can set the viewpoint to any known system; from Oerth the eye forms. Players may mark their own waypoints in their browser. Needs a player folder (into the deploy glob and the S.E.A.R.C.H. scope) or a home under `stellar-chart/`, and the in-world framing of the projection.

### NEW: Languages (reference)

- **[add]** A home for invented languages
  Purpose: one DM reference for every made-up language in the cosmos, so names stay consistent. Voice: DM. First entry: the Vth'orama tongue, with its roots (vth- the whole of; ghath to hold and keep hold; n'- one who, one that is; -rod unbroken, that does not release; ulh the cull; -an negation; mer- to bear; enna near, inner; or- toward; amu home; -a a people), and the glossed words (Vth'orama, Vth'oramu, Vth'ghathu, Vth'ulhan, Vth'merru, n'ghathu, Enna Vth'ghathu, N'ghathrod). Add a section per language as others appear (Githyanki, chapter names for the Seekers).
  src: Korey, 2026-10-25 (round 4); factions/vthorama.html § Roots

### NEW: Fringe watcher of the cosmos (dossier, later)

- **[later]** The sage who sees it coming
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
  DM: the chamber is a failed survey for the heart's Atrium, and Tumak's runes surface there. Link to Opposition: the Vth'orama "How they search" (opposition/vthorama.html#search, Anadia well). locations/realmspace.html names Dunmarrow and Kesh Hollow on Anadia, and Lane Marker 14 on the Toril–Garden lane (section 3).
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

- **[decide]** Lock or change each Crossing Companion proposal *(prep)*
  Unreviewed: d20 crossing entries 9–20; the *Hollow Bell* and Corrow (a world mid-Zenith); the *Fennick* plate; Oswin Pell and the Listeners of the Low Bell (the first account of the voice); Kith'rak Aznuil and the two-circle Passage mark; the *Steady Hand*, Warden Oru Basz and the *Marrow Gull* buoy; Thistlewhit's letter to Mirt; the frozen autognome ("Hold until called"); the creed lines; Watcher history (the Quiet of Seln, Aubrin's Hand, the Ferry Arrangement, the Neogi Winter, the Ashfall contract, where Tarto lost her wing flap); Driftwarden grades IV–I shown by collar knots.
  src: astral § Open

- **[drop]** Dead names in the Crossing Companion doc
  The doc still names the Watcher "Ondessa Vael" and carries Ilvathe. Both names are dead; remove them before anything is lifted from the doc.
  src: astral § Open

### NEW: Exandria (realm stub or registry line)

**Purpose.** Records Exandria as a world in the cosmos, borrowed from a published setting, so it can be used without importing its history. Suggested: a line on `prime/locations/index.html`, or a stub.

**Voice.** In-world for the stub; DM for the borrowing note.

- **[later]** Exandria's sphere
  Place it, or leave it unplaced.
  src: memory-canon (open-decisions)

- **[add]** Exandria
  Exandria is a world in the cosmos. None of Vecna's history there happened in this cosmos; it plays as a pre-Vox Machina world.
  DM: it is a borrowed setting, like the Azeroth one-shot Korey's players have floated.
  src: working/vecna.md § Oerth; memory-canon (open-decisions, Vecna/Tharizdun 2026-10-25; Direction 2026-10-21)

### NEW: Hall of the Watchers (location)

**Purpose.** The Watcher order's seat. The crew delivers Ezra there on a graduation contract, and it is a candidate home for the Watcher who came back from Glyth. No realms page exists. Suggested path: `prime/locations/hall-of-the-watchers.html` (or under factions if it is not a world).

**Voice.** In-world.

- **[decide]** Where the Hall is *(prep)*
  Partly settled by STAGING § The Order (round 5): the Hall of Sight and Sound is the great hall within the Order's seat, so the Crossing Companion's identity question is answered. Still open: where the seat is. Its world, station or sphere is not set. Known around it: the H'Catha report ran Watcher → Hall → Fleet Corps → Academy, so the Hall is in reach of Caelestis's channels; Ezra trained about a century in the Hall of Sight and Sound (dossiers/ezra.html). Unreviewed: the Crossing Companion proposes that the Hall of Sight and Sound is the Hall of the Watchers. Rule that identity first, then place it: inside SPH-01 (the Watcher Transport contract is a graduation-grade job, so it should be reachable from Realmspace), or farther out.
  src: memory-canon § Key NPCs (Ezra); working/glyth-watcher.md § Where she fits; astral § Caelestis structure, § Open (Crossing Companion proposals); chat-cosmic § Rules and crew (Hall of Sight and Sound)

- **[add]** The Hall of the Watchers
  The Hall of the Watchers is the seat of the Watcher order. Watchers serve one per region, so a world may have several, depending on its size and who lives there.
  src: memory-canon § Key NPCs (Ezra; Watcher ruling corrected)

### NEW: Glyth Watcher (dossier)

**Purpose.** The Watcher who lived years on Glyth and came back. She is the only outside source on the elder brain and N'ghathrod's origins, and one of the named-but-unseen figures the crew hears of before meeting. Promotes from working/glyth-watcher.md. Suggested path: `prime/dossiers/<name>.html`.

**Voice.** In-world.

- **[later]** Her name
  src: glyth-watcher § Open

- **[later]** Her tell
  Options: her ears; her mouth; skin that ripples under the surface.
  src: glyth-watcher § Sketch

- **[later]** How she got out, and what it cost
  src: glyth-watcher § Open

- **[later]** What she wants now
  Options: revenge; a cure; to go back.
  src: glyth-watcher § Open

- **[later]** Whether the Order trusts her
  src: glyth-watcher § Open

- **[later]** Where she lives
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

### NEW: Boogie's faith (name to be chosen)

**Purpose.** The small faith that may come to see Boogie as a prophet. It sets up a pilgrimage and gives the shard's "holy" pull a human face. It must stay distinct from the Seekers. Suggested path: `prime/factions/<name>.html`, or a section on factions/index.html.

**Voice.** In-world; DM for the seed.

- **[later]** The faith's name
  Options: The Willing and Taken; The Hollow Faithful; The Willing Departed; The Welcomed Home. "The Following" is retired and unavailable.
  src: BCS § Boogie/Open

- **[later]** Which planets hold the faith
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

- **[later]** "The Unfolding"
  The tale's inherited name for the hiding is "the Unfolding", which collides with the glossary's heart-opening sense of "unfolding". Options: keep both; rename the tale's term; or rename the glossary sense.
  src: TGB § Tumak/"The Becoming" handout; glossary/

- **[add]** The tale
  It opens: "Long ago, my hearts — before my mother's mother's mother". In it the thing that came looking is "a star with too many mouths" or "a name written wrong", and the world folds itself around its people and bestows runes on them as gifts. It closes: "The two of you have always been one to me." / "When the time comes — come home safe."
  DM note (prime only): this is Lunarfoot belief. The runes come from the Dissolution fragment, not from a gift.
  src: TGB § Tumak/"The Becoming" handout; memory-canon (Dissolution fragment model)

- **[add]** The Lunarfoot seal
  A crescent moon cradling a footprint, with two four-point stars for the twins. Also usable on the-runekeeper.html.
  src: TGB § Tumak/"The Becoming" handout

### NEW: Cadet intake

**Purpose.** How cadets reach Caelestis, especially from worlds without spelljamming. No page covers recruitment.

**Voice.** In-world.

- *(The decide lives in the Crew section under crew/index.html. Known so far: the Watcher order broke protocol to recommend Sol.)*

### NEW: Campaign board

**Purpose.** The DM's at-a-glance view of the run: planned against actual per voyage, each crew member's contribution, the arcs, the off-screen powers, and the ripples into Arc 2. It exists today only as claude.ai artifacts. Whether it becomes `prime/timeline/` or a separate page is an automation decide (see the Automation and tracker section).

**Voice.** DM.

- **[later]** Whether the board's forward columns are editable
  src: chat-cosmic § Open

- **[add]** What the board shows
  Planned against actual per voyage; each crew member's contribution; the arcs; the off-screen powers; ripples into Arc 2.
  src: chat-cosmic § Wiki structure rules (turn 439); memory-canon (DM views at a glance)

### NEW: Campaign shape

**Purpose.** The tone and source rules for the cosmos as a whole. Suggested: a section of `prime/campaign/index.html`, or its own page.

**Voice.** DM.

### NEW: Cosmos texture

**Purpose.** The recurring patterns that make the cosmos feel lived-in and larger than the crew: things they keep running into across worlds. Suggested path: `prime/cosmology/texture.html`.

**Voice.** DM.

- **[later]** The ensemble of legendary figures
  Who the named-but-unseen figures are. spine.html lists it under Open development.
  src: chat-cosmic § Open; campaign/spine.html

- **[add]** The edge mystery
  Ruled (STAGING round 8). Add (DM voice): "A mystery lies at the edge, outside Realmspace, in another system or between systems. It will cross paths with Vth'oramu once N'ghathrod grows bolder." Planning layer: it needs an introduction before that.
  The sovereign and the Osiris-style figure ride with the brainstorm item under campaign/index.html ("The Fleet's strain in broad strokes").
  src: Korey, 2026-10-25 (round 8); chat-cosmic § Open

- **[add]** The patterns
  - Worlds state true facts they never explain (the Destiny's Reef effect).
  - Illithids are the campaign's Hive: the crew keeps finding signs that "they're here too" across worlds.
  - A modron march is the cosmos's Vex: a cross-world process whose sign is perfect geometry.
  - Names circulate before they are met (the Osiris pattern), told by sources that disagree. Zerathis is the first.
  - A delving culture of ruin exploration exists, like post-Aeor in Critical Role.
  src: chat-cosmic § Cosmos texture; memory-canon

### principles.html

The page exists (`prime/principles.html`, Reference). Contracts are built on Campaign § Arc 2; this decide names their categories there.

- **[decide]** Contract categories *(prep)*
  Ruled: three or four categories by how a contract ties to the world (loose, Seekers-tied, personal, more as needed), and contracts surface from a world already in motion (STAGING round 4). Name the categories and set how many of each the board offers at a time.
  src: Korey, 2026-10-25 (round 4)

---

### hub.html

- **[later]** Which Lore Bible is current
  The hub's "Wildspace Lore Bible" tile opens "Caelestis Wildspaces Lore Bible" (doc `1XjOAGPAWvDivwI2ThihwCG84ACk2eF_HKtzbxgbVTMQ`, about 3 KB). The project's synced Lore Bible is "Caelestis Campaign Lore Bible" (doc `1SLoMt7h9DboUQQlXZA61HukmnQBkjHKUNtLH2Qt4IMQ`, about 13 KB). Drive shows both created and last edited on 2026-04-12, untouched since. The Campaign Planning chat folded the Lore Bible into the DM wiki (turn 56), so neither is the live source now. Options: point the tile at the Campaign Lore Bible and relabel it; or retire the tile, since prime/ replaced both.
  src: hub.html; project synced sources; Drive metadata (checked 2026-10-25); chat-early-planning § DM wiki and naming (turn 56)

- **[fix]** The hub's Drive Root is right; memory's folder id is the rune images folder *(answered)*
  No page change. The hub's Drive Root tile opens `1suJFIN_LYDmRrkzjk3PkVv2pOmbJxE8r`, which Drive names "Caelestis". Memory's `1KuFCCLYKM2LuW6Hd4NEDq9GIsHL2L3Y5` is a folder named "runes" (created 2026-06-18), where Tumak's rune images live. Update memory's site-and-automation line: the Caelestis folder is `1suJFIN_LYDmRrkzjk3PkVv2pOmbJxE8r`, and `1KuFCC…` is the runes folder.
  src: hub.html; memory-canon § Tools and gotchas
  answered: Drive metadata for both ids (checked 2026-10-25); inbox/chat-crew-tumak-gregory-bartholomew.md § Tumak/Documents produced (rune images in folder 1KuFCC…)

- **[later]** The Trackers band
  It says "The Tracker reads the record; the sheets beside it are edited in place." The Google Sheet tracker is frozen, and tracker alternatives are under review. Options: keep the Character Arc Tracker and Wildspace Tracker cards, or retire them. Follows the sheet decide in the Automation and tracker section.
  src: memory-canon § Automation pipeline; memory-canon (open-decisions, Plan 2026-10-25)

- **[add]** A Vessels card under Setting
  The DM nav has Setting → Vessels, but the hub has no Vessels card. PR #71 added Factions and Vessels cards on the player side.
  src: prime/scripts/dm-nav.js; chat-voyage-6-7-planning § Documents produced

- **[add]** A Timeline card under Campaign
  The DM nav has Run → Timeline, but the hub has no Timeline card.
  src: prime/scripts/dm-nav.js

### Other pages outside the assigned folders

#### notes/PAGE-SHAPE.md

- **[later]** A motivation rubric for "What they want"
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

- **[drop]** "The network" as a faction term
  Line 48 says "who Vecna's current network is". "The network" is retired; reword to N'ghathrod's colony and the Seekers.
  src: framework § Open; memory-canon (open-decisions, Act 1 retrofit; Seekers line)

#### notes/FIA-BREADCRUMBS.md

- **[fix]** A.T.L.A.S., not "the World Surveyor"
  Line 59 says "the World Surveyor". Change to A.T.L.A.S.
  src: framework § A.T.L.A.S.

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
- **Retired scripts.** `build-pages.js` (the template-entity scaffolder) was deleted in Pass 0. `build-data.js` and `transform.js` were retired with the Google Sheet.
- **The Google Sheet tracker** ("Caelestis Campaign Tracker") is frozen. `prime/tracker/` shows the repo record plus the DM overlay.
- **Unmigrated sheets.** "Caelestis Character Arc Tracker" and "Caelestis Wildspace Tracker" still exist as synced Google Sheets; the hub still links them.
- **Timeline.** `prime/timeline/timeline.json` is hand-edited JSON with four lanes and a clocks list; `prime/timeline/index.html` fetches it in the browser.
- **Crew Logs.** Step 7 of the runbook still appends the Full Account to the Crew Logs Google Doc ("Voyages"), embedded on the player site at `logs/`.

### Pipeline and tracker

- **[later]** Session ingest
  Current: the in-chat runbook above, with two approvals and a PR. Options: (a) keep the in-chat runbook as is; (b) keep it and trim steps (for example, drop the Crew Logs append, see below); (c) adopt an alternative pipeline. Whatever is chosen, SESSION-RUN.md and CLAUDE.md change together.
  src: automation § Voyage 5 Method; memory-canon (open-decisions, Plan 2026-10-25; site-and-automation)

- **[later]** The tracker
  Current: the repo JSON record (`data/` plus `prime/data/`), checked in CI and shown on `prime/tracker/`; the Sheet is frozen. Options: (a) keep the repo record as the tracker; (b) move to a tracker alternative, which would need its own player/DM boundary to replace what the closed schema gives now. Touches hub.html (Trackers band), prime/tracker/, SESSION-RUN.md, DATA-BOUNDARY.md.
  src: automation § Voyage 5 Method; memory-canon (site-and-automation; open-decisions, Plan 2026-10-25)

- **[later]** The Character Arc Tracker and Wildspace Tracker sheets
  Both are unmigrated. Options: fold them into the record (arcs into the DM layer, wildspace into locations); keep them as sheets; or retire them. The hub's Trackers band follows (see the New pages section, hub.html).
  src: automation § Open (both chats)

- **[later]** The Crew Logs Google Doc
  Korey calls it unused, yet the V005 run appended to it, the runbook's step 7 still does, and the voyage pages carry the same text. Options: retire it (drop step 7's append and the `logs/` embed); or keep appending.
  src: automation § Open; prime/notes/SESSION-RUN.md step 7

- **[later]** Deploy and search
  Current: deploy.yml builds the three Pagefind indexes and guards the record; the transform and scaffold steps are gone, and the scaffolder was deleted in Pass 0. Options: keep as is, or revise during the overhaul.
  src: automation § Documents produced; memory-canon (site-and-automation)

### DM views

- **[later]** The Campaign Board and a Chronicle view
  The Campaign Board is an arc timeline with a "where are we" marker and parallel tracks; a Chronicle view was also planned. `prime/timeline/` exists (timeline.json with lanes and clocks); neither view is built under those names, and the Board exists only as claude.ai artifacts. Korey's latest steer: the timeline view should be a linear event timeline, not a list of bearings (bearings/timeline.html stays an unlinked draft), and for the cosmic timeline he is open to formats beyond the chapter-flow layout. Options: treat `prime/timeline/` as the Campaign Board and extend it with planned-against-actual per voyage; or build the Board and Chronicle as separate pages. See the New pages section, NEW: Campaign board.
  src: framework § Open; memory-canon (open-decisions, DM views; Locked 2026-10-25, timeline formats); chat-voyage-6-7-planning § Open ("Korey wants a linear event timeline"), § Superseded (timeline page unlinked)

- **[later]** Where the weather of reality is tracked
  Settled: it is tracked on the campaign view (canon: "rarely seen early but must be tracked on the campaign view"), so a tracker row is out; the tracker shows the player record plus the DM overlay. timeline.json has no clock or lane for it yet. Still open: a timeline clock (one escalating meter, fits "escalating, ownerless pressure") or a timeline lane (dated events, fits strain that shows up as incidents). The weather of reality is the DM's name for the Axiom strain at the table (cosmology/#weather-of-reality); the name may change.
  src: framework § Open; memory-canon (campaign-canon, "weather of reality")

- **[later]** The prep brief
  A brief generated from open threads plus act structure was planned; there is no sign it was built. Options: build it from the record and timeline; or drop it.
  src: automation § Open

- **[later]** Locale-level places
  Merchants, shipyards and taverns with a parent world or station, so the register can filter by them. This was proposed for the Sheet's Locations tab, which is frozen. The record's locations already carry `parentId` (16 do). Options: use `parentId` for locales and add filtering to the register; or drop the idea.
  src: framework § Open; scripts/data.js schema

### Housekeeping

- **[later]** The SotDQ tracker cleanup
  Deferred. Schedule it or drop it.
  src: automation § Open

- **[fix]** "Autognome" in V003 and V004 stays as history *(answered)*
  No sweep. V003 and V004 bullets and accounts keep "the broken autognome", because that is what the crew believed then; Ostekk-6 states he is an automaton in V005, and every dossier and current page says automaton. State the rule in SESSION-RUN.md so it is not re-asked: earlier voyages keep the crew's belief at the time; correct the record and current pages only.
  src: automation § Open; memory-canon § Key NPCs (Ostekk-6)
  answered: inbox/chat-automation.md § Voyage 5 runbook, Method (Settled: "Earlier voyages keep 'autognome' as history"). PR #61 asked "Say if you want them swept" and PR #62 repeated the default; Korey merged both without asking for a sweep.

# Repo and process

- **[later]** terms.js warnings that can misfire
  The raw-line "Open" pattern and the word "undecided" are voice warnings that can flag legitimate table cells and prose (Cosmology's Determination text has an allow entry). Tune them if they start producing noise.
  src: Factions review, 2026-10-28

- **[later]** "done:" lines in STAGING
  STAGING entries with several homes keep a "done:" note listing the pages that already carry them, though the README says an entry is deleted once its page carries it. Settle the rule: delete per home, or keep the note until the last home is written.
  src: Factions review, 2026-10-28

- **[later]** Bold labels inside What's hidden items
  Some What's hidden items open with a bolded name mid-sentence ("**Vecna (Lich)** has had…") rather than a separate label. Standardise to a short label followed by the sentence, or plain text, when the pages are next touched.
  src: Factions review, 2026-10-28

## Page conventions

- **[later]** Where the chart lives
  The chart is its own page off to the side. Embed it where it is used (the Locations register, or a cosmos map on the cosmology page) as part of the refactor. Also retire its "claimed" and "primed" node states (staged).
  src: Korey, 2026-10-25 (round 2)

- **[fix]** Dossier tab names: keep the four tabs *(answered)*
  No change. The 36 live prime dossiers and PAGE-SHAPE.md use *Who they are / What they want / DM notes / Stat block*, and that is the current rule. Turn 460's five-tab set (*What it is / What it wants / What's hidden / Running it / Stat block*) is not the later ruling: it predates PR #77 ("the four-tab dossier shape"), which Korey merged on 2026-10-18. The PAGE-SHAPE principles hold: one set everywhere, labels never inflect, a page carries only the tabs it has content for. Same answer as the PAGE-SHAPE item in the New pages section.
  Touches: nothing.
  src: notes/PAGE-SHAPE.md; inbox/chat-cosmic-campaign-structure.md
  answered: repo history (PR #77, merged 2026-10-18, after the cosmic chat's page-shape PRs #60 on 2026-10-07 and #63 on 2026-10-11)

- **[fix]** "Open" subsections move off entry pages *(answered)*
  Option (b). Open questions stay on the planning layer: the backlog, drafts and planning pages (Spine, Plot Hooks, Voyages, What If) hold what is undecided, and `is-open` survives only there. A dossier, item or location entry never carries "pending", "TBD" or "decision needed"; if a detail is unknown, the entry says what is known and stops. Move each entry page's *Open* subsection into BACKLOG.md and update PAGE-SHAPE.md to match.
  answered: working/README.md § Writing staged entries and pages ("Open questions stay on the planning layer"); not in STAGING.md
  Original item: PAGE-SHAPE.md puts an *Open* subsection with `is-open` tags inside a dossier's DM notes; 35 prime pages carry one. The new writing rule keeps open questions on the planning layer only. Options: (a) DM notes count as planning, so *Open* stays on DM pages but never on player pages; (b) *Open* moves off every entry page into BACKLOG.md, and `is-open` survives only on planning pages (Spine, Plot Hooks, Voyages, What If).
  Touches: 35 prime pages, the page guide.
  src: notes/PAGE-SHAPE.md; working/README.md

- **[later]** How a page states an unknown
  WIKI-PAGE-GUIDE.md: "The Reach's name is not known… phrase gaps as such." The new rule: an entry says what is known and stops. Suggested split: an in-world gap ("the Fleet does not know the Reach's name") is a world fact and may stay; a DM gap ("name not yet decided") is a backlog item.
  src: notes/WIKI-PAGE-GUIDE.md; working/README.md

- **[add]** Writing rule: no triple short sentences
  Add to the prose rules in CLAUDE.md ("Prose: no stacked negations…") and to working/README.md § Writing staged entries and pages: "No three short sentences in a row for emphasis." Korey asks for AI-isms to be avoided in general; this is the pattern he named alongside stacked negations.
  src: BCS § Sol/Style (turns 866, 870)

- **[later]** connections.json sources outside Fonains
  About 370 facts and edges in prime/data/connections.json still cite "STAGING round N" or "STAGING § …", entries since distributed and deleted. Section 8 retargeted the Fonains nodes to their finished pages. Retarget the rest, node by node, to the page that now carries each fact.
  src: section 8, 2026-10-28

## Record and schema

- **[later]** Ships in the record
  SESSION-RUN.md files a ship as a place with Type `Vessel`, parented to where it was last seen, and parks simulated ships under the Simulation Deck with Status `Simulated`. That rule is the latest one Korey accepted for the record (Voyage 7 chat, 2026-10-25, Settled: "Every ship the crew encounters gets a record"). "Vessels are vessels" was ruled earlier, in the cosmic chat, for the DM wiki: vessels are their own register with entry pages, not realms and not artifacts. So the two do not yet conflict; the question is whether the refactor should carry the register split down into the record. Options: (a) keep ships as Vessel-type places in `data/locations.json` and split only the pages (`navigation-records/` ships move to `vessels/`); (b) give the record a vessel set or a `kind` field, a status vocabulary without "Simulated" on places, and a choice of whether a ship's whereabouts is a field or a parent link.
  Touches: scripts/data.js schema, data/locations.json, SESSION-RUN.md, navigation-records/, vessels/.
  src: notes/SESSION-RUN.md; working/repo-refactor.md; chat-voyage-6-7-planning § Table and story principles; chat-cosmic § Wiki structure rules ("Vessels are a register of their own")

## Fixes

- **[fix]** "Answered from the sources" names items that are gone
  The review list near the top of this file still names items section 4 consumed and deleted (among them "Artifacts of Convergence" is retired, What the letters stand for, The ship reads as native traffic, Tyrant ship weapons). Prune the list, or mark those entries done, when the list is next reviewed.
  src: section 4 cold review (2026-10-28)

- **[fix]** `vessels/` missing from the player search index
  The player Pagefind glob lists every player folder except `vessels/`. Add `vessels/**/*.html` (and update the glob again when the refactor renames folders).
  src: .github/workflows/deploy.yml

- **[later]** Leftover UI calls from the migration notes
  Still open in FIXES-DEMO-MIGRATION.md: merging the survey chart, the navigation-records clip at 1024px, the clickable blurb overlay, and missing links on voyage briefings 001, 003 and 004. Keep any of these, or drop them with the notes.
  src: notes/FIXES-DEMO-MIGRATION.md, notes/RESTRUCTURE-NOTES.md

- **[later]** Crew Notes, now that search has shipped
  A shared space where players write their own notes (an Etherpad or a Google Doc linked from the site) was deferred until S.E.A.R.C.H. shipped, then to be weighed on its own. S.E.A.R.C.H. is live. The old `crew-notes/` redirect is gone; Crew Logs lives at `logs/`. Options: build it (and pick the tool), or drop it.
  Touches: the player nav (scripts/nav.js), a new player page or external link.
  src: chat-early-planning § Campaign Planning, Open; memory-canon (Crew Notes deferred)

- **[later]** Revisit generating record fields on pages
  The retired scripts/_benched/build-pages.js scaffolded player entity pages from data/*.json and rewrote marked fields (role, affiliation, status, last seen) on every build; it was deleted in Pass 0 (still in git history). The idea — filling record-derived fields so pages cannot drift from the record — is worth revisiting once the site is stable. It would change the CLAUDE.md rule that pages are written by hand, and would need to respect the session-run approvals and the current record and page shapes; the old script's known bugs are in its README in history.
  src: chat 2026-10-27 (Korey: "delete it for now. add a note to the backlog to revisit the idea when the site is stable")

# Player pages

Fixes to player-facing pages, including the Fleet Intelligence Archive (`restricted/`). These pages hold only what the crew could know; corrections must keep that boundary.

### restricted/sa-002.html

