import React from "react";
import { View, StyleSheet, PanResponder } from "react-native";
import Svg, { Circle, G, Path } from "react-native-svg";

export default class CircularSlider extends React.Component {
  width = 275;
  height = 275;

  constructor(props) {
    super(props);
    const { width, height } = this;
    const smallestSide = Math.min(width, height);

    const value = this.props.value * 3.6;

    this.state = {
      active: false,
      value: value || 0,
      cx: width / 2,
      cy: height / 2,
      r: (smallestSide / 2) * 0.85,
    };
  }

  componentWillMount = () => {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease,
      onPanResponderGrant: () => this.setState({ active: true }),
    });
  };

  componentWillReceiveProps = ({ value }) => {
    if (value >= 100) value = 99;
    this.setState({ value: Math.round(value * 3.6) });
  };

  polarToCartesian = (angle) => {
    const { cx, cy, r } = this.state,
      a = ((angle - 270) * Math.PI) / 180.0,
      x = cx + r * Math.cos(a),
      y = cy + r * Math.sin(a);
    return { x, y };
  };

  cartesianToPolar = (x, y) => {
    const { cx, cy } = this.state;
    return Math.round(
      Math.atan((y - cy) / (x - cx)) / (Math.PI / 180) + (x > cx ? 270 : 90),
    );
  };

  handlePanResponderMove = ({ nativeEvent: { locationX, locationY } }) => {
    this.setState({
      value: this.cartesianToPolar(locationX, locationY),
    });
  };

  handlePanResponderRelease = () => {
    this.setState({ active: false });
    const value = Math.floor(this.state.value / 3.6);
    if (this.props.onRelease) this.props.onRelease(value);
  };

  render() {
    const { width, height } = this;
    const { cx, cy, r, value } = this.state;

    const startCoord = this.polarToCartesian(0);
    const endCoord = this.polarToCartesian(value);
    const path = `
      M ${startCoord.x} ${startCoord.y}
      A ${r} ${r} 0 ${value > 180 ? 1 : 0} 1 ${endCoord.x} ${endCoord.y}`;

    return (
      <View style={styles.container}>
        <Svg width={width} height={height} style={this.props.style}>
          <Circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="#aaa"
            strokeDasharray={[1, 6]}
            strokeWidth={7}
            fill="none"
            {...this.panResponder.panHandlers}
          />

          <Path stroke="#eee" strokeWidth={7} fill="none" d={path} />

          <G x={endCoord.x - 7.5} y={endCoord.y - 7.5}>
            <Circle
              cx={7.5}
              cy={7.5}
              r={this.state.active ? 20 : 16}
              fill="#fff"
              {...this.panResponder.panHandlers}
            />
          </G>
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  button: {
    margin: 40,
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
  },
});
