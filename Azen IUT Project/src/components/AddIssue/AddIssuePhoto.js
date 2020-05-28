import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextArea,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const AddIssuePhoto = () => (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder="Photo" />
    <TouchableOpacity style={styles.btn}>
      <Icon style={styles.btnIcon} name="paperclip" />
      <Text style={styles.btnText}>Add Photo</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
  input: {
    width: "50%",
    borderBottomColor: "#787878",
    borderBottomWidth: 1,
    padding: 5
  },
  btn: {
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#13DD34",
    borderRadius: 3,
    padding: 5
  },

  btnIcon: {
    fontSize: 16,
    color: "white"
  },
  btnText: {
    color: "white",
    fontSize: 14,
    marginLeft: 2
  }
});
export default AddIssuePhoto;
