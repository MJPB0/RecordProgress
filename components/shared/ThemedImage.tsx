import { Image, ImageProps } from "expo-image";
import { useStyles } from "react-native-unistyles";
import { Theme } from "../../styles/theme.types";

export type ThemedImageProps = ImageProps & {
  size?: keyof Theme["imageSizes"];
};

export default function ThemedImage({
  style,
  size = "md",
  ...rest
}: ThemedImageProps) {
  const {
    theme: { imageSizes },
  } = useStyles();

  return (
    <Image
      style={[{ width: imageSizes[size], height: imageSizes[size] }, style]}
      {...rest}
    />
  );
}
