import { defaultTheme } from "./themes";
import { UnistylesRegistry } from "react-native-unistyles";

type AppThemes = {
  defaultTheme: typeof defaultTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  defaultTheme: defaultTheme,
}).addConfig({
  adaptiveThemes: true,
  initialTheme: "defaultTheme",
});
