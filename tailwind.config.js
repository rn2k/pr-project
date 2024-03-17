/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true
    },
    extend: {
      fontFamily:{
        open: ["Open Sans", "sans-serif"]
      },
      colors:{
        "pr-purpleB": "#7469B6",
        "pr-purpleL": "#E1AFD1",
      },
      spacing:{
        "128":"32rem",
      }
    },
  },
  plugins: [],
}

