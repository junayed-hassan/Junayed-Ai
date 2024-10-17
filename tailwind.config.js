/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ["Outfit", "sans-serif"]
      },
      padding: {
        '15vh': '15vh',
      },
      height: {
        '70vh': '70vh',
      },
    },
  },
  plugins: [],
}