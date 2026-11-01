# Draft: ship roles

A review of the ship mechanics the table has run, and a proposal for revised roles, for the trek aboard the tyrant ship (V007) and the *Flighty Foundling* after. Proposals throughout; nothing here is ruled yet.

**Sources.**
- `prime/rules/index.html` § Ship & crew.
- The two rules sheets the players were given: `handouts/crew-roles.html` and `handouts/ship-mechanics.html`. These are the most detailed record of what was run.
- `prime/vessels/tyrant-ship.html` and `flighty-foundling.html`.
- `prime/working/BACKLOG.md` (line 1484, the four eyes).
- `voyages/voyage-001/002/006.html` and `prime/campaign/voyages/index.html`.
- `data/player-characters.json`, `prime/crew/*`, and the character sheet PDFs.
- Wildjammer text, Spelljammer Combat Expanded (SCE) v1.6, and Spelljammer Academy (SJA).

---

## 1. What the table runs now

There are two records, and they don't match.

- **Rules page:** Wildjammer bulwark and hull. The Boatswain restores Bulwark at the start of their turn. Takeoff is DC 13. The roles are SJA's: Captain, Shipmate, Gunner, Spelljammer. Role challenges are DC 12, and the crew passes if half succeed.
- **Player sheets:** these mix Wildjammer and SCE. Six roles, each with four ranks (Cadet, Sailor, Officer, Bridge), and ranks rise at story milestones. The sheet says role abilities "add to" your normal actions, but nearly every one costs your action.

Each role as written on the player sheets, at Cadet rank:
- **Spelljammer.** Helm Bond: the ship shares your turn, and you direct its movement *and its weapon fire* without using your actions. Onboard Defense: 1d6 psychic. Shields Up (spend a spell slot): +3 AC.
- **Captain.** Bridge crew can act on the Captain's initiative, in an order the Captain picks. Fire at Will: a Gunner fires with their reaction. Rally: advantage on one roll.
- **Boatswain.** Passive: the ship regains half its maximum Bulwark at the start of your turn. Brace for Impact: one side resists damage. Emergency Repairs (action): 2d10 temporary hit points for the ship.
- **Gunner.** Open Fire (action): d20 + proficiency + Str or Dex. Damage is the weapon's dice only, with no modifier. Class features such as Divine Smite only work from Officer rank.
- **Navigator.** Coordinate Movement, Take Aim, and later Coordinate Attacks.
- **Medical Officer.** Tend to Injuries: 1d6 + Wis temporary hit points. Neutralize Poison. Death saves within 30 ft add 1d4.

**Who holds what.**
- Tumak (rogue/sorcerer) is Captain.
- Bartholomew (Stars druid, Wis +4) is Spelljammer.
- Gregory (abjurer wizard) is Navigator.
- Sol (paladin, Dex +3) is Gunner.
- Casey (warlock) is Bosun.
- Boogie (Divine Soul sorcerer) is Medic.

In Voyage 2, Casey held the guns.

## 2. Diagnosis

**The Boatswain is overtuned.** Restoring half of maximum Bulwark every turn means the enemy must beat that amount every round before Hull takes any damage.
- *Wildjammer sample:* a sloop with 12 Bulwark is up against two medium ballistae (+5 to hit, 2d6). Expected damage is about 7.7 a round. The passive restores 6 a round, so Hull loses about 1.7 a round, and only after about 7 rounds of wearing Bulwark down. Add Emergency Repairs (about 11 temporary hit points per action) and Hull never takes damage.
- *Academy-scale ships:* with 30 Bulwark, the passive restores 15 a round. A squid ship's two ballistae deal about 20 a round, or about 15 against Shields Up. With Emergency Repairs on top, Hull again never takes damage.

**The Gunner is undertuned, for three reasons.**
- *The role overlaps with the helm.* Helm Bond already fires the ship's weapons for free. The Gunner spends an action on something the ship was doing anyway.
- *A crew shot is as good.* Sol fires a ballista at about 55% to hit for 16.5, so about 9.1 expected. An NPC crew shot (+6) is about 9.9. Smite is locked behind a rank he hasn't reached.
- *It has no identity.* The Captain's Fire at Will uses the Gunner's reaction, and in Voyage 2 the Navigator and Casey both fired ballistae. If enemy ships also got the Boatswain's regeneration, his hits simply vanished.

**Other problems.**
- *Medic is weaker than Boogie's own spells.* 1d6 + Wis temporary hit points is worse than any 1st-level heal Boogie casts. In Voyage 2 he tended the bulwark instead.
- *Captain and Navigator overlap.* Both give allies extra attacks or advantage.
- *Ranks gate the useful parts.* Rank ups come at story milestones, so the good abilities show up unevenly.
- *The "adds to your actions" wording contradicts the action costs.* That's why roles felt like an obligation, or felt pointless.

## 3. Proposed core loop

**Ship stats.** Use the official SJA ship stat blocks as written, so no conversion to a separate ship scale.
- Hull = the stat block's hit points.
- Drop damage threshold. **Bulwark = 2 × the old threshold.** That gives the hammerhead 30, a squid ship 30, and the tyrant ship 40.

**A round of ship combat.**
1. **Side initiative.** This is the DMG variant, and SJA uses it for its ship fight. The Captain rolls d20 + Cha or Wis for the crew. The enemy leader rolls for the other side.
2. **The crew's turn.** Players act in any order the Captain calls.
   - Each character gets **one action: a role action or their own action, never both.** Movement, bonus actions and reactions work as normal.
   - The Spelljammer moves the ship at any point in the turn, at no cost.
   - **The NPC crew fires one crewed weapon** using the weapon's listed bonus. Every other weapon fires only when a PC fires it.
3. **The enemy's turn.** Same structure. The crew fires one weapon, and each enemy officer may fire one.
4. **Check for a break.** An NPC ship breaks when any of these happens:
   - its Hull drops to half or less;
   - two of its parts are disabled;
   - its leader falls.

   A broken ship flees, surrenders, or makes a desperate attempt to board. This generalises SJA's "retreats at 100 hit points".

**Damage.**
- Ship weapons hit Bulwark first, then Hull.
- Characters' own attacks and spells can hit the hull, but at this scale they barely matter. They are better used on crew and officers. SCE's area-of-effect table sets how many crew an area spell hits.
- Ships are immune to poison and psychic damage.
- **A critical hit** doubles the dice and also rolls on SCE's d6 Mishap table.

**After the fight.**
- **Bulwark refills to full** after 10 minutes.
- **Hull damage stays** until the Boatswain repairs it.
- A ship at 0 Hull is dead in space but not destroyed, as in Wildjammer.

**Weapons.**
- A weapon fires once per turn.
- It needs its full crew to fire, whoever aims it. On an open deck, killing crew silences guns.

**Roles.**
- Roles are fixed for the whole fight.
- If a role's holder is down, anyone may take the seat as an action.
- A character who boards another ship leaves their role until they come back.

**Hazards.** Keep the current role challenges: DC 12–13, and the crew passes if half succeed. The Navigator can grant one reroll per hazard.

## 4. Proposed roles

All roles follow the same template: one job, one passive, two or three actions, and at most one reaction.

### Captain (Tumak, uses Cha or Wis)
**Job:** controls the order of the crew's turn and gives one crew member a second action.
- **Passive, Command.** Rolls the side's initiative with Cha or Wis, and calls the order.
- **Order (action).** One ally who can hear you uses their reaction to take one of their role actions, make one attack, or cast a cantrip.
- **Grapple (action).** Use this when your ship is within 5 ft of an enemy ship. Contested Cha (Intimidation or Persuasion) against the enemy captain, or DC 12 if they have none. On a success, both ships are locked together at half speed, and boarders cross as part of their movement.
- **Why take it:** at ship range, Tumak's psychic blade often can't reach. Order hands Sol or Gregory a second role action worth about 10–20 damage, or the equivalent.
- **Scaling:** 5, Order two allies once per short rest. 10, advantage on side initiative. 15, allies you Order add your Cha modifier to that roll.

### Spelljammer (Bartholomew, uses his spellcasting ability)
**Job:** puts the ship where the fight is won.
- **Passive, Helm.** Moves and turns the ship for free. Senses everything on and around the ship. Takeoff is DC 13. Must stay at the helm.
- **Shields Up (action, spend a spell slot).** +3 AC, plus 1 per slot level above 1st, until your next turn. Against a +6 weapon, AC 15 → 18 cuts hits from 60% to 45%, so incoming damage drops by about a quarter.
- **Jink (action, no slot).** The first ship weapon attack against your ship before your next turn has disadvantage.
- **Onboard Defense (action).** A creature aboard your ship makes a Wis save against your spell DC (12) or takes 1d6 psychic and has disadvantage on its next attack or save.
- **Positioning:** close to within 60 ft and the enemy's mangonel can't fire, since it can't hit anything that close.
- **Scaling:** 5, Onboard Defense deals 2d6. 10, one Shields Up per fight costs no slot. 15, Jink covers every attack from one ship.

### Navigator (Gregory, uses Int or Wis)
**Job:** reads the fight and the terrain so everyone else's rolls land.
- **Passive, Plot.** Once per hazard, reroll one failed check made by anyone.
- **Read the Line (action).** Pick one enemy ship or creature you can see. Your side's ship weapon attacks against it have advantage until your next turn. That takes a +5 attack against AC 15 from 55% to 80%, worth about 10 extra damage a round across three guns.
- **Find Cover (action).** DC 13 Int (Arcana) or Wis (Survival). Name a feature, such as a rock, a cloud or glare. On a success, the ship has half cover (+2 AC) against one enemy ship until the end of your next turn.
- **Why take it:** Gregory's cantrips do almost nothing to a ship.
- **Scaling:** 5, Find Cover needs no check. 10, Read the Line as a bonus action. 15, two targets.

### Gunner (Sol, uses Str or Dex)
**Job:** takes the enemy ship apart.
- **Passive, Gun Captain.** When you fire a ship weapon, add proficiency + Str or Dex to hit, and add your modifier to damage. Weapon-attack class features apply from level 1, as Wildjammer recommends: Divine Smite now, and Extra Attack later, which lets you fire a second weapon.
- **Fire (action).** One attack with a crewed weapon. A ballista does 3d10 + 3, about 19.5, so about 10.7 expected. Smite adds 2d8.
- **Called Shot (action).** A normal attack roll that deals no damage. Instead, on a hit:
  - *Weapon:* that weapon is disabled until someone repairs it (an action, DC 13).
  - *Rigging or fins:* the ship's speed is halved and it can turn no more than 45° until repaired.
  - *Crew (open decks only):* 1d4 + proficiency crew drop.
- **Why take it:** silencing a ballista takes away about 10 incoming damage per round for the rest of the fight. Sol has no better option at range.
- **Scaling:** 5, nothing new; Extra Attack covers it. 10, Called Shot also deals half damage. 15, ship weapon attacks crit on 19–20.

### Boatswain (Casey, uses Str, Dex, or Int with tools)
**Job:** keeps the ship in the fight.
- **Resource.** 4 Patch dice (d10) per long rest.
- **Passive, Upkeep.** Once per day out of combat, DC 15: repair 10 × proficiency Hull, or half that on a failure. This is Wildjammer's rule. Only the Boatswain repairs Hull.
- **Patch (action).** Restore 1d10 + proficiency Bulwark, and add any Patch dice you choose to spend. It never goes above maximum and never repairs Hull.
- **Fix It Up (action).** DC 13: repair a disabled part, or end a Mishap.
- **Brace (reaction).** When the ship takes damage, spend a Patch die and reduce the damage by the roll + proficiency.
- **The fix in numbers:** at-will Patch averages about 7.5 a round, against about 20–25 incoming. Over a fight the dice add about 30 in total. The Boatswain cuts Hull damage by roughly a third rather than to nothing.
- **Why take it:** Patch averages about 7.5, against about 5.5 expected from Casey's Eldritch Blast. That's a real choice. Brace leaves his action free.
- **Scaling (your example):** Patch rolls one more d10 at 5, 10 and 15.

### Medic (Boogie, uses Wis or Cha)
**Job:** keeps officers and crew working.
- **Resource.** 4 medical dice (d8) per long rest. This reskins Wildjammer's sickbay.
- **Passive, Vigil.** Death saves within 30 ft add 1d4.
- **Triage (action).** A creature within 5 ft spends a medical die and regains the roll + proficiency + your modifier, about 10.5 hit points. It also ends one of: poisoned, frightened, or a latched wisp. Stabilising someone needs no die.
- **Muster (action).** 1d4 + proficiency downed crew stand up with 4 hit points. This ends the Unconscious Crew mishap, and a weapon that was short of crew can fire again.
- **Why take it:** Triage needs no spell slot and outheals a 1st-level Cure Wounds (about 7.5).
- **Honest limit:** in a pure ship-to-ship fight on the enclosed tyrant ship, the Medic has little to do. The role matters most when someone boards.
- **Scaling:** 5, one more medical die. 10, Triage reaches 30 ft. 15, Triage heals two creatures.

**Merged away:** SJA's Shipmate role becomes Boatswain and Gunner. Retire the four ranks.

## 5. Typical ship vs the tyrant ship

**Flighty Foundling (open deck).** The rules in section 3 apply unchanged.
- Enemy crew and officers are visible targets for characters acting as themselves. Losing crew silences guns.
- Boarding: the Captain grapples, and boarders cross.
- A boarded enemy ship fires only its crew weapon, as in SJA.
- Most turns are a real choice between role and character.

**Tyrant ship (enclosed).** It has no NPC crew weapon, so all of its firepower comes from the PCs.
- Each station sees through its eye. A character at a station may cast their own spells through the eye.
- Each eye gives the role at that station one extra option, and the character keeps their role. *This mapping is a proposal for the open decision on the four eyes:*
  - **Gun eye → Gunner.** The fourth eye, which is unnamed. Default: Disintegration, used like a ballista: 3d10 force, 120/480 ft, with no loading crew. The alternative is Enervation.
  - **Telekinesis → Boatswain.** Haul (action): end a ship grapple, or move a creature on or beside the hull 30 ft (Str save against 8 + proficiency + modifier).
  - **Fear → Captain.** Dread (action): the enemy crew makes one Wis save at +4. On a failure, 1d4 + 1 crew are frightened, so their guns may be short of crew.
  - **Slowing → Navigator.** Slow (action): one ship within 120 ft moves at half speed and turns no more than 45° until the end of its next turn.
- **Default timing:** Gun and Telekinesis work from day one. Fear wakes on crossing entry 7. Slowing comes later, through repair or at H'Catha.
- **Under the Pact:** the eye matching the hour goes dead. Its station loses that one option and keeps the role.
- **Ship stats:** AC 17, Hull 300, Bulwark 40.

**Boarding the tyrant ship.**
- The only way in is the Cargo intake. Boarders climb the shaft and cross the gravity plane: DC 12 Dex (Acrobatics) or fall prone.
- *Proposal:* the Boatswain works the expulsion from the Command Deck. Once per fight, creatures in the Cargo Deck make a DC 13 Str save or are blown out of the intake.
- Wisps, if kept, harass boarders and crew alike. Nothing aboard puts out a fire.
- Every PC who leaves a station to fight leaves an eye unused, so the ship stops fighting the other ship. That trade-off drives the boarding scene.

## 6. Worked example round (level 4)

The tyrant ship meets a raider squid ship: AC 15, Hull 300, Bulwark 30, two ballistae and a mangonel. Gun and Telekinesis eyes are working.

- **Initiative.** Tumak rolls 15 + 4 against the raiders' 11, so the crew goes first.
- **Bartholomew (Spelljammer).** Closes to 50 ft, inside the mangonel's 60-ft minimum, at no cost. Shields Up with a 1st-level slot: AC 20.
- **Gregory (Navigator).** Read the Line on the squid ship.
- **Sol (Gunner, gun eye).** Called Shot on the port ballista. He rolls with advantage, about 80%, and hits. The ballista is disabled.
- **Tumak (Captain).** Orders Gregory, who uses his reaction for Find Cover. He has +6 against DC 13 and succeeds. A drifting rock gives +2 AC, for AC 22.
- **Boogie.** Nobody is hurt, so he acts as himself and casts Bless.
- **Casey.** Bulwark is full, so he acts as himself: Eldritch Blast through his eye at the officer on the starboard ballista.
- **Raiders' turn.**
  - The mangonel can't fire because the ships are too close.
  - The starboard ballista needs a 16 and hits for 18. Casey Braces: 1d10 + 2 = 7, so 11 goes to Bulwark (40 → 29).
  - Their officer starts repairing the port ballista. Their helm pulls away to bring the mangonel back into range.
- **What comes next.** If they grapple and board through the intake, Boogie's Triage and Muster and Bartholomew's Onboard Defense become the main tools.

## 7. Open questions for you

1. **Scale.** Official SJA Hull numbers, with Bulwark = 2 × the old damage threshold? *Default: yes.*
2. **Crew fire.** On typical ships, does the crew fire one weapon a round on its own, with PCs firing the rest? *Default: yes.*
3. **The fourth eye.** *Default: Disintegration as the gun eye. Gun and Telekinesis work from the start, Fear wakes on entry 7, and Slowing comes later.* This also settles the player ship sheet. The V007 runsheet still lists three cannons with two active.
4. **Brace as a reaction.** It lets Casey act as himself and still protect the ship. *Default: keep it, limited by the dice.*
5. **Side initiative for ship fights.** *Default: yes. It replaces individual initiative and the Captain's initiative-merging rule.*
6. **Scaling.** *Default: write the 5/10/15 steps and apply each one as the party reaches it. Retire the four ranks; Sailor and Officer stay only as clearance titles.*
7. **The expulsion as a once-per-fight defence against boarders.** *Default: yes, and the Boatswain works it.*

**Pages to update if you adopt this:** the two player handouts, `handouts/crew-roles.html` and `handouts/ship-mechanics.html`, and `prime/rules/index.html` § Ship & crew.

**Assumptions:**
- Ability modifiers come from the character sheet PDFs with proficiency +2. They may predate level 4.
- Enemy numbers use the SJA squid ship.
- The pacing goal (about 3–4 rounds to break the enemy, about 20–40 Hull lost per fight) is my target, not something you've ruled.

## Promotes to

- prime/rules/index.html § Ship & crew.
- handouts/crew-roles.html and handouts/ship-mechanics.html (player rules sheets).
- prime/vessels/tyrant-ship.html (the four eyes, the player ship sheet) and prime/vessels/flighty-foundling.html.

## Open

- The seven questions in section 7.
