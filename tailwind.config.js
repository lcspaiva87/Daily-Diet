/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        alert: {
          Dark: '#BF3B44',
          Mid: '#F3BABD',
          Light: '#F4E6E7',
        },
        sucessucess: {
          Dark: '#639339',
          Mid: '#CBE4B4',
          Light: '#E5F0DB',
        },
        base: {
          100: '#1B1D1E',
          200: '#333638',
          300: '#5C6265',
          400: '#828282',
          500: '#B9BBBC',
          600: '#333333',
        },
      },
    },
  },
  plugins: [],
}
