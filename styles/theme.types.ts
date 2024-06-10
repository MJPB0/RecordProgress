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
    background: {
      primary: string;
      secondary: string;
      accent: string;
    };
    highlight: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      accent: string;
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
    family: {
      primary: string;
      primarySemiBold: string;
      primaryBold: string;
      secondary: string;
    };
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
