import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

export default function Timer(props: ThemedImageProps) {
  return (
    <ThemedImage source={require(`../../assets/images/timer.png`)} {...props} />
  );
}
