import { ViewStyle } from "react-native";
import StyleSheet from "react-native-media-query";
import { Style } from "../../../styles/style";
import { Theme } from "../../../styles/theme.types";

export interface Styles extends Style {
  menuOptionsContainer: ViewStyle;
  menuOptionsWrapper: ViewStyle;
  optionTouchable: ViewStyle;
  topOptionTouchable: ViewStyle;
  middleOptionTouchable: ViewStyle;
  bottomOptionTouchable: ViewStyle;
  menuOption: ViewStyle;
  menuOptionWithIcon: ViewStyle;
  separator: ViewStyle;
  menuOptionText: ViewStyle;
}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({
    menuOptionsContainer: {
      backgroundColor: theme.colors.buttonPopup.background,
      marginTop: theme.sizes.lg + theme.margins.md,
      borderRadius: 8,
      width: "auto",
    },
    menuOptionsWrapper: {
      padding: theme.paddings.sm,
      gap: theme.margins.sm,
    },

    optionTouchable: { borderRadius: 8 },
    topOptionTouchable: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      marginBottom: -theme.margins.sm,
      paddingVertical: theme.margins.sm,
    },
    middleOptionTouchable: {
      borderRadius: 0,
      marginVertical: -theme.margins.sm,
      paddingVertical: theme.margins.sm,
    },
    bottomOptionTouchable: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      marginTop: -theme.margins.sm,
      paddingVertical: theme.margins.sm,
    },

    menuOption: {
      alignContent: "center",
    },
    menuOptionWithIcon: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    menuOptionText: {
      fontSize: theme.font.sizes.md,
      //?   2 is just an offset to make the text align with the icon
      lineHeight: theme.font.sizes.lg + 2,
      fontWeight: theme.font.weight.semiBold,
      marginHorizontal: theme.margins.md,
      textAlignVertical: "center",
    },

    separator: {
      borderWidth: 2,
      borderColor: theme.colors.buttonPopup.separator,
    },
  }).styles;
