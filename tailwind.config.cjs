/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bacground: "#C9C9C9",
          card: "#CCCCCC",
          blackShade: "#0A0A0A",
          darkGrey: "#676767",
          white: "#FFFFFF",
        },
        dark: {
          black: "#000000",
          blackShade: "#0A0A0A",
          darkGrey: "#676767",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
