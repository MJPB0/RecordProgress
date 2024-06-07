import { useStyles } from "../../../../hooks/useStyles";
import { Styles, stylesheet } from "./stylesheet";
import { weekdays } from "../../../shared/constants/weekday";
import { Text, View } from "react-native";

export default function WeekdayRow() {
  const { styles } = useStyles<Styles>(stylesheet);

  return (
    <View style={styles.weekdayRow}>
      {weekdays.map((weekday) => (
        <Text key={weekday} style={styles.weekday}>
          {weekday}
        </Text>
      ))}
    </View>
  );
}
