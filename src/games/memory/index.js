// Memory Game Logic
class MemoryGame {
  constructor() {
    this.cards = [];
    this.flipped = [];
    this.matched = [];
    this.score = 0;
    this.moves = 0;
  }

  start(difficulty = 'medium') {
    const sizes = {
      easy: 8,
      medium: 12,
      hard: 16
    };
    
    const cardCount = sizes[difficulty] || 12;
    this.initializeCards(cardCount);
    return this.cards;
  }

  initializeCards(count) {
    this.cards = [];
    const pairs = count / 2;
    
    for (let i = 0; i < pairs; i++) {
      this.cards.push({ id: i, value: i, flipped: false });
      this.cards.push({ id: i + pairs, value: i, flipped: false });
    }
    
    // Shuffle cards
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }

  flipCard(index) {
    if (this.cards[index].flipped || this.matched.includes(index)) {
      return false;
    }
    
    this.cards[index].flipped = true;
    this.flipped.push(index);
    
    if (this.flipped.length === 2) {
      this.checkMatch();
    }
    
    return true;
  }

  checkMatch() {
    const [first, second] = this.flipped;
    this.moves++;
    
    if (this.cards[first].value === this.cards[second].value) {
      this.matched.push(first, second);
      this.score += 10;
    } else {
      this.cards[first].flipped = false;
      this.cards[second].flipped = false;
    }
    
    this.flipped = [];
  }

  getScore() {
    return { score: this.score, moves: this.moves };
  }

  isGameOver() {
    return this.matched.length === this.cards.length;
  }
}

module.exports = MemoryGame;