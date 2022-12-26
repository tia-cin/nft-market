import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FocusStatusBar, Header, RectButton } from "../components";
import { assets, COLORS, SIZES } from "../constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { userInfo } from "../constants/dummy";

const Menu = () => {
  const { user } = useSelector((state: RootState) => state);

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
          props={{ backgroundColor: COLORS.blue, marginTop: SIZES.medium }}
        />
      </View>
      <View>
        <View>
          <Ionicons name="lock-closed-outline" />
          <Text>My item</Text>
        </View>
        <View>
          <Ionicons name="pencil-outline" />
          <Text>Edit profile</Text>
        </View>
        <View>
          <Ionicons name="card-outline" />
          <Text>Manage funds</Text>
        </View>
      </View>
      <RectButton text="Log Out" />
    </SafeAreaView>
  );
};

export default Menu;
