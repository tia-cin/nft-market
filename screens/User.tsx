import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { assets, COLORS, SIZES } from "../constants";
import { CircleButton, FocusStatusBar, NFTCard, UserInfo } from "../components";
import { NFTData, userNFT } from "../constants/dummy";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigateProps, UserNavigationTypes } from "../types";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const Stack = createStackNavigator<UserNavigationTypes>();

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "transparent" },
};

const User = () => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
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
        <CircleButton imgUrl={assets.left} />
        <TouchableOpacity
          style={{ right: SIZES.large * 2 }}
          onPress={() => navigation.navigate("CreateNFT")}
        >
          <Text
            style={{
              backgroundColor: COLORS.white,
              padding: SIZES.small - 4,
              borderRadius: SIZES.small,
              position: "absolute",
            }}
          >
            Create NFT
          </Text>
        </TouchableOpacity>
      </View>
      <UserInfo />
      <View
        style={{
          flex: 2,
          alignItems: "center",
        }}
      >
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="UserNFTs">
            <Stack.Screen name="UserNFTs" component={} />
            <Stack.Screen name="LikedNFTs" component={} />
            <Stack.Screen name="ShopCart" component={} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

export default User;
