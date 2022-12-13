import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NFTCard, HomeHeader, FocusStatusBar } from "../components";
import { NFTDataType, NavigateProps } from "../types";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getCurrentNFTs } from "../redux/Actions";
import { RootState } from "../redux/Store";

const Home = () => {
  const dispatch = useDispatch();
  const { currentNFTs } = useSelector((state: RootState) => state);
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();
  const [search, setSearch] = useState<Array<NFTDataType>>(currentNFTs);

  const onSearch = (input: string) => {
    if (!input.length) return setSearch(NFTData);

    const filtered = NFTData.filter((item: NFTDataType) =>
      item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    if (filtered.length) {
      setSearch(filtered);
    } else {
      setSearch(NFTData);
    }
  };

  React.useEffect(() => {
    dispatch<any>(getCurrentNFTs());
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={search}
            renderItem={({ item }) => (
              <NFTCard navigation={navigation} data={item} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={onSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
      {/* <BottomBar /> */}
    </SafeAreaView>
  );
};

export default Home;
