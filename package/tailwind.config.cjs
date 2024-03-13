/* eslint-disable @typescript-eslint/no-var-requires */
import colors from "tailwindcss/colors";

import scrollbar from "tailwind-scrollbar"
import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "class",
  content: ["./src/**/*.{tsx,ts,js,jsx}"],
  prefix: "aip-", // prefix for all classes
  theme: {
    extend: {
      colors: {
        primary: colors["blue"],
      },
      // fontFamily: {
      // 	sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
      // },
      fontSize: {
        xxs: "0.625rem",
        smd: "0.94rem",
      },
    },
  },
  plugins: [
    scrollbar({ nocompatible: true }),
    typography,
  ],
};
