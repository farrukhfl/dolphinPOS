/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10243e',
        abyss: {
          700: '#0d2036',
          800: '#0a1828',
          900: '#06111d',
          950: '#040b13',
        },
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
        reef: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(16, 36, 62, 0.25)',
        lift: '0 32px 70px -30px rgba(16, 36, 62, 0.4)',
        glow: '0 0 0 1px rgba(12,121,247,0.12), 0 30px 80px -30px rgba(12,121,247,0.45)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee-reverse 48s linear infinite',
        shimmer: 'shimmer 2.4s infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.24,0,0.38,1) infinite',
        'gradient-pan': 'gradient-pan 12s ease infinite',
      },
    },
  },
  plugins: [],
}
