import StyleSheet from "react-native-media-query";
import { Style } from "../../../styles/style";
import { Theme } from "../../../styles/theme.types";

export interface Styles extends Style {}

export const stylesheet = (theme: Theme) =>
  StyleSheet.create<Styles>({}).styles;
