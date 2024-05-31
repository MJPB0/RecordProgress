import { TextStyle, ViewStyle } from "react-native";
import StyleSheet from "react-native-media-query";
import { Style } from "../../../styles/style";
import { Theme } from "../../../styles/theme.types";

export interface Styles extends Style {
  container: ViewStyle;
  workInProgressText: TextStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    workInProgressText: {
      marginTop: theme.margins.md,
    },
  }).styles;
