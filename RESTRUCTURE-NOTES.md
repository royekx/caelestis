# Caelestis — Gate, Hub, and the Voyages / Logs Rename

This bundle is the **full repo**, built from the export you sent. Replace the
working tree with it, or diff and merge — nothing outside the files listed at the
bottom was touched.

---

## 1. THE GATE AND THE HUB

`index.html` is now a **gate**: art, title, and an Enter affordance. Click
anywhere, press any key, or hit the button and it transitions to `hub.html`. No
scroll, no sidebar — the gate sits outside the terminal on purpose.

`hub.html` is the **terminal**. Everything that used to be below the fold now
lives here, above the fold, in three bands:

| Band | Cards | The idea |
|---|---|---|
| **Crew Operations** | Plot the Next Voyage, Take the Helm | Where the game happens |
| **Crew Intel** | Voyages, Logs, Manifest, Inventory | Yours |
| **Fleet Records** | S.E.A.R.C.H., Dossiers, Navigation Records, Spelljammer Nexus, Corps Protocols | The wider world |

Ordering within each band follows reach-for frequency: scheduling before play;
Voyages and Logs ahead of the lookup-shaped Manifest and Inventory; S.E.A.R.C.H.
first in Fleet Records because when you know the name, search beats browsing.

**Home means the hub.** `scripts/nav.js` points the sidebar logo at `hub.html`
and adds a "Terminal Hub" link under it. The gate is reachable only from the hub
footer. The sidebar is grouped with the same three labels so nav and cards teach
the same map.

A query bar at the top of the hub hands off to S.E.A.R.C.H. with the term pre-run.

---

## 2. THE RENAME

Card labels drop the redundant "Crew" — the band already says it. Page titles
keep it.

| Path | Card label | Page title |
|---|---|---|
| `voyages/` | Voyages | Crew Voyages |
| `logs/` | Logs | Crew Logs |
| `crew-manifest/` | Manifest | Crew Manifest |
| `inventory/` | Inventory | Crew Inventory |

On disk:

```
crew-logs/   →  voyages/     (voyage records)
crew-notes/  →  logs/        (the Google Docs page)
```

Neither new path reuses an old one. That matters: had the notes page moved into
the vacated `crew-logs/`, every stale link would have quietly opened the notes
doc while looking like a voyage link. Both directories are now retired rather
than recycled.

`crew-logs/` and `crew-notes/` remain as redirect stubs so nothing you've already
shared breaks. All carry `data-pagefind-ignore`. Delete both folders whenever
you're satisfied.

---

## 3. CONSOLIDATED VOYAGE RECORDS

One page per voyage: `voyages/voyage-001.html` … `voyage-004.html`, each running
**At a Glance → Recording → Brief Account (open) → Full Account (collapsed)**.
The old brief/detailed split is gone.

`voyages/index.html` rows do two things now. Clicking the row opens the record.
Clicking **Overview** expands the glance inline — synopsis, crew, NPCs, locations,
items — so scanning six voyages for one detail costs no page loads.

`voyages/voyage-template.html` is the starting point for Voyage 005.

`data/voyage.js` is rewritten: all four voyages, one `path` each instead of the
old `brief`/`full` pair. The hub's Voyages card reads it and stays pinned to the
latest entry, so adding a voyage there updates the card by itself.

---

## 4. SEARCH

- Facets in `search/index.html` and `scripts/search.js`: **Crew Voyages**,
  **Crew Logs**, **Crew Inventory**
- Pagefind section filters: `section:voyages`, `section:logs`
- Deploy glob now reads `voyages/*.html, logs/*.html` and includes `hub.html`
  (which carries `data-pagefind-ignore`, so it isn't indexed as content — drop
  that attribute if you'd rather it were)
- `logs/` gets indexed, but only the page header. Everything below it carries
  `data-pagefind-ignore`, and the Google Doc lives in an iframe Pagefind cannot
  see inside. Crew logs stay searchable in the Doc itself.

---

## 5. ONE PRE-EXISTING BUG FIXED

`prime/campaign/voyages/index.html` linked to the player site with four `../`
levels from a three-deep page, which resolved above the Pages root and 404'd.
Corrected to three while retargeting those links at `voyages/`.

Still outstanding there, untouched: it links `voyage-briefing-001/003/004.html`,
and only `002` exists.

---

## FILES CHANGED

```
index.html                          rewritten — gate
hub.html                            NEW — terminal hub
voyages/                            NEW — was crew-logs/, consolidated
logs/                               was crew-notes/, retitled Crew Logs
                                    (your latest version, per-doc frames intact)
crew-logs/, crew-notes/             redirect stubs
data/voyage.js                      rewritten — 4 voyages, single path each
scripts/nav.js                      grouped nav, new paths, logo → hub
scripts/search.js                   section labels
search/index.html                   scope facets
styles/caelestis.css                appended: nav group labels, hub link
inventory/index.html                title → Crew Inventory
prime/campaign/voyages/index.html   retargeted links, depth bug fixed
.github/workflows/deploy.yml        glob updated
SEARCH-SETUP.md, WIKI-PAGE-GUIDE.md path references
```
