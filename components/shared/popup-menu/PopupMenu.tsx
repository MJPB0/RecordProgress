import { Text, TextStyle, TouchableHighlight, View } from "react-native";
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from "react-native-popup-menu";
import { useStyles } from "../../../hooks/useStyles";
import Arrow from "../../icons/Arrow";
import { ImageStyle } from "expo-image";
import { stylesheet } from "./stylesheet";

interface MenuOptionProps {
  text: string;
  textStyle?: TextStyle;
  onPress?: () => void;
  direction?: "left" | "right";
  icon?: React.ReactNode;
  iconStyle?: ImageStyle;
}

interface PopupMenuProps {
  menuTrigger: React.ReactNode;
  options: MenuOptionProps | MenuOptionProps[];
}

export default function PopupMenu({ menuTrigger, options }: PopupMenuProps) {
  options = [options].flat();

  const { theme, styles } = useStyles(stylesheet);

  const option = ({
    text,
    textStyle,
    direction = "right",
    icon,
    iconStyle,
  }: MenuOptionProps) => {
    const isDirectedRight = direction === "right";

    const optionText = (
      <Text
        key={`popup-menu-text-${text}`}
        style={[
          {
            textAlign: isDirectedRight ? "left" : "right",
          },
          styles.menuOptionText,
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
        <Arrow
          key={`popup-menu-image-${text}`}
          direction={direction}
          size="sm"
          style={iconStyle}
        />
      );

    return isDirectedRight ? (
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
        optionsContainerStyle={styles.menuOptionsContainer}
        customStyles={{
          optionsWrapper: styles.menuOptionsWrapper,
          OptionTouchableComponent: TouchableHighlight,
        }}
      >
        {options.map(({ onPress, ...props }, index) => (
          <>
            <MenuOption
              key={`popup-menu-option-${props.text}-${index}`}
              onSelect={onPress}
              customStyles={{
                optionTouchable: {
                  activeOpacity: 1,
                  underlayColor: theme.colors.highlight.secondary,
                  style: [
                    styles.optionTouchable,
                    index === 0 &&
                      options.length > 1 &&
                      styles.topOptionTouchable,
                    index > 0 &&
                      index < options.length - 1 &&
                      styles.middleOptionTouchable,
                    index > 0 &&
                      index === options.length - 1 &&
                      styles.bottomOptionTouchable,
                  ],
                },
              }}
              style={[
                styles.menuOption,
                props.icon !== null && styles.menuOptionWithIcon,
              ]}
            >
              {option(props)}
            </MenuOption>

            {index < options.length - 1 && <View style={styles.separator} />}
          </>
        ))}
      </MenuOptions>
    </Menu>
  );
}
