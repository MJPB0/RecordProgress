import { SafeAreaView } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";
import WeekdayRow from "./weekday-row";

export default function MonthView() {
  const { styles } = useStyles<Styles>(stylesheet);

  return (
    <SafeAreaView style={styles.container}>
      <WeekdayRow />
    </SafeAreaView>
  );
}
