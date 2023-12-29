/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        santoshi: ['Satoshi'],
      },
      boxShadow: {
        custom: '0 10px 25px 0 rgba(31, 41, 55, 0.2)',
      },
      backgroundImage: {
        'footer-texture': "url('./src/images/Gradient.png')",
      },
      boxShadow: {
        boxcustom: '0px 10.988372802734375px 36.627906799316406px 0.9156976938247681px rgba(28, 25, 23, 0.05)',
      },
      
    },
  },
  plugins: [],
}

