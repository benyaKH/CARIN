module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bg': "url('demo-react/src/Image/bg.jpg')",
       })
    },
  },
  plugins: [],
}
