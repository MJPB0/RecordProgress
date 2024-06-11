import { SafeAreaView } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";
import WeekdayRow from "./weekday-row";
import MonthViewHeader from "./header";
import { useState } from "react";
import { DateTime } from "luxon";

export default function MonthView() {
  const { styles } = useStyles<Styles>(stylesheet);
  const [selectedDate, setSelectedDate] = useState(DateTime.now());

  return (
    <SafeAreaView style={styles.container}>
      <MonthViewHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <WeekdayRow />
    </SafeAreaView>
  );
}
