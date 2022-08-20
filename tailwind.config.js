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
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      action: '#575D75',
      black: '#000',
      grey: '#676060',

      violet: {
        900: '#93A0CD',
        700: '#4338ca',
      },
      white: '#FFFFFF',
      green: {
        900: '#5EC1C6',
        600: '#0d9488',
        400: '#2dd4bf',
        200: '#99f6e4',
      },
    },
  },
  plugins: [],
};
