import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#0f172a",
        ink: "#1f2937",
        steel: "#5f6b7a",
        teal: "#1f4e79",
        mint: "#eef4f8",
        amber: "#c2410c",
        citrus: "#fdba74"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 23, 42, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
