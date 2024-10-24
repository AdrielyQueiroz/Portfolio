/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajuste o caminho conforme necessário
  ],
  theme: {
    extend: {
      boxShadow: {
        'violet-400': '0 5px 15px rgba(138, 43, 226, 0.5)', // Definindo uma sombra personalizada
      },
    },
  },
  plugins: [],
};

