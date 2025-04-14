/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
import scrollbar from 'tailwind-scrollbar';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(11) forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      }
    },
  },
  plugins: [
    flowbite,
    scrollbar
  ]
};
