import { View, Text } from "react-native";
import React from "react";
import { months } from "../constants/dummy";

const AddBid = () => {
  const [price, setPrice] = React.useState<number>(0);
  const [image, setImage] = React.useState<any>();

  const date = new Date();

  console.log(months[date.getMonth()]);

  return (
    <View>
      <Text>AddBid</Text>
    </View>
  );
};

export default AddBid;
