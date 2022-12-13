import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import { CircleButton } from "./Buttons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserNavigationTypes } from "../types";

export const UserInfo = () => {
  const navigation = useNavigation<StackNavigationProp<UserNavigationTypes>>();
  return (
    <View style={{ flex: 2, alignItems: "center" }}>
      <View>
        <Image source={assets.person01} />
        <Image
          source={assets.badge}
          resizeMode="contain"
          style={{
            position: "absolute",
            width: 25,
            height: 25,
            bottom: 0,
            right: 0,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.extraLarge + 2,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Full Name
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: COLORS.blue,
              paddingVertical: SIZES.base / 2,
              paddingHorizontal: SIZES.base,
            }}
          >
            user@email.com
          </Text>
          <Text
            style={{
              backgroundColor: COLORS.gray,
              borderRadius: SIZES.base,
              paddingVertical: SIZES.base / 2,
              paddingHorizontal: SIZES.base,
              color: COLORS.white,
            }}
          >
            @username
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: COLORS.gray,
            paddingHorizontal: SIZES.base,
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <View
          style={{
            marginTop: SIZES.medium,
            marginRight: SIZES.extraLarge,
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <CircleButton
            imgUrl={assets.nft}
            handlePress={() => navigation.navigate("UserNFTs")}
          />
          <CircleButton
            imgUrl={assets.heart}
            handlePress={() => navigation.navigate("LikedNFTs")}
          />
          <CircleButton
            imgUrl={assets.addtocart}
            handlePress={() => navigation.navigate("ShopCart")}
          />
        </View>
      </View>
    </View>
  );
};
