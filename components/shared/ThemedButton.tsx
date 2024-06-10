import { useStyles } from "../../hooks/useStyles";
import { Pressable, Text, TextStyle, ViewProps } from "react-native";
import { Theme } from "../../styles/theme.types";
import { useState } from "react";

export type ThemedButtonProps = ViewProps & {
  title: string;
  titleSize?: keyof Theme["font"]["sizes"];
  titleStyle?: TextStyle;
  onPress?: () => void;
};

export default function ThemedButton({
  title,
  titleSize = "md",
  titleStyle,
  style,
  onPress,
}: ThemedButtonProps) {
  const { theme } = useStyles();
  const [isActive, setIsActive] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      style={[
        {
          backgroundColor: !isActive
            ? theme.colors.background.accent
            : theme.colors.highlight.primary,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: theme.paddings.md,
          borderRadius: theme.sizes.sm / 2,
          height: "auto",
          width: "auto",
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            color: !isActive
              ? theme.colors.text.primary
              : theme.colors.text.secondary,
            fontWeight: theme.font.weight.regular,
            fontFamily: theme.font.family.primary,
            fontSize: theme.font.sizes[titleSize],
          },
          titleStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
