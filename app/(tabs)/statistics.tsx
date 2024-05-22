import { Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Statistics() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text>STATISTICS</Text>
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
