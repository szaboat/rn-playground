import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import RadioButtons from "../components/RadioButtons.js";

const RadioButtonScreen = () => {
  var radio_props = [
    { label: "General Contractor", value: 0 },
    { label: "Architect / designer", value: 1 },
    { label: "Subcontractor", value: 2 },
    { label: "Home owner / developer", value: 3 },
    { label: "Super / PM / Foreman", value: 4 },
  ];

  // const [value, setValue] = useState();
  // const onPress = (value) => {
  //   setValue(value);
  // };

  return (
    <View style={styles.container}>
      <RadioButtons options={radio_props}></RadioButtons>
    </View>
  );
};

export default RadioButtonScreen;
