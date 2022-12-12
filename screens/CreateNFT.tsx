import React from "react";
import { Text, View, SafeAreaView, Alert } from "react-native";
import { FocusStatusBar, Inputs, RectButton } from "../components";
import { COLORS, NFTData, SIZES } from "../constants";
import { DocumentDirectoryPath, writeFile } from "react-native-fs";

const CreateNFT = () => {
  const [nftName, setNftName] = React.useState<string>("Name");
  const [nftPrice, setNftPrice] = React.useState<string>("Price");
  const [nftDesc, setNftDesc] = React.useState<string>("Description");
  const [nftFile, setNftFile] = React.useState<string>("NFT");

  // const saveFile = async () => {
  //   const path = `${DocumentDirectoryPath}/${Date.now()}.txt`;

  //   try {
  //     await writeFile(path, nftFile, "utf8");
  //     Alert.alert("File Saved", null, [{ text: "Ok" }]);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: SIZES.base,
        backgroundColor: COLORS.primary,
      }}
    >
      <FocusStatusBar background={COLORS.primary} />
      <View style={{}}>
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
      </View>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Inputs value={nftName} onChange={setNftName} />
        <Inputs value={nftPrice} onChange={setNftPrice} />
        <Inputs value={nftDesc} onChange={setNftDesc} />
        <Inputs value={nftFile} onChange={setNftFile} />
        <RectButton
          text="Submit"
          props={{ backgroundColor: COLORS.secondary }}
          handlePress={() => {
            // saveFile();
            NFTData.push({
              id: "NFT-20",
              name: nftName,
              creator: "Full Name",
              price: Number(nftPrice),
              description: nftDesc,
              image: "",
              bids: [],
              like: false,
            });
          }}
        />
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
};

export default CreateNFT;