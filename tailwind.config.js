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
        mypink: {
          50: "#F8A1D1",
          100: "#E36BAE",
          200: "#B34180",
          300: "#822659",
          400: "#E80F88",
          500: "#AF0171",
          600: "#790252",
          700: "#4C0033",
          800: "#500035"
        },
        mypurple: {
          50: "#E5CFF7",
          100: "#9D76C1",
          200: "#713ABE",
          300: "#5B0888",
        }
      }
    },
  },
  plugins: [],
})

