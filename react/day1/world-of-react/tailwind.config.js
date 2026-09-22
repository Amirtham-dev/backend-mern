/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FFF8F5',
          100: '#FFEFE8',
          200: '#FFD7C2',
          300: '#FFB899',
          400: '#FFA07A',
          500: '#F97316',
          pastel: '#FFE5D9',
          accent: '#FF8A65',
        },
        pista: {
          50: '#F4FAF5',
          100: '#E6F4E8',
          200: '#C7E8CA',
          300: '#A3D9AA',
          400: '#7BC686',
          500: '#4CAF50',
          pastel: '#D8F3DC',
          accent: '#52B788',
        },
        babypink: {
          50: '#FFF5F7',
          100: '#FFE6EC',
          200: '#FFD6E0',
          300: '#FFB3C6',
          400: '#FF8FAB',
          500: '#FB7185',
          pastel: '#FFE5EC',
          accent: '#F472B6',
        },
        skyblue: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0284C7',
          pastel: '#E0F2FE',
          accent: '#0EA5E9',
        },
        react: {
          blue: '#61DAFB',
          dark: '#23272F',
          navy: '#16181D',
          light: '#F6F8FA',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
