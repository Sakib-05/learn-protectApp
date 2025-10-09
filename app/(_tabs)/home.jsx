import React from "react";
import { View, Text, StyleSheet, TextInput, Image, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={{ flexDirection: "row" , alignItems:""}}>
        <Text>some text</Text>
        <TextInput style={styles.TextInput} inputType="text" ></TextInput>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },

  TextInput: {
    borderColor: "gray",
    borderWidth: 1
  },
});
