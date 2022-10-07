const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: {
    tailwindcss: {
      content: ['./public/index.html', './src/**/*.{vue,js}'],
      darkMode: 'media',
      theme: {
        extend: {
          colors: {
            'red': {
              ...colors.red,
              300: '#EC0008',
              400: '#E52630',
              500: '#D40007',
            },
            'blue': {
              ...colors.blue,
              500: '#0074e8',
            },
            'gray': {
              ...colors.gray,
              100: '#E0E0E0',
              200: '#FBFBFB',
              300: '#F2F2F2',
              400: '#c9c9c9',
              500: '#8e8e8e',
              600: '#717171',
              700: '#555555',
              800: '#222222',
            },
          },
          inset: {
            '2': '0.5rem',
          }
        },
      },
      variants: {
        extend: {},
      },
    },
    autoprefixer: {},
  },
}
