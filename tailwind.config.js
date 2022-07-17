const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        'black': '#12151E',
        'hot-pink': '#fd2d78',
        'gray-900': '#18191a',
        'gray-800': '#121212', // Background
        'gray-700': '#2F3133',
        'gray-600': '#404345',
        'gray-500': '#55585A', // Subtitles
        'gray-400': '#797B7C', // Sub.text
        'gray-300': '#A7A8A8', // Menu text and some texts.
        'gray-200': '#D3D4D4',
        'gray-100': '#ECECEC',
        'gray-50': '#F4F4F4',
        'sun': '#FFFF00',
        'blue-first' : '#0380c8',
        'blue-light' : '#0fcbe9',
        'blue-medium': '#0eabe1'
      },
      typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme('colors.gray.500'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.indigo.500'),
              },
              strong: {
                color: theme('colors.gray.200'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.700'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.gray.100'),
              },
              h2: {
                color: theme('colors.gray.100'),
              },
              h3: {
                color: theme('colors.gray.100'),
              },
              h4: {
                color: theme('colors.gray.100'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
      fontFamily: {
        sans: ['Inter var',...defaultTheme.fontFamily.sans],
        vt: "'VT323', monospace",
        droid: "Droid",
        pixelated: "Pixelated",
        pixelated_bold: "Pixelated-bold",
        pixel_boy: "Pixel-boy",
        extrude: "Extrude",
        presstart: "PressStart",
        coderscrux: "CodersCrux"
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
    require('@tailwindcss/line-clamp'),
  ],
}
