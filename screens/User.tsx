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
import { NavigateProps, UserNavigationTypes } from "../types";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<UserNavigationTypes>();

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
      >
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="UserNFTs"
        >
          <Stack.Screen name="UserNFTs" component={UserNFTs} />
          <Stack.Screen name="LikedNFTs" component={LikedNFTs} />
          <Stack.Screen name="Bids" component={Bids} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

const UserNFTs = () => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();

  return (
    <FlatList
      data={userInfo.createdNFTs}
      renderItem={({ item }) => <NFTCard navigation={navigation} data={item} />}
    />
  );
};

const LikedNFTs = () => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();

  return (
    <FlatList
      data={userInfo.likedNFTs}
      renderItem={({ item }) => <NFTCard navigation={navigation} data={item} />}
    />
  );
};

const Bids = () => (
  <FlatList
    data={userInfo.bids}
    renderItem={({ item }) => <DetailsBid bid={item} />}
  />
);

export default User;
