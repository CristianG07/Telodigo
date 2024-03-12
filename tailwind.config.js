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
      }
    },
  },
  plugins: [],
}