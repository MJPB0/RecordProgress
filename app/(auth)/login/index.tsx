import { router } from "expo-router";
import { Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Login() {
  const handleLoginClick = () => {
    router.replace("/dashboard");
  };

  return (
    <SafeAreaProvider>
      <Button title="LOGIN" onPress={handleLoginClick} />
    </SafeAreaProvider>
  );
}
