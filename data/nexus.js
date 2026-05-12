// ─────────────────────────────────────────────────────────────────────────────
// SPELLJAMMER NEXUS ENTRIES
// Add new entries here. The index page renders from this array in order.
//
// Fields:
//   href       — path relative to the nexus index (e.g. 'wildspace.html')
//   title      — entry name
//   sub        — one-line description shown beneath the title
//   badge      — label shown on the right
//   restricted — (optional) true applies the red restricted styling
// ─────────────────────────────────────────────────────────────────────────────

const CAELESTIS_NEXUS = [
  {
    href: 'spelljammer-academy.html',
    title: 'Spelljammer Academy',
    sub: 'The institution, its purpose, the Corps, and the Fleet it serves',
    badge: 'Institution'
  },
  {
    href: 'wildspace.html',
    title: 'Wildspace',
    sub: 'The void between worlds — conditions, navigation, and what it takes to operate within it',
    badge: 'Fundamentals'
  },
  {
    href: 'crystal-spheres.html',
    title: 'Crystal Spheres & the Phlogiston',
    sub: 'The shells that enclose each system, and the volatile medium that lies between them',
    badge: 'Cosmology'
  },
  {
    href: 'spelljamming.html',
    title: 'Spelljamming',
    sub: 'Helms, vessel types, crew roles, and the mechanics of spacefaring travel',
    badge: 'Operations'
  },
  {
    href: 'factions.html',
    title: 'Factions of Wildspace',
    sub: 'The major powers, peoples, and organisations a spacefarer is likely to encounter',
    badge: 'Intelligence'
  },
  {
    href: '../restricted/index.html',
    title: 'Fleet Intelligence Archive',
    sub: 'Classified materials held within the Nexus library. Gold-level clearance required.',
    badge: 'Gold — Bridge',
    restricted: true
  }
];
