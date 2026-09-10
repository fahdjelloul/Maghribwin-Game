// Main entry point
const app = require('./server');

if (require.main === module) {
  // Server is running directly
  console.log('🎮 Maghribwin Game Server Started!');
}

module.exports = app;