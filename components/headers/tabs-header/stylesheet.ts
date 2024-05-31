import { ViewStyle } from "react-native";
import StyleSheet from "react-native-media-query";
import { Style } from "../../../styles/style";
import { Theme } from "../../../styles/theme.types";

export interface Styles extends Style {
  topBarContainer: ViewStyle;
  avatarIconContainer: ViewStyle;
  switch: ViewStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    topBarContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: theme.paddings.xl,
      backgroundColor: theme.colors.background,
    },

    avatarIconContainer: {
      flexDirection: "column",
    },

    switch: { marginTop: theme.margins.xxl },
  }).styles;
