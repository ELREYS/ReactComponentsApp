import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';


const SquareDetails = (props) => {


return (

    <View>
        <Text>{props.color}</Text>
        <Button title={props.buttonTitleM}
        onPress={props.buttonFunctionInc}
        />
        <Button title={props.buttonTitleL}
        onPress={props.buttonFunctionDec}
        />
    </View>

);
}


const style = StyleSheet.create({


})


export default SquareDetails;