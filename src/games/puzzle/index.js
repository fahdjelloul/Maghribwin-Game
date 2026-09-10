// Puzzle Game Logic
class PuzzleGame {
  constructor() {
    this.pieces = [];
    this.solved = [];
    this.score = 0;
  }

  start(difficulty = 'medium') {
    const sizes = {
      easy: 6,
      medium: 9,
      hard: 16
    };
    
    const pieceCount = sizes[difficulty] || 9;
    this.initializePuzzle(pieceCount);
    return this.pieces;
  }

  initializePuzzle(count) {
    this.pieces = [];
    for (let i = 0; i < count; i++) {
      this.pieces.push({ id: i, placed: false });
    }
    this.pieces = this.pieces.sort(() => Math.random() - 0.5);
  }

  placePiece(id) {
    const piece = this.pieces.find(p => p.id === id);
    if (piece && !piece.placed) {
      piece.placed = true;
      this.score += 5;
      return true;
    }
    return false;
  }

  getScore() {
    return this.score;
  }
}

module.module = PuzzleGame;