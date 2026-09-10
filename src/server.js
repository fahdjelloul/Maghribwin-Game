const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/api/games', (req, res) => {
  res.json({
    success: true,
    games: [
      { id: 'memory', name: 'Memory Game', description: 'لعبة الذاكرة' },
      { id: 'cards', name: 'Card Game', description: 'لعبة الورق' },
      { id: 'puzzle', name: 'Puzzle Game', description: 'لعبة الألغاز' },
      { id: 'quiz', name: 'Quiz Game', description: 'لعبة المسابقات' }
    ]
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: '✅ Server is running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;