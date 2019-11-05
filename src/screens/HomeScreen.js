import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <Text style={styles.text}>Hi there !</Text>
      <Button 
      title="Go to ComponentsDemo" 
      onPress={() => navigation.navigate("Components")
      }>

      </Button>
      <Button title="Go to List Demo"
      onPress={() => navigation.navigate("List")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
