import { View, Text, Image, StatusBar } from "react-native";
import React, { useState } from "react";
import { CircleButton, EthPrice, NFTTitle } from "../components";
import { assets, COLORS, SIZES } from "../constants";

export const DetailsDesc: React.FC<{ data: any }> = ({ data }) => {
  const [text, setText] = useState<string>(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{ fontSize: SIZES.font, color: COLORS.primary }}>
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              color: COLORS.primary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    </>
  );
};

export const DetailsBid: React.FC<{ bid: any }> = ({ bid }) => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export const DetailsHeader: React.FC<{
  data: any;
  navigation: any;
}> = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        props={{
          left: 15,
          top: StatusBar.currentHeight && StatusBar.currentHeight + 10,
        }}
      />
      <CircleButton
        imgUrl={assets.heart}
        handlePress={() => navigation.goBack()}
        props={{
          right: 15,
          top: StatusBar.currentHeight && StatusBar.currentHeight + 10,
        }}
      />
    </View>
  );
};
