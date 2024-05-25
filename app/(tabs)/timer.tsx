import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "../stylesheet";

export default function Timer() {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaProvider style={styles.container}>
      <Text>TIMER</Text>
    </SafeAreaProvider>
  );
}
