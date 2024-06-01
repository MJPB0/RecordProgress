import { SafeAreaView } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import ThemedText from "../../shared/ThemedText";
import { useStyles } from "../../../hooks/useStyles";
import WorkInProgress from "../../icons/WorkInProgress";

export default function DayView() {
  const { styles } = useStyles<Styles>(stylesheet);

  return (
    <SafeAreaView style={styles.container}>
      <WorkInProgress size="xxxl" />

      <ThemedText style={styles.workInProgressText} type="title">
        DASHBOARD
      </ThemedText>
      <ThemedText style={styles.workInProgressText} type="subTitle">
        DAY VIEW
      </ThemedText>
    </SafeAreaView>
  );
}
