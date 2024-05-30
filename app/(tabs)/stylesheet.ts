import { TextStyle, ViewStyle } from "react-native";
import StyleSheet from "react-native-media-query";
import { Style } from "../../styles/style";
import { Theme } from "../../styles/theme.types";

export interface Styles extends Style {
  container: ViewStyle;
  tabBarContainer: ViewStyle;
  topBarContainer: ViewStyle;
  workInProgressText: TextStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: theme.paddings.xl,
      backgroundColor: theme.colors.background,
    },
    tabBarContainer: {
      borderTopWidth: 0,
      borderTopColor: theme.colors.background,
      elevation: 0,
    },
    topBarContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: theme.paddings.xl,
      backgroundColor: theme.colors.background,
    },
    workInProgressText: {
      marginTop: theme.margins.md,
    },
  }).styles;
