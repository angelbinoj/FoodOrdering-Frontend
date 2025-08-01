/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '374px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        arialrounded: ['Arial Rounded MT'],
      },
    },
  },
  plugins: [],
}

