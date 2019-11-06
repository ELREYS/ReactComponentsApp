import React from "react";
import { Image, Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ImageDetails = ({
  imageSource,
  title,
  imageScore,
  setImageScore
}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <TouchableOpacity onPress={setImageScore}>
        <Text>Image score: {imageScore}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetails;
