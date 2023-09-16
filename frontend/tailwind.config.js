/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat, sans serif"],
        londrina: ["Londrina, sans serif"],
      },
    },
    colors: {
      beige: "#FFF0DC",
      white: "#ffffff",
      grey: "#e0e3d7",
      brown: "#de7833",
      green: "#44694c",
      peach: "#fdd29b",
      yellow: "#fcbe2e",
      darkbrown: "#86471C",
    },
  },
  plugins: [],
};
