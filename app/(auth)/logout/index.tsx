import { router } from "expo-router";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";

export default function Logout() {
  const { styles } = useStyles(stylesheet);

  setTimeout(() => {
    router.replace("/");
  }, 2000);

  return (
    <SafeAreaProvider style={styles.container}>
      <Text>Logging out...</Text>
    </SafeAreaProvider>
  );
}
