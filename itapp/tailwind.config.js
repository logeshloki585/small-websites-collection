module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/freeimg_92769330046freejpg850.jpg')",
        'hero-section':"url('https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/freeimg_44936564freejpg850.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
