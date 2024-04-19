import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                blinkingText: {
                    "0%, 100%": { color: "#000000" },
                    "50%": { color: "#334155" },
                },
            },
            animation: {
                blinkingText: "blinkingText 5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
export default config;
