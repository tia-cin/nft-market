import { View, Text, Image } from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import { CircleButton } from "./Buttons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserType } from "../types";
import { NavigateProps } from "../types";

export const UserInfo: React.FC<{ userInfo: UserType }> = ({ userInfo }) => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();

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
          {userInfo.username}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: COLORS.blue,
              paddingVertical: SIZES.base / 2,
              paddingHorizontal: SIZES.base,
            }}
          >
            {userInfo.email}
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
            {`@${userInfo.username.split(" ").join("").toLocaleLowerCase()}`}
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
          {userInfo.biography}
        </Text>
        <View
          style={{
            marginTop: SIZES.medium,
            marginRight: SIZES.extraLarge,
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <CircleButton imgUrl={assets.nft} />
          <CircleButton imgUrl={assets.heart} />
          <CircleButton imgUrl={assets.eth} />
        </View>
      </View>
    </View>
  );
};
