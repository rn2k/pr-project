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
        "pr-purpleB": "#7F56D9",
        "pr-purpleL": "#F9F5FF",
        "pr-grey":"#F2F4F7"
      },
      spacing:{
        "128":"32rem",
      }
    },
  },
  plugins: [],
}

