import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef6ff",
          100: "#d9ecff",
          600: "#1d4f8f",
          700: "#173f72",
          800: "#12325d",
          900: "#0b2545"
        },
        orange: {
          500: "#f97316",
          600: "#ea580c"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(11, 37, 69, 0.10)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(11,37,69,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(11,37,69,.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
