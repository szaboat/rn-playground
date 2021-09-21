import React, { useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const InputFocusScreen = () => {
  const [text, onChangeText] = React.useState(null);
  const inputRef = useRef();

  return (
    <KeyboardAvoidingView behavior={"padding"}>
      <ScrollView>
        <View style={{ height: 100 }}></View>

        <TouchableOpacity
          onPress={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
          style={{ backgroundColor: "red", padding: 10 }}
        >
          <Text>{"Focus input"}</Text>
        </TouchableOpacity>

        <View style={{ height: 500 }}></View>

        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InputFocusScreen;
