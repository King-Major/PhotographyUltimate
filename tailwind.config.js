/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#FFF4E0',
          200: '#F5E6D3',
          300: '#E6D5C1',
          500: '#BFA84F',  // Primary gold
          600: '#9C8A3E',  // Darker gold
          700: '#7A6E30'
        }
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(191, 168, 79, 0.25)',},
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}