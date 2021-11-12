const colors = require('./src/data/colors.json');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
