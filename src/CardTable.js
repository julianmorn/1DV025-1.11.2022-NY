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
   * Compare hands.
   *
   * @param {Player} player
   * @param {Player} dealer
   * @returns {Player} Returns the winning player.
   */
  compareHands (player, dealer) {
    if (!player.isBusted && (player.isNaturalWinner || dealer.isBusted || player.valueOf() > dealer.valueOf())) {
      return player
    } else {
      return dealer
    }
  }

  /**
   * deal a card to player.
   *
   * @returns {Deck} deal a card to a player
   */
  deal () {
    const deltCard = this.Deck.deal()
    return deltCard
  }

  /**
   * Play out
   *
   * @param {Player} player
   * @param {Player} dealer
   */
  playOut (player, dealer) {
    while (player.canHit && !player.isBusted && !player.isNaturalWinner) {
      const card = this.deal()
      player.addToHand(card)
    }

    if (player.valueOf() < 21) {
      while (dealer.canHit && !dealer.isBusted && !dealer.isNaturalWinner) {
        const card = this.deal()
        dealer.addToHand(card)
      }
    }
    const winner = this.compareHands(this.dealer, player)
    const dealerWon = winner.nickname === 'dealer'
    const loser = dealerWon ? player : dealer

    console.log('The winner is', winner.toString())
  }
}
