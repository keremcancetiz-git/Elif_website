/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Preset A - Organic Tech
        primary: "#2E4036", // Moss
        accent: "#CC5833",  // Clay
        background: "#F2F0E9", // Cream
        dark: "#1A1A1A", // Charcoal
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Outfit", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}
