import { Text, Button } from "react-native";
import "../styles/unistyles";
import { SplashScreen, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";

export default function Landing() {
  const { styles } = useStyles(stylesheet);

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
