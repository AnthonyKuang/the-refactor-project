const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      gray: colors.blueGray,
      blue: colors.lightBlue,
      purple: colors.indigo,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
