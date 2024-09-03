import { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      pink: {
        bold: "#FF90E8",
        subtle: "#FBEAF9",
      },
      red: {
        bold: "#DC341E",
        subtle: "#F8D6D2",
      },
      green: {
        bold: "#23A094",
        subtle: "#D3F3F0",
      },
      gold: {
        bold: "#FFC900",
        subtle: "#FDF4D0",
      },
      purple: {
        bold: "#90A8ED",
        subtle: "#E9EEFA",
      },
      gray: {
        50: "#FBFBF9",
        100: "#F4F4F0",
        200: "#E7E5E4",
        300: "#D6D3D1",
        400: "#ABA29E",
        500: "#78716C",
        subtle: "#E5E5E5",
      },
      background: 'var(--background)',
      foreground: {
        DEFAULT: 'var(--foreground)',
        secondary: 'var(--foreground-secondary)'
      },
      card: 'var(--card)',
      border: 'var(--border)',
      input: {
        placeholder: 'var(--input-placeholder)'
      }
    },
    borderRadius: {
      1: "0.25rem",
      2: "0.5rem",
      3: "10rem",
    },
    boxShadow: {
      0: "0 0 0 var(--shadow)",
      1: "0.25rem 0.25rem 0 var(--shadow)",
      2: "0.5rem 0.5rem 0 black var(--shadow)",
    },
    spacing: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.5rem",
      6: "2rem",
      7: "3rem",
      8: "4rem",
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
    fontSize: {
      xs: ["0.75rem", "120%"],
      sm: ["0.875rem", "130%"],
      base: ["1rem", "140%"],
      h3: ["1.25rem", "140%"],
      h2: ["1.5rem", "130%"],
      h1: ["2.5rem", "120%"],
    },
    extend: {padding: {
      'push': 'max(100% - 71.25rem - 4rem, 4rem)'
    }},
  },
  plugins: [],
};

export default config;
