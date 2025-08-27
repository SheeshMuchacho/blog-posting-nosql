/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "text-dark": "rgb(var(--color-text-dark) / <alpha-value>)",
        "text-light": "rgb(var(--color-text-light) / <alpha-value>)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'custom': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
        "2xl": "1536px",
      },
      keyframes: {
        loadingAnimation: {
          "0%": { borderRadius: "50% 50% 50% 50%", transform: "rotate(0deg)" },
          "12.5%": { borderRadius: "0% 50% 50% 50%" },
          "25%": { borderRadius: "0% 0% 50% 50%", transform: "rotate(90deg)" },
          "37.5%": { borderRadius: "0% 0% 0% 50%" },
          "50%": { borderRadius: "0% 0% 0% 0%", transform: "rotate(180deg)" },
          "62.5%": { borderRadius: "50% 0% 0% 0%" },
          "75%": { borderRadius: "50% 50% 0% 0%", transform: "rotate(270deg)" },
          "87.5%": { borderRadius: "50% 50% 50% 0%" },
          "100%": { borderRadius: "50% 50% 50% 50%", transform: "rotate(360deg)" },
        },
      },
      animation: {
        loading: "loadingAnimation 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};