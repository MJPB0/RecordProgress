import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

export default function WorkInProgress(props: ThemedImageProps) {
  return (
    <ThemedImage
      source={require(`../../assets/images/work-in-progress.png`)}
      {...props}
    />
  );
}
