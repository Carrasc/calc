/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        "montserrat-bold": ["Montserrat-bold"],
      },
      colors: {
        "miluno-green": "#7AC279",
        "miluno-black": "#1e1e1e",
        "miluno-white": "#F3F3F3",
        "miluno-gray": "#C3C3C3",
      },
    },
  },
  plugins: [],
};
