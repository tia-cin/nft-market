import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  Button,
} from "react-native";
import {
  CircleButton,
  FocusStatusBar,
  Header,
  Inputs,
  RectButton,
} from "../components";
import { assets, COLORS, NFTData, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigateProps } from "../types";
import * as ImagePicker from "expo-image-picker";

const CreateNFT: React.FC = () => {
  const navigate = useNavigation<StackNavigationProp<NavigateProps>>();
  const [nftName, setNftName] = React.useState<string>("Name");
  const [nftPrice, setNftPrice] = React.useState<string>("Price");
  const [nftDesc, setNftDesc] = React.useState<string>("Description");
  const [nftFile, setNftFile] = React.useState<any>();

  const [hasGalleryPermition, setHasGalleryPermition] =
    React.useState<boolean>();
  const [image, setImage] = React.useState<any>("");

  React.useEffect(() => {
    async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermition(galleryStatus.status === "granted");
    };
  }, []);

  const pickerImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(res);

    if (!res.cancelled) {
      setImage(res.uri);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => pickerImage()}>
        <Text>Pick Image</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );

  // return (
  //   <SafeAreaView
  //     style={{
  //       flex: 1,
  //       padding: SIZES.base,
  //       backgroundColor: COLORS.primary,
  //     }}
  //   >
  //     <FocusStatusBar background={COLORS.primary} />
  //     <Header text="Create your NFT" menu />
  //     <View
  //       style={{
  //         flex: 5,
  //         paddingHorizontal: SIZES.medium,
  //         justifyContent: "space-evenly",
  //       }}
  //     >
  //       <Inputs value={nftName} onChange={setNftName} />
  //       <Inputs value={nftPrice} onChange={setNftPrice} />
  //       <Inputs
  //         value={nftDesc}
  //         onChange={setNftDesc}
  //         props={{ multiline: true, numberOfLines: 5 }}
  //       />

  //       {/* <Inputs
  //         value={nftFile}
  //         onChange={setNftFile}
  //         props={{ multiline: true, numberOfLines: 5 }}
  //       /> */}
  //       {/* <Gallery /> */}

  //     </View>
  //     <View style={{ flex: 1.5 }}>
  //       <RectButton
  //         text="Submit"
  //         props={{
  //           backgroundColor: COLORS.secondary,
  //           marginHorizontal: SIZES.medium,
  //         }}
  //         handlePress={() => {
  //           // saveFile();
  //           NFTData.push({
  //             id: "NFT-20",
  //             name: nftName,
  //             creator: "Full Name",
  //             price: Number(nftPrice),
  //             description: nftDesc,
  //             image: "",
  //             bids: [],
  //             like: false,
  //           });
  //         }}
  //       />
  //     </View>
  //   </SafeAreaView>
  // );
};

export default CreateNFT;
