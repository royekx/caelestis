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
| Cosmology | cosmology/, glossary/, chart/ | 13 | 14 | 4 | 0 | 2 |
| Locations | locations/ (Fonains stays in its own section) | 18 | 25 | 0 | 0 | 1 |
| Fonains | locations/fonains.html, factions/cretez.html, dossiers/vanifer.html, the Fonains Canon Reference doc, the timeline's Fonains lane | 5 | 13 | 0 | 0 | 0 |
| Timeline | the rest of timeline.json | 0 | 0 | 1 | 0 | 0 |
| Factions | factions/ | 12 | 12 | 1 | 0 | 0 |
| Campaign | campaign/: index, voyages, plot hooks; opposition/; principles.html | 21 | 7 | 1 | 0 | 3 |
| Dossiers | dossiers/ | 12 | 17 | 0 | 0 | 1 |
| Crew | crew/ | 11 | 20 | 0 | 0 | 0 |
| Artifacts and vessels | artifacts/, vessels/ | 8 | 7 | 1 | 0 | 1 |
| Rules | rules/, statblocks/, tracker/, the Wayfinder's Path tab | 9 | 5 | 11 | 0 | 18 |
| New pages | proposed pages, the hub, prime/docs/PAGE-GUIDE.md | 2 | 14 | 1 | 1 | 19 |
| Automation and tracker | the session pipeline, the record and DM views | 0 | 8 | 2 | 0 | 0 |
| Player pages | restricted/ and other player pages | 6 | 1 | 0 | 0 | 0 |
| Repo and process | page conventions, the record's schema, process docs, deploy | 2 | 13 | 2 | 0 | 0 |
| Memory cleanup | open items left in Claude's memory notes and the 2026-11-04 chat sweeps | 8 | 11 | 1 | 0 | 2 |
| **Total** |  | **127** | **167** | **25** | **1** | **47** |

The repo refactor has its own draft: [repo-refactor.md](repo-refactor.md).

## Cross-cutting decisions

Each settles items on several pages at once. Rule these first.

1. ~~**Residue piece counts by Axiom.**~~ *Ruled: Dissolution 2, Distinction 3, Expansion 5, Consolidation 7, Determination 11 (STAGING, Cosmology).*
2. ~~**Aperture or Atrium.**~~ *Answered: Atrium.*
3. ~~**Does opening a heart need a Monolith?**~~ *Ruled: no; linking does (STAGING round 2).*
4. ~~**A name for Vecna's working.**~~ *Ruled: the Circle of Fifths, his name for it; GAL-01's part is the eye inscription (STAGING, Campaign).*
5. ~~**Act structure and the Citadel.**~~ *Ruled: Citadel and Core are late Act 3 or Act 4.*
6. ~~**N'ghathrod's five centuries.**~~ *Ruled: exile from Glyth about four centuries ago; centuries of searching; the push for hearts only in recent decades.*
8. ~~**How the Seekers divide.**~~ *Ruled: the Seekers are the faith; each chapter is named for what it seeks (the Seekers of Secrets are one); every chapter worships Vecna, often under another name, unaware of the others.*
9. ~~**Astra's name and wound.**~~ *Ruled: any of the three names; the Axiom strain's ripple woke and broke it.*
10. ~~**The real elder brain.**~~ *Ruled: the Session 27 brain is his; it teleported out.* Where it went is no longer a question.
11. ~~**Where Oerth lies.**~~ *Ruled: GAL-01, in Greyspace; Oerth is the eye's retina (STAGING).*
13. ~~**Can a taken person be released?**~~ *Ruled: a tadpole can be removed, and removal frees the host; the taken outlive N'ghathrod, each keeping part of him.* How removal is done stays open (D&D lore or our own; avoid Baldur's Gate 3 spoilers).
14. ~~**Fonains–Caelestis offset.**~~ *Ruled: Caelestis's present is about five months after Fonains Session 28 and about seven months after the Monolith broke; the Monolith stood six months before Lola's Boys assembled (Korey, 2026-11-07; timeline.json decisions; locations/fonains.html DM notes).*
15. ~~**Ostekk-6 as sole survivor.**~~ *Ruled: the only active survivor; Ostekk-2 is inert and can be healed.*
16. ~~**The tracker and session ingest.**~~ *Ruled: the repo record is the tracker and sessions run in chat per prime/docs/SESSION-RUN.md; n8n and the Google Sheet trackers are retired (archived in Drive).*
18. ~~**How Clint left the Bellwether Crow.**~~ *Ruled (fia-story § The Bellwether Crow): to draw the raiders off his crew, Clint boarded one of their ships and seized it. A color pool opened by chance and took that ship to Fonains, with Clint and its raiders aboard. He may carry an artifact device he knows only as a magic item; whether it is the second Distinction piece is open (dossiers/clint.html).*
19. ~~**Keep or cut Tarroway.**~~ *Ruled: keep him as a thread, mainly in the archive; cut the timing tables.*

## Answered from the sources (review)

The resolve pass settled these decide items from later sweeps, saved decisions or the repo's history. Each is tagged *(answered)* in its section with the source that answered it. Confirm them as a batch, or overturn any.

- "Arc", never "Act" *(fix)*
- Residue housings are dampened in anti-magic, not switched off *(fix)*
- Network modifiers apply only when Tumak stands at a mark *(fix)*
- The hub's Drive Root is right; memory's folder id is the rune images folder *(fix)*
- Wayfind reach gated by matched runes *(add)*
- Distance bands *(fix)*
- Tiered mishap consequences *(add)*
- Wayfind cost by band *(add)*
- How separated twins reunite *(add)*

One of these rests on Korey making a pick rather than a direct ruling: the Drive root.

## Second looks

All five were ruled on 2026-10-25 (round 2): Tarroway is a keep-or-cut decide; constellation numbers follow the bearing scheme; Vth'oramu is "the passage to a new home"; Clint was seen going overboard (how is a decide); opening needs no Monolith, linking does.

## Player record flags

Nothing from prime goes into `data/`. These need a hand edit, if Korey agrees:

- `data/items.json` has Boogie holding the whole derelict logbook and says Casey and Gregory bound duplicates, "so three identical copies exist". The settled account is two halves, one held by Boogie (STAGING § Boogie). Correct the record in a session run or a record edit, run derive, and match the player inventory entry.
- `data/npcs.json` and the Caelestis entry in `data/locations.json` call Mirt "the head of Caelestis", and `data/npcs.json` also says "Leading Caelestis". Mirt is the Academy's headmaster; Caelestis also holds the Caelestis HQ, which oversees the sector (deconflict ruling 13). Correct both by hand, or leave them as the crew's belief, as Korey prefers.
- DM dossiers with no record, though the crew may have met or been told of them: Polly Geim (Casey's brother), Clint Dashforest, Qitru, Quartermaster Halix Verrow, the Crystalline Retrieval Construct. Each gets a record at first contact; check whether any contact has already happened (section 5).
- `data/npcs.json` names Miken "Miken"; the DM dossier and the Fleet row use his full name, Miken Haverstance. Add the surname to the record if Korey agrees.
- `data/player-characters.json` (Sol Fortuna, Voyage 4) says he "used Misfortune's Favor to draw ill luck onto his own shoulders". Misfortune's Favored is the oath's level-20 capstone and was earlier the working name of his Misfortuned feature; the Voyage 4 use reads as a self-Jinx or a Misfortuned use. crew/sol.html leaves the feature unnamed. Confirm the name and correct the line if Korey agrees.
- `data/player-characters.json` (Casey Geim) lists the star-etched constellation shirt under Notable Items, but `data/items.json` and Tumak's record have Tumak holding it (Casey passed it to Tumak in Voyage 1, and it is in his bag of holding). crew/casey.html and crew/tumak.html follow items.json. Drop it from Casey's Notable Items if Korey agrees.
- `data/player-characters.json` gives all six cadets "Clearance: Sailor", and Tumak's Voyage 3 bullet has Mirt granting the crew sailor-level clearance; the BACKLOG decide "The Sailor gate at the Sea Dock" (crew/gregory.html) holds that a cadet inherits only Visitor and that part of the Sea Dock needs Sailor. Tumak's Voyage 3 bullet (locked out of a fleet-clearance category by his cadet star) sits between them. Reconcile once the decide is ruled.
- `data/player-characters.json` (Boogie) lists "shield"; the DM page names it the Shield of Expression, a gift from Boom-chik, and it has no item record in `data/items.json`. Add the name or an item record if Korey agrees.
- `data/npcs.json` (Saerthe Abizjn) and the V006 page say "a Watcher cadet"; the settled term for a Watcher trainee is a Glimpse. The crew has not been told the word, so the record keeps Saerthe's phrasing, and `terms.json` allows it on voyage-006. Change the record if Korey wants Saerthe to say "Glimpse".
- `data/locations.json` overviews open "The Flighty Foundling is…" and "The Moonraider was…", and the quest is named "The Tyrant Ship and the H'Catha Meteor"; ship names carry no article. `terms.json` allows these record strings on the player pages. Rewrite them in a record edit if Korey agrees, then drop the allow entries.
- The crew retrieved the Faelight spore from the Garden in Voyage 6; the record does not say so yet (deconflict 9b). Record only; enter it in the V007 run if Korey agrees.
- The sending stone reads too loud on the player side: the V006 summaries and narrative, Miken's record (a Notable Item, "Miken's Sending Stone", with its own anchor), the bearings, the timeline, and the V006 Next Session Pressure ("Decide what to do about Miken's sending stone"). Sending stones are ordinary. What caught Bartholomew's Perception was a hushed conversation in the middle of the night. Recast the lines around the conversation, and keep the stone as the object he was holding, if Korey agrees.
- Ezra Ahl-Sier needs a record in the V007 run. The crew saw him, unnamed, at the V006.5 rendezvous.
- `data/sessions.json` (V003), `data/quests.json` and `data/locations.json` say the meteor "struck the spire" on H'Catha. `locations/hcatha.html`, `campaign/index.html` and `campaign/plot-hooks.html` place the strike on the Pupil, beside the Spindle. The record keeps what the crew was briefed; add a DM line on `locations/hcatha.html` that the briefing said "the spire".
- `data/locations.json` (H'Catha) says the world is "watched by beholder patrols"; `locations/hcatha.html` keeps the watch at the domain borders and leaves orbit to ordinary traffic. Add a DM line on what the crew has not yet seen, or correct the record if Korey agrees.
- `data/npcs.json` has Gender null for Saerthe Abizjn and Sor'Kur. Saerthe is he and Sor'Kur is she (their dossiers). Fill both if Korey agrees.
- `data/sessions.json` V006 has no line for the V006.5 interlude, which `voyages/voyage-006.html` carries. Add one in the V007 run if Korey agrees.

## Still coming in

Two chat sweeps in `inbox/` are partial (inbox/README.md). `chat-tyrant-ship.md` covers turns 0 to 264 of 344, and the chat can no longer be reached. `chat-vecna-godhood.md` covers turns 0 to 233 of 964, and resumes at turn 234. Every other sweep is complete; Campaign Planning was read to its end (turn 416) and merged on 2026-10-25.

# Cosmology

Items for `cosmology/index.html`, `glossary/index.html` and `chart/index.html`.
Order under each page: decide, fix, drop, add.

### cosmology/index.html

- **[fix]** Tharizdun is she
  Tharizdun is female. The pages, STAGING and the Connections layer say she. One source still says he/his/him: the Fonains Canon Reference doc outside the repo (see "Refresh or retire the Fonains doc").
  src: Korey, 2026-10-27

- **[later]** What Gregory and Sol want, in the theme
  The theme's line names what each crew member is missing except Gregory and Sol. Set theirs when the character arcs are worked.
  src: Korey, 2026-10-27

- **[decide]** Who works the other galaxies' cores *(later)*
  Ruled: in each galaxy another being works its own core, as Vecna works GAL-01's (STAGING, Campaign). Left: who they are (lesser gods like Vecna, or other things), and whether they know of each other, cooperate or race for the center. Only matters when play crosses a galaxy.
  src: Korey, 2026-10-26

- **[decide]** If GAL-01 falls *(shape)*
  Ruled: GAL-01's core waking for Vecna takes GAL-03, GAL-04 and GAL-05 with it (STAGING, Campaign). Left: what the campaign becomes in that state: crossing galaxies to close cores, a last stand at Rykoe, or the end.
  src: Korey, 2026-10-26

- **[decide]** The inner ring of gods *(shape)*
  Ruled: greater gods in the drift between galaxies, lesser gods inside a galaxy stopped at systems (STAGING, Cosmology). Proposed: a third ring (demigods, saints, the newly ascended) that can enter a system and stops at a world's heart; and where Vecna, a lesser god, sits among them.
  src: Korey, 2026-10-26

- **[decide]** Galactic time cycles (GTC): first arm, counts and the Toril ratio
  Settled (Korey, 2026-10-28): the Order of All made the count so its Watchers had one clock, and its Discerners keep it; Cycle 0 is the Order's founding, and the current cycle is 1491. The Fleet, founded by Caelestis about 250 cycles ago (about Cycle 1240), adopted it; most call it cycles or Fleet time, and ordinary people keep their own world's calendar. The arms are the clock and the cycle is a full turn: Erevos, the black hole at the core, turns once a cycle and throws an unseen beam; when it reaches an arm's root, that arm lights from root to tip over a quarter cycle, and the Erevos Galaxy has four arms. The Order's vocabulary is settled (Korey, 2026-10-28, replacing the hearth): the Beacon is the galactic clock, the one god's signal fire kept burning to give direction, named for no aspect (Korey, 2026-10-28), and the Discerners keep it. A beacon is one full turn (most say cycle); a spark is the moment the light strikes an arm's root and that arm's quarter, four to a beacon; a kindling is one marker cluster passed, numbered 1 to 16 through the beacon; an ember is one day-length count on an armillary. Dates read "the 1491st beacon, seventh kindling, twenty-fourth ember", 1491.7.24 in Fleet logs; durations read "fourteen embers to H'Catha". The Fleet and travellers borrow kindling and ember. Each arm's spark has its own character; what each is is not set. FIA records keep writing "Cycle". The clock principle is on opposition/vecna.html#clock and principles.html#clock.
  Still open: which arm's spark is first (the one the Order saw at its founding); kindlings per spark (working default four, sixteen a beacon, each about a Toril month); embers per kindling (working default about thirty, each roughly a Toril day); the character of each arm's spark; and the Toril ratio (working default one beacon to about sixteen Toril months, so each spark is about four, the Order was founded about 1,990 Toril years ago and the Fleet about 330; the timeline places both by it). Do not use "reckoning" for the count's name.
  src: Korey, 2026-10-28 (GTC rulings); replaces "The calendar the Cycle counts" (Korey, 2026-10-26; restricted/ orders)

- **[later]** Spelljammer's own terms
  Korey wants to wear down the Spelljammer barriers ("spelljamming" means nothing for a ship); spheres have become galaxies. Review the remaining genre terms (spelljammer, spelljamming helm, wildspace, Astral Sea, phlogiston) for plainer replacements during the overhaul.
  src: Korey, 2026-10-26

- **[later]** Game systems for GAL-03, GAL-04 and GAL-05
  Ruled: assigned ahead of time (STAGING round 12). Set when a campaign heads there.
  src: Korey, 2026-10-25 (round 12)

- **[later]** The survey becomes part of the record
  prime/data/survey.json is checked by tools/survey.js, not tools/data.js. Fold it into the record's checks, and decide how the chart reads it, during the repo refactor.
  src: Korey, 2026-10-25 (round 12)

- **[decide]** A different game system in each galaxy *(shape)*
  Korey's idea (2026-10-25): sub-genres already differ world to world; game systems go one step further and differ sphere to sphere. The cosmology carries it: what a sphere holds (prime gods, good gods, the Weave) shapes how magic and reality work there, so the rules change when the crew crosses. SPH-02 runs as Call of Cthulhu. It is not godless: its gods are eldritch, not good, and they gathered there, each drifting toward its greatest worship. No prime or good gods hold it, and there is no Weave; the Axioms and Continuity still hold. (Fix: "the godless sphere" in STAGING round 2, the chart and the organizing-framework sweep; SPH-02 needs a proper name.) Caelestis's sphere runs as D&D 5e.
  To shape: what physically or metaphysically changes at a sphere's edge, and what the crew feels crossing it; which presences set a sphere's system (prime gods, good gods, the Weave, an Axiom's lean); what happens to a character's abilities across the line (divine magic fades, arcane magic falters, a sanity track appears); which systems SPH-03 to SPH-05 lean toward, decided only when a campaign goes there; whether worlds inside a sphere keep their own genre on top of it.
  src: Korey, 2026-10-25 (chat); inbox/chat-organizing-framework.md (SPH-02, cosmic horror); memory-canon (a different vibe on each world)

- **[later]** Names for the spheres and designated systems
  SPH-01 included. Listed in the page's § Open.
  src: framework § Open

- **[later]** Does divine magic weaken across galaxies?
  Crossing between galaxies is uncommon, restricted to senior crews, and belongs to late-game play; cadet operations stay inside GAL-01. cosmology/index.html places the greater gods in the drift between the galaxies and anchors realms to galaxies. The older line that the Flow (the phlogiston) "silences gods" because a vessel there has left its god's sphere no longer fits. Rule whether divine magic weakens as a vessel leaves its galaxy, and how far. With it: how a vessel crosses (method, hazards, duration), and how the crossing relates to the Astral Sea's intensity, which changes between systems and between galaxies.
  src: framework § Open; memory-canon (campaign-canon, Astral Sea intensity); inbox/chat-organizing-framework.md § Cosmic structure; Memory cleanup fix, 2026-11-04

- **[later]** Whether the four Axioms held their current configuration before the Reach
  src: framework § Open

- **[later]** Echo planes per sphere
  Whether every sphere has a full set of echo planes or only some.
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
  Add `charted` (true/false) to systems and bodies in prime/data/survey.json and to tools/survey.js's check. The Chart shows an "uncharted" tag on uncharted places and a toggle between the full survey and Caelestis's charts only. In-world pages give a designation only to charted places.
  src: chat 2026-10-27

- **[fix]** The chart shows systems only with the inscription layer on
  In the Erevos Galaxy view, the uncharted systems appear only when the inscription layer is switched on (Korey 2026-10-27). Every system in the survey shows in the base view, charted or not (with the charted tag once it exists); the inscription layer adds only the eye.
  src: chat 2026-10-27

- **[add]** Sectors on the chart
  A layer that shades the Fleet's sectors in the Erevos Galaxy view, the Caelestis Sector first, once its systems are decided (see Factions: The Caelestis Sector's systems).
  src: chat 2026-10-27

- **[decide]** Shothragot and Giorge *(shape)*
  Ruled: Shothragot's temple was aboard the planar craft, and its true vestige may still be there; Giorge may be heading for it (STAGING round 6). Check the Session 14–15 notes for what Lola's Boys did to it in the Monolith, and whether part of it rides in Ziko's black blade.
  Giorge is the Darkest Day vessel on Fonains (spelling per rulings; a different person from Jorgi Panamop). He searches for pieces of the broken Monolith and may cross Boogie's path; crew/boogie.html and artifacts/fonains-shard.html say so. Left on Giorge: his surname (Korey typed "Giorge Forsworn"; memory canon records only that he was inspired by George Foreswarn; Forsworn on the page, or no surname), and whether his original Tharizdun tie is revisited (memory canon: "possibly to be revisited").
  Touches: cosmology/index.html, locations/fonains.html, artifacts/fonains-shard.html.
  src: Korey, 2026-10-25 (rounds 5–6); BCS § Boogie/The shard and Tharizdun; memory-canon § Naming (Giorge)

- **[decide]** N'ghathrod's target worlds near Vth'oramu *(shape)*
  Ruled: Vth'oramu is a mothership hunkered on the periphery between systems, sending skiffs to nearby worlds; his landed operations ripple at contract scale after graduation (STAGING rounds 10–11). Left: broadly which worlds in that vicinity he is plotting on (Monolith worlds, worlds with taken in place). Specifics wait until the crew nears each one.
  src: Korey, 2026-10-25 (round 10)

- **[later]** The colony's arms
  Ruled: they echo a hand and an eye without showing them outright (STAGING round 5). The design is open.
  src: Korey, 2026-10-25 (round 5)

- **[later]** The Order of All's headquarters, houses and Vanguards
  Settled (Korey, 2026-10-28): the Order of All has a main headquarters elsewhere, and houses in the Fleet's sectors, each commanded by a Vanguard who oversees all three orders posted there. The Caelestis Sector house has a wing for each order; the Hall of Sight and Sound is in the Watchers' wing and mainly theirs (STAGING rounds 5–6). Captain-Commander Dejexic, a Watcher, is the Watcher Vanguard and commands it. The other two Vanguards are a Discerner and an Averter, commanding houses in other sectors. A house's parts are wings. Still open: the main headquarters' name and place; the Caelestis Sector house's name and place (when the crew is headed there); who the Discerner and Averter Vanguards are and which sectors they hold; whether the fourth sector has a house; whether one figure leads each order across every sector. DM touchstone: Destiny's Vanguard (Dejexic is the Order's Zavala; the orders echo the Guardian classes).
  src: Korey, 2026-10-25 (round 6)

- **[decide]** A stabilization for a failing Axiom
  The timeline carried "Convergence stabilizes" (cert canon, t +5): "The Continuum answers a failing Axiom with a stabilization. When it comes, the seat closes permanently. Vecna gets one attempt before it." Its opening event called Convergence "the most stressed Axiom". No finished page has a stabilization, a seat that closes, or a most-stressed Axiom, and section 8 dropped the event and rewrote the other as the Axiom strain. Options: add a stabilization to cosmology/ (#axiom-strain) and restore the event; or leave it retired. Touches cosmology/index.html, opposition/vecna.html, timeline.json.
  src: timeline.json (before section 8); section 8 (C9)

### chart/index.html

- **[later]** Make the chart's constellations real, from Casey's Stellar Chart
  The chart's constellations are bearings from Realmspace with drawn glyphs. Casey's Stellar Chart (his crew page's companion tab) is used mostly for role-play, and it is the source: the map follows Casey's chart, never the other way round. Rebuild the chart's constellations from it, and keep CON numbers, bearings and the stars Casey reads in step.
  src: Korey, 2026-11-07

- **[fix]** H'Catha note
  Note says "Beholder toroid ruled by rival hives. The Spire took an adamantine meteor strike." Change to: "Beholder toroid ruled by ten solitary beholder rulers under the Sovereign Eye. An adamantine meteor struck the Spindle. Fourteen days out." Beholders follow 5e (solitary, paranoid); the 2e hive lore is rejected.
  src: memory-canon (campaign-canon, H'Catha; beholders follow 5e)

- **[fix]** Tyrant ship entry
  Kind says "Derelict, Toril orbit"; note says it "Holds the Containment Engine". Update: the crew holds the tyrant ship. The Containment Engine, Fourth Series (Vaelorix's Lantern of Flourishing), is out of Vaelorix's body and seated in the repair bay, and the ship is making the fourteen-day crossing to H'Catha.
  src: memory-canon (campaign-canon, Voyage 006 outcome; Lantern seated)

- **[later]** CSC 31758, the 1491 entry in SA-002
  SA-002's 1491 entry at CSC 31758, outer fringe (the old SYS-05): a faint star beyond the fringe charted at a different position on each survey pass, and two travellers questioned as witnesses at a fringe settlement, who could name neither origin nor destination and were offered passage on Fleet transit; how they came to Caelestis is the player's to tell (Korey, 2026-11-07; the aurora is gone, so it no longer echoes Gregory's Cogfast entry). It is near where the twins came into Fleet space, not the homeworld; going there shows nothing. The number is in neither the survey nor the chart. Place the star in the survey, or leave it a catalogue number only. Not tied to Greyspace.
  src: Korey, 2026-10-28 (FIA rulings, 10); Korey, 2026-11-07

- **[later]** The eye's alignment turns with the galaxy
  For the eye to hold, the fifteen marks must stay on their strokes while Greyspace and the marks circle Erevos at different speeds, which turns the axis. A flavour detail, and a possible clock for later: the alignment drifting, or coming due. Ties to the decide on how the inscription is worked. Planning only; it does not go on pages.
  src: Korey, 2026-10-29

### cosmology/index.html: Zeniths and Monoliths

- **[decide]** How Vecna's ascension changed Oerth's Monolith
  Ruled: it became the anchor between Oerth's heart and Cavitius, and it never faded (cosmology § Monoliths, locations/oerth.html). Open: how it works, and what destroying it would do to Vecna, his realm and the links into Oerth.
  src: Korey, 2026-10-31

- **[decide]** What destroying a Monolith does *(shape)*
  Never ruled. Fonains is a special case, because its Monolith was corrupted. For others: what happens to the world, its archive, and any link that runs through it. Ties to Oerth's Monolith (opposition/vecna.html) and to a crossover where the Fonains party's means of destroying a Monolith, and the planar craft, reach the Caelestis crew.
  src: Korey, 2026-10-29

- **[decide]** How long a Monolith stands before it fades
  Ruled (Korey, 2026-10-28): a Monolith fades some time after its Zenith; a later Zenith on the same world brings a new Monolith where that Zenith happens, and two Zeniths on one world within one Monolith's span are possible but rare (cosmology § Monoliths). Determination is settled the same day: Continuity responds when a sharp spread of outcomes is about to open, and its response leans on Determination without being Determination's alone (cosmology § Monoliths). Still open: how long a Monolith stands before it fades, and whether the span varies by Zenith.
  Pages whose meaning assumes an old Monolith still stands, for Korey to rule on: Oerth's Monolith from Vecna's ascension, kept as his faithful's holiest site (locations/oerth.html, cosmology § Archiving, factions/seekers.html, locations/index.html); Nowhere's Monolith over the wreck (locations/nowhere.html, locations/index.html); heart links, possible only where both worlds have a Monolith, which ties Vecna's linked worlds and the colony's Ready state to a Monolith's span (cosmology § hearts table, glossary #link, opposition/vthorama.html, opposition/vecna.html inscription); the FIA's Vetharra and Kaldris "sole standing structure" stays as filed, and chart/index.html mirrors it.
  src: Korey, 2026-10-28 (Monolith fading ruling)

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
  The old register carried three FIA registry entries without a position: W-34 (an Ortholith established and recording over a ritual Zenith, high priority, drafted into Virenspace), W-47 Vetharra (sole standing structure, surface population zero) and W-52 Kaldris (sole standing structure, a Zenith collapse variant labelled "control case"). The FIA (restricted/wm-003.html) now carries all three as not cross-referenced, with the registry's own reference numbers redacted. Re-designate them in the survey and place them, or drop them. The chart still lists all three.
  src: framework § Open; realms/index.html, realms/virenspace.html (old pages)

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
  Hollis Post is an ordinary Fleet post on a lane of its own (Korey, 2026-11-07). What it is for, its complement and its commander are not set. Strake's commander has no name either.
  src: realms/tetherbreak.html (old page); fia-story § Cairn Station

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

- **[later]** Glyth and the colony
  Whether Glyth knows the colony still exists, and what it would do if told what it is building, are not set. The Watcher who came out of Glyth has no name yet, and where she is now is not set; she is sketched in working/glyth-watcher.md.
  src: realms/glyth.html (old page); glyth-watcher § Sketch

### locations/ondrel-anchorage.html

- **[later]** Ostrel and the port
  Ostrel lies in a neighbouring system within the Caelestis Sector (Korey 2026-10-28). Which system, what Ostrel orbits, Ostrel's designation, what "neutral" means at Ondrel, and who runs the port are not set.
  src: Korey, 2026-10-28; STAGING § Fleet (round 11)

- **[later]** Who works from Ondrel
  The page says captains of the Caelestis Corps work from Ondrel, overseeing Driftwarden crews and handing out contracts. STAGING names only Rolt doing so. Confirm that Ondrel holds more than one such handler, or narrow the line to Rolt.
  src: Locations review, 2026-10-28

### locations/oerth.html

- **[decide]** Who rules Oerth, and how they see N'ghathrod
  Ruled: wizards who follow Vecna openly. Open: their name and order, and whether they work with N'ghathrod or see him as a prophet of Vecna.
  src: Korey, 2026-10-29

- **[later]** How the crew could reach Oerth, and how late
  Known: Oerth lies in Greyspace, far across the Erevos Galaxy on the opposite arm from Realmspace, and no lane on Caelestis's charts reaches it. The Radiant Citadel and the Core Monolith are late Act 3 or Act 4 destinations, reached by a long voyage or through a linked heart. What Oerth looks like and how a visit plays (it should be horrible) are not set either.
  src: working/vecna.md § Open; Korey (Oerth is reachable, and a visit should be horrible)

- **[later]** Greyspace's CSC number and Oerth's designation
  The survey says Greyspace's designation waits for the charting pass.
  src: prime/data/survey.json

### locations/krynnspace.html

- **[later]** Krynnspace's position and route
  It lies inward along the arm from Realmspace, nowhere near Cairn's lane (fia-story). Its exact position and the uncharted route from Realmspace are not set. Whether it lies on a stroke of Vecna's eye is in opposition/vecna.html § Still to decide.
  src: realms/sys04.html (old page)

### locations/krynn.html

- **[later]** A Zenith on Krynn in the Shadow of the Dragon Queen campaign
  Korey's other table could see a Zenith build, or a Monolith appear, as a quiet nod. Those players know nothing of Caelestis, so it means nothing to them yet; it seeds the later crossover where several parties face parts of Vecna's working.
  src: Korey, 2026-11-01

- **[later]** The dragons' politics
  The dragons that left Fonains and most worlds have not reached Krynn, because their own politics hold them (STAGING). What those politics are is not set.
  src: STAGING § Krynn and the dragons

### locations/virenspace.html

- **[later]** Casey's tether point, and the depth of the overlap
  What Casey's first tether point is, and how many tethers Viren already holds, are not set. The lane is written as a charted lane to the Astral waystation and a long haul onward, matching the survey and the chart. Also open: whether an Ortholith stands in Casey's home system (the old W-34 entry is under the register's unplaced worlds).
  src: memory-canon (open-decisions, unresolved gaps); chat § Open; realms/virenspace.html (old page)

### locations/aethris.html

- **[later]** Can the Fortuned's ritual bring Aethris a second Zenith?
  A world can have two Zeniths (deconflict 2.23). Aethris's first came in Cycle 1490 and the Prism Ascendant answered it; the Fortuned's ritual stands incomplete. Rule whether completing the ritual could bring a second one. The pages say nothing on it until then.
  src: Korey, 2026-10-28 (FIA rulings, 4); deconflict 2.23

### locations/wayfinders-homeworld.html

- **[later]** The homeworld hides inside its own heart *(lore)*
  Korey's idea (2026-11-07): the Wayfinders' world conceals itself within its world heart, having found a way to use Reach residue to make the heart hold a whole world. It cuts against the ruling that a heart is not world-sized, so it needs a reason that holds before it lands. Touches locations/wayfinders-homeworld.html, factions/runekeepers.html, cosmology (world hearts).
  src: Korey, 2026-11-07

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
  "Odds" is retired. Options: Glim the plasmoid, of a cantina called the Long Pour (unreviewed Crossing Companion proposal); or leave the bartender unnamed. Or Boom-chik, Boogie's friend, who is aboard (Korey, 2026-11-07).
  src: astral § Open; memory-canon (campaign-canon, Ryeback absorbs Odds); chat-crew-boogie-casey-sol

- **[later]** Boogie's cantina
  Boogie performed aboard a travelling cantina, a bar on a circuit of the lanes that trades as it goes, when Vocath's crates came through its hold, and his friend Boom-chik, who gave him the Shield of Expression, is aboard the cantina in the prep ring (Korey, 2026-11-07): the first of the cadets' own people the crew can meet, and RP Boogie's player will take. Boogie is 250 of a plasmoid's ~500 years and a performer (V001); he performed aboard the cantina (Korey, 2026-11-07). His V003 dream names Boom-chik and "the big drop". Left: whether the prep-ring cantina is the one Boogie performed on; Boom-chik's part aboard; his species (Korey recalls a thri-kreen; the sheet's backstory is blank; confirm with the player). Touches crew/boogie.html, locations/cantina.html, artifacts/fonains-shard.html, factions/vocath-operation.html.
  src: Korey, 2026-11-07

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

- **[decide]** A name for Fonains's system
  Fonains moved out of Krynnspace into a system of its own, neighbouring it (Korey, 2026-10-29). survey.js rolled it as CSC 50743 (seed 16534), and Fonains was charted there as CSC 50743 c. The system has no name and goes by its designation on the chart and the pages ("Fonains's system, CSC 50743"). Name it, or keep the designation. Touches locations/fonains.html, locations/krynnspace.html, locations/index.html, cosmology/index.html, connections.json, the survey and the chart; the FIA (FR-022, WM-003) keeps the designation either way.
  src: Korey, 2026-10-29

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

### Fonains: the Darkest Day

- **[later]** Who the five cultists were
  Five cultists held the elemental ritual on the Darkest Day. The robed woman with the black crystal died in Session 15; the other four are not named.
  src: tharizdun draft § Open, 2026-11-07

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

done (section 8): the shift (current values in timeline.json), the shards, the five-person ritual, the Pedra Ardente and Finerva, Dharra and Rihiri, and Clint's color pool.

- **[decide]** Nelson or Nalsa
  The timeline has "Nelson" show the Accordance's champions their gods and name them (S10, "The Accordance chooses Lola's Boys"); factions/deities.html names the Accordance's emissary Nalsa, an androsphinx. Same figure under a table spelling, or two? If the same, the timeline takes Nalsa.
  src: timeline.json; factions/deities.html#nalsa; section 8


- **[decide]** Was a team of three sent to Fonains?
  Idea (Korey, 2026-10-28): while Lola's Boys were drawn into Vecna's part of the Darkest Day, an Order team of three went for the true elemental ritual, and perhaps failed. Decide whether a team was sent, what it went for, and what became of it.
  Touches: locations/fonains.html, factions/order.html, the Fonains lane of timeline.json.
  src: Korey, 2026-10-28 (Order chain ruling)

# Timeline

Items for `prime/timeline/timeline.json` outside the Fonains lane (see the Fonains section for that lane).
Order: decide, fix, drop, add.

### Timeline

done (section 8): the fixes are in timeline.json. The three "dangling" connections.json edges were not dangling: NPC-Gp8mT4kw, LOC-Rp7kW4vn, NPC-Qp8jL2vR, LOC-Bf3xN6qT and QST-9dK3wR7n are record ids, and the Connections view loads the record before the DM layer, so the edges resolve.

- **[fix]** The Timeline page is wider than a phone
  At 390px the page renders 445px wide (it did before section 8 too): the Overview plot or the tab strip sets a minimum width. Give the plot its own horizontal scroll inside a min-width:0 container, so the page itself has no horizontal scroll.
  src: section 8 visual check, 2026-10-28

# Factions

Faction pages under `prime/factions/`. Items are grouped by page and ordered decide, fix, drop, add. Proposed page text reads in-world, like a fan wiki; DM-only lines are marked.

The Remaking is now only the Ascension's fail state. Links that say "the Remaking" for Vecna's plan point to `opposition/vecna.html`; links for the colony's or Vocath's operations point to `opposition/vthorama.html`.

---

### Every faction page

- **[later]** Every mark and seal through one image process
  Review every mark, seal and emblem in the repo (the colony's eye in a wheel, the Fleet and Watchers emblems, Vocath's house mark, the Seekers' chapters, crests on vessels and the rest) and take each through the process Vocath's personal seal went through: settle what it is and who uses it, then generate it in a style of its own that fits its owner. The process, not the look, follows Vocath's personal seal (assets/fia-fr016-seal.png). Its own chat.
  src: Korey, 2026-11-07

- **[decide]** Tymora and the Fortuned's ritual
  factions/aethris.html (What's hidden) says Tymora likely would not want the Fortuned's Zenith ritual finished. The line comes from older notes, not from the 2026-10-27 rulings. Keep or cut.
  src: Factions review, 2026-10-28

- **[fix]** "Academy" links that should land on the Caelestis section
  The Moonraider, Tarto and Clint links that say "Academy" point at factions/fleet.html, not fleet.html#caelestis. Repoint when those pages are rewritten.
  src: Factions review, 2026-10-28

- **[decide]** The Caelestis Sector's systems, and the other sectors
  The Fleet is four sector branches, one along each of the Erevos Galaxy's four spiral arms, and Caelestis founded it (Korey 2026-10-28). The Caelestis Sector is the one on Realmspace's arm and covers several systems, including Toril's. Which systems it covers, and the other three sectors' names and characters, are not set. Feeds the chart's sector layer and factions/fleet.html.
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

### factions/fleet.html (was academy-fleet.html)

- **[later]** The FIA's ambient files as hooks
  The archive is mostly ordinary files so the Cairn thread shows only when read across it (Korey, 2026-11-07). The ambient entries can each become an adventure: LG-001 (Strake depot stores audit, crossed crates, a careless carrier), SA-003 (a nameless fever on the Hollis rotation, quarantine under review), WM-004 (*Copper Wren*'s stretch of lane that "pressed in"), and in FR-005 the overdue *Mendren* and *Quivering Lark*, the Hollis beacon reading late, and the gravitational variance. None carries a hidden truth yet. A cold player read built a Hollis thread out of them on its own: the Hollis beacon reading late, the fever on the Hollis rotation, lamp oil ending up at Hollis Post (LG-001), and the Saltjaw escorts drawn from the Hollis rotation (SA-005). It stands as a red herring; build on it if a Hollis adventure is wanted (Korey, 2026-11-07).
  src: Korey, 2026-11-07

- **[later]** Driftwarden ranks
  Ruled: one service, many ranks, the way every police officer is a cop. Set the ladder from the newest graduate up to the organization's head, and where the crew starts.
  src: Korey, 2026-10-26
  Moved from the campaign section: STAGING § Caelestis, the Driftwardens and the Fleet already says ranks run from the newest graduate up through officers and commanders, shown in gems or pins; factions/fleet.html carries it. The full ladder waits until play needs it. Campaign § Still to decide names it.

- **[later]** Names of the sister institutions
  Ruled: sister institutions in other system clusters, under other names and governance (STAGING, Factions). Name the one or two the crew is likely to hear of first; the rest wait.
  src: Korey, 2026-10-25 (rounds 10–11)
  Moved from the campaign section: the Fleet is four sector branches, each keeping its own names (factions/fleet.html), which answers the shape. Naming the one or two the crew hears of first waits until play needs it.

- **[later]** The Glyth loss
  The Fleet lost a force at Glyth during the last approach window (see add). Its name and its commander are unnamed.
  src: chat-cosmic-campaign-structure § Cosmos texture, § Open

---

### factions/deities.html

- **[decide]** How the gods keep order among themselves *(shape)*
  Greater gods against lesser, and how a lesser god like Vecna is checked. Look to myth and fiction for how gods answer one of their own who is scheming. Polarity already keeps every god off worlds and out of hearts, and god conflicts stay indirect. Needed because the crew's threads run to Beshaba and Tharizdun, and the crew may take an interest in the gods.
  src: Korey, 2026-10-29

- **[decide]** What the gods felt at Vecna's ascension, and what each thinks of him *(shape)*
  Ruled that they knew and sent champions (factions/deities.html, dossiers/vecna.html, cosmology § What the gods know). Open: what reached their realms, and the stance of the gods that matter to the crew (Beshaba, Tymora, Tharizdun, Asmodeus, Lord Primus).
  src: Korey, 2026-10-29

- **[later]** The All-Father on Deities
  The Order of All counts its one god, the All-Father, a god like any other, and its three orders serve him in three callings; the Restorers posit a source where he holds what is taken. He is the Core Monolith's pressure, and that the Core Monolith exists is among the scarcest knowledge in the cosmos (Korey 2026-10-27; on order, restorers, cosmology § Core Monolith's pressure, glossary). Whether Deities lists the All-Father among the gods as the Order worships it, and who else in the cosmos knows of the Core Monolith (Vecna, the Citadel, the Accordance), are not set.

- **[later]** How far to develop Tymora
  Korey wants to develop Tymora and the Beshaba/Tymora interplay.
  Settled (Korey, turns 860–862): the misread tenet and "fortune needs misfortune" (both adds below); the sisters' conflict stays indirect, because gods give direction that never shows the whole of what they want; Aethris is a whole planet where not everyone follows Tymora, with a lesser Beshaba following and other fortune gods, major and minor. Add that last point to the Tymora entry and locations/aethris.html: "Not all of Aethris follows Tymora. Beshaba keeps a smaller following there, and other gods of fortune, major and minor, are worshipped too."
  Still open: whether Tymora notices herself thinning on Aethris as the ritual removes the risk her luck needs, and whether she acts on it. Beshaba's want is its own decide under dossiers/beshaba.html (added in section 5).
  answered (part): inbox/chat-crew-boogie-casey-sol.md § Sol / Aethris and the gods (Settled)
  src: BCS § Sol/Aethris and the gods (turn 860), § Sol/Open
  done (settled part): factions/deities.html (section 2) carries the misread tenet, fortune needs misfortune, and Aethris's other faiths; the open question is in its Still to decide. locations/aethris.html carries the Aethris line (section 3).

---

### factions/runekeepers.html

- **[later]** Parked Runekeeper questions
  Parked, not locked: closing as the inverse of opening; whether closed worlds are invisible to A.T.L.A.S.; other worlds' own hiding methods; runes as the "finding" half of the art.
  src: memory-canon open-decisions (Runekeepers line)

---

### factions/order.html

- **[decide]** Who leads the Order of All
  Ruled (Korey, 2026-10-28): the Order of All is three orders serving one god, the All-Father, in three callings: Watchers gather intel, Discerners interpret and judge it, Averters act on it, and the Vanguard sanctions (the All-Mother and All-Haven are retired; the Keepers are renamed the Discerners; the Averters join; the Restorers become a movement across all three; Korey 2026-10-28); this replaces the Order of the All-Father and its callings (done: factions/order.html, watchers.html, discerners.html, restorers.html, glossary, cosmology § Core Monolith's pressure, connections.json, timeline.json). Still open: who leads the whole Order, or whether it has a single head at all; whether it has an emblem of its own; and when the one body founded at Cycle 0 split into three orders (Korey, 2026-10-28: it began as one and split as its following grew and like minds drew together). The headquarters, the sector houses and the Vanguards are under Locations, "The Order of All's headquarters, houses and Vanguards". Dejexic leads the Watchers.
  Touches: factions/order.html (Still to decide), connections.json.
  src: Korey, 2026-10-28 (Order of All ruling)

- **[decide]** The name of the team of three
  For a truly terrible Zenith the Order of All sends one Watcher, one Discerner and one Averter (Korey, 2026-10-28). Pages call it "a team of three" or "the three". Name it. DM touchstone: Destiny's fireteams; a raid of six is a possible larger team.
  Touches: factions/order.html#three, watchers.html, discerners.html, restorers.html, glossary (#the-three).
  src: Korey, 2026-10-28 (Order chain ruling)

### factions/watchers.html

- **[decide]** The Watchers' open details
  The Watchers have a wing in each of the Order's houses; the Hall of Sight and Sound is in their wing of the Caelestis Sector house, and Dejexic is the Watcher Vanguard (Korey, 2026-10-28). Whether the Watchers have ranks between Watcher and Captain-Commander is not set. Nereth Vaul's species (it sets the final form of her name) is still open. See also Locations, "The Order of All's headquarters, houses and Vanguards", and New pages, Hall of the Watchers.
  Touches: factions/watchers.html (Still to decide).
  src: Korey, 2026-10-28 (Order of All ruling)

- **[decide]** A team of three on Aethris?
  Settled (Korey, 2026-10-28): a Watcher was on Aethris for certain during the Fortuned's ritual and helped Sol off-world. Still open: whether a team of three was sent to Aethris, and whether they tried to intervene; and whether some of the Misfortuned were archived by the Prism Ascendant. This plays into Sol's backstory.
  Touches: factions/watchers.html, locations/aethris.html, factions/aethris.html, crew/sol.html.
  src: Korey, 2026-10-28 (Order chain ruling; Aethris ruling)

### factions/discerners.html (was keepers.html)

- **[decide]** The Discerners' leader, seat, ranks and look
  The Keepers are renamed the Discerners (Korey, 2026-10-28). They interpret and judge the Watchers' intel against the Order's record and the sky (the Beacon), weigh what a Zenith means, what intervening would cost and whether to act, and counsel the Vanguard; guarding the Monoliths, keeping the record and the registry (Ortholiths) and keeping the Beacon stay theirs as part of discerning. They have a wing in each of the Order's houses, answer to the Watcher Vanguard in the Caelestis Sector, and a Discerner Vanguard commands a house in another sector. Not set: who leads them as a whole, who the Discerner Vanguard is and which sector, their ranks, and how they look (emblem, dress). The Beacon's open counts stay under Cosmology, Galactic time cycles.
  Touches: factions/discerners.html (Still to decide), glossary, connections.json.
  src: Korey, 2026-10-28 (Order of All ruling; Discerners rename)

### factions/averters.html

- **[decide]** The Averters' open details
  The Averters are an old, full order (Korey, 2026-10-28): the tip of the spear, who act once the Discerners judge and the Vanguard sanctions, stopping the ritual, person or plan driving a world toward catastrophe, and going to corrupted Monoliths and to broken worlds where people can still be saved. Their calling is to avert. They have a wing in each house and answer to the Watcher Vanguard in the Caelestis Sector; an Averter Vanguard commands a house in another sector. Not set: who leads them as a whole, who the Averter Vanguard is and which sector, their ranks, and how they look (device, dress, magic).
  Touches: factions/averters.html (Still to decide), glossary, connections.json.
  src: Korey, 2026-10-28 (Averters ruling)

### factions/restorers.html

- **[decide]** When the Restorers' movement began, and Ilsabet's order
  The Restorers are no longer an order (Korey, 2026-10-28): a young, small movement of like-minded people across all three orders, frustrated that the Order acts only at the last minute and accepts its losses. A Restorer can be a Watcher, a Discerner or an Averter; the movement has no wing, no Vanguard and no ranks, and gathers in informal circles. The source, the Return, the Ledger and the crossings stay; the Readings, cells and the four centuries are gone. Not set: when the movement began (the timeline places it at about sixty cycles as a working default); how many Restorers there are and how they find one another; which residue pieces any of them hold; and which order Ilsabet Crann belongs to.
  Touches: factions/restorers.html, dossiers/ilsabet-crann.html (Still to decide), timeline.json, connections.json.
  src: Korey, 2026-10-28 (Restorers ruling)

### Every faction page: tensions

- **[later]** Tensions inside the Order of All and the Fleet
  The orders and the Fleet's branches will have tensions between them. They are mortals, which means people are open to corruption, to being taken, and to forces working against them. No organization is untouchable, and not everyone is as benevolent as they would like to believe. Not to be decided now.
  Touches: factions/order.html, watchers.html, discerners.html, restorers.html, fleet.html.
  src: Korey, 2026-10-28

# Campaign

Campaign planning pages under `prime/campaign/`. Items are grouped by page and ordered decide, fix, drop, add. Planning pages speak in DM voice. World facts quoted for a page read in-world.

- **[add]** A map of Vecna's plan, taken from N'ghathrod
  A possible find: something pulled from N'ghathrod or the colony that shows where the heart worlds lie (Korey 2026-10-28). In play it hands the crew the inscription; on the site it adds the hearts to the record, so the player holochart can show them and the crew can solve the eye by lining it up from Oerth. When and how it is found is not set.

The Remaking is now only the Ascension's fail state. Every page link that says "the Remaking" for the plan or the machinery points to `opposition/vecna.html` (the plan) or `opposition/vthorama.html` (the colony's operations and the Fork) instead.

---

### campaign/index.html

- **[decide]** Act 1's close and the length of H'Catha *(prep)*
  Campaign § Act 1 says Act 1 closes around sessions 8 to 10 with the attack on Caelestis and graduation, at level 4. The H'Catha mission begins at V007 and may run several voyages, and the crew is already level 4. Options: (a) H'Catha runs V007–V008 and graduation lands at V009–V010 as written; (b) Act 1 runs longer and the session range moves; (c) the attack and graduation compress into one voyage. Touches: campaign/index.html (Act 1, the close), campaign/voyages/index.html.
  src: memory-canon open-decisions (Planned line); campaign section, conflict C17

- **[decide]** Who goes ashore at H'Catha and who holds the helm *(prep)*
  Two sources disagree. The spine's add had Saerthe at the helm with Ryeback commanding the deck; V006's "How a table of ten gets run" puts Ryeback and Miken with the ship and the chosen teacher ashore with Ezra. Campaign § the H'Catha mission states both as conditional on the instructor pick (Saerthe can take the helm; otherwise the teacher goes ashore). Rule which holds, or keep it conditional. Touches: campaign/index.html (#hcatha-arc), campaign/voyages/index.html (V006 swap, V007).
  src: memory-canon open-decisions (Voyage 007 intent); voyages V006; campaign section, conflict C13

- **[decide]** Act 2's second system
  Act 2 stays in Realmspace plus at most one other system (Campaign § Act 2). Which second system, and why the Fleet works there, is not chosen. Touches: campaign/index.html (#arc-2), locations/.
  src: carried from the spine's "Arc 2's range" item (chat-early-planning § Cosmology and setting)

- **[decide]** What Gregory and Sol are missing
  STAGING § The theme named what Vecna, N'ghathrod, Astra Virex, Casey, Tumak, Bartholomew and Boogie each want, and said only that "Gregory and Sol carry it too". Campaign § Theme and § Crew say so and stop. Name each one's want in the theme's terms. Touches: campaign/index.html (#theme, #crew), crew/gregory.html, crew/sol.html.
  src: STAGING § The theme (round 2)

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
  Touches: campaign/index.html (H'Catha arc), campaign/plot-hooks.html (meteorite hook), locations/hcatha.html, glossary/index.html ("a Monolith fragment, shed or aimed").
  src: memory-canon campaign-canon § Antagonists (H'Catha direction, H'Catha decisions); chat § Open; glossary; chat-organizing-framework § Settled, § Open; chat-astral-sea-worldbuilding § Superseded; chat-cosmic-campaign-structure § Open

- **[decide]** The Rival's name *(prep)*
  The second claimant to the meteor is "the Rival" in the H'Catha planning, the ruler whose sign is fear, dread carried in the fog. The sweep proposes Oszrax. Confirm Oszrax or name him.
  Note: "Oszrax" appears in the astral-sea sweep's Superseded line ("the seam between Kurrzot and Oszrax") and in the proposed Edict table ("no covered faces"), but that sweep also says every ruler name except Kurrzot, Ondessa and Ostekk is a proposal. Confirming Oszrax would also settle his Edict as a candidate.
  Touches: campaign/index.html (timeline, approach table, forces table), dossiers/index.html.
  src: chat-astral-sea-worldbuilding § Superseded; chat § Open

- **[decide]** Who signs the order that keeps the crew together *(prep)*
  At graduation the crew becomes Driftwardens and stays one unit. Who signs that order sets Act 2's tone. Options:
  (a) Mirt: patronage, warm and compromising.
  (b) A Watcher or the Order: fated, cosmic.
  (c) Saerthe: personal, a mentor's call.
  (d) The Fleet, as routine paperwork with the real reason hidden, so "who signed this order?" becomes a thread the crew can investigate.
  Touches: campaign/index.html (Act 1 close, Act 2 shape), dossiers/mirt.html or dossiers/saerthe-abizjn.html if either signs.
  src: chat-early-planning § Campaign Planning, Open (turn 300)

- **[decide]** Mirt's standing after the graduation attack *(prep)*
  The attack aims at Mirt's public disgrace: a restricted vault breached on his watch, during his own crew's graduation. Options:
  (a) The crew saves his standing; they are why it is not a massacre.
  (b) His standing suffers: an inquiry that clouds Act 2.
  (c) Ambiguous: limited damage, Mirt shaken, his future uncertain.
  The Fork state (A.T.L.A.S. gone or returned) may feed the answer.
  Narrowed (campaign section): the Fork states on opposition/vthorama.html keep their per-state lines as direction (State A: his standing takes a real hit; B1: it rises). What stays open is what the attack itself does to him, apart from the heist.
  Touches: campaign/index.html (Act 1 close), opposition/vthorama.html (the Fork), dossiers/mirt.html, factions/vocath-operation.html (whether Vocath's grudge is served).
  src: chat-early-planning § Campaign Planning, Open (turn 300)

---

- **[decide]** Which arc reaches the cosmology first
  Every crew arc was built to touch the cosmology without being about it. Whichever arrives first (Tumak's homecoming and its Zenith, Casey's tethers, Gregory's anomalies, Boogie's shard, Bartholomew's constellation, Sol's Aethris) will reframe the other five for the players in a single session. Choose the first, or let play choose. Moved from the retired Open table on crew/index.html. Touches campaign/index.html (#crew, the arcs) and the crew pages' Arc tabs.
  src: crew/index.html (retired § Open); section 7 (2026-10-28)

- **[decide]** Contract categories *(prep)*
  Contracts are built on Campaign § Act 2, and this decide names their categories there. Ruled: three or four categories by how a contract ties to the world (loose, Seekers-tied, personal, more as needed), and contracts surface from a world already in motion (STAGING round 4). Name the categories and set how many of each the board offers at a time.
  src: Korey, 2026-10-25 (round 4)

### opposition/vthorama.html

- **[later]** The thief
  The third insider steals, and Joffrey uses the thief to learn where things are kept at Caelestis and the Brig's protocols. Neither the thief nor Miken knows the other exists, and nothing either knows points at Joffrey. Who the thief is, and who recruited them, is open; it matters when the crew is back at Caelestis.
  src: fia-story § Open (deconflict 14b)

- **[later]** The Coven's name
  The Coven (factions/vthorama.html#coven) is a working name for the colony's eldest illithids, taken by N'ghathrod, who remember for it. Its proper name, perhaps a word in the colony's tongue, is not set.
  src: Korey, 2026-11-07

- **[decide]** The network's defences
  Once the crew learns of the links, Vecna and N'ghathrod guard the hearts that carry several links, and Oerth's heart above all. What the safeguards are.
  src: Korey, 2026-10-29

- **[decide]** What the surface attack at graduation is made of *(prep)*
  The page has "security diverted by the surface operation" while Joffrey runs the Brig, and names nothing in that operation. The early plan collapsed the module's two finale events into one: the attack hits during the ceremony, a battle across the school. It ported these module pieces: Mustaf Shultz and his giff mercenaries, a decapitation threat, Miken at 2 HP, Wizpop's return (now Ostekk-6), and the transmutation sigil as Vocath's house mark. Qitru and her githyanki have since moved to H'Catha. Vocath is a merchant, no fighter, and stays out of the siege himself (settled: chat-cosmic-campaign-structure § Act 1 retrofit), so whoever leads the surface operation is hired or his crew. Pick which pieces stay, and write the surface operation into the Brig run section.
  Part of it: who Vocath's raiders on the Brig are. Options: the pirates from the raid on Bellwether Crow, whose ship SA-005 names (Crow's survivors and Joffrey would know her at Caelestis, and the Fleet's hunt for her sharpens in Act 2; keep Vocath's overseers off the strike, or a capture exposes him in Act 1), or a different hired hand.
  Touches: opposition/vthorama.html (the run, the Fork; the page names "the surface attack" and nothing more), campaign/index.html (Act 1 close), factions/vocath-operation.html, dossiers/miken.html.
  src: chat-early-planning § Campaign Planning, Arc 1 close and planning method (turn 300); dossiers/qitru.html

- **[later]** How the colony pivots without Vocath
  Vocath's line is the colony's supply of captives, and Zhauveth's deal with him is its reach into Caelestis. If the crew takes Vocath down, the colony loses both. Decide its backups: another supplier, raiding with its own couriers, more takings, a move of Vth'oramu. Taking Vocath down is hard; this waits until the crew goes down that path. Touches: opposition/vthorama.html, dossiers/vocath.html, dossiers/zhauveth.html, factions/vocath-operation.html.
  src: Korey, 2026-11-06

---

### campaign/voyages/index.html

- **[fix]** A board table spills past its panel
  On the Voyages board one of the tracker tables overflows its container at the side. Contain it (wrap or scroll inside the panel) at desktop and phone widths.
  src: Korey, 2026-10-29

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

- **[decide]** Crossing entry 7 *(prep)*
  The Fear eye woke in the Make Ready downtime, so entry 7 on the V007 crossing d8 is free. Choose what it holds. Touches: campaign/voyages/index.html.
  src: STAGING § Voyage 007, 2026-11-02; deconflict 2.2

- **[decide]** Treasury contents in Vaelorix's Quarters *(prep)*
  The Quarters hold a treasury of coin (see add). Contents and amounts are open.
  src: chat-voyage-6-7-planning § Open

---

### opposition/vecna.html (early planning)

- **[later]** A rhythm no one can hear, as a Seeker chapter's experience
  People on the lanes moving in time to a beat none of them can hear, as if dancing: cut from the FIA (too strange for the Fleet to file), kept as a possible experience of one of Vecna's Seeker chapters (Korey, 2026-11-07). It rhymes with Boogie's Pulse.
  src: Korey, 2026-11-07

- **[decide]** How the eye's clock advances *(prep)*
  Ruled: a hidden narrative clock tied to the invasion, escalating toward the end of Act 4 (STAGING). Open: whether a roll or milestones drive it, any level ceiling, and the starting value (the chart has 67%; 10 of 15 marks, about 9 planets left).
  src: Korey, 2026-11-01

- **[later]** Does Erevos turn faster?
  Korey recalls Erevos "spinning faster" alongside Monoliths appearing more often. With the quickening retired, decide whether a faster turn exists, and if so whether it is atmosphere or a clue.
  src: Korey, 2026-11-01

- **[decide]** How a heart is opened and held open, and how it is closed *(shape)*
  Ruled: a closed heart ends its links (cosmology § Closing a heart). Closing waits on how an opened heart stays open, which is not concrete yet. Open: what closing takes (residue, as opening does? the Atrium? a Monolith?), who can do it, whether a closed heart can be opened again, and what closing costs the world. The First Heart is the precedent.
  src: Korey, 2026-10-29

- **[later]** A node log for player impact
  An early plan kept a Remaking Node Log tracking how the players have changed Vecna's plan. Bring it back as a planning table on Opposition: Vecna, or let the timeline carry it.
  src: inbox/chat-early-planning.md § Campaign Planning (turn 124)

- **[later]** A one-shot as an Order team
  A one-shot where the players are an Order of All team of three, one Watcher, one Discerner and one Averter, sent against a terrible Zenith with a Monolith's arrival as the clock; a raid-sized team of six is possible (Korey, 2026-10-28).
  src: Korey, 2026-10-28 (Order chain ruling)

### principles.html

- **[decide]** Firearms in wildspace *(shape)*
  Laser pistols are common enough in wildspace and the first on Fonains is Clint's. Standardize which firearms exist where (powder, laser, other), what the Fleet issues, and how they read at the table. Proposed: Ryeback's pistol, not yet seen at the table, is a laser pistol.
  src: Korey, 2026-11-07

- **[add]** The DM has the same tools as the players
  This is still Dungeons & Dragons in a sci-fi skin. Anything a player can do, the world can do: spells, charms, mass suggestion, mind blank, a familiar on watch. When a plan in the world needs people silent, loyal or unaware, reach for the spell that would do it before inventing a reason they just did not notice. The taken carry the effect of mind blank; Cairn Station's crew are held by an illithid whose hold grows with nearness and time. Using these is not cheating. Let the spectacle show, too: a held station should feel uncanny, not merely quiet.
  src: Korey, 2026-11-06

- **[add]** Asking for a roll means something is there
  When the players are interested in something and the DM calls for a roll, there is something to find, whatever the result. The roll sets how much they get and how fast, not whether they get anything. A low roll shows that something is there: two people talking in hushed tones, words out of earshot. A high roll gives more at once: twenty gold changing hands, and a look around to check no one saw. From there, getting more is the players' choice, and it becomes a run of hurdles (sneak closer, talk to them, a Persuasion check), each with its own consequences. Joffrey is the example: an improvised character the players suspected, who became a piece they are invested in.
  Context still matters. A check for a specific thing can simply fail; a search for a secret door may find no door. A check for whether something feels off always finds that something does.
  The other half: when nothing is there, don't call for a roll. A roll means there is a chance for something to happen. If a path will reward neither the players' time nor the DM's, don't entertain it.
  And put needed things in the crew's way. When something matters for the story, set it where they will meet it instead of hoping they look. Lean less on "what do you want to do?": players are not always sure, so offer the nudge that something is here, and that there is something in it for them if they go for it.
  src: Korey, 2026-11-01

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
  dossiers/index.html groups its rows by affiliation through dm-register.js (a data-group-axis on .register and an A–Z / By affiliation toggle). Opt the other DM registers in where a grouping helps: locations/ by system, factions/ by reach, vessels/ by where, artifacts/ by fragment.
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

- **[later]** Mechanic review of Tarto's stat block
  The block stands as five d10 superiority dice, seven maneuvers and Know Your Enemy, with Clear the Deck cut (deconflict ruling 5). Run caelestis-mechanic-review on it in a mechanic chat. Touches: dossiers/boatswain-tarto.html, statblocks/index.html.
  src: deconflict ruling 5, 2026-11-07

---

### dossiers/clint.html

- **[later]** What information Clint is buying
  The one-shot gives only Clint's own answer: he wants "money… for some information that you need to get." Nothing names the information. Set it, or leave it as Fonains business (Clint's present stays on Fonains).
  src: chat-cosmic-campaign-structure § Open; scratchpad fonains_notes/12.md § Oneshot 03 (NPCs)

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
  Ezra must arrive with a hook others can latch onto. It is built in V007 session prep. He carries a sealed letter reading "Watch one thing until it changes"; where it came from is open. The eye-in-a-wheel sketch is not his hook (Korey, 2026-11-06).
  src: chat-voyage-6-7-planning § Open; Korey, 2026-11-06

- **[later]** Emporia and Tharizdun
  Does Emporia read as a Zenith with Tharizdun behind it? Options: yes (a Tharizdun-touched Zenith); no (local trouble only); leave it to the other table.
  src: chat-cosmic-campaign-structure § Open

---

### dossiers/ilsabet-crann.html

- **[later]** What her Ledger shows
  The Restorers walk into Zeniths deliberately, which sits awkwardly with the page's claim that her Ledger holds the Zenith pattern unrecognised. Options: the Restorers know Zeniths as crossings but miss the rising frequency; or the pattern stays fully unread.
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

- **[later]** Reaching Vecna (Lich) by being taken at a Zenith
  Korey wants it possible for player characters to be taken by a Monolith at a Zenith, and so arrive at the Radiant Citadel and meet Vecna (Lich), the mortal form archived at Vecna's ascension, now calm and close to redeemed. Conditions: decided by dice when the moment comes; only at a high enough level for the separation to be survivable; never one character alone, the taken go as a group. What he can give: how his own plan to become a god worked, which may hint at what the god is doing now, though he does not know the god's present plan. A switch-up the crew could come back to later. Ties to the Citadel's way out (locations/rykoe.html) and to the crew researching Monoliths.
  src: Korey, 2026-11-01

- **[later]** What Vecna (Lich) knows, and where he stands
  Vecna (Lich) has his own dossier (Korey, 2026-10-28). What he knows of Vecna's working, whether he would help the crew against it, where he sits in the Citadel and how the forgetting has touched him are not set. They wait until the crew heads for Rykoe.
  src: section 5 (2026-10-28)

---

### dossiers/nghathrod.html

- **[later]** The power of N'ghathrod's mouse
  The seventh Rod piece changed the mouse he saved, and he took it with one of his copies; it is his secret sixth lieutenant (dossiers/nghathrod.html). What power the experiment gave it is open.
  src: Korey, 2026-10-25 (round 2)

- **[decide]** How long N'ghathrod has been fused into Vth'oramu
  The dossiers said forty or fifty years; STAGING has the dreadnought taken over decades, perhaps a century, after an exile four to four and a half centuries ago, and the active push for hearts only in the past few decades. dossiers/nghathrod.html and dossiers/vthoramu.html now say only that he has been joined to the ship since its taking. Set a figure, or leave it unnumbered. Touches: dossiers/nghathrod.html, dossiers/vthoramu.html, vessels/vthoramu.html, factions/vthorama.html, the timeline.
  src: Factions review, 2026-10-28; section 4 plan; section 5 (2026-10-28)

- **[later]** N'ghathrod's stat block
  One flat, high-powered block at the ceiling, never scaled down; the crew runs on sight (Otohan Thull style). It needs an exit condition tied to his objective, non-lethal takedowns, and enough action economy for six PCs. The CRC's Withdrawal Threshold and Legendary Resistance are the precedents. The five lieutenants' blocks, the enna (CR 12 to 16, lopsided), are unbuilt too.
  src: dossiers/nghathrod.html; section 5 (2026-10-28); memory-canon § Deferred; chat-cosmic § Open

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
  Left: Casey's is the world of SA-002's 1486 meteor shower; a star fell on it and Polly left afterward; its system is withheld until surveyed. Bartholomew's comes from a celestial druid tradition, Rashemi, pointed outward, and SA-002's 1482 entry records two of CON-312's stars flaring; his fall is not in it. Boogie's is unplaced. For each: place it now, or leave it unplaced until play needs it. Touches crew/index.html, each crew page, locations/index.html.
  src: chat-cosmic § Open; framework § Open; memory-canon (open-decisions, unresolved gaps; Gregory); realms/index.html § unplaced (old page)

- **[later]** How cadets from worlds without spelljamming reach Caelestis
  The one route Korey has stated is Sol's: the Watcher order broke protocol to recommend he be taken to Caelestis. The FIA carries one event per cadet that only that cadet would recognise, and says nothing of how any of them reached Caelestis except Sol (Korey, 2026-11-07): WM-006 field referral and protective placement (Sol, by the Order); SA-002 1486 meteor shower (Casey); SA-002 1491 two travellers questioned at a settlement who could name neither origin nor destination, offered passage on Fleet transit (Wan and Tu); SA-002 1482 two of CON-312's six stars flaring (Bartholomew); SA-002 1489 the enclave aurora, two constructs remaining functional (Gregory). FR-022 the black, shattered fragment from CSC 50743 (Boogie; the seal in FR-016 is his only tie to Cairn). Gregory arrived on a cargo ship.
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

- **[decide]** Casey's star: one fall or a shower *(lore)*
  crew/casey.html and dossiers/polly.html say "a star fell on their world"; Korey (2026-11-07, FIA audit) called it a meteor shower that looked like shooting stars, and SA-002's 1486 entry now reads that way with "at least one fall to the surface reported". Settle the crew and dossier wording against it. Outside the FIA area; logged.
  src: Korey, 2026-11-07

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

- **[later]** Gregory's awakening and why he came
  Korey (2026-11-07): his awakening was at the Cogfast aurora SA-002 records in Cycle 1489, two to three years before the present, "a little timey-wimey"; he then followed his maker's dream of being a navigator, which is why he came to Caelestis. Not for the FIA. Touches crew/gregory.html.
  src: Korey, 2026-11-07

- **[decide]** The Sailor gate at the Sea Dock *(prep)*
  (A) He truly needs Sailor clearance, and gets in with an escort via Kip or Pik or a sanctioned reason. (B) He only thinks he does, and a service route exists. (C) Hybrid: Rindle has moved the Latchling and Gregory must recalibrate.
  Folded in from the add "Sailor clearance": part of the Sea Dock needs Sailor clearance, and a cadet inherits only Visitor, so Gregory needs, or thinks he needs, Sailor access. When ruled, write it into crew/gregory.html § The Latchling (Obstacles) and drop the Still to decide sentence. Conflict: the record gives all six cadets "Clearance: Sailor" and Tumak's Voyage 3 bullet has Mirt granting the crew sailor-level clearance, while Tumak's Voyage 3 bullet has him locked out of a fleet-clearance category by his cadet star (see Player record flags).
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
  The earlier ruling (memory canon) says aspects from any beast within his Wild Shape CR cap need no study and only non-beast aspects need study. The Aspects tab on his player crew page (`registry/crew-manifest/bartholomew-grayson.html#aspects`) gives him a starting catalogue of ten aspects instead (the four Known plus six of his choice) and learns every new aspect by Track or Glimpse. crew/bartholomew.html follows the handout and carries this as a Still to decide sentence. Rule which holds; if the CR-cap rule stands, the handout needs the change. Also confirm the learning DC: the earlier ruling has a save against a CR-based DC, the handout has Track or Glimpse checks against a DC the DM sets.
  src: section 7 (2026-10-28); memory-canon § Bartholomew; aspects/index.html

- **[decide]** The burning stars and the seated aspects
  The CON-312 answer says two stars burn from his childhood fall and the rest fill as he studies. The old crew page said his two bright stars are the seated aspects (ape and spider), and the handout has the two stars burn brighter as the ape and spider answer. Rule whether the two burning stars are the ape's and the spider's seats, or two of his own from the fall with the aspects seated elsewhere. crew/bartholomew.html carries it as a Still to decide sentence.
  src: section 7 (2026-10-28), conflict C7; aspects/index.html

- **[later]** Bartholomew's sheet check
  His current level and D&D Beyond URL; whether the sheet carries Wilder and Rashemi (the record has Human, Druid, Specialisation Wilder), and his Wild Shape forms list.
  src: section 7 (2026-10-28)

### crew/boogie.html

- **[later]** When Boogie places the seal *(prep)*
  Boogie knows Vocath's personal seal from the crate he pried open aboard the cantina, and has not placed it: Sol saw it on the rod (History 4, never seen it; only the name Vocath), and Boogie was with Sol at the marked Sky Dock crate. It is open for him to remember later: FR-016, or a prompt from an instructor in an upcoming session (Korey, 2026-11-07). Set in that voyage's prep.
  src: Korey, 2026-11-07; V003 transcript

- **[decide]** Which deckhand item goes missing on the tyrant ship voyage *(prep)*
  Korey names the item (see the "Next beat" add).
  src: BCS § Boogie/Open

- **[later]** Boogie's sheet check
  His current level and D&D Beyond URL, and whether the Shield of Expression is on the sheet (the record lists "shield").
  src: section 7 (2026-10-28)

# Artifacts and vessels

Pages under `prime/artifacts/` and `prime/vessels/`. Items under each page run
decide, later, fix, add. Section 4 rewrote every page on 2026-10-28; what is
left here is open.

### Every fragment

- **[decide]** What a fragment made whole does
  A whole fragment does not open the First Heart (Korey 2026-10-27: "Assembling the pieces should do something but probably not open the first heart. Our structure has changed since then."). What assembling one does is not set. The old "second key" (Vecna holding the whole Rod as his fallback) is retired with it. Every fragment page and the Artifacts register carry this as a Still to decide sentence, and nothing else. Two knock-ons wait on it: the twins carry both Dissolution pieces, so the Dissolution fragment is the first that could be whole in play; and the old gate on the twins ("not a key to the First Heart before about level 12, early in Act 3") has lost its object, so what that level-12 gate now gates is part of this decide. Pages that carried the First Heart key (artifacts/, factions/runekeepers.html, locations/wayfinders-homeworld.html, rules/index.html, crew/tumak.html, connections.json) no longer say it.
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
  Ruled: the Distinction fragment is three pieces, each a finder; A.T.L.A.S. and the second Distinction piece are two (STAGING rounds 10–11). What the third finds, and where it is, waits until play needs it. (Moved from the Timeline section.)
  src: Korey, 2026-10-25 (round 10)

### artifacts/second-distinction-piece.html

- **[later]** The second Distinction piece's catalogue name
  Named the second Distinction piece (Korey, 2026-10-28; the page moved from artifacts/atlas-sister.html). Say whether the Fleet catalogued it under a name of its own as it did A.T.L.A.S. (Astral Topographic Lithic Augury System). Its look, its maker, how it shows what it finds, where it is now, and whether it is the device Clint carries are on the page as Still to decide.
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

### artifacts/faelight-spore.html

- **[decide]** The Faelight spore's slot rules *(prep)* *(answered)*
  The page reconciles the old rules/index.html#counter-spore section (removed in section 4) with the BACKLOG radius steps: the slot sets the radius only (10/20/30 ft for a 1st/2nd/3rd-level slot), the cloud lasts 1 minute whatever the slot, and there is no level cap. The Rules page had capped a 3rd-level caster at a 2nd-level slot and said slot level scaled area and duration; both were dropped as Rules-page additions with no ruling behind them. Confirm, or restore the cap or the duration scaling. Also open: where the spore is now. The player Collection Manifest (entry 051) lists it as "Intake · unprocessed"; the voyage 6–7 planning chat moved it from the Cargo Deck to the Garden (§ Superseded). The page follows the manifest and names the Garden as unconfirmed. Also open on the page: whether a slot above 3rd widens the cloud, whether a coated creature stays coated after leaving the cloud, and whether the spore can be carried off the ship.
  src: section 4 (2026-10-28); rules/index.html#counter-spore as it stood
  answered: Tyrant ship mechanics reference, turn 40 (reversing turn 38): the slot sets the radius and the cloud always lasts 1 minute. Confirm the page as it stands. inbox/chat-tyrant-ship.md.

### vessels/tyrant-ship.html

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

- **[later]** Bellwether Crow after the raid
  Crow was repaired at Cairn and went home (vessels/bellwether-crow.html). Its class is set: a light corvette. Whether it went back into service, its captain, and the name of the survivor who saw Joffrey change wait until the crew pulls the roster.
  src: section 4; fia-story § After

### vessels/moonraider.html

- **[decide]** What the Moonraider simulation is drawn from
  Saerthe's simulation of the Derelict draws on real records (vessels/the-derelict.html). The same rule would answer the Moonraider's source, and captain-sardax.html poses the question ("either someone survived to describe it, or…"). Confirm that it applies, or set another source.
  src: section 4 plan (inference)

### vessels/the-derelict.html

- **[later]** The Derelict's name, and records for the other salvage-race ships
  Settled for the other ships: every ship the crew encounters gets a record, and ships known only in simulation sit under the Simulation Deck with Status Simulated, so the salvage race's hammerhead and githyanki ship each get a simulated record and a register row, as the Moonraider and the Derelict did. Still open: the Derelict's name. Options: "Salvage Race Derelict", or keep "Derelict". Touches this page and vessels/the-derelict.html.
  src: chat-voyage-6-7-planning § Open; § The swap and NPCs (Moonraider and Derelict as simulated records); § Table and story principles ("Every ship the crew encounters gets a record"); memory-canon § Naming ("Ships the crew encounters get cataloged")

# Rules

Pages under `prime/rules/`, `prime/statblocks/` and `prime/tracker/` (whose DM
layer is `prime/data/overlay.json`), plus one player-site rules page. Items
under each page run decide, fix, drop, add. The Tumak items are checked
against the complete Tumak sweep (all 336 turns).

### rules/index.html

- **[decide]** Travel times between systems *(shape)*
  Inside a system a helm covers 100 million miles a day, and Toril is about 30 days from Realmspace's edge (Spelljammer Academy, Appendix A); Toril to H'Catha is the 14-day crossing. Nothing sets travel between systems: *Wildjammer* leaves it to the DM, and the Astral Sea page only grades lanes. The chart is no single scale (Caelestis's cluster is an inset: Strake sits 600 units out yet at Realmspace's edge). A proposal to rule on: drift days from the system's edge by lane tier, about 25 chart units a day on a charted lane, 20 on a long haul, 10 uncharted with uncertain arrival, plus 1 to 2 weeks to reach the destination world. That gives from Caelestis: Strake about a month; Virenspace and Aethris about 2½ to 3 months; Krynnspace and Fonains about 4 months. Knock-ons: the 30-day exit is half of every trip; Cairn, "some weeks out", comes to about 2½ months; the shards reaching Boogie from Fonains take at least 4 months (ruling 23 allows adding time). Touches: rules/index.html § Ship & crew, locations/astral-sea.html, fia-story § Cairn Station.
  src: Korey, 2026-11-07

- **[later]** Taking a helm, and the kinds of helm
  How a helm changes hands (a spelljammer knocked out or killed at the helm, and another takes control) and what kinds of helm exist are not defined. Clint took the helm of the overseer's ship in the raid on Bellwether Crow (dossiers/clint.html).
  src: Korey, 2026-11-07

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
  Offered and never accepted, so not the default: the names Hearth, Threshold and Horizon; a loop where Gregory's Calibration finds anchorable sites; Anchors bypassing the reach gate (turns 327, 333). The page still reads "Unassigned (bestowed)" and "bestowed at story moments", and § The safety valve leans on the three bestowed positions; rules/wayfinder-path-dm.html lists runes 17, 18 and 19 as "Floating (DM-bestowed)" placeholders. Touches rules/index.html (position table, § The safety valve, § Still to decide under Tumak), rules/wayfinder-path-dm.html, crew/gregory.html.
  src: TGB § Tumak/Rune structure, final (turn 326), Open; memory-canon (open-decisions § Pending; campaign-canon § Tumak Swan); framework § Open
  Waits on: deconflict ruling 12

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
  Waits on: deconflict ruling 12

- **[fix]** Network modifiers apply only when Tumak stands at a mark *(answered)*
  Page: "−10% if the mark was placed by a rune from another set; −25% if from the same set", with no standing condition. Change § Wayfind → Network modifiers to: the network helps only when Tumak is standing at one of his own placed marks as he casts. If the destination mark is from the same set, add 25 to the d100 roll; if from a different set, add 10. Cast from anywhere else, the Wayfind is allowed at full risk with no bonus. The network buys safety, never energy: exhaustion is the same either way. (The d100 bands themselves are the Wayfind-odds fix below.)
  src: TGB § Tumak/Wayfind, Open
  answered: inbox/chat-crew-tumak-gregory-bartholomew.md § Tumak/Wayfind (Settled, turns 241–247, 262). Confirmed in the chat: Korey, "he can use a marked rune to [hop] to another marked rune from the same set and mitigate the mishap chance"; the +25/+10 numbers are from the mechanics spec wayfinder-runekeeper-mechanics.md (turn 268), § Set network mechanic.

- **[decide]** The early-home door *(shape)*
  Keep or drop: a natural 20 on a d20, rolled before declaring a target, then a confirmation roll to reach home ahead of the arc.
  Missing from the sources: the redo never mentions it. Under the reach gate home is out of reach until the Heart awakens at 16, so keeping the door makes it an explicit exception to the gate.
  src: TGB § Tumak/Open; framework § Open
  Waits on: deconflict ruling 12

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

- **[fix]** Perceive through a mark needs concentration
  The Marks row says "perceive through any of your marks (1 per long rest, one minute at one mark)". Add concentration (Korey, turn 259).
  src: TGB § Tumak/Marks

- **[fix]** Sol's oath is written
  § Open says Sol's oath carries "implied mechanics that live nowhere". The Oath of Misfortune is finalized (Unified Jinx with Jinx charges; Misfortune's Wake and Misfortune's Edge) and lives on crew/sol.html. Point there (Jinx is at `crew/sol.html#jinx`, Misfortuned at `#misfortuned`) and remove Sol from that line.
  src: memory-canon § Sol Fortuna

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
  The Almost mechanic is a character subsystem: aspects prepared equal to proficiency bonus; Manifest Aspect as a bonus action for 1 minute. Point to the Aspects tab on `registry/crew-manifest/bartholomew-grayson.html#aspects` and to crew/bartholomew.html.
  src: memory-canon § Bartholomew; chat-voyage-6-7-planning § Bartholomew: Aspects

- *(The tyrant ship's standing combat rulings are listed under statblocks/index.html.)*

### statblocks/index.html

- **[decide]** Ostekk-10's stat block and Lightning Breath *(prep)*
  Build the stat block. For Lightning Breath, options: the 12d10 line; or the 20-ft. cone the table saw (suggested 4d10, DC 16 Dex).
  src: chat-voyage-6-7-planning § Open

- **[add]** What the choice decides
  Add to § What the choice actually decides: Saerthe leans toward exploring ("go look"). Tarto leans toward the mission ("keep going, your mission, your failure"). Each handles talk of the missing things differently.
  src: chat-voyage-6-7-planning § The swap and NPCs; memory-canon (open-decisions § Voyage 007 intent)

- **[add]** Tyrant ship retunes (new rows; the page names these as next candidates)
  - Clockwork horror: HP 30.
  - Hollowed wisps: AC 11; DC 12 Con save; 1d4 necrotic; they latch on on a failed save.
  - Standing ruling: two cones give +3 cover.
  src: chat-voyage-6-7-planning § The field and constructs

### tracker/index.html (DM layer: prime/data/overlay.json)

- **[later]** Bring the Tracker up to date
  The Tracker's system stays as it is; its content and views need updating to match the restructure (voyages, overlay entries, lanes). Korey will work out the details later.
  src: Korey, 2026-10-29

- **[fix]** What the Command Deck field does to constructs
  overlay.json says "The Command Deck's field unmakes constructs". Change to: the field froze the clockwork horrors, slowed the OSTEKK units and kept the behir out.
  src: chat-voyage-6-7-planning § The field and constructs

- *(The Ostekk-2 "wake it for good" line in overlay.json is a decide (prep) under artifacts/containment-engine.html in the Artifacts and vessels section.)*

### registry/crew-manifest/tumak-swan.html#wayfinder-path (player site, outside prime)

- **[add]** Who gets the tracker link (DM note, kept in prime)
  Korey sends the tracker link only to Tumak's player, or puts it on the character sheet marked player-only (turn 162). Record this with the rules page's tracker links.
  src: TGB § Tumak/Player tracker

# New pages

### Fonains Canon Reference (Claude doc, outside the repo)

- **[later]** Refresh or retire the Fonains doc
  Since section 8 the wiki carries Fonains: locations/fonains.html, factions/cretez.html, dossiers/vanifer.html and vessels/thessalars-craft.html. The doc's open fix and add items (# Fonains § Fonains doc) were written against it. In a chat session, either refresh the doc from the wiki pages or retire it and point to them. A refresh also corrects the Cre'Tez sister's name to Dharra (the doc spells it Darra) and makes Tharizdun she.
  src: section 8 (Q1), 2026-10-28; Korey, 2026-10-27 (Dharra)

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
  The DM holochart (`prime/chart/holo.html`) is built; the players get their own (Korey 2026-10-28). It shows only what the crew knows: charted systems and places with a record, and the crew's route voyage by voyage, read from `data/`. Heart worlds appear only once the record holds them (the repo is public, so unfound positions must never ship in a player file). With the hearts in hand, the crew can set the viewpoint to any known system; from Oerth the eye forms. Players may mark their own waypoints in their browser. Needs a player folder (into the deploy glob and the S.E.A.R.C.H. scope) or a home in the Stellar Chart tab on Casey's crew page (`registry/crew-manifest/casey-geim.html#stellar-chart`), and the in-world framing of the projection.

### NEW: Languages (reference)

- **[add]** A home for invented languages
  Purpose: one DM reference for every made-up language in the cosmos, so names stay consistent. Voice: DM. First entry: the Vth'orama tongue, with its roots (vth- the whole of; ghath to hold and keep hold; n'- one who, one that is; -rod unbroken, that does not release; ulh the cull; -an negation; mer- to bear; enna near, inner; or- toward; amu home; -a a people), and the glossed words (Vth'orama, Vth'oramu, Vth'ghathu, n'ghathu, Enna Vth'ghathu, N'ghathrod). Vth'ulhan and Vth'merru are retired with "unthinned" and "bearers"; whether the true-formed have a Qualith name is open. Add a section per language as others appear (Githyanki, chapter names for the Seekers).
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

**Purpose.** The companion to every random encounter table (Astral first). Each table row points to a Log entry, so a roll at the table always lands on something prepared. The Astral encounter table and this log are both unwritten. Suggested path: `prime/campaign/encounters.html`.

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

### NEW: The Order's Caelestis Sector house (location)

**Purpose.** The Order of All's house in the Caelestis Sector. It has a wing for each order; the Hall of Sight and Sound, where Glimpses train and are knighted, stands in the Watchers' wing; Captain-Commander Dejexic, the Watcher Vanguard, commands it (factions/order.html#caelestis-house). The crew delivers Ezra there on a graduation contract, and it is a candidate home for the Watcher who came back from Glyth. Suggested path: `prime/locations/<name>.html`, once the house has a name and a place.

**Voice.** In-world.

- **[decide]** Where the Caelestis Sector house is *(prep)*
  The house's shape is set on factions/order.html; its name and place are open. Known around it: the H'Catha report ran Watcher → Hall → Fleet Corps → Academy, so the house is in reach of Caelestis's channels. Ezra trained about a century in the Hall of Sight and Sound (dossiers/ezra.html). The Watcher Transport contract is a graduation-grade job, so the house should lie within reach of Realmspace. The cosmology later item "The Order of All's headquarters, houses and Vanguards" carries the rest of the Order's open places.
  src: Korey, 2026-10-28 (the Order's houses); memory-canon § Key NPCs (Ezra); working/glyth-watcher.md § Where she fits

### NEW: Glyth Watcher (dossier)

**Purpose.** The Watcher who lived years on Glyth and came back: the only outside source on the elder brain and N'ghathrod's origins, and one of the named-but-unseen figures the crew hears of before meeting. Promotes from working/glyth-watcher.md. Suggested path: `prime/dossiers/<name>.html`.

**Voice.** In-world.

- **[later]** The Glyth Watcher
  Her sketch, what she knows, where she fits and her open questions (name, tell, how she got out and what it cost, what she wants, whether the Order trusts her, where she lives) live in working/glyth-watcher.md. Four points sit outside the draft. The timeline places "The Glyth Watcher gets out" at t -3 (cert working): keep about three years ago, or leave it undated. factions/watchers.html takes a named-but-unseen row when she is written: "A Watcher posted to a region of Glyth got out after years inside the elder brain's range. She still hears it." The draft's "purebred lieutenant who stayed" is cut, since all five lieutenants went with N'ghathrod. The draft's "Hall of the Watchers" now reads as the Watchers' wing of the Order's Caelestis Sector house.
  src: working/glyth-watcher.md; timeline.json; memory-canon open-decisions (Vecna direction 2026-10-24); STAGING § The Vth'orama; factions/order.html

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

**Purpose.** The tale the twins' grandmother told them as children, given to Tumak's player as an in-world handout. It carries the Lunarfoot belief about the runes, which is wrong about the mechanism. Player side, by default (for Korey to confirm): a section on Tumak's crew page, `registry/crew-manifest/tumak-swan.html`, inside his passphrase-veiled Wayfinder's Path tab (`#wayfinder-path`), or its own veiled tab beside it; `handouts/` is retired and the Fleet Protocols (`protocols/`) hold manuals, not personal handouts. Source: the chat output the-becoming.html. The DM note stays in prime. Not built yet.

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

**Purpose.** The DM's at-a-glance view of the run: planned against actual per voyage, each crew member's contribution, the arcs, the off-screen powers, and the ripples into Act 2. It exists today only as claude.ai artifacts. Whether it becomes `prime/timeline/` or a separate page is an automation decide (see the Automation and tracker section).

**Voice.** DM.

- **[later]** Whether the board's forward columns are editable
  src: chat-cosmic § Open

- **[add]** What the board shows
  Planned against actual per voyage; each crew member's contribution; the arcs; the off-screen powers; ripples into Act 2.
  src: chat-cosmic § Wiki structure rules (turn 439); memory-canon (DM views at a glance)

### NEW: Campaign shape

- **[later]** Build the middle of the campaign
  After graduation the campaign is Korey's own, not a module. The arcs exist; what stitches them together (missions between, how one thread leads to the next) does not yet. Study how long campaigns are built: published adventure paths, Critical Role and Dimension 20, and campaign design writing (node-based scenarios, fronts and clocks, the three-clue rule). Feeds the contract categories decide.
  src: Korey, 2026-11-01

### NEW: Cosmos texture

**Purpose.** The recurring patterns that make the cosmos feel lived-in and larger than the crew: things they keep running into across worlds. Suggested path: `prime/cosmology/texture.html`.

**Voice.** DM.

- **[later]** The ensemble of legendary figures
  Who the named-but-unseen figures are.
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

### hub.html

- **[later]** Which Lore Bible is current
  The hub's "Wildspace Lore Bible" tile opens "Caelestis Wildspaces Lore Bible" (doc `1XjOAGPAWvDivwI2ThihwCG84ACk2eF_HKtzbxgbVTMQ`, about 3 KB). The project's synced Lore Bible is "Caelestis Campaign Lore Bible" (doc `1SLoMt7h9DboUQQlXZA61HukmnQBkjHKUNtLH2Qt4IMQ`, about 13 KB). Drive shows both created and last edited on 2026-04-12, untouched since. The Campaign Planning chat folded the Lore Bible into the DM wiki (turn 56), so neither is the live source now. Options: point the tile at the Campaign Lore Bible and relabel it; or retire the tile, since prime/ replaced both.
  src: hub.html; project synced sources; Drive metadata (checked 2026-10-25); chat-early-planning § DM wiki and naming (turn 56)

- **[fix]** The hub's Drive Root is right; memory's folder id is the rune images folder *(answered)*
  No page change. The hub's Drive Root tile opens `1suJFIN_LYDmRrkzjk3PkVv2pOmbJxE8r`, which Drive names "Caelestis". Memory's `1KuFCCLYKM2LuW6Hd4NEDq9GIsHL2L3Y5` is a folder named "runes" (created 2026-06-18), where Tumak's rune images live. Update memory's site-and-automation line: the Caelestis folder is `1suJFIN_LYDmRrkzjk3PkVv2pOmbJxE8r`, and `1KuFCC…` is the runes folder.
  src: hub.html; memory-canon § Tools and gotchas
  answered: Drive metadata for both ids (checked 2026-10-25); inbox/chat-crew-tumak-gregory-bartholomew.md § Tumak/Documents produced (rune images in folder 1KuFCC…)

- **[add]** A Vessels card under Setting
  The DM nav has Setting → Vessels, but the hub has no Vessels card. PR #71 added Factions and Vessels cards on the player side.
  src: prime/scripts/dm-nav.js; chat-voyage-6-7-planning § Documents produced

- **[add]** A Timeline card under Campaign
  The DM nav has Run → Timeline, but the hub has no Timeline card.
  src: prime/scripts/dm-nav.js

### prime/docs/PAGE-GUIDE.md

- **[later]** A motivation rubric for what a person wants
  The early master source doc gave every NPC four lines: **Wants** (specific, never "a happy life"), **Will do to get it** (the tools they will actually use), **Won't cross** (the line they keep), and **Current pressure** (what makes it urgent now, or nothing). PAGE-GUIDE § 5 (About, in order) gives Personality as "temperament, manner, voice, what they want and what drives them". Options: adopt the four lines as the shape of that part of About, keep them as a writing check only, or leave them out.
  Touches: PAGE-GUIDE § 5, every prime dossier if adopted.
  src: chat-early-planning § Campaign Planning, Arc 1 close and planning method (turn 300); notes/PAGE-SHAPE.md (retired)

- **[add]** Concept backlinks
  Add to PAGE-GUIDE § 1 (Anchors and links): a backlink to a concept deep-links to its section, not to the top of the page.
  src: chat-cosmic § Wiki structure rules; notes/PAGE-SHAPE.md (retired)

- **[add]** Canon rules for § 1 Content
  Add to PAGE-GUIDE § 1 (Content):
  - At DM level the world never contradicts itself. At player level contradictions are allowed (lies, bad information), and not everything has to connect.
  - Canon never mentions a concept that does not exist (for example, "there is no Existence Axiom"). Contrasts that explain how something works are fine.
  src: framework § Working rules; memory-canon (campaign-canon, Axioms line); notes/PAGE-SHAPE.md (retired)

# Automation and tracker

Settled: n8n and the Google Sheet trackers are retired. The repo record
(`data/` plus `prime/data/`) is the tracker, shown on `prime/tracker/`, and a
session runs in chat against the repo per `prime/docs/SESSION-RUN.md`. The three
Sheets (Campaign Tracker, Character Arc Tracker, Wildspace Tracker) are
archived in Drive, not deleted. What stays open here is below.

### Pipeline

- **[later]** Anything in the retired Sheets still missing from the repo
  The Character Arc Tracker and Wildspace Tracker were never migrated. Check them once against the record, the crew pages and locations/, and stage what is missing; then they stay archived.
  src: automation § Open (both chats); Korey 2026-11-04 (trackers retired)

- **[later]** The Crew Logs Google Doc
  Korey calls it unused, yet the V005 run appended to it, the runbook's step 7 still does, and the voyage pages carry the same text. Options: retire it (drop step 7's append and the `voyages/logs/` embed); or keep appending.
  src: automation § Open; prime/docs/SESSION-RUN.md step 7

### DM views

- **[fix]** Overhaul the DM tools *(build)*
  The DM tools exist to help the DM process: session prep and keeping track. Most are stale. Audit each against the current record, the current process (prep, story logic, table readiness, change audit) and the current campaign shape (Acts and arcs), and decide for each: rebuild, merge or retire. Start with the tracker (`prime/tracker/`), then the Voyages board (`prime/campaign/voyages/`), the hub (`prime/hub.html`), the timeline and its Connections view (`prime/timeline/`, `prime/data/connections.json`), and the overlay's urgency and next-beat fields (`prime/data/overlay.json`). The items below (the Campaign Board and Chronicle view, the prep brief, the weather of reality) are part of this pass.
  src: Korey, 2026-11-07

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
  src: framework § Open; tools/data.js schema

### Housekeeping

- **[fix]** Read-aloud works per section
  Some sections across pages have no read-aloud control, and a control reads from its top-level section onward instead of stopping at the end of its own section. Give every readable section its own control, and stop reading at that section's end (prime/scripts/dm-listen.js).
  src: Korey, 2026-10-29

- **[later]** Sweep for pages not updated during the restructure
  Lines that predate later rulings (sections 1–10, the chart, the Nexus). Korey will scan as he goes; a full sweep can follow.
  src: Korey, 2026-10-29

- **[later]** The SotDQ tracker cleanup
  Deferred. Schedule it or drop it.
  src: automation § Open

# Repo and process

- **[decide]** The cycle's length in Toril years
  `factions/fleet.html` gives a cycle as sixteen Toril months (480 embers, about 1.315 Toril years) and as one and a third Toril years (1.333). `prime/chart/gtc.js` counts 480 embers. The Order's founding (about 1,990 years ago) uses 1.333; at 1.315 it is about 1,961. Pick one and restate the founding. Logged from the dates audit, 2026-11-07.
  src: dates audit, 2026-11-07

- **[decide]** FIA and DM proper nouns and the spelling list
  `data/vocabulary.js` is the one spelling list, and CLAUDE.md says every new proper noun goes in it. The FIA's names (Dashforest, Tarroway, Verrow, Saltjaw, Cairn, Strake, Hollis, Aethris, Kaldris, Ortholith, the escort ships) are not in it, and adding them there would let the player search suggest gated names. Ruled (Korey, 2026-11-07): no name list goes in CLAUDE.md, and no second list. Options: one list with a gated flag per name that `scripts/spelling.js` skips on the player site and the FIA and DM search pages use; or the FIA and DM searches get no spelling repair and the rule in CLAUDE.md is narrowed to player names. Touches data/vocabulary.js, scripts/spelling.js, restricted/search.html, prime/search.html, CLAUDE.md § Deploy and search.
  src: FIA cold audit, 2026-11-07

- **[later]** Skills by DM practice, not by campaign
  The caelestis-* skills (story logic, table readiness, prep, mechanic review, change audit) are Korey's DM practice, not Caelestis's. Before a second campaign uses them, split each into the method, named for the practice and shared across campaigns, and the campaign's specifics (paths, anchors such as Fonains-first, voice, check commands), kept in that campaign's CLAUDE.md or one campaign reference the skills read. Repo setup and voice stay per campaign.
  src: Korey, 2026-11-06

- **[fix]** Ripple audit
  Rulings were edited into one page in place, and the pages that leaned on the old version were left behind. Examples found 2026-11-06: Miken's DM dossier says the beacon is "the whole of the sabotage" after he was ruled to have placed the rod; the Ezra items still tied his hook to the Vth'orama's mark after it was dropped; the chart's perimeter-watch text still has Cairn silent for a year and the *Crow* turned back. Walk the DM pages for claims that contradict later rulings in STAGING, the inbox and the drafts, and list each with the page it lands on.
  src: Korey, 2026-11-06

- **[fix]** Empty the inbox
  Ruled (Korey, 2026-11-07): the inbox holds raw material from outside the repo until every item in it has landed in a draft, BACKLOG, STAGING or a page, then the file is deleted; chat rulings never go there. Check each sweep's "not in repo" and "conflicts" items against BACKLOG and STAGING, add what is missing, and delete the sweep. Finish the two PARTIAL sweeps first or log their unread ranges here. About 470 KB today.
  src: Korey, 2026-11-04 and 2026-11-07

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

- **[later]** How a page states an unknown
  PAGE-GUIDE § 1 says an entry that is light because little is known says what is known and stops. The retired WIKI-PAGE-GUIDE.md said "The Reach's name is not known… phrase gaps as such." Suggested split: an in-world gap ("the Fleet does not know the Reach's name") is a world fact and may stay; a DM gap ("name not yet decided") is a backlog item.
  src: notes/WIKI-PAGE-GUIDE.md (retired); working/README.md; prime/docs/PAGE-GUIDE.md

- **[later]** connections.json sources outside Fonains
  About 370 facts and edges in prime/data/connections.json still cite "STAGING round N" or "STAGING § …", entries since distributed and deleted. Section 8 retargeted the Fonains nodes to their finished pages. Retarget the rest, node by node, to the page that now carries each fact.
  src: section 8, 2026-10-28

## Record and schema

- **[later]** Ships in the record
  prime/docs/SESSION-RUN.md files a ship as a place with Type `Vessel`, parented to where it was last seen, and parks simulated ships under the Simulation Deck with Status `Simulated`. That rule is the latest one Korey accepted for the record (Voyage 7 chat, 2026-10-25, Settled: "Every ship the crew encounters gets a record"). "Vessels are vessels" was ruled earlier, in the cosmic chat, for the DM wiki: vessels are their own register with entry pages, not realms and not artifacts. So the two do not yet conflict; the question is whether the refactor should carry the register split down into the record. Options: (a) keep ships as Vessel-type places in `data/locations.json` and split only the pages (`navigation-records/` ships move to `vessels/`); (b) give the record a vessel set or a `kind` field, a status vocabulary without "Simulated" on places, and a choice of whether a ship's whereabouts is a field or a parent link.
  Touches: tools/data.js schema, data/locations.json, prime/docs/SESSION-RUN.md, navigation-records/, vessels/.
  src: notes/SESSION-RUN.md; working/repo-refactor.md; chat-voyage-6-7-planning § Table and story principles; chat-cosmic § Wiki structure rules ("Vessels are a register of their own")

## Fixes

- **[later]** Shared CSS, second pass
  Section 10 removed the dead rules and the copies that a later sheet already overrode, and normalised the load order of the Nexus and Corps Protocols indexes. Still to do: about 80 selectors repeated across caelestis, entity, board, register and bearing with different declarations (board + register 24, caelestis + register 17, entity + register 12, caelestis + board 9, bearing + register 9, caelestis + entity 8, bearing + entity 4), which need the winning declarations merged by hand and a zero visual diff; the 39 player-only classes in caelestis.css (`s-card`, `log-*`, `account-*` and others) could move to a player sheet; and the rarity colours in register.css (`.r-rare` to `.r-artifact`), unused until an item carries one.
  src: section 10 plan § 4

- **[later]** `tools/search.js` is loaded by no page
  The per-section search box (a scoped Pagefind query under the page header) is wired to nothing. Load it on the section indexes, or delete it.
  src: section 10

- **[later]** Crew Notes, now that search has shipped
  A shared space where players write their own notes (an Etherpad or a Google Doc linked from the site) was deferred until S.E.A.R.C.H. shipped, then to be weighed on its own. S.E.A.R.C.H. is live. The old `crew-notes/` redirect is gone; Crew Logs lives at `voyages/logs/`. Options: build it (and pick the tool), or drop it.
  Touches: the player nav (scripts/nav.js), a new player page or external link.
  src: chat-early-planning § Campaign Planning, Open; memory-canon (Crew Notes deferred)

- **[later]** Revisit generating record fields on pages
  The retired scripts/_benched/build-pages.js scaffolded player entity pages from data/*.json and rewrote marked fields (role, affiliation, status, last seen) on every build; it was deleted in Pass 0 (still in git history). The idea — filling record-derived fields so pages cannot drift from the record — is worth revisiting once the site is stable. It would change the CLAUDE.md rule that pages are written by hand, and would need to respect the session-run approvals and the current record and page shapes; the old script's known bugs are in its README in history.
  src: chat 2026-10-27 (Korey: "delete it for now. add a note to the backlog to revisit the idea when the site is stable")

- **[later]** Move hosting to Cloudflare and make the repo private
  Korey (2026-11-03): not now. Move the site from GitHub Pages to Cloudflare Pages, so the repository can go private and the site gets a friendlier address. Notes for when it starts:
  - **The root path.** `scripts/nav.js` finds the site root by counting folders and subtracting one for `/caelestis/` (and `prime/scripts/dm-nav.js` likely does the same). At a domain root every sidebar link would point one folder too high. Fix first: derive the root from the script's own URL. That is harmless on GitHub Pages too.
  - **Deploy.** Keep `deploy.yml` (three Pagefind indexes, `guard`, prune) and swap only its last step for Cloudflare's deploy action with an API token held as a repo secret. `check.yml` is unchanged. A private repo has 2,000 free Actions minutes a month.
  - **Privacy.** A private repo hides the source, but the published site still serves `prime/` and `restricted/` behind a browser-side gate. Cloudflare Access (free Zero Trust tier) can put a real login on `/prime/*` and `/restricted/*`.
  - **Order.** Root-path fix → Cloudflare project and token (Korey) → deploy step and the deploy notes in CLAUDE.md → check the new address → repo private, GitHub Pages off → optionally Access.
  - **Open.** The address: a `pages.dev` name or a domain Korey owns.

# Player pages

Fixes to player-facing pages, including the Fleet Intelligence Archive (`restricted/`). These pages hold only what the crew could know; corrections must keep that boundary.

### voyages/bearings/

- **[later]** A player-side in-world timeline of key events
  voyages/bearings/timeline.html is the seed: an unlinked page of key events by era. Not now.
  src: Korey, 2026-11-02 (Current Bearing redesign)

### spelljammer-nexus/

- **[decide]** Giff magic resistance *(Nexus)*
  *Wildjammer* gives giff advantage on saves against spells and magic, and says they could not cast until recent decades. The *AAG* giff and the SJA and BAM giff blocks have neither, and Ryeback runs on the SJA block. Left off. Add it to the giff entry, or keep it off?
  src: nexus-field-guide § Open, 2026-10-29

- **[decide]** Sharchinid *(Nexus)*
  *Wildjammer*'s ship-hunting shark senses helms through the drift and links to a helm to follow a ship at spelljamming speed. The DM rule is that nothing is met at speed (V007 crossing). Left off.
  src: nexus-field-guide § Open, 2026-10-29

- **[decide]** Renegade mind flayers *(Nexus)*
  *Wildjammer* has illithids freed from an elder brain who no longer need brains to live. It sits next to "colonies without a brain" on the § 4 list. Left off.
  src: nexus-field-guide § Open, 2026-10-29

- **[decide]** Space clown *(Nexus)*
  A BAM fiend; left off for tone. Add to Boarders if wanted.
  src: nexus-field-guide § Open, 2026-10-29

- **[decide]** Kindori calves *(Nexus)*
  No published calf block or calf behaviour. If the crew should learn something about calves before V007, it needs a ruling.
  src: nexus-field-guide § Open, 2026-10-29


- **[decide]** Spectators on H'Catha: what they are bound to, and the vanish rule
  The published spectator is summoned to guard one thing for 101 years and vanishes if that thing is stolen or destroyed before its term ends. Greelob and Orlob guard the meteor by their own choice (SJA), and the diggings plan has them arguing over who guards them. Rule what the two are bound to, and whether the vanish rule is table knowledge. Perils of the Drift leaves the rule off until then.
  src: Nexus cold review (2026-10-29); prime/locations/hcatha.html; prime/working/nexus-field-guide.md

## Memory cleanup

Open items left in Claude's memory notes on 2026-11-04, once the settled
rulings went to STAGING. Each lists the pages it touches.

### Conflicts and memory-only facts

- **decide** Casey's Stellar Reading. Once he spends the star, must he name a sign (no declining)? registry/crew-manifest/casey-geim.html says he "may attempt to name the constellation". crew/casey.html.
- **decide** Tumak's Runechild sorcery. Is the subclass on his sheet now, at his first Sorcerer level, or from Sorcerer 3 like the rest of the table? crew/tumak.html, rules/index.html § Standing mechanics.
- **decide** The loose Rod pieces and beholders. Do the pieces stay clear of beholders, Xanathar's piece the one exception? artifacts/rod-of-seven-parts.html lists it under "Still to decide".
- **decide** Three Fonains facts backed only by memory: the Green Lady's dragon form is a wild shape of the dragon she faced in Korvalatel's Clutch, and she is the Bacon Bunch's Green Lady (the page has her trapped in that form after Aerisi split Eldath's tree); Giorge is a branded member of the Verdant Vigilance; every member of Lola's Boys is tied to the Princes of Elemental Evil, which is why the Accordance chose them. locations/fonains.html, factions/deities.html, timeline.
- **decide** Fragment counts and the Reach. Does the number of pieces a fragment broke into still mark its distance from the Reach under the five Axioms? If so, Dissolution (2) lay closest and Determination (11) farthest. cosmology/index.html § Residue.
- **decide** Did Lola's Boys breaking the Fonains Monolith force Vecna to change his plan? factions/deities.html says only that it hurt both of them. opposition/vecna.html.

### Later

- **later** The scale of the galaxies and the cosmos. chart/, cosmology/index.html.
- **later** How the Rod of Seven Parts could be used against Vecna. artifacts/rod-of-seven-parts.html.
- **later** Why Caelestis holds records on Fonains. restricted/, locations/fonains.html.
- **later** Does the Spindle's shadow grow in some seasons to cover about two domains, and do two eyes then shut at once under the Pact? locations/hcatha.html (with the decide "Measures").
- **later** The Sovereign Eye's attention as a mechanic: what it notices first. locations/hcatha.html, rules/.
- **later** How often partial sleep leaks a sleepborn on H'Catha: a variant rule for frequency. locations/hcatha.html, rules/.
- **later** What brought Saerthe from Nimbral to Caelestis. dossiers/saerthe-abizjn.html.
- **later** The Fleet's institutional history of named enemies and defeats. factions/fleet.html.
- **later** Does a Seekers chapter plant a notice on the graduation board, and what does it say? NEW: Contract board.
- **later** The Fonains dragons' departure as a prequel one-shot. locations/fonains.html.
- **later** Companion tabs for Boogie, Gregory and Sol, like the other three crew pages. registry/crew-manifest/.

### Fixes

- **fix** voyages/voyage-template.html still has the old folding account layout; every voyage page uses tabs. Update it to match voyage-006.html or retire it (prime/docs/SESSION-RUN.md now copies the previous voyage page).

### From the chat sweeps of 2026-11-04

- **decide** Homebound. In the Tumak Swan chat (turn 336, the latest source) Korey ruled that the Heart taking Tumak home is "a disservice to the player": Tumak weaves the Anchors to protect his home, the Anchors being set places or the previous Runekeepers' havens (open which), on the model of Noctis seeking his ancestors' tombs. rules/index.html ("Homebound is a Wayfind to the Heart", "Homebound is the Becoming"), the Wayfind-cost item ("Homebound is always free"), and the homeworld, Runekeeper and Dissolution fragment pages ("Completing the inscription takes Tumak home") still say otherwise. Story first: what the world hides from, and why hiding. inbox/chat-crew-tumak-gregory-bartholomew.md § Tumak Swan, turns after 2026-10-25.
  Waits on: deconflict ruling 12
- **decide** Saerthe's Barrier: a full action (Korey's words in the chat) or one attack of his Multiattack (the block in the repo)? dossiers/saerthe-abizjn.html. inbox/chat-staff-npcs.md.
- **add** A creature the Faelight spore coats stays coated until the cloud ends, even after it leaves the cloud. The spore can be fed another slot and reused. artifacts/faelight-spore.html. inbox/chat-tyrant-ship.md.
- **add** Gregory's pull stays one-way for now ("hold off on the two-way"). crew/gregory.html. inbox/chat-tyrant-ship.md.
