/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0",
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1000px",
        xl: "1240px",
      },
    },
    colors: {
      primary: "#003366",
      gray: {
        light: "#F5F5F5CC",
      },
      white: "#FFFFFF",
      black: "#333333",
      transparent: "#00000000",
    },
    extend: {
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "2.5rem", // 40px
        "4xl": "3rem", // 48px
        "5xl": "3.5rem", // 56px
      },
    },
  },
  plugins: [],
};
