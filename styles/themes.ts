interface Theme {
  colors: {
    background: string;
    highlight: string;
    buttonPopup: {
      background: string;
      text: string;
      highlight: string;
    };
    day: {
      text: string;
      note: {
        background: string;
        text: string;
      };
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  };
  margins: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}
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
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
};
