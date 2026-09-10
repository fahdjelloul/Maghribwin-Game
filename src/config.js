// Config file
module.exports = {
  APP_NAME: 'Maghribwin Game',
  VERSION: '1.0.0',
  LANGUAGES: ['ar', 'en', 'fr'],
  GAMES: ['memory', 'cards', 'puzzle', 'quiz'],
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development'
};