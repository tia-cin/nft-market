import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { FocusStatusBar, Header, Inputs, RectButton } from "../components";
import { assets, COLORS, SIZES } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { createNFTAction, editUserAction } from "../redux/Actions";
import { RootState } from "../redux/Store";

const UserSettings = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);
  const [userUsername, setUserUsername] = React.useState(user.username);
  const [userPicture, setUserPicture] = React.useState(user.picture);
  const [userEmail, setUserEmail] = React.useState(user.email);
  const [userBiography, setUserBiography] = React.useState(user.biography);

  const pickerImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(res);

    if (!res.cancelled) {
      setUserPicture({ uri: res.uri });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.primary} />
      <Header text="Edit profile" />
      <View
        style={{
          backgroundColor: COLORS.secondary,
          borderTopStartRadius: SIZES.extraLarge,
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <View style={{ flexDirection: "row", marginVertical: SIZES.medium }}>
          <View>
            <Image
              source={userPicture}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
            <Ionicons
              size={50}
              color={COLORS.white}
              name="pencil-outline"
              style={{
                position: "absolute",
                top: 20,
                left: 25,
              }}
              onPress={pickerImage}
            />
          </View>
          <View style={{ width: 300, paddingHorizontal: SIZES.medium }}>
            <Text
              style={{
                color: COLORS.light,
                fontSize: SIZES.medium,
                paddingBottom: SIZES.base,
              }}
            >
              Please choose an image of at least 800x800px
            </Text>
            <RectButton
              text="Remove"
              props={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: COLORS.white,
              }}
              handlePress={() => setUserPicture(assets.nouser)}
            />
          </View>
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <View style={{ paddingVertical: SIZES.base }}>
            <Text
              style={{
                color: COLORS.light,
                fontWeight: "500",
                marginVertical: SIZES.medium,
              }}
            >
              DISPLAY NAME
            </Text>
            <Inputs value={userUsername} onChange={setUserUsername} />
          </View>
          <View style={{ paddingVertical: SIZES.base }}>
            <Text
              style={{
                color: COLORS.light,
                fontWeight: "500",
                marginVertical: SIZES.medium,
              }}
            >
              EMAIL
            </Text>
            <Inputs value={userEmail} onChange={setUserEmail} />
          </View>
          <View style={{ paddingVertical: SIZES.base }}>
            <Text
              style={{
                color: COLORS.light,
                fontWeight: "500",
                marginVertical: SIZES.medium,
              }}
            >
              BIO
            </Text>
            <Inputs
              value={userBiography}
              props={{ multiline: true, numberOfLines: 5 }}
              onChange={setUserBiography}
            />
          </View>
        </View>
        <View style={{ marginTop: SIZES.base * 6 }}>
          <RectButton
            text="Done"
            props={{ marginVertical: SIZES.base }}
            handlePress={() =>
              dispatch<any>(
                editUserAction({
                  username: userUsername,
                  biography: userBiography,
                  email: userEmail,
                  picture: userPicture,
                })
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserSettings;
