export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        // serif: ["F29LT Zarid Display Regular", "serif"],
      },
      colors: {
        whatsapp: "#25D366",
        primary: {
          50: "#e6f1f2",
          100: "#B3E0DE",
          200: "#80C9C9",
          300: "#4EB2B5",
          400: "#26A29F",
          500: "#08B7B2",
          600: "#078E8A",
          700: "#06767A",
          800: "#05605D",
          900: "#044B4A",
        },
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, #62aca4, #daf3ef)",
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out forwards",
        MenuSlideDown: "MenuSlideDown 0.5s ease-in-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
