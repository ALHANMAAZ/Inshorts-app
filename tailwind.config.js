/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "custom-gray": "#303036",
      },
      backgroundColor: {
        "custom-red": "#f44336",
      },
      boxShadow: {
        custom:
          "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        thin: "100", // You can map "thin" to the font weight 100
      },
      screens: {
        xxs: { max: "540px" },
        xs: { min: "540px", max: "905px" },
      },
      borderRadius: {
        custom: "4px", // Custom border-radius value
      },
      minWidth: {
        custom: "320px", // Custom min-width value
      },
      backgroundPosition: {
        custom: "50%",
      },
    },
  },
  plugins: [],
};
