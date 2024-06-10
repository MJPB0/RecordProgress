import StyleSheet from "react-native-media-query";
import { Style } from "../../../../styles/style";
import { Theme } from "../../../../styles/theme.types";
import { TextStyle, ViewStyle } from "react-native";

export interface Styles extends Style {
  dayContainerActive: ViewStyle;
  dayContainerInactive: ViewStyle;
  dayContainerDisabled: ViewStyle;
  dayTextActive: TextStyle;
  dayTextInactive: TextStyle;
  dayTextDisabled: TextStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    dayContainerActive: {
      backgroundColor: theme.colors.highlight.primary,
      borderRadius: theme.sizes.xxs,
      padding: theme.paddings.md,
      flex: 1,
    },
    dayContainerInactive: {
      backgroundColor: theme.colors.background.secondary,
      borderRadius: theme.sizes.xxs,
      padding: theme.paddings.md,
      flex: 1,
    },
    dayContainerDisabled: {
      backgroundColor: theme.colors.background.accent,
      borderRadius: theme.sizes.xxs,
      padding: theme.paddings.md,
      flex: 1,
    },
    dayTextActive: {
      fontSize: theme.font.sizes.md,
      color: theme.colors.text.secondary,
      fontFamily: theme.font.family.secondary,
      textAlign: "center",
    },
    dayTextInactive: {
      fontSize: theme.font.sizes.md,
      color: theme.colors.text.accent,
      fontFamily: theme.font.family.secondary,
      textAlign: "center",
    },
    dayTextDisabled: {
      fontSize: theme.font.sizes.md,
      color: theme.colors.text.accent,
      opacity: 0.2,
      fontFamily: theme.font.family.secondary,
      textAlign: "center",
    },
  }).styles;
