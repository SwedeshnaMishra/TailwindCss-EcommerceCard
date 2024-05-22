/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme-blue' : '#5515ef',
        'theme-pink' : '#eb589e',
        'theme-blue-dark' : '#3c01ca',
      },
      boxShadow: {
        'theme-1': '0 0 60px -15px rgba(0, 0, 0, 0.7)',
        'theme-2': '15px 0 35px -5px rgba(0, 0, 0, 0.5)',

      },
      fontSize: {
        '10xl' : '10rem',
        '12xl' : '12rem',
        '14xl' : '14rem',
        '16xl' : '16rem',
        '18xl' : '18rem',
        '19xl' : '19rem',
        '20xl' : '20rem',
      },
      letterSpacing: {
        'more-wide': '1rem',
    },
  },
},
variants: {
  extend: {
    scale: ['group-hover'],
    rotate: ['group-hover'],
    inset: ['hover', 'group-hover'],
  },
},
  plugins: [],
}
