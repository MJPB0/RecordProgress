import { Text, View } from "react-native";
import { useStyles } from "../../../../hooks/useStyles";
import { Styles, stylesheet } from "./stylesheet";
import Arrow from "../../../icons/Arrow";
import CalendarModal from "../../../shared/calendar/CalendarModal";
import { changeMonth, getMonthFromDate } from "../../../../utils/date.utils";

interface MonthViewHeaderProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export default function MonthViewHeader({
  selectedDate,
  setSelectedDate,
}: MonthViewHeaderProps) {
  const { styles } = useStyles<Styles>(stylesheet);

  const displayDate = () =>
    `${getMonthFromDate(selectedDate)} ${selectedDate.getFullYear()}`;

  return (
    <View style={styles.container}>
      <Arrow
        direction="left"
        variant="alternative"
        size="xl"
        isPressable
        onPress={() =>
          setSelectedDate(changeMonth({ selectedDate, shouldIncrement: false }))
        }
      />
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{displayDate()}</Text>
        <CalendarModal
          variant="short"
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </View>
      <Arrow
        direction="right"
        variant="alternative"
        size="xl"
        isPressable
        onPress={() => setSelectedDate(changeMonth({ selectedDate }))}
      />
    </View>
  );
}
