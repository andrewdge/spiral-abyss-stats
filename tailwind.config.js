module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '-10': '-10',
      },

      colors: {
        'menu-item': '#4e5a70',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
