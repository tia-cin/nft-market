import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React from "react";
import { FocusStatusBar, Header, RectButton } from "../components";
import { assets, COLORS, SIZES } from "../constants";
import { notificationsData } from "../constants/dummy";

const Notification = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{ flex: 1, zIndex: 0 }}>
        <FlatList
          data={notificationsData}
          renderItem={({ item }) => (
            <View
              style={{
                padding: SIZES.medium,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 100,
                  backgroundColor: item.readed ? "transparent" : COLORS.blue,
                }}
              />
              <View style={{ width: 50 }}>
                <Image
                  source={item.notificationImg}
                  style={{ width: 50, height: 50 }}
                />
                {!item.subtitle.includes("ETH") && (
                  <Image
                    source={assets.badge}
                    style={{
                      width: 20,
                      height: 20,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                    }}
                  />
                )}
              </View>
              <View style={{ width: 150 }}>
                <Text style={{ color: COLORS.white, fontWeight: "700" }}>
                  {item.title}
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: SIZES.small,
                      fontWeight: "normal",
                    }}
                  >
                    {" " + item.subtitle}
                  </Text>
                </Text>

                <Text
                  style={{ color: COLORS.white, fontSize: SIZES.small - 2 }}
                >
                  {item.dateTime}
                </Text>
              </View>
              <View style={{ width: 110, alignItems: "center" }}>
                {item.nftImg && (
                  <Image
                    source={item.nftImg}
                    style={{ width: 50, height: 50, borderRadius: SIZES.base }}
                  />
                )}
                {item.buttonText && (
                  <RectButton
                    text={item.buttonText}
                    props={{ backgroundColor: COLORS.secondary }}
                  />
                )}
              </View>
            </View>
          )}
          keyExtractor={(item) => item.dateTime}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Header text="Notifications" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notification;
