import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES, assets } from "../constants";
import { IconInput } from ".";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HeaderProps } from "../types";

export const HomeHeader: React.FC<HeaderProps> = ({ onSearch, text }) => {
  const navigation = useNavigation<StackNavigationProp<{ User: any }>>();

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
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
        <View style={{ width: 45, height: 45 }}>
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <Image
              source={assets.person01}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                bottom: 0,
                right: 0,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{ fontSize: SIZES.small, color: COLORS.white }}>
          Hello, there!
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          {text}
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <IconInput onChange={onSearch} />
      </View>
    </View>
  );
};

export const TrendingsHeader: React.FC<HeaderProps> = ({ text, onSearch }) => {
  const navigation = useNavigation<StackNavigationProp<{ User: any }>>();

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
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
        <View style={{ width: 45, height: 45 }}>
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <Image
              source={assets.person01}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                bottom: 0,
                right: 0,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
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
      </View>
    </View>
  );
};
