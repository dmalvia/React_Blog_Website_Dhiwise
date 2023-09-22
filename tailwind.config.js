module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8f9fa",
          200: "#f0f0f0",
          900: "#222222",
          "900_02": "#29262d",
          "900_03": "#29252d",
          "900_04": "#1e1c21",
          "900_99": "#0d162499",
          "900_01": "#0d1624",
        },
        blue_gray: {
          100: "#d6dae2",
          200: "#bac1ce",
          300: "#9baabf",
          400: "#74839d",
          600: "#5f6c86",
          700: "#424c5d",
          900: "#262b35",
          "300_01": "#9ea8ba",
        },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        gilroy: "Gilroy",
        publicsans: "Public Sans",
        merriweather: "Merriweather",
        opensans: "Open Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
