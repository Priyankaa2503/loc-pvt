/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important :"#root",
  theme: {
    extend: {
      screens:
      {
        sm: "320px",
        md: "769px",
        lg: "1026px"
      },
      fontFamily: {
       
        
      },
      colors:{
        
        white:"#FFFFFF"
      
      },
    },
  },
  plugins: [],
}
