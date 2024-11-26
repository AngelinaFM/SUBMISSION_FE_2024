/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato'],
        Sans: ['Sans'],
        Pop: ['Poppins'],
      },
      backgroundImage: {
        'hero-pattern': "url('../../finalFE\src\img\Tmpl1.jpg')"
      }
    },
  },
  plugins: [],
}

