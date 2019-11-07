import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there !</Text>
      <Button
        title="Go to ComponentsDemo"
        onPress={() => navigation.navigate("Components")}
      ></Button>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      ></Button>

      <Button
        title="Go to ImageScreen Demo"
        onPress={() => navigation.navigate("Images")}
      ></Button>

      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      ></Button>

      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      ></Button>

      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf:'center',
    fontSize: 30
  }
});

export default HomeScreen;
