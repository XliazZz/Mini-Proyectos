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
  screens: {
    'sm': '350px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  plugins: [],
}