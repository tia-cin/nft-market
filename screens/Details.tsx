import { Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import {
  FocusStatusBar,
  DetailsBid,
  DetailsHeader,
  SubInfo,
  DetailsDesc,
  RectButton,
} from "../components";
import { COLORS, SIZES, SHADOWS } from "../constants";

const Details = ({ route, navigation }: any) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        props={{
          translucent: true,
          barStyle: "dark-content",
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
          props={{
            minWidth: 170,
            fontSize: SIZES.large,
            ...SHADOWS.dark,
          }}
          text="Place a bid"
        />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
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
