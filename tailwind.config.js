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
        "primary-red":"#831010"
      },
      backgroundImage:{
        'bannerImage':"url('https://t3.ftcdn.net/jpg/04/10/34/54/360_F_410345403_tV5hpFLJ7VCSgsAYJRC74tG4DA9LTXyC.jpg')"
      }
    },
  },
  plugins: [],
}

