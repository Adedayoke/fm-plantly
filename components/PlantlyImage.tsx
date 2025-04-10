import React from "react";
import { Image, useWindowDimensions } from "react-native";

export default function PlantlyImage({
  size,
  imgUri,
}: {
  size?: number;
  imgUri?: string;
}) {
  const { width, height } = useWindowDimensions();

  const imageSize = size || Math.min(width / 1.5, 400);
  return (
    <Image
      style={{
        borderRadius: 6,
        width: imageSize,
        height: imageSize,
      }}
      source={imgUri ? { uri: imgUri } : require("@/assets/plantly.png")}
    />
  );
}
