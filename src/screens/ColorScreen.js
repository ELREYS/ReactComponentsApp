import React,{useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorScreen = () => {

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`
}

const [rgb,setRGB] = useState(randomRGB());


  return (
    <View>
      <Button title="Add a Color" 
      onPress={() => setRGB(randomRGB())}
      />
      <View style={{height:100,width:100,backgroundColor: rgb  }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColorScreen;
