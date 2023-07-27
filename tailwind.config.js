/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: {
        DEFAULT: "#1C1C27",
        light: "#363740",
      },
      white: {
        DEFAULT: "#FFFFFF",
        dimmed: {
          DEFAULT: "#FFFFFF66",
          heavy: "#FFFFFF33",
        },
      },
      red: "#EF4444",
      yellow: "#FFB43A",
      green: "#22C55E",
    },
    fontFamily: {
      DEFAULT: ["Inter", "sans-serif"],
    },

    fontSize: {
      "2xl": "1.5rem",
      xl: "1.25rem",
      l: "1rem",
      m: "0.875rem",
      s: "0.75rem",
    },
    fontWeight: {
      700: "700",
      600: "600",
      500: "500",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}
