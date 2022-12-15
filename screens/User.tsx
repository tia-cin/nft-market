import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import {
  CircleButton,
  DetailsBid,
  FocusStatusBar,
  NFTCard,
  UserInfo,
} from "../components";
import { userInfo } from "../constants/dummy";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigateProps } from "../types";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<NavigateProps>();

const User = () => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.primary} />
      <View
        style={{
          flex: 0.5,
          margin: SIZES.medium,
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
        />
        <TouchableOpacity
          style={{ right: SIZES.large * 2 }}
          onPress={() => navigation.navigate("CreateNFT")}
        >
          <Text
            style={{
              backgroundColor: COLORS.white,
              padding: SIZES.small - 4,
              borderRadius: SIZES.small,
              position: "absolute",
            }}
          >
            Create NFT
          </Text>
        </TouchableOpacity>
      </View>
      <UserInfo userInfo={userInfo} />
      <View
        style={{
          flex: 2,
          alignItems: "center",
        }}
      ></View>
    </View>
  );
};

export default User;
