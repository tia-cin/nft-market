import { View, TextInput, Image, Text } from "react-native";
import React from "react";
import { SIZES, COLORS, assets } from "../constants";
import { IconInputProps, InputsProps } from "../types";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Inputs: React.FC<InputsProps> = ({ value, onChange }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: COLORS.light,
        borderRadius: SIZES.font,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2,
      }}
    >
      <TextInput value={value} onChangeText={onChange} />
    </View>
  );
};

export const IconInput: React.FC<IconInputProps> = ({ onChange }) => {
  return (
    <View
      style={{
        width: "100%",
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2,
      }}
    >
      <Image
        source={assets.search}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: SIZES.base }}
      />
      <TextInput
        placeholder="Search NFTs"
        style={{ flex: 1 }}
        onChangeText={onChange}
      />
    </View>
  );
};
