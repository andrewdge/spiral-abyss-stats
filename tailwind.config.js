module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '-10': '-10',
      },
      backgroundImage: theme => ({
        'watatsumi': "url('../public/images/watatsumi.webp')"
      }),
      colors: {
        'menu-item': '#4e5a70',
        'menu-yellow': '#EDE5DA',
        'menu-gray': '#50596A',
      },
      gridTemplateColumns: {
        'teamcontainer': '10% 70% 20%',
      },
      invert: {
        81: '.81'
      }
    },
  },
  variants: {
    extend: {},
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
