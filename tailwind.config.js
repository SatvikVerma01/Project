module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:"#4361ee",
      },
      backgroundImage: {
        logo: "url('./images/logo.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
