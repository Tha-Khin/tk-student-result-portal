/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "primary": "#00DC82",
        "background": "#F7FAFC",
        "background-light": "#f8fafc",
        "text": "#2D3748",
        "text-primary-light": "#1E293B",
        "text-secondary-light": "#64748B",
        "border": "#E2E8F0",
        "border-light": "#e2e8f0",
        "card": "#FFFFFF",
        "card-light": "#ffffff",
        "placeholder": "#A0AEC0"
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px",
      },
    },
  },
  plugins: [],
}

