module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22223b',
        accent: '#9a8c98',
        secondary: '#f2e9e4',
        highlight: '#c9ada7',
        gold: '#ffd700',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(34,34,59,0.08)',
      },
    },
  },
  plugins: [],
};
