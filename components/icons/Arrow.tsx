import ThemedImage, { ThemedImageProps } from "../shared/ThemedImage";

interface ArrowProps extends ThemedImageProps {
  direction: "left" | "right";
}

export default function Arrow({ direction, style, ...props }: ArrowProps) {
  return (
    <ThemedImage
      style={[
        style,
        {
          transform: [{ rotateY: direction === "left" ? "180deg" : "0deg" }],
        },
      ]}
      contentFit="contain"
      source={require(`../../assets/images/arrow-right.png`)}
      {...props}
    />
  );
}
