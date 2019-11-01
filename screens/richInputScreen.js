import React, {useState} from 'react';
import { View, TextInput } from 'react-native';
import styles from "../styles";
import RichInput from "../components/RichInput";

const richInput = ( ) => {
  const [value, onChangeText] = useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <RichInput />
    </View>
  )
};

export default richInput;