const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*/.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        staatliches: ["'Staatliches', cursive", ...defaultTheme.fontFamily.sans],
        coanda: ["Coanda", ...defaultTheme.fontFamily.sans],
        moldiv: ["Moldiv", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: {
          primary: "#F82545",
        },
        blue: {
          primary: "#3498db",
          secondary: "#007aff",
          ternary: "#3498db",
        },
        yellow: {
          primary: "#f1c40f",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "85rem",
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          "@screen md": {
            paddingRight: "2rem",
            paddingLeft: "2rem",
          },
        },
      });
    },
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};

