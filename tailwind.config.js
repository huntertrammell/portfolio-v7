module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#04c4c7",
      secondary: "#dc7f9b",
      dark: "#2f2f2f",
      light: "#faf9f9",
    },
    extend: {
      fontFamily: {
        primary: ["'Rubik Wet Paint'", "cursive"],
        secondary: ["'Rubik Mono One'", "cursive"],
      },
      backgroundImage: {
        "primary-drip": "url('/assets/images/primary_drip.png')",
        "sticker-bomb":
          "linear-gradient(rgba(250,249,249), rgba(250,249,249, .8), rgba(250,249,249)), url('/assets/images/sticker-bomb.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
