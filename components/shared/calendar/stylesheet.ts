import StyleSheet from "react-native-media-query";
import { Style } from "../../../styles/style";
import { Theme } from "../../../styles/theme.types";
import { ViewStyle } from "react-native";

export interface Styles extends Style {
  backgroundPressable: ViewStyle;
  modalContainerPressable: ViewStyle;
  modalContainer: ViewStyle;
  generatedMonth: ViewStyle;
  generatedWeek: ViewStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    backgroundPressable: {
      flex: 1,
      alignItems: "center",

      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainerPressable: {
      top: "32%",
      width: "85%",
      borderWidth: 2,
      borderColor: theme.colors.background.primary,
      borderRadius: theme.sizes.sm,
      backgroundColor: theme.colors.background.accent,
    },
    modalContainer: {
      padding: theme.paddings.md,
      flexDirection: "column",
    },
    generatedMonth: {
      flexDirection: "column",
      marginTop: theme.margins.md,
      gap: theme.margins.sm,
    },
    generatedWeek: {
      flexDirection: "row",
      gap: theme.margins.sm,
    },
  }).styles;
