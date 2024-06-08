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
      screens: {
        'sm': '640px',  // Small devices
        'md': '768px',  // Medium devices
        'tb':'768',//custome Devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra large devices
        '1.5xl': '1440px', // 1.5X large devices
        '2xl': '1536px', // 2X large devices
        '2.5xl': '1600px', // 2.5X large devices
        '3xl': '1920px', // 3X large devices
        '3.5xl': '2560px', // 3.5X large devices
        // Add more custom breakpoints at desired pixel intervals
      },
    },
  },
  plugins: [],
};
export default config;
