import { View, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import React from "react";
import { COLORS, SIZES, assets } from "../constants";
import { FocusStatusBar, RectButton } from "../components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Landing = () => {
  const navigation =
    useNavigation<StackNavigationProp<{ Auth: any; Register: any }>>();
  
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.primary,
        flex: 1,
      }}
    >
      <ImageBackground
        source={assets.nft01}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <FocusStatusBar background={COLORS.primary} />
        <View style={{ marginHorizontal: SIZES.small }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge * 2,
              fontWeight: "bold",
            }}
          >
            Explore creative masterpieces of NFT
          </Text>
          <Text style={{ color: COLORS.white, fontSize: SIZES.large }}>
            Amazing creations are waiting for you
          </Text>
        </View>
        <View>
          <RectButton
            text="Sign In"
            props={{
              backgroundColor: COLORS.primary,
              width: 350,
              marginBottom: SIZES.font,
            }}
            handlePress={() => navigation.navigate("Auth", { logIn: false })}
          />
          <RectButton
            text="Log In"
            props={{
              backgroundColor: COLORS.primary,
              width: 350,
              marginBottom: SIZES.font,
              fontWeight: SIZES.extraLarge
            }}
            handlePress={() => navigation.navigate("Auth", { logIn: true })}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Landing;
