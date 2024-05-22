import { Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Dashboard() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text>DASHBOARD</Text>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
