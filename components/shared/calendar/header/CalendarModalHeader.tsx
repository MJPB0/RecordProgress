import { View } from "react-native";
import { useStyles } from "../../../../hooks/useStyles";
import { stylesheet } from "./stylesheet";
import { PressableOpacity } from "react-native-pressable-opacity";
import Arrow from "../../../icons/Arrow";
import ThemedButton from "../../ThemedButton";
import { DateTime } from "luxon";
import { getMonthName } from "../../../../utils/date.utils";

interface CalendarModalHeaderProps {
  date: DateTime;
  setDate: (newDate: DateTime) => void;
}

export default function CalendarModalHeader({
  date,
  setDate,
}: CalendarModalHeaderProps) {
  const { styles } = useStyles(stylesheet);

  const handleArrowPress = (shouldIncrement: boolean) =>
    setDate(date.plus({ months: shouldIncrement ? 1 : -1 }));

  // TODO dropdowns for month and year
  return (
    <View style={styles.container}>
      <PressableOpacity
        style={styles.arrowButton}
        activeOpacity={0.5}
        onPress={() => handleArrowPress(false)}
      >
        <Arrow direction="left" size="sm" />
      </PressableOpacity>
      <View style={styles.dropdownContainer}>
        <ThemedButton
          title={getMonthName(date.month)}
          titleSize="lg"
          style={styles.dateDropdown}
          titleStyle={styles.dateDropdownText}
        />
        <ThemedButton
          title={date.year.toString()}
          titleSize="lg"
          style={styles.dateDropdown}
          titleStyle={styles.dateDropdownText}
        />
      </View>
      <PressableOpacity
        style={styles.arrowButton}
        activeOpacity={0.5}
        onPress={() => handleArrowPress(true)}
      >
        <Arrow direction="right" size="sm" />
      </PressableOpacity>
    </View>
  );
}
