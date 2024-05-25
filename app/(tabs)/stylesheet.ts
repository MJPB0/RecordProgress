import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  tabBarContainer: {
    borderWidth: 0,
    height: 64,
  },
  topBarContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  tabBarImage: {
    width: 36,
    height: 36,
  },
  topBarImage: {
    width: 42,
    height: 42,
  },
}));
