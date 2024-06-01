import { Theme } from "./theme.types";

export const darkTheme: Theme = {
  colors: {
    background: "#252A34",
    tabBar: {
      background: "#252A34",
      iconBackground: "#F5F5F5",
      highlight: "#A04B49",
    },
    buttonPopup: {
      background: "#252A34",
      text: "#000000",
      highlight: "#A04B4980",
    },
    day: {
      text: "#ffffff",
      note: {
        background: "#F5F5F5",
        text: "#000000",
      },
    },
    text: {
      bright: "#ffffff",
      dark: "#000000",
    },
  },
  font: {
    sizes: {
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 36,
      xxxl: 64,
    },
    family: "Harmattan",
    weight: {
      regular: "400",
      semiBold: "500",
      bold: "700",
    },
  },
  sizes: {
    xs: 16,
    sm: 24,
    md: 36,
    lg: 48,
    xl: 64,
    xxl: 96,
    xxxl: 128,
  },
  paddings: {
    sm: 5,
    md: 10,
    lg: 15,
    xl: 20,
  },
  margins: {
    sm: 5,
    md: 10,
    lg: 20,
    xl: 50,
    xxl: 65,
  },
};
