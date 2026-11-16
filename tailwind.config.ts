import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: { colors: { navy: { 950: "#050b1d", 900: "#0a1330", 800: "#101c45" }, volt: "#2f6bff", aqua: "#22d3ee" } } },
  plugins: [] } satisfies Config;
