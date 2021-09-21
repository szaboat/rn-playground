import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

export default function ImageSwiper() {
  return (
    <View style={styles.container}>
      <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={400}
        imageHeight={400}
      >
        <Image
          style={{ width: 400, height: 400 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2016/02/20/17/43/excavator-1212472_960_720.jpg",
          }}
        />
      </ImageZoom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
});
