import StyleSheet from "react-native-media-query";
import { Style } from "../../../../styles/style";
import { Theme } from "../../../../styles/theme.types";
import { TextStyle, ViewStyle } from "react-native";

export interface Styles extends Style {
  container: ViewStyle;
  dropdownContainer: ViewStyle;
  dateDropdown: ViewStyle;
  dateDropdownText: TextStyle;
  arrowButton: ViewStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    dropdownContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: theme.margins.sm,
    },
    dateDropdown: {
      backgroundColor: theme.colors.background.secondary,
    },
    dateDropdownText: {
      lineHeight: theme.sizes.sm,
      fontFamily: theme.font.family.secondary,
      fontWeight: theme.font.weight.bold,
    },

    arrowButton: {
      backgroundColor: theme.colors.background.secondary,
      padding: theme.paddings.md,
      borderRadius: theme.sizes.md,
    },
  }).styles;
