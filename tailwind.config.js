module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', // change this
    './src/components/**/*.{js,ts,jsx,tsx}', // change this
    './src/layouts/**/*.{js,ts,jsx,tsx}', // for layout
  ],
  theme: {
    extend: {
      colors:{
        theme:"#151514",
        lightBlack:"#27242D",
        theme_2:"#302E38",
        theme_pink:"#B1336E",
        theme_blue:"#0D70AE",
        facebook: '#3b5998',
        twitter: '#00acee',
        linkedin: '#0072b1',
        instagram: '#BD33B5',
        whatsapp: '#25d366',
        youtube: '#cd201f',
        pinterest: '#E60023',
      }
    },
  },
  plugins: [],
  darkMode: 'class', // change this
}