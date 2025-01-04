const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Include NextUI components
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // Enables dark mode using 'class'
  plugins: [nextui()], // Add NextUI plugin
};
