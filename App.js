import React, {useState} from 'react';
import { StyleSheet, Image, View, Slider } from 'react-native';
import CircularProgress from './CircularProgress';

export default function App() {
  [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => setValue(value)}
      />
      <View>
        <Image
          style={{width: 320, height: 240}}
          source={{uri: 'https://loremflickr.com/320/240/construction'}} />
        <CircularProgress progress={value} /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
