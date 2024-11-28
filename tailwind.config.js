/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'irene': {
          100 : "#FAF2DF",
          200 : "#EAD2A3",
          300 : "#CE9464", 
          400 : "#37290C",
        }
      }
    },
  },
  plugins: [],
}

