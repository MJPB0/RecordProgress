import { Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ThemedImage from "../../shared/ThemedImage";
import { useStyles } from "react-native-unistyles";
import { router } from "expo-router";
import { stylesheet } from "./stylesheet";

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
  const { styles, theme } = useStyles(stylesheet);

  const onLogout = () => router.replace("/logout");
  const handleViewChange = () => {
    setView(view === "day" ? "month" : "day");
  };

  return (
    <SafeAreaProvider style={styles.topBarContainer}>
      <Pressable>
        <ThemedImage
          size="md"
          source={require(`${imagesFolderRoute}/burger.png`)}
        />
      </Pressable>
      <div>
        <Pressable onPress={onLogout}>
          <ThemedImage
            size="md"
            source={require(`${imagesFolderRoute}/avatar.png`)}
          />
        </Pressable>
        {isDashboard && (
          <Pressable onPress={handleViewChange}>
            <ThemedImage
              size="md"
              source={
                view === "day"
                  ? require(`${imagesFolderRoute}/switch.png`)
                  : require(`${imagesFolderRoute}/switch-reverse.png`)
              }
              style={{ marginTop: theme.margins.lg }}
            />
          </Pressable>
        )}
      </div>
    </SafeAreaProvider>
  );
}
