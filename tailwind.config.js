const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "selector",
  theme: {
    extend: {
        fontFamily: {
                sans:  ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        colors: {
            background: "#FDFDFD",
            textcol: "#434343",
            primary: "#2BB905",
            secondary: "#00236A",
            accent: "#1DFE1A"
        }
    }
  },
  plugins: []
};
