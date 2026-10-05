# The chronicle

How a voyage's Full Account is written. It is the first thing a session run
produces and everything else is taken from it, so its rules are held here in
one place. The run itself is in `SESSION-RUN.md`.

The Full Account is player-facing. It appears on the voyage page under
`voyages/` and is appended to the Crew Logs document.

## What it is

A voyage recap that reads like a chapter from a fantasy-adventure novel set in
wildspace and the Astral Sea, and stays completely faithful to what happened at
the table. Each one should read as the next entry in one continuous book,
matching the style, level of detail and player-facing perspective of the
voyages before it.

## The source

The account of the session arrives in one of two forms. Infer which from the
text. The finished recap is the same either way, and never says which it was.

| | Audio transcript | Dictated recollection |
|---|---|---|
| Sequence of events | reliable | may be out of order, compressed, or skip beats |
| Proper nouns | **unreliable** — mangled phonetically | generally correct |
| Who did what | **unreliable** — speakers are misattributed | generally correct |
| Also contains | table talk, rules talk, crosstalk | asides to the chronicler, first person, shifting tense |

- From a transcript: correct every proper noun against the record, and do not
  guess at attribution.
- From a dictation: treat it as authoritative for events, names and
  attribution. Rebuild the chronology where it is loose. Fold asides and
  uncertainty into your understanding and never narrate them. Where the DM
  flags doubt about who did something, treat it as an ambiguous transcript.

### Fidelity and length

The recap's length is set by the source, not by the length of earlier voyages.
A thin dictation produces a shorter chapter. Do not pad.

The prose rules below govern how to render what the source gives. They never
license inventing what it does not. Where the source does not say how a place
looked, what a creature resembled, or what crossed a face, write the beat
without that detail. A plain sentence is correct; an invented specific is not.

Physical description already established in earlier voyages or the record may
be carried forward. That is continuity. Anything appearing for the first time
gets only what the source gave it.

## Authority

When sources disagree, the higher one wins.

1. **DM corrections** on the voyage's entry in `prime/campaign/voyages/` —
   beats issued out of session as cleanup. They are canon as though they
   happened at the table. Write them as events, in their place in the sequence.
2. **The record**, `data/*.json` — spellings, names, pronouns, roles, current
   state. It overrides the source and earlier voyages on all of these.
3. **Earlier voyages** — canon for any name, fact or relationship the record
   does not address.
4. **The source** — the record of what happened, unreliable on the points in
   the table above.

The record's authority is limited to continuity. It never grants licence to add
an event or a reveal. Events come from the source, the corrections and earlier
voyages only.

Where the record corrects a detail the source or an earlier voyage got wrong,
apply it silently. Do not announce a correction.

### Names

Build the name list fresh for each run from the `name` of every record in
`data/` plus `data/vocabulary.js`. Do not work from a remembered list; that is
how the last one went stale.

Garbles seen in past transcripts, as a guide to the kind of error to expect:
"Calestis" for Caelestis, "Hakatha" for H'catha, "Sareth Abazine" for Saerthe
Abizjn, "Aztec-6" and "Austech" for Ostekk-6, "Volkath" for Vocath, "Vena" for
Veena, "Crick Lit" for Krik'Lit.

A name close to one in the record, and not identical, is a question for the DM.
Do not settle it by guessing, and do not treat it as someone new.

## Perspective

Include only what was revealed, experienced, learned, witnessed, inferred or
reasonably understood during this voyage or an earlier one.

Leave out:

- DM notes, future plot, anything from a later voyage
- Motives and identities the session did not reveal
- Anything from `prime/`. Corrections are the one exception, and only as the
  crew would have perceived them
- Rules, dice, classes, levels and feat names. Render mechanics as lived
  experience: "wrapping himself in cold, star-bright magic", not "casting a
  spell"
- Connections between people, places or things that the players have not made
  themselves, even where both have appeared in play
- Titles, designations and affiliations not yet revealed
- Names for anything the crew only glimpsed or sensed. Describe what was
  perceived

Two failures to check for in every recap:

1. **Perceived is not named.** A glimpsed shape, an unfamiliar constellation,
   an unnamed voice: render the perception, never the label the players were
   not given. The presence that spoke to Casey in the wardrobe is "a familiar
   voice".
2. **The narrator knows what the crew knows.** The narrator may set mood and
   tension. It may not confirm an enemy's awareness, an NPC's secret nature, or
   any off-screen fact. A knowing aside is cut, or rewritten as something a
   character observed or felt.

An unresolved mystery stays unresolved. A suspicion is written as a suspicion.
A lie that was not exposed is written as the characters experienced it.

## Style

Narrative, in clear modern prose, in the manner of classic fantasy and
adventure writing. A story retold after the fact. Multiple paragraphs, natural
transitions, no bullet points, no markdown rules between scenes, no timestamps.

The cadence of the existing voyages:

- Third person and ensemble. It follows the whole crew through a sequence of
  places and beats, gives each cadet attention as the scene calls for it, then
  draws back to an observation about the crew as a whole.
- Paragraphs tend to open on a place or a transition ("The sky dock opened the
  scale of Caelestis all at once") and then move through what each character
  did there.
- Short declarative sentences are used on purpose for emphasis, often standing
  alone after a longer passage ("It had never been meant to be won.").
- The em-dash belongs to this voice, for an appositive, a reflective turn, or a
  closing qualification. Do not stack several dashed interruptions into one
  sentence.
- A sentence much longer than those around it is checked: it usually reads
  better as two.
- Each voyage closes on a reflective paragraph that names what is still
  gathering without resolving it.

Tone: adventurous, reflective, character-driven; hopeful, melancholic or epic
when earned. The logs lean into wonder, the strangeness of wildspace, the
loneliness and warmth of a crew forming, and the weight of small loyalties.
Humour only where it happened at the table. No exaggerated drama, no modern
slang, nothing that reads like a wiki entry.

### Prose discipline

The single most important rule: **render the specific thing, do not
characterize the type of thing.** Put the image, action or detail directly in
front of the reader. The strong existing prose commits to concrete images: "a
cluttered monument to status and excess", "a fishbowl containing two octopi,
Flotsam and Jetsam", "a silvery starfruit the color of moonlight on metal".

Five tics to remove, all of them gesturing where the prose should show:

1. **"The kind of / the way of / the sort of".** "The kind of place that
   swallowed newcomers." "Guarded in the way of men who had something to
   protect." These name a category. Write the particular: what the place
   looked, sounded and smelled like; what the man did that read as guarded.
2. **Definition by negation.** "Began not with fire but with paperwork." "Not
   gracefully, not cleanly, but home." One deliberate contrast is allowed where
   the thing negated was truly expected. Never stacked, and never in place of
   describing the thing. Lead with what it is.
3. **Clipped negation as false depth.** "He did not say so. He did the
   exercise." "He did not look. He did not need to." One such beat in a whole
   recap can land. Several read as a tic. Show the action or the felt reason.
4. **The aphorism reflex.** "The way most true things did on the first day of
   knowing someone." Do not cap a moment with a general law about life. Trust
   the image.
5. **Hollow intensifier framing.** "Something that made every word seem
   chosen." Abstract gesture where a concrete observation would do more.

The test for every sentence: could a reader picture or feel exactly what
happened, or were they only told what type of thing it resembled?

These rules apply to the finished prose however the source phrased things. If
the transcript or the dictation uses one of these constructions, keep the fact
or image and rewrite the wording. Fidelity is owed to what happened, not to the
words it was described in.

## Characters and combat

- Use names consistently. Follow what each character did. Draw out moments
  that show personality, values, fears, convictions and relationships, and
  decisions that changed the course of events.
- Carry the meaning of important dialogue in prose. Do not quote long stretches
  of the source.
- Do not give every character equal space artificially. In an ensemble, do
  register what each cadet present was doing.
- Tie each vision, dream or private scene to the cadet who had it. The record
  and earlier voyages show whose imagery is whose.
- Where the source does not settle who did something, do not assign it. Write
  "one of the cadets", or raise it in the notes.
- Combat is a scene in a novel, never a round-by-round log. Give the flow of
  the fight, its turning points, the significant actions, injuries, sacrifices
  and clever tactics, and what it meant to the crew. The opening simulation in
  Voyage 001 is the model.

## Format

- Title: `Voyage NNN – Title`, with an en dash and a three-digit number.
- The title is short and evocative, taken from the voyage's central event,
  theme or turning point, in the manner of "The Shape of a Crew". It repeats no
  earlier title. The DM approves it with the account.
- Detailed. A reader who missed the session should understand everything
  important from the recap alone.

## Before it goes to the DM

1. **Names** — every proper noun matches the record.
2. **Continuity** — every pronoun, role and status matches the record.
3. **Corrections** — every DM correction for this voyage is in the account.
4. **Attribution** — every vision, action and line belongs to the right cadet,
   or is left unattributed on purpose.
5. **Spoilers** — nothing from `prime/`, nothing the crew only glimpsed has
   been named, and no aside knows more than the crew does.
6. **Invention** — every physical detail is in the source or already
   established.
7. **Voice** — the cadence above, the standalone emphasis sentence, the
   reflective close.
8. **Prose discipline** — each of the five tics searched for and rewritten.

Anything that could not be confirmed goes in a short **DM notes** list after
the account: uncertain attributions, names that were close to a record and not
identical, and any place a correction and the source could not be reconciled.
The list is for the DM and is never published.
