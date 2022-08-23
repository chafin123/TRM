/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
}
