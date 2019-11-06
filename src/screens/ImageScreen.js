import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import ImageDetails from '../components/ImageDetails';

const ImageScreen = () =>{


return (

    <View>
        <ImageDetails title="Forest" />
        <ImageDetails title="See" />
        <ImageDetails title="Mountain"/>
        <ImageDetails title="City" />
    </View>

)
}


const style = StyleSheet.create({


})


export default ImageScreen;