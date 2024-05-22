import { Stack } from "expo-router";
import { Text } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <SafeAreaProvider>
            <Text>AUTH</Text>
          </SafeAreaProvider>
        ),
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="logout" />
    </Stack>
  );
}
