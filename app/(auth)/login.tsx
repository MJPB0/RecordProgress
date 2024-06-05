import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../hooks/useStyles";
import { Styles, stylesheet } from "./styles/login.styles";
import ThemedButton from "../../components/shared/ThemedButton";

export default function Login() {
  const { styles } = useStyles<Styles>(stylesheet);

  const handleLoginClick = () => {
    router.replace("/dashboard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedButton title="LOGIN" onPress={handleLoginClick} />
    </SafeAreaView>
  );
}
