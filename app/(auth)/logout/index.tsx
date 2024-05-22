import { router } from "expo-router";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Logout() {
  setTimeout(() => {
    router.replace("/");
  }, 2000);

  return (
    <SafeAreaProvider>
      <Text>Logging out...</Text>
    </SafeAreaProvider>
  );
}
