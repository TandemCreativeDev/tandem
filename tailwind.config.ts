import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
} satisfies Config;
