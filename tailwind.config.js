const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // or 'media' if you want to use media query
  content: {
    files: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      width: {
        'calc': 'calc((100vw - 83rem)/2)',
      },
      fontSize: {
        'vws': '18vw',
        'md': '1rem',
      },
      lineHeight: {
        'vws': '11vw',
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        tsiakkas: {
          light: "#f6f1eb",
          dark: "#2d333b",
          innerLight: "#d9e3e8",
          innerDark: "#6e7173",
          blueLight: "#9BD4EF",
          blueDark: "#015682",
        },
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
      body: [
        "Inter",
        "argent-cf",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    screens: {
      tn: "216px",
      xs: "400px",
      sm: "576px",
      md: "960px",
      equilibrium: "82rem",
      lg: "1440px",
      xl: "1840px",
      "2xl": "2160px",
      "3xl": "2560px",
      "4xl": "2940px",
    },
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards",
      enlarge: "enlarge 1s ease-in forwards",
      minify: "minify 1s ease-in forwards",
      spinSlow: "spin 2s linear infinite",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      },
      enlarge: {
        "0%": { transform: "scale(0.75)" },
        "100%": { transform: "scale(1)" }
      },
      minify: {
        "0%": { transform: "scale(1)" },
        "100%": { transform: "scale(0.75)" }
      },
    },
    variants: {
      animation: ["motion-safe"]
    }
  },
};
