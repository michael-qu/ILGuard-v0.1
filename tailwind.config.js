/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,css,scss}',
  ],
  //darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    extend: {
      // fontSize: {
      //   '5xl': '3rem', // Your desired font size
      // },
      // colors: {
      //   limegreen: '#0ee70e', // Your desired color
      // },
    },
  },
  variants: {},
  plugins: [],
}

