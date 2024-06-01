import { Text, TextStyle, TouchableHighlight } from "react-native";
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from "react-native-popup-menu";
import { useStyles } from "../../hooks/useStyles";
import Arrow from "../icons/Arrow";
import { ImageStyle } from "expo-image";

interface MenuOptionProps {
  text: string;
  textStyle?: TextStyle;
  onPress?: () => void;
  direction?: "left" | "right";
  icon?: React.ReactNode;
  iconStyle?: ImageStyle;
}

interface PopupMenuProps {
  options: MenuOptionProps | MenuOptionProps[];
  menuTrigger: React.ReactNode;
}

export default function PopupMenu({ menuTrigger, options }: PopupMenuProps) {
  const { theme } = useStyles();

  const option = ({
    text,
    textStyle,
    direction = "right",
    icon,
    iconStyle,
  }: MenuOptionProps) => {
    const optionText = (
      <Text
        style={[
          {
            fontSize: theme.font.sizes.md,
            //?   2 is just an offset to make the text align with the icon
            lineHeight: theme.font.sizes.lg + 2,
            fontWeight: theme.font.weight.semiBold,
            marginHorizontal: theme.margins.md,
            textAlignVertical: "center",
            textAlign: direction === "right" ? "left" : "right",
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    );

    const optionIcon =
      icon !== undefined ? (
        icon
      ) : (
        <Arrow direction={direction} size="sm" style={iconStyle} />
      );

    return direction === "right" ? (
      <>
        {optionText}
        {optionIcon}
      </>
    ) : (
      <>
        {optionIcon}
        {optionText}
      </>
    );
  };

  return (
    <Menu>
      <MenuTrigger
        customStyles={{
          triggerTouchable: {
            activeOpacity: 0.5,
          },
        }}
      >
        {menuTrigger}
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={{
          marginTop: theme.sizes.lg + theme.margins.md,
          borderRadius: 8,
          width: "auto",
        }}
        customStyles={{
          optionsWrapper: {
            padding: theme.paddings.sm,
            gap: theme.margins.sm,
          },
          OptionTouchableComponent: TouchableHighlight,
          optionTouchable: {
            activeOpacity: 1,
            underlayColor: theme.colors.buttonPopup.highlight,
            style: { borderRadius: 8 },
          },
        }}
      >
        {[options].flat().map(({ onPress, ...props }) => (
          <MenuOption
            onSelect={onPress}
            style={[
              {
                alignContent: "center",
              },
              props.icon !== null && {
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            {option(props)}
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
}
