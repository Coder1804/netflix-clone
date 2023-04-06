/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#DB0000",
        secondary:"#564d4d",
        question:"#2d2d2d",
        'question-hover':"#4e4e4e",
        "primary-red":"#831010",
        "input" : "#333333",
      },
      backgroundImage:{
        'bannerImage':"url('http://www.mub.eps.manchester.ac.uk/uommaterialsblog/wp-content/themes/uom-theme/assets/images/default-banner.jpg')"
      }
    },
  },
  plugins: [],
}

