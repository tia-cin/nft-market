import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { CircleButtonProps, RectButtonProps } from "../types";

export const CircleButton: React.FC<CircleButtonProps> = ({
  imgUrl,
  props,
  handlePress,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: COLORS.white,
          position: "absolute",
          borderRadius: SIZES.extraLarge,
          alignItems: "center",
          justifyContent: "center",
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
    </View>
  );
};

export const RectButton: React.FC<RectButtonProps> = ({
  props,
  handlePress,
  text,
}) => {
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
      <Text style={{ color: COLORS.white, textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export const IconButton: React.FC<{ text: string; icon: any; props?: any }> = ({
  text,
  icon,
  props,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
    >
      <Image
        source={icon}
        style={{ width: 40, height: 40, marginRight: SIZES.font }}
      />
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};
