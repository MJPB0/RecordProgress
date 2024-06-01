import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Styles, stylesheet } from "./stylesheet";
import { useStyles } from "../../../hooks/useStyles";
import { View } from "react-native";
import PopupMenu from "../../shared/popup-menu/PopupMenu";
import Burger from "../../icons/Burger";
import Avatar from "../../icons/Avatar";
import Switch from "../../icons/Switch";

interface TabsHeaderProps {
  isDashboard: boolean;
  view: "day" | "month";
  setView: (view: "day" | "month") => void;
}

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
        menuTrigger={<Burger size="lg" />}
      />

      <View style={styles.avatarIconContainer}>
        <PopupMenu
          options={[
            {
              text: "Profile",
              onPress: () => console.log("Profile pressed"),
            },
            {
              text: "Preferences",
              onPress: () => console.log("Preferences pressed"),
            },
            {
              text: "Logout",
              onPress: onLogout,
            },
          ]}
          menuTrigger={<Avatar size="lg" />}
        />

        {isDashboard && (
          <Switch
            size="lg"
            isPressable
            onPress={handleViewChange}
            pressableProps={{
              style: styles.switch,
            }}
            state={view === "day" ? "default" : "clicked"}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
