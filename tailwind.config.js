/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      orangered: "#FF4500",
      lightcoral: "#F08080",
    },
  },
  plugins: [],
};
