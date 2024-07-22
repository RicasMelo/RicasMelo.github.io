/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors with different alpha values
        "custom-c": {
          100: 'rgba(29, 29, 41, 1)', // Alpha 0.1
          200: 'rgba(37, 150, 190, 0.2)', // Alpha 0.2
          300: 'rgba(37, 150, 190, 0.3)', // Alpha 0.3
          400: 'rgba(37, 150, 190, 0.4)', // Alpha 0.4
          500: 'rgba(37, 150, 190, 0.5)', // Alpha 0.5
          600: 'rgba(37, 150, 190, 0.6)', // Alpha 0.6
          700: 'rgba(37, 150, 190, 0.7)', // Alpha 0.7
          800: 'rgba(37, 150, 190, 0.8)', // Alpha 0.8
          900: 'rgba(37, 150, 190, 0.9)', // Alpha 0.9
        },
      },
    },
  },
  plugins: [],
};
