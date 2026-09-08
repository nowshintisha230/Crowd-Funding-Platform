import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d9e9ff",
          200: "#b9d6ff",
          300: "#8abcff",
          400: "#5497ff",
          500: "#2f72ff",
          600: "#1a52f0",
          700: "#153fd6",
          800: "#1834ac",
          900: "#193188",
          950: "#131f52",
        },
        accent: {
          50: "#fff4ed",
          100: "#ffe6d5",
          200: "#ffc9aa",
          300: "#ffa374",
          400: "#ff7a3c",
          500: "#fc5717",
          600: "#ed3d0d",
          700: "#c4290c",
          800: "#9c2212",
          900: "#7e1f12",
        },
        success: { 50: "#ecfdf3", 500: "#12b76a", 600: "#039855" },
        warning: { 50: "#fffaeb", 500: "#f79009", 600: "#dc6803" },
        danger: { 50: "#fef3f2", 500: "#f04438", 600: "#d92d20" },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b1b8c7",
          400: "#8691a8",
          500: "#67728c",
          600: "#525c73",
          700: "#434b5e",
          800: "#3a4050",
          900: "#252932",
          950: "#171a20",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px 0 rgb(23 26 32 / 0.06), 0 1px 2px 0 rgb(23 26 32 / 0.04)",
        "card-hover": "0 8px 24px 0 rgb(23 26 32 / 0.10), 0 2px 6px 0 rgb(23 26 32 / 0.06)",
        popover: "0 12px 32px 0 rgb(23 26 32 / 0.14)",
      },
      borderRadius: { xl: "0.875rem", "2xl": "1.25rem" },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;