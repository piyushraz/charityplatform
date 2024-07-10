module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./design-system/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "575px",
      md: "812px",
      lg: "1080px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        backdrop: "rgb(var(--cl-backdrop))",
        black: "rgb(var(--cl-black))",
        white: "rgb(var(--cl-white))",
      },
      maxWidth: {
        article: "var(--max-width-article)",
      },
      transitionProperty: {
        border: "border",
        width: "width",
        "table-rows": "grid-table-rows",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        300: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      tracking: {
        tag: "0.04em",
      },
      spacing: {
        "section-xs": "var(--section-spacing-xs)",
        "section-sm": "var(--section-spacing-sm)",
        "section-md": "var(--section-spacing-md)",
        "section-lg": "var(--section-spacing-lg)",
        "section-xl": "var(--section-spacing-xl)",
        "section-2xl": "var(--section-spacing-2xl)",
        "section-3xl": "var(--section-spacing-3xl)",
        "grid-gutter": "var(--gap-gutter)",
        outer: "var(--outer-spacing)",
      },
      borderRadius: {
        sd: "var(--border-radius)",
        lg: "var(--border-radius-lg)",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
