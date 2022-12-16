import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import { CircleButton, FocusStatusBar, UserInfo } from "../components";
import { userInfo } from "../constants/dummy";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigateProps } from "../types";
import { Bids, LikedNFTs, UserNFTs } from ".";

const User = ({ route }: any) => {
  const navigate = useNavigation<StackNavigationProp<NavigateProps>>();
  const { typeScreen } = route.params ? route.params : "createdUser";
  const screens: { [key: string]: JSX.Element } = {
    createdUser: <UserNFTs />,
    likedUser: <LikedNFTs />,
    bidsUser: <Bids />,
  };

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
          handlePress={() => navigate.goBack()}
        />
        <TouchableOpacity
          style={{ right: SIZES.large * 2 }}
          onPress={() => navigate.navigate("CreateNFT")}
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
      >
        {screens[typeScreen] || screens["createdUser"]}
      </View>
    </View>
  );
};

export default User;
