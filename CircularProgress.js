import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Svg, { Path, Circle } from 'react-native-svg';


const styles = StyleSheet.create({
  progress: {
    alignItems: 'center', justifyContent: 'center' 
  }
})

const percentToDegrees = (percent) => parseInt(Math.max(Math.min(percent, 99), 0) * 3.6);

const CircularProgress = ({progress}) => {
  const animatedValue = new Animated.Value(0);
  const [progressAnim] = useState(animatedValue);

  const [progressInDegrees, setProgressInDegrees] = useState(0);

  animatedValue.addListener((p) => {
    setProgressInDegrees(p.value);
  });

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: percentToDegrees(progress),
      duration: 300,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {

    const angleInRadians = (angleInDegrees-0) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  
  function describeArc(x, y, radius, startAngle, endAngle){
  
      const start = polarToCartesian(x, y, radius, endAngle);
      const end = polarToCartesian(x, y, radius, startAngle);
  
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
      const d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");
  
      return d;       
  }
  

  return ( 
    <View style={[ StyleSheet.absoluteFill, styles.progress ]}>
      <Svg height="200" width="200" viewBox="0 0 200 200">
        <Circle x={100} y={100} r={50} fill="none" stroke="#ffffff" strokeWidth="8" strokeOpacity="0.4" />
        {progress == 100 ?
        <Circle x={100} y={100} r={50} fill="none" stroke="#ffffff" strokeWidth="8" strokeOpacity="1" />
          :
        <Path d={describeArc(100, 100, 50, 0, progressInDegrees)} 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="8" 
          strokeOpacity="1" />
        }
      </Svg>
    </View>
  )
}

export default CircularProgress;