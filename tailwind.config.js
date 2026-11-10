
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: "#0B0D12",
          secondary: "#121722",
          card: "#171E2B",
          gold: "#D6B46A",
          goldDark: "#B99750",
          text: "#F5F2EA",
          muted: "#9CA3AF",
          border: "#292F3A",
        },
      },
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
