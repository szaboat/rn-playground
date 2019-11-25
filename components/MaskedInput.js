import React, { useState } from "react";
import { Text } from "react-native";
import MaskedInput from "react-native-masked-input-text";

const MaskedInputComponent = () => {
  const [value, setValue] = useState();

  const getProcessedValue = (val) =>
    val ? val.replace(/\D/g, "").substring(0, 11) : null;

  return (
    <>
      <MaskedInput
        onChangeText={setValue}
        value={value}
        mask={"+1-000-000-0000"}
        placeholder={"+1 Phone number"}
        keyboardType="phone-pad"
      />
      <Text>{getProcessedValue(value)}</Text>
    </>
  );
};

export default MaskedInputComponent;
