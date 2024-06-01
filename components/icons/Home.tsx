import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

export default function Home(props: ThemedImageProps) {
  return (
    <ThemedImage source={require(`../../assets/images/home.png`)} {...props} />
  );
}
