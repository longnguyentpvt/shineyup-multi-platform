/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#91e2c6",
        green: "#2aa876",
        "dark-green": "#0a7b83",
        "green-2": "#6A9C89",
        primary: "#2aa876",
        blue: "#145388",
        info: "#145388",
        background: "#0F0F0F"
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"]
    }
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    dk: "1024px",
    xl: "1280px",
    xxl: "1536px"
  },
  extend: {},
  plugins: []
};

export default config;
