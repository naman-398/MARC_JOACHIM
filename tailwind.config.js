/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundSize: {
        '100': '100% 100%'
      },
      screens: {
        '992': '992px',
        '500': '500px',
        '576': '576px',
        '1400': '1400px',
        '1600': '1600px',
      }
    },
  },
  plugins: [],
}