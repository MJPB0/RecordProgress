import { PressableOpacity } from "react-native-pressable-opacity";
import { DateTime } from "luxon";
import ThemedText from "../../../../shared/ThemedText";
import { useStyles } from "../../../../../hooks/useStyles";
import { stylesheet } from "./stylesheet";

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
    <PressableOpacity
      style={[
        styles.dayContainerDefault,
        { backgroundColor: backgroundMap[date.weekday - 1] },
      ]}
      disabled={variant === "disabled"}
    >
      <ThemedText style={styles.dayTextDefault}>{date.day}</ThemedText>
    </PressableOpacity>
  );
}
