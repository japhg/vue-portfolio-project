import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: "#0A192F",
      },
      secondary: {
        DEFAULT: "#CCD6F6",
      },
      accent: {
        DEFAULT: "#64FFDA",
      },
      highlight: {
        DEFAULT: "#112240",
      },
      muted: {
        DEFAULT: "#8892B0",
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
