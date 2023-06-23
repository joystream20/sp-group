/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [],
  theme: {
    extend: {
      width: {
        'top1': '21.2%',
        'top2': '25%',
        'top3': '20.8%',
        'top4': '23%',
      },
      left: {
        'top3': '47.3%'
      },
      translate: {
        'bt3': '30%',
        'bt4': '52%'
      }
    },
    screens: {
      'md': '896px',
    },
    fontSize: {
      smm: '.75em',
      sm: '.875em',
      base: '1em',
      xl: '1.125em',
      '2xl': '1.25em',
      '3xl': '1.375em',
      '4xl': '1.5em',
      '5xl': '2em',
      '6xl': '2.125em',
      '10xl': '5em',
      'def': '16px'
    }
  },
  plugins: [],
}

