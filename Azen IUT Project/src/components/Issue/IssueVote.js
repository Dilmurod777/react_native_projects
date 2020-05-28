import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const IssueVote = () => (
  <View style={styles.container}>
    <Text style={styles.number}>256</Text>
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>Vote</Text>
      <Icon name="angle-up" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10
  },
  number: {
    fontSize: 36,
    color: "#13DD34",
    marginRight: 10
  },
  btn: {
    backgroundColor: "#13DD34",
    color: "white",
    padding: 5,
    flexDirection: "row",
    width: 150,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center"
  },
  icon: {
    color: "white",
    marginLeft: 5,
    fontSize: 16
  }
});

export default IssueVote;
