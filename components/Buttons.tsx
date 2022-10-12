import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton: React.FC<{
  imgUrl: any;
  right: number;
  top: number;
  handlePress: () => void;
}> = ({ imgUrl, right, top, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        top,
        right,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton: React.FC<{
  minWidth: number;
  fontSize: number;
  handlePress: () => void;
}> = ({ minWidth, fontSize, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth,
        padding: SIZES.small,
      }}
      onPress={handlePress}
    >
      <Text style={{ fontSize, color: COLORS.white, textAlign: "center" }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
