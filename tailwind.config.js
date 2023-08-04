/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        orange: '#ed3c1f',
        beige: '#ebdfce',
        black: '#272624'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
