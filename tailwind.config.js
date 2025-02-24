/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'sans-serif', 'system-ui'],
    },

    extend: {
      colors: {
        theme: {
          darkest: '#1A1D33', // Background
          dark: '#2E324D', // Foregorund
          medium: '#474B66', // Border Weak
          light: '#9FA3BF', // Border Strong
          lightest: '#CACEE5', // Text Copy
          white: '#FFFFFF', // Text Heading
        },
      },

      keyframes: {
        blinker: {
          '0%': { opacity: '0' },
          '49%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        separator: 'blinker 2s linear infinite',
      },
    },
  },
  plugins: [],
};
