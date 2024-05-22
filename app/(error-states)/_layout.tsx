import { Stack } from "expo-router";
import { Text } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ErrorStatesLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <SafeAreaProvider>
            <Text>ERROR STATES</Text>
          </SafeAreaProvider>
        ),
      }}
    >
      <Stack.Screen name="not-found" />
      <Stack.Screen name="forbidden" />
    </Stack>
  );
}
