import DaisyUI from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-bg": "move-bg 8s linear infinite",
      },
      keyframes: {
        "move-bg": {
          "0%": {
            "background-position": "0 / 400%",
          },
          "100%": {
            "background-position": "400% 0",
          },
        },
      },
    },
  },
  plugins: [DaisyUI],
}
