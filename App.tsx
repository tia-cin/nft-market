import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  Search,
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
import { COLORS, SIZES } from "./constants";
import Ionicons from "@expo/vector-icons/Ionicons";

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
  <Tab.Navigator
    initialRouteName="Trendings"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: COLORS.white,
      tabBarStyle: {
        height: SIZES.extraLarge * 3,
        backgroundColor: COLORS.primary,
        borderTopColor: COLORS.primary,
      },
    }}
  >
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-sharp" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Trendings"
      component={Trendings}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="CreateNFT"
      component={CreateNFT}
      options={{
        tabBarIcon: ({ size }) => (
          <Ionicons
            name="add-circle-sharp"
            size={size * 2.4}
            color={COLORS.blue}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="notifications" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={User}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default App;
