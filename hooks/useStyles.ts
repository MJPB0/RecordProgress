import { useEffect, useState } from "react";
import { Appearance } from "react-native";
import StyleSheet from "react-native-media-query";
import { lightTheme } from "../styles/light.theme";
import { darkTheme } from "../styles/dark.theme";
import { Theme } from "../styles/theme.types";

export const useStyles = <T>(
  makeStyles?: (theme: Theme) => StyleSheet.ComputedStyle<T>
) => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(
    Appearance.getColorScheme() ?? "dark"
  );
  const theme = currentTheme === "light" ? lightTheme : darkTheme;
  const styles = makeStyles
    ? makeStyles(theme)
    : ({} as StyleSheet.ComputedStyle<T>);

  useEffect(() => {
    Appearance.setColorScheme(currentTheme);
  }, [currentTheme]);

  return {
    currentTheme,
    setCurrentTheme,
    theme,
    styles,
  };
};
