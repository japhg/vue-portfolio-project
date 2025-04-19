import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: "#e9e9e9",
      },
      secondary: {
        DEFAULT: "#32322e",
      },
      softGray: {
        DEFAULT: "#6e6e73",
      },
      softWhite: {
        DEFAULT: "#F8F9F9",
      },
      softBlack: {
        DEFAULT: "#17252A",
      },
      lightGray: {
        DEFAULT: "#dddcda"
      },
      mediumGray: {
        DEFAULT: "#aaa9a3"
      }
    },
    extend: {
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
