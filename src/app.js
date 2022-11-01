/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 2.0.0
 */

// TODO: Replace the code below with your own game logic.

import { CardTable } from './CardTable.js'

try {
  const numberOfRounds = Number(process.argv[2] || 1)
  const numberOfPlayers = Number(process.argv[3] || 3)
  if (numberOfPlayers > 1 && numberOfPlayers > 7 && numberOfPlayers !== 52) {
    throw new Error('Invalid number of players')
  }
  if (numberOfRounds < 1 || numberOfRounds > 5) {
    throw new Error('Invalid number of rounds')
  }
  const cardTable = new CardTable(numberOfPlayers)
  cardTable.playOut()
} catch (e) {
  console.error(e.message)
}
