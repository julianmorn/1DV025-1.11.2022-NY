/* eslint-disable jsdoc/require-jsdoc */
import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a Player.
 */
export class Player {
  #canHit = false
  #isBusted = false
  #isNaturalWinner = false
  #nickname = ''

  /**
   * Creates a new Player object.
   *
   * @param {string} nickname - Name of the player.
   * @param {number} standValue - The stand value of a player.
   */
  constructor (nickname, standValue = 14) {
    /**
     * The name of the player.
     *
     * @type {string}
     */
    this.#nickname = nickname

    /**
     * The stand value of the player.
     *
     *@type {number}
     */
    this.standValue = standValue

    /**
     * Hand of the player.
     *
     *@type {PlayingCard[]}
     */
    this.hand = []

    // Make the object immutable.
    // Object.freeze(this)
  }

  /**
   * Add a playing card to the hand.
   *
   * @type {playingCard}
   */
  addToHand (playingCard) {
    this.hand.push(playingCard)
    if (this.valueOf() === 21) {
      this.#isNaturalWinner = true
    } else if (this.valueOf() >= this.standValue) {
      this.#canHit = false
    } else if (this.valueOf() > 21) {
      this.#isBusted = true
    }
  }

  /**
   * Discard playingcard from the hand .
   */
  discardHand () {
    this.hand = []
  }
  /**
   *Return player as a string.
   *@type {Player}
   */

  toString () {
    const cardStringArray = this.hand.map(card => card.toString())
    let cardString = '-'
    if (cardStringArray.length > 0) {
      cardString = cardStringArray.join(', ')
    }
    return `${this.#nickname} : ${cardString}`
  }

  /**
   * Points of player.
   * @returns {number}
   */
  valueOf () {
    let totalValue = 0
    this.hand.forEach(card => {
      totalValue += card.rank
    })
    return totalValue
  }

  get canHit () {
    return this.#canHit
  }

  get isBusted () {
    return this.#isBusted
  }

  get isNaturalWinner () {
    return this.#isNaturalWinner
  }

  get nickname () {
    return this.#nickname
  }
}
