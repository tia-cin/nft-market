import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { FocusStatusBar, Header, Inputs, RectButton } from "../components";
import { COLORS, SIZES } from "../constants";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { createNFTAction } from "../redux/Actions";
import { RootState } from "../redux/Store";

const CreateNFT: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);
  const [nftName, setNftName] = React.useState<string>("Name");
  const [nftPrice, setNftPrice] = React.useState<string>("Price");
  const [nftDesc, setNftDesc] = React.useState<string>("Description");
  const [nftFile, setNftFile] = React.useState<any>();
  const [hasGalleryPermition, setHasGalleryPermition] =
    React.useState<boolean>();

<<<<<<< HEAD
=======
  const pickerImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!res.cancelled) {
      setNftFile(res.uri);
    }
  };

  React.useEffect(() => {
    async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermition(galleryStatus.status === "granted");
    };
  }, []);

>>>>>>> develop
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
          handlePress={() =>
            dispatch<any>(
              createNFTAction({
                id: `NFT-${Math.floor(Math.random() * 500)}`,
                bids: [],
                creator: user.username,
                description: nftDesc,
                image: nftFile,
                like: false,
                name: nftName,
                price: Number(nftPrice),
              })
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateNFT;
