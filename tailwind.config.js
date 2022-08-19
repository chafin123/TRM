/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
