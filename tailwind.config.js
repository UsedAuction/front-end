/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '18px': '18px',
        '16px': '16px',
      },
    },
  },
  plugins: [],
};
