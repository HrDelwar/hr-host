const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "top-banner": "url('/src/images/banner.png')",
        chat: "linear-gradient(123.75deg, #F5821F 1.87%, #FF5C00 120.46%)",
      }),
      zIndex: {
        "-10": "-10",
        full: "999",
      },
      backgroundColor: (theme) => ({
        primary: "#39A2BD",
        secondary: "#626CAC",
      }),
      gradients: (theme) => ({
        "gradient-banner": ["45deg", "#39A2BD", "#9E309B"],
      }),
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        start: "#39A2BD",
        middle: "#626CAC",
        end: "#9E309B",
      }),
      spacing: {
        18: "4.188rem",
        68: "17.38rem",
        97: "25rem",
        98: "26rem",
        100: "30rem",
        101: "35rem",
        105: "39.313rem",
      },
      textColor: {
        faq: "#FF7600",
        default: "#2D2D2D",
      },
      borderColor: {
        "light-gray": "#E4E4E4",
      },
      boxShadow: {
        chatbot: "0px 0px 15px rgba(0, 0, 0, 0.15)",
        btn: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
      },

      fontFamily: {
        "ds-sans": "DM Sans, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover", "before"],
      backgroundImage: ["hover", "focus", "before"],
      opacity: ["active", "after", "before"],
      position: ["hover", "focus", "before", "after"],
      inset: ["hover", "focus", "before", "after"],
      gradientColorStops: ["before"],
      zIndex: ["hover", "active", "before", "after"],
      backgroundColor: ["hover", "focus", "before"],
      textDecoration: ["active", "hover"],
    },
    gradients: ["responsive", "hover", "before", "after"],
  },
  plugins: [
    require("tailwindcss-pseudo-elements"),
    require("tailwindcss-plugins/gradients"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
      };
      addUtilities(newUtilities, {
        variants: ["before", "after", "hover::before", "responsive"],
      });
    }),
  ],

  important: true,
};
