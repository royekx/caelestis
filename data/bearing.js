/**
 * Caelestis — Current Bearing
 * ───────────────────────────
 * Powers the command bar that nav.js injects at the top of every page,
 * and holds the values the Current Bearing's banner shows. Written during
 * a session run (docs/SESSION-RUN.md) and checked against the record and
 * the banner by `node tools/data.js check`.
 *
 *   goal         the arc's goal: the banner's headline and the bar's line
 *   level        the crew's level; levelUp shows the reminder in both
 *   allHands     the All Hands line's phrases, in both
 *   passage      the next passage: embers (Fleet days) and where to
 *   nextSession  the next voyage's real-world date, 'YYYY-MM-DD' or
 *                'YYYY-MM-DD HH:MM' (24-hour), set when the scheduler poll
 *                settles and cleared to '' after the voyage is played
 */
window.CAELESTIS_BEARING = {
  voyage:   6,
  title:    'What Is Here Has Not Left',
  date:     '1491.7.12',
  goal:     'Retrieve the adamantine from H\u2019Catha',   // the arc's goal, the banner headline
  goalQuest: 'quests/the-tyrant-ship-and-the-hcatha-meteor.html',
  level:    4,
  levelUp:  true,   // the crew levelled at the last voyage; shows 'Level up to <level> before you sail' until the next write-up
  passage:  { embers: 14, to: 'H\u2019Catha' },
  allHands: ['choose the instructor', 'Ostekk-2', 'second in command'],   // the All Hands line, as the banner shows it; [] when All Hands is empty
  nextSession: '',

  links: {
    bearing:   'voyages/bearings/index.html',
    voyage:    'voyages/voyage-006.html',
    helm:      'https://royek.foundryserver.com/game',
    scheduler: 'https://rallly.co/invite/B8uUYlcm4oKB'
  }
};
