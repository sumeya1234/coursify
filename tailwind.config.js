// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"],
      },
      colors: {
        customLight: "#F5F0F7",
        customPurple: "#9c4df4",
        customDark: "#0A033B",
      },
    },
  },
  plugins: [],
}
