import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

export default function Burger(props: ThemedImageProps) {
  return (
    <ThemedImage
      source={require(`../../assets/images/burger.png`)}
      {...props}
    />
  );
}
