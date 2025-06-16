module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
       colors: {
        red : "#E50914",
    },}
  },
  plugins: [require("flowbite/plugin")],
};
