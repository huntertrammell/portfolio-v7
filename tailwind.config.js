module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#04c4c7ff",
      secondary: "#dc7f9bff",
      dark: "#2f2f2fff",
      light: "#faf9f9ff",
    },
    extend: {
      fontFamily: {
        primary: ["'Rubik Wet Paint'", "cursive"],
        secondary: ["'Rubik Mono One'", "cursive"],
      },
      backgroundImage: {
        "primary-drip": "url('/assets/images/primary_drip.png')",
      },
    },
  },
  plugins: [],
};
