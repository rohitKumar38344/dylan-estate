/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "form-sd":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25),0px -2px 6.2px 2px rgba(59, 48, 38, 0.16) inset, 0px 5px 10.8px 2px rgba(255, 255, 255, 1) inset",
        "input-sd": "0px 1px 1px 0px #00000040 inset",
        "location-shadow": "0px 2px 8px 2px #122B492E",
        "location-tab-shadow":
          "0px 2px 4px 0px #00000040,0px 2px 6px 0px #FFFFFF inset,-2px 4px 0px #122B4933 inset",
      },
      colors: {
        "login-label": "rgba(0, 0, 0, 0.85)",
        "login-label-bg": "rgba(252, 248, 244, 1)",
        "login-border": "rgba(122, 122, 122, 1)",
        "selected-tab-bg": "#EDF2F8",
        "p-d-r": "rgba(214, 214, 214, 1)",
        "p-d-c": "rgba(255, 255, 255, 1)",
        "light-gray": "rgba(0, 0, 0, 0.25)",
        "md-blue": "rgba(18, 43, 73, 1)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
        "merriweather-sans": ["Merriweather Sans", "sans-serif"],
        jacques: ["Jacques Francois", "serif"],
      },
    },
  },
  plugins: [],
};
