/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: './app/**/*.{ts,tsx,jsx,js}',
  content: ["./app/**/*.{ts,tsx,jsx,js}", 
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
