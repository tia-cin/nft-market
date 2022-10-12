import { StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";

interface FocusStatusBarProps {
  background: string;
}

const FocusStatusBar: React.FC<FocusStatusBarProps> = ({ background }) => {
  const isFocus = useIsFocused();

  return isFocus ? (
    <StatusBar animated={true} backgroundColor={background} />
  ) : null;
};

export default FocusStatusBar;
