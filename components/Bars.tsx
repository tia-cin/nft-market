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
        flex: 0.1,
        position: "relative",
        bottom: 0,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          top: 15,
          right: 17,
        }}
      >
        <CircleButton
          props={{
            minWidth: 40,
            fontSize: SIZES.large,
          }}
          imgUrl={assets.home}
        />
        <CircleButton
          imgUrl={assets.searchblack}
          props={{
            minWidth: 40,
            color: COLORS.black,
            fontSize: SIZES.large,
          }}
        />
        <CircleButton
          imgUrl={assets.plus}
          props={{
            minWidth: 40,
            fontSize: SIZES.large,
          }}
        />
        <CircleButton
          imgUrl={assets.notification}
          props={{
            minWidth: 40,
            fontSize: SIZES.large,
          }}
        />
        <CircleButton
          imgUrl={assets.user}
          props={{
            minWidth: 40,
            fontSize: SIZES.large,
          }}
        />
      </View>
    </View>
  );
};
