import { Button } from "react-native";
import "../styles/unistyles";
import { router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";
import ThemedText from "../components/shared/ThemedText";

export default function Landing() {
  const { styles } = useStyles(stylesheet);

  const handleContinueClicked = () => {
    router.push("/login");
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemedText type="title">ROOT</ThemedText>
      <Button title="CONTINUE" onPress={handleContinueClicked} />
    </SafeAreaProvider>
  );
}
