import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";
import {
  RectButton,
  SubInfo,
  FocusStatusBar,
  DetailsDesc,
  DetailsBid,
  DetailsHeader,
} from "../components";
import { NavigateProps, NFTDataType } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<NavigateProps, "Details">;

const Details = ({ route, navigation }: Props) => {
  const data: NFTDataType = route.params.data;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        props={{
          barStyle: "dark-content",
          translucent: "transparent",
        }}
        background="transparent"
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton
          props={{ minWidth: 170, fontSize: SIZES.large, ...SHADOWS.dark }}
          handlePress={() => {}}
          text="Place a bid"
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 1 && (
                <Text style={{ fontSize: SIZES.font, color: COLORS.primary }}>
                  Current Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
