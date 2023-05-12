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
    }
  },
  plugins: [],
}

