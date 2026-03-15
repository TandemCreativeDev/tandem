import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "scale-out": "scaleOut 0.4s ease-in forwards",
        "fade-in": "fadeIn 1.2s ease-in forwards",
        "logo-breathe": "logo-expand 0.8s ease-out forwards, logo-pulse 2.8s ease-in-out 0.8s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
        "logo-expand": {
          from: { letterSpacing: "0em" },
          to: { letterSpacing: "0.14em" },
        },
        "logo-pulse": {
          "0%, 100%": { letterSpacing: "0.14em" },
          "50%": { letterSpacing: "0.19em" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "tandem-regular": ["var(--font-diatype-regular)", "sans-serif"],
        "tandem-medium": ["var(--font-diatype-medium)", "sans-serif"],
        "tandem-mono-regular": [
          "var(--font-diatype-mono-regular)",
          "sans-serif",
        ],
        "tandem-mono-medium": ["var(--font-diatype-mono-medium)", "sans-serif"],
        "tandem-condensed-medium": [
          "var(--font-diatype-condensed-medium)",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  safelist: ["animate-logo-breathe"],
  plugins: [],
} satisfies Config;
