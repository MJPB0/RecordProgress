import { SafeAreaView } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./styles/dashboard.styles";
import DayView from "../../components/dashboard/day-view";
import MonthView from "../../components/dashboard/month-view";
import { useLocalSearchParams } from "expo-router";
import { useStyles } from "../../hooks/useStyles";

export default function Dashboard() {
  const { styles } = useStyles<Styles>(stylesheet);
  const view = useLocalSearchParams<{ view: "day" | "month" }>().view ?? "day";

  return (
    <SafeAreaView style={styles.container}>
      {view === "day" ? <DayView /> : <MonthView />}
    </SafeAreaView>
  );
}
