import { Button } from "react-native";
import { router, useRootNavigationState } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ThemedText from "../components/shared/ThemedText";
import { Styles, stylesheet } from "./stylesheet";
import { useStyles } from "../hooks/useStyles";

export default function Landing() {
  const { styles } = useStyles<Styles>(stylesheet);
  const rootNavigationState = useRootNavigationState();

  const handleContinueClicked = () => {
    router.push("/login");
  };

  // TODO add auth layer to this so that it automatically redirects to the correct page
  if (!rootNavigationState?.key) return null;

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemedText type="title">ROOT</ThemedText>
      <Button title="CONTINUE" onPress={handleContinueClicked} />
    </SafeAreaProvider>
  );
}
