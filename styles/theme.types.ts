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
    button: {
      background: string;
      separator: string;
      text: {
        default: string;
        highlight: string;
      };
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
      light: string;
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
      semiBold: FontWeight;
      bold: FontWeight;
    };
  };
  sizes: {
    xxs: number;
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
