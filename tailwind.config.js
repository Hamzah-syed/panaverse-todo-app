/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(14px)',
    },
    extend: {
      colors: {
        primary: "#FF512F",
        secondary: "#DD2476",
      },


    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}