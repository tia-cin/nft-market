import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { FocusStatusBar, RectButton, NFTCard, Header } from "../components";
import { COLORS, assets, SIZES } from "../constants";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { NFTDataType, NavigateProps } from "../types";
import { getCurrentNFTs } from "../redux/Actions";

const Trendings = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();
  const { currentNFTs } = useSelector((state: RootState) => state);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{ flex: 1, zIndex: 0 }}>
        <FlatList
          data={currentNFTs}
          ListEmptyComponent={
            <View style={{ alignItems: "center", marginTop: SIZES.extraLarge }}>
              <Image
                source={assets.loadingholo}
                style={{ width: 250, height: 250 }}
              />
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.extraLarge,
                  fontWeight: "500",
                  marginBottom: SIZES.medium,
                }}
              >
                Loading
              </Text>
              <RectButton
                text="Try Again"
                props={{
                  backgroundColor: COLORS.secondary,
                  paddingHorizontal: SIZES.extraLarge,
                }}
                handlePress={() => dispatch<any>(getCurrentNFTs())}
              />
            </View>
          }
          renderItem={({ item }) => (
            <NFTCard navigation={navigation} data={item} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Header text="Trendings" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Trendings;
