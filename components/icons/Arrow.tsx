import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

interface ArrowProps extends ThemedImageProps {
  direction: "left" | "right";
  variant?: "default" | "alternative";
}

export default function Arrow({
  direction,
  variant = "default",
  style,
  ...props
}: ArrowProps) {
  return (
    <ThemedImage
      style={[
        style,
        {
          transform: [{ rotateY: direction === "left" ? "180deg" : "0deg" }],
        },
      ]}
      contentFit="contain"
      source={
        variant === "default"
          ? require(`../../assets/images/arrow.png`)
          : require(`../../assets/images/arrow-2.png`)
      }
      {...props}
    />
  );
}
