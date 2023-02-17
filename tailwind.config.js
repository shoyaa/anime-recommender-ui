/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(3,minmax(390px,460px))",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        "auto-fill": "repeat(auto-fill,265px)",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
      boxShadow: {
        colorGlow: "0px 0px 243px 15px rgba(201,209,167,0.9)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleOut: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1.0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        scaleOut: "scaleOut 0.7s ease-out",
        fadeInFast: "fadeIn  0.2s ease-in-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
  ],
};
