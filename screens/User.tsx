import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { CircleButton, NFTCard } from "../components";
import { userNFT } from "../constants/dummy";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigateProps } from "../types";

const User = () => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          flex: 0.5,
          margin: SIZES.medium,
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <CircleButton imgUrl={assets.left} />
        <CircleButton
          imgUrl={assets.options}
          handlePress={() => navigation.navigate("Configuration")}
        />
      </View>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
            <CircleButton imgUrl={assets.nft} handlePress={() => setShow(false)}/>
            <CircleButton imgUrl={assets.heart} handlePress={() => setShow(true)}/>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
        }}
      >
        {show ? (
          <FlatList
            style={{ width: 400 }}
            data={userNFT.filter((nft) => nft.like)}
            renderItem={({ item }) => <NFTCard data={item} />}
          />
        ) : (
          <FlatList
            style={{ width: 400 }}
            data={userNFT}
            renderItem={({ item }) => <NFTCard data={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default User;
