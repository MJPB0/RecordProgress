import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

interface ArrowProps extends ThemedImageProps {
  state: "default" | "clicked";
}

export default function Switch({ state, ...props }: ArrowProps) {
  return (
    <ThemedImage
      source={
        state === "default"
          ? require(`../../assets/images/switch.png`)
          : require(`../../assets/images/switch-reverse.png`)
      }
      {...props}
    />
  );
}
