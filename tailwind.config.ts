import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1B2A",
          mid: "#1A3A5C",
          light: "#243D55",
        },
        gold: {
          DEFAULT: "#C9A84C",
          dark: "#B8943A",
          pale: "#F5EDD6",
        },
        offwhite: "#F5F4F0",
        "text-dark": "#1A2332",
        "text-mid": "#4A5568",
        "text-light": "#718096",
        border: "#E2E8F0",
        "border-mid": "#CBD5E0",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 1px 3px rgba(13,27,42,0.08), 0 1px 2px rgba(13,27,42,0.04)",
        md: "0 4px 16px rgba(13,27,42,0.10), 0 2px 6px rgba(13,27,42,0.06)",
        lg: "0 12px 40px rgba(13,27,42,0.14), 0 4px 12px rgba(13,27,42,0.08)",
        xl: "0 24px 64px rgba(13,27,42,0.18)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
