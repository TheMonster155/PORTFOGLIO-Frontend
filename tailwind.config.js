/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // se hai un file index.html
    "./src/**/*.{js,jsx,ts,tsx}", // Assicurati che Tailwind controlli anche i tuoi file JSX/TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
