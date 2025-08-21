/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin"); // ✅ Correctly imported

module.exports = {
  darkMode: "class", // Must be 'className'
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // required for React components
  ],
  theme: {
    extend: {
      colors: {
        // 'primary-bg': '#36404a',
        "primary-bg": "#1a202c", 

        "secondary-bg": "#030712",
        "chat-bg": "#1a202c",
        "primary-text": "#a6b0cf",
        chat_primary: "#7269ef",
      },
    },
  },
  plugins: [
    // The plugin to override box-sizing
    plugin(function ({ addBase }) {
      addBase({
        "*, ::before, ::after": {
          boxSizing: "content-box", // Overriding the default
        },
      });
    }),
    // ... any other plugins
  ],
};
