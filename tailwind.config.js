/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./Layouts/**/*.{js,jsx,ts,tsx}", // Add this to include AppLayout
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#AE63FF',
        avatarbg: '#08FFF3',
        secondary: '#E9EEFF',
        customGray: '#A5A5A5',
      },
      backgroundImage: {
        backgroundGradient: 'linear-gradient(180deg, #AE63FF 0%, #EFE1FD 100%)',
      },
      boxShadow: {
        card: '0px 3px 4px 0px #00000040',
      },
    },
  },
  plugins: [],
};