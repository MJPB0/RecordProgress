import StyleSheet from "react-native-media-query";
import { Style } from "../../../styles/style";
import { Theme } from "../../../styles/theme.types";
import { ViewStyle } from "react-native";

export interface Styles extends Style {
  backgroundPressable: ViewStyle;
  modalContainerPressable: ViewStyle;
  modalContainer: ViewStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    backgroundPressable: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainerPressable: {
      width: "85%",
    },
    modalContainer: {
      backgroundColor: theme.colors.background.accent,
      borderRadius: theme.sizes.sm,
      padding: theme.paddings.md,
      flexDirection: "column",
    },
  }).styles;
