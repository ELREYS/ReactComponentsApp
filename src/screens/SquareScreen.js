import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import SquareDetails from "../components/SquareDetails";
import { FlatList } from "react-native-gesture-handler";

const SquareScreen = () => {
  //Function
  const changeColorInc = color => {
    switch (color) {
      case "Red":
        setRed(red + 1);
        console.log(red);
        break;
      case "Green":
        // code block
        setGreen(green + 1);
        console.log(green);
        break;
      case "Blue":
        // code block
        setBlue(blue + 1);
        console.log(blue);
        break;
      default:
      // code block
    }
  };

  const changeColorDec = color => {
    switch (color) {
      case "Red":
        setRed(red - 1);
        console.log(red);
        break;
      case "Green":
        // code block
        setGreen(green - 1);
        console.log(green);
        break;
      case "Blue":
        // code block
        setBlue(blue - 1);
        console.log(blue);
        break;
      default:
      // code block
    }
  };

  const [red, setRed] = useState(Math.floor(Math.random() * 256));
  const [green, setGreen] = useState(Math.floor(Math.random() * 256));
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256));

  //console.log(red + green + blue);

  const currentColor = [red, green, blue];

  //console.log(currentColor);

  const colorObject = [
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
  const [color, setColor] = useState(colorObject);

  return (
    <View>
      <FlatList
        data={color}
        keyExtractor={item => item.index}
        renderItem={({ item }) => {
          return (
            <SquareDetails
              color={item.color}
              buttonTitleM={item.buttonM}
              buttonTitleL={item.buttonL}
              buttonFunctionInc={() => {
                changeColorInc(item.color);
              }}
              buttonFunctionDec={() => {
                changeColorDec(item.color);
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
