/**
 * Caelestis — Current Bearing
 * ───────────────────────────
 * Powers the command bar that nav.js injects at the top of every page,
 * and holds the values the Current Bearing's banner shows. Written during
 * a session run (docs/SESSION-RUN.md) and checked against the record and
 * the banner by `node tools/data.js check`.
 *
 *   next         the banner's headline: the first Standing Orders item
 *   level        the crew's level
 *   passage      the next passage: embers (Fleet days) and where to
 *   nextSession  the next voyage's real-world date, 'YYYY-MM-DD' or
 *                'YYYY-MM-DD HH:MM' (24-hour), set when the scheduler poll
 *                settles and cleared to '' after the voyage is played
 */
window.CAELESTIS_BEARING = {
  voyage:   6,
  title:    'What Is Here Has Not Left',
  date:     '1491.7.12',
  position: 'Tyrant Ship',
  posNote:  'Toril orbit',
  outstanding: 'Choose the instructor who joins the crew, and cross to H\u2019Catha',
  goal:     'Retrieve the adamantine from H\u2019Catha',   // the arc's goal, the banner headline
  goalQuest: 'quests/the-tyrant-ship-and-the-hcatha-meteor.html',
  level:    4,
  levelUp:  true,   // the crew levelled at the last voyage; shows 'Level up to <level> before you sail' until the next write-up
  passage:  { embers: 14, to: 'H\u2019Catha' },
  nextSession: '',

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
