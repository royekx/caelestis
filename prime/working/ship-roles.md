# Draft: ship roles

This is a review of the ship rules the table has run, and a proposal for revised roles. It covers the trek to H'Catha aboard the tyrant ship (V007) and later fights on the *Flighty Foundling*. It is designed from the typical, open-deck ship first; the tyrant ship is treated as the exception. Third draft, revised with Korey's feedback.

**Ruled (Korey, on earlier drafts):**
- Official SJA ship stats: Hull is the stat block's hit points, and Bulwark is 2 × the old damage threshold.
- The NPC crew fires one weapon a round, and PCs fire the rest.
- Side initiative. The party chooses its own order within its side's turn.
- Brace stays a reaction, paid for with Patch dice.
- Scaling steps at levels 5, 10 and 15.
- The Boatswain can expel boarders through the Cargo intake once per fight.
- The Spelljammer can cast their own spells at anything they can see on or around the ship.

Everything else is a proposal.

## Does staying put make sense?

Mostly, yes. A ship fight is about choices, not walking, so by default nobody tracks where they stand. Left there, though, it would get static, and the helm would have little to decide. The draft adds two things:

- **Range bands give the helm a real decision every round.** There are three bands: Close, Medium and Long. The band decides which weapons can fire, whether the ships can grapple and board, and whether escape is possible. Each round the Spelljammer chooses to close the range, hold it, or open it.
- **Zones make moving around the ship matter, but only when something happens.** A typical ship has four zones: Helm, Weapon Deck, Below, and Rigging. Nobody tracks zones until a crit, a mishap or boarders mark one. Fixing a marked zone means going there, which costs movement or a turn.

Patching Bulwark works from anywhere. A fire, a hull breach or a jammed gun needs someone in its zone. Movement therefore matters exactly when the moment is dramatic, and there is no task list.

**Sources.**
- Repo:
  - `prime/rules/index.html` § Ship & crew.
  - `handouts/crew-roles.html` and `handouts/ship-mechanics.html`, which are the rules as run.
  - `prime/vessels/tyrant-ship.html` and `prime/vessels/flighty-foundling.html`.
  - `prime/working/BACKLOG.md` § vessels/tyrant-ship.html (which four eyes work).
  - `voyages/voyage-001/002/006.html` and `prime/campaign/voyages/index.html`.
  - `data/player-characters.json`, `prime/crew/*`, and the six character sheet PDFs.
- Rulebooks:
  - *Wildjammer: More Adventures in Space* 1.0: bulwark and hull, bridge crew roles, the daily hull repair check, the *Repair Hull* spell, and the sickbay's medical dice.
  - *Spelljammer Combat Expanded* (SCE) v1.6: officer roles, crew rules, the Mishaps table, berthed repair at 5 hit points an hour for 10 gp, and a 50-point cap on *mending*.
  - *Spelljammer Academy* (SJA): the hammerhead and squid ship stat blocks.
    - Weapon actions: a ballista takes 1 action to load, 1 to aim and 1 to fire. A mangonel takes 2 to load, 2 to aim and 1 to fire.
    - Ranges: a ballista reaches 120/480 ft. A mangonel reaches 200/800 ft and can't hit anything within 60 ft.
- Web, for repair rules elsewhere:
  - [Black Citadel's Spelljammer vehicle guide](https://blackcitadelrpg.com/?p=13283) summarises the Astral Adventurer's Guide. A berthed ship repairs 1 hit point a day for 20 gp, and *mending* repairs 1d8 + modifier once an hour.
  - [Starfinder starship damage and repair, Archives of Nethys](https://www.aonsrd.com/Rules.aspx?ID=200). Ship systems take lasting "critical" conditions that need a check to clear. Hull repair needs a stopped ship at a safe location, and is paid for per point.
  - Ghosts of Saltmarsh, Stars Without Number and Scum and Villainy could not be confirmed from accessible sources, so they are not cited.
- Web, for Critical Role:
  - [CritRoleStats live-tweets of episode 2-100](https://www.critrolestats.com/blog/2020/7/3/livetweets-of-2-100): the Balleater against a dragon turtle.
  - [CritRoleStats monster analysis of Avantika and the Squalleater crew](https://www.critrolestats.com/blog/2018/12/5/monster-analysis-avantika-and-the-squalleater-crew).

---

## 1. What the table runs now

There are two records, and they don't match.

- **Rules page:**
  - Wildjammer bulwark and hull.
  - The Boatswain restores Bulwark at the start of their turn.
  - Takeoff is DC 13.
  - The roles are SJA's: Captain, Shipmate, Gunner and Spelljammer.
  - Role challenges are DC 12, and the crew passes if half succeed.
- **Player handouts:** a mix of Wildjammer and SCE.
  - Six roles, each with four ranks (Cadet, Sailor, Officer, Bridge). Ranks rise at story milestones.
  - The handouts say a role "adds to" your normal actions, but nearly every role ability costs your action.

What each role does on the handouts, at Cadet rank:
- **Spelljammer.**
  - Helm Bond: the ship shares your turn. You direct its movement *and its weapon fire* without spending your own actions.
  - Onboard Defense: 1d6 psychic.
  - Shields Up: spend a slot for +3 AC.
- **Captain.**
  - Bridge crew may act on the Captain's initiative.
  - Fire at Will: a Gunner fires with their reaction.
  - Rally: advantage on one roll.
- **Boatswain.**
  - Passive: the ship regains half its maximum Bulwark each turn.
  - Brace for Impact: one side of the ship resists damage.
  - Emergency Repairs (an action): 2d10 temporary hit points for the ship.
- **Gunner.**
  - Open Fire (an action): d20 + proficiency + Str or Dex.
  - Damage is the weapon's dice only, with no modifier.
  - Class features such as Divine Smite apply only from Officer rank.
- **Navigator.** Coordinate Movement, Take Aim, and later Coordinate Attacks.
- **Medical Officer.**
  - 1d6 + Wis temporary hit points.
  - Neutralize Poison.
  - +1d4 to death saves within 30 ft.

**Who holds what.**
- Tumak (rogue/sorcerer, Cha +4) is Captain.
- Bartholomew (Stars druid, Wis +4) is Spelljammer.
- Gregory (abjurer wizard, Wis +4) is Navigator.
- Sol (paladin, Dex +3, Cha +4) is Gunner.
- Casey (warlock, Dex +3, Cha +4) is Bosun.
- Boogie (Divine Soul sorcerer, Cha +3) is Medic.

In Voyage 2, Casey held the guns.

## 2. Diagnosis

**The Boatswain is overtuned.** It restores half of maximum Bulwark every turn. The enemy has to beat that amount every round before Hull takes any damage.
- *Wildjammer sample:* a sloop has 12 Bulwark. Two medium ballistae deal about 7.7 a round. The passive restores 6, so Hull loses about 1.7 a round, and only after roughly 7 rounds. Add Emergency Repairs (about 11 per action) and Hull takes no damage at all.
- *SJA scale:* with 30 Bulwark, the passive restores 15 a round. A squid ship's two ballistae deal about 20, or about 15 against Shields Up. Again, Hull takes no damage.

**The Gunner is undertuned, for four reasons.**
- *Loading took his turns.* Under SJA a ballista takes three actions per shot and a mangonel five, so whoever loaded spent whole turns on it.
- *He had to walk to each gun.* Moving between weapons was part of the mechanic.
- *The crew already did the job, and did it better.* Helm Bond fires the ship's weapons for free. An NPC crew shot (+6, about 9.9 expected) beats Sol's Open Fire (+5, no damage modifier, about 9.1).
- *Nothing in the role was his own.* The Captain spends his reaction, and anyone can fire a gun.

**Other problems.**
- *Medic is weaker than Boogie's own spells.* 1d6 + Wis temporary hit points loses to any 1st-level heal.
- *Captain and Navigator overlap.* Both hand out extra attacks or advantage.
- *Ranks arrive unevenly.* Because rank depends on story milestones, characters get the useful parts at different times.
- *Roles take your action.* Role abilities compete with a character's own actions, so roles felt like either an obligation or a waste.
- *The helm only moves the ship.* In most fights the ship barely moves unless it is escaping, so the Spelljammer has little to decide.

## 3. What Critical Role did, and what to borrow

**What the sources confirm.** The only ship-versus-threat fight I could confirm in detail is the Balleater against a dragon turtle in episode 2-100, from CritRoleStats' live-tweets.
- **Ship state was one number.** The hull had 500 hit points, a figure Travis proposed at the table. After the turtle's slam the hull had taken 90 damage, and Beau repaired 8 of it mid-fight.
- **The ship was conveyed through narration.** The ship "lurches 45 degrees" when slammed, and the crew is described as "VERY stressed."
- **There was one initiative roll for the ship.** Fjord rolled it against the turtle.
- **Positioning decided which guns could fire.** Mercer noted the ship had to turn before the cannons could fire.
- **Orders gave advantage.** Fjord ordered the starboard cannons loaded and called "Fire at Will," which gave advantage the next round.
- **Named posts, with NPCs filling in.**
  - Fjord took the helm and gave the orders.
  - Veth was Master Gunner over the cannon crews.
  - Yasha manned a cannon.
  - Beau's fan boosted the ship's speed from the bow.
  - NPCs were assigned to a stern cannon.
- **Most PCs used their own spells on the threat.** These included *Whirlpool*, *Control Water*, *Guiding Bolt*, *Fireball*, *Disintegrate* and *Polymorph*.
- **Movement mattered once the ship itself was under attack.** After the escape, characters used *Spider Climb*, *Water Walk* and rope tethers to move around the hull.

**What the sources don't show.**
- The recap shows no ship stat block, no damage threshold and no written crew action rules. The table appears to have improvised in the moment.
- The Squalleater fight (CritRoleStats' monster analysis) took place aboard a single ship, not ship against ship.
- I could not confirm how other Balleater fights were run, or whether a map was used.

**Worth borrowing:**
- *One Hull number, narrated at thresholds.* Describe the ship at three-quarters, half and a quarter Hull: a lurch, a crack, stressed crew.
- *Orders that grant advantage.* These are the Captain's Rally and the Navigator's Read the Line.
- *Positioning that decides which guns can fire.* That is the job of the range bands.
- *NPC crew working the guns while PCs cast their own spells.* That is the "crew fires one weapon" rule, and roles added on top of the turn rather than replacing it.
- *Repair mid-fight, at a cost.* That is the Boatswain's Shore Up, Below.
- *Movement that matters when the ship itself is hit.* That is the zones.

## 4. Proposed core loop

### Turns and initiative
- **Side initiative (ruled).** The Captain rolls d20 + Cha or Wis for the party. The enemy leader rolls for the other side. Within its turn, the party acts in any order and plans together.
- **A role adds to your turn.** Every character keeps a full turn: action, bonus action, movement and reaction. A role gives you:
  - one passive, which is always on;
  - a menu of **bonus actions**;
  - at most one reaction.
- **Roles are optional.** Passives work every turn, so a turn spent on your own bonus action still gets something from the role.
- **Roles are fixed for the fight.** If a role's holder goes down, anyone may take the seat as an action.

### Range bands
The range between two ships is always one of three bands.

| Band | Distance (rough) | What it allows |
|---|---|---|
| **Close** | up to 60 ft | Grapple and boarding are possible. Ballistae and eyes fire normally. Mangonels can't fire. Most character attacks and spells reach. |
| **Medium** | 60–200 ft | Every ship weapon fires normally. Only spells and attacks with a range of 120 ft or more reach. No boarding. |
| **Long** | 200–800 ft | Ballistae and eyes fire at disadvantage, because this is their long range. Mangonels fire normally. Character spells mostly don't reach. Escape is possible. |

- **Each helm shifts the range on its own turn.** It can close it one band, hold it, or open it one band. This is free; it is the Helm passive.
- **Burn** (a Spelljammer bonus action) shifts one more band.
- **A slowed ship can't shift the band or Burn.** A Crippled ship can't Burn.
- Fights usually start at Long or Medium.

### Zones and moving
- **A typical ship has four zones:**
  - **Helm:** the Spelljammer's seat, often inside.
  - **Weapon Deck:** the guns and the rail.
  - **Below:** the hold and the inner hull.
  - **Rigging:** sails, fins and the upper deck.
- **By default, positions are abstract.** The Spelljammer is at the Helm, and everyone else is on the Weapon Deck unless they say otherwise. Every gun is on the Weapon Deck, so nobody walks between guns.
- **An event marks a zone.** These events mark one:
  - a Mishap;
  - fire;
  - boarders at the rail.
- **Fixing a marked zone needs someone in it.** Moving one zone uses your movement. Moving two zones uses your movement and your action (Dash).
- **Patching Bulwark works from anywhere.** Bulwark is the envelope around the ship, so the Boatswain can work it from any zone.

### Weapons
- **The crew keeps every weapon loaded and aimed.** This replaces SJA's load, aim and fire actions.
  - A weapon's crew number now means "needed to keep it loaded."
  - With its full crew, a weapon fires once a round, which matches SJA's rate.
  - Without its full crew, it can't fire.
- **Firing a ship weapon is an action anyone can take.**
  - The attack roll is d20 + proficiency + Str or Dex. A tyrant ship eye may use your spellcasting ability instead.
  - Damage is the weapon's dice, with no modifier. The Gunner adds one.
- **Each weapon fires once a round.**
- **The NPC crew fires one weapon a round** at the weapon's listed bonus. PCs fire the rest.

### Damage
- **Ship weapons hit Bulwark first, then Hull.**
- **Characters' own attacks and spells can hit a hull, but barely matter at this scale.** They are better used on crew and officers. SCE's area table sets how many crew an area spell hits.
- **Ships are immune to poison and psychic damage.**
- **A critical hit** doubles the dice and rolls on the Mishap table below. A mishap lasts until someone fixes it in its zone.
- **At half Hull or less, a ship is Crippled.** Its speed is halved, and it can't Burn.
- **At 0 Hull, a ship is dead in space.** It can't move and can be grappled automatically. It is not destroyed.
- **Role bonuses to the ship's AC stack to +5 at most.** This covers Shields Up and Find Cover.

### Mishaps
This is SCE's d6 Mishap table, with zones added. Fixing a mishap is a Quick Fix, made in its zone.

| d6 | Mishap | Effect | Zone |
|---|---|---|---|
| 1 | Locked Steering | The helm can't shift the range band. | Helm |
| 2 | Helm Disconnection | The ship can't move, shift band or Burn. | Helm |
| 3 | Jammed Weapon | One weapon can't fire. | Weapon Deck |
| 4 | Hull Breach | Bulwark can't be Patched above half. | Below |
| 5 | Fire | The ship takes 1d10 Hull damage at the end of each round. | Below |
| 6 | Torn Rigging | The ship can't Jink or Burn. | Rigging |

### How a fight ends
- **An NPC ship breaks** when any one of these happens:
  - its Hull drops to half or less;
  - two of its parts are disabled or destroyed;
  - its leader falls.
- **A broken ship** flees, surrenders, or makes a desperate attempt to board.
- **Either side can always try to escape.** See section 6, Escape.

## 5. Proposed roles

Each role lists its job, passive, bonus actions, reaction if any, and its numbers at level 4 and level 10. Role numbers tie to proficiency bonus (PB): +2 at level 4, +4 at level 10, +5 at level 15. Level-10 ability modifiers are estimates. The scaling steps come at levels 5, 10 and 15.

### Captain (Tumak, uses Cha or Wis)
**Job:** controls the order of the crew's turn and lifts the crew.
- **Passive, Command.**
  - Rolls the side's initiative with Cha or Wis.
  - Allies who can hear the Captain have advantage on saves against being frightened.
- **Rally (bonus action).** One ally who can hear you gets a Command die. Before your next turn, they add it to one ship roll. Ship rolls are:
  - a ship weapon attack;
  - a role check;
  - a Grapple;
  - an escape check;
  - a save against a ship effect.
- **Order (bonus action).** One ally who can hear you uses their reaction to take one of their role bonus actions.
- **Grapple (action, Close band only).** Make a contested Cha (Intimidation or Persuasion) check against the enemy captain, or against DC 12 if there is none. On a success, the ships lock together. Each moves at half speed, and boarders cross as part of their movement.
- **Numbers:**
  - Level 4: Command die d6. Fear eye DC 14.
  - Level 10: Command die d10. Fear eye DC 17.
- **Steps:** level 5, die becomes d8. Level 10, d10. Level 15, d12, and Rally can target two allies.
- **What it competes with:** Cunning Action, and the Soulknife's bonus-action blade. At Medium or Long range Tumak's thrown blade often has no target, so Rally or Order usually wins. In a deck fight, his own bonus action wins, and he keeps Command either way.

### Spelljammer (Bartholomew, uses his spellcasting ability)
**Job:** chooses the range, and with it what the fight looks like.
- **Passive, Helm.**
  - On its turn, the ship moves and turns for free, and the helm shifts the range band.
  - The Spelljammer senses everything on and around the ship.
  - *(Ruled)* They can cast their own spells at anything they can see on or around the ship.
  - Takeoff is DC 13. The Spelljammer stays at the helm.
- **Shields Up (bonus action, spend a spell slot).** The ship gains +3 AC until your next turn, plus 1 for each slot level above 1st. The +5 cap applies.
- **Jink (bonus action).** The first ship weapon attack against your ship before your next turn has disadvantage.
- **Burn (bonus action).** Shift the range one more band.
- **Onboard Defense (bonus action).** A creature aboard your ship makes a Wis save against your spell DC. On a failure, it takes psychic damage and has disadvantage on its next attack or save.
- **The choice each round:**
  - Close the range to board, or to get under the enemy's mangonels.
  - Hold it to keep every gun firing.
  - Open it toward Long to escape, or to keep boarders off.
- **Numbers:**
  - Level 4: spell DC 12. Onboard Defense 1d6. Jink covers 1 attack. Shields Up gives +3 with a 1st-level slot.
  - Level 10: spell DC 17. Onboard Defense 3d6. Jink covers 2 attacks. Shields Up gives +5 with a 3rd-level slot.
- **Steps:** Onboard Defense gains +1d6 at levels 5, 10 and 15. At level 10, Jink covers 2 attacks. At level 15, one Shields Up per fight costs no slot.
- **What it competes with:** Starry Form. Activating it costs a bonus action, and in Archer form the attack costs one each turn. That's an acceptable trade. The range shift and his ruled spellcasting work either way, and waking Starry Form before initiative softens the cost.

### Navigator (Gregory, uses Int or Wis)
**Job:** reads the fight and the terrain so everyone else's rolls land.
- **Passive, Plot.** Once per hazard, reroll one failed check made by anyone.
- **Read the Line (bonus action).** Pick one ship or creature you can see. Until your next turn, your side's ship weapon attacks against it have advantage.
- **Find Cover (bonus action).**
  - Roll d20 + PB + Int or Wis against DC 13.
  - Name a feature, such as a rock, a cloud or sun glare.
  - On a success, your ship has half cover (+2 AC) against one enemy ship until the end of your next turn.
- **Find the Gap (bonus action).** Your side's next escape check has advantage.
- **Numbers:**
  - Level 4: Find Cover +6 against DC 13. Slowing eye DC 14.
  - Level 10: Find Cover +9. Slowing eye DC 17. Read the Line also scores critical hits on 19–20.
- **Steps:** level 5, Find Cover needs no check. Level 10, critical hits on 19–20. Level 15, two targets.
- **What it competes with:** very little. Gregory has few bonus actions, so the role fills an empty slot.

### Gunner (Sol, uses Str or Dex; Cha at an eye)
**Job:** takes the enemy ship apart.
- **Passive, Gun Captain.**
  - When you fire a ship weapon, add your ability modifier to the damage.
  - Weapon-attack class features apply: Divine Smite works on a ship weapon.
  - Extra Attack lets you fire a second weapon that hasn't fired this round.
- **Aim (bonus action).** Your next ship weapon attack this turn has advantage.
- **Called Shot (bonus action; you add it to a shot).** Declare it before you fire. A hit deals half damage, plus one effect:
  - *Weapon:* that weapon is disabled until fixed.
  - *Rigging or fins:* the target can't Jink or Burn until fixed.
  - *Crew (open decks only):* 1d4 + PB crew drop.
- **Quick Load (bonus action, PB uses per long rest).** Fire the weapon you just fired once more this round. This is the one exception to "once a round."
- **Numbers:**
  - Level 4: ballista +5 to hit, 3d10 + 3 (about 19.5 on a hit). Aim takes the hit chance against AC 15 from 55% to 80%. Quick Load 2 per long rest.
  - Level 10: +8 to hit, +4 damage, and two shots through Extra Attack. Quick Load 4 per long rest. Called Shot deals full damage.
- **Steps:** level 5, none, since Extra Attack arrives. Level 10, Called Shot deals full damage. Level 15, ship weapons score critical hits on 19–20.
- **What it competes with:** under 2024 rules, Divine Smite is a bonus-action spell, so Sol chooses each turn between smite (more damage) and Called Shot (take a part out). Under 2014 rules, smite costs no action on a hit.

### Boatswain (Casey, uses Str, Dex, or Int with tools)
**Job:** keeps the ship in the fight.
- **Resource.** PB + 2 Patch dice (d10s), refreshed on a long rest.
- **Passive, Upkeep.** Once a day, out of combat, the field repair in section 6. Only the Boatswain repairs Hull.
- **Patch (bonus action, works from any zone).**
  - Restore 1d10 + PB Bulwark.
  - You may spend Patch dice to add them to the roll.
  - Patch never takes Bulwark above its maximum, and never repairs Hull.
- **Quick Fix (bonus action, in the marked zone).**
  - Make a DC 13 check to end a mishap or repair a disabled part.
  - You may add a Patch die to the check.
  - Anyone else in the zone can make the same check as an action.
- **Brace (reaction, ruled).** When the ship takes damage, spend a Patch die. Reduce the damage by the roll + PB.
- **Shore Up (action, Below only, once per fight, spends 1 Supply).** Restore 2d10 + PB Hull. This counts toward the three-quarter cap in section 6. It is the reason to go below decks mid-fight.
- **Expel (action, tyrant ship, once per fight, ruled).** Work the expulsion from the Command Deck. Creatures in the Cargo Deck make a DC 13 Str save or are blown out through the intake.
- **Numbers:**
  - Level 4: Patch 1d10 + 2 (about 7.5). 4 Patch dice. Brace about 7.5. Shore Up about 13.
  - Level 10: Patch 3d10 + 4 (about 20.5). 6 Patch dice. Brace about 9.5. Shore Up about 15.
- **Steps (Korey's example):** Patch rolls one more d10 at levels 5, 10 and 15.
- **Check against incoming damage:**
  - Level 4: the ship takes about 20–25 a round, and Patch plus Brace cover about a third.
  - Level 10: about 50–60 a round, and Patch still covers about a third.
  - Patch can't go above Bulwark's maximum, so some damage always reaches Hull.
- **What it competes with:** *Hex* and *Misty Step*. When Bulwark is full, Casey spends his bonus action on himself, and Brace still guards the ship.

### Medic (Boogie, uses Wis or Cha)
**Job:** keeps officers and crew working.
- **Resource.** PB + 2 medical dice (d8s), refreshed on a long rest. This reskins Wildjammer's sickbay.
- **Passive, Vigil.** Death saves within 30 ft add 1d4.
- **Triage (bonus action).** Spend a medical die on a creature within 5 ft.
  - They regain the roll + PB + your modifier in hit points.
  - It also ends one of: poisoned, frightened, or a latched wisp.
  - Stabilising someone at 0 needs no die.
- **Muster (bonus action, in the zone where the crew fell).** 1d4 + PB downed crew get back up with 4 hit points. A weapon that was short of crew can fire again.
- **Numbers:**
  - Level 4: Triage 1d8 + 5 (about 9.5). 4 medical dice. Muster 1d4 + 2.
  - Level 10: Triage 2d8 + 8 (about 17). 6 medical dice. Muster 1d4 + 4.
- **Steps:** level 5, one more medical die. Level 10, Triage heals 2d8. Level 15, Triage heals two creatures.
- **What it competes with:** *Healing Word* and Quickened Spell. Triage saves Boogie his slots and sorcery points.
- **Honest limit:** the Medic matters most during boarding, at Close range, and when crits hurt the crew.

## 6. Damage that lasts, repair, and escape

**The pattern elsewhere.**
- **The buffer recovers fast.** Examples are Wildjammer's Bulwark and Starfinder's shields.
- **Hull recovers slowly, and costs money.**
  - Wildjammer: one repair check a day.
  - Astral Adventurer's Guide: 1 hit point a day at a berth, for 20 gp each.
  - SCE: 5 hit points an hour at a berth, for 10 gp.
  - Starfinder: a stopped ship at a safe location, paid for per point.
- **Starfinder also gives systems lasting conditions that need a check to clear.**

The proposal follows that pattern, adding one resource and one cap.

**Bulwark recovers in the field.** It refills to full 10 minutes after a fight.

**Hull recovers only a little in the field.**
- **Upkeep (once a day).**
  - The Boatswain makes a DC 15 check (Str, Dex, or Int with tools) and spends 1 Supply.
  - On a success, the ship restores 2d10 + PB Hull. On a failure, it restores half that.
  - That is about 13 Hull at level 4, and about 15 at level 10.
- **Field repairs stop at three-quarters of maximum Hull.** This cap covers Upkeep, Shore Up and repair spells. The last quarter needs a dock, so every fight leaves a mark.
- **Supplies** are cargo, bought at port for 25 gp each. That roughly matches SCE's 2 gp per hit point.
  - Default: the tyrant ship carries 6 Supplies, and the hammerhead carries 10.
  - With no Supplies left, field repairs can't restore Hull.

**Docks.**
- Hull repair costs 10 gp per point, and a dock restores 50 points a day.
- A destroyed part is replaced at its cost (ballista 50 gp, mangonel 100 gp), plus 1 day.

**Mending and other spells (default).**
- ***Mending*** (1 minute, out of combat) repairs one disabled part. It restores neither Hull nor Bulwark, and it can't fix a destroyed part.
- **A spell of 3rd level or higher that works the ship's material** uses Wildjammer's *Repair Hull*. Examples are *Fabricate*, and *Stone Shape* on the tyrant ship.
  - It takes 10 minutes.
  - It restores 2d8 Hull, plus 1d8 for each slot level above 3rd.
  - It works once a day per ship, under the cap.
- **Healing spells don't repair ships.**

**What a fight costs at level 4.** Expect about 20–50 Hull per fight.
- A 300-Hull ship that loses 75 or more carries the scar until it docks.
- On the 14-day crossing, the tyrant ship's 6 Supplies cover about 78 Hull.

**Escape (always available).**
- **It starts at Long range.** Only from Long, the fleeing Spelljammer spends their action on a spellcasting check, contested by the pursuing Spelljammer.
- **Speed matters.** The fleeing side gets +2 for each 5 ft its ship is faster, and −2 for each 5 ft it is slower. The tyrant ship (40 ft) gets +4 against a squid ship (30 ft).
- **Advantage** comes from Find the Gap, or from a pursuer that is slowed or Crippled.
- **Two wins, consecutive or not, and the ship is gone.** The fight ends.
- **Wins are kept if the range closes.** If the pursuer closes to Medium, the wins stand, but no check can be made until the ship is back at Long.
- **Broken NPC ships use the same rule.**

## 7. Typical ship and the tyrant ship

### Flighty Foundling (the typical ship)
The rules above apply unchanged.
- **Stats:** AC 15, Hull 400, Bulwark 30, speed 35, crew 15.
- **Weapons:** a ballista and two mangonels, on rotating mounts.
- **Zones:** Helm, Weapon Deck, Below, and Rigging.
- **Who does what.** The crew fires one weapon, and PCs fire the other two. The rest act as themselves against visible crew and officers. Losing crew silences guns.
- **Boarding.** It happens at Close range: the Captain grapples, then boarders cross.
  - A boarded ship fires only its crew weapon, as in SJA.
  - Boarders at the rail mark the Weapon Deck.
  - A PC who boards the enemy leaves their role until they come back.

### Tyrant ship (the exception)
- **Stats:** AC 17, Hull 300, Bulwark 40, speed 40.
- **Settled on the vessel page:**
  - It has ten great eyes. Four answer at crew stations around the helm on the Command Deck.
  - Under the Pact at H'Catha, the eye matching the hour goes dead.
- **This proposal:**
  - All four eyes work from the start. Fear's draft timing (waking on crossing entry 7) sat under "Still to decide," so it drops.
  - The ship has no NPC-crewed weapon. The eyes are its weapons, and they need no crew.
  - Each station sees through its eye, and a character at a station may cast their own spells through it.
  - Using an eye takes the station holder's action. Their role's bonus actions stay available.
  - An NPC such as Ryeback can hold an empty station, at +4 to hit or DC 12.
  - DCs are 8 + PB + the holder's modifier.
- **Range.** The eyes reach 120 ft, so they work at Close and Medium. The Disintegration eye also reaches Long, at disadvantage.
- **Zones:**
  - **Command Deck:** the helm and all four stations. Everyone starts here.
  - **Shaft and gravity plane.**
  - **Hollow Deck:** the ship's repair and maintenance deck. Hull Breach and Fire land here, and Shore Up is worked here.
  - **Cargo Deck:** the intake, and the only way in.
- **Getting down.** The Hollow Deck and the Cargo Deck are two zones from the Command Deck, so reaching either costs movement and an action. Crossing the gravity plane takes a DC 12 Dex (Acrobatics) check, or the character falls prone.

**The four eyes** (proposal for the open "which four eyes work" decision):
1. **Disintegration (gun eye) → Gunner's station.**
   - A ship weapon: 120/480 ft, 4d10 force. That's one die above a ballista, because it is the ship's only gun.
   - A Called Shot through it **destroys** the part, which then needs a dock.
   - A creature it drops to 0 turns to dust. That's flavour only.
   - At level 4, Sol (Cha +4) is +6 to hit for 4d10 + 4, about 26 on a hit.
2. **Telekinesis → Boatswain's station.**
   - It can end any ship grapple automatically, or seize an enemy grappling line.
   - Or it targets one creature or object within 120 ft. A creature makes a Str save or is moved 30 ft, for example pulled off the hull. An object up to 300 lb is moved 30 ft.
   - DC 13 at level 4.
3. **Fear → Captain's station.**
   - It targets one ship. The crew make one Wis save at +4. On a failure, 1d4 + PB crew are frightened until the end of their next turn and can't work weapons.
   - Or it targets one officer: Wis save, or frightened for 1 minute. The officer repeats the save each turn.
   - DC 14 at level 4.
4. **Slowing → Navigator's station.**
   - It targets one ship. Its Spelljammer makes a Wis save. On a failure, until the end of its next turn the ship moves at half speed, can't shift the range band, and can't Jink or Burn.
   - Your side's escape checks against a slowed ship have advantage.
   - DC 14 at level 4.

**Stations.**
- The Medic and the Spelljammer hold no eye.
- Under the Pact, a dead eye's station loses that eye, but the holder keeps their role.
- An eye can be disabled, and fixed with Quick Fix at its station. A destroyed eye has no ready replacement, which is a possible hook at H'Catha.

**Boarding the tyrant ship.**
- **Boarders must be at Close range and come in through the Cargo intake.** The intake is a chokepoint: up the shaft, across the gravity plane, then into the Command Deck.
- **Expel** clears the Cargo Deck once per fight.
- **Wisps, if kept,** harass boarders and crew alike. Nothing aboard puts out a fire.
- **Leaving a station silences its eye.** Every PC who goes down to fight leaves an eye unused, unless an NPC takes the station.

## 8. Worked example round (level 4)

**The setup.** The tyrant ship meets a raider squid ship at Long range.
- **Raider stats:** AC 15, Hull 300, Bulwark 30, speed 30, crew 13.
- **Raider weapons:** two ballistae (+6, 3d10, crew 3 each) and a mangonel (+5, 5d10, crew 5).
- **Raider officers:** two officers and a leader.

**Initiative.** Tumak rolls 15 + 4 = 19, against the raiders' 12. The party goes first and plans its order.

**The party's turn.**
- **Bartholomew (Spelljammer).** Closes the range to Medium for free, bringing all four eyes into range.
  - His bonus action is Shields Up with a 1st-level slot, for AC 20.
  - His action is his own: *Moonbeam* on the starboard ballista's crew, which the ruled helm sight allows. It hits one crew member.
- **Tumak (Captain).** His action is the Fear eye on the crew.
  - The crew roll +4 against DC 14 and fail. 1d4 + 2 = 5 crew are frightened.
  - Of the 8 crew still working, 6 keep the ballistae loaded and 2 remain. The mangonel needs 5, so it goes silent.
  - His bonus action is Rally, giving Sol a d6.
- **Gregory (Navigator).** His bonus action is Read the Line on the squid ship.
  - His action is the Slowing eye, at DC 14. Their Spelljammer fails, so the raiders can't shift the range or Burn next turn.
- **Sol (Gunner).** His action fires the Disintegration eye at the port ballista, with a Called Shot as his bonus action.
  - He rolls +6 with advantage, plus the d6, and hits.
  - The port ballista is destroyed. Half damage (13) strips the raiders' Bulwark from 30 to 17.
- **Casey (Boatswain).** Bulwark is full, so he acts as himself.
  - His bonus action is *Hex* on the leader, and his action is *Eldritch Blast* through the Telekinesis eye.
  - His reaction stays ready for Brace.
- **Boogie (Medic).** Nobody is hurt, so his action is *Bless* on Sol, Gregory and Tumak.

**The raiders' turn.**
- **Their crew fires the starboard ballista,** and rolls a natural 20.
  - The crit doubles the dice, for 33.
  - Casey Braces: 1d10 + 2 = 8. That leaves 25 for Bulwark, taking it from 40 to 15.
- **Mishap roll: 4, Hull Breach.** The Hollow Deck is marked, and Bulwark can't be Patched above half (20) until it's fixed.
- **The slowed raiders can't shift the range.** They stay at Medium. An officer gets the frightened crew back to work for next round.

**Round 2: the choices.**
- **Casey goes below.** He takes movement and an action down the shaft to the Hollow Deck. Next turn he makes a Quick Fix on the breach, and can Shore Up while he's there.
- **Bartholomew decides the range.** Closing to Close silences both sides' mangonels and invites boarding through the intake. Holding at Medium keeps the eyes firing while the raiders stay slowed.
- **Boogie gets work.** A kept wisp latches onto Gregory, and Boogie Triages for 1d8 + 5, which ends the latch.
- **The raiders are one part from breaking.**

## 9. Open questions for Korey

1. **Band distances.** Close up to 60 ft, Medium 60–200 ft, Long 200–800 ft. *Default: yes.* The alternative is to name the bands without distances, in theatre of mind.
2. **Zones.** Four zones on a typical ship, and four on the tyrant ship: Command Deck, Shaft, Hollow Deck and Cargo Deck. *Default: yes.*
3. **Shore Up.** Once per fight, Below, 2d10 + PB Hull for 1 Supply. *Default: yes.* The alternative is to keep Hull unrepairable in combat.
4. **Eye assignments.** Fear goes to the Captain and Telekinesis to the Boatswain. *Default: yes.* The alternative is to swap them, putting the grapple eye with the Captain.
5. **Disintegration.** 4d10 force, and a Called Shot through it destroys the part. *Default: yes.* The alternative is 3d10, the same as a ballista.
6. **Field repair cap and Supplies.** Field repairs stop at three-quarters of maximum Hull, and the tyrant ship carries 6 Supplies. *Default: yes.*
7. **Docks.** 10 gp per Hull point, 50 points a day. *Default: yes.* Repairs at H'Catha could cost more.
8. **Encounter budget.** Roles now add to every turn, so build enemy ships about 1.5 times SJA's strength. *Default: yes.*
9. **Rules edition for bonus actions** such as Divine Smite: 2014 or 2024? *Default: whichever edition the table already uses for Sol.*

**Pages to update once ruled:**
- `handouts/crew-roles.html`
- `handouts/ship-mechanics.html`
- `prime/rules/index.html` § Ship & crew
- `prime/vessels/tyrant-ship.html` § Still to decide
- the V007 runsheet, which still has three cannons with two active

**Assumptions:**
- Ability modifiers come from the character sheet PDFs, with PB +2. They may predate level 4.
- Level-10 modifiers are estimates.
- Enemy numbers use the SJA squid ship.
- The pacing goals are targets, not rulings: 3–4 rounds to break an enemy, and 20–50 Hull lost per fight.
- The Critical Role findings come from one episode recap. They don't show Mercer's method in general.

## Promotes to

- prime/rules/index.html § Ship & crew.
- handouts/crew-roles.html and handouts/ship-mechanics.html (player rules sheets).
- prime/vessels/tyrant-ship.html (the four eyes, the player ship sheet) and prime/vessels/flighty-foundling.html.
- The V007 runsheet.

## Open

- The nine questions in section 9.
