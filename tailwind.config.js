/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-red': '#b1040e',
        'menu-bg': '#820000',
        'btn-bg': '#6B003E',
        'campus-news-bg': '#f4f4f4',
        'link-color':'#006cb8',
      },
      fontSize: {
        'custom-size': '1.2em',
        'navbar-size': '1.0em',
      },
    },
  },
  plugins: [require("./plugins/openVariant")],
}
