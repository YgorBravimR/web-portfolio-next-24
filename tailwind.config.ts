import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1280px",
      xl: "1920px",
    },
    colors: {
      mainColor: "#db2d1b",
      inputColor: "#ffdede",
      textColor: "#fafafa",
      darkTextColor: "#1e1e1e",
      secondaryTextColor: "#1e1e1e",
      secondaryDarkTextColor: "#fafafa",
      bgColor: "#fafafa",
      darkBgColor: "#1e1e1e",
      subTextColor: "#868e96",
    },
  },
  plugins: [],
};
export default config;
