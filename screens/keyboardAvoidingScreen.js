import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from "react-native";
import styles from "../styles";

const localStyles = StyleSheet.create({
  stretch: {
    // flexDirection: "column",
    // justifyContent: "space-between",
    flex: 1,
  },
});

const keyboardAvoidingScreen = () => {
  return (
    <KeyboardAvoidingView
      style={[styles.container, localStyles.stretch]}
      behavior="padding"
      enabled
    >
      <View
        style={{
          width: "100%",
          flex: 1,
          // height: 50,
          backgroundColor: "blue",
        }}
      >
        <Text>
          Лорем ипсум долор сит амет, те новум инвидунт вел, сит не яуандо
          демоцритум.
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: "green",
        }}
      >
        <Text>Foobar</Text>
      </View>

      <View
        style={{
          width: "100%",
          flex: 2,
          backgroundColor: "yellow",
        }}
      />

      <TextInput
        style={{ borderColor: "blue", flex: 1, borderWidth: 2, padding: 10 }}
        placeholder="Foobar placeholder"
      ></TextInput>

      <View style={{ width: 50, height: 50, flex: 1, backgroundColor: "red" }}>
        <Text>Submit</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default keyboardAvoidingScreen;
