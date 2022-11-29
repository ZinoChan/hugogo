/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");
/* eslint-env node */

module.exports = {
  content: ["./**/*.html", "./app/**/*.svelte"],
  theme: {
    fontFamily: {
      display: ["Syne", "sans-serif"],
      sans: ["Nunito Sans", "sans-serif"],
      code: ["JetBrains Mono", "mono"],
    },
    colors: {
      white: "#ffffff",
      light1: "#FFFBF3",
      blue1: "#4158d0",
      blue2: "#E0E5FF",
      blue3: "#61DAFB",
      purple1: "#c850c0",
      purple2: "#FFC2FB",
      yellow1: "#ffcc70",
      yellow2: "#ffbf47",
      dark1: "#2c2d2c",
      grey1: "#5A5A5A",
      grey2: "#6F6F6F",
      grey3: "#e6e6e6",
      grey4: "#f8f8f8",
      grey5: "#dbe1e8",
      grey6: "#b2becd",
      grey7: "#6c7983",
      grey8: "#454e56",
      grey9: "#2a2e35",
      grey10: "#12181b",
      green1: "#D9FF9F",
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {
      boxShadow: {
        1: "5px 4px #4158d0",
        2: "5px 4px #c850c0",
        3: "5px 4px #6f6f6f",
        6: "1px 1px #6f6f6f",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              "font-weight": "normal",
              "font-size": "2.5rem",
            },
            h2: {
              "font-weight": "normal",
              "font-size": "2rem",
            },
            h3: {
              "font-weight": "normal",
              "font-size": "1.75rem",
            },
            h4: {
              "font-weight": "normal",
              "font-size": "1.5rem",
            },
            h5: {
              "font-weight": "normal",
              "font-size": "1.25rem",
            },

            p: {
              "font-weight": "normal",
              "font-size": "1.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
