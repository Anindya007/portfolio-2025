/**
 * Tailwind CSS Configuration File
 * This file is used to customize your Tailwind CSS setup.
 * For more information, visit: https://tailwindcss.com/docs/configuration
 */

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1313afff', // Example primary color, adjust as needed
        accent: '#00ff99', // Main accent color
      },
    },
  },
  plugins: [],
};
