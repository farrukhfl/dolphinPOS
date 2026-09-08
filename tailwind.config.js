/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10243e',
        dolphin: {
          50: '#eff7ff',
          100: '#dcebff',
          200: '#bfddff',
          300: '#92c8ff',
          400: '#5aabff',
          500: '#2f91ff',
          600: '#0C79F7',
          700: '#0861c6',
          800: '#0753a8',
          900: '#084780',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(16, 36, 62, 0.25)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
}
