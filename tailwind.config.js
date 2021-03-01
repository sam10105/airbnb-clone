const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Circular', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: '375px',
      md: '744px',
      lg: '950px',
      xl: '1128px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        gray: {
          75: '#f7f7f7',
          250: '#ddd',
          750: '#222',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
