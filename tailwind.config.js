import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: "#16213E",
      },
      secondary: {
        DEFAULT: "#E5EAF5",
      },
      accent: {
        DEFAULT: "#64FFDA",
      },
      highlight: {
        DEFAULT: "#233554",
      },
      muted: {
        DEFAULT: "#AAB8C2",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-primary': "url('/images/gradient.png')"
      },
      fontFamily: {
        sans: ["Inter", 'sans-serif'],
        archivo: ["Archivo"],
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
