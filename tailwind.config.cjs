/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade"],
  },
};
