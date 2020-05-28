import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const IssueSearch = () => (
  <View style={styles.container}>
    <View style={styles.border}>
      <TextInput
        style={styles.textInput}
        placeholder={"Enter your text here...."}
      />
      <TouchableOpacity style={styles.icon}>
        <Icon name="search" size={20} color="#929292" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  textInput: {
    fontSize: 14,
    color: "#666666",
    width: "90%"
  },
  border: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#BAB7B7",
    borderRadius: 16
  },
  icon: {
    justifyContent: "center",
    // backgroundColor: "red",
    width: "10%",
    alignItems: "flex-end",
    padding: 5
  }
});

export default IssueSearch;
