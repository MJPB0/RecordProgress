import { SafeAreaProvider } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import ThemedText from "../../shared/ThemedText";
import { useStyles } from "../../../hooks/useStyles";
import ThemedImage from "../../shared/ThemedImage";

export default function DayView() {
  const { styles } = useStyles<Styles>(stylesheet);

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemedImage
        size="xxxl"
        source={require(`../../../assets/images/work-in-progress.png`)}
      />

      <ThemedText style={styles.workInProgressText} type="title">
        DASHBOARD
      </ThemedText>
      <ThemedText style={styles.workInProgressText} type="subTitle">
        DAY VIEW
      </ThemedText>
    </SafeAreaProvider>
  );
}
