/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        puzzle: {
          red: '#ef4444',
          green: '#22c55e',
          blue: '#3b82f6',
          yellow: '#eab308',
          purple: '#a855f7',
          orange: '#f97316',
          cyan: '#06b6d4',
          pink: '#ec4899',
          brown: '#8b4513',
          lightgray: '#d1d5db',
        }
      },
      animation: {
        'bounce-in': 'bounceIn 0.6s ease-out',
        'pulse-win': 'pulse 1s ease-in-out infinite',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}