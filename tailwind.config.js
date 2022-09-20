/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      color: {
        'basil-peat': '#7C7257',
        'basil-red': '#B12A1B',
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
  plugins: [
    require('preline/plugin'),
  ],
});
