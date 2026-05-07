module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'calm-blue-light': '#E8F4FD',
        'calm-blue': '#B3D9F5',
        'calm-green': '#E8F5E8',
        'deep-navy': '#1a237e',
        'focus-accent': '#FF6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
