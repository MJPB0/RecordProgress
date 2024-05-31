import { TextStyle, ViewStyle } from "react-native";
import StyleSheet from "react-native-media-query";
import { Style } from "../../styles/style";
import { Theme } from "../../styles/theme.types";

export interface Styles extends Style {
  container: ViewStyle;
  tabBarContainer: ViewStyle;
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
    tabBarContainer: {
      position: "absolute",
      borderTopWidth: 0,
      elevation: 0,
      borderTopColor: theme.colors.background,
      width: "auto",
      height: "auto",
      marginHorizontal: "25%",
      paddingBottom: 0,
      marginBottom: 30,
    },
    workInProgressText: {
      marginTop: theme.margins.md,
    },
  }).styles;
