import { SafeAreaProvider } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import DayView from "../../components/dashboard/day-view";
import MonthView from "../../components/dashboard/month-view";
import ThemedText from "../../components/shared/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { useStyles } from "../../hooks/useStyles";

export default function Dashboard() {
  const { styles } = useStyles<Styles>(stylesheet);
  const view = useLocalSearchParams<{ view: "day" | "month" }>().view ?? "day";

  return (
    <SafeAreaProvider style={styles.container}>
      {view === "day" ? <DayView /> : <MonthView />}
      <ThemedText type="title">DASHBOARD</ThemedText>
    </SafeAreaProvider>
  );
}
