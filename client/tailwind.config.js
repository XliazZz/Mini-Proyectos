/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*{js,jsx}",
    "./src/App"
  ],
  "darkMode": "class",
  theme: {
    extend: {
      colors: {
        customColor: '#213547'
      }
    },
  },
  plugins: [],
}