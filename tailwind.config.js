/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./ui/tags.tsx",
    "./dashboard/page.tsx",
    "./dashboard/ui/filter.tsx",
    "./ui/hooks/usePagination.tsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#AE7ECA",
        secondary: "#58C4E0",
        gray: "#F3F1F4",
        grey: "#958B8B",
        dark: "#1E2022",
      },
    },
  },
  plugins: [],
};
