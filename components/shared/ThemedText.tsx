import { Text, TextProps } from "react-native";
import { useStyles } from "react-native-unistyles";

export type ThemedTextProps = TextProps & {
  variant?: "bright" | "dark";
  type?: "title" | "subTitle" | "caption" | "headline" | "body";
};

export default function ThemedText({
  style,
  type = "body",
  variant = "bright",
  ...rest
}: ThemedTextProps) {
  const {
    theme: { font, colors },
  } = useStyles();

  const props = {
    fontSize: font.sizes.md,
    fontWeight: font.weight.regular,
    fontFamily: font.family,
    color: variant === "bright" ? colors.text.bright : colors.text.dark,
  };

  switch (type) {
    case "title":
      props.fontSize = font.sizes.xxl;
      props.fontWeight = font.weight.bold;
      break;
    case "subTitle":
      props.fontSize = font.sizes.lg;
      break;
    case "caption":
      props.fontSize = font.sizes.sm;
      break;
    case "headline":
      props.fontSize = font.sizes.xxxl;
      props.fontWeight = font.weight.bold;
      break;
  }

  return <Text style={[props, style]} {...rest} />;
}
