/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: {
          DEFAULT: "#1A75FF",
          primary: "#1A75FF",
          light: "#AACCFF",
        },
        brandgray: {
          DEFAULT: "#D6D7DB",
          light: "#D6D7DB",
          medium: "#757374",
          dark: "#646767",
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
  },
  plugins: [],
}