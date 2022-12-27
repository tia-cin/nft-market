import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { FocusStatusBar, Header, Inputs, RectButton } from "../components";
import { assets, COLORS, SIZES } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { userInfo } from "../constants/dummy";

const UserSettings = () => {
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
            <Image
              source={assets.person01}
              style={{ width: 100, height: 100 }}
            />
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
        <View style={{ justifyContent: "space-between", flex: 0.5 }}>
          <View>
            <Text>DISPLAY NAME</Text>
            <Inputs value={userInfo.username} onChange={() => {}} />
          </View>
          <View>
            <Text>EMAIL</Text>
            <Inputs value={userInfo.email} onChange={() => {}} />
          </View>
          <View>
            <Text>BIO</Text>
            <Inputs value={userInfo.biography} onChange={() => {}} />
          </View>
        </View>
        <View>
          <RectButton text="Save" />
          <RectButton text="Done" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserSettings;
