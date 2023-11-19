module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        64: "4rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
