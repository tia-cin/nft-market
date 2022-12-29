import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { FocusStatusBar, Header, Inputs, RectButton } from "../components";
import { COLORS, SIZES } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

const UserSettings = () => {
  const { user } = useSelector((state: RootState) => state);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.primary} />
      <Header text="Edit profile" />
      <View
        style={{
          backgroundColor: COLORS.secondary,
          borderTopStartRadius: SIZES.extraLarge,
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <View style={{ flexDirection: "row", marginVertical: SIZES.medium }}>
          <View>
            <Image source={user.picture} style={{ width: 100, height: 100 }} />
            <Ionicons
              size={50}
              color={COLORS.white}
              name="pencil-outline"
              style={{
                position: "absolute",
                top: 20,
                left: 25,
              }}
            />
          </View>
          <View style={{ width: 300, paddingHorizontal: SIZES.medium }}>
            <Text
              style={{
                color: COLORS.light,
                fontSize: SIZES.medium,
                paddingBottom: SIZES.base,
              }}
            >
              Please choose an image of at least 800x800px
            </Text>
            <RectButton
              text="Remove"
              props={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: COLORS.white,
              }}
            />
          </View>
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <View style={{ paddingVertical: SIZES.base }}>
            <Text
              style={{
                color: COLORS.light,
                fontWeight: "500",
                marginVertical: SIZES.medium,
              }}
            >
              DISPLAY NAME
            </Text>
            <Inputs value={user.username} onChange={() => {}} />
          </View>
          <View style={{ paddingVertical: SIZES.base }}>
            <Text
              style={{
                color: COLORS.light,
                fontWeight: "500",
                marginVertical: SIZES.medium,
              }}
            >
              EMAIL
            </Text>
            <Inputs value={user.email} onChange={() => {}} />
          </View>
          <View style={{ paddingVertical: SIZES.base }}>
            <Text
              style={{
                color: COLORS.light,
                fontWeight: "500",
                marginVertical: SIZES.medium,
              }}
            >
              BIO
            </Text>
            <Inputs value={user.biography} onChange={() => {}} />
          </View>
        </View>
        <View style={{ marginTop: SIZES.base * 6 }}>
          <RectButton text="Save" props={{ marginVertical: SIZES.base }} />
          <RectButton text="Done" props={{ marginVertical: SIZES.base }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserSettings;
