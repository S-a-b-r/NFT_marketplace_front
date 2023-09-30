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
      fontSize: {
        'sm': ['0.75rem', '0.825rem'],
        'base': ['1rem', '1.4rem'],
        'xl': ['1.375rem', '2.2rem'],
        '2xl': ['1.75rem', '2.45rem'],
        '3xl': ['2.375rem', '2.85rem'],
        '4xl': ['3.1875rem', ' 3.5rem'],
        '5xl': ['4.1875rem', '4.6rem'],
      },
      extend: {},
    },
    plugins: [],
  }