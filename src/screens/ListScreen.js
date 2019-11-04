import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';



const ListScreen = () => {

    const friends = [
        { name: "Friends #1",age:20 },
        { name: "Friends #2",age:55 },
        { name: "Friends #3",age:65 },
        { name: "Friends #4",age:4 },
        { name: "Friends #5",age:232 },
        { name: "Friends #6",age:22 },
        { name: "Friends #7",age:27 },
        { name: "Friends #8",age:24 },
        { name: "Friends #9",age:98 },
        { name: "Friends #10",age:14 },


    ]

    return (
        <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friends) => friends.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>Name: {item.name} Age: {item.age}</Text>
            }}

        >
        </FlatList>
    );
}

const styles = StyleSheet.create({

    textStyle:{
        marginVertical:50
    }

})

export default ListScreen;