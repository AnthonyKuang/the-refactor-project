const { white, gray } = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      white: white,
      gray: gray,
      blue: {
        50: '#e6f6ff',
        100: '#bae3ff',
        200: '#7cc4fa',
        300: '#47a3f3',
        400: '#2186eb',
        500: '#0967d2',
        600: '#0552b5',
        700: '#03449e',
        800: '#01337d',
        900: '#002159',
      },
      purple: {
        50: '#f5f9fc',
        100: '#e8f3fc',
        200: '#cbdffb',
        300: '#acc4fa',
        400: '#8298fa',
        500: '#566af9',
        600: '#3e48f5',
        700: '#3339e1',
        800: '#292db4',
        900: '#21268d',
      },
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
