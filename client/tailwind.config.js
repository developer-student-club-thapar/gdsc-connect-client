/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bordergray: "#e2e8f0",
        // golden
        premium: "#D2AF26",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
