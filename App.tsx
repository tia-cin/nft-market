import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  Home,
  Landing,
  Auth,
  User,
  CreateNFT,
  Trendings,
  Notification,
  Details,
  AddBid,
} from "./screens";
import { Provider } from "react-redux";
import store from "./redux/Store";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "transparent" },
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Landing"
        >
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="AddBid" component={AddBid} />
          <Stack.Screen name="Home" component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const MainNavigation = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Trendings" component={Trendings} />
    <Tab.Screen name="CreateNFT" component={CreateNFT} />
    <Tab.Screen name="Notification" component={Notification} />
    <Tab.Screen name="User" component={User} />
  </Tab.Navigator>
);

const BottomNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="CreateNFT" component={CreateNFT} />
    <Tab.Screen name="User" component={User} />
  </Tab.Navigator>
);

export default App;
