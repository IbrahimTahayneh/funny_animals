/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1BB0F4",
        male: "#4CB1EA",
        female: "#FD92C9",
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
