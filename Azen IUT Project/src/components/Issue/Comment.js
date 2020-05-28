import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Photo1 from "../../../images/prof1.jpg";
import Photo2 from "../../../images/prof2.jpg";
const Comment = () => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Image source={Photo1} style={styles.image} />
    </View>
    <View style={styles.right}>
      <View style={styles.top}>
        <Text style={styles.name}>Ryan Reynolds</Text>
        <Text style={styles.date}>17:34, 28.04.19</Text>
      </View>
      <View>
        <Text style={styles.text}>
          I agree with this. I invited my relatives to my house and they saw
          this chaos and what I felt then was like..I was ashamed that I live
          nearby such a trashy street! I want the government resolve this
          problem! Why I pay so much taxes then?
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Answer</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    borderBottomColor: "#8F8F8F",
    borderBottomWidth: 1,
    paddingBottom: 15
  },
  left: {
    width: "20%"
  },
  right: {
    width: "80%"
  },
  image: {
    width: 50,
    height: 50
  },
  top: {
    flexDirection: "row",
    width: "100%"
  },
  name: {
    color: "#0085FF",
    width: "50%",
    fontSize: 14,
    textDecorationLine: "underline"
  },
  date: {
    width: "50%",
    textAlign: "right",
    fontSize: 12
  },
  text: {
    fontSize: 12,
    marginTop: 10
  },
  btn: {
    marginTop: 5
  },
  btnText: {
    textAlign: "right"
  }
});
export default Comment;
