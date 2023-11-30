/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#091E3A",
        primaryDark: "#1950DD",
        secondary: "#5284F6",
        light: "#F4F7F8",
        dark: "#323750",
      },
      fontFamily: {
        sans: ["Libre Franklin", "sans-serif"],
        serif: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
