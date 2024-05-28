import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
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

    height: 64,
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
}));
