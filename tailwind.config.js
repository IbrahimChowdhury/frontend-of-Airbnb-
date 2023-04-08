/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5385D',
      },
      screens:{
        "xs":{'min': '260px', 'max': '580px'},
      }
    },
  },
  plugins: [],
}

