import { View } from "react-native";
import { useStyles } from "../../../../hooks/useStyles";
import { stylesheet } from "./stylesheet";
import ThemedText from "../../ThemedText";
import { weekdays } from "../../../../utils/constants";

export default function CalendarModalWeekdayRow() {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: theme.margins.md,
      }}
    >
      {weekdays.map((day) => (
        <ThemedText style={styles.weekdayText}>{day.slice(0, 2)}</ThemedText>
      ))}
    </View>
  );
}
