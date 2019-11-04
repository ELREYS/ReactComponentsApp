import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentScreen = () => {

    const name = "Giuseppe";

    return (
            <View>
            <Text style={styles.textStyle1}>Lavoriamo con React Native</Text>
            <Text style={styles.textStyle2}>My name is {name} </Text>
            </View>

    )};

const styles = StyleSheet.create({
textStyle1:{
    fontSize:45
},
textStyle2:{
    fontSize:20
},
});

export default ComponentScreen;