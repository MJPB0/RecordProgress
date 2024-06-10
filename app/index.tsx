import { SplashScreen, router, useRootNavigationState } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "../components/shared/ThemedText";
import { Styles, stylesheet } from "./stylesheet";
import { useStyles } from "../hooks/useStyles";
import ThemedButton from "../components/shared/ThemedButton";
import { useCallback } from "react";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function Landing() {
  const { styles } = useStyles<Styles>(stylesheet);
  const rootNavigationState = useRootNavigationState();
  const [fontsLoaded, fontError] = useFonts({
    Harmattan: require("../assets/fonts/Harmattan-Regular.ttf"),
    HarmattanSemiBold: require("../assets/fonts/Harmattan-SemiBold.ttf"),
    HarmattanBold: require("../assets/fonts/Harmattan-Bold.ttf"),
    Lexend: require("../assets/fonts/Lexend.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const handleContinueClicked = () => {
    router.push("/login");
  };

  // TODO add auth layer to this so that it automatically redirects to the correct page
  if (!rootNavigationState?.key) return null;

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <ThemedText type="title">ROOT</ThemedText>
      <ThemedButton title="CONTINUE" onPress={handleContinueClicked} />
    </SafeAreaView>
  );
}
