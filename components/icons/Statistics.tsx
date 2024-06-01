import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

export default function Statistics(props: ThemedImageProps) {
  return (
    <ThemedImage source={require(`../../assets/images/stats.png`)} {...props} />
  );
}
