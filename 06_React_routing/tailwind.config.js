/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#c09578', // We can leave this for other projects
        'brand-deep-blue': '#222831',
        'brand-light-gray': '#f7f7f7',
        'brand-dark-gray': '#393E46',
        'bmw-blue': '#0066b2', // 
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Inter"', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}