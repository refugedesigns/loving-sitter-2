module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      backgroundImage: {
        "home-page": "url('~/public/assets/homepage-dog.png')",
      },
    },
  },
  plugins: [],
};
