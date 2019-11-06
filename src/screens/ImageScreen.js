import React,{useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

import ImageDetails from "../components/ImageDetails";



const ImageScreen = () => {


  const [_imageScore,setImageScore] = useState(0);
  

  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore= {_imageScore}
        setImageScore={() => setImageScore(_imageScore + 1)}
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={_imageScore}
        setImageScore={() => setImageScore(_imageScore + 1)}
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={_imageScore}
        setImageScore={() => setImageScore(_imageScore + 1)}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
