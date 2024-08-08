/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-green': '-2px 22px 38px 0 rgba(142, 255, 154, 0.5)',
        'custom': '2px 10px 30px 0 rgba(0, 0, 0, 0.1);',
        'shadow': '2px 9px 42px 0 rgba(0, 0, 0, 0.08)',
        "services": ' 7px 12px 43px 0 rgba(0, 0, 0, 0.14)'

      },
    },
  },
  plugins: [
    require('preline/plugin'),],
}