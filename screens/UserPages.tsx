import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { userInfo } from "../constants/dummy";
import { StackNavigationProp } from "@react-navigation/stack";
import { NFTCard, DetailsBid } from "../components";
import { NavigateProps } from "../types";
import { COLORS, SIZES } from "../constants";
import { View } from "react-native";

export const UserNFTs = () => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();

  return (
    <FlatList
      data={userInfo.createdNFTs}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        width: 400,
      }}
      renderItem={({ item }) => <NFTCard navigation={navigation} data={item} />}
    />
  );
};

export const LikedNFTs = () => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();

  return (
    <FlatList
      data={userInfo.likedNFTs}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        width: 400,
      }}
      renderItem={({ item }) => <NFTCard navigation={navigation} data={item} />}
    />
  );
};

export const Bids = () => (
  <FlatList
    data={userInfo.bids}
    showsVerticalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    contentContainerStyle={{
      width: 400,
    }}
    renderItem={({ item }) => (
      <View
        style={{
          backgroundColor: COLORS.white,
          margin: SIZES.base,
          borderRadius: SIZES.base,
        }}
      >
        <DetailsBid bid={item} />
      </View>
    )}
  />
);
