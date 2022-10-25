import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Home, Landing, Auth, User, Details } from "./screens";
import { NavigateProps } from "./types";

const Stack = createStackNavigator<NavigateProps>();

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "transparent" },
};

const App = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
