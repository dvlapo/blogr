const colors = require('tailwindcss/colors')


module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'overpass': ['Overpass'],
      'ubuntu': ['Ubuntu']
     },
    extend: {
      backgroundImage: theme => ({
        'hero-background': "url('/images/bg-pattern-intro.svg')",
        'circles': "url('/images/bg-pattern-circles.svg')",
       })
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     '50%': '50%',
     '16': '4rem',
    },
    zIndex: {
      '10': 10,
       '20': 20,
       '30': 30,
       '40': 40,
       '50': 50,
      '-10': '-10',
      '-20': '-20',
      '-30': '-30',      
     },
    borderRadius: {
      'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     DEFAULT: '4px',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'xl': '0.5rem',
     '2xl': '1rem',
     '3xl': '1.5rem',
     '4xl': '2rem',
     '5xl': '2.5rem',
     '6xl': '3rem',
     '7xl': '3.5rem',
     '8xl': '4rem',
     '9xl': '4.5rem',
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      light_red: 'hsl(356, 100%, 66%)',
      very_light_red: 'hsl(355, 100%, 74%)',
      very_dark_blue: 'hsl(208, 49%, 24%)',
      // neutral
      grayish_blue: 'hsl(240, 2%, 79%)',
      very_dark_grayish_blue: 'hsl(207, 13%, 34%)',
      very_dark_black_blue: '(240, 10%, 16%)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
