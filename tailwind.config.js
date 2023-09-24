/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        'black' : '#2B2B2B',
        'gray': '#3B3B3B',
        'gray-light': '#858584',
        'white': '#FFFFFF',
        'purple': '#A259FF',
      },
      fontFamily:{
        main: ['Work Sans'],
        second: ['Space Mono'],
      },
      extend: {},
    },
    plugins: [],
  }