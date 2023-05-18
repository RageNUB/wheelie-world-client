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

          "base-100": "#f3f4f6",

          "info": "#c084fc",

          "success": "#33E18A",

          "warning": "#fbbf24",

          "error": "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

