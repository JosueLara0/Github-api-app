// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: "#DE7119",
      blueMain: "#116979",
      blueSoft: "#18B0B0",
      gray: "#DEE3E2",
      white: "white",
      black: "black",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
