import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-apple)"],
        sans: ["var(--font-inter)"],
      },

      colors: {
        custom: {
          yellow: "#FEDC60",
        },
      },
    },
  },
  plugins: [],
};
export default config;
