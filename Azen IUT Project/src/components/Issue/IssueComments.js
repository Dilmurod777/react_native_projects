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
import Comment from "../../components/Issue/Comment";
const IssueComments = () => (
  <View style={styles.container}>
    <View>
      <TextInput
        placeholder="Comment here..."
        multiline={true}
        numberOfLines={4}
        style={styles.border}
      />
      <TouchableOpacity>
        <View style={styles.btnSign}>
          <Text style={styles.textSign}>Leave Comment</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.comments}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  border: {
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 13
  },
  btnSign: {
    margin: 0,
    backgroundColor: "#FFC44F",
    width: "100%",
    borderRadius: 7,
    padding: 10,
    marginTop: 20
  },
  textSign: {
    textAlign: "center",
    color: "white",
    fontSize: 16
  },
  comments: {
    marginTop: 25
  }
});
export default IssueComments;
