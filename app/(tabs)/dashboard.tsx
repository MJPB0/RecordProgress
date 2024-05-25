import { Pressable, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "../stylesheet";
import { Image } from "expo-image";
import { useState } from "react";
import DayView from "../../components/dashboard/day-view";
import MonthView from "../../components/dashboard/month-view";

export default function Dashboard() {
  const { styles } = useStyles(stylesheet);
  const [isDayDisplay, setIsDayDisplay] = useState(true);

  const handleDisplayChange = () => {
    setIsDayDisplay(!isDayDisplay);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <Pressable
        onPress={handleDisplayChange}
        style={{ position: "absolute", top: 0, right: 20 }}
      >
        <Image
          source={
            isDayDisplay
              ? require("../../assets/images/switch.png")
              : require("../../assets/images/switch-reverse.png")
          }
          style={styles.topBarImage}
        />
      </Pressable>
      {isDayDisplay ? <DayView /> : <MonthView />}
      <Text>DASHBOARD</Text>
    </SafeAreaProvider>
  );
}
