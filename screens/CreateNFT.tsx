import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { FocusStatusBar, Inputs } from "../components";
import { COLORS, SIZES } from "../constants";

const CreateNFT = () => {
  const [nftName, setNftName] = React.useState<string>("Name");
  const [nftPrice, setNftPrice] = React.useState<string>("Price");
  const [nftDesc, setNftDesc] = React.useState<string>("Description");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.primary} />
      <Text
        style={{
          color: COLORS.white,
          fontSize: SIZES.extraLarge,
          fontWeight: "500",
          margin: SIZES.base,
        }}
      >
        Create your NFT
      </Text>
      <Text
        style={{
          color: COLORS.white,
          fontSize: SIZES.font,
          marginHorizontal: SIZES.base,
          textAlign: "justify",
        }}
      >
        Share your NFTs on the market by filling these information, make your
        products attractive to the audience
      </Text>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Inputs value={nftName} onChange={setNftName} />
        <Inputs value={nftPrice} numeric onChange={setNftPrice} />
        <Inputs value={nftDesc} onChange={setNftDesc} />
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
};

export default CreateNFT;
