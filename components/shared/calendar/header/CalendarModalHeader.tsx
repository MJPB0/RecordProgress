import { View } from "react-native";
import { useStyles } from "../../../../hooks/useStyles";
import { stylesheet } from "./stylesheet";
import { PressableOpacity } from "react-native-pressable-opacity";
import Arrow from "../../../icons/Arrow";
import ThemedButton from "../../ThemedButton";
import { changeMonth, getMonthFromDate } from "../../../../utils/date.utils";
import { useState } from "react";

interface CalendarModalHeaderProps {
  selectedDate: Date;
  setSelectedDate: (newDate: Date) => void;
}

export default function CalendarModalHeader({
  selectedDate,
}: CalendarModalHeaderProps) {
  const { styles } = useStyles(stylesheet);
  const [date, setDate] = useState<Date>(selectedDate);

  const handleArrowPress = (shouldIncrement: boolean) =>
    setDate(changeMonth({ selectedDate: date, shouldIncrement }));

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
          title={getMonthFromDate(date)}
          titleSize="lg"
          style={styles.dateDropdown}
          titleStyle={styles.dateDropdownText}
        />
        <ThemedButton
          title={date.getFullYear().toString()}
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
