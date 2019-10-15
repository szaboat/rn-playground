import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';


const styles = StyleSheet.create({
  progress: {
    alignItems: 'center', justifyContent: 'center' 
  }
})

const CircularProgress = ({progress}) => {
  const progressInDegrees = progress * 3.6;

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
        <Path d={describeArc(100, 100, 50, 0, progressInDegrees)} 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="8" 
          strokeOpacity="1" />
      </Svg>
    </View>
  )
}

export default CircularProgress;