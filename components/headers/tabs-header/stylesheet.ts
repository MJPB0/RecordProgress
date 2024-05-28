import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  topBarContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.paddings.xl,
    backgroundColor: theme.colors.background,
  },
}));
