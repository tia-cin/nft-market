import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { FocusStatusBar } from "../components";
import { COLORS } from "../constants";

const Notification = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{ flex: 1, zIndex: 0 }}></View>
    </SafeAreaView>
  );
};

export default Notification;
