import { SafeAreaProvider } from "react-native-safe-area-context";
import { Styles, stylesheet } from "./stylesheet";
import ThemedText from "../../shared/ThemedText";
import { useStyles } from "../../../hooks/useStyles";

export default function MonthView() {
  const { styles } = useStyles<Styles>(stylesheet);

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemedText type="subTitle">MONTH VIEW</ThemedText>
    </SafeAreaProvider>
  );
}
