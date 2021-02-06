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
        50: '#f5f8fc',
        100: '#e8f1fc',
        200: '#cddbfb',
        300: '#b1bffa',
        400: '#8c92fa',
        500: '#6a64fc',
        600: '#4a43f6',
        700: '#3b35e5',
        800: '#2f2bba',
        900: '#262493',
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
