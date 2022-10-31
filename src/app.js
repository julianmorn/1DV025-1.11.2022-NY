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
  const numberOfPlayers = 2
  const cardTable = new CardTable(numberOfPlayers)
} catch (e) {
  console.error(e.message)
}
