import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FocusStatusBar, Header, RectButton } from "../components";
import { assets, COLORS } from "../constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import Ionicons from "@expo/vector-icons/Ionicons";

const Menu = () => {
  const { user } = useSelector((state: RootState) => state);

  return (
    <SafeAreaView>
      <FocusStatusBar background={COLORS.primary} />
      <Header text="Menu" />
      <View>
        <View>
          <Image source={assets.person01} />
          <View>
            <Text>{user.username}</Text>
            <Text>{user.email}</Text>
          </View>
          <View>
            <Text>18 ETH</Text>
            <Text>$1279,34</Text>
          </View>
        </View>
        <RectButton text="Open User Settings" />
      </View>
      <View>
        <View>
          <Ionicons name="lock-closed-outline" />
          <Text>My item</Text>
        </View>
        <View>
          <Ionicons name="pencil-outline" />
          <Text>Edit profile</Text>
        </View>
        <View>
          <Ionicons name="card-outline" />
          <Text>Manage funds</Text>
        </View>
      </View>
      <RectButton text="Log Out" />
    </SafeAreaView>
  );
};

export default Menu;
