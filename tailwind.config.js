/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "0%": "#082f49", //sky: 950
        "5%": "#bae6fd", //sky: 200
        "10%": "#7dd3fc", //sky: 300
        "15%": "#0369a1", //sky: 300
      },
      fontFamily: {
        protest: "Protest Riot",
        popin: "Poppins",
      },
    },
  },
  plugins: [],
};
