/**
 * Caelestis — Current Bearing
 * ───────────────────────────
 * Powers the command bar that nav.js injects at the top of every page.
 * Written during a session run (prime/notes/SESSION-RUN.md) and checked
 * against the record by `node scripts/data.js check`.
 */
window.CAELESTIS_BEARING = {
  voyage:   6,
  title:    'What Is Here Has Not Left',
  position: 'The Tyrant Ship',
  posNote:  'Toril orbit',
  outstanding: 'Choose the instructor who joins the crew, and cross to H\u2019Catha',

  /* Revealed when the bar is expanded — the detail the strip has to trim. */
  detail: {
    consequence: 'The crew held the ship, burned the bloom off the Command Deck and tore the great flower from the dead beholder. Beneath it Gregory found the Lantern of Flourishing, the device the mechanical behir, Ostekk-10, had asked for. They told it nothing was found and put it out through the cargo hold, still searching. Bartholomew caught Miken speaking into a sending stone.',
    quests: [
      { name: 'The Tyrant Ship and the H\u2019Catha Meteor', progress: '3/5', href: 'quests/the-tyrant-ship-and-the-hcatha-meteor.html' },
      { name: 'The Caelestis Burglaries',                     progress: '1/3', href: 'quests/the-caelestis-burglaries.html' },
      { name: 'The Path to Viren',                            progress: '1/3', href: 'quests/the-path-to-viren.html' },
      { name: 'Tumak\u2019s Search for Family',               progress: '0/1', href: 'quests/tumaks-search-for-family.html' }
    ],
    met: [
      { name: 'Ostekk-10',        href: 'dossiers/the-behir.html' },
      { name: 'Ostekk-6',         href: 'dossiers/ostekk-6.html' },
      { name: 'Miken',            href: 'dossiers/miken.html' },
      { name: 'Winston Ryeback',  href: 'dossiers/winston-ryeback.html' },
      { name: 'Krik\u2019Lit',    href: 'dossiers/krik-lit.html' },
      { name: 'Pffred',           href: 'dossiers/pffred.html' }
    ]
  },

  links: {
    bearing:   'bearings/index.html',
    voyage:    'voyages/voyage-006.html',
    helm:      'https://royek.foundryserver.com/game',
    scheduler: 'https://rallly.co/invite/B8uUYlcm4oKB'
  }
};
