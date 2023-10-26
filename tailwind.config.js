/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "F8A1D1",
          100: "E36BAE",
          200: "B34180",
          300: "822659"
        }
      }
    },
  },
  plugins: [],
})

