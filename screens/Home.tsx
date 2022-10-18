import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusStatusBar, BottomBar } from "../components";

const Home = () => {
  const [search, setSearch] = useState<any>(NFTData);

  const onSearch = (input: string) => {
    if (!input.length) return setSearch(NFTData);

    const filtered = NFTData.filter((item) =>
      item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    if (filtered.length) {
      setSearch(filtered);
    } else {
      setSearch(NFTData);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={search}
            renderItem={({ item }) => <NFTCard data={item} />}
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
