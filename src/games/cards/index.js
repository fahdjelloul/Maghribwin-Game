// Card Game Logic
class CardGame {
  constructor() {
    this.hand = [];
    this.deck = [];
    this.score = 0;
  }

  start() {
    this.initializeDeck();
    this.dealCards();
    return this.hand;
  }

  initializeDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    this.deck = [];
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push({ value, suit });
      }
    }
  }

  dealCards() {
    this.hand = this.deck.sort(() => Math.random() - 0.5).slice(0, 5);
  }

  getScore() {
    return this.score;
  }
}

module.exports = CardGame;