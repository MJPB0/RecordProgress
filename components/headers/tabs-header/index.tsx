import { SafeAreaView } from "react-native-safe-area-context";
import ThemedImage from "../../shared/ThemedImage";
import { router } from "expo-router";
import { Styles, stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";
import { View } from "react-native";
import PopupMenu from "../../shared/PopupMenu";

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
    <SafeAreaView style={styles.topBarContainer}>
      <PopupMenu
        options={{
          text: "Settings",
          onPress: () => console.log("Settings pressed"),
        }}
        menuTrigger={
          <ThemedImage
            size="lg"
            source={require(`${imagesFolderRoute}/burger.png`)}
          />
        }
      />

      <View style={styles.avatarIconContainer}>
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
      </View>
    </SafeAreaView>
  );
}
