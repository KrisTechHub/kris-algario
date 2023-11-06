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
        },
        zinc: {
          900: "#1C1C1C"
        },
        rose: {
          950: "#320021",
        },
        neutral: {
          700: "#434343"
        },
        pink: {
          900: "#78004F",
          500: "#D13D9F"
        },
        stone: {
          300: "#BFBFBF"
        },
        white: "#FEFEFE",
        "branddark-purple": "var(--branddark-purple)",
        "variable-collection-background": "var(--variable-collection-background)",
        "variable-collection-contact-purple": "var(--variable-collection-contact-purple)",
        "variable-collection-dark-BG": "var(--variable-collection-dark-BG)",
        "variable-collection-dark-green": "var(--variable-collection-dark-green)",
        "variable-collection-dark-pink": "var(--variable-collection-dark-pink)",
        "variable-collection-dark-yellow": "var(--variable-collection-dark-yellow)",
        "variable-collection-darkest-pink": "var(--variable-collection-darkest-pink)",
        "variable-collection-light-font": "var(--variable-collection-light-font)",
        "variable-collection-light-pink": "var(--variable-collection-light-pink)",
        "variable-collection-mid-gray": "var(--variable-collection-mid-gray)",
        "variable-collection-pale-yellow": "var(--variable-collection-pale-yellow)",
        "variable-collection-yellow-main": "var(--variable-collection-yellow-main)",
      },
      fontFamily: {
        'Cinzel': ['CinzelDecorative', 'sans-serif'],
        'CinzelBold': ['CinzelDecorativeBold', 'sans-serif'],
        'CinzelBlack': ['CinzelDecorativeBlack', 'sans-serif']
      },
    },
  },
  plugins: [],
})

