import { Text, StyleSheet, Button } from "react-native";
import "../styles/unistyles";
import { SplashScreen, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Landing() {
  const handleContinueClicked = () => {
    router.push("/login");
  };

  SplashScreen.preventAutoHideAsync();
  setTimeout(() => {
    SplashScreen.hideAsync();
  }, 2000);

  return (
    <SafeAreaProvider style={styles.container}>
      <Text>ROOT</Text>
      <Button title="CONTINUE" onPress={handleContinueClicked} />
      <StatusBar />
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
