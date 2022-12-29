import { StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";
import { FocusStatusBarProps, NavigateProps } from "../types";

export const FocusStatusBar: React.FC<FocusStatusBarProps> = ({
  background,
  props,
}) => {
  const isFocus = useIsFocused();

  return isFocus ? (
    <StatusBar {...props} animated={true} backgroundColor={background} />
  ) : null;
};
