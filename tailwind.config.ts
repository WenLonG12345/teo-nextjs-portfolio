import type { Config } from "tailwindcss";

function animationDelay({
  matchUtilities,
  theme,
}: {
  matchUtilities: any;
  theme: any;
}) {
  matchUtilities(
    {
      "animation-delay": (value: string) => ({
        "animation-delay": `calc(${value} * 130ms)`,
      }),
    },
    { values: theme("animationDelay") }
  );
}

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "650px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      backgroundColor: {
        primary: 'rgba(217, 91%, 60%)',
      },
      screens: {
        xs: "500px",
        sm: "650px",
        md: "768px",
        lg: "1024px",
      },
      animationDelay: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
      },
      keyframes: ({ theme }) => ({
        "fade-in": {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        mutation: {
          "0%": {
            background: theme("colors.blue.200 / 3%"),
          },
          "10%": {
            background: theme("colors.blue.200 / 15%"),
            color: theme("colors.blue.200 / 75%"),
          },
          "100%": {
            background: theme("colors.blue.200 / 0%"),
          },
        },
        loading: {
          "0%": { opacity: ".2" },
          "20%": { opacity: "1", transform: "translateX(1px)" },
          to: { opacity: ".2" },
        },
      }),
      animation: {
        "fade-in": "fade-in .6s both",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), animationDelay],
};
export default config;
