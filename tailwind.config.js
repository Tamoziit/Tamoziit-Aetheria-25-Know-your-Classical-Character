/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'parchment': '#f9f5ec',
        'bronze': '#4b3d2a',
        'gold': '#d4af37',
        'gold-light': '#f4e4a6',
        'gold-dark': '#b8941f'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'elegant': ['Cormorant Garamond', 'serif'],
        'royal': ['Cinzel', 'serif']
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #d4af37, #f4e4a6, #d4af37)',
        'parchment-texture': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f4e4a6" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-gold': 'pulseGold 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)' }
        }
      },
      textShadow: {
        solid: '3px 3px 0 rgba(0, 0, 0, 0.5)',
        deep: '2px 2px 7px rgba(0,0,0,0.7), 3px 3px 0 rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const shadows = theme('textShadow');
      for (const [key, value] of Object.entries(shadows)) {
        newUtilities[`.text-shadow-${key}`] = { textShadow: value };
      }
      addUtilities(newUtilities);
    },
  ],
}