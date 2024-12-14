/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '843px', // Custom breakpoint for 843px
      },
      colors: {
        primary: "#6E00BE",
        secondary: "#00AEFF",
        tertiary: "#E119A0",
        quaternary: "#444255",
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

