const swissPlugin = require('../index.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  darkMode: 'class',
  plugins: [swissPlugin],
};
