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
        50: '#f5fafd',
        100: '#e7f5fc',
        200: '#c7e3fb',
        300: '#a3cbfa',
        400: '#71a0fa',
        500: '#6280ee',
        600: '#2e4ff4',
        700: '#283ede',
        800: '#2131ae',
        900: '#1b2887',
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
