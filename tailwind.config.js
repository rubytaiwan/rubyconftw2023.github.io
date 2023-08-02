const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: "class",
  content: [
      "./_drafts/**/*.{html,md}",
      "./_posts/**/*.{html,md}",
      "./_includes/**/*.{html,md}",
      "./_layouts/**/*.{html,md}",
      "./*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-pink': '#d90845',
        'dark-pink-2': '#990531',
        'darkblue': '#000929',
        'black': '#111111',
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        russo: ["Russo One", "sans-serif"]
      },
      fontSize: {
        '2.5': '0.625rem', // 10px
        '3.75': '0.9375rem', // 15px
        '5.5': '1.375rem', // 22px
        '6.5': '1.625rem', // 26px
        '7.5': '1.875rem', // 30px
        '8.5': '2.125rem', //34px
        '9': '2.25rem', // 36px
        '9.5': '2.375rem', // 38px
        '20': '5rem', // 80px
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}