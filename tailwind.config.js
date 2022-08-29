/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Mukta: ['Mukta', 'sans-serif'],
      },
      keyframes: {
        preloader: {
          '0%': { opacity: '1' },
          '10%': { opacity: '.8' },
          '20%': { opacity: '.6' },
          '30%': { opacity: '.2' },
          '40%': { opacity: '.4' },
          '50%': { opacity: '.6' },
          '60%': { opacity: '.8' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        preloader: 'preloader 2s linear infinite',
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
      audio: '#ffdc68',
      success: '#06bfad',
      danger: '#e03168',
      sprint: '#f5c1d2',
      sprintHover: '#F9D7E3',
      yellow: '#FFDC68',
      lightyellow: '#FFE489',

      violet: {
        900: '#93A0CD',
        700: '#4338ca',
      },
      green: {
        900: '#5EC1C6',
        600: '#0d9488',
        400: '#2dd4bf',
        200: '#99f6e4',
      },
      red: 'rgb(185 28 28);',
    },
  },
  plugins: [],
};
