import { useStyles } from "../../../../hooks/useStyles";
import { stylesheet } from "./stylesheet";
import ThemedText from "../../ThemedText";
import { PressableOpacity } from "react-native-pressable-opacity";
import { DateTime } from "luxon";

interface CalendarModalDayProps {
  date: DateTime;
  setDate: (newDate: DateTime) => void;
  variant?: "active" | "inactive" | "disabled";
}

export default function CalendarModalDay({
  date,
  setDate,
  variant = "inactive",
}: CalendarModalDayProps) {
  const { styles } = useStyles(stylesheet);

  const variantContainerStyleMap = {
    ["active"]: styles.dayContainerActive,
    ["inactive"]: styles.dayContainerInactive,
    ["disabled"]: styles.dayContainerDisabled,
  };

  const variantTextStyleMap = {
    ["active"]: styles.dayTextActive,
    ["inactive"]: styles.dayTextInactive,
    ["disabled"]: styles.dayTextDisabled,
  };

  return (
    <PressableOpacity
      style={variantContainerStyleMap[variant]}
      onPress={() => setDate(date)}
      disabled={variant === "disabled"}
      disabledOpacity={1}
    >
      <ThemedText style={variantTextStyleMap[variant]}>{date.day}</ThemedText>
    </PressableOpacity>
  );
}
