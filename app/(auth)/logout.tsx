import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "../../components/shared/ThemedText";
import { useStyles } from "../../hooks/useStyles";
import { Styles, stylesheet } from "./styles/logout.styles";

export default function Logout() {
  const { styles } = useStyles<Styles>(stylesheet);

  setTimeout(async () => {
    router.replace("/");
  }, 2000);

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">Logging out...</ThemedText>
    </SafeAreaView>
  );
}
