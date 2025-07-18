// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    "bg-gradient-to-br",
    "from-orange-100",
    "via-orange-200",
    "to-orange-300",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
