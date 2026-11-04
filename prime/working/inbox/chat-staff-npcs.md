# Speccing staff wizard subclass
Source: https://claude.ai/chat/f7355b35-aff3-44d3-89a5-644baaf9aa34 · updated 2026-10-18

Coverage: all 129 turns read (0–128). Turns 0–71 are design in chat. Turns 72–128 are repo work on PRs #76 and #77: stat blocks and items, then a wiki-wide formatting pass. Site mechanics such as CSS, scrim, column widths, agent batches and commit plumbing are skipped. Korey's standing rules from that stretch are kept.

## Settled

### Saerthe: identity and the fleet call
- The Materializer wizard subclass suits Saerthe. He is a Materializer who prepares illusion spells, not a school illusionist. — **in repo** (dossiers/saerthe-abizjn.html, "Tradition: Materializer wizard")
- The touchstone is Kekkaishi (Korey first said World Trigger, then corrected it). — **in repo** (STAGING.md § Saerthe Abizjn: touchstone and the fleet call)
- The fleet call is not wizardry and not tied to any object. It is a high-ceiling ability unique to Saerthe. He flies one ship at a time and holds dormant tethers to others. In dire straits, after a minute of concentration while the party protects him, he calls tethered ships to the crew's aid ("Avengers: Endgame portals"). It is very late game. — **in repo** (dossiers/saerthe-abizjn.html § Abilities, "outside his subclass")
- Cost of the fleet call: prolonged helm-blindness, meaning he cannot command any spelljamming helm until he recovers. The tethers stay intact; severance was rejected. — **in repo** (dossiers/saerthe-abizjn.html § How to run him)
- The fleet call is seeded only as rumour and whispers ("can Saerthe really command two ships?"). He always brushes it off. — **in repo** (STAGING.md § Saerthe: the fleet call)
- The training miniatures in the Spelljammer Nexus have nothing to do with the tethers. They are ordinary training models. — **in repo** (STAGING.md § The Academy thefts: "never reached a working vessel")
- His stolen personal model does not matter to this design ("I'm not concerned about the model that was taken"). — **in repo** (no function is given to it anywhere)
- He was not aboard the Bellwether Crow when Clint went overboard, and he carries the guilt: "If I'd been there I could've saved him." — **in repo** (dossiers/saerthe-abizjn.html; dossiers/clint.html)
- His Nimbral backstory comes later. — **in repo** (BACKLOG.md § later, "What brought Saerthe from Nimbral to Caelestis")
- An eye ability belongs to his origin (Nimbral), not his wizardry. — **in repo** (dossiers/saerthe-abizjn.html, "an origin trait of Nimbral and nothing his casting does"). What the eyes do is under Open.

### The Nexus simulation
- The simulation is pure illusion. Cadets stay on the pod and everything they see is in their minds. — **in repo** (dossiers/saerthe-abizjn.html; vessels/the-derelict.html)
- A small object held tightly can bleed into materialisation at the exit threshold. Boogie's logbook is the case. — **in repo** (vessels/the-derelict.html, "Small mundane objects can cross the simulation threshold at exit")
- Only mundane things cross. Magic items cannot be replicated. — **in repo** (dossiers/saerthe-abizjn.html, "magic items never cross")
- Later, the crew could ask Saerthe to simulate a place they have been and bring a small object back. Small objects only. — **not in repo**

### Saerthe: stat block (NPC block, CR 11)
- Convert him to a monster-style NPC block. The benchmark is the NPC Abjurer (CR 9), and Saerthe sits about two steps above it. He has a recharge ability and *magic missile*. — **in repo** (dossiers/saerthe-abizjn.html § Stat block, CR 11; *magic missile* on the 1st-level list)
- He is an ally and stays a little above the curve. — **in repo** (statblocks/index.html, CR 11 beside Tarto's CR 10)
- Cut: Painted Barrier (superfluous, effectively *minor illusion*), Material Enhancement, and Quicksilver Sight (*detect magic* sight). — **in repo** (absent from the block)
- Barriers are 5-ft cubes formed in a contiguous configuration. Forming one takes an action. — **in repo** (§ Barrier). A Multiattack discrepancy is under Open.
- His cube pool equals his proficiency bonus: four. A cube in play is one he cannot use. It returns when dismissed, collapsed or destroyed. — **in repo** (§ Barrier)
- The common forms are examples, not the only uses: a 5-ft block, a wall, or a 25×2-ft line. In the line, the cube breaks into 1-ft squares joined corner to corner like a chessboard, because corners carry elevation (stairs or a bridge). One cube makes one form. — **in repo** (§ Barrier)
- Barrier Footing: he walks on open air, and each step vanishes behind him. — **in repo** (§ Traits)
- Encase has the recharge (5–6). Collapse is a bonus action with reduced damage, 5d10 inside and 3d10 within 5 ft. Two cubes for a Large target. A willing creature can choose to fail the save. — **in repo** (§ Actions, § Bonus Actions)
- *Mending* repairs a cube, so he and his allies can keep one standing under damage. — **in repo** (§ Mend)
- He is a 10th-level wizard with slots up to 5th level, and his spells and cantrips are written out. — **in repo** (§ Spellcasting: 4/3/3/3/2, cantrips listed)

### Tarto
- She did not check the neogi crate. She was only informed. — **in repo** (dossiers/boatswain-tarto.html § What's hidden)
- Her build is a Battle Master fighter, not Champion. Korey wants a light version of Battle Master, just as Saerthe is a light Materializer. The key maneuvers come back, and that is what makes her stand out. — **in repo** (dossiers/boatswain-tarto.html § Maneuvers: seven maneuvers)
- Clear the Deck is cut. It was "doing the same thing twice" alongside Multiattack, and its "move without provoking" part would be dead most of the time. The chat's final block also had five superiority dice (d10). — **conflicts** (dossiers/boatswain-tarto.html: "four superiority dice (d10)" and a "Clear the Deck" bonus action; BACKLOG.md § dossiers/boatswain-tarto.html "[decide] What Clear the Deck does". Both come from an earlier revision, the 4d10 one in chat-cosmic-campaign-structure. This chat replaced that revision at turn 79.)
- Know Your Enemy (1/Day) is her bonus action and can be restored by spending a superiority die. This is the silhouette deck. — **in repo** (§ Bonus Actions)

### Signature items
- Standing preference: reskin existing D&D items rather than build new ones, and keep custom things to a minimum. Tarto's item should be a non-weapon that is odd for her to own but works well with her kit. — **not in repo** (as a stated rule)
- Saerthe: Cape of the Mountebank (rare, attuned; Korey called it "Keep of Mont Blanc"), worn as his coat. *Dimension door* once a day in smoke. — **in repo** (dossiers/saerthe-abizjn.html; statblocks/index.html)
- Saerthe: Deck of Illusions (uncommon). — **in repo** (same)
- With the cape in his kit, *fabricate* replaces *dimension door* on his 4th-level list. — **in repo** (§ Spellcasting)
- Tarto: the belaying pin is itself the magic item, an Immovable Rod. — **in repo** (dossiers/boatswain-tarto.html, "The Pin (immovable rod, uncommon)")
- Tarto keeps simple items that work together. A Rope of Climbing (the Line) is spliced to the pin when she means to use them together. — **in repo** (same, "The Line")
- Tarto's personal item: a Doodling Ring, used to draw strategies and maps and to leave trails. — **in repo** (same, "The Ring")
- Tarto and Saerthe both wear a matched Band of the Lost and Found, each pointing at the other. They started wearing them after Clint Dashforest was lost. — **in repo** (both dossiers; dossiers/clint.html)

### Winston Ryeback
- He is definitely not level 10. He uses a typical stat block, not a custom build: the giff, CR 3. — **in repo** (dossiers/winston-ryeback.html § Stat block)
- He carries a hand cannon, as stated at the table. — **in repo** (same; the Hand Cannon line uses the giff's Pistol numbers)
- Swap the weapons: the custom musket was stolen in the thefts, and he still has the pistol (the hand cannon). The Musket line drops from his block. — **conflicts** (dossiers/winston-ryeback.html: "The Academy thefts took his custom pistol"; BACKLOG.md § dossiers/winston-ryeback.html "[decide] His stat block lines", sourced from memory-canon. The chat's ruling at turn 102 is the latest Korey ruling and answers that decide item. The repo's later rewrite restored the older memory-canon version.)

### Crystalline Retrieval Construct
- The CRC is waiting when the crew returns from H'Catha. — **in repo** (dossiers/crc.html)
- The party is level 4 at that point. — **in repo** (crc.html, Challenge 7 tuned for level 4)
- It is Medium for mechanical purposes and 7–8 ft tall in description. — **in repo** (crc.html § Appearance; § Stat block)
- Retuned block: AC 17, 136 HP, CR 7, Withdrawal Threshold at 68 HP, Legendary Resistance 2/day. Korey accepted the retune. — **in repo** (crc.html § Stat block)
- *Dispel magic* is a 3rd-level spell, out of reach at PC level 4. The Detention Orb is therefore a destructible object: AC 13, 25 HP, vulnerable to thunder. — **in repo** (crc.html § Detention Orb)
- Detail from Claude's retuned draft that Korey accepted with the size and level changes and no objection:
  - Crystal Strike +7, 14 (2d8+4), with a DC 15 Strength grapple
  - Detention Orb DC 14 Constitution; the orb moves 30 ft as a bonus action
  - Geometric Growth recharge 5–6: 10-ft radius, DC 14 Dexterity, 3d6, terrain AC 13 / 25 HP
  - legendary actions: Advance and Reposition Orb

  — **not in repo** (crc.html gives Geometric Growth and the legendary action by name only)

### Site rules Korey stated
- Dossier stat blocks should read like a D&D Beyond stat block. — **not in repo** (as a written rule; the blocks follow it in practice)
- Pages carry no changelog or design-history content. Dossiers read as in-world, factual description. — **in repo** (CLAUDE.md § Writing, "Canon voice, not changelog voice")
- Tab labels must be consistent across pages. Korey does not mind whether a label is gendered. — **in repo** (docs/PAGE-GUIDE.md § Tabs, one fixed set)
- The DM-voice material sits in one tab named "DM notes" (named "for now"). It holds what is hidden, threads and connections, the direction the subject might go, and how to run them. — **in repo** (docs/PAGE-GUIDE.md, "DM notes")
- Backlink anything referenced in prose that connects to something larger. Not every mention needs a link. — **in repo** (CLAUDE.md, tools/link-names.js)
- Formatting should be uniform across every category: no excess bold, and no callouts where prose will do. — **in repo** (docs/PAGE-GUIDE.md, "A callout is a one-breath aside inside prose")
- A content revision pass, starting with the spine, comes later. — **not in repo** (inference; no backlog item names a spine content pass)

## Superseded
- Saerthe's pronouns: they/them in this chat (turns 2 and 4). The repo uses he/him, set in later chats.
- Saerthe sits out the immediate mission and joins at H'Catha only if something happens to Ryeback. Repo has: the players choose Tarto or Saerthe for H'Catha (statblocks/index.html; BACKLOG.md, Discord vote).
- Claude's stored-hull retcon (the simulation wreck was a real compressed ship) and the material-geometry sim. Korey rejected both: the simulation is full illusion.
- Carved miniatures as compressed ships, or as tether anchors. Rejected: they are training miniatures.
- Severance as the fleet call's cost. Replaced by helm-blindness.
- "That crew didn't return," said of the Bellwether Crow. Repo has: Joffrey brought the survivors home (dossiers/clint.html).
- Saerthe as a pressure valve who breaks the CRC's orb (Korey: "a great scapegoat if I need to alleviate pressure"). Repo has: Saerthe must stay out of the CRC encounter (dossiers/crc.html § Threads; saerthe-abizjn.html § Threads).
- CRC: Large, AC 18, 152 HP, CR 8, Dispel DC 15 as the only counter. Retuned as above.
- CRC stored spell *locate creature* (Claude's call, unchallenged). Repo has it open: *locate creature* or *hold person* (crc.html; BACKLOG).
- CRC first encounter at the Sky Dock or a warded interior. Repo has: the Caelestis main entrance.
- Ryeback's report: "he was told the beholder had been taken care of." Repo has: Tumak told him outright (dossiers/winston-ryeback.html).
- Saerthe's block versions in order: a CR 8 kit (Painted Barrier, Quicksilver Sight, Material Enhancement, Collapse 5/day); CR 11 with Collapse on recharge; a 10-cube pool; 10 cubes per short rest with up to four, then five, per action; four per short rest and eight cubes for a Large Encase. Final as above.
- Saerthe's at-will/day spell lists (*Mislead*, *Wall of Force* 1/day, *Magic Missile* 3/day at 3rd level) gave way to the 10th-level slot list.
- Tarto's builds in order: Champion; Battle Master 11 with five d10 superiority dice; CR 10 with Orders ("Strike!", "Move!", "Hold!", later "There!"), "Eyes on Me!", Take It, Deck Ape and Silhouette Deck; superiority dice plus Clear the Deck as an action; free maneuvers on every hit with no dice; Commander's Strike as a bonus action. Each was replaced by the turn-79 light Battle Master.
- Tarto's items in order: weapon of warning ("too cheesy"); broom of flying (as the pin); Ring of the Ram (offered, not taken); the pin as a fused rare (rod plus rope); winged boots (made the rod and rope redundant); pipes of haunting ("take out pipes"). Final as above.
- Saerthe's items in order: robe of useful items; ring of mind shielding, necklace of adaptation and brooch of shielding (offered). Then cape plus deck.
- Ryeback: a custom hand cannon (1d12+2) with both firearm lines replaced. Then the stolen weapon became the musket and the hand cannon became the Pistol line.
- Dossier tab sets in order: "What it is" → "Who this is" → "Who they are / What they want / What's hidden / How to run them / Stat block" → four tabs with "DM notes". Repo has: About · DM notes · Stat block (docs/PAGE-GUIDE.md § Tabs).

## Open
- What Saerthe's quicksilver eyes do. Claude offered two options: seeing through illusions, or measured sight (exact distance and size). No answer.
- Whether Barrier is a full action or can replace one Multiattack attack. Korey said forming a cube "requires an action" (turn 42), and the turn-43 edit removed it from Multiattack. The block Claude later wrote to the repo (turn 73) puts it back: "He can replace one with Barrier, Encase or a spell."
- Whether a cube has a maximum placement range. Already open in saerthe-abizjn.html.
- Simulation-bleed constraints Claude proposed and Korey never confirmed: the sim builds only from memory, so someone has to have been there; fidelity depends on the rememberer; the object leaves where it was; Saerthe pays a cost. Also open: whether anyone at the Academy knows the bleed is possible.
- Unconfirmed character beats that Claude drafted:
  - Tarto now opens crates herself
  - Tarto hunts the crate's chain of custody (this is on the page under What's hidden; confirm it)
  - Tarto's carved pin names the ship she once commanded
  - the fleet-call ships arrive because their crews choose to come
- Unconfirmed voice lines. Saerthe: "I make talent look good", "Mark. Set. Seal.", "And — gone.", "See? Talent. I only lit it.", "One at a time is plenty for anyone with taste." Tarto: "Move. Now. Think later.", "Huh. Not dead. Keep it that way.", "Intact, not first.", "Lost it. Didn't need it. Next question."
- Whether the crew has a thunder source before the CRC (its vulnerability and its Regeneration shutoff depend on one).
- Clear the Deck: the repo asks what it does, and this chat cut it (see Conflicts).
- Ryeback's Musket line: the repo asks whether to keep it, and this chat dropped it because the musket is the stolen weapon (see Conflicts).
- Whether the custom musket ever comes back (in the chat's version; the repo asks the same about the pistol).
- Content revision pass on spine.html. Korey said it "needs work".
