/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "selector",
  theme: {
    extend: {
        colors: {
            background: "#FDFDFD",
            textcol: "#434343",
            primary: "#2BB905",
            secondary: "#9381FF",
            accent: "#FF36AB"
        }
    }
  },
  plugins: []
};
