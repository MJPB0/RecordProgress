import { View } from "react-native";
import { useStyles } from "../../../../hooks/useStyles";
import { Styles, stylesheet } from "./stylesheet";
import Arrow from "../../../icons/Arrow";
import { DateTime } from "luxon";
import { getMonthName } from "../../../../utils/date.utils";
import ThemedButton from "../../../shared/ThemedButton";

interface MonthViewHeaderProps {
  selectedDate: DateTime;
  setSelectedDate: (date: DateTime) => void;
}

export default function MonthViewHeader({
  selectedDate,
  setSelectedDate,
}: MonthViewHeaderProps) {
  const { styles } = useStyles<Styles>(stylesheet);

  const changeMonth = (shouldIncrement: boolean) =>
    setSelectedDate(selectedDate.plus({ months: shouldIncrement ? 1 : -1 }));

  return (
    <View style={styles.container}>
      <Arrow
        direction="left"
        variant="alternative"
        size="xl"
        isPressable
        onPress={() => changeMonth(false)}
      />
      <View style={styles.dropdownContainer}>
        <ThemedButton
          title={getMonthName(selectedDate.month)}
          titleSize="lg"
          style={styles.dateDropdown}
          titleStyle={styles.dateDropdownText}
        />
        <ThemedButton
          title={selectedDate.year.toString()}
          titleSize="lg"
          style={styles.dateDropdown}
          titleStyle={styles.dateDropdownText}
        />
      </View>
      <Arrow
        direction="right"
        variant="alternative"
        size="xl"
        isPressable
        onPress={() => changeMonth(true)}
      />
    </View>
  );
}
