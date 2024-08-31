/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/App"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customColor: '#213547'
      }, 
      gridTemplateColumns: {
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-1-5': 'span 1.5 / span 1.5',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
    },
  },
  plugins: [],
}
