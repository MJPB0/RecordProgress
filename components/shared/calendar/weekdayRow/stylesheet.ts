import StyleSheet from "react-native-media-query";
import { Style } from "../../../../styles/style";
import { Theme } from "../../../../styles/theme.types";
import { TextStyle } from "react-native";

export interface Styles extends Style {
  weekdayText: TextStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    weekdayText: {
      flex: 1,
      fontSize: theme.font.sizes.md,
      color: theme.colors.text.accent,
      fontFamily: theme.font.family.secondary,
      fontWeight: theme.font.weight.regular,
      textAlign: "center",
    },
  }).styles;
