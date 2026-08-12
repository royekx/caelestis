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

## 6. LEGIBILITY PASS

- Root size `107.5% → 112%`
- Every declared `rem` font-size under `0.75rem` lifted ~20%, `0.75–0.95rem`
  lifted ~10%; body copy and `clamp()` headings left alone. 65 files touched.
- Sidebar widened `220px → 244px` so the larger nav labels don't wrap
- Nav group labels: bigger, gold instead of gold-dim, less transparent
- `--text-dim` and `--text-muted` both lightened — the size gain was being
  cancelled out by low contrast on near-black. This is the change you'll feel
  most on subtext.

If any of it overshoots, `html { font-size }` in `styles/caelestis.css` is the
one dial that moves everything at once.

---

## 7. PORTRAIT TREATMENT

Added to `styles/caelestis.css`, scoped as `.portrait-frame:has(img)` — a gold
top rule, a vignette that sinks the edges into the page, an inset gold hairline,
and a slow scale on hover.

The `:has(img)` scope does the work: detail pages use `.portrait-frame`, listing
pages use `.crew-thumb` and `.dossier-thumb`, so index pages are untouched.
Frames still showing "Portrait Pending" keep their plain look and pick the
treatment up automatically the day you drop an image in. No per-page edits, now
or later.

---

## 8. INVENTORY RESTRUCTURE

```
inventory/
  index.html                       the ledger
  entries/                         one record per item — the majority
    crimson-bag-of-holding.html
    constellation-shirt.html
    half-ship.html                 NEW
    derelict-logbook.html          NEW
    collection-manifest.html       NEW — entry for the slate
    entry-template.html            copy this for new items
  items/                           the object itself, where one exists
    collection-manifest.html       was inventory/tyrant-ship-manifest.html
```

**Entry vs item.** An entry is the ledger record — what it is, who holds it, what
has happened to it. An item is the object the players can actually read. Most
entries will never have one. Where they do, the entry carries an *"The Object
Itself"* block linking through, the ledger card gets a **Readable** badge, and
the artifact carries a quiet return link back to its entry.

The tyrant ship manifest was only ever the artifact — it had no ledger record at
all, so it was invisible to anyone browsing Inventory. It now has both.

**Three entries added** from the voyage records: Half Ship (V001), Derelict
Logbook (V002), Collection Manifest (V004). Drafted from the voyage text only —
check them.

**Items rows** on voyages 001–003 now list these, both on the voyage pages and in
the index overview panels, so the ledger and the records agree.

Links into the moved files were retargeted across `hub.html`, `voyages/index.html`,
`voyage-001` and `voyage-004`. The Pagefind glob already reads `inventory/**`, so
the subdirectories index without changes.

Also fixed: the ledger subtitle read "the crew's posvoyage" — collateral from an
earlier session→voyage find-and-replace.

---

## 9. CREW MANIFEST RECONCILED

Every crew page ran through Voyage 001 only (Bartholomew through 003). All six now
run through **Voyage 004**, drawn from the voyage records:

- **Boogie** — the half ship on the table, the logbook into his chest, the leap
  home, Vocath glimpsed on the device, the network dream
- **Casey** — Ryeback, the Sea Dock job, the presence at the Sky Dock rail, the
  duplicated logbooks, Arms of Hadar through his constellation
- **Gregory** — the arcane dynamite, the locked terminal, the note about
  Bartholomew, his own face on a broken autognome, Vortex Warp
- **Sol** — Beshaba named, the unhurried voice, the front line, Misfortune's Favor
- **Tumak** — the two half-marks, the archive clearance, the telepathic link,
  fire bolt, the soul knife and the Rune Keeper
- **Bartholomew** — the starry form he recognised from a childhood fall, the match
  down the shaft

Header prose updated for all six so the portrait matches the log. Sol's and
Tumak's changed most — Sol has a name for the laughter now, and Tumak has a
tether.

**Bridge stations added** as a stat row: Tumak captain, Gregory navigator,
Boogie medical, Casey and Sol both gunners, Bartholomew the spelljammer's seat.
Stations are current assignment, not a fixed record — expect them to move.

**Clearance** is a stat row on all six, reading Sailor. Mirt granted it to the
whole party; Gregory's and Tumak's V003 entries say so explicitly, and the other
four now carry the beat.

**Tumak is human.** Species Human, role Rogue, on every surface. Checked the
player-facing site for leaks — there are none.

**Index fixed.** Tumak's row read "Human · Wilder" — Bartholomew's role on the
wrong cadet. All six rows now carry species and station.

Where the crew pages name the half ship, the derelict logbook, or the duplicates,
they link to the inventory entries.

---

## 10. DOSSIERS

Eight new profiles, and the index is grouped by where the crew met them.

**Caelestis — Command & Staff** — Mirt, Tarto, Saerth, Kip & Pik, Mr. Blip,
Sor'kur, plus **Winston Ryeback**, **Rindle Gearloft**, and **Joffrey**.
**Cadet Corps** — **Miken**, **Vena**.
**The Tyrant Ship** — **Ostekk-6**.
**Beyond the Academy** — **Vocath**, **Zerathis**.

**Named, Unfiled** closes the index: Jeffrey, Barret, Derek, Crick Lit, Fred.
One line each, no page. They exist on record without being profiles — which is
itself information, and better than a page of padding.

Joffrey carries a new status, **Under Review**, with its own muted styling. He is
neither ally nor threat; he is a man Mirt told the crew to look into carefully.

Prev/next chains run the whole roster in index order. NPC chips on the voyage
pages now link through to the profiles.

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
