import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { SIZES, COLORS, assets } from "../constants";

export const Inputs: React.FC<{
  value: string;
  onChange: (input: string) => void;
}> = ({ value, onChange }) => {
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

export const IconInput: React.FC<{ onChange: (input: string) => void }> = ({
  onChange,
}) => {
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
