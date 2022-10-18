import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import { RectButton, IconButton, Inputs, CircleButton } from "../components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Auth = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<{ Auth: any; Register: any; Landing: any; Home: any }>
    >();
  const [username, setUsername] = React.useState<string>("Username");
  const [password, setPassword] = React.useState<string>("Password");
  const [email, setEmail] = React.useState<string>("Email");
  const [createUser, setCreateUser] = React.useState<boolean>(false);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={assets.nft01} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            props={{
              left: 15,
              marginVertical: SIZES.extraLarge,
            }}
          />
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge * 2,
              fontWeight: "bold",
            }}
          >
            {createUser ? "Sign Up" : "Sign In"}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            borderTopStartRadius: SIZES.extraLarge,
            borderTopEndRadius: SIZES.extraLarge,
            backgroundColor: COLORS.white,
            justifyContent: "space-evenly",
            paddingHorizontal: SIZES.font,
            paddingTop: SIZES.small,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
            }}
          >
            {createUser && <Inputs value={username} onChange={setUsername} />}
            <Inputs value={email} onChange={setEmail} />
            <Inputs value={password} onChange={setPassword} />
            {!createUser && (
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
            )}
            <RectButton
              text={createUser ? "Sign Up" : "Sign In"}
              handlePress={() => navigation.navigate("Home")}
            />
          </View>
          <View
            style={{
              backgroundColor: COLORS.gray,
              width: "100%",
              height: 3,
              marginTop: SIZES.font,
            }}
          />
          <View style={{ flex: 1, justifyContent: "space-evenly" }}>
            <IconButton
              text="Continue with Google"
              icon={assets.google}
              props={{ backgroundColor: COLORS.light }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text>{createUser ? "Already a user? " : "New here? "}</Text>
              <TouchableWithoutFeedback
                onPress={() => setCreateUser((prev) => !prev)}
              >
                <Text style={{ fontWeight: "bold" }}>
                  {createUser ? "Sign In" : "Sign Up"}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Auth;
