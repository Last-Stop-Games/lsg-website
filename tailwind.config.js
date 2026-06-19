/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cosmic purple backdrop, deep -> light
        void: "#0d0820",
        space: "#150f2e",
        nebula: "#221945",
        panel: "#2c2056",
        haze: "#3a2c6e",
        // Accents
        neon: "rgb(var(--accent) / <alpha-value>)", // driven by --accent in index.css
        grape: "#a07cff", // lavender / links
        cyan: "#5fe0ff", // teal pop
        gold: "#ffd45f", // coin yellow
        // Text
        ink: "#e9e3ff",
        muted: "#9d92c7",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        retro: ['"VT323"', "monospace"],
      },
      boxShadow: {
        // Chunky offset "pixel" shadow
        pixel: "4px 4px 0 0 rgba(0,0,0,0.45)",
        "pixel-lg": "6px 6px 0 0 rgba(0,0,0,0.45)",
        glow: "0 0 24px 0 rgb(var(--accent) / 0.45)",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        float: "float 4s ease-in-out infinite",
        blink: "blink 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
