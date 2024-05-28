import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "../stylesheet";
import DayView from "../../components/dashboard/day-view";
import MonthView from "../../components/dashboard/month-view";
import ThemedText from "../../components/shared/ThemedText";
import { useLocalSearchParams } from "expo-router";

export default function Dashboard() {
  const { styles } = useStyles(stylesheet);
  const view = useLocalSearchParams<{ view: "day" | "month" }>().view ?? "day";

  return (
    <SafeAreaProvider style={styles.container}>
      {view === "day" ? <DayView /> : <MonthView />}
      <ThemedText type="title">DASHBOARD</ThemedText>
    </SafeAreaProvider>
  );
}
