# Benched — the template-entity scaffolder

`build-pages.js` is out of service while the automation pipeline is
backtracked. It is here rather than deleted so the logic survives.

**Nothing runs it.** `.github/workflows/deploy.yml` only builds the three
Pagefind indexes and uploads the site — there has never been a build step in
the deploy. Benching it changes nothing about how the site publishes.

Every entity page under `crew-manifest/`, `dossiers/`, `factions/`,
`inventory/`, `navigation-records/` and `quests/` is now fully rendered
static HTML. Edit them directly.

The `data-entity` and `data-field` attributes are left in place. They are
inert — no page reads them at runtime — and they are the map back if the
scaffolder is ever brought forward again. If you would rather they were gone,
they strip cleanly with a regex over the six directories.

## Known to be wrong in it, if it returns

- `TYPES['locations.json'].dir` was `locations`, but `locations.json` carries
  `url: /navigation-records/<slug>.html`. Six rooms were scaffolded into a
  directory nothing links to. Corrected before benching.
- `renderPriorVoyages()` emitted `<details class="prior-voyages">` where
  `entity.css` styles `.prior`. Corrected before benching.
- `lastSeen()` reads `rec.seen` / `rec.mentioned`. The Player Characters and
  Quests tracker tabs have no Visited or Mentioned column, so both arrays come
  back empty and every crew page rendered `Last Seen: Unseen` despite the crew
  appearing in all four voyages. The voyage bullets carry the session tags;
  deriving from `rec.voyages` would be correct for those two types.
- `TYPES['player-characters.json'].stats` has no Species, Class, Station,
  Specialisation or Clearance. Those are not columns in the tracker. They are
  held in the pages, and regenerating overwrites them.
