import StyleSheet from "react-native-media-query";
import { Theme } from "../../../../styles/theme.types";
import { Style } from "../../../../styles/style";
import { TextStyle } from "react-native";

export interface Styles extends Style {
  generatedMonth: TextStyle;
  generatedWeek: TextStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    generatedMonth: {
      flexDirection: "column",
      marginTop: theme.margins.md,
      gap: theme.margins.md,
      width: "100%",
    },

    generatedWeek: {
      flexDirection: "row",
      gap: theme.margins.md,
    },
  }).styles;
