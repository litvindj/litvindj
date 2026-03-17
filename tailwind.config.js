/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050505',
        beige: '#D8C3A5',
        grey: '#888888',
        charcoal: '#0e0e0e',
      },
      fontFamily: {
        header: ['var(--font-anton)', 'Anton', 'sans-serif'],
        body: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
      animation: {
        marqueeBounce: 'marqueeBounce 40s linear infinite alternate',
      },
      keyframes: {
        marqueeBounce: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
