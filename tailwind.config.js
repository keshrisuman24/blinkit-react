/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "1.5/12": "12.5%",
        "2.5/12": "20.83%",
        "5.5/12": "45.83%",
        "9.5/12": "79.17%",
      },
      gridColumn: {
        'span-2.5': 'span 2.5 / span 2.5',
        'span-9.5': 'span 9.5 / span 9.5',
      },
      colors: {
        buttonGreen: "rgb(12, 131, 31)",
        lightGreen: "rgb(247, 255, 249)",
      },
      fontWeight: {
        doubleExtra: "font-weight:900",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* Chrome, Safari, Edge, Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
