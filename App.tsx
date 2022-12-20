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
import { NavigateProps } from "./types";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/Store";
import React from "react";
import { getCurrentNFTs } from "./redux/Actions";
import { BottomBar } from "./components";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator<NavigateProps>();

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "transparent" },
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
      {/* <BottomBar /> */}
    </Provider>
  );
};

const Navigation = () => (
  <NavigationContainer theme={theme}>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Landing"
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="CreateNFT" component={CreateNFT} />
      <Stack.Screen name="AddBid" component={AddBid} />
    </Stack.Navigator>
  </NavigationContainer>
);

const NavigationTest = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch<any>(getCurrentNFTs());
  }, [dispatch]);

  const mainScreens = () => (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Landing"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="CreateNFT" component={CreateNFT} />
      <Stack.Screen name="AddBid" component={AddBid} />
    </Stack.Navigator>
  );

  const bottomScreens = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );

  return (
    <View>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Tab.Screen name="Landing" component={Landing} />
          <Tab.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
