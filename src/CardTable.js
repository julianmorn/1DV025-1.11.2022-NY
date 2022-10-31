import { Player } from './Player.js'
import { Deck } from './Deck.js'
import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a CardTable.
 */
export class CardTable {
  /**
   * Creates a new CardTable object.
   *
   * @param {number} numberOfPlayers - Number of players.
   */
  constructor (numberOfPlayers) {
    /**
     * The number of players.
     *
     * @type {number}
     */
    this.numberOfPlayers = numberOfPlayers

    // Make the object immutable.
    Object.freeze(this)

    if (numberOfPlayers > 7 && numberOfPlayers !== 52) {
      throw new Error('Invalid number of players')
    }

    const players = []

    for (let i = 0; i < numberOfPlayers; i++) {
      const nickname = `player ${i + 1}`
      const standValue = 14
      let player = new Player(nickname, standValue)
      if (i <= 6) {
        player = new Player(nickname, 12 + i)
      } else if (i > 6) {
        player = new Player(nickname, Math.floor(Math.random() * 16) + 12)
      }
      players.push(player)
    }
    console.log(players)

    /**
     * The players.
     *
     * @type {Player[]}
     */
    this.players = players

    /**
     * The discard pile.
     *
     * @type {PlayingCard[]}
     */
    this.playingCard = []

    /**
     * The dealer.
     *
     * @type {Player}
     */
    this.dealer = new Player('Dealer')

    /**
     * The deck.
     *
     * @type {Deck}
     */
    this.Deck = new Deck()
  }

  /**
   * Compare hand of all players.
   */
  compareHands () {
  }

  /**
   * deal a card to player.
   */
  deal () {
    this.players.forEach(player => {
      if (player.canHit && !player.isBusted) {
        const deltCard = Deck.deal()
        console.log(Deck.toString(), '\n')
        console.log('Delt card: ' + deltCard.toString(), '\n')
        player.addToHand(deltCard)
      }
    })
  }

  /**
   * Compare hand of all players.
   */
  playOut () {
    this.deal()
    if (this.dealer.canHit) {
      const deltCard = Deck.deal()
      console.log(Deck.toString(), '\n')
      console.log('Delt card: ' + deltCard.toString(), '\n')
      this.dealer.addToHand(deltCard)
    }
  }
}
