import { StatusBar, View } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";
import { CircleButton } from "./Buttons";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { FocusStatusBarProps } from "../types";

export const FocusStatusBar: React.FC<FocusStatusBarProps> = ({
  background,
  props,
}) => {
  const isFocus = useIsFocused();

  return isFocus ? (
    <StatusBar {...props} animated={true} backgroundColor={background} />
  ) : null;
};

export const BottomBar = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 70,
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <CircleButton
        props={{
          minWidth: 40,
          bottom: -20,
          right: 120,
          fontSize: SIZES.large,
        }}
        imgUrl={assets.home}
      />
      <CircleButton
        imgUrl={assets.searchblack}
        props={{
          minWidth: 40,
          bottom: -20,
          right: 50,
          color: COLORS.black,
          fontSize: SIZES.large,
        }}
      />
      <CircleButton
        imgUrl={assets.plus}
        props={{
          minWidth: 40,
          bottom: -20,
          left: -20,
          fontSize: SIZES.large,
        }}
      />
      <CircleButton
        imgUrl={assets.notification}
        props={{
          minWidth: 40,
          bottom: -20,
          left: 50,
          fontSize: SIZES.large,
        }}
      />
      <CircleButton
        imgUrl={assets.person01}
        props={{
          minWidth: 40,
          bottom: -20,
          left: 120,
          fontSize: SIZES.large,
        }}
      />
    </View>
  );
};
