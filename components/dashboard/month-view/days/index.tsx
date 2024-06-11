import { useStyles } from "../../../../hooks/useStyles";
import { Styles, stylesheet } from "./stylesheet";
import { View } from "react-native";
import { generateCalendarMonth } from "../../../../utils/date.utils";
import MonthViewDay from "./day";
import { DateTime } from "luxon";

interface MonthViewDaysProps {
  selectedDate: DateTime;
}

export default function MonthViewDays({ selectedDate }: MonthViewDaysProps) {
  const { styles } = useStyles<Styles>(stylesheet);

  return (
    <View style={styles.generatedMonth}>
      {generateCalendarMonth(selectedDate).map((week) => (
        <View style={styles.generatedWeek}>
          {week.map((day) => (
            <MonthViewDay
              date={day}
              variant={
                day.month === selectedDate.month ? "default" : "disabled"
              }
            />
          ))}
        </View>
      ))}
    </View>
  );
}
