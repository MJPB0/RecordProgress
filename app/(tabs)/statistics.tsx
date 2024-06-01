import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "../../components/shared/ThemedText";
import ThemedImage from "../../components/shared/ThemedImage";
import { useStyles } from "../../hooks/useStyles";
import { Styles, stylesheet } from "./styles/statistics.styles";

export default function Statistics() {
  const { styles } = useStyles<Styles>(stylesheet);

  return (
    <SafeAreaView style={styles.container}>
      <ThemedImage
        size="xxxl"
        style={{ marginTop: 12 }}
        source={require(`../../assets/images/work-in-progress.png`)}
      />

      <ThemedText style={styles.workInProgressText} type="title">
        STATISTICS
      </ThemedText>
    </SafeAreaView>
  );
}
