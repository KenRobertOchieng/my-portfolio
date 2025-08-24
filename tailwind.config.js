/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'f98e2b',
      },
      container:{
        width: '100%',
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          md : '3rem',
        }
      }
    },
  },
  plugins: [],
}