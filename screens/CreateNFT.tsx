import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  CircleButton,
  FocusStatusBar,
  Inputs,
  RectButton,
} from "../components";
import { assets, COLORS, NFTData, SIZES } from "../constants";
import { DocumentDirectoryPath, writeFile } from "react-native-fs";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigateProps } from "../types";

const CreateNFT = () => {
  const navigate = useNavigation<StackNavigationProp<NavigateProps>>();
  const [nftName, setNftName] = React.useState<string>("Name");
  const [nftPrice, setNftPrice] = React.useState<string>("Price");
  const [nftDesc, setNftDesc] = React.useState<string>("Description");
  const [nftFile, setNftFile] = React.useState<string>("NFT Image");

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
      <View
        style={{
          flex: 0.5,
          margin: SIZES.medium,
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigate.goBack()}
        />
      </View>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{ flex: 1.5 }}>
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
      <View style={{ flex: 5, justifyContent: "space-evenly" }}>
        <Inputs value={nftName} onChange={setNftName} />
        <Inputs value={nftPrice} onChange={setNftPrice} />
        <Inputs
          value={nftDesc}
          onChange={setNftDesc}
          props={{ multiline: true, numberOfLines: 5 }}
        />
        <Inputs
          value={nftFile}
          onChange={setNftFile}
          props={{ multiline: true, numberOfLines: 5 }}
        />
      </View>
      <View style={{ flex: 1.5 }}>
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
    </SafeAreaView>
  );
};

export default CreateNFT;
