// const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        primary: "#292930",
        secondary: "#e31b6d",
      },
    },
  },
  variants: {},
  plugins: [],
}
