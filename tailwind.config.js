import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: "#F7F7F7",
      },
      secondary: {
        DEFAULT: "#1d1d1f",
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
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        archivo: ["Archivo"],
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
