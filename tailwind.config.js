/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cherish: {
          pink: "#FFB6C1",
          rose: "#FF69B4",
          red: "#FF1493",
          cream: "#FFF5F5",
          gold: "#D4AF37",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
