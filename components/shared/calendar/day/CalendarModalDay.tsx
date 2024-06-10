import { View } from "react-native";
import { useStyles } from "../../../../hooks/useStyles";
import { stylesheet } from "./stylesheet";
import ThemedText from "../../ThemedText";

interface CalendarModalDayProps {
  day: string;
  variant?: "active" | "inactive" | "disabled";
}

export default function CalendarModalDay({
  day,
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
    <View style={variantContainerStyleMap[variant]}>
      <ThemedText style={variantTextStyleMap[variant]}>{day}</ThemedText>
    </View>
  );
}
