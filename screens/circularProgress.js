import React, {useState, useEffect} from 'react';
import { Image, View, Slider } from 'react-native';
import CircularProgress from '../CircularProgress';
import styles from "../styles";


function CircularProgressScreen() {
  [value, setValue] = useState(0);

  useEffect(() => { 
    setInterval(() => {
      if (value < 100) {
        setValue(value + 0.1);
      }
    }, 50);
  }, []);

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

export default CircularProgressScreen;