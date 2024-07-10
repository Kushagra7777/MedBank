/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gradient: "#60b7cf",
        darkslategray: {
          "100": "#333",
          "200": "#003e5c",
        },
        orange: "#ffaa00",
        cadetblue: {
          "100": "#2e859c",
          "200": "rgba(46, 133, 156, 0.09)",
        },
        dimgray: {
          "100": "#717171",
          "200": "rgba(113, 113, 113, 0.03)",
          "300": "rgba(113, 113, 113, 0.2)",
          "400": "rgba(113, 113, 113, 0.5)",
          "500": "rgba(113, 113, 113, 0.3)",
          "600": "rgba(113, 113, 113, 0.05)",
        },
        gray: "#79747e",
      },
      spacing: {},
      fontFamily: {
        "body-large": "'DM Sans'",
        inter: "Inter",
        inherit: "inherit",
        "dm-serif-text": "'DM Serif Text'",
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
        mini: "15px",
        "11xl": "30px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "81xl": "100px",
      "11xl": "30px",
      "31xl": "50px",
      smi: "13px",
      mid: "17px",
      "5xl": "24px",
      lgi: "19px",
      "9xl": "28px",
      "38xl": "57px",
      "15xl": "34px",
      "27xl": "46px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
