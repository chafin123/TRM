/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
});
