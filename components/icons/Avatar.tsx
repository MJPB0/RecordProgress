import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

export default function Avatar(props: ThemedImageProps) {
  return (
    <ThemedImage
      source={require(`../../assets/images/avatar.png`)}
      {...props}
    />
  );
}
