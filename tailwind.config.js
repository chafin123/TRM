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
    },
  },
  plugins: [],
});
