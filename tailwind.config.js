/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#050505',
          50: '#121212',
          100: '#0F0F0F',
          200: '#0A0A0A',
        },
        purple: {
          light: '#c77dff',
          DEFAULT: '#9d4edd',
          dark: '#7b2cbf',
        },
        lilac: {
          light: '#e0aaff',
          DEFAULT: '#d0a3ff', 
          dark: '#b298dc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-down': 'slideDown 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px 0 rgba(208, 163, 255, 0.3)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(208, 163, 255, 0.5)' },
        },
      },
      boxShadow: {
        'purple': '0 4px 15px -3px rgba(157, 78, 221, 0.5)',
        'purple-lg': '0 10px 25px -5px rgba(157, 78, 221, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(to right, #9d4edd, #c77dff)',
      },
    },
  },
  plugins: [],
};