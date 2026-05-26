/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          slate: '#0B0D11',
        },
        tech: {
          graphite: '#161920',
        },
        electric: {
          cyan: '#00E5FF',
        },
      },
    },
  },
  plugins: [],
}
