import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  Home,
  Landing,
  Auth,
  User,
  Details,
  CreateNFT,
  AddBid,
} from "./screens";
import { NavigateLandingProps, NavigateMainProps } from "./types";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/Store";
import React from "react";
import { getCurrentNFTs } from "./redux/Actions";
import { BottomBar } from "./components";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const StackLanding = createStackNavigator<NavigateLandingProps>();
const StackMain = createStackNavigator<NavigateMainProps>();

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "transparent" },
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <LandingNavigation />
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

const LandingNavigation = () => (
  <StackLanding.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Landing"
  >
    <StackLanding.Screen name="Landing" component={Landing} />
    <StackLanding.Screen name="Auth" component={Auth} />
  </StackLanding.Navigator>
);

const MainNavigation = () => (
  <>
    <StackMain.Navigator>
      <StackMain.Screen name="Home" component={Home} />
      <StackMain.Screen name="Details" component={Details} />
      <StackMain.Screen name="CreateNFT" component={CreateNFT} />
      <StackMain.Screen name="AddBid" component={AddBid} />
      <StackMain.Screen name="User" component={User} />
    </StackMain.Navigator>
    <BottomBar />
  </>
);

export default App;
