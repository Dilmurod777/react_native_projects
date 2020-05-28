import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextArea,
  TextInput
} from "react-native";
import AddIssuePhoto from "./AddIssuePhoto";
import AddIssueCat from "./AddIssueCat";
const AddIssue = () => (
  <View style={styles.container}>
    <TextInput placeholder="Enter title here..." style={styles.input} />
    <TextInput
      placeholder="Enter description here..."
      multiline={true}
      numberOfLines={4}
      style={styles.textArea}
    />
    <AddIssuePhoto />
    <AddIssueCat />
    <Text style={styles.textHeader}>Number of days to resolve the issue:</Text>
    <View>
      <TextInput style={styles.input} placeholder="Number of Days..." />
    </View>
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>Preview</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 25
  },
  input: {
    borderBottomColor: "#787878",
    borderBottomWidth: 1,
    padding: 5,
    width: "80%"
  },
  textArea: {
    borderColor: "#787878",
    borderWidth: 1,
    borderRadius: 13,
    marginTop: 33,
    marginBottom: 33
  },
  input: {
    width: "50%",
    borderBottomColor: "#787878",
    borderBottomWidth: 1,
    padding: 5
  },
  btn: {
    marginTop: 55,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    backgroundColor: "#13DD34",
    borderRadius: 3,
    padding: 5
  },

  textHeader: {
    marginTop: 33,
    marginBottom: 15,
    fontSize: 16
  },
  btnText: {
    color: "white",
    fontSize: 14,
    marginLeft: 2
  }
});
export default AddIssue;
