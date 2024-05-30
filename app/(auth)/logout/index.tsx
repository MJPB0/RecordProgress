import { router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import ThemedText from "../../../components/shared/ThemedText";
import { useStyles } from "../../../hooks/useStyles";

export default function Logout() {
  const { styles } = useStyles<Styles>(stylesheet);

  setTimeout(async () => {
    router.replace("/");
  }, 2000);

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemedText type="title">Logging out...</ThemedText>
    </SafeAreaProvider>
  );
}
