import { Text, View } from "react-native";
import { useStyles } from "../../../../hooks/useStyles";
import { Styles, stylesheet } from "./stylesheet";
import Arrow from "../../../icons/Arrow";
import Calendar from "../../../icons/Calendar";

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
    `${selectedDate.toLocaleString("default", {
      month: "long",
    })} ${selectedDate.getFullYear()}`;

  const changeMonth = ({ isFuture }: { isFuture: boolean }) =>
    setSelectedDate(
      new Date(
        selectedDate.setMonth(selectedDate.getMonth() + (isFuture ? 1 : -1))
      )
    );

  return (
    <View style={styles.container}>
      <Arrow
        direction="left"
        variant="alternative"
        size="xl"
        isPressable
        onPress={() => changeMonth({ isFuture: false })}
      />
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{displayDate()}</Text>
        <Calendar size="md" />
      </View>
      <Arrow
        direction="right"
        variant="alternative"
        size="xl"
        isPressable
        onPress={() => changeMonth({ isFuture: true })}
      />
    </View>
  );
}
