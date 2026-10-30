import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#07050a",
        ink: "#0d0a12",
        burgundy: {
          DEFAULT: "#7a1230",
          light: "#a3193f",
          dark: "#4a0b1d",
        },
        magenta: {
          DEFAULT: "#e0287d",
          soft: "#ff5fa8",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        display: ['"Sora Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(224,40,125,0.55)",
        "glow-lg": "0 0 80px -10px rgba(224,40,125,0.5)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        gradient: "gradientShift 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
