import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "../styles";
import MaskedInputComponent from "../components/MaskedInput";

const maskedInputScreen = () => {
  return (
    <View style={styles.container}>
      <MaskedInputComponent />
    </View>
  );
};

export default maskedInputScreen;
