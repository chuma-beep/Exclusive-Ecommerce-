/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "white",
        action: "#DB4444"
      },
      backgroundColor: {
        primary: "white",
        secondary: "#F5F5F5",
        "action-btn": "#DB4444",
      },
      borderColor: {
        "active": "#DB4444",
        secondary: "#F5F5F5",
      },
      outlineColor: {
        "active": "#DB4444",
      }
    },
  },
  plugins: [],
}

