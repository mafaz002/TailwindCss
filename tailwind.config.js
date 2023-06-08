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
      review: "#f0f0f0",
      lightgray: "#D3D3D3",
      gray: "#808080",
    },
  },
  plugins: [],
};
