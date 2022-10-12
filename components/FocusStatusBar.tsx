import { StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";

const FocusStatusBar: React.FC<{
  background: string;
  props?: any;
}> = ({ background, props }) => {
  const isFocus = useIsFocused();

  return isFocus ? (
    <StatusBar {...props} animated={true} backgroundColor={background} />
  ) : null;
};

export default FocusStatusBar;
