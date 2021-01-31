const { white, coolGray } = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: white,
      gray: coolGray,
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
        50: '#f2ebfe',
        100: '#dac4ff',
        200: '#b990ff',
        300: '#a368fc',
        400: '#9446ed',
        500: '#8719e0',
        600: '#7a0ecc',
        700: '#690cb0',
        800: '#580a94',
        900: '#44056e',
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
