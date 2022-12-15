import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { userInfo } from "../constants/dummy";
import { StackNavigationProp } from "@react-navigation/stack";
import { NFTCard, DetailsBid } from "../components";
import { NavigateProps } from "../types";

export const UserNFTs = () => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();

  return (
    <FlatList
      data={userInfo.createdNFTs}
      renderItem={({ item }) => <NFTCard navigation={navigation} data={item} />}
    />
  );
};

export const LikedNFTs = () => {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();

  return (
    <FlatList
      data={userInfo.likedNFTs}
      renderItem={({ item }) => <NFTCard navigation={navigation} data={item} />}
    />
  );
};

export const Bids = () => (
  <FlatList
    data={userInfo.bids}
    renderItem={({ item }) => <DetailsBid bid={item} />}
  />
);
