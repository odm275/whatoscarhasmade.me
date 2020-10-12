// const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        primary: "rgb(7, 72, 237)",
        secondary: "rgb(20, 18, 19)",
      },
    },
  },
  variants: {},
  plugins: [],
}