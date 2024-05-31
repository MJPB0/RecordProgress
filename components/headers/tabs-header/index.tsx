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
  const { styles } = useStyles<Styles>(stylesheet);

  const onLogout = () => router.replace("/logout");
  const handleViewChange = () => {
    setView(view === "day" ? "month" : "day");
  };

  return (
    <SafeAreaProvider style={styles.topBarContainer}>
      <ThemedImage
        size="lg"
        isPressable
        isSafeAreaView
        source={require(`${imagesFolderRoute}/burger.png`)}
      />

      <SafeAreaView style={styles.avatarIconContainer}>
        <ThemedImage
          size="lg"
          isPressable
          onPress={onLogout}
          source={require(`${imagesFolderRoute}/avatar.png`)}
        />

        {isDashboard && (
          <ThemedImage
            size="lg"
            isPressable
            onPress={handleViewChange}
            pressableProps={{
              style: styles.switch,
            }}
            source={
              view === "day"
                ? require(`${imagesFolderRoute}/switch.png`)
                : require(`${imagesFolderRoute}/switch-reverse.png`)
            }
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
