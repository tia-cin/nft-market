import { View, Text } from "react-native";
import React from "react";
import { months } from "../constants/dummy";

const AddBid = () => {
  const [price, setPrice] = React.useState<number>(0);
  const [image, setImage] = React.useState<any>();

  const date = new Date();

  console.log(
    `${
      months[date.getMonth()]
    } ${date.getDay()}, ${date.getFullYear()} at ${date.getHours()}:${
      date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes()
    } ${date.getHours() < 12 ? "AM" : "PM"}`
  );

  return (
    <View>
      <Text>AddBid</Text>
    </View>
  );
};

export default AddBid;
