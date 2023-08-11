import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        museoSansRegular: ["Museo-Regular", "sans-serif"],
        museoSansBold: ["Museo-Bold", "sans-serif"],
      },
      colors: {
        green: "#21A068",
        basic: "#2A2A2A",
      },
    },
  },
  plugins: [],
};
export default config;
