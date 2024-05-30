import { SafeAreaProvider } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import ThemedText from "../../shared/ThemedText";
import { useStyles } from "../../../hooks/useStyles";

export default function DayView() {
  const { styles } = useStyles<Styles>(stylesheet);

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemedText type="subTitle">DAY VIEW</ThemedText>
    </SafeAreaProvider>
  );
}
