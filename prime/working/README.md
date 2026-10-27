# Working

Drafts and staging for the DM wiki. Nothing here is canon until it reaches a
page under `prime/`. Nothing here is linked from a page or deployed.

## How material moves

```
inbox/  →  drafts  →  BACKLOG.md  →  STAGING.md  →  pages under prime/
 raw       argued      to rule on     ruled, waiting    canon
```

1. **inbox/** holds raw material: chat sweeps, module sweeps, exports. Dump
   freely.
2. **Drafts** (`*.md` in this folder) are where a subject is argued out. Each
   ends with **Promotes to** and **Open**.
3. **BACKLOG.md** lists everything still to rule on or fix, grouped by the page
   it lands on: facts missing from a page, page lines that are wrong or stale,
   open calls, and retired material to drop.
4. **STAGING.md** holds what IS, once ruled, grouped by target page. It is not
   a log. An entry is as long as it needs to be: a line, a paragraph, or a full
   section. When a ruling changes, the entry is rewritten.
5. **Distribution** writes staged entries into their pages, then deletes them
   from STAGING.md and the matching backlog items.

A chat session works the backlog: Korey rules, the result goes to staging, and
staging is distributed page by page.

## Rules

- Markdown, one file per subject. No page shell, no styling.
- Deliberation lives in drafts and the backlog. Staging and pages state what is.
- The player record (`data/`) never takes anything from here.

## Writing staged entries and pages

- **Specific over sparse.** Write the detail out. A generic line breeds
  misreadings later; a long, exact entry does not.
- **Plain, simple, precise, readable.** Short sentences, concrete nouns, no
  hedging.
- **No stacked negations, and no three short sentences in a row for emphasis.**
- **In-world voice for anything that exists in the world.** People, places,
  items, factions, history and events read like a fan wiki: "Thessalar's craft
  fell about 500 years ago," never "Korey decided the craft fell…".
- **DM voice for how it is played.** Mechanics, rules, encounter tables,
  session plans and pacing notes speak to the DM.
- **Open questions stay on the planning layer.** The backlog, drafts and
  planning pages hold what is undecided. A dossier, item or location entry
  never carries "pending", "TBD" or "decision needed". If a detail is unknown,
  the entry says what is known and stops.
- **Names.** Avoid "The" plus a vague word ("the Figure", "the Hollow") everywhere.
  - Places and celestial bodies get proper names, the way real astronomy names things: Andromeda, Sagittarius A*, Cygnus X-1. A name, not a moniker or a title, often paired with a catalogue designation.
  - Constructs and concepts get plain, definitive descriptions, even if that takes a few words.
  - People may carry monikers.
- **Depth follows weight.** A page gives all the appropriate information there is, at the depth its subject deserves: a central figure like N'ghathrod gets a full, detailed page; his lieutenants get shorter pages that still carry their key details. Factual, with a little narrative prose where it helps, never a generalized or flowery recount. Back-link every name, place and thing that has its own page.
- **No status labels on factual pages.** "Unresolved", "open", "pending" and similar callouts do not belong on a world page. They go in the page's DM notes tab or on a DM planning page. If an entry is light because little is known, write what is known and stop.
- Not everything will be decided, and some things will change. That is fine;
  rewrite the entry when it does.

## Drafts

| Draft | Subject | State |
|---|---|---|
| [divine-rules.md](divine-rules.md) | Worship, galaxies, polarity, realms, one god many names | Draft |
| [vecna.md](vecna.md) | Vecna's history, realm, faithful and their names | Draft |
| [tharizdun.md](tharizdun.md) | The prison, the Day of Chaos, how Vecna uses him | Draft |
| [glyth-watcher.md](glyth-watcher.md) | The Watcher who came back from Glyth | Sketch |
