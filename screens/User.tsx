import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import { FocusStatusBar, UserInfo } from "../components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigateProps } from "../types";
import { Bids, LikedNFTs, UserNFTs } from ".";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

const User = ({ route }: any) => {
  const { user } = useSelector((state: RootState) => state);
  const navigate = useNavigation<StackNavigationProp<NavigateProps>>();
  const { typeScreen } = route.params ? route.params : "createdUser";
  const screens: { [key: string]: JSX.Element } = {
    createdUser: <UserNFTs />,
    likedUser: <LikedNFTs />,
    bidsUser: <Bids />,
  };

  console.log(user);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.primary} />
      <UserInfo userInfo={user} />
      <View
        style={{
          flex: 2.5,
          alignItems: "center",
          marginTop: SIZES.medium,
        }}
      >
        {screens[typeScreen] || screens["createdUser"]}
      </View>
    </View>
  );
};

export default User;
