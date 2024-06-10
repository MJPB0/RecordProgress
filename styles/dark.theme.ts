import { Theme } from "./theme.types";

export const darkTheme: Theme = {
  colors: {
    background: {
      primary: "#252A34",
      secondary: "#FFFFFF",
      accent: "#F5F5F5",
    },
    highlight: {
      primary: "#A04B49",
      secondary: "#A04B4980",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#1F1F1F",
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
    family: {
      primary: "Harmattan",
      primarySemiBold: "HarmattanSemiBold",
      primaryBold: "HarmattanBold",
      secondary: "Lexend",
    },
    weight: {
      regular: "400",
      semiBold: "500",
      bold: "700",
    },
  },
  sizes: {
    xxs: 10,
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
