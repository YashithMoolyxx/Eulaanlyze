/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/EulaAnalyze/backend/templates/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        balac:'#4B5563',
        kinpur:'#6C0EEF',
        bala:'#27364C',
        kinpur2:'#F1E6FF',
        'light-purple': 'hsl(270, 80%, 70%)',
        'dark-purple': 'hsl(270, 80%, 40%)',
      },
    },
  },
  plugins: [],
}
