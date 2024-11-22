/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '5px -11px 97px 22px rgba(27,164,223,0.2)'
      },
      colors: {
        'primary': '#13161C',
        'secondary': '#0C0E12',
        'ternary': '#c6e8f7',
        'accent': '#1ba4df',
      }
    },
  },
  plugins: [
  ],
}