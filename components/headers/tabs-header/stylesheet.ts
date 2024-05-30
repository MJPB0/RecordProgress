import { ViewStyle } from "react-native";
import StyleSheet from "react-native-media-query";
import { Style } from "../../../styles/style";
import { Theme } from "../../../styles/theme.types";

export interface Styles extends Style {
  topBarContainer: ViewStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    topBarContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: theme.paddings.xl,
      backgroundColor: theme.colors.background,
    },
  }).styles;
