/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'basil-peat': '#7C7257',
        'basil-red': '#B12A1B',
      },
      fontFamily: {
        'garmond': ['eb_garamond', 'serif']
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
