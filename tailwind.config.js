/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "serif"],
      archivo: ["Archivo", "serif"],
      helvetica: ["Helvetica", "serif"],
      noto: ["Noto Serif Display", "serif"],
    },
    screens: {
      tn: "216px",
      xs: "386px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
      xl: "1840px",
      "2xl": "2160px",
      "3xl": "2560px",
      "4xl": "2940px",
    },
  },
  plugins: [],
};
