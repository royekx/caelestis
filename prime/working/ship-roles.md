# Draft: ship roles

This is a review of the ship rules the table has run, and a proposal for revised roles. It covers the trek to H'Catha aboard the tyrant ship (V007) and later fights on the *Flighty Foundling*. It is designed from the typical, open-deck ship first; the tyrant ship is the exception. Fourth draft.

**Ruled (Korey):** everything in this draft, including the defaults in section 9 (approved 2026-11-01). Earlier rulings:
- **Ship stats.** Use the official SJA stats. Hull is the stat block's hit points, and Bulwark is 2 × the old damage threshold.
- **Roles add to a turn.** A role adds to a character's full turn: a passive, a bonus-action menu, and at most one reaction.
- **Weapons.**
  - Firing a ship weapon is an action anyone can take.
  - Weapon position is abstract, and the crew keeps every weapon loaded.
  - The NPC crew fires one weapon a round, and PCs fire the rest.
- **Side initiative.** The party chooses its own order within its side's turn.
- **Spelljammer casting.** The Spelljammer can cast their own spells at anything they can see on or around the ship.
- **Range bands and zones.** Close, Medium and Long bands; four zones per ship.
- **Combat role rules.**
  - Brace is a reaction, paid for with Patch dice.
  - Role bonuses to the ship's AC cap at +5.
  - The Boatswain can Shore Up once per fight, Below.
  - The Boatswain can expel boarders through the Cargo intake once per fight.
- **The four eyes.** Their assignments: Disintegration to the Gunner, Telekinesis to the Boatswain, Fear to the Captain, Slowing to the Navigator. All four work from the start, and a Called Shot through Disintegration destroys the part.
- **Scaling.** Role numbers tie to proficiency bonus, with steps at levels 5, 10 and 15.
- **Ports.** 10 gp per Hull point, and 50 points a day.
- **Encounter budget.** Build enemy ships at about 1.5 times SJA's strength.
- **Rules edition.** For bonus-action spells such as Divine Smite, the table uses whatever edition it already uses for Sol.

Everything else here is a proposal.

## Does staying put make sense?

Mostly, yes. A ship fight is about choices, not walking, so by default nobody tracks where they stand. Two things keep it from going static:

- **Range bands give the helm a real decision every round.** The bands are Close, Medium and Long. They decide which weapons fire, whether the ships can grapple and board, and whether escape is possible. Each round the Spelljammer chooses to close the range, hold it, or open it.
- **Zones make moving around the ship matter, but only when something happens.** A typical ship has four zones: Helm, Weapon Deck, Below and Rigging. Nobody tracks them until a mishap or boarders mark one. Fixing a marked zone means going there, which costs movement or a turn.

From this draft, heavy Hull hits also start mishaps, not only crits. That keeps the Boatswain moving once Bulwark is gone.

**Sources.**
- **Repo:**
  - `prime/rules/index.html` § Ship & crew.
  - `handouts/crew-roles.html` and `handouts/ship-mechanics.html`, the rules as run.
  - `prime/vessels/tyrant-ship.html` and `prime/vessels/flighty-foundling.html`.
  - `prime/working/BACKLOG.md` § vessels/tyrant-ship.html.
  - `voyages/voyage-001/002/006.html` and `prime/campaign/voyages/index.html`.
  - `data/player-characters.json`, `prime/crew/*`, and the six character sheet PDFs.
- **Rulebooks:**
  - *Wildjammer: More Adventures in Space* 1.0: bulwark and hull; bridge crew roles; the daily hull repair check; the *Repair Hull* spell; the sickbay's medical dice.
  - *Wildjammer*'s "Outside of an Air Bubble" rule: 1 minute of fresh air, then 1 minute of fouled air, then the creature holds its breath. Also its rule that a ship at 0 hull points can't move and is destroyed only by a focused effort outside combat.
  - *Spelljammer Combat Expanded* (SCE) v1.6: officer roles; crew rules; the Mishaps table, which SCE triggers on damage of at least twice the damage threshold; berthed repair at 5 hit points an hour for 10 gp.
  - *Spelljammer Academy* (SJA): the hammerhead and squid ship stat blocks.
    - Weapon actions: a ballista takes 1 action to load, 1 to aim and 1 to fire. A mangonel takes 2 to load, 2 to aim and 1 to fire.
    - Ranges: a ballista reaches 120/480 ft. A mangonel reaches 200/800 ft and can't hit anything within 60 ft.
- **Web, for repair:**
  - [Black Citadel's Spelljammer vehicle guide](https://blackcitadelrpg.com/?p=13283) summarises the Astral Adventurer's Guide: a berthed ship repairs 1 hit point a day for 20 gp, and *mending* repairs 1d8 + modifier once an hour.
  - [Starfinder starship damage and repair, Archives of Nethys](https://www.aonsrd.com/Rules.aspx?ID=200): ship systems take lasting conditions that need a check to clear, and hull repair is paid for per point.
  - Ghosts of Saltmarsh, Stars Without Number and Scum and Villainy could not be confirmed, so they are not cited.
- **Web, for Critical Role:**
  - [CritRoleStats live-tweets of episode 2-100](https://www.critrolestats.com/blog/2020/7/3/livetweets-of-2-100).
  - [CritRoleStats monster analysis of Avantika and the Squalleater crew](https://www.critrolestats.com/blog/2018/12/5/monster-analysis-avantika-and-the-squalleater-crew).
- **Not verified:** the Astral Adventurer's Guide air-envelope text. The air default below follows Wildjammer.

---

## 1. What the table runs now

There are two records, and they don't match.

- **Rules page:**
  - Wildjammer bulwark and hull.
  - The Boatswain restores Bulwark every turn.
  - Takeoff is DC 13.
  - The roles are SJA's: Captain, Shipmate, Gunner and Spelljammer.
  - Role challenges are DC 12, and the crew passes if half succeed.
- **Player handouts:** a mix of Wildjammer and SCE.
  - Six roles, each with four ranks that rise at story milestones.
  - The handouts say roles "add to" your actions, but nearly every role ability costs your action.

What each role does on the handouts, at the first rank:
- **Spelljammer.** Directs the ship's movement and weapon fire for free. Onboard Defense deals 1d6 psychic. Shields Up spends a slot for +3 AC.
- **Captain.** Sets the crew's initiative order. Fire at Will lets a Gunner fire with their reaction. Rally grants advantage on one roll.
- **Boatswain.** Regains half its maximum Bulwark each turn. Brace for Impact. Emergency Repairs gives 2d10 temporary hit points.
- **Gunner.** Open Fire is an action: d20 + proficiency + Str or Dex, with no damage modifier. Class features apply only from Officer rank.
- **Navigator.** Coordinate Movement and Take Aim.
- **Medical Officer.** 1d6 + Wis temporary hit points. Neutralize Poison. +1d4 to death saves within 30 ft.

**Who holds what:**
- Tumak (Cha +4) is Captain.
- Bartholomew (Wis +4) is Spelljammer.
- Gregory (Wis +4) is Navigator.
- Sol (Dex +3, Cha +4) is Gunner.
- Casey (Dex +3, Cha +4) is Bosun.
- Boogie (Cha +3) is Medic.

## 2. Diagnosis

**The Boatswain is overtuned.** It restores half of maximum Bulwark every turn, so the enemy has to beat that amount every round just to reach Hull.
- **Wildjammer sample:** a sloop with 12 Bulwark faces two medium ballistae dealing about 7.7 a round. It restores 6 a round, so Hull loses about 1.7 a round, and only after roughly 7 rounds. With Emergency Repairs, Hull never takes damage.
- **SJA scale:** 30 Bulwark restores 15 a round. A squid ship deals about 20 a round, or about 15 against Shields Up, so Hull again takes no damage.

**The Gunner is undertuned:**
- **Loading took his turns.** A ballista needs 3 actions and a mangonel 5.
- **He had to walk to each gun.**
- **The role duplicated the crew and the helm.** A crew shot (about 9.9 expected) beats Sol's Open Fire (about 9.1).
- **Nothing in the role was his own.**

**Other problems:**
- The Medic is weaker than Boogie's spells.
- Captain and Navigator overlap.
- Ranks arrive unevenly.
- Role abilities compete with a character's own actions.
- The helm only moves the ship.

## 3. What Critical Role did, and what to borrow

**What the sources confirm.** The one fight confirmed in detail is the Balleater against a dragon turtle in episode 2-100.
- **The ship had one Hull number.** It was 500, proposed at the table by Travis. After a slam the hull had taken 90 damage, and Beau repaired 8 of it mid-fight.
- **The ship's state came through narration.** It "lurches 45 degrees," and the crew is "VERY stressed."
- **There was one initiative roll for the ship.** Fjord rolled it.
- **Positioning decided which guns could fire.** The ship had to turn before the cannons could fire.
- **Orders gave advantage.** Fjord called "Fire at Will."
- **PCs held named posts, with NPCs helping:**
  - Fjord at the helm;
  - Veth as Master Gunner;
  - Yasha on a cannon;
  - Beau boosting speed from the bow;
  - NPCs on a stern cannon.
- **Most PCs used their own spells** on the threat.

**What isn't confirmed:**
- The recap shows no ship stat block and no written crew rules.
- The Squalleater fight took place aboard a single ship, not between ships.
- How other Balleater fights were run.

**Worth borrowing.** Each borrowed idea is already part of this draft:
- **One Hull number, narrated at its thresholds.** The ship's state is described as it drops.
- **Orders that grant advantage.** Rally and Read the Line.
- **Positioning that decides which guns fire.** Range bands.
- **NPC crew on the guns while PCs cast their own spells.**
- **Repair mid-fight at a cost.** Shore Up.
- **Movement that matters when the ship itself is hit.** Zones.

## 4. Proposed core loop

### Turns
- **Side initiative.** The Captain rolls d20 + Cha or Wis. The enemy leader rolls for the other side.
- **The party picks its order.** The usual pattern: the Spelljammer sets the range first, then everyone acts.
- **Every character keeps a full turn.** That means action, bonus action, movement and reaction, plus their role.
- **Roles are optional.** Passives always work.
- **Roles are fixed for the fight.** If a role's holder goes down, anyone may take the seat as an action.

### Range bands

| Band | Rough distance | What it allows |
|---|---|---|
| **Close** | up to 60 ft | Grapple and boarding are possible. Ballistae and eyes fire normally. Mangonels can't fire. Most character attacks reach. |
| **Medium** | 60–200 ft | Every ship weapon fires normally. Only attacks and spells with a range of 120 ft or more reach. |
| **Long** | 200–800 ft | Ballistae and eyes fire at disadvantage. Mangonels fire normally. Escape is possible. |

- **Each helm shifts the range on its own turn.** It closes one band, holds, or opens one band, for free.
- **Burn shifts one band more.**
- **Penalties.** A slowed ship can't shift the band or Burn. A Crippled ship can't Burn.

### Zones and moving
- **A typical ship has four zones:** Helm, Weapon Deck, Below and Rigging.
- **By default, positions are abstract.** The Spelljammer is at the Helm, and everyone else is on the Weapon Deck.
- **An event marks a zone.** A mishap does, and so do boarders at the rail. Fixing a marked zone needs someone in it.
- **Moving costs your turn.** One zone uses your movement. Two zones uses your movement and your action (Dash).
- **Patching Bulwark works from anywhere.**

### Weapons
- **The crew keeps every weapon loaded and aimed.** This replaces SJA's load, aim and fire actions.
  - A weapon's crew number now means "needed to keep it loaded."
  - A weapon short of crew can't fire.
- **Firing is an action anyone can take.**
  - The attack roll is d20 + proficiency + Str or Dex. At an eye, you can use your spellcasting ability instead.
  - Damage is the weapon's dice. The Gunner adds a modifier.
- **Rate of fire.** Each weapon fires once a round, unless it is hot loaded (see Working together).
- **The NPC crew fires one weapon a round.** PCs fire the rest.

### Working together
- **Help.** One PC uses the Help action to give another advantage on a role check or a ship weapon attack.
  - Role checks include Quick Fix, Find Cover, the repair check, and escape checks.
  - The helper must be in the same zone, or at the same eye station.
  - Advantage doesn't stack with Read the Line.
- **Hot load.** A weapon that has already fired this round can fire once more.
  - One PC spends their action loading it (two actions for a mangonel), and another PC spends their action firing it.
  - Each weapon fires at most twice a round, and the Gunner's Quick Load counts as that second shot.
  - The eyes can't be hot loaded, because they carry no ammunition.
- **Stand in as crew.** A PC can spend their action working a gun as crew. They count as two crew members this round, which can bring a short-crewed weapon back into action.

### Damage
- **Ship weapons hit Bulwark first, then Hull.**
- **Character attacks and spells barely matter against a hull.** They are better used on crew and officers. SCE's area table sets how many crew an area spell hits.
- **Ships are immune to poison and psychic damage.**
- **Mishaps.**
  - **A heavy hit starts trouble.** A single hit that deals Hull damage of at least half the ship's Bulwark maximum rolls a Mishap. That is 15 for a hammerhead or squid ship, and 20 for the tyrant ship. This threshold is the old damage threshold again.
  - **A critical hit always rolls a Mishap,** and doubles its dice.
  - **Expect 1–2 mishaps per fight.** A level-4 fight lasts 3–4 rounds and lands 2–3 hits on Hull, and about half of those clear the threshold. Add the occasional crit.
- **Crippled.** At half Hull or less, the ship's speed is halved, and it can't Burn.
- **Zero Hull.** See section 6, Their ship at 0 Hull.

### Mishaps

| d6 | Mishap | Effect until fixed | Zone |
|---|---|---|---|
| 1 | Locked Steering | The helm can't shift the band. | Helm |
| 2 | Helm Disconnection | The ship can't move, shift the band or Burn. | Helm |
| 3 | Jammed Weapon | One weapon is disabled. | Weapon Deck |
| 4 | Hull Breach | Bulwark can't be Patched above half. | Below |
| 5 | Fire | 1d10 Hull damage at the end of each round. | Below |
| 6 | Torn Rigging | The ship can't Jink or Burn. | Rigging |

- **A Quick Fix in the zone ends a mishap.**
- **On the tyrant ship,** Below is the Hollow Deck, and Rigging becomes "an eye station."

### Parts: disabled and destroyed
- **The ship sheet lists every part:** each weapon or eye, the helm, and the rigging or fins.
- **Each part has three marks:** working, disabled, or destroyed.
  - **Disabled** can be fixed in combat with a Quick Fix.
  - **Destroyed** can't be fixed in combat. It takes repair days (section 6), or a port for the helm and the eyes.
- **Bulwark can still be Patched** whatever state the parts are in.

### How a fight ends
- **An NPC ship breaks** on any one of these: its Hull drops to half or less, two of its parts are disabled or destroyed, or its leader falls.
- **A broken ship** flees, surrenders, or makes a desperate attempt to board.
- **Either side can always try to escape** (section 6).

### Boarding
- **Boarding needs Close range,** or a grapple.
- **Side turns continue.** Boarders cross in a group on their side's turn, as part of their movement, and act when they land.
- **Defenders answer on their own side's turn.** So a lone boarder isn't swarmed before acting. Equally, defenders aren't overrun by a whole boarding party before their turn comes.
- **What boarding does to roles.** A PC who boards the enemy ship leaves their role until they come back. A boarded ship fires only its crew weapon, as in SJA.
- **Big brawls.** If a boarding fight grows large, the DM may switch to individual initiative. Ship actions then happen on the Spelljammer's turn.

## 5. Proposed roles

Role numbers tie to proficiency bonus (PB): +2 at level 4, +4 at level 10, and +5 at level 15. Level-10 ability modifiers are estimates. Scaling steps come at levels 5, 10 and 15.

### Captain (Tumak, Cha or Wis)
**Job:** controls the order and lifts the crew.
- **Passive, Command.** Rolls the side's initiative. Allies who can hear the Captain have advantage on saves against being frightened.
- **Rally (bonus action).** One ally gets a Command die to add to one ship roll before your next turn. Ship rolls are a ship weapon attack, a role check, a Grapple, an escape check, or a save against a ship effect.
- **Order (bonus action).** One ally uses their reaction to take one of their role bonus actions.
- **Grapple (action, Close only).** Make a contested Cha (Intimidation or Persuasion) check against the enemy captain, or against DC 12 if there is none. On a success, the ships lock together at half speed.
- **Numbers:**
  - Level 4: Command die d6. Fear eye DC 14.
  - Level 10: Command die d10. Fear eye DC 17.
- **Steps:** d8 at level 5; d10 at level 10; d12 at level 15, when Rally also reaches two allies.
- **What it competes with:** Cunning Action and the Soulknife's bonus-action blade. At range, Rally usually wins. In a deck fight, Tumak's own bonus action wins.

### Spelljammer (Bartholomew, spellcasting ability)
**Job:** chooses the range, and with it what the fight looks like.
- **Passive, Helm.**
  - Moves the ship and shifts the band for free.
  - Senses everything on and around the ship.
  - *(Ruled)* Can cast their own spells at anything they can see on or around the ship.
  - Takeoff is DC 13.
- **Shields Up (bonus action, spend a slot).** +3 AC, plus 1 per slot level above 1st, until your next turn. The +5 cap applies.
- **Jink (bonus action).** The first ship weapon attack against the ship before your next turn has disadvantage.
- **Burn (bonus action).** Shift the band one more step.
- **Onboard Defense (bonus action).** A creature aboard makes a Wis save. On a failure it takes psychic damage and has disadvantage on its next roll.
- **Numbers:**
  - Level 4: DC 12. Onboard Defense 1d6. Jink covers 1 attack.
  - Level 10: DC 17. Onboard Defense 3d6. Jink covers 2 attacks.
- **Steps:** Onboard Defense gains +1d6 at levels 5, 10 and 15. Jink covers 2 attacks from level 10. From level 15, one Shields Up per fight costs no slot.
- **What it competes with:** Starry Form. Waking it before initiative softens the cost.

### Navigator (Gregory, Int or Wis)
**Job:** reads the fight so everyone else's rolls land.
- **Passive, Plot.** Once per hazard, reroll one failed check.
- **Read the Line (bonus action).** The side's ship weapon attacks against one target have advantage until your next turn.
- **Find Cover (bonus action).** d20 + PB + Int or Wis against DC 13. On a success, the ship has +2 AC against one ship until the end of your next turn.
- **Find the Gap (bonus action).** The side's next escape check has advantage.
- **Numbers:**
  - Level 4: Find Cover +6. Slowing eye DC 14.
  - Level 10: Find Cover +9. Slowing eye DC 17. Read the Line also crits on 19–20.
- **Steps:** at level 5, Find Cover needs no check. At level 10, crits on 19–20. At level 15, two targets.
- **What it competes with:** very little. Gregory has few bonus actions of his own.

### Gunner (Sol, Str or Dex; Cha at an eye)
**Job:** takes the enemy ship apart.
- **Passive, Gun Captain.**
  - Adds his modifier to ship weapon damage.
  - Weapon-attack class features apply.
  - Extra Attack lets him fire a second weapon.
- **Aim (bonus action).** Advantage on his next ship weapon attack this turn.
- **Called Shot (bonus action, added to a shot).** A hit deals half damage, plus one effect:
  - a weapon is disabled;
  - the rigging is hit, so the target can't Jink or Burn;
  - on an open deck, 1d4 + PB crew drop.
- **Quick Load (bonus action, PB uses per long rest).** Fire the same weapon once more. It doesn't work on eyes.
- **Numbers:**
  - Level 4: a ballista is +5 for 3d10 + 3. Quick Load 2 per long rest.
  - Level 10: +8 with two shots. Quick Load 4 per long rest. Called Shot deals full damage.
- **Steps:** none at level 5, because Extra Attack arrives then. At level 10, Called Shot deals full damage. At level 15, ship weapons crit on 19–20.
- **What it competes with:** Divine Smite, which is a bonus-action spell under 2024 rules.

### Boatswain (Casey, Str, Dex, or Int with tools)
**Job:** keeps the ship in the fight.
- **Resource.** PB + 2 Patch dice (d10s), refreshed on a long rest.
- **Passive, Upkeep.** Runs the repair days in section 6. Only the Boatswain repairs Hull.
- **Patch (bonus action, from any zone).** Restore 1d10 + PB Bulwark, adding any Patch dice you spend. This never repairs Hull.
- **Quick Fix (bonus action, in the zone).** DC 13 to end a mishap or fix a disabled part. Others can try it as an action.
- **Brace (reaction).** Spend a Patch die to reduce damage by the roll + PB.
- **Shore Up (action, Below, once per fight).** Restore 2d10 + PB Hull.
- **Expel (action, tyrant ship, once per fight).** Creatures in the Cargo Deck make a DC 13 Str save or are blown out through the intake.
- **Numbers:**
  - Level 4: Patch about 7.5. 4 Patch dice. Brace about 7.5. Shore Up about 13.
  - Level 10: Patch 3d10 + 4, about 20.5. 6 Patch dice. Brace about 9.5. Shore Up about 15.
- **Steps:** Patch rolls one more d10 at levels 5, 10 and 15.
- **What it competes with:** *Hex* and *Misty Step*. Brace still works whatever his bonus action did.
- **Movement.** Heavy hits now start fires and breaches, so in most fights the Boatswain goes Below once.

### Medic (Boogie, Wis or Cha)
**Job:** keeps officers and crew working.
- **Resource.** PB + 2 medical dice (d8s), refreshed on a long rest.
- **Passive, Vigil.** +1d4 to death saves within 30 ft.
- **Triage (bonus action).** Spend a medical die on a creature within 5 ft. It regains the roll + PB + modifier, and one condition ends: poisoned, frightened, or a latched wisp.
- **Muster (bonus action, in the zone).** 1d4 + PB downed crew stand up.
- **Numbers:**
  - Level 4: Triage about 9.5. 4 medical dice.
  - Level 10: Triage 2d8 + 8, about 17. 6 medical dice.
- **Steps:** one more die at level 5. Triage heals 2d8 at level 10. At level 15, Triage heals two creatures.
- **What it competes with:** *Healing Word* and Quickened Spell. Triage saves his slots and sorcery points.
- **When it has work.** The Medic is often the one free to Help, or to follow the Boatswain Below.

## 6. Damage that lasts, repair, and escape

**What other systems do.** The buffer comes back fast. Hull comes back slowly, and lasting conditions need work to clear. The sources:
- **Wildjammer:** one repair check a day.
- **Astral Adventurer's Guide:** 1 hit point a day at a berth, 20 gp each.
- **SCE:** 5 hit points an hour at a berth, 10 gp.
- **Starfinder:** systems take lasting conditions, and hull repair is paid per point.

The proposal sets the cost in **days**. That matters when the crew is racing somewhere or deep in enemy space.

**Bulwark** refills 10 minutes after a fight.

**Hull: repair days.** Repairs happen out of combat, with the ship stopped.
- **The DM works out the repair days once:**
  - Hull missing ÷ (10 × PB), rounded up. At level 4 that's 20 Hull a day; at level 10, 40 a day.
  - Plus 1d4 days for each destroyed part that can be field-repaired. That covers every part except the helm and the eyes.
  - Disabled parts are fixed along the way at no extra time.
- **The Boatswain makes one DC 15 check** (Str, Dex, or Int with tools) when the repairs start. A success takes 1 day off, to a minimum of 1. A failure adds 1 day. Help gives advantage.
- **While the ship is underway, only Bulwark recovers.** The choice is to stop and spend the days, or push on damaged.
- **Spells.** A repair spell of 3rd level or higher (*Fabricate*, *Stone Shape* on the tyrant ship, Wildjammer's *Repair Hull*) cast during repair days counts as one extra day of repair, once a day. *Mending* fixes one disabled part out of combat.
- **No Supplies and no three-quarter cap.** The time cost does that job.

**Ports.**
- They repair faster: 50 Hull a day, for 10 gp a point.
- They are the only place to replace a destroyed helm or eye.
- They do full overhauls.

**What a fight costs at level 4.**
- About 20–50 Hull, so 1–3 days.
- Plus 1d4 days for each destroyed part.

### Their ship at 0 Hull
Plan for it as a story turn, not a dead end.
- **Dead in space.** At 0 Hull the ship can't move, shift the band or Burn. Its weapons and eyes go quiet, and Bulwark is gone.
  - Enemies can grapple it automatically.
  - Its air envelope holds, so the crew aboard can breathe.
  - Once it regains 1 Hull through repair days, it moves again.
- **Destroyed outright.** Only one of these destroys it:
  - it takes further damage equal to half its maximum Hull;
  - it is scuttled, which takes 10 minutes aboard;
  - a Fire is left burning for 10 minutes.

  This follows Wildjammer: destroying a ship takes a focused effort.
- **Abandoning ship.**
  - The *Foundling* carries a scuttle ship.
  - The tyrant ship has a scuttle ship only if one is docked in the Cargo intake. Its vessel page says one docks there for landings; whether it carries one on the crossing is an open question.
  - Spells such as *Fly* and teleportation work.
  - A boarded enemy ship is another way off.
- **Cut loose in space.** Wildjammer's rule:
  1. 1 minute of fresh air.
  2. Then 1 minute of fouled air, with disadvantage on checks.
  3. Then the creature holds its breath for a number of minutes equal to its Con modifier (minimum 30 seconds), and then suffocates.

  That's roughly 2–4 minutes, or 20–40 rounds, to rescue someone.
- **Outcomes.** Capture, towing, rescue by the Fleet, or limping to a rock to repair. Each leads somewhere.
- **Losing the ship changes the conditions, not the game (DM voice).** A destroyed ship doesn't mean a dead crew. The DM can step in and keep it real, neither cushioning nor punishing: a captured crew is usually worth more to an enemy than a dead one. The enemy takes the stragglers aboard, and the players' options change. They can find a way off, revolt, be ransomed or sold, or bargain. That is where a story forms.

### Escape (always available)
- **Only from Long range.** The Spelljammer spends their action on a contested spellcasting check against the pursuing Spelljammer.
- **Speed.** +2 for every 5 ft the fleeing ship is faster, and −2 for every 5 ft it is slower.
- **Advantage** comes from Find the Gap, or a pursuer that is slowed or Crippled.
- **Two wins and the ship is gone.** Wins are kept if the range closes, but no check can be made until the ship is back at Long.
- **Broken NPC ships** use the same rule.

### Fight or flee? (DM box)
Keep these visible on the ship sheet every round:
- **Hull now,** and the **repair days** it already costs.
- **Destroyed parts,** each worth +1d4 days. Note which of them need a port.
- **The clock.** Days to the destination, who is pursuing, and how deep in hostile space they are.
- **Escape odds.** The current band, and the speed modifier against this enemy.
- **The enemy's state.** How close it is to breaking: Hull at half, two parts down, or its leader dropped.

Say the price aloud: "Another round like that is two more days stopped." The crew then weighs the cost of the fight against the clock.

## 7. Typical ship and the tyrant ship

### Flighty Foundling (the typical ship)
- **Stats:** AC 15, Hull 400, Bulwark 30, speed 35, crew 15. Its mishap threshold is 15.
- **Weapons:** a ballista and two mangonels. The crew fires one, and PCs fire the other two.
- **Zones:** Helm, Weapon Deck, Below and Rigging.
- **Boarding:** happens at Close range, as in section 4. Losing crew silences guns.

### Tyrant ship (the exception)
- **Stats:** AC 17, Hull 300, Bulwark 40, speed 40. Its mishap threshold is 20.
- **Settled on the vessel page:**
  - Ten great eyes; four answer at stations around the helm on the Command Deck.
  - Under the Pact at H'Catha, the hour's eye goes dead.
- **Ruled:** all four eyes work from the start.
- **How the eyes work:**
  - The ship has no NPC-crewed weapon, and the eyes need no crew.
  - A station sees through its eye, and a character there may cast spells through it.
  - Using an eye takes the station holder's action.
  - An NPC can hold an empty station (+4 to hit, DC 12).
  - DCs are 8 + PB + the holder's modifier.
  - The eyes reach 120 ft. Disintegration also reaches Long, at disadvantage.
- **Zones:**
  - **Command Deck:** the helm and all four stations. Everyone starts here.
  - **Shaft and gravity plane:** crossing takes DC 12 Dex (Acrobatics), or the character falls prone.
  - **Hollow Deck:** the repair deck. Breaches and fires land here, and Shore Up happens here.
  - **Cargo Deck:** the intake, and the only way in.
  - The Hollow Deck and the Cargo Deck are each two zones from the Command Deck.

**The four eyes.** Each eye has a recharge, rolled at the start of the party's turn. All start the fight charged.

1. **Disintegration → Gunner. Recharge 5–6.**
   - A ship weapon: 120/480 ft, 5d10 force.
   - A Called Shot through it destroys the part.
   - A creature it drops to 0 turns to dust. That's flavour only.
   - **Compared with a ballista** (at level 4, against AC 15):
     - Sol at +6 deals 5d10 + 4, about 31.5 on a hit, or about 19 expected per shot.
     - Over a four-round fight it fires about twice, once at the start and about once more on recharge. That averages about 9.5 a round.
     - A crewed ballista (+6, 3d10) averages about 9.9 a round.
     - So the eye matches a ballista's damage over a fight, but in rare, heavy shots, and those shots can destroy parts.
2. **Telekinesis → Boatswain. At will.**
   - Ends a grapple, or seizes a grappling line.
   - Or targets one creature (Str save, DC 13) or an object up to 300 lb, moving it 30 ft.
   - It is defensive and utility only, so it needs no limit.
3. **Fear → Captain. Recharge 4–6.**
   - **Against a crew:** they make one Wis save at +4. On a failure, 1d4 + PB crew are frightened until the end of their next turn, and can't work guns.
   - **Against an officer:** Wis save, or frightened for 1 minute, repeating the save each turn.
   - DC 14.
4. **Slowing → Navigator. Recharge 4–6.**
   - Targets one ship. Its Spelljammer makes a Wis save. On a failure, until the end of its next turn the ship moves at half speed, can't shift the band, and can't Jink or Burn.
   - Your side's escape checks against a slowed ship have advantage.
   - DC 14.

**More on stations:**
- The Medic and the Spelljammer hold no eye.
- Under the Pact, the dead eye's station holder keeps their role.
- A destroyed eye or helm needs a port. On the tyrant ship that means beholder craft, which is a possible hook at H'Catha.

**Boarding the tyrant ship:**
- Boarders must reach Close range and come in through the Cargo intake. From there they climb the shaft and cross the gravity plane.
- Expel clears the Cargo Deck once per fight.
- Wisps, if kept, harass everyone aboard.
- Each PC who leaves a station silences its eye, unless an NPC takes it.

## 8. Worked example (level 4)

**The setup.** The tyrant ship meets a raider squid ship at Long range.
- **Raider stats:** AC 15, Hull 300, Bulwark 30, speed 30, crew 13. Its mishap threshold is 15.
- **Raider weapons:** two ballistae (+6, 3d10, crew 3 each) and a mangonel (+5, 5d10, crew 5).
- **Raider officers:** two officers and a leader.

**Initiative.** Tumak's 19 beats the raiders' 12. The party goes first and sets its order: Bartholomew first.

### Round 1, the party's turn
- **Bartholomew (Spelljammer).**
  - Closes the range to Medium for free, putting the eyes in range.
  - Bonus action: Shields Up with a 1st-level slot, for AC 20.
  - Action: *Moonbeam* on the starboard ballista's crew.
- **Gregory (Navigator).**
  - Bonus action: Find Cover. He rolls +6 against DC 13 and succeeds, for AC 22, which is the +5 cap.
  - Action: the Slowing eye. The raiders' Spelljammer fails the DC 14 save, so their ship is slowed.
- **Tumak (Captain).**
  - Action: the Fear eye. The crew fail their save, and 5 are frightened, which leaves 8 working crew. Six keep the two ballistae loaded, and the mangonel goes silent.
  - Bonus action: Rally, giving Sol a d6.
- **Boogie (Medic).** Action: Help on Sol's shot, which gives advantage. This is the Working together rule.
- **Sol (Gunner).**
  - Action: fires the Disintegration eye at the port ballista.
  - Bonus action: Called Shot.
  - He rolls +6 with advantage, plus the d6, and hits. The port ballista is **destroyed**, which counts as one part. Half damage (16) drops their Bulwark from 30 to 14.
- **Casey (Boatswain).** Bulwark is full, so he acts as himself: *Hex* and *Eldritch Blast*. His reaction stays ready.

### Round 1, the raiders' turn
- **Their crew fires the starboard ballista.** It's a natural 20, so it hits AC 22. The crit doubles the dice, for 33.
- **Casey Braces** for 8, so Bulwark takes 25 and drops from 40 to 15. No damage reaches Hull.
- **The crit rolls a mishap automatically: 5, Fire on the Hollow Deck.** At the end of the round the fire deals 4 Hull: 300 → 296.
- **The raiders stay at Medium.** Their ship is slowed, so they can't shift the band.

### Round 2, the party's turn
- **Recharge rolls:** Disintegration rolls 5 and is charged. Fear rolls 2 and Slowing rolls 6.
- **Casey goes below.** He uses his movement and his action (Dash) to reach the Hollow Deck, two zones away. Then his bonus action is a Quick Fix (+5 against DC 13), and the fire is out.
- **Sol fires Disintegration** with a Called Shot on the starboard ballista. It hits and the ballista is destroyed. That is two parts down, so **the raiders break.**
- **Gregory** re-Slows them, so they can't open the range to escape.
- **The party's choice:** close to Close and board them, or let them go.
- **The price so far:** 4 Hull lost and no parts destroyed. That is under a day of repairs.

**What would have changed things.** Suppose that crit had come after Bulwark was already gone, with 20 or more reaching Hull. It would have started a second mishap, and Casey would have faced two zones to fix.

## 9. Open questions for Korey

Only the new proposals in this draft remain open.

1. **Mishap trigger.** A single hit that deals Hull damage of at least half the ship's Bulwark (the old damage threshold) rolls a mishap, and crits always do. *Default: yes.*
2. **Eye limits.** Disintegration at 5d10 with recharge 5–6; Fear and Slowing at recharge 4–6; Telekinesis at will. *Default: yes.*
3. **Working together.** Hot load caps each weapon at two shots a round, with Quick Load as that second shot. A PC working a gun counts as two crew. *Default: yes.*
4. **Repair days.** Hull missing ÷ (10 × PB), plus 1d4 days per destroyed part, with one Boatswain check up front. Supplies and the three-quarter cap are dropped. *Default: yes.*
5. **Destroyed outright.** Further damage equal to half maximum Hull, 10 minutes of scuttling, or a fire left burning for 10 minutes. *Default: yes.*
6. **Scuttle ship on the crossing.** Does the tyrant ship carry one docked in the intake? *Default: yes, one, which seats six.*

**Pages to update once ruled:**
- `handouts/crew-roles.html`
- `handouts/ship-mechanics.html`
- `prime/rules/index.html` § Ship & crew
- `prime/vessels/tyrant-ship.html` § Still to decide
- the V007 runsheet, which still lists three cannons
- a player ship sheet, showing the part list with working, disabled and destroyed marks

**Assumptions:**
- Ability modifiers come from the character sheet PDFs, with PB +2. Level-10 modifiers are estimates.
- Enemy numbers use the SJA squid ship.
- The pacing targets (3–4 rounds a fight, 20–50 Hull lost, 1–2 mishaps) are mine, not rulings.
- The air rule follows Wildjammer. The Astral Adventurer's Guide text is unverified.
- The Critical Role findings come from one episode recap.

## Promotes to

- prime/rules/index.html § Ship & crew.
- handouts/crew-roles.html and handouts/ship-mechanics.html (player rules sheets), and a player ship sheet.
- prime/vessels/tyrant-ship.html (the four eyes) and prime/vessels/flighty-foundling.html.
- The V007 runsheet.

## Open

- The six questions in section 9.
