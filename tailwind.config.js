const { fontFamily, opacity } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/**/*.{js,ts,jsx,tsx}",
    "./UI/**/*.{js,ts,jsx,tsx}",
    "./stories/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinning: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-logo": "spinning 1s linear infinite",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      flexGrow: {
        2: 2,
      },
      scale: {
        103: "1.03",
      },
      screens: {
        xs: "450px",
        pricingMenu: "500px",
        "2md": "850px",
        xxl: "1359px",
        xxxl: "1450px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        black: "#020202",
        text: "#161616",
        "light-green": "#D1F7EB",
        "dark-green": "#00643C",
        "body-text": { 300: "#666666", 500: "#373A3C" },
        "brand-purple": {
          50: "#E9E6F2", // light
          100: "#CDC4E4",
          200: "#AB9ED0",
          300: "#8F7BBE",
          400: "#7B5DB0",
          500: "#6B40A3", // main
          600: "#5D2D8D",
          700: "#4F2678",
          800: "#432166",
          900: "#2F1747",
        },
        "brand-orange": {
          50: "#FAE0C9",
          100: "#F9D6B7",
          200: "#F7C89F",
          300: "#F4B67F",
          400: "#F09D55",
          500: "#EB7C1C",
          600: "#D6732D",
          700: "#B25E22",
        },
        gray: {
          50: "#FFFFFF",
          100: "#F7F7F7",
          200: "#F0F0F0",
          300: "#E5E4E4",
          333: "#CCCCCC",
          350: "#E9E6F2",
          400: "#9E9E9E",
          500: "#5A5A5A",
          600: "#282828",
          700: "#020202",
        },
      },
      opacity: {
        ...opacity,
        30: "0.3",
      },
      boxShadow: {
        xs: "0px 0px 8px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1);",
        jobCardHover:
          "0px 0px 16px rgba(178, 94, 34, 0.2), 0px 8px 16px rgba(178, 94, 34, 0.2)",
        companyCardHover: "0px 8px 16px rgba(178, 94, 34, 0.2)",
        "1md": "0 4px 8px 0px rgb(0 0 0 / 0.1)",
        "2md": "0 4px 12px 0px rgb(0 0 0 / 0.1)",
        "2lg": "0 8px 32px 0px rgb(0 0 0 / 0.1)",
        innerY:
          "inset 0 2px 4px 0 rgb(0 0 0 / 0.05), inset 0 -2px 4px 0 rgb(0 0 0 / 0.05);",
        drop: "0px 10px 88px rgba(40, 40, 40, 0.2)",
        select: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        innerXL: "inset 0 8px 16px -8px rgba(0,0,0,0.15);",
        card: "0px 0px 16px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.2)",
      },
      letterSpacing: {
        xs: "0.15px",
        sm: "0.25px",
        wider1: "1px",
      },
      borderRadius: {
        "20px": "20px",
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
