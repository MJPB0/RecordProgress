import StyleSheet from "react-native-media-query";
import { Theme } from "../../../../styles/theme.types";
import { Style } from "../../../../styles/style";
import { TextStyle, ViewStyle } from "react-native";

export interface Styles extends Style {
  container: ViewStyle;
  dateContainer: ViewStyle;
  dateText: TextStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: {
      alignItems: "center",
      flexDirection: "row",
      marginBottom: theme.margins.lg,
    },
    dateContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    dateText: {
      fontSize: theme.font.sizes.xl,
      color: theme.colors.text.light,
      marginRight: theme.margins.md,
    },
  }).styles;
