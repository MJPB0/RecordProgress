import StyleSheet from "react-native-media-query";
import { TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles/style";
import { Theme } from "../../../../../styles/theme.types";

export interface Styles extends Style {
  dayContainerDefault: ViewStyle;
  dayTextDefault: TextStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    dayContainerDefault: {
      backgroundColor: theme.colors.highlight.primary,
      borderRadius: theme.sizes.xxs,
      padding: theme.paddings.md,
      flex: 1,
    },
    dayTextDefault: {
      fontSize: theme.font.sizes.lg,
      color: theme.colors.text.secondary,
      fontFamily: theme.font.family.secondary,
      textAlign: "center",
    },
  }).styles;
