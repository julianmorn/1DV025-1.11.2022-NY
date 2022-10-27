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
      const player = new Player(nickname)
      players.push(player)
    }

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
  }

  /**
   * Compare hand of all players.
   */
  playOut () {
  }
}
