import { Player } from './Player.js'
import { Deck } from './Deck.js'
import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a CardTable.
 */
export class CardTable {
/**
   * Array of players.
   *
   * @type {Player[]}
   */
  #players

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

    const players = []

    for (let i = 0; i < numberOfPlayers; i++) {
      const nickname = `Player ${i + 1}`
      const standValue = 14
      let player = new Player(nickname, standValue)
      if (i < 3) {
        const random = Math.floor(Math.random() * (18 - 11 + 1) + 11)
        player = new Player(nickname, random)
      } else if (i < 6) {
        player = new Player(nickname, 14 + i)
      } else {
        player = new Player(nickname, standValue)
      }
      players.push(player)
    }

    this.#players = players

    /**
     * The discard pile.
     *
     * @type {PlayingCard[]}
     */
    this.discardPile = []

    /**
     * The dealer.
     *
     * @type {Player}
     */
    this.dealer = new Player('Dealer')
    this.dealer.standValue = Math.floor(Math.random() * (18 - 13 + 1) + 13)

    /**
     * The deck.
     *
     * @type {Deck}
     */
    this.Deck = new Deck()
    this.Deck.shuffle()
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
    console.log(player)
    console.log(dealer)
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
    const winner = this.compareHands(player, dealer)
    const dealerWon = winner.nickname === dealer.nickname
    const loser = dealerWon ? player : dealer

    console.log('The winner is', winner.toString())
    console.log('The loser is', loser.toString())
  }

  /**
   * Play rounds
   *
   *@param {number} numberOfRounds
   */
  playRounds (numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
      this.#players.forEach((player) => {
        const card = this.deal()
        player.addToHand(card)
      })
      this.#players.forEach((player) => {
        this.playOut(player, this.dealer)
        this.dealer.discardHand()
      })
    }
  }
}
