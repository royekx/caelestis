# Backlog

Everything still to rule on or fix before the material is written into pages.
This is the planning layer: open questions live here and nowhere on a page. See
[../README.md](../README.md) for the flow and the writing rules.

Built 2026-10-25 from the chat sweeps, the module sweep, the working drafts,
and an audit of every published prime page. Truth ran in this order: Korey's
rulings of the day, his saved decisions, timeline canon, drafts, chat sweeps
(later beats earlier), published pages.

## Item types

- **decide**: Korey rules. The item names the options and every page it
  touches. When one question touches several pages, the full item sits on one
  page and the others point to it.
- **fix**: a page line is wrong or stale. Checked against the current page.
- **drop**: retired material to remove.
- **add**: a settled fact missing from its page, written the way it will read.

Work order: rule the cross-cutting decisions first, then go file by file. A
ruled item becomes a STAGING.md entry; `add`, `fix` and `drop` items move to
staging once Korey has read and accepted them.

## Files

| File | Covers | decide | fix | drop | add |
|---|---|---|---|---|---|
| [cosmology.md](cosmology.md) | cosmology/, glossary/, chart/ | 23 | 17 | 0 | 24 |
| [realms.md](realms.md) | realms/ except Fonains; a new Oerth page | 39 | 32 | 3 | 46 |
| [fonains.md](fonains.md) | realms/fonains.html, the Fonains Canon Reference doc, the timeline's Fonains lane | 16 | 12 | 1 | 29 |
| [timeline.md](timeline.md) | the rest of timeline.json | 4 | 4 | 0 | 0 |
| [factions.md](factions.md) | factions/ | 24 | 18 | 2 | 38 |
| [campaign.md](campaign.md) | campaign/: spine, ascension, colony, voyages, plot hooks | 29 | 39 | 5 | 34 |
| [dossiers.md](dossiers.md) | dossiers/ | 34 | 38 | 0 | 45 |
| [crew.md](crew.md) | crew/ | 30 | 10 | 0 | 64 |
| [artifacts-vessels.md](artifacts-vessels.md) | artifacts/, vessels/ | 17 | 23 | 0 | 42 |
| [rules.md](rules.md) | rules/, statblocks/, tracker/ | 19 | 10 | 0 | 12 |
| [new-pages.md](new-pages.md) | 14 proposed pages, the hub, notes/ | 22 | 3 | 2 | 32 |
| [automation.md](automation.md) | the session pipeline and tracker alternatives | 11 | 1 | 0 | 0 |
| **Total** | | **268** | **207** | **13** | **366** |

The repo refactor has its own draft: [../repo-refactor.md](../repo-refactor.md).

## Cross-cutting decisions

Each settles items on several pages at once. Rule these first.

1. **Residue piece counts by Axiom.** Saved decisions: Dissolution 2, Transformation 3, Boundary 5, Convergence 7. Artifact pages and a later chat: Boundary 2, Dissolution 3, Transformation 5, Convergence 7. Touches cosmology, glossary, A.T.L.A.S., the Runekeepers' and Transformation fragments, rules, the hub, and whether Wan and Tu carry a whole fragment as a first key. (The crew/artifacts merge applied the saved decisions; items marked *(counts)* flip if the other split wins.)
2. **Aperture or Atrium.** The name of a world heart's entrance. Saved decisions say Aperture; the latest chat renamed it Atrium. Seven pages.
3. **Does opening a heart need a Monolith?** Settles priming versus opening and why N'ghathrod needs Zeniths. Saved decisions say both ways in different places. Cosmology, glossary, chart, rules, N'ghathrod, the Seekers, timeline.
4. **The Figure and its nodes.** Fifteen single hearts or three-world systems; whether any node stands today. Glossary, chart, realms index, ascension, timeline.
5. **Act structure and where the Citadel sits.** The spine's four arcs against the timeline's acts; N'ghathrod in Arc 2 or 3; the Citadel in Arc 3 or 4. Spine, colony, ascension, timeline, N'ghathrod.
6. **N'ghathrod's five centuries.** Nothing covers the time between the crash (about 500 years ago) and the exile from Glyth (about 60 years ago). Also sets when the five lieutenants got their Holds. Nine pages say "a century".
7. **What the H'Catha meteor is and why Caelestis wants it.** The reason the H'Catha arc happens. Spine, H'Catha, Academy and Fleet.
8. **How the Seekers divide.** Every chapter worships Vecna under some name, or a faith wing and a method wing. Also reconciles vecna.md's "two bodies" with today's ruling that the Seekers are Vecna's followers. Seekers, deities, ascension, vecna.md.
9. **Astra, Astra Virex or Virex, and what wounded Astra.** Crew (Casey), dossiers, realms.
10. **The real elder brain.** Buried under the Barrier Peaks, or escaped. Timeline, realms/fonains, N'ghathrod.
11. **Which sphere holds Oerth.** One of the five charted spheres or a sixth. Realms, chart, cosmology, the new Oerth page.
12. **Runes 17–19 as Anchors (Hearth, Threshold, Horizon)** and the Wayfind rules that hang on them. Crew (Tumak), rules.
13. **Can a taken person be released?** Tadpole removal, the real N'ghathrod's death, or both. Rules, N'ghathrod, colony.
14. **Fonains–Caelestis offset.** The timeline puts Fonains Session 28 about five months before Caelestis now; older notes say Caelestis is "around" Session 28. Timeline, Fonains doc, campaign.
15. **OSTEKK-6 as sole survivor.** Saved decisions say so; the V005 record has Gregory waking OSTEKK-2. Dossiers, vessels.
16. **The tracker and session ingest.** Keep the repo JSON record and in-chat runbook, or move to an alternative. See automation.md.

## Second looks

The merges applied the truth order mechanically. In these cases a saved
decision beat a later chat that had marked it superseded. Overturn any where
the later chat was the real ruling:

- Why Tarroway's tables fail (the psychic wind).
- Constellation designations (CON-01, CON-02).
- Vth'oramu's meaning ("the passage to a new home").
- Clint going overboard and the psychic wind carrying him.
- A heart opens only where a Monolith stands (campaign.md applied this; cosmology.md and rules.md keep it as decision 3).

## Player record flags

Nothing from prime goes into `data/`. These need a hand edit, if Korey agrees:

- `data/items.json` has Boogie holding the whole derelict logbook; the settled version is half.
- `data/npcs.json` calls Mirt "the head of Caelestis".
- `data/sessions.json`, `quests.json` and `items.json` call OSTEKK-6 an autognome; OSTEKK units are automatons.

## Still coming in

Five chat sweeps are partial and resume after the read limit: Casey (from turn
101), Sol (203), Tumak (151), Campaign Planning (37) and New campaign idea (70).
Items from their unread stretches carry *(sampled)* or *(snippet)* tags.
