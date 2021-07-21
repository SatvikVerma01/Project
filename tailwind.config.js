module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4361ee",
        danger: "#e7515a",
        success: "#1abc9c",
        warning: "#e2a03f",
        dark: "#3b3f5c",
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
