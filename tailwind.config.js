const swissPlugin = require('./index.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './showcase/**/*.{html,js}',
  ],
  darkMode: 'class',
  plugins: [swissPlugin],
};
