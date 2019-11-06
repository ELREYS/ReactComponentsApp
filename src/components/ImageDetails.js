import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ImageDetails = (props) => {
    console.log(props);
    
  return <Text>{props.title}</Text>;
};

const style = StyleSheet.create({});

export default ImageDetails;
