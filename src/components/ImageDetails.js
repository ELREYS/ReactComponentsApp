import React from "react";
import { Image,Text, StyleSheet, View, Button } from "react-native";

const ImageDetails = (props) => {
    console.log(props);
    
  return( 
  <View>
    <Image source={props.imageSource} />
    <Text>{props.title}</Text>
    <Text>Image score: {props.imageScore}</Text>
  </View>
  
  )

};

const style = StyleSheet.create({});

export default ImageDetails;
