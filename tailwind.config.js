/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
      Sathoshi: ['Satoshi', 'sans-serif'], // Use 'custom' as your class name
    },
  },
  },
  plugins: [],
}

