import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import { RectButton, IconButton } from "../components";

const Auth = () => {
  const [username, setUsername] = React.useState<string>("Username");
  const [password, setPassword] = React.useState<string>("Password");
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={assets.nft01} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>Sign In</Text>
        </View>
        <View
          style={{
            flex: 1,
            borderTopStartRadius: SIZES.extraLarge,
            borderTopEndRadius: SIZES.extraLarge,
            backgroundColor: COLORS.white,
          }}
        >
          <View>
            <TextInput value={username} />
            <TextInput value={password} />
            <TouchableWithoutFeedback>
              <Text>Forgot Password?</Text>
            </TouchableWithoutFeedback>
            <RectButton text="Sign In" />
          </View>
          <View>
            <IconButton text="Continue with Google" icon={assets.google} />
            <IconButton text="Continue with Facebook" icon={assets.facebook} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Auth;
