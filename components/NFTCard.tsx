import { View, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import {
  CircleButton,
  SubInfo,
  NFTTitle,
  RectButton,
  EthPrice,
} from "../components";
import { NFTDataType } from "../types";

const NFTCard: React.FC<{ data: NFTDataType; navigation?: any }> = ({
  data,
  navigation,
}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          imgUrl={assets.heart}
          props={{
            right: 10,
            top: -240,
          }}
          handlePress={() => {}}
        />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            props={{ minWidth: 120, fontSize: SIZES.font }}
            handlePress={() => navigation.navigate("Details", { data })}
            text="Place a bid"
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard