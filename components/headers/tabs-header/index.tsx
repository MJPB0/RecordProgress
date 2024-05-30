import { Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ThemedImage from "../../shared/ThemedImage";
import { router } from "expo-router";
import { Styles, stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";

interface TabsHeaderProps {
  isDashboard: boolean;
  view: "day" | "month";
  setView: (view: "day" | "month") => void;
}

const imagesFolderRoute = "../../../assets/images";

export default function TabsHeader({
  isDashboard,
  view,
  setView,
}: TabsHeaderProps) {
  const { styles, theme } = useStyles<Styles>(stylesheet);

  const onLogout = () => router.replace("/logout");
  const handleViewChange = () => {
    setView(view === "day" ? "month" : "day");
  };

  return (
    <SafeAreaProvider style={styles.topBarContainer}>
      <ThemedImage
        size="md"
        pressable
        safeAreaView
        source={require(`${imagesFolderRoute}/burger.png`)}
      />
      <SafeAreaView>
        <ThemedImage
          size="md"
          pressable
          onPress={onLogout}
          source={require(`${imagesFolderRoute}/avatar.png`)}
        />
        {isDashboard && (
          <ThemedImage
            size="md"
            pressable
            onPress={handleViewChange}
            source={
              view === "day"
                ? require(`${imagesFolderRoute}/switch.png`)
                : require(`${imagesFolderRoute}/switch-reverse.png`)
            }
            style={{ marginTop: theme.margins.lg }}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
