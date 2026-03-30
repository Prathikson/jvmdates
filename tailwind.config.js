/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAF8F3",
        beige: "#F5EDD8",
        "beige-light": "#FDF8EF",
        forest: "#003934",
        "forest-light": "#004D46",
        gold: "#C8A84B",
        "gold-light": "#E8C96A",
        cream: "#F5EDD8",
        muted: "#6B6560",
        border: "#E8E2D9",
        dark: "#003934",
      },
      fontFamily: {
        sans: ["'Juana'", "'Bricolage Grotesque'", "Georgia", "serif"],
        display: ["'Juana'", "'Bricolage Grotesque'", "Georgia", "serif"],
        body: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        ta: ["'Hind Madurai'", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "ticker": "ticker 24s linear infinite",
        "blink": "blink 2s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200,168,75,0.4)" },
          "50%": { boxShadow: "0 0 0 16px rgba(200,168,75,0)" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
