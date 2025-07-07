/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      clipPath: {
        "custom-curve": "polygon(0 0, 100% 0, 50% 100%, 0 0)",
      },
      colors: {
        primary: "#AE7ECA",
        secondary: "#8552FF",
        success: "#178F35",
        gray: "#FAFAFA",
        grey: "#666666",
        dark: "#150933",
        blue: "#2A74EF",
        danger: "#C83929",
      },
      fontFamily: {
        light: "light",
        normal: "normal",
        medium: "medium",
        semibold: "semibold",
        boldm: "bold",
        extralight: "extralight",
        extrabold: "extrabold",
      },
    },
  },
  plugins: [],
};
