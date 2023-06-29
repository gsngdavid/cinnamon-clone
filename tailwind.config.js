/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        "primary-green": "#91F1C3",
        "primary-purple": "#50227D",
        "primary-gray": "#cfcfcf",
        "gray-light": "#F6F6F6",
        "primary-black": "#1C1C1C"
      },
      backgroundImage: {
        "noise": "url('../images/noise.png')"
      },
      transitionProperty: {
        "left": "left"
      },
      fontFamily: {
        "MontHeavy": "MontHeavy",
        "MontBold": "MontBold",
        "MontRegular": "MontRegular",
        "MontSemiBold": "MontSemiBold",
      }
    },
  },
  
  plugins: [],
}

