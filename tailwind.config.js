/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#222323',
        'secondary': '#A238FF'
      },
      backgroundImage: {
        'hero': "url('/src/assets/img/hero_bg.jpg')",
        'footer': 'url("/src/assets/img/footer_bg.jpg")',
        'left_bg': 'url("/src/assets/img/left_bg.png")',
        'darck_bg': 'url("/src/assets/img/darck_bg.png")',
        'center_gradian': 'url("/src/assets/img/center_gradian.png")'
      },
      boxShadow: {
        'btn': '0px 0px 15px 0px rgba(162,56,255,0.75)',
        'card': '0px 0px 30px 0px rgba(0, 0, 0, 0.45)',
        'header': '0px 2px 25px 0px rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
}