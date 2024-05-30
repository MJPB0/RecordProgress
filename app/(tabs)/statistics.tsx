import { SafeAreaProvider } from "react-native-safe-area-context";
import ThemedText from "../../components/shared/ThemedText";
import ThemedImage from "../../components/shared/ThemedImage";
import { useStyles } from "../../hooks/useStyles";
import { Styles, stylesheet } from "./stylesheet";

export default function Statistics() {
  const { styles } = useStyles<Styles>(stylesheet);

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
