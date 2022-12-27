import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { FocusStatusBar, Header, Inputs, RectButton } from "../components";
import { assets, COLORS } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { userInfo } from "../constants/dummy";

const UserSettings = () => {
  return (
    <SafeAreaView>
      <FocusStatusBar background={COLORS.primary} />
      <Header text="Edit profile" />
      <View>
        <View>
          <View>
            <Image source={assets.person01} />
            <Ionicons name="pencil-outline" />
          </View>
          <View>
            <Text>Please choose an image of at least 800x800px</Text>
            <RectButton text="Remove" />
          </View>
        </View>
        <View>
          <Inputs value={userInfo.username} onChange={() => {}} />
          <Inputs value={userInfo.email} onChange={() => {}} />
          <Inputs value={userInfo.biography} onChange={() => {}} />
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
