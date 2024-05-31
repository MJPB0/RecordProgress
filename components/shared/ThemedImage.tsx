import { Image, ImageProps } from "expo-image";
import { Theme } from "../../styles/theme.types";
import { useStyles } from "../../hooks/useStyles";
import {
  Pressable,
  PressableProps,
  SafeAreaView,
  ViewProps,
} from "react-native";

export type ThemedImageProps = ImageProps & {
  size?: keyof Theme["sizes"];
  isPressable?: boolean;
  pressableProps?: PressableProps;
  onPress?: () => void;
  isSafeAreaView?: boolean;
  safeAreaViewProps?: ViewProps;
};

export default function ThemedImage({
  style,
  size = "md",
  isPressable,
  pressableProps,
  onPress,
  isSafeAreaView,
  safeAreaViewProps,
  ...rest
}: ThemedImageProps) {
  const { theme } = useStyles();

  let themedImage = (
    <Image
      style={[{ width: theme.sizes[size], height: theme.sizes[size] }, style]}
      {...rest}
    />
  );

  if (isPressable) {
    themedImage = (
      <Pressable onPress={onPress} {...pressableProps}>
        {themedImage}
      </Pressable>
    );
  }

  if (isSafeAreaView) {
    themedImage = (
      <SafeAreaView {...safeAreaViewProps}>{themedImage}</SafeAreaView>
    );
  }

  return themedImage;
}
