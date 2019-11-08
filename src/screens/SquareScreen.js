import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import SquareDetails from "../components/SquareDetails";
import { FlatList } from "react-native-gesture-handler";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state === {red:number,green:number,blue:number}
  //action === {colorToChange: red || green || blue , amount: 15 || -15}

  switch (action.colorToChange) {
    case "Red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "Green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "Blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      break;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  //Function

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

  return (
    <View>
      <FlatList
        data={colorArray}
        keyExtractor={item => item.index}
        renderItem={({ item }) => {
          return (
            <SquareDetails
              color={item.color}
              buttonTitleM={item.buttonM}
              buttonTitleL={item.buttonL}
              buttonFunctionInc={() => {
                dispatch({
                  colorToChange: item.color,
                  amount: COLOR_INCREMENT
                });
              }}
              buttonFunctionDec={() => {
                dispatch({
                  colorToChange: item.color,
                  amount: -1 * -COLOR_INCREMENT
                });
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
