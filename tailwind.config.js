/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        sitegreen : '#B0C289',
        litegreen : '#F5F7F0'
      }
    },
  },
  plugins: [],
}

