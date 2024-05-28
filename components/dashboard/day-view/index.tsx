import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";
import ThemedText from "../../shared/ThemedText";

export default function DayView() {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemedText type="subTitle">DAY VIEW</ThemedText>
    </SafeAreaProvider>
  );
}
