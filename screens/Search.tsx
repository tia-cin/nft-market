import { View, SafeAreaView, FlatList, Image, Text } from "react-native";
import React, { useState } from "react";
import { assets, COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NFTCard, FocusStatusBar, RectButton, Header } from "../components";
import { NFTDataType, NavigateProps } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { getCurrentNFTs } from "../redux/Actions";

const Search = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>();
  const { currentNFTs } = useSelector((state: RootState) => state);
  const [search, setSearch] = useState<NFTDataType[]>(currentNFTs);

  const onSearch = (input: string) => {
    if (!input.length) return setSearch(currentNFTs);

    const filtered = currentNFTs.filter((item: NFTDataType) =>
      item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );

    if (filtered.length) {
      setSearch(filtered);
    } else {
      setSearch(currentNFTs);
    }
  };

  React.useEffect(() => {
    dispatch<any>(getCurrentNFTs());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{ flex: 1, zIndex: 0 }}>
        <FlatList
          data={search}
          ListEmptyComponent={
            <View style={{ alignItems: "center", marginTop: SIZES.extraLarge }}>
              <Image
                source={assets.loadingholo}
                style={{ width: 250, height: 250 }}
              />
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.extraLarge,
                  fontWeight: "500",
                  marginBottom: SIZES.medium,
                }}
              >
                Loading
              </Text>
              <RectButton
                text="Try Again"
                props={{
                  backgroundColor: COLORS.secondary,
                  paddingHorizontal: SIZES.extraLarge,
                }}
                handlePress={() => setSearch(currentNFTs)}
              />
            </View>
          }
          renderItem={({ item }) => (
            <NFTCard navigation={navigation} data={item} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Header menu onSearch={onSearch} text="Search" />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
