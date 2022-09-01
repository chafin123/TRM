/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      color: {
        'basilPeat': '#7C7257',
        'basilRed': '#B12A1B',
      },
      fontFamily: {
        'nova-sans': ['gill-sans-nova', 'sans-serif']
      },
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': {opacity: 0},
          '100%' : {opacity: 1},
        },
      }),
    },
  },
  plugins: [],
});
