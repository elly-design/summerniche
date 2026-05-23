/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF6B35',
        green: '#2E7D32',
        darkGray: '#333333',
      },
    },
  },
  plugins: [],
}
