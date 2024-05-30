import { Image, ImageProps } from "expo-image";
import { Theme } from "../../styles/theme.types";
import { useStyles } from "../../hooks/useStyles";
import { Pressable, SafeAreaView } from "react-native";

export type ThemedImageProps = ImageProps & {
  size?: keyof Theme["imageSizes"];
  pressable?: boolean;
  onPress?: () => void;
  safeAreaView?: boolean;
};

export default function ThemedImage({
  style,
  size = "md",
  pressable,
  onPress,
  safeAreaView,
  ...rest
}: ThemedImageProps) {
  const { theme } = useStyles();

  let themedImage = (
    <Image
      style={[
        { width: theme.imageSizes[size], height: theme.imageSizes[size] },
        style,
      ]}
      {...rest}
    />
  );

  if (pressable) {
    themedImage = <Pressable onPress={onPress}>{themedImage}</Pressable>;
  }

  if (safeAreaView) {
    themedImage = <SafeAreaView>{themedImage}</SafeAreaView>;
  }

  return themedImage;
}
