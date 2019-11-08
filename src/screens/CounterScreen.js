import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const PAYLOADS = 15

const reducer = (state,action) =>{
  //state === {counter:number}
  //action === {type: increment || decrement: , payload: 1 }
  
  
  switch (action.type) {
    case 'increment':
        console.log(action.type);
        return {...state, counter: state.counter + action.payload  }
      break;
    case 'decrement':
        console.log(action.type);
        return {...state, counter: state.counter - action.payload  }
    break;
    default:
      break;
  }

  //return {...state, counter: state.counter + action.payload  }

};


const CounterScreen = () => {
  const [state, dispatch] =  useReducer(reducer,{counter:0})

  return (
    <View>
      <Button title="Increase" onPress={() => 
        dispatch({type:'increment', payload: PAYLOADS}) } />
      <Button title="Decrease" onPress={() => 
        dispatch({type:'decrement', payload: PAYLOADS})} />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
