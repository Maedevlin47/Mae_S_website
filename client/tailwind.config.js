/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/src/components/**/*.{html,js,jpg}',
  './client/public/index.html',
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
