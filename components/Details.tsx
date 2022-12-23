import { View, Text, Image, StatusBar } from "react-native";
import React, { useState } from "react";
import { CircleButton, EthPrice, NFTTitle } from "../components";
import { assets, COLORS, SIZES } from "../constants";
import { BidType, DetailsDescProps, NFTDataType } from "../types";
import { likeNFTAction } from "../redux/Actions";
import { useDispatch } from "react-redux";

export const DetailsDesc: React.FC<DetailsDescProps> = ({ data }) => {
  const [text, setText] = useState<string>(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState<boolean>(false);

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

            <Text
              style={{
                fontSize: SIZES.font,
                color: COLORS.primary,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export const DetailsBid: React.FC<{ bid: BidType }> = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View>
        <Text
          style={{
            fontSize: SIZES.small,
            color: COLORS.secondary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export const DetailsHeader: React.FC<{
  data: NFTDataType;
  navigation: any;
}> = ({ data, navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        props={{
          left: 15,
          top: StatusBar.currentHeight && StatusBar.currentHeight - 373,
        }}
      />
      <CircleButton
        imgUrl={assets.heart}
        handlePress={() => dispatch<any>(likeNFTAction(data))}
        props={{
          right: 15,
          top: StatusBar.currentHeight && StatusBar.currentHeight - 373,
        }}
      />
    </View>
  );
};
