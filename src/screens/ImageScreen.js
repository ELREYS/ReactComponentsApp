import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore="9"
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore="5"
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore="6"
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
