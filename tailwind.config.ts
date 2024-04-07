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
          "aboutus":"url('./Resources/vecteezy_abstract-waving-blue-color-gradient-for-banner-and-background_6543611-1.jpg')"
      },
      fontFamily:{
        Inter:["Inter"]
      },
      height:{
        192:'90vh'
      }
    },
  },
  plugins: [],
};
export default config;
