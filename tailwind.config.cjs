/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./templates/**/*.{liquid,json}",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        testpurple: "#7c3aed",
      },
      height: {
        94: "22rem",
      },
    },
  },
  plugins: [],
};
