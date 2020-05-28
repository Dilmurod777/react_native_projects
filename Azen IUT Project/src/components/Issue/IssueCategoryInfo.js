import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const IssueCategoryInfo = () => (
  <View style={styles.container}>
    <Icon name="trash" style={styles.icon} />
    <View>
      <Text style={styles.text}>Category: </Text>
      <TouchableOpacity>
        <Text style={styles.link}>Cleaning and sanitary</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    fontSize: 26,
    marginRight: 5
  },
  text: {
    fontWeight: "bold",
    fontSize: 14
  },
  link: {
    textDecorationLine: "underline",
    fontSize: 14
  }
});
export default IssueCategoryInfo;
