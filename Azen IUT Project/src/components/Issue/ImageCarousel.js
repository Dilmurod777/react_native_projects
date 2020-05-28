import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Photo from "../../../images/photo2.jpg";
const ImageCarousel = () => (
  <View style={styles.container}>
    {/* Must be carousel!!! */}
    <Image source={Photo} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start"
  },
  image: {
    width: "100%",
    height: 200
  }
});
export default ImageCarousel;
