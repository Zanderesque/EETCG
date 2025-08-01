/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1A3C5A", // Deep Navy Blue for trust and professionalism
        gold: "#D4A017", // Gold for elegance and success
        white: "#FFFFFF", // White for clean backgrounds
        "light-gray": "#F5F6F5", // Light Gray for subtle contrasts
        teal: "#4DB6AC", // Soft Teal for highlights and CTAs
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
