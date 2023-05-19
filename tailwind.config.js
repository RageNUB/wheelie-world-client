/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2cf79f",

          "secondary": "#83fce6",

          "accent": "#c43663",

          "neutral": "#1c1917",

          "base-100": "#ffffff",

          "info": "#c084fc",

          "success": "#33E18A",

          "warning": "#fbbf24",

          "error": "#F60E0E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

