import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { black } from "ansi-colors";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    flexDirection:'column',
  },
  box1: {
    backgroundColor:"red",
    height:50,
    width:50,
    alignSelf:'flex-start'
  },
  box2: {
    backgroundColor:'green',
    height:50,
    width:50,
    alignSelf:'center'
  },
  box3: {
    backgroundColor:'blue',
    height:50,
    width:50,
    position:'absolute',
    alignSelf:'flex-end'
    
    

  }
});

export default BoxScreen;
