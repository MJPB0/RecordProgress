import { Stack } from "expo-router";
import { Text } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <SafeAreaProvider>
            <Text>HEADER</Text>
          </SafeAreaProvider>
        ),
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(error-states)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}
