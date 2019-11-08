import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import SquareDetails from "../components/SquareDetails";
import { FlatList } from "react-native-gesture-handler";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  //Hooks
  const [red, setRed] = useState(Math.floor(Math.random() * 256));
  const [green, setGreen] = useState(Math.floor(Math.random() * 256));
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256));

  //Function

  const setColor = (color, change) => {
    switch (color) {
      case "Red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        console.log(red);
        return;
      case "Green":
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        console.log(green);
        return;
      case "Blue":
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        console.log(blue);
        return;
      default:
      // code block
    }
  };

  //console.log(red + green + blue);

  const currentColor = [red, green, blue];

  //console.log(currentColor);

  const colorArray = [
    {
      color: "Red",
      buttonM: "More Red",
      buttonL: "Less Red",
      index: "R"
    },
    {
      color: "Green",
      buttonM: "More Green",
      buttonL: "Less Green",
      index: "G"
    },
    {
      color: "Blue",
      buttonM: "More Blue",
      buttonL: "Less Blue",
      index: "B"
    }
  ];
  const [colorObject, setColorObject] = useState(colorArray);

  return (
    <View>
      <FlatList
        data={colorObject}
        keyExtractor={item => item.index}
        renderItem={({ item }) => {
          return (
            <SquareDetails
              color={item.color}
              buttonTitleM={item.buttonM}
              buttonTitleL={item.buttonL}
              buttonFunctionInc={() => {
                setColor(item.color, COLOR_INCREMENT);
              }}
              buttonFunctionDec={() => {
                setColor(item.color, -COLOR_INCREMENT);
              }}
            ></SquareDetails>
          );
        }}
      />
      <View
        style={{
          alignSelf: "center",
          height: 100,
          width: 100,
          margin: 40,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
