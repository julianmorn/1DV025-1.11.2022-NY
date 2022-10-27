import { PlayingCard } from './PlayingCard'

/**
 * Represents a Player.
 */
export class Player {
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
    this.nickname = nickname

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
    Object.freeze(this)
  }

  /**
   * Add a playing card to the hand.
   *
   * @type {playingCard}
   */
  addToHand (playingCard) {
    this.hand.push(playingCard)
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
    return `${this.nickname} : ${cardString}`
  }

   /**
   * Points of player.
   * @return {number}
   */
  valueOf () {
    let totalValue = 0
    this.hand.forEach(card => {
      totalValue += card.rank
    })
    return totalValue
  }
}
