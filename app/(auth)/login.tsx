import { router } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../hooks/useStyles";
import { Styles, stylesheet } from "./styles/login.styles";

export default function Login() {
  const { styles } = useStyles<Styles>(stylesheet);

  const handleLoginClick = () => {
    router.replace("/dashboard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="LOGIN" onPress={handleLoginClick} />
    </SafeAreaView>
  );
}
