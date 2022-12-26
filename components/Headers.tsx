import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES, assets } from "../constants";
import { IconInput } from ".";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HeaderProps, NavigateProps } from "../types";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Header: React.FC<HeaderProps> = ({ onSearch, text }) => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();

  const MenuButton = () => (
    <View style={{ width: 45, height: 45 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Ionicons name="md-menu-outline" color={COLORS.white} size={40} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      {text === "Trendings" && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 90, height: 25 }}
          />
          <MenuButton />
        </View>
      )}
      <View
        style={{
          marginVertical: SIZES.base,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.extraLarge + 6,
            fontWeight: "600",
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          {text}
        </Text>
        {text !== "Trendings" && <MenuButton />}
      </View>
      {onSearch && (
        <View style={{ marginTop: SIZES.font }}>
          <IconInput onChange={onSearch} />
        </View>
      )}
    </View>
  );
};
