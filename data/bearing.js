/**
 * Caelestis — Current Bearing
 * ───────────────────────────
 * Powers the command bar that nav.js injects at the top of every page.
 * Written during a session run (docs/SESSION-RUN.md) and checked
 * against the record by `node tools/data.js check`.
 */
window.CAELESTIS_BEARING = {
  voyage:   6,
  title:    'What Is Here Has Not Left',
  date:     '1491.7.12',
  position: 'Tyrant Ship',
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
      { name: 'Boatswain Tarto',  href: 'registry/dossiers/boatswain-tarto.html' },
      { name: 'Saerthe Abizjn',   href: 'registry/dossiers/saerthe-abizjn.html' },
      { name: 'Winston Ryeback',  href: 'registry/dossiers/winston-ryeback.html' },
      { name: 'Miken',            href: 'registry/dossiers/miken.html' },
      { name: 'Krik\u2019Lit',    href: 'registry/dossiers/krik-lit.html' },
      { name: 'Pffred',           href: 'registry/dossiers/pffred.html' },
      { name: 'Ostekk-6',         href: 'registry/dossiers/ostekk-6.html' },
      { name: 'Vaelorix',         href: 'registry/dossiers/vaelorix.html' },
      { name: 'Ostekk-10',        href: 'registry/dossiers/the-behir.html' }
    ]
  },

  links: {
    bearing:   'voyages/bearings/index.html',
    voyage:    'voyages/voyage-006.html',
    helm:      'https://royek.foundryserver.com/game',
    scheduler: 'https://rallly.co/invite/B8uUYlcm4oKB'
  }
};
