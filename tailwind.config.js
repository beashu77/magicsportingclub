/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*/.{js,jsx,ts,tsx}",
  "./src/components/*/.{js,jsx,ts,tsx}",
  "./src/*/.{html,js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {    
      'figtree': 'Figtree',
      'figtreeLight':['Figtree-Light'],
      'figtreeBold': ['Figtree-Bold', ],
      'figtreeRegular': ['Figtree-Regular', ],
      'figtreeMedium': ['Figtree-Medium', ],
      'figtreeBlack': ['Figtree-Black', ],
    },
    colors:{
      // #112258 //blue
      // #a0a127 //yellow
      // #138fc9 //light-blue

      blue:'#112258',
      yellow:'#a0a127',
      light_blue:'#138fc9',
      white:'#fff',
      black:'#000'
    },
    screens: {
      sxsm: "0px", // Custom screen size
      xs: "280px", //2
      xsm: "300px", // Custom screen size
      lsm: "400px",
      hsm: "520px",
      sm: "640px",
      md: "768px", //3
      msm: "900px", // Custom screen size
      lg: "1024px", // 1
      slg: "1100px",
      xlg: "1390px",
      lxl: "1600px",
      xl: "1919px",
      xxl: "2160px",
      "3xl": "1920px",
      "4xl": "2900px",
      "3xxl": "2500px",
      xxxl: "3200px",
    },
    extend: {},
  },
  plugins: [],
}

