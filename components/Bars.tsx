import { StatusBar, View } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";
import { CircleButton } from "./Buttons";
import { assets, SHADOWS, SIZES } from "../constants";
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
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        zIndex: 1,
      }}
    >
      <CircleButton
        props={{ minWidth: 170, fontSize: SIZES.large, ...SHADOWS.dark }}
        imgUrl={assets.home}
      />
    </View>
  );
};
