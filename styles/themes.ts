import { Theme } from "./theme.types";

export const defaultTheme: Theme = {
  colors: {
    background: "#252A34",
    highlight: "#A04B49",
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
      monday: "#DCC238",
      tuesday: "#C0834B",
      wednesday: "#59AB7F",
      thursday: "#2ABBBB",
      friday: "#5534B1",
      saturday: "#0946E1",
      sunday: "#A04B49",
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
      bold: "700",
    },
  },
  imageSizes: {
    sm: 24,
    md: 36,
    lg: 48,
    xl: 64,
    xxl: 96,
    xxxl: 128,
  },
  paddings: {
    sm: 5,
    md: 12,
    lg: 16,
    xl: 20,
  },
  margins: {
    sm: 5,
    md: 12,
    lg: 20,
    xl: 50,
  },
};
