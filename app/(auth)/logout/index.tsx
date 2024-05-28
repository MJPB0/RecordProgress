import { router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";
import ThemedText from "../../../components/shared/ThemedText";

export default function Logout() {
  const { styles } = useStyles(stylesheet);

  setTimeout(() => {
    router.replace("/");
  }, 2000);

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemedText type="title">Logging out...</ThemedText>
    </SafeAreaProvider>
  );
}
