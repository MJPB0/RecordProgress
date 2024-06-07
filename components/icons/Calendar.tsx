import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

export default function Calendar(props: ThemedImageProps) {
  return (
    <ThemedImage
      source={require(`../../assets/images/calendar.png`)}
      {...props}
    />
  );
}
