export type FontWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export interface Theme {
  colors: {
    background: string;
    tabBar: {
      background: string;
      iconBackground: string;
      highlight: string;
    };
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
    };
    text: {
      bright: string;
      dark: string;
    };
  };
  font: {
    sizes: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
    family: string;
    weight: {
      regular: FontWeight;
      bold: FontWeight;
    };
  };
  sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
  margins: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  paddings: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}
