import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View, Button } from "react-native";

const reverseString = str => {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
};

const TextScreen = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdLengthPopUp, setpwdPopUpWarning] = useState("");
  return (
    <View>
      <Text>Please enter your email:</Text>
      <TextInput
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={value => {
          setName(value);
        }}
      ></TextInput>
      <Text>My name is {name}</Text>
      <Text>My name is {name.length} sign long.</Text>
      <Text>My mirrored name is {reverseString(name)}</Text>
      <Text>My name capitalized is {name.toLocaleUpperCase()}</Text>
      <Text>Please enter your password:</Text>
      <TextInput
        textContentType="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        style={styles.input}
        value={pwd}
        onChangeText={pwd => {
          setPwd(pwd);
        }}
      />
      {pwd.length < 4 ? <Text>Please add more characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
