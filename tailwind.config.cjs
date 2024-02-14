/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A60F37",
        secondary: "#EAEAFC",
        footer: "#2E3E5C",
      },
    },
  },
  plugins: [],
};
