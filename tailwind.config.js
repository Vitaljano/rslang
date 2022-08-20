/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Mukta: ['Mukta', 'sans-serif'],
      },
    },
    colors: {
      header: '#93A0CD',
      footer: '#f7cc7b',
      white: '#ffff',
      action: '#575D75',
    },
  },
  plugins: [],
};
