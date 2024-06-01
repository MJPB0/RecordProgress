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
          resizeMode: "contain",
          transform: [{ rotateY: direction === "left" ? "180deg" : "0deg" }],
        },
      ]}
      source={require(`../../assets/images/arrow-right.png`)}
      {...props}
    />
  );
}
