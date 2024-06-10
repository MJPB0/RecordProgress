import StyleSheet from "react-native-media-query";
import { Theme } from "../../../../styles/theme.types";
import { Style } from "../../../../styles/style";
import { TextStyle } from "react-native";

export interface Styles extends Style {
  weekdayRow: TextStyle;
  weekday: TextStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    weekdayRow: {
      flexDirection: "row",
    },
    weekday: {
      color: theme.colors.text.secondary,
      fontSize: theme.font.sizes.xl,
      textAlign: "center",
      flex: 1,
    },
  }).styles;
