import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { FocusStatusBar, Inputs } from "../components";
import { COLORS, SIZES } from "../constants";

const CreateNFT = () => {
  const [formInputs, setFormInputs] = React.useState({
    id: "ID",
    name: "Name",
    creator: "Full Name",
    price: "Price",
    description: "Description",
    image: "Image",
    bids: [],
    like: false,
  });
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
        <Inputs value={formInputs.id} numeric onChange={() => {}} />
        <Inputs value={formInputs.name} onChange={() => {}} />
        <Inputs value={formInputs.price} numeric onChange={() => {}} />
        <Inputs value={formInputs.description} onChange={() => {}} />
        <Inputs value={formInputs.image} onChange={() => {}} />
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
};

export default CreateNFT;
