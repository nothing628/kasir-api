/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/js/**/*.{vue,js,ts,jsx,tsx}",
    "./resources/config/**/*.edge",
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {},
  plugins: [],
};
