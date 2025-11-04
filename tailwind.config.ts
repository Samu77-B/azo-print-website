import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          blue: "#0000EE",
          "dodger-blue": "#0088CB",
          "dodger-blue-light": "#0099FF",
          "dodger-blue-bright": "#116DFF",
          "dark-slate": "#242323",
          "dark-slate-light": "#4A4A4A",
          "dim-gray": "#727272",
          "light-slate": "#909090",
          gainsboro: "#DBDBDB",
          "deep-pink": "#EC008C",
          "deep-pink-light": "#F3308E",
          "white-smoke": "#F0F0F0",
          snow: "#FCFCFC",
          magenta: "#FF00FF",
        },
      },
    },
  },
  plugins: [],
};
export default config;

