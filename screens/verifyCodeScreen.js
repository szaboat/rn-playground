import React  from 'react';
import { View } from 'react-native';
import styles from "../styles";
import CodeInput from "../components/CodeInput";

const VerifyCodeScreen = ( ) => {
  return (
    <View style={styles.container}>
      <CodeInput />
    </View>
  )
};

export default VerifyCodeScreen;