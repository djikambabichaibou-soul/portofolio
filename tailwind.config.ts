import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "rgb(var(--bg-color) / <alpha-value>)",
        carbon: "rgb(var(--card-bg) / <alpha-value>)",
        "electric-lime": "rgb(var(--accent-color) / <alpha-value>)",
        "off-white": "rgb(var(--text-primary) / <alpha-value>)",
        "holo-silver": "rgb(var(--text-secondary) / <alpha-value>)",
        // Keep hardcoded ones if needed or map them too
        "cyber-violet": "#7c3aed",
      },
      fontFamily: {
        display: ["var(--font-heading)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-jetbrains)"],
      },
    },
  },
  plugins: [],
};
export default config;
