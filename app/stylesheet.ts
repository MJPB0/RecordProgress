import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
}));
