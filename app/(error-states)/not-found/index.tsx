import { router } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function NotFound() {
  const handleBackClicked = () => {
    router.replace("/");
  };

  return (
    <SafeAreaProvider>
      <Text>NOTFOUND</Text>
      <Button title="BACK" onPress={handleBackClicked} />
    </SafeAreaProvider>
  );
}
