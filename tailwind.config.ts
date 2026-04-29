// tailwind.config.ts
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg-primary)",
        accent: "var(--accent)",
        text: "var(--text-primary)",
        muted: "var(--text-secondary)",
        card: "var(--card-bg)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.6)",
      },
    },
  },
  plugins: [],
}