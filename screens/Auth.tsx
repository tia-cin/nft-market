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
import { NavigateProps } from "../types";
import { useDispatch } from "react-redux";
import { getUserAction } from "../redux/Actions";

const Auth = ({ route, navigation }: any) => {
  const dispatch = useDispatch();
  const { logIn } = route.params;
  const navigate = useNavigation<StackNavigationProp<NavigateProps>>();
  const [username, setUsername] = React.useState<string>("Username");
  const [password, setPassword] = React.useState<string>("Password");
  const [email, setEmail] = React.useState<string>("Email");
  const [createUser, setCreateUser] = React.useState<boolean>(logIn);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={assets.nft01} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigate.goBack()}
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
            {createUser ? "Sign In" : "Log In"}
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
              handlePress={() => {
                dispatch<any>(
                  getUserAction({
                    username,
                    email,
                    biography: "",
                    createdNFTs: [],
                    likedNFTs: [],
                    picture: "",
                    shopCart: [],
                  })
                );
                navigation.navigate("Home");
              }}
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
            <IconButton
              text="Continue with Facebook"
              icon={assets.facebook}
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
                  {createUser ? "Sign In" : "Register"}
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
