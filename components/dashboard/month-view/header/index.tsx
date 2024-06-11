import { Text, View } from "react-native";
import { useStyles } from "../../../../hooks/useStyles";
import { Styles, stylesheet } from "./stylesheet";
import Arrow from "../../../icons/Arrow";
import CalendarModal from "../../../shared/calendar/CalendarModal";
import { DateTime } from "luxon";
import { getMonthName } from "../../../../utils/date.utils";

interface MonthViewHeaderProps {
  selectedDate: DateTime;
  setSelectedDate: (date: DateTime) => void;
}

export default function MonthViewHeader({
  selectedDate,
  setSelectedDate,
}: MonthViewHeaderProps) {
  const { styles } = useStyles<Styles>(stylesheet);

  const displayDate = () =>
    `${getMonthName(selectedDate.month)} ${selectedDate.year}`;

  return (
    <View style={styles.container}>
      <Arrow
        direction="left"
        variant="alternative"
        size="xl"
        isPressable
        onPress={() => setSelectedDate(selectedDate.minus({ months: 1 }))}
      />
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{displayDate()}</Text>
        <CalendarModal
          // variant="short"
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </View>
      <Arrow
        direction="right"
        variant="alternative"
        size="xl"
        isPressable
        onPress={() => setSelectedDate(selectedDate.plus({ months: 1 }))}
      />
    </View>
  );
}
