import React, { useState, useRef } from "react";
import Svg, { Circle } from "react-native-svg";
import {
  Animated,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground as ImageCanvas,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Text,
  PanResponder,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const PhotoAnnotateScreen = () => {
  /* Circle marker */
  const [position, setPosition] = useState([100, 100]);
  const [mode, setMode] = useState(null);
  const { width, height } = useWindowDimensions();
  const [isActive, setIsActive] = useState(false);

  const pan = useRef(new Animated.ValueXY()).current;

  const handlePanResponderMove = ({
    nativeEvent: { locationX, locationY },
  }) => {
    setPosition([Math.round(locationX), Math.round(locationY)]);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setIsActive(true);
      },
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: () => {
        setIsActive(false);
        pan.flattenOffset();
      },
    }),
  ).current;
  /* Circle marker */

  return (
    <SafeAreaView style={styles.container}>
      <ImageCanvas
        style={{ flex: 1 }}
        source={{
          uri:
            "https://www.urathanesolutions.com.au/wp-content/uploads/2016/03/Door-crack-small-urathane.jpg",
        }}
      >
        <View>
          <View style={{ position: "absolute", top: 10, right: 10 }}>
            <TouchableOpacity
              onPress={() => {
                setMode("circle");
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
                strokeWidth={isActive ? "12" : "8"}
                {...panResponder.panHandlers}
              />
            ) : null}
          </Svg>
        </View>
      </ImageCanvas>
    </SafeAreaView>
  );
};

export default PhotoAnnotateScreen;