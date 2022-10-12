import { StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";

const FocusStatusBar: React.FC<{
  background: string;
  barStyle: any;
  translucent: boolean;
}> = ({ background, barStyle, translucent }) => {
  const isFocus = useIsFocused();

  return isFocus ? (
    <StatusBar
      barStyle={barStyle}
      translucent={translucent}
      animated={true}
      backgroundColor={background}
    />
  ) : null;
};

export default FocusStatusBar;
