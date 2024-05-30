import { router } from "expo-router";
import { Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";

export default function Login() {
  const { styles } = useStyles<Styles>(stylesheet);

  const handleLoginClick = () => {
    router.replace("/dashboard");
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <Button title="LOGIN" onPress={handleLoginClick} />
    </SafeAreaProvider>
  );
}
