import { View, Text, Image } from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import { CircleButton } from "../components";

const User = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CircleButton imgUrl={assets.left} />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image source={assets.person01} />
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <View style={{ marginTop: SIZES.medium }}>
            <CircleButton imgUrl={assets.multimedia} />
            <CircleButton imgUrl={assets.heartIcon} />
            <CircleButton imgUrl={assets.boxes} />
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default User;
