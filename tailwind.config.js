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
          700: "#500035",
          800: "#4C0033",
          900: "#320021"
        },
        mypurple: {
          50: "#E5CFF7",
          100: "#9D76C1",
          200: "#713ABE",
          300: "#5B0888",
          400: "#580082",
          900: '#2E0043'
        }
      },
      fontFamily: {
        'Cinzel': ['CinzelDecorative', 'sans-serif'],
        'CinzelBold': ['CinzelDecorativeBold', 'sans-serif'],
        'CinzelBlack': ['CinzelDecorativeBlack', 'sans-serif'],
        'JosefinSemibold': ['JosefinSansSemiBold', 'sans-serif'],
        'JosefinBold': ['JosefinSansBold', 'sans-serif'],
        'RalewayLight': ['RalewayLight', 'sans serif'],
        'RalewayMedium': ['RalewayMedium', 'sans serif'],
        'VollkornSCSemi': ['VollkornSCSemi', 'sans serif'],
        'VollkornSCReg': ['VollkornSCReg', 'sans serif'],

      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',      
    }
  },
  plugins: [],
})

