import StyleSheet from "react-native-media-query";
import { Theme } from "../../../../styles/theme.types";
import { Style } from "../../../../styles/style";
import { TextStyle, ViewStyle } from "react-native";

export interface Styles extends Style {
  container: ViewStyle;
  dropdownContainer: ViewStyle;
  dateDropdown: ViewStyle;
  dateDropdownText: TextStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: {
      alignItems: "center",
      flexDirection: "row",
      marginBottom: theme.margins.lg,
      width: "100%",
    },

    dropdownContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: theme.margins.sm,
      flex: 1,
    },
    dateDropdown: {
      backgroundColor: theme.colors.background.secondary,
    },
    dateDropdownText: {
      lineHeight: theme.sizes.sm,
      fontFamily: theme.font.family.secondary,
      fontWeight: theme.font.weight.bold,
    },
  }).styles;
