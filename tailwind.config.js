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
        primaryLight: "#eaf1ff",
        warningLight: "#fff9ed",
        dangerLight: "#fff5f5",
        successLight: "#ddf5f0",
        darkLight: "#e3e4eb",
      },
      backgroundImage: {
        logo: "url('https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
