import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { FocusStatusBar, Header, RectButton } from "../components";
import { assets, COLORS, SIZES } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { userInfo } from "../constants/dummy";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigateProps } from "../types";

const Menu = () => {
  const navigate = useNavigation<StackNavigationProp<NavigateProps>>();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.primary, flex: 1 }}>
      <FocusStatusBar background={COLORS.primary} />
      <Header text="Menu" />
      <View
        style={{
          backgroundColor: COLORS.black,
          borderRadius: SIZES.medium,
          margin: SIZES.base,
          borderColor: COLORS.gray,
          borderWidth: 1.5,
          padding: SIZES.medium,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Image source={userInfo.picture} />
            <Image
              source={assets.badge}
              style={{
                position: "absolute",
                width: 25,
                height: 25,
                bottom: 0,
                right: 0,
              }}
            />
          </View>
          <View style={{ marginBottom: SIZES.large, marginRight: SIZES.large }}>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: "600",
                fontSize: SIZES.extraLarge,
              }}
            >
              {userInfo.username}
            </Text>
            <Text style={{ color: COLORS.gray, fontSize: SIZES.small }}>
              {userInfo.email}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.light,
              padding: SIZES.small,
              borderRadius: SIZES.base,
            }}
          >
            <Text style={{ fontSize: SIZES.medium }}>18 ETH</Text>
            <Text>$1279,34</Text>
          </View>
        </View>
        <RectButton
          text="Open User Settings"
          handlePress={() => navigate.navigate("UserSettings")}
          props={{ backgroundColor: COLORS.blue, marginTop: SIZES.medium }}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: COLORS.light,
            borderBottomWidth: 0.5,
            padding: SIZES.medium,
          }}
        >
          <Ionicons name="lock-closed-outline" size={40} color={COLORS.white} />
          <Text
            style={{
              marginLeft: SIZES.medium,
              color: COLORS.white,
              fontSize: SIZES.medium,
            }}
          >
            My item
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: COLORS.light,
            borderBottomWidth: 0.5,
            padding: SIZES.medium,
          }}
        >
          <Ionicons name="pencil-outline" size={40} color={COLORS.white} />
          <Text
            style={{
              marginLeft: SIZES.medium,
              color: COLORS.white,
              fontSize: SIZES.medium,
            }}
          >
            Edit profile
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: SIZES.medium,
          }}
        >
          <Ionicons name="card-outline" size={40} color={COLORS.white} />
          <Text
            style={{
              marginLeft: SIZES.medium,
              color: COLORS.white,
              fontSize: SIZES.medium,
            }}
          >
            Manage funds
          </Text>
        </View>
      </View>
      <RectButton
        text="Log Out"
        handlePress={() => navigate.navigate("Landing")}
        props={{
          bottom: 0,
          position: "absolute",
          left: 0,
          right: 0,
          borderColor: COLORS.light,
          borderWidth: 1.5,
          margin: SIZES.medium,
        }}
      />
    </SafeAreaView>
  );
};

export default Menu;
