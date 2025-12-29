/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'win95-blue': '#008080',
        'win95-gray': '#C0C0C0',
        'win95-dark-gray': '#808080',
      },
    },
  },
  plugins: [],
}

