module.exports = {
  target: 'node',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      'ml': '450px',
      'xs': '500px',
      'sm': '640px',
      'md': '800px',
      'lg': '1000px',
      'xl': '1300px'
    }
  },
  plugins: [],
}
