/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          700: "#ADABAA",
          800: "#7E7D7D",
          900: "#BEB4A8",
        },
        gray: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#D6D7D9",
          400: "#BCBCC0",
          500: "#98999C",
          600: "#161C23",
          700: "#494A4C",
          800: "#212121",
          900: "#0A1018",
        },
        yellow: {
          300: "#85633E",
          400: "#DB953C",
          500: "#E0B36A",
          600: "#C78D4E",
          700: "#E2C19D",
          800: "#4B3C2B",
          900: "#403D3A",
        },
        purple: {
          100: "#8484F1",
        },
      },
    },
  },
  plugins: [],
};
