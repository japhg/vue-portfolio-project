import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: "#FFB200",
      },
      secondary: {
        DEFAULT: "#111827",
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
