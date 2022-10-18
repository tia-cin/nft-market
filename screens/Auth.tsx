import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import { RectButton, IconButton, Inputs, CircleButton } from "../components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Auth = () => {
  const navigation =
    useNavigation<StackNavigationProp<{ Auth: any; Register: any }>>();
  const [username, setUsername] = React.useState<string>("Username");
  const [password, setPassword] = React.useState<string>("Password");
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={assets.nft01} style={{ flex: 1 }}>
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          props={{
            left: 15,
            marginVertical: SIZES.extraLarge,
          }}
        />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge * 2,
              fontWeight: "bold",
            }}
          >
            Sign In
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            borderTopStartRadius: SIZES.extraLarge,
            borderTopEndRadius: SIZES.extraLarge,
            backgroundColor: COLORS.white,
            justifyContent: "space-evenly",
            paddingHorizontal: SIZES.font,
            paddingTop: SIZES.small,
          }}
        >
          <View style={{ flex: 1, justifyContent: "space-around" }}>
            <Inputs value={username} onChange={setUsername} />
            <Inputs value={password} onChange={setPassword} />
            <TouchableWithoutFeedback>
              <Text
                style={{
                  fontSize: SIZES.small,
                  textAlign: "right",
                  paddingVertical: SIZES.small / 2,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableWithoutFeedback>
            <RectButton text="Sign In" />
          </View>
          <View style={{ flex: 1, justifyContent: "space-around" }}>
            <IconButton
              text="Continue with Google"
              icon={assets.google}
              props={{ backgroundColor: COLORS.light }}
            />
            <IconButton
              text="Continue with Facebook"
              icon={assets.facebook}
              props={{ backgroundColor: COLORS.light }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Auth;
