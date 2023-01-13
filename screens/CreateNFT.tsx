import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { FocusStatusBar, Header, Inputs, RectButton } from "../components";
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
      setNftFile(res.uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        height: "100%",
        padding: SIZES.base,
        backgroundColor: COLORS.primary,
      }}
    >
      <FocusStatusBar background={COLORS.primary} />
      <Header text="Create your NFT" menu />
      <View
        style={{
          paddingHorizontal: SIZES.medium,
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ marginVertical: SIZES.base }}>
          <Inputs value={nftName} onChange={setNftName} />
        </View>
        <View style={{ marginVertical: SIZES.base }}>
          <Inputs value={nftPrice} onChange={setNftPrice} />
        </View>
        <View style={{ marginVertical: SIZES.base }}>
          <Inputs
            value={nftDesc}
            onChange={setNftDesc}
            props={{ multiline: true, numberOfLines: 5 }}
          />
        </View>
        <View
          style={{
            marginVertical: SIZES.base,
          }}
        >
          <View style={{}}>
            {nftFile ? (
              <Image
                source={{ uri: nftFile }}
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: SIZES.base,
                  alignSelf: "center",
                }}
              />
            ) : (
              <TouchableOpacity
                onPress={() => pickerImage()}
                style={{
                  borderRadius: SIZES.font,
                  backgroundColor: COLORS.light,
                  paddingVertical: SIZES.extraLarge * 2,
                }}
              >
                <Text
                  style={{
                    padding: SIZES.font,
                  }}
                >
                  Pick NFT
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <View>
        <RectButton
          text="Submit"
          props={{
            backgroundColor: COLORS.secondary,
            margin: SIZES.medium,
          }}
          handlePress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateNFT;
