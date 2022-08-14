/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14172B",
        profit: "#00FFA3",
        loss: "#FF4D4D",
        "bg-color-1": "#2E31491A",
        "bg-color-2": "#626A881A",
        "default-text": "#ECF0FF",
        "primary-text": "#737BAE",
        "secondary-text": "#5A5F7D",
        "border-color-1": "#ECF0FF1A",
        "border-color-2": "#2E314900",
      },
      backdropBlur: {
        100: "100px",
      },
      borderWidth: {
        px: "1px",
      },
    },
  },
  plugins: [],
};
