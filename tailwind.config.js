/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0B0C10',
        darkgrey: '#1F2833',
        whitegrey: '#C5C6C7',
        neonblue: '#66FCF1',
        greenblue: '#45A29E',
      },
    },
  },
  plugins: [],
}