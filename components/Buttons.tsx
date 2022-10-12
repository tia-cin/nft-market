import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton: React.FC<{
  imgUrl: any;
  props: any;
  handlePress: () => any;
}> = ({ imgUrl, props, handlePress }) => {
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
        ...props,
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
  props: any;
  handlePress: () => void;
}> = ({ props, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{ color: COLORS.white, textAlign: "center" }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
