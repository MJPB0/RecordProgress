import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";
import { Text } from "react-native";

export default function DayView() {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaProvider style={styles.container}>
      <Text>DAY VIEW</Text>
    </SafeAreaProvider>
  );
}
