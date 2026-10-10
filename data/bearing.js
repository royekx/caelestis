/**
 * Caelestis — Current Bearing
 * ───────────────────────────
 * Powers the command bar that nav.js injects at the top of every page.
 * Written during a session run (prime/notes/SESSION-RUN.md) and checked
 * against the record by `node scripts/data.js check`.
 */
window.CAELESTIS_BEARING = {
  voyage:   5,
  title:    'Retreat Is Always an Option',
  position: 'The Tyrant Ship',
  posNote:  'Toril orbit',
  outstanding: 'Bring the helm down to the Command Deck and install it where magic fails',

  /* Revealed when the bar is expanded — the detail the strip has to trim. */
  detail: {
    consequence: 'The crew went down without resting and found the Command Deck, and where the helm must go: on the platform beneath a dead beholder whose central eye still cancels magic in the room. Between it and the helm, a mechanical behir that nearly killed Bartholomew still holds the Hollow Deck, and the crew retreated from it.',
    quests: [
      { name: 'The Tyrant Ship and the H\u2019catha Meteor', progress: '1/5', href: 'quests/the-tyrant-ship-and-the-hcatha-meteor.html' },
      { name: 'The Caelestis Burglaries',                     progress: '1/3', href: 'quests/the-caelestis-burglaries.html' },
      { name: 'The Path to Viren',                            progress: '1/3', href: 'quests/the-path-to-viren.html' },
      { name: 'Tumak\u2019s Search for Family',               progress: '0/1', href: 'quests/tumaks-search-for-family.html' }
    ],
    met: [
      { name: 'Ostekk-6',         href: 'dossiers/ostekk-6.html' },
      { name: 'Ostekk-2',         href: 'dossiers/ostekk-2.html' },
      { name: 'The Behir',        href: 'dossiers/the-behir.html' },
      { name: 'Vaelorix',         href: 'dossiers/vaelorix.html' },
      { name: 'Miken',            href: 'dossiers/miken.html' },
      { name: 'Winston Ryeback',  href: 'dossiers/winston-ryeback.html' }
    ]
  },

  links: {
    bearing:   'bearings/index.html',
    voyage:    'voyages/voyage-005.html',
    helm:      'https://royek.foundryserver.com/game',
    scheduler: 'https://rallly.co/invite/B8uUYlcm4oKB'
  }
};
