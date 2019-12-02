import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f6f7",
    paddingBottom: 10,
  },
  buttonInput: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#f5f6f7",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInputSelected: {
    backgroundColor: "#4bc55d",
  },
  buttonInputIcon: {
    marginTop: 2,
  },
  buttonLabel: {
    marginLeft: 5,
    marginTop: 5,
  },
});

const RadioButtons = ({ options }) => {
  const [selected, setSelected] = useState();

  return (
    <View>
      {options.map((element) => (
        <RadioButtonWithLabel
          label={element.label}
          value={element.value}
          key={element.value}
          selected={selected == element.value}
          onSelect={setSelected}
        />
      ))}
    </View>
  );
};

const RadioButtonWithLabel = ({ label, value, selected, onSelect }) => (
  <TouchableOpacity
    key={value}
    onPress={() => {
      onSelect(value);
    }}
  >
    <View style={styles.button}>
      {selected ? (
        <View style={[styles.buttonInput, styles.buttonInputSelected]}>
          <Ionicons
            style={styles.buttonInputIcon}
            name="md-checkmark"
            size={16}
            color="white"
          />
        </View>
      ) : (
        <View style={[styles.buttonInput]}></View>
      )}
      <View style={styles.buttonLabel}>
        <Text>{label}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default RadioButtons;
