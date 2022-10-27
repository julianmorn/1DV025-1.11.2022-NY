/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 2.0.0
 */

// TODO: Replace the code below with your own game logic.

import { Deck } from './Deck.js'

try {
  // Create a deck, view its 52 playing cards,...
  const deck = new Deck()
  console.log(deck.toString(), '\n')

  // ...shuffle the deck and show the playing cards again.
  deck.shuffle()
  console.log(deck.toString(), '\n')

  const deltCard = deck.deal()
  console.log(deck.toString(), '\n')
  console.log('Delt card: ' + deltCard.toString(), '\n')
  
} catch (e) {
  console.error(e.message)
}
