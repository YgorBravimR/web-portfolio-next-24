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
      mainColorhover: "#BC2D1B",
      inputBg: "#ffdede",
      blackColor: "#1e1e1e",
      whiteColor: "#fafafa",
      darkGrayColor: "#868e96",
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
        "9xl": "4.5rem",
        "10xl": "5rem",
      },
      width: {
        "120": "30rem",
        "130": "32.5rem",
        "140": "35rem",
      },
    },
  },
  plugins: [],
};
export default config;
