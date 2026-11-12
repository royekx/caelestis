# Working

Drafts and staging for the DM wiki. Nothing here is canon until it reaches a
page under `prime/`. Nothing here is linked from a page or deployed.

## How material moves

```
inbox/  →  drafts  →  BACKLOG.md  →  STAGING.md  →  pages under prime/
 raw       argued      to rule on     ruled, waiting    canon
```

1. **inbox/** holds raw material from outside the repo: chat sweeps, module
   sweeps, exports. A file stays only until every item in it is in a draft,
   BACKLOG, STAGING or a page; then it is deleted. Rulings made in a chat do
   not go here: they go into the subject's draft, or STAGING if there is
   none.
2. **Drafts** (`*.md` in this folder) are where a subject is argued out. Each
   ends with **Promotes to** and **Open**. One subject, one draft: its
   rulings, its touch list (Promotes to) and its open questions live in it,
   never in a companion file. A draft whose work runs across several chats
   ends with a **Handoff** section: the next chats in order, each with the
   line that opens it. When the change audit has carried it to the pages,
   the draft is deleted.
3. **BACKLOG.md** lists everything still to rule on or fix, grouped by the page
   it lands on: facts missing from a page, page lines that are wrong or stale,
   open calls, and retired material to drop.
4. **STAGING.md** holds what IS, once ruled, grouped by target page. It is not
   a log. An entry is as long as it needs to be: a line, a paragraph, or a full
   section. When a ruling changes, the entry is rewritten.
5. **Distribution** writes staged entries into their pages, then deletes them
   from STAGING.md and the matching backlog items. STAGING carries no "done"
   notes: an entry that has partly landed is narrowed to what is still
   waiting.
6. **Finished means deleted.** In every working file (drafts, BACKLOG,
   STAGING, the inbox, audits), an item that is done is deleted in the same
   pull request that finishes it. Nothing is marked done, struck through or
   kept as history. A file whose items are all done is deleted.

A chat session works the backlog: Korey rules, the result goes to staging, and
staging is distributed page by page.

## Rules

- Markdown, one file per subject. No page shell, no styling.
- Deliberation lives in drafts and the backlog. Staging and pages state what is.
- The player record (`data/`) never takes anything from here.

## Writing staged entries and pages

The writing rules are in `CLAUDE.md` § Writing, including where open questions
may sit (the planning layer and DM notes tabs) and how names are formed. These
also hold for the working layer and the pages it feeds:

- **Depth follows weight.** A page gives all the appropriate information there is, at the depth its subject deserves: a central figure like N'ghathrod gets a full, detailed page; his lieutenants get shorter pages that still carry their key details. Factual, with a little narrative prose where it helps, never a generalized or flowery recount. Back-link every name, place and thing that has its own page.
- **No status labels on factual pages.** "Unresolved", "open", "pending" and similar callouts do not belong on a world page. They go in the page's DM notes tab or on a DM planning page. If an entry is light because little is known, write what is known and stop.
- Not everything will be decided, and some things will change. That is fine;
  rewrite the entry when it does.

## Drafts

| Draft | Subject | State |
|---|---|---|
| [glyth-watcher.md](glyth-watcher.md) | The Watcher who came back from Glyth | Sketch |
| [nct-127.md](nct-127.md) | Neo Constellation Troupe 127, a travelling band; a seed kept off the player side | Sketch |
| [campaign-middle.md](campaign-middle.md) | Building the post-graduation middle: the invasion ladder, fronts, contracts as nodes, cadence | Draft |
| [common-knowledge.md](common-knowledge.md) | What a cadet would know about each NPC in the player record, sourced and graded, and how it fits the record | Draft; awaits Korey entity by entity |

| [sol-arc.md](sol-arc.md) | Sol's arc: scattered luck, taking it on, Beshaba and Tymora, the road home to Aethris | Draft; open list awaits Korey |
| [tumak-havens.md](tumak-havens.md) | Tumak's road home: only what stays open after the change audit (near-term items for V007, level 5 and the first haven; the conflict; origin) | Open list awaits Korey |
| [repo-refactor.md](repo-refactor.md) | The approved DM structure, the per-page procedure and the link catalogue of moved paths | Reference: link catalogue |
