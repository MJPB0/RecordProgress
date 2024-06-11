import { DateTime } from "luxon";
import ThemedText from "../../../../shared/ThemedText";
import { useStyles } from "../../../../../hooks/useStyles";
import { stylesheet } from "./stylesheet";
import PopupMenu from "../../../../shared/popup-menu/PopupMenu";
import { View } from "react-native";
import { hex2rgba } from "../../../../../utils/color.utils";

interface MonthViewDayProps {
  date: DateTime;
  variant?: "default" | "disabled";
}

export default function MonthViewDay({
  date,
  variant = "default",
}: MonthViewDayProps) {
  const { styles, theme } = useStyles(stylesheet);

  const backgroundMap = [
    theme.colors.day.monday,
    theme.colors.day.tuesday,
    theme.colors.day.wednesday,
    theme.colors.day.thursday,
    theme.colors.day.friday,
    theme.colors.day.saturday,
    theme.colors.day.sunday,
  ];

  return (
    <PopupMenu
      options={{
        text: "Details",
        textStyle: { marginRight: theme.margins.lg },
        iconStyle: { tintColor: backgroundMap[date.weekday - 1] },
        underlayColor: hex2rgba(backgroundMap[date.weekday - 1], 0.5),
      }}
      style={{ flex: 1 }}
      disabled={variant === "disabled"}
      menuTrigger={
        <View
          style={[
            styles.dayContainerDefault,
            {
              backgroundColor: backgroundMap[date.weekday - 1],
              opacity: variant === "disabled" ? 0.5 : 1,
            },
          ]}
        >
          <ThemedText style={styles.dayTextDefault}>{date.day}</ThemedText>
        </View>
      }
    />
  );
}
