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
  Header,
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
      <Header text="Create your NFT" menu />
      <View
        style={{
          flex: 5,
          paddingHorizontal: SIZES.medium,
          justifyContent: "space-evenly",
        }}
      >
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
          props={{
            backgroundColor: COLORS.secondary,
            marginHorizontal: SIZES.medium,
          }}
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
