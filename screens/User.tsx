import { View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { FocusStatusBar, UserInfo } from "../components";
import { Bids, LikedNFTs, UserNFTs } from ".";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

const User = ({ route }: any) => {
  const { user } = useSelector((state: RootState) => state);
  const { typeScreen } = route.params ? route.params : "createdUser";
  const screens: { [key: string]: JSX.Element } = {
    createdUser: <UserNFTs />,
    likedUser: <LikedNFTs />,
    bidsUser: <Bids />,
  };

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
