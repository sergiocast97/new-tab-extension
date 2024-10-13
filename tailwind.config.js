/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        blinker: {
          '0%': { opacity: '0'},
          '49%': { opacity: '0'},
          '50%': { opacity: '1'},
          '100%': { opacity: '1'},
          }
      },
      
      animation: {
        separator: 'blinker 2s linear infinite',
      }
    },
  },
  plugins: [],
}

