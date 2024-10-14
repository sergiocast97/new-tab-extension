/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'sans': [ 'Inter', 'system-ui', 'sans-serif' ],
    },

    extend: {

      colors: {
        theme: {
            'darkest':  '#18181B',  // Background
            'dark':     '#27272A',  // Foregorund
            'medium':   '#52525B',  // Border Weak
            'light':    '#A1A1AA',  // Border Strong
            'lightest': '#D4D4D8',  // Text Copy
            'white':    '#FFFFFF',  // Text Heading
        },
      },

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

