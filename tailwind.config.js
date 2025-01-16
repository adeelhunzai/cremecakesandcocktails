/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBorder: "#2E2810",
        hoverColor: '#f5cf00'
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], // Set Quicksand as the default sans-serif font
      },
    },
  },
  plugins: [],
};
