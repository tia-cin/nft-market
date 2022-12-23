import { View, Text, Image } from "react-native";
import React from "react";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { EthPriceProps, ImageCmpProps, NFTTitleProps } from "../types";

export const NFTTitle: React.FC<NFTTitleProps> = ({
  title,
  subtitle,
  titleSize,
  subtitleSize,
}) => {
  return (
    <View>
      <Text style={{ fontSize: titleSize, color: COLORS.primary }}>
        {title}
      </Text>
      <Text style={{ fontSize: subtitleSize, color: COLORS.primary }}>
        {subtitle}
      </Text>
    </View>
  );
};

export const EthPrice: React.FC<EthPriceProps> = ({ price }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: SIZES.base * 2,
        padding: 5,
      }}
    >
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{
          borderRadius: SIZES.base,
          width: 20,
          height: 20,
          marginRight: 2,
        }}
      />
      <Text
        style={{
          fontSize: SIZES.large,
          color: COLORS.black,
          fontWeight: "500",
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export const ImageCmp: React.FC<ImageCmpProps> = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map((item, i) => (
        <ImageCmp imgUrl={item} index={i} key={i} />
      ))}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
        borderRadius: SIZES.font,
      }}
    >
      <Text style={{ fontSize: SIZES.small, color: COLORS.primary }}>
        Ending in
      </Text>
      <Text style={{ fontSize: SIZES.medium, color: COLORS.primary }}>
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
