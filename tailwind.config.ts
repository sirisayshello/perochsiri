import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fave: "var(--fave)",
        foxrights: "var(--foxrights)",
        roboto: "var(--roboto)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        accentShadow: "var(--accent-shadow)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
} satisfies Config;
