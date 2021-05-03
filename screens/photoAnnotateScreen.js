import React, { useState } from "react";
import Svg, { Circle } from "react-native-svg";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground as ImageCanvas,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const PhotoAnnotateScreen = () => {
  const [position, setPosition] = useState([0, 0]);
  const [mode, setMode] = useState(null);
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ImageCanvas
        style={{ flex: 1 }}
        source={{
          uri:
            "https://www.urathanesolutions.com.au/wp-content/uploads/2016/03/Door-crack-small-urathane.jpg",
        }}
      >
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={(evt) => {
            setPosition([evt.nativeEvent.locationX, evt.nativeEvent.locationY]);
          }}
        >
          <View>
            <View style={{ position: "absolute", top: 10, right: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  setMode("circle");
                  console.log("circle", mode);
                }}
              >
                <Text>Circle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setMode("freehand");
                }}
              >
                <Text>Pencil</Text>
              </TouchableOpacity>
            </View>
            <Svg viewBox={`0 0 ${width} ${height}`}>
              {mode === "circle" ? (
                <Circle
                  cx={position[0]}
                  cy={position[1]}
                  r="40"
                  stroke="red"
                  strokeWidth="8"
                />
              ) : null}
            </Svg>
          </View>
        </TouchableWithoutFeedback>
      </ImageCanvas>
    </SafeAreaView>
  );
};

export default PhotoAnnotateScreen;
