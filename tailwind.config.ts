import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Bricolage Grotesque", "Georgia", "serif"],
      sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
      mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        bg2: "hsl(var(--bg2))",
        card: "hsl(var(--card))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          dark: "hsl(var(--primary-dark))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          fg: "hsl(var(--accent-fg))",
        },
        code: {
          bg: "hsl(var(--code-bg))",
          fg: "hsl(var(--code-fg))",
          accent: "hsl(var(--code-accent))",
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      maxWidth: {
        column: "45rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
