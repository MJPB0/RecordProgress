import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";
import ThemedText from "../../components/shared/ThemedText";
import ThemedImage from "../../components/shared/ThemedImage";

export default function Statistics() {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemedImage
        size="xxxl"
        source={require(`../../assets/images/work-in-progress.png`)}
      />

      <ThemedText style={styles.workInProgressText} type="headline">
        STATISTICS
      </ThemedText>
    </SafeAreaProvider>
  );
}
