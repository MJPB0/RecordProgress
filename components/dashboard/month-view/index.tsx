import { SafeAreaView } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";
import MonthViewHeader from "./header";
import { useState } from "react";
import { DateTime } from "luxon";
import MonthViewWeekdays from "./weekday-row";
import MonthViewDays from "./days";

export default function MonthView() {
  const { styles } = useStyles<Styles>(stylesheet);
  const [selectedDate, setSelectedDate] = useState(DateTime.now());

  return (
    <SafeAreaView style={styles.container}>
      <MonthViewHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <MonthViewWeekdays />
      <MonthViewDays selectedDate={selectedDate} />
    </SafeAreaView>
  );
}
