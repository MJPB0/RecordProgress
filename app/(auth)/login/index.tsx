import { router } from "expo-router";
import { Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";

export default function Login() {
  const { styles } = useStyles(stylesheet);

  const handleLoginClick = () => {
    router.replace("/dashboard");
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <Button title="LOGIN" onPress={handleLoginClick} />
    </SafeAreaProvider>
  );
}
